---
title: "Double-Entry Ledger and Reconciliation"
description: "The Accounting Ledger Service is the internal financial source of record; chain and custody systems provide external settlement evidence. Every monetary movement creates balanced, immutable journal entries…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/weni/30-double-entry-ledger-and-reconciliation"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-30"
---

# Double-Entry Ledger and Reconciliation

**Double-Entry Ledger and Reconciliation** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 30 is part of the 29 July 2026 official release. Its `FM-30-xx` controls and `EVD-30-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The Accounting Ledger Service is the internal financial source of record; chain and custody systems provide external settlement evidence. Every monetary movement creates balanced, immutable journal entries and passes asset-specific reconciliation and finality controls.

### Normative design rules

- The journal, not a mutable balance column, is the accounting authority.
- Never delete or rewrite posted entries; use reversal and correcting entries.
- Confirmation and finality policy is network- and action-specific.
- Reconciliation thresholds are asset-specific; one wei is not a universal incident threshold.
- Kafka projections can be rebuilt, but the financial journal retains independent durable authority.

### Boundary / not claimed

Event replay alone is not represented as sufficient to reconstruct legally authoritative balances without the durable journal and source evidence.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Observed deposit | Chain/custody event with network, asset and finality state. |
| L4 | Validation | Identity, duplication, amount, token behaviour and ownership checks. |
| L3 | Journal | Balanced debit/credit entries with immutable reference. |
| L2 | Projection | User balance and product view derived from journal. |
| L1 | Reconciliation | Assets, liabilities, pending and exceptions compared. |
| L0 | Exception control | Quarantine, safe mode, investigation and correction entries. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Observed deposit | Chain/custody event with network, asset and finality state. | The journal, not a mutable balance column, is the accounting authority. |
| Validation | Identity, duplication, amount, token behaviour and ownership checks. | Never delete or rewrite posted entries; use reversal and correcting entries. |
| Journal | Balanced debit/credit entries with immutable reference. | Confirmation and finality policy is network- and action-specific. |
| Projection | User balance and product view derived from journal. | Reconciliation thresholds are asset-specific; one wei is not a universal incident threshold. |
| Reconciliation | Assets, liabilities, pending and exceptions compared. | Kafka projections can be rebuilt, but the financial journal retains independent durable authority. |
| Exception control | Quarantine, safe mode, investigation and correction entries. | The journal, not a mutable balance column, is the accounting authority. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-30-01` | Duplicate webhook | Deposit credits twice | Idempotency and unique settlement key | **REJECT** |
| `FM-30-02` | Reorg | Credited deposit disappears | Pending/final states and reversal | **RECONCILE** |
| `FM-30-03` | Decimal mismatch | Asset/liability delta | Canonical asset registry | **QUARANTINE** |
| `FM-30-04` | Journal imbalance | Accounting invariant breaks | Database constraint and halt | **SAFE MODE** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-30-01` | **ACCEPTED** | Chart of accounts and journal-entry specification. |
| `EVD-30-02` | **ACCEPTED** | Database constraints proving balanced posting. |
| `EVD-30-03` | **ACCEPTED** | Deposit, withdrawal, yield, fee, reversal and correction test vectors. |
| `EVD-30-04` | **ACCEPTED** | Reorg, duplicate and out-of-order event exercises. |
| `EVD-30-05` | **ACCEPTED** | Daily assets/liabilities and exception reconciliation evidence. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
