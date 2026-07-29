---
title: "WENI System Card"
description: "The WENI System Card identifies the exact model-and-system release that supports a documented capability."
canonical: "https://docs.whale-cefi.com/evidence-center/weni-system-card"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# WENI System Card

The WENI System Card identifies the exact model-and-system release that supports a documented capability.

It records release ID, model lineage and checkpoint, CPT and adapter hashes, system policy, tool manifest, evidence sources and licences, freshness rules, authority boundaries, retention matrix, regions, subprocessors, evaluation datasets, methodology, aggregate results, failure thresholds, red-team scope, known limitations, monitoring, incident history, and rollback target.

## Capability classes

Read-only explanation, evidence retrieval, deterministic calculation, comparison, simulation, and unsigned proposal preparation are evaluated separately. Wallet signing, custody approval, ledger mutation, compliance override, secret access, and self-approval are never permitted capabilities.

If WENI is unavailable, the financial platform continues in deterministic non-AI mode. Model rollback never re-enables a revoked tool, expired data source, or unsafe policy.

The machine-readable source is [weni-capabilities.json](../data/weni-capabilities.json).
