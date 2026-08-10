# Whale CeFi Documentation v5.1 Official Release

Release date: 10 August 2026

Distribution: public

Public status: released and effective

## Release purpose

This release binds the live gamification model, the published first-party Security Assessment and Remediation Verification v3.0, and the approved El Salvador Entity and Service Register to one GitHub and GitBook source state.

## Material changes

- Published all ten XP thresholds, XP multipliers, base Daily XP Claims, exact credited XP values, and rounded interface values.
- Recorded fractional XP in the internal ledger with whole-number half-up display rounding.
- Published Levels 1-6 daily eligible-deposit balance-reward percentages.
- Published Levels 7-10 individual monthly reward equal to 0.002% of company Net Monthly Revenue per eligible user.
- Preserved Puffer at the owner-confirmed 0.001% value.
- Added the 42-page `WCF-SARV-2026-0810` PDF with its SHA-256 and machine-readable record.
- Separated first-party remediation verification from independent Eter and Hashlock audit-programme records.
- Preserved an empty production-deployment coverage list for the isolated chain 31337 assessment.
- Reconciled legal and machine-readable records with Pulpo Fintech, S.A. de C.V. (PSAD-0023), El Salvador, as the customer contracting and operating entity.
- Removed the superseded entity map from current records and derived search surfaces.
- Repaired index and release-validation logic so current GitBook frontmatter and controlled-specification paths are checked correctly.

## Release contents

- 225 canonical reader routes defined by `SUMMARY.md`;
- 72 controlled technical specifications;
- 288 chapter-bound failure-mode controls;
- 360 chapter-bound evidence requirements;
- OpenAPI, AsyncAPI, JSON Schema, machine-readable records, SEO/GEO indexes, sitemap, and `llms` surfaces;
- GitHub Actions quality gate, release checksums, and publication controls.

## Verification

Run:

```bash
npm run build:indexes
npm run check
```

The expected QA result is recorded in `release/qa-v5.1-report.json`, `release/BUILD_INTEGRITY_REPORT.md`, and `release/SHA256SUMS`.

GitHub `main` remains the source of truth and GitBook remains the synchronized public reader surface.
