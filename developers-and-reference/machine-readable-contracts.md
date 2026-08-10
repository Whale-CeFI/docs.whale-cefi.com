---
title: "Machine-Readable Contracts"
canonical: "https://docs.whale-cefi.com/developers-and-reference/machine-readable-contracts"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-08-10"
description: "Schemas and interface definitions make the documentation testable by services, reviewers, and automated controls."
---

# Machine-Readable Contracts

Schemas and interface definitions that make the documentation testable by services, auditors, and automated controls.

![Machine-Readable Contracts](../.gitbook/assets/09-evidence-archive.png)

Narrative documentation explains intent. Machine-readable contracts define fields, types, enumerations, constraints, and version relationships.

## Included contracts

| Artifact | Purpose |
|---|---|
| `data/product-truth.json` | Current brand, legal-service, product, gamification, and assurance decisions |
| `data/legal-entities.json` | Approved entity and service map |
| `data/supported-assets.json` | Canonical supported-asset symbols and registry status |
| `data/product-versions.json` | Effective-dated reward-rate and calculation catalogue |
| `data/gamification-config.json` | Live levels, XP multipliers, Daily XP Claims, rounding, and balance rewards |
| `data/audits.json` | Independent Eter and Hashlock audit-programme records |
| `data/security-assessments.json` | Published first-party assessment identity, result, scope, and PDF hash |
| `data/deployments.json` | Production deployment-coverage registry |
| `data/proof-epochs.json` | Reserve and liability proof-epoch registry |
| `data/release-manifest.json` | Current documentation release identity and publication targets |
| `content-index.json` | Versioned page identity and canonical route map |
| `search-index.json` | Text retrieval index for documentation search and machine readers |
| `llms.txt` and `llms-full.txt` | Minimal and full machine-readable documentation surfaces |
| `schemas/asset-route.schema.json` | Network-bound asset identity and route constraints |
| `schemas/deployment-manifest.schema.json` | Contract and service deployment identity |
| `schemas/audit-closure.schema.json` | Finding history and deployment coverage |
| `schemas/security-assessment.schema.json` | First-party or independent security-assessment artifact contract |
| `schemas/product-version.schema.json` | Immutable commercial terms accepted by a position |
| `schemas/proof-epoch.schema.json` | Liability, reserve, ownership, and continuity commitment |
| `openapi/whale-cefi-public-api.yaml` | Read-only product, registry, status, proof, and position interfaces |
| `asyncapi/whale-cefi-events.yaml` | Financial, position, proof, and security-control event contracts |

## Compatibility

Schemas use semantic versions. Additive optional fields can advance a minor version. A field meaning, requiredness, numeric unit, identifier rule, or authority change requires a major version. Producers declare the exact schema version; consumers reject unsupported major versions.

## Validation

The documentation build parses every JSON and YAML artifact, resolves local schema references, verifies discovery indexes, and checks that human-readable product and audit values agree with machine-readable registries. A mismatch prevents activation of the affected documentation version.
