---
title: "Deployment Registry"
description: "The machine-readable index of every production contract, service release, authority snapshot, and evidence relationship."
canonical: "https://docs.whale-cefi.com/developers-and-reference/deployment-registry"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Deployment Registry

The machine-readable index of every production contract, service release, authority snapshot, and evidence relationship.

The deployment registry is the canonical resolver from a product version to the exact systems capable of creating, holding, calculating, or moving value.

## Resolution chain

```
product version
→ service release
→ contract deployment
→ chain and address
→ runtime bytecode
→ reproducible build
→ source commit
→ dependency lock
→ authority snapshot
→ audit scope
→ monitoring policy
```

Registry entries are signed, append-only, and effective-dated. Supersession creates a new entry; it does not delete history. The API returns both the active record and the complete chain of predecessors.

## Status values

`candidate`, `active`, `restricted`, `deprecated`, `exit-only`, and `retired` have deterministic effects. Only `active` deployments accept new exposure. `Restricted` retains named operations. `Exit-only` permits controlled closure but no new positions.

## Drift detection

Automated observers compare runtime bytecode, proxy slots, roles, timelock delay, registry values, and service artifact signatures with the active manifest. Any mismatch marks the record `drifted`, blocks capacity admission, and opens an incident.

The JSON Schema in the repository defines the complete record and validation rules.
