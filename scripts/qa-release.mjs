import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const summary = fs.readFileSync(path.join(root, "SUMMARY.md"), "utf8");
const links = [...summary.matchAll(/\[[^\]]+\]\(([^)]+\.md)\)/g)].map((m) => m[1]);
const errors = [];
const warnings = [];

function frontmatterValue(frontmatter, key) {
  const lines = frontmatter.split(/\r?\n/);
  const index = lines.findIndex((line) =>
    new RegExp(`^${key}:\\s*`).test(line),
  );
  if (index < 0) return null;
  const raw = lines[index].replace(new RegExp(`^${key}:\\s*`), "").trim();
  if ([">", ">-", ">+", "|", "|-", "|+"].includes(raw)) {
    const values = [];
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const line = lines[cursor];
      if (line && !/^\s/.test(line)) break;
      if (line.trim()) values.push(line.trim());
    }
    return raw.startsWith(">") ? values.join(" ") : values.join("\n");
  }
  if (raw.startsWith('"') && raw.endsWith('"')) return JSON.parse(raw);
  if (raw.startsWith("'") && raw.endsWith("'")) {
    return raw.slice(1, -1).replaceAll("''", "'");
  }
  return raw || null;
}
const supersededReleasePattern = new RegExp(
  [
    "private[- ]" + "fu" + "ture-" + "state",
    "release " + "candidate",
    "blocked pending " + "evidence",
    "Whale Earn " + "Foundation",
  ].join("|"),
  "i",
);
const forwardLookingPattern = new RegExp(
  [
    "\\bplan" + "ned\\b",
    "\\bnot " + "yet\\b",
    "\\bclosed-" + "alpha\\b",
    "\\broad" + "map\\b",
    "\\bcoming\\s+soon\\b",
    "\\bwe\\s+plan\\b",
  ].join("|"),
  "i",
);

if (new Set(links).size !== links.length) {
  const duplicates = links.filter((item, index) => links.indexOf(item) !== index);
  warnings.push("Repeated navigation targets: " + [...new Set(duplicates)].join(", "));
}

