---
title: "Settlement Finality and Financial Exceptions"
description: "Settlement is a state machine, not a boolean. Whale CeFi distinguishes requested, observed, included, finalised, custody-confirmed, ledger-posted, reconciled, failed, replaced, reversed and disputed states…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/platform/23-settlement-finality-and-financial-exceptions"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-23"
---

# Settlement Finality and Financial Exceptions

**Settlement Finality and Financial Exceptions** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 23 is part of the 29 July 2026 official release. Its `FM-23-xx` controls and `EVD-23-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Settlement is a state machine, not a boolean. Whale CeFi distinguishes requested, observed, included, finalised, custody-confirmed, ledger-posted, reconciled, failed, replaced, reversed and disputed states across networks and products.

### Normative design rules

- Define terminal and recoverable states for every transaction type.
- L2 finality policy models sequencer inclusion and L1 settlement separately.
- Custody-provider status cannot silently override contradictory on-chain evidence.
- State transitions are monotonic unless an explicit reversal path is invoked.
- Customer-visible labels map exactly to operational and ledger states.

### Boundary / not claimed

No single confirmation count is declared safe for every supported network, asset and action. TEAM TRANSCRIPT + TECHNICAL NORMALISATION

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Requested | A valid business instruction exists. |
| L4 | Observed | External network/provider has emitted evidence. |
| L3 | Included | Transaction is in a canonical candidate block. |
| L2 | Finalised | Network policy accepts reorg probability. |
| L1 | Posted | Balanced internal journal reflects the event. |
| L0 | Reconciled | Independent asset and liability evidence agrees. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Requested | A valid business instruction exists. | Define terminal and recoverable states for every transaction type. |
| Observed | External network/provider has emitted evidence. | L2 finality policy models sequencer inclusion and L1 settlement separately. |
| Included | Transaction is in a canonical candidate block. | Custody-provider status cannot silently override contradictory on-chain evidence. |
| Finalised | Network policy accepts reorg probability. | State transitions are monotonic unless an explicit reversal path is invoked. |
| Posted | Balanced internal journal reflects the event. | Customer-visible labels map exactly to operational and ledger states. |
| Reconciled | Independent asset and liability evidence agrees. | Define terminal and recoverable states for every transaction type. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-23-01` | Premature finality | Spendable balance precedes safe settlement | Chain policy | **HOLD** |
| `FM-23-02` | Provider conflict | Custody and chain disagree | Exception state | **INVESTIGATE** |
| `FM-23-03` | Invalid transition | Lifecycle skips required control | State-machine guard | **REJECT** |
| `FM-23-04` | UI mislabel | User believes pending is complete | Canonical projection | **CORRECT** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-23-01` | **ACCEPTED** | Settlement state machines by chain and product. |
| `EVD-23-02` | **ACCEPTED** | L1/L2 finality and sequencer-dependency matrix. |
| `EVD-23-03` | **ACCEPTED** | Provider/on-chain conflict test suite. |
| `EVD-23-04` | **ACCEPTED** | UI-to-ledger state mapping and localisation review. |
| `EVD-23-05` | **ACCEPTED** | Exception and reversal authority matrix. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
