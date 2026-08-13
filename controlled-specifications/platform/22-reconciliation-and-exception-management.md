---
title: "Reconciliation and Exception Management"
description: "Reconciliation proves that internal obligations are supported by external assets and expected movements. It compares ledger control accounts with chain and custody evidence, explains timing differences…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/platform/22-reconciliation-and-exception-management"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-22"
---

# Reconciliation and Exception Management

**Reconciliation and Exception Management** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 22 is part of the 29 July 2026 official release. Its `FM-22-xx` controls and `EVD-22-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Reconciliation proves that internal obligations are supported by external assets and expected movements. It compares ledger control accounts with chain and custody evidence, explains timing differences, assigns exceptions and blocks only the affected capability when material uncertainty remains.

### Normative design rules

- Reconcile per legal entity, chain, asset, custody location and balance state.
- Use exact base units but define materiality and timing tolerances by asset and lifecycle.
- Preserve independent external evidence; a provider webhook alone is insufficient.
- Every exception has a stable identity, ageing, owner and disposition.
- Corrections post through the ledger and reference the resolved exception.

### Boundary / not claimed

The transcript's ‘one wei’ trigger is not universalised; exactness, timing tolerance and operational materiality are separate controls.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Ledger snapshot | Immutable cut of balances and in-flight accounts. |
| L4 | External evidence | Direct chain balances, contracts and custody positions. |
| L3 | Normalisation | Asset identity, precision, finality and pending classification. |
| L2 | Comparison | Expected versus observed balances and movements. |
| L1 | Exception queue | Reason, materiality, owner, SLA and evidence. |
| L0 | Resolution | Replay, correction, provider escalation or controlled freeze. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Ledger snapshot | Immutable cut of balances and in-flight accounts. | Reconcile per legal entity, chain, asset, custody location and balance state. |
| External evidence | Direct chain balances, contracts and custody positions. | Use exact base units but define materiality and timing tolerances by asset and lifecycle. |
| Normalisation | Asset identity, precision, finality and pending classification. | Preserve independent external evidence; a provider webhook alone is insufficient. |
| Comparison | Expected versus observed balances and movements. | Every exception has a stable identity, ageing, owner and disposition. |
| Exception queue | Reason, materiality, owner, SLA and evidence. | Corrections post through the ledger and reference the resolved exception. |
| Resolution | Replay, correction, provider escalation or controlled freeze. | Reconcile per legal entity, chain, asset, custody location and balance state. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-22-01` | Timing difference | False incident blocks operations | Finality/pending buckets | **AGE** |
| `FM-22-02` | Real shortfall | Liabilities exceed controlled assets | Materiality breaker | **FREEZE SCOPE** |
| `FM-22-03` | Bad normalisation | Equivalent units compare incorrectly | Canonical asset model | **REPROCESS** |
| `FM-22-04` | Silent exception | Mismatch persists without owner | Exception SLA/escalation | **ESCALATE** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-22-01` | **ACCEPTED** | Sixty-second reconciliation daemon and safe-mode concept. |
| `EVD-22-02` | **ACCEPTED** | Reconciliation specification and control-account mapping. |
| `EVD-22-03` | **ACCEPTED** | Asset-specific tolerances, finality windows and materiality policy. |
| `EVD-22-04` | **ACCEPTED** | Synthetic shortage, excess, stale-provider and reorg exercises. |
| `EVD-22-05` | **ACCEPTED** | Exception ageing, resolution and governance report. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
