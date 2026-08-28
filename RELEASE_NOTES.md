# Whale CeFi Documentation v5.2 Official Release

Release date: 28 August 2026

Distribution: public

Public status: released and effective

## Release purpose

This release publishes Operation BLACK TIDE as a separate first-party, PDF-only security-assurance record while preserving the v5.1 product, gamification, legal-service, and smart-contract assessment canon.

## Material changes

- Added the unchanged 57-page `SHL-WCF-RV-2026-0814` v2.0 PDF with SHA-256 `373576273053d791d45fa2628437c7b593e1ab993aa6b17e078321438920a4b0`.
- Published a dedicated technical page with an authority-conversion map, a T+00 through T+90 containment trace, and an assurance-boundary diagram.
- Recorded the report-scoped result: 10/10 findings resolved, 89/89 automated tests passed, a valid 22-event chain, scenario `CONTAINED`, no custody broadcast, and USD 0 simulated principal loss.
- Bound every result to `ISOLATED_REVALIDATION` and `O1-ISOLATED`; no production equivalence or deployment coverage is asserted.
- Disclosed that the executable evidence pack referenced by the report was not supplied with the public PDF and that documentation-team reproduction is not asserted.
- Kept BLACK TIDE separate from `WCF-SARV-2026-0810` and from the independent Eter and Hashlock audit-programme records.
- Extended the security-assessment schema and release QA to verify the BLACK TIDE PDF hash, result totals, assurance boundary, empty production-coverage list, and evidence-pack state.
- Refreshed GitBook navigation, reader indexes, sitemap, `llms` surfaces, visual manifests, build-integrity report, and release checksums.

## Release contents

- 227 canonical reader routes defined by `SUMMARY.md`;
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

The expected QA result is recorded in `release/qa-v5.2-report.json`, `release/BUILD_INTEGRITY_REPORT.md`, and `release/SHA256SUMS`.

GitHub `main` remains the source of truth and GitBook remains the synchronized public reader surface.
