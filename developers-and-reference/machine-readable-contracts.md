---
title: "Machine-Readable Contracts"
description: "Schemas and interface definitions that make the documentation testable by services, auditors, and automated controls."
canonical: "https://docs.whale-cefi.com/developers-and-reference/machine-readable-contracts"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Machine-Readable Contracts

Schemas and interface definitions that make the documentation testable by services, auditors, and automated controls.

![Machine-Readable Contracts](../assets/visuals/heroes/09-evidence-archive.png)

Narrative documentation explains intent. Machine-readable contracts define fields, types, enumerations, constraints, and version relationships.

## Included contracts

| Artifact                                  | Purpose                                                                                        |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data/supported-assets.json`              | Canonical supported-asset identities and registry status                                       |
| `data/product-versions.json`              | Effective-dated monthly reward-rate and calculation catalogue                                  |
| `data/audit-remediation.json`             | Historical finding and canonical remediation mapping                                           |
| `data/control-invariants.json`            | Executable financial, contract, and intelligence guarantees                                    |
| `data/system-profile.json`                | Authority domains, completion rule, and hard system boundaries                                 |
| `content-index.json`                      | Versioned page identity, audience, authority domain, and effective time                        |
| `search-index.json`                       | Text retrieval index for documentation search and machine readers                              |
| `llms.txt`                                | Minimal documentation map and machine-readable entry points                                    |
| `schemas/operation-envelope.schema.json`  | Cross-domain identity and causality for material operations                                    |
| `schemas/asset-route.schema.json`         | Network-bound asset identity, behavior, precision, capabilities, and finality policy           |
| `schemas/deployment-manifest.schema.json` | Contract and service deployment identity                                                       |
| `schemas/evidence-bundle.schema.json`     | Source, observation, transformation, freshness, and conflict lineage                           |
| `schemas/audit-closure.schema.json`       | Finding history, canonical control, regression proof, retest, monitor, and deployment coverage |
| `schemas/product-version.schema.json`     | Immutable commercial terms accepted by a position                                              |
| `schemas/proof-epoch.schema.json`         | Liability, reserve, ownership, and continuity commitment                                       |
| `openapi/whale-cefi-public-api.yaml`      | Read-only product, registry, status, proof, and position interfaces                            |
| `asyncapi/whale-cefi-events.yaml`         | Financial, position, proof, and security-control event contracts                               |

## Compatibility

Schemas use semantic versions. Additive optional fields can advance a minor version. A field meaning, requiredness, numeric unit, identifier rule, or authority change requires a major version. Producers declare the exact schema version; consumers reject unsupported major versions.

## Validation

The documentation build parses every JSON and YAML artifact, resolves local schema references, verifies discovery indexes, and checks that human-readable product and audit values agree with machine-readable registries. A mismatch prevents activation of the affected documentation version.
