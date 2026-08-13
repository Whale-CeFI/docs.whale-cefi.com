---
title: Double-Entry Ledger Service
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/platform/18-double-entry-ledger-service
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-18
---

# Double-Entry Ledger Service

**Double-Entry Ledger Service** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 18 is part of the 29 July 2026 official release. Its `FM-18-xx` controls and `EVD-18-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The Accounting Ledger Service is the internal financial source of record. Every economic event posts a balanced, immutable journal transaction; balances are projections of entries, not independently mutable fields.

### Normative design rules

* Database constraints reject unbalanced or duplicate postings.
* Posted entries are never updated or deleted in routine operation.
* Every posting rule carries code version, business reason and approver.
* External references are unique within network/provider scope.
* Corrections use reversal and replacement entries under controlled authority.

### Boundary / not claimed

Kafka, UI balances and analytical projections are not permitted to replace the ledger journal as accounting authority.

## Reference architecture

| Layer | Component           | Responsibility                                                       |
| ----- | ------------------- | -------------------------------------------------------------------- |
| L5    | Economic event      | Validated deposit, withdrawal, fee, yield or correction instruction. |
| L4    | Posting rule        | Versioned mapping from event to debit and credit accounts.           |
| L3    | Journal transaction | Atomic balanced entries with unique reference.                       |
| L2    | Integrity chain     | Tamper-evident sequencing, hashes and audit metadata.                |
| L1    | Balance projection  | Derived available, pending and locked balances.                      |
| L0    | Reversal/correction | New entries preserve history and repair state.                       |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component           | Responsibility / input                                               | Control invariant                                                            |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Economic event      | Validated deposit, withdrawal, fee, yield or correction instruction. | Database constraints reject unbalanced or duplicate postings.                |
| Posting rule        | Versioned mapping from event to debit and credit accounts.           | Posted entries are never updated or deleted in routine operation.            |
| Journal transaction | Atomic balanced entries with unique reference.                       | Every posting rule carries code version, business reason and approver.       |
| Integrity chain     | Tamper-evident sequencing, hashes and audit metadata.                | External references are unique within network/provider scope.                |
| Balance projection  | Derived available, pending and locked balances.                      | Corrections use reversal and replacement entries under controlled authority. |
| Reversal/correction | New entries preserve history and repair state.                       | Database constraints reject unbalanced or duplicate postings.                |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                  | Primary control          | Required state |
| ---------- | ------------------- | ------------------------------- | ------------------------ | -------------- |
| `FM-18-01` | Unbalanced journal  | Assets and liabilities diverge  | Atomic constraint        | **HALT**       |
| `FM-18-02` | Duplicate event     | User credited twice             | Unique idempotency key   | **REJECT**     |
| `FM-18-03` | Direct balance edit | Audit trail is destroyed        | No mutable authority     | **DENY**       |
| `FM-18-04` | Posting-rule defect | Consistent but wrong accounting | Versioned tests/reversal | **CORRECT**    |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                      |
| ----------- | ------------ | ------------------------------------------------------ |
| `EVD-18-01` | **ACCEPTED** | Ledger schema, constraints and posting-rule catalogue. |
| `EVD-18-02` | **ACCEPTED** | Golden journals for every product lifecycle.           |
| `EVD-18-03` | **ACCEPTED** | Duplicate, concurrency and rollback tests.             |
| `EVD-18-04` | **ACCEPTED** | Tamper-evidence and privileged-access review.          |
| `EVD-18-05` | **ACCEPTED** | Reversal/correction and period-close procedures.       |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
