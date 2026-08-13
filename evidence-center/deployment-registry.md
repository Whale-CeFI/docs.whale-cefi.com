---
title: "Deployment Registry"
description: "The Deployment Registry is the bridge between documentation, source code, audited scope, and live bytecode."
canonical: "https://whale-cefi.com/docs/evidence-center/deployment-registry"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Deployment Registry

The Deployment Registry is the bridge between documentation, source code, audited scope, and live bytecode.

Every record includes network and chain ID, module, proxy and implementation address where applicable, deployment transaction, source commit, compiler and optimiser settings, runtime bytecode hash, verified-source link, admin authority, quorum, timelock, pauser scope, audit coverage, effective time, and retirement time.

Only an `active` deployment can accept new exposure. `restricted`, `deprecated`, `exit-only`, and `retired` states have deterministic effects.

A replacement does not rewrite history. Existing positions remain tied to their original deployment identity until a separately authorised migration or exit completes.

The machine-readable source is [deployments.json](../data/deployments.json).
