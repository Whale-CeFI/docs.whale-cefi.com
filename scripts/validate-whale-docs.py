#!/usr/bin/env python3
"""Validate a Whale CeFi GitBook package against core project invariants."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path


REQUIRED_ROOT_FILES = (".gitbook.yaml", "README.md", "SUMMARY.md")
LEGACY_DOMAINS = ("whalesify.com", "whale-earn.com")
PLACEHOLDER_PATTERN = re.compile(
    r"(?i)(\bTBD\b|\bTODO\b|\bREPLACE(?:[_ -]?ME)\b|<insert\b|example\.com|0x0{20,})"
)
SUMMARY_LINK_PATTERN = re.compile(r"\[[^\]]+\]\(([^)#?]+\.md)(?:#[^)]+)?\)")
CANONICAL_PATTERN = re.compile(r'^canonical:\s*["\']([^"\']+)["\']\s*$', re.MULTILINE)
H1_PATTERN = re.compile(r"^#\s+\S.+$", re.MULTILINE)
SUPERSEDED_FOUNDATION_NAME = "Whale Earn " + "Foundation"
SUPERSEDED_RELEASE_PATTERN = re.compile(
    "|".join(
        (
            "private[- ]" + "fu" + "ture-" + "state",
            "release " + "candidate",
            "blocked pending " + "evidence",
            re.escape(SUPERSEDED_FOUNDATION_NAME),
        )
    ),
    re.IGNORECASE,
)
FORWARD_LOOKING_PATTERN = re.compile(
    "|".join(
        (
            r"\bplan" + r"ned\b",
            r"\bnot " + r"yet\b",
            r"\bclosed-" + r"alpha\b",
            r"\broad" + r"map\b",
            r"\bcoming\s+soon\b",
            r"\bwe\s+plan\b",
        )
    ),
    re.IGNORECASE,
)

EXPECTED_PRODUCTS = {
    "stablecoin-flexible-v1": {
        "term_days": None,
        "monthly_rate": Decimal("0.060"),
        "term_reward_rate": None,
    },
    "stablecoin-lock30-v1": {
        "term_days": 30,
        "monthly_rate": Decimal("0.092"),
        "term_reward_rate": Decimal("0.092"),
    },
    "stablecoin-lock90-v1": {
        "term_days": 90,
        "monthly_rate": Decimal("0.123"),
        "term_reward_rate": Decimal("0.369"),
    },
    "stablecoin-lock180-v1": {
        "term_days": 180,
        "monthly_rate": Decimal("0.147"),
        "term_reward_rate": Decimal("0.882"),
    },
    "stablecoin-lock365-v1": {
        "term_days": 365,
        "monthly_rate": Decimal("0.168"),
        "term_reward_rate": Decimal("2.016"),
    },
}


class Findings:
    def __init__(self) -> None:
        self.errors: list[str] = []
        self.warnings: list[str] = []
        self.passed: list[str] = []

    def error(self, message: str) -> None:
        self.errors.append(message)

    def warning(self, message: str) -> None:
        self.warnings.append(message)

    def ok(self, message: str) -> None:
        self.passed.append(message)


def read_text(path: Path, findings: Findings) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError) as exc:
        findings.error(f"Cannot read {path}: {exc}")
        return ""


def frontmatter_value(text: str, key: str) -> str | None:
    match = re.match(r"^---\n([\s\S]*?)\n---\n", text)
    if not match:
        return None
    lines = match.group(1).splitlines()
    for index, line in enumerate(lines):
        prefix = f"{key}:"
        if not line.startswith(prefix):
            continue
        raw = line[len(prefix):].strip()
        if raw in {">", ">-", ">+", "|", "|-", "|+"}:
            values: list[str] = []
            for child in lines[index + 1:]:
                if child and not child[0].isspace():
                    break
                if child.strip():
                    values.append(child.strip())
            return " ".join(values) if raw.startswith(">") else "\n".join(values)
        if len(raw) >= 2 and raw[0] == raw[-1] == '"':
            try:
                return json.loads(raw)
            except json.JSONDecodeError:
                return raw[1:-1]
        if len(raw) >= 2 and raw[0] == raw[-1] == "'":
            return raw[1:-1].replace("''", "'")
        return raw or None
    return None


def load_json(path: Path, findings: Findings) -> object | None:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        findings.warning(f"Missing optional structured record: {path.relative_to(path.parent.parent)}")
    except (OSError, UnicodeDecodeError, json.JSONDecodeError) as exc:
        findings.error(f"Invalid JSON {path}: {exc}")
    return None


def validate_required_files(root: Path, findings: Findings) -> None:
    missing = [name for name in REQUIRED_ROOT_FILES if not (root / name).is_file()]
    if missing:
        findings.error(f"Missing required root files: {', '.join(missing)}")
    else:
        findings.ok("Required GitBook root files exist")


def validate_summary(root: Path, findings: Findings) -> set[Path]:
    summary_path = root / "SUMMARY.md"
    if not summary_path.is_file():
        return set()

    summary = read_text(summary_path, findings)
    raw_links = SUMMARY_LINK_PATTERN.findall(summary)
    if not raw_links:
        findings.error("SUMMARY.md contains no Markdown page links")
        return set()

    seen: set[str] = set()
    linked_paths: set[Path] = set()
    for raw_link in raw_links:
        normalized = raw_link.replace("\\", "/")
        if normalized in seen:
            findings.error(f"Duplicate SUMMARY.md route: {normalized}")
        seen.add(normalized)

        target = (root / normalized).resolve()
        try:
            target.relative_to(root.resolve())
        except ValueError:
            findings.error(f"SUMMARY.md link escapes the documentation root: {normalized}")
            continue

        if not target.is_file():
            findings.error(f"Broken SUMMARY.md link: {normalized}")
        else:
            linked_paths.add(target)

    if not any(message.startswith("Broken SUMMARY") for message in findings.errors):
        findings.ok(f"SUMMARY.md resolves {len(linked_paths)} unique pages")
    return linked_paths


def validate_markdown(
    root: Path,
    linked_paths: set[Path],
    canonical_origin: str,
    findings: Findings,
) -> None:
    markdown_files = sorted(root.rglob("*.md"))
    canonical_owners: dict[str, Path] = {}

    for path in markdown_files:
        text = read_text(path, findings)
        relative = path.relative_to(root)

        lowered = text.lower()
        for legacy_domain in LEGACY_DOMAINS:
            if legacy_domain in lowered:
                findings.error(f"Legacy domain '{legacy_domain}' in {relative}")

        if re.search(r"(?i)\bmonthly\s+(APR|APY)\b", text):
            findings.error(f"Invalid monthly APR/APY terminology in {relative}")

        for line_number, line in enumerate(text.splitlines(), start=1):
            if "Whale Earn" not in line:
                continue
            if "histor" not in line.lower() and "legacy" not in line.lower():
                findings.error(
                    f"Uncontrolled legacy brand in {relative}:{line_number}: {line.strip()[:140]}"
                )

        placeholder = PLACEHOLDER_PATTERN.search(text)
        if placeholder:
            findings.warning(
                f"Placeholder-like token '{placeholder.group(0)}' in {relative}"
            )

        if path.resolve() in linked_paths:
            if re.search(r"\bAbu Dhabi\b|\bUnited Arab Emirates\b|\bUAE\b", text):
                findings.error(f"Superseded Abu Dhabi entity/perimeter language in {relative}")
            if frontmatter_value(text, "document_status") != "official-release":
                findings.error(f"Reader page is not marked official-release: {relative}")
            if SUPERSEDED_RELEASE_PATTERN.search(text) or FORWARD_LOOKING_PATTERN.search(text):
                findings.error(f"Forward-looking or superseded release language in {relative}")

            h1s = H1_PATTERN.findall(text)
            if len(h1s) != 1:
                findings.error(f"Expected exactly one H1 in {relative}; found {len(h1s)}")

            canonical = frontmatter_value(text, "canonical")
            if not canonical:
                findings.warning(f"Reader page has no canonical URL: {relative}")
            else:
                root_landing = relative == Path("README.md") and canonical == "https://whale-cefi.com/documentation"
                if (
                    not root_landing
                    and not canonical.startswith(canonical_origin.rstrip("/") + "/")
                    and canonical != canonical_origin.rstrip("/")
                ):
                    findings.error(
                        f"Canonical URL outside '{canonical_origin}' in {relative}: {canonical}"
                    )
                previous = canonical_owners.get(canonical)
                if previous:
                    findings.error(
                        f"Duplicate canonical URL '{canonical}' in {previous.relative_to(root)} and {relative}"
                    )
                canonical_owners[canonical] = path

    findings.ok(f"Scanned {len(markdown_files)} Markdown files")


def validate_json_files(root: Path, findings: Findings) -> None:
    json_files = sorted(root.rglob("*.json"))
    for path in json_files:
        load_json(path, findings)
    if json_files:
        findings.ok(f"Parsed {len(json_files)} JSON files")


def validate_product_versions(
    root: Path,
    enforce_current_canon: bool,
    findings: Findings,
) -> None:
    path = root / "data" / "product-versions.json"
    payload = load_json(path, findings)
    if not isinstance(payload, dict):
        return

    if payload.get("rate_unit") != "monthly_reward_rate":
        findings.error("data/product-versions.json must use rate_unit 'monthly_reward_rate'")

    records = payload.get("records")
    if not isinstance(records, list):
        findings.error("data/product-versions.json records must be an array")
        return

    ids: set[str] = set()
    for record in records:
        if not isinstance(record, dict):
            findings.error("Product version record must be an object")
            continue
        product_id = str(record.get("product_id", ""))
        if not product_id:
            findings.error("Product version record is missing product_id")
            continue
        if product_id in ids:
            findings.error(f"Duplicate product_id: {product_id}")
        ids.add(product_id)

    if not enforce_current_canon:
        findings.ok(f"Validated {len(records)} product-version identities")
        return

    by_id = {str(record.get("product_id")): record for record in records if isinstance(record, dict)}
    for product_id, expected in EXPECTED_PRODUCTS.items():
        actual = by_id.get(product_id)
        if not actual:
            findings.error(f"Missing current-canon product: {product_id}")
            continue
        if actual.get("term_days") != expected["term_days"]:
            findings.error(f"{product_id} has unexpected term_days")
        try:
            monthly_rate = Decimal(str(actual.get("monthly_rate")))
        except Exception:
            findings.error(f"{product_id} has invalid monthly_rate")
            continue
        if monthly_rate != expected["monthly_rate"]:
            findings.error(
                f"{product_id} monthly_rate {monthly_rate} != {expected['monthly_rate']}"
            )
        expected_term = expected["term_reward_rate"]
        actual_term_raw = actual.get("term_reward_rate")
        actual_term = Decimal(str(actual_term_raw)) if actual_term_raw is not None else None
        if actual_term != expected_term:
            findings.error(
                f"{product_id} term_reward_rate {actual_term} != {expected_term}"
            )

    extra = sorted(ids - set(EXPECTED_PRODUCTS))
    if extra:
        findings.warning(
            "Additional product versions are present; confirm owner approval: " + ", ".join(extra)
        )
    findings.ok("Checked current USDT/USDC rate canon")


def validate_current_legal_record(root: Path, findings: Findings) -> None:
    path = root / "data" / "legal-entities.json"
    payload = load_json(path, findings)
    if not isinstance(payload, dict):
        return
    records = payload.get("records")
    if not isinstance(records, list):
        findings.error("data/legal-entities.json records must be an array")
        return

    pulpo = next(
        (
            record
            for record in records
            if isinstance(record, dict)
            and record.get("legal_name") == "Pulpo Fintech, S.A. de C.V."
        ),
        None,
    )
    if pulpo is None:
        findings.error("Current entity map is missing Pulpo Fintech, S.A. de C.V.")
    elif (
        pulpo.get("registration_number") != "PSAD-0023"
        or pulpo.get("jurisdiction") != "El Salvador"
        or pulpo.get("record_type") != "customer-contracting-and-operating-entity"
    ):
        findings.error("Pulpo entity record does not match the approved El Salvador service map")
    else:
        findings.ok("Checked current Pulpo PSAD-0023 entity record")

    superseded_entities = {
        SUPERSEDED_FOUNDATION_NAME,
        "Whale Foundation",
        "Whale CeFi Services Ltd",
        "Whale CeFi Custody SPV Ltd",
    }
    if any(
        isinstance(record, dict) and record.get("legal_name") in superseded_entities
        for record in records
    ):
        findings.error("Superseded Abu Dhabi entity remains in legal registry")


def validate_gamification(root: Path, findings: Findings) -> None:
    payload = load_json(root / "data" / "gamification-config.json", findings)
    if not isinstance(payload, dict):
        return
    expected = [
        (1, "Plankton", 0, "1.00", "10", "10.00", 10, "eligible-deposit-daily-reward", "0.005"),
        (2, "Minnow", 2100, "1.03", "15", "15.45", 15, "eligible-deposit-daily-reward", "0.0075"),
        (3, "Puffer", 5900, "1.06", "20", "21.20", 21, "eligible-deposit-daily-reward", "0.001"),
        (4, "Dolphin", 11600, "1.10", "30", "33.00", 33, "eligible-deposit-daily-reward", "0.0125"),
        (5, "Orca", 19200, "1.15", "40", "46.00", 46, "eligible-deposit-daily-reward", "0.015"),
        (6, "Blue Whale", 29400, "1.20", "60", "72.00", 72, "eligible-deposit-daily-reward", "0.02"),
        (7, "Shark", 44100, "1.26", "90", "113.40", 113, "company-net-revenue-monthly-reward", "0.002"),
        (8, "Leviathan", 62800, "1.33", "120", "159.60", 160, "company-net-revenue-monthly-reward", "0.002"),
        (9, "Kraken", 87300, "1.41", "150", "211.50", 212, "company-net-revenue-monthly-reward", "0.002"),
        (10, "Megalodon", 120000, "1.50", "180", "270.00", 270, "company-net-revenue-monthly-reward", "0.002"),
    ]
    levels = payload.get("levels")
    if not isinstance(levels, list) or len(levels) != len(expected):
        findings.error("Gamification registry must contain the ten live levels")
        return
    for index, expected_row in enumerate(expected):
        level = levels[index]
        reward = level.get("balance_reward", {})
        actual_row = (
            level.get("level"),
            level.get("name"),
            level.get("xp_threshold"),
            level.get("xp_multiplier"),
            level.get("daily_xp_claim_base"),
            level.get("daily_xp_claim_credited"),
            level.get("daily_xp_claim_display"),
            reward.get("type"),
            reward.get("rate_percent"),
        )
        if actual_row != expected_row:
            findings.error(f"Gamification level {index + 1} does not match the live canon")
            continue
        credited = Decimal(level["daily_xp_claim_base"]) * Decimal(level["xp_multiplier"])
        if credited != Decimal(level["daily_xp_claim_credited"]):
            findings.error(f"Gamification level {index + 1} has incorrect exact XP")
        display = int(credited.quantize(Decimal("1"), rounding=ROUND_HALF_UP))
        if display != level["daily_xp_claim_display"]:
            findings.error(f"Gamification level {index + 1} has incorrect display rounding")
        if Decimal(reward["rate_percent"]) / Decimal("100") != Decimal(reward["rate_decimal"]):
            findings.error(f"Gamification level {index + 1} has inconsistent reward units")
    if payload.get("configuration_id") != "WCF-GAMIFICATION-LIVE-2026-08-10":
        findings.error("Gamification configuration ID is incorrect")
    else:
        findings.ok("Checked live gamification calculations")


def validate_security_assessment(root: Path, findings: Findings) -> None:
    payload = load_json(root / "data" / "security-assessments.json", findings)
    if not isinstance(payload, dict):
        return
    records = payload.get("records")
    if not isinstance(records, list):
        findings.error("Security assessment records must be an array")
        return
    assessment = next(
        (
            record
            for record in records
            if isinstance(record, dict) and record.get("assessment_id") == "WCF-SARV-2026-0810"
        ),
        None,
    )
    if assessment is None:
        findings.error("Security assessment WCF-SARV-2026-0810 is missing")
        return
    expected_hash = "c34dfed3f00802fa51b1fecb6d0f4cff2148160cb72afaf81cef91cf1ebb6918"
    artifact = assessment.get("artifact", {})
    artifact_path = (root / str(artifact.get("path", ""))).resolve()
    try:
        artifact_path.relative_to(root.resolve())
    except ValueError:
        findings.error("Security assessment artifact path escapes the repository")
        return
    if not artifact_path.is_file():
        findings.error("Security assessment PDF is missing")
        return
    actual_hash = hashlib.sha256(artifact_path.read_bytes()).hexdigest()
    if artifact.get("sha256") != expected_hash or actual_hash != expected_hash:
        findings.error("Security assessment PDF hash mismatch")
    scope = assessment.get("scope", {})
    results = assessment.get("finding_summary", {})
    checks = assessment.get("automated_revalidation", {})
    if (
        assessment.get("provider_relationship") != "first-party"
        or assessment.get("independent_third_party_audit") is not False
        or scope.get("chain_id") != 31337
        or scope.get("production_deployment_coverage") != []
        or (results.get("total"), results.get("resolved"), results.get("open")) != (17, 17, 0)
        or (checks.get("total_checks"), checks.get("passed"), checks.get("failed")) != (31, 31, 0)
    ):
        findings.error("Security assessment scope or result metadata is incorrect")
    else:
        findings.ok("Checked WCF-SARV-2026-0810 artifact and scope")


def print_report(findings: Findings) -> None:
    print("Whale CeFi documentation validation")
    print(f"PASS: {len(findings.passed)}")
    for message in findings.passed:
        print(f"  [PASS] {message}")
    print(f"WARN: {len(findings.warnings)}")
    for message in findings.warnings:
        print(f"  [WARN] {message}")
    print(f"ERROR: {len(findings.errors)}")
    for message in findings.errors:
        print(f"  [ERROR] {message}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", type=Path, help="Root of the Whale CeFi GitBook repository")
    parser.add_argument(
        "--canonical-origin",
        default="https://docs.whale-cefi.com",
        help="Expected canonical documentation origin",
    )
    parser.add_argument(
        "--enforce-current-canon",
        action="store_true",
        help="Require the 29 July 2026 USDT/USDC product-version values",
    )
    args = parser.parse_args()

    root = args.root.expanduser().resolve()
    findings = Findings()
    if not root.is_dir():
        print(f"ERROR: documentation root does not exist: {root}", file=sys.stderr)
        return 2

    validate_required_files(root, findings)
    linked_paths = validate_summary(root, findings)
    validate_markdown(root, linked_paths, args.canonical_origin, findings)
    validate_json_files(root, findings)
    validate_product_versions(root, args.enforce_current_canon, findings)
    validate_gamification(root, findings)
    validate_security_assessment(root, findings)
    validate_current_legal_record(root, findings)
    print_report(findings)
    return 1 if findings.errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
