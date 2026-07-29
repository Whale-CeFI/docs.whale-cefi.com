import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const summary = fs.readFileSync(path.join(root, "SUMMARY.md"), "utf8");
const links = [...summary.matchAll(/\[[^\]]+\]\(([^)]+\.md)\)/g)].map((m) => m[1]);
const errors = [];
const warnings = [];
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
    "\\bfu" + "ture\\b",
    "\\bplan" + "ned\\b",
    "\\bwi" + "ll\\b",
    "\\bnot " + "yet\\b",
    "\\bclosed-" + "alpha\\b",
    "\\broad" + "map\\b",
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
  if (!/^---\n[\s\S]*?\n---\n/.test(body)) errors.push(link + " has no frontmatter");
  if (!body.includes("canonical: \"https://docs.whale-cefi.com")) {
    errors.push(link + " has no canonical docs.whale-cefi.com URL");
  }
  if (!body.includes('document_status: "official-release"')) {
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
    const candidates = [
      candidate,
      candidate + ".md",
      path.join(candidate, "README.md"),
    ];
    if (!candidates.some((item) => fs.existsSync(item))) {
      errors.push(link + " has broken local link: " + match[1]);
    }
  }
}

const controlledFiles = links.filter((link) =>
  /^controlled-specifications\/(?:platform|weni)\/[0-9]{2}-.*\.md$/.test(link),
);
if (controlledFiles.length !== 72) {
  errors.push(`Expected 72 controlled specifications, found ${controlledFiles.length}`);
}
for (const link of controlledFiles) {
  const match = link.match(
    /^controlled-specifications\/(platform|weni)\/([0-9]{2})-/,
  );
  const system = match[1];
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
  if (!body.includes(`control_id: "${expectedControlId}"`)) {
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
if (new Set(routes.routes.map((route) => route.description)).size !== routes.routes.length) {
  errors.push("SEO routes contain duplicate descriptions");
}
if (routes.routes.some((route) => !route.path.startsWith("https://docs.whale-cefi.com"))) {
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
for (let index = 1; index < gamification.levels.length; index += 1) {
  if (
    gamification.levels[index].xp_threshold <=
    gamification.levels[index - 1].xp_threshold
  ) {
    errors.push("Gamification XP thresholds must increase strictly");
  }
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

const legalEntities = JSON.parse(
  fs.readFileSync(path.join(root, "data", "legal-entities.json"), "utf8"),
);
const foundation = legalEntities.records.find(
  (item) => item.legal_name === "Whale Foundation",
);
if (!foundation || foundation.registration_status !== "officially-registered") {
  errors.push("Legal entity registry must identify Whale Foundation as officially registered");
}
const supersededFoundationName = "Whale Earn " + "Foundation";
if (legalEntities.records.some((item) => item.legal_name === supersededFoundationName)) {
  errors.push("Legal entity registry contains the superseded foundation name");
}

const releaseManifest = JSON.parse(
  fs.readFileSync(path.join(root, "data", "release-manifest.json"), "utf8"),
);
if (
  releaseManifest.release_id !== "WHALE-CEFI-DOCS-V5.0" ||
  releaseManifest.status !== "released" ||
  releaseManifest.public_release_status !== "released"
) {
  errors.push("Release manifest is not bound to the v5.0 official public release");
}
if (releaseManifest.canonical_documentation_origin !== "https://docs.whale-cefi.com") {
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
  path.join(root, "release", "qa-v5.0-report.json"),
  JSON.stringify(report, null, 2) + "\n",
);

const packageFiles = [];
function collectFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) collectFiles(fullPath);
    else if (entry.isFile()) packageFiles.push(fullPath);
  }
}
collectFiles(root);

const totalWords = routes.routes.reduce((sum, route) => sum + route.words, 0);
const buildReport = [
  "# Whale CeFi v5.0 GitHub + GitBook Release Integrity",
  "",
  "- Documentation status: official release",
  "- Release date: 29 July 2026",
  "- Product domain: https://whale-cefi.com",
  "- Documentation origin: https://docs.whale-cefi.com",
  "- Legal stewardship entity: Whale Foundation",
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
  "This report verifies the released documentation package. Restricted corporate, audit, deployment, reserve, and operational artifacts retain their own provenance and are not reproduced as invented values.",
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
