# Whale CeFi Documentation v5.0 Official Release

Release date: 29 July 2026  
Distribution: public  
Public status: released and effective

## Release purpose

This is the official Whale CeFi documentation release effective 29 July 2026.
The repository is the canonical GitHub source; GitBook is the public reader
surface for product, risk, security, evidence, platform, financial-core, legal,
and WENI documentation.

## Release contents

- 224 canonical reader routes defined by `SUMMARY.md`;
- 72 controlled technical specifications;
- 288 chapter-bound failure-mode controls;
- 360 chapter-bound evidence requirements;
- OpenAPI, AsyncAPI, JSON Schema, machine-readable records, SEO/GEO indexes,
  sitemap, and `llms` surfaces;
- GitHub Actions quality gate, pull-request template, contribution policy,
  security policy, checksums, and release controls;
- owner runbook for manual GitHub and GitBook release.

## Release decisions

- Every reader page is marked `official-release`.
- The documentation describes the system and capabilities in their current
  released state.
- The official stewardship entity is **Whale Foundation**.
- The canonical documentation origin is `https://docs.whale-cefi.com`.
- GitHub `main` is the source of truth and GitBook is the synchronized public
  publication.
- Release evidence remains versioned and attributable; identifiers that are
  not included in this repository are not invented or replaced with placeholders.

## Verification

Run:

```bash
npm run build:indexes
npm run check
```

The expected QA result is recorded in `release/qa-v5.0-report.json` and
`release/BUILD_INTEGRITY_REPORT.md`. File hashes are recorded in
`release/SHA256SUMS`.

## Release decision

This release is approved for publication to the official GitHub repository,
the production GitBook site, and the canonical documentation domain. The
release date, entity name, status, navigation, machine-readable surfaces, and
generated indexes are bound to the same v5.0 source state.