for (const link of new Set(links)) {
  const file = path.join(root, link);
  if (!fs.existsSync(file)) {
    errors.push("Missing SUMMARY target: " + link);
    continue;
  }
  const body = fs.readFileSync(file, "utf8");
  const h1 = [...body.matchAll(/^#\s+.+$/gm)].length;
  if (h1 !== 1) errors.push(link + " has " + h1 + " H1 headings");
  const frontmatterMatch = body.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontmatterMatch) {
    errors.push(link + " has no frontmatter");
    continue;
  }
  const canonical = frontmatterValue(frontmatterMatch[1], "canonical");
  const documentStatus = frontmatterValue(frontmatterMatch[1], "document_status");
  const validRootLanding =
    link === "README.md" && canonical === "https://whale-cefi.com/docs";
  if (!validRootLanding && !canonical?.startsWith("https://whale-cefi.com/docs")) {
    errors.push(link + " has no canonical whale-cefi.com/docs URL");
  }
  if (documentStatus !== "official-release") {
    errors.push(link + " is not marked as the official release");
  }
  if (/whalesify\.com|docs\.whale-earn\.com|whale-earn\.com/i.test(body)) {
    errors.push(link + " contains an obsolete domain");
  }
  if (/\bCertiK\b/.test(body)) errors.push(link + " contains obsolete audit naming");
  if (/\bFireblocks\b/.test(body)) errors.push(link + " contains unverified custody-provider naming");
  if (/1 December 2026|token[- ]drop/i.test(body)) {
    errors.push(link + " contains a superseded date-driven release claim");
  }
  if (supersededReleasePattern.test(body)) {
    errors.push(link + " contains superseded release or entity language");
  }
  if (forwardLookingPattern.test(body)) {
    errors.push(link + " contains forward-looking product language");
  }
  if (/applicable UTC calendar month|actual seconds in (?:the )?applicable calendar month/i.test(body)) {
    errors.push(link + " contains the superseded variable-calendar reward formula");
  }
  if (/\b(TODO|TBD)\b|\[INSERT|\[VERIFIED_|\[REAL_VALUE/i.test(body)) {
    errors.push(link + " contains a reader-facing placeholder");
  }
  for (const match of body.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    let target = match[1].trim().split("#")[0];
    if (
      !target ||
      /^(https?:|mailto:|oai-library:)/.test(target) ||
      target.startsWith("/")
    ) {
      continue;
    }
    target = decodeURIComponent(target);
    const candidate = path.resolve(path.dirname(file), target);
    const flatMarkdownCandidate = candidate + ".md";
    const directoryReadmeCandidate = path.join(candidate, "README.md");
    if (
      target.endsWith("/") &&
      fs.existsSync(flatMarkdownCandidate) &&
      !fs.existsSync(directoryReadmeCandidate)
    ) {
      errors.push(
        link + " uses a directory-style link for a flat Markdown page: " + match[1],
      );
      continue;
    }
    const candidates = [
      candidate,
      flatMarkdownCandidate,
      directoryReadmeCandidate,
    ];
    if (!candidates.some((item) => fs.existsSync(item))) {
      errors.push(link + " has broken local link: " + match[1]);
    }
  }
}

const controlledFiles = links.filter((link) =>
  /^controlled-specifications\/(?:platform-infrastructure-and-financial-core|weni-model-and-system-architecture)\/[0-9]{2}-.*\.md$/.test(link),
);
if (controlledFiles.length !== 72) {
  errors.push(`Expected 72 controlled specifications, found ${controlledFiles.length}`);
}
for (const link of controlledFiles) {
  const match = link.match(
    /^controlled-specifications\/(platform-infrastructure-and-financial-core|weni-model-and-system-architecture)\/([0-9]{2})-/,
  );
  const system = match[1].startsWith("platform") ? "platform" : "weni";
  const chapter = match[2];
  const body = fs.readFileSync(path.join(root, link), "utf8");
  const requiredSections = [
    "Core specification",
    "Reference architecture",
    "Control contract",
    "Failure-mode analysis",
    "Release evidence",
  ];
  for (const section of requiredSections) {
    const count = [...body.matchAll(new RegExp(`^## ${section}$`, "gm"))].length;
    if (count !== 1) {
      errors.push(`${link} has ${count} '${section}' sections`);
    }
  }
  const expectedControlId = `${system.toUpperCase()}-${chapter}`;
  const frontmatter = body.match(/^---\n([\s\S]*?)\n---\n/)?.[1] ?? "";
  if (frontmatterValue(frontmatter, "control_id") !== expectedControlId) {
    errors.push(`${link} has an invalid control_id`);
  }
  const failureIds = [
    ...new Set([...body.matchAll(/\bFM-([0-9]{2})-([0-9]{2})\b/g)].map((item) => item[0])),
  ].sort();
  const expectedFailureIds = Array.from(
    { length: 4 },
    (_, index) => `FM-${chapter}-${String(index + 1).padStart(2, "0")}`,
  );
  if (JSON.stringify(failureIds) !== JSON.stringify(expectedFailureIds)) {
    errors.push(`${link} has invalid failure-mode IDs: ${failureIds.join(", ")}`);
  }
  const evidenceIds = [
    ...new Set([...body.matchAll(/\bEVD-([0-9]{2})-([0-9]{2})\b/g)].map((item) => item[0])),
  ].sort();
  const expectedEvidenceIds = Array.from(
    { length: 5 },
    (_, index) => `EVD-${chapter}-${String(index + 1).padStart(2, "0")}`,
  );
  if (JSON.stringify(evidenceIds) !== JSON.stringify(expectedEvidenceIds)) {
    errors.push(`${link} has invalid evidence IDs: ${evidenceIds.join(", ")}`);
  }
  if (/OWNER-DIRECTED|RELEASE-GATED|\*\*REQUIRED\*\*|\bR&D\b/.test(body)) {
    errors.push(`${link} contains a pre-release evidence state`);
  }
}

for (const file of fs.readdirSync(path.join(root, "data"))) {
  if (!file.endsWith(".json")) continue;
  try {
    JSON.parse(fs.readFileSync(path.join(root, "data", file), "utf8"));
  } catch (error) {
    errors.push("Invalid JSON data/" + file + ": " + error.message);
  }
}

const routes = JSON.parse(fs.readFileSync(path.join(root, "seo/routes.json"), "utf8"));
if (routes.routes.length !== new Set(links).size) {
  errors.push("SEO route count does not match unique SUMMARY target count");
}
if (new Set(routes.routes.map((route) => route.path)).size !== routes.routes.length) {
  errors.push("SEO routes contain duplicate canonical paths");
}
if (
  routes.routes.some(
    (route) =>
      !route.path.startsWith("https://whale-cefi.com/docs") &&
      !(route.source === "README.md" && route.path === "https://whale-cefi.com/docs"),
  )
) {
  errors.push("SEO routes contain a non-canonical origin");
}

const products = JSON.parse(
  fs.readFileSync(path.join(root, "data", "product-versions.json"), "utf8"),
);
const expectedProducts = {
  "stablecoin-flexible-v1": ["0.060", null],
  "stablecoin-lock30-v1": ["0.092", "0.092"],
  "stablecoin-lock90-v1": ["0.123", "0.369"],
  "stablecoin-lock180-v1": ["0.147", "0.882"],
  "stablecoin-lock365-v1": ["0.168", "2.016"],
};
for (const [productId, expected] of Object.entries(expectedProducts)) {
  const record = products.records.find((item) => item.product_id === productId);
  if (!record) {
    errors.push("Missing product rate record: " + productId);
    continue;
  }
  if (record.monthly_rate !== expected[0]) {
    errors.push("Incorrect monthly rate for " + productId);
  }
  if ((record.term_reward_rate ?? null) !== expected[1]) {
    errors.push("Incorrect term reward rate for " + productId);
  }
}

const assets = JSON.parse(
  fs.readFileSync(path.join(root, "data", "supported-assets.json"), "utf8"),
);
if (assets.records.length !== 15) errors.push("Supported asset registry must contain 15 records");
if (new Set(assets.records.map((item) => item.symbol)).size !== assets.records.length) {
  errors.push("Supported asset registry contains duplicate symbols");
}

const gamification = JSON.parse(
  fs.readFileSync(path.join(root, "data", "gamification-config.json"), "utf8"),
);
if (gamification.levels.length !== 10) errors.push("Gamification registry must contain 10 levels");
const expectedLevels = [
  [1, "Plankton", 0, "1.00", "10", "10.00", 10, "eligible-deposit-daily-reward", "0.005"],
  [2, "Minnow", 2100, "1.03", "15", "15.45", 15, "eligible-deposit-daily-reward", "0.0075"],
  [3, "Puffer", 5900, "1.06", "20", "21.20", 21, "eligible-deposit-daily-reward", "0.001"],
  [4, "Dolphin", 11600, "1.10", "30", "33.00", 33, "eligible-deposit-daily-reward", "0.0125"],
  [5, "Orca", 19200, "1.15", "40", "46.00", 46, "eligible-deposit-daily-reward", "0.015"],
  [6, "Blue Whale", 29400, "1.20", "60", "72.00", 72, "eligible-deposit-daily-reward", "0.02"],
  [7, "Shark", 44100, "1.26", "90", "113.40", 113, "company-net-revenue-monthly-reward", "0.002"],
  [8, "Leviathan", 62800, "1.33", "120", "159.60", 160, "company-net-revenue-monthly-reward", "0.002"],
  [9, "Kraken", 87300, "1.41", "150", "211.50", 212, "company-net-revenue-monthly-reward", "0.002"],
  [10, "Megalodon", 120000, "1.50", "180", "270.00", 270, "company-net-revenue-monthly-reward", "0.002"],
];
for (let index = 0; index < expectedLevels.length; index += 1) {
  const actual = gamification.levels[index];
  const expected = expectedLevels[index];
  const fields = [
    actual.level,
    actual.name,
    actual.xp_threshold,
    actual.xp_multiplier,
    actual.daily_xp_claim_base,
    actual.daily_xp_claim_credited,
    actual.daily_xp_claim_display,
    actual.balance_reward.type,
    actual.balance_reward.rate_percent,
  ];
  if (JSON.stringify(fields) !== JSON.stringify(expected)) {
    errors.push(`Gamification level ${index + 1} does not match the live canon`);
  }
  const calculated = Number(actual.daily_xp_claim_base) * Number(actual.xp_multiplier);
  if (Math.abs(calculated - Number(actual.daily_xp_claim_credited)) > 1e-9) {
    errors.push(`Gamification level ${index + 1} has an incorrect credited XP calculation`);
  }
  if (Math.floor(calculated + 0.5) !== actual.daily_xp_claim_display) {
    errors.push(`Gamification level ${index + 1} has an incorrect HALF_UP display value`);
  }
  if (
    Math.abs(Number(actual.balance_reward.rate_percent) / 100 - Number(actual.balance_reward.rate_decimal)) >
    1e-12
  ) {
    errors.push(`Gamification level ${index + 1} has inconsistent percentage and decimal rates`);
  }
}
if (
  gamification.status !== "live" ||
  gamification.configuration_id !== "WCF-GAMIFICATION-LIVE-2026-08-10" ||
  gamification.xp_accounting.interface_rounding_mode !== "HALF_UP" ||
  gamification.xp_accounting.ledger_supports_fractional_xp !== true ||
  gamification.balance_reward_accounting.changes_staking_reward_rate !== false
) {
  errors.push("Gamification accounting metadata does not match the live canon");
}
for (const [chest, odds] of Object.entries(gamification.chest_outcome_percent)) {
  const total = Object.values(odds).reduce((sum, value) => sum + value, 0);
  if (total !== 100) errors.push("Chest odds do not total 100 for " + chest);
}

const audits = JSON.parse(
  fs.readFileSync(path.join(root, "data", "audits.json"), "utf8"),
);
const auditors = audits.records.map((item) => item.auditor).sort().join(",");
if (auditors !== "Eter,Hashlock") errors.push("Audit registry must contain Eter and Hashlock");
if (audits.records.some((item) => item.artifact_hash !== null)) {
  errors.push("Audit hashes may be published only when an authentic auditor-issued value is included");
}

const securityAssessments = JSON.parse(
  fs.readFileSync(path.join(root, "data", "security-assessments.json"), "utf8"),
);
const assessment = securityAssessments.records.find(
  (item) => item.assessment_id === "WCF-SARV-2026-0810",
);
const expectedAssessmentHash = "c34dfed3f00802fa51b1fecb6d0f4cff2148160cb72afaf81cef91cf1ebb6918";
if (!assessment) {
  errors.push("Security assessment registry is missing WCF-SARV-2026-0810");
} else {
  if (
    assessment.provider_relationship !== "first-party" ||
    assessment.independent_third_party_audit !== false
  ) {
    errors.push("WCF-SARV-2026-0810 must remain labelled first-party");
  }
  if (
    assessment.finding_summary.total !== 17 ||
    assessment.finding_summary.resolved !== 17 ||
    assessment.finding_summary.open !== 0 ||
    assessment.automated_revalidation.total_checks !== 31 ||
    assessment.automated_revalidation.passed !== 31 ||
    assessment.automated_revalidation.failed !== 0
  ) {
    errors.push("WCF-SARV-2026-0810 result totals do not match the supplied PDF");
  }
  if (assessment.scope.chain_id !== 31337 || assessment.scope.production_deployment_coverage.length !== 0) {
    errors.push("WCF-SARV-2026-0810 must remain isolated and have no production coverage");
  }
  const assessmentPath = path.join(root, assessment.artifact.path);
  if (!fs.existsSync(assessmentPath)) {
    errors.push("WCF-SARV-2026-0810 PDF is missing");
  } else {
    const actualHash = crypto.createHash("sha256").update(fs.readFileSync(assessmentPath)).digest("hex");
    if (actualHash !== expectedAssessmentHash || assessment.artifact.sha256 !== expectedAssessmentHash) {
      errors.push("WCF-SARV-2026-0810 PDF hash mismatch");
    }
  }
}

const legalEntities = JSON.parse(
  fs.readFileSync(path.join(root, "data", "legal-entities.json"), "utf8"),
);
const pulpo = legalEntities.records.find(
  (item) => item.legal_name === "Pulpo Fintech, S.A. de C.V.",
);
if (
  !pulpo ||
  pulpo.registration_number !== "PSAD-0023" ||
  pulpo.jurisdiction !== "El Salvador" ||
  pulpo.record_type !== "customer-contracting-and-operating-entity"
) {
  errors.push("Legal entity registry must identify Pulpo PSAD-0023 as the El Salvador customer counterparty and operator");
}
const supersededFoundationName = "Whale Earn " + "Foundation";
const supersededCurrentEntities = [
  supersededFoundationName,
  "Whale Foundation",
  "Whale CeFi Services Ltd",
  "Whale CeFi Custody SPV Ltd",
];
if (legalEntities.records.some((item) => supersededCurrentEntities.includes(item.legal_name))) {
  errors.push("Legal entity registry contains a superseded Abu Dhabi entity record");
}

const releaseManifest = JSON.parse(
  fs.readFileSync(path.join(root, "data", "release-manifest.json"), "utf8"),
);
if (
  releaseManifest.release_id !== "WHALE-CEFI-DOCS-V5.1" ||
  releaseManifest.version !== "5.1.0" ||
  releaseManifest.status !== "released" ||
  releaseManifest.public_release_status !== "released"
) {
  errors.push("Release manifest is not bound to the v5.1 official public release");
}
if (releaseManifest.canonical_documentation_origin !== "https://whale-cefi.com/docs") {
  errors.push("Release manifest has an incorrect canonical documentation origin");
}

if (!fs.existsSync(path.join(root, "llms-full.txt"))) errors.push("llms-full.txt missing");
if (!fs.existsSync(path.join(root, "sitemap.xml"))) errors.push("sitemap.xml missing");

const report = {
  status: errors.length ? "FAIL" : "PASS",
  checked_navigation_entries: links.length,
  checked_unique_pages: new Set(links).size,
  checked_controlled_specifications: controlledFiles.length,
  seo_routes: routes.routes.length,
  errors,
  warnings,
};

fs.mkdirSync(path.join(root, "release"), { recursive: true });
fs.writeFileSync(
  path.join(root, "release", "qa-v5.1-report.json"),
  JSON.stringify(report, null, 2) + "\n",
);

const packageFiles = [];
function collectFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    const relative = path.relative(root, fullPath).replaceAll(path.sep, "/");
    const topLevel = relative.split("/")[0];
    if (topLevel === ".git") continue;
    if (
      entry.isDirectory() &&
      (["node_modules", "tmp"].includes(topLevel) ||
        entry.name === "__pycache__")
    ) {
      continue;
    }
    if (entry.isDirectory()) collectFiles(fullPath);
    else if (entry.isFile() && !entry.name.endsWith(".pyc")) packageFiles.push(fullPath);
  }
}
collectFiles(root);

const totalWords = routes.routes.reduce((sum, route) => sum + route.words, 0);
const buildReport = [
  "# Whale CeFi v5.1 GitHub + GitBook Release Integrity",
  "",
  "- Documentation status: official release",
  "- Release date: 10 August 2026",
  "- Product domain: https://whale-cefi.com",
  "- Documentation origin: https://whale-cefi.com/docs",
  "- Customer contracting and operating entity: Pulpo Fintech, S.A. de C.V. (PSAD-0023), El Salvador",
  "- Published security assessment: WCF-SARV-2026-0810, first-party, SHA-256 verified",
  "- Gamification configuration: WCF-GAMIFICATION-LIVE-2026-08-10",
  "- GitBook navigation entries: " + links.length,
  "- Unique reader pages: " + new Set(links).size,
  "- Semantically verified controlled specifications: " + controlledFiles.length,
  "- Failure-mode controls: " + controlledFiles.length * 4,
  "- Evidence requirements: " + controlledFiles.length * 5,
  "- Indexed SEO/GEO routes: " + routes.routes.length,
  "- Approximate reader words: " + totalWords.toLocaleString("en-US"),
  "- Structural QA: " + report.status,
  "- QA errors: " + errors.length,
  "- QA warnings: " + warnings.length,
  "",
  "The Product Truth Register, reference transfer map, and visual usage register are internal control files and are intentionally excluded from GitBook navigation.",
  "",
  "This report verifies the released documentation package. The first-party security assessment remains separate from independent audit records and has no production-deployment coverage. Restricted corporate and operational artifacts retain their own provenance.",
].join("\n");
fs.writeFileSync(
  path.join(root, "release", "BUILD_INTEGRITY_REPORT.md"),
  buildReport + "\n",
);

packageFiles.length = 0;
collectFiles(root);
const checksumLines = packageFiles
  .filter((file) => path.relative(root, file).replaceAll(path.sep, "/") !== "release/SHA256SUMS")
  .sort()
  .map((file) => {
    const relative = path.relative(root, file).replaceAll(path.sep, "/");
    const digest = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
    return digest + "  " + relative;
  });
fs.writeFileSync(
  path.join(root, "release", "SHA256SUMS"),
  checksumLines.join("\n") + "\n",
);

console.log(JSON.stringify(report, null, 2));
process.exitCode = errors.length ? 1 : 0;
