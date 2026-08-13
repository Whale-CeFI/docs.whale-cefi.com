---
title: "Documentation Contribution Policy"
description: "How controlled changes enter the Whale CeFi canonical documentation repository."
canonical: "https://whale-cefi.com/docs/contributing"
document_status: "internal-control"
audience: "internal"
last_reviewed: "2026-07-29"
---

# Documentation Contribution Policy

GitHub `main` is the source of truth. GitBook is the reader surface.

## Required workflow

1. Update the controlling machine-readable record or truth register first.
2. Update every dependent reader page, technical specification, and evidence record.
3. Run `npm run build:indexes`.
4. Run `npm run check`.
5. Open a pull request and identify the claim state, source, effective date, and release record.
6. Obtain the required domain review.
7. Review the GitBook pull-request preview.
8. Merge only after all required checks pass.

## Review ownership

| Change class | Required review |
|---|---|
| Product rates, terms, assets, fees, or XP | Product + Finance |
| Entity, eligibility, custody rights, privacy, or disclosures | Legal + Risk |
| Contracts, custody, infrastructure, or security | Engineering + Security |
| Reserves, liabilities, audits, deployments, or incidents | Evidence owner + relevant control function |
| WENI capability, model, policy, evaluation, or action boundary | WENI Engineering + Security + Product |
| Navigation, wording, or visual presentation without claim change | Documentation owner |

## Non-negotiable controls

- Never commit a secret, seed phrase, private key, API key, password, personal data export, or internal credential.
- Never invent a registration number, licence, deployment address, audit hash, reserve epoch, partner status, or production result. Restricted values remain in their authoritative evidence records.
- Never modify a rate or legal meaning only in prose; create the corresponding versioned record.
- Never edit generated search, sitemap, manifest, or `llms` files by hand.
- Never force-push or delete `main`.
