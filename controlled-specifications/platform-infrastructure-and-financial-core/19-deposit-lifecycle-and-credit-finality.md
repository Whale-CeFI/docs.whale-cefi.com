---
title: Deposit Lifecycle and Credit Finality
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/19-deposit-lifecycle-and-credit-finality
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-19
---

# Deposit Lifecycle and Credit Finality

**Deposit Lifecycle and Credit Finality** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 19 is part of the 29 July 2026 official release. Its `FM-19-xx` controls and `EVD-19-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

A deposit becomes an internal user liability only after the platform has identified the canonical asset, observed the transfer, applied the chain-specific finality policy, validated custody evidence and posted a balanced ledger transaction. Mempool visibility is a user-experience signal, not settlement.

### Normative design rules

* Use a unique deposit identity composed from chain, transaction and log/output index.
* Credit only allowlisted asset, network, destination and amount evidence.
* Finality is configured per chain and action; no universal 12-confirmation rule is assumed.
* Provider webhooks are authenticated, replay-protected and reconciled to independent chain evidence.
* A credited deposit publishes an event through a transactional outbox after the ledger commit.

### Boundary / not claimed

A transaction seen in the mempool or included in one block is not represented as a final credited deposit.

## Reference architecture

| Layer | Component          | Responsibility                                                  |
| ----- | ------------------ | --------------------------------------------------------------- |
| L5    | Initiation         | Wallet submits a transfer to an approved address or contract.   |
| L4    | Observation        | On-chain ingester records transaction, asset and destination.   |
| L3    | Pending state      | UI exposes observed but non-spendable value.                    |
| L2    | Finality gate      | Network/action policy evaluates confirmations and reorg risk.   |
| L1    | Custody validation | Signed provider event or direct balance evidence is reconciled. |
| L0    | Ledger credit      | Atomic posting creates the platform asset and user liability.   |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component          | Responsibility / input                                          | Control invariant                                                                                   |
| ------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Initiation         | Wallet submits a transfer to an approved address or contract.   | Use a unique deposit identity composed from chain, transaction and log/output index.                |
| Observation        | On-chain ingester records transaction, asset and destination.   | Credit only allowlisted asset, network, destination and amount evidence.                            |
| Pending state      | UI exposes observed but non-spendable value.                    | Finality is configured per chain and action; no universal 12-confirmation rule is assumed.          |
| Finality gate      | Network/action policy evaluates confirmations and reorg risk.   | Provider webhooks are authenticated, replay-protected and reconciled to independent chain evidence. |
| Custody validation | Signed provider event or direct balance evidence is reconciled. | A credited deposit publishes an event through a transactional outbox after the ledger commit.       |
| Ledger credit      | Atomic posting creates the platform asset and user liability.   | Use a unique deposit identity composed from chain, transaction and log/output index.                |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode         | Failure effect                              | Primary control                  | Required state     |
| ---------- | -------------------- | ------------------------------------------- | -------------------------------- | ------------------ |
| `FM-19-01` | Chain reorganisation | Previously observed transfer disappears     | Pending/finality state machine   | **REVERT PENDING** |
| `FM-19-02` | Webhook replay       | Duplicate liability is created              | Idempotency and sequence control | **REJECT**         |
| `FM-19-03` | Wrong token          | Unsupported asset is credited               | Canonical registry validation    | **QUARANTINE**     |
| `FM-19-04` | Ledger/event split   | Credit exists but downstream state is stale | Transactional outbox             | **REPLAY**         |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                                     |
| ----------- | ------------ | ------------------------------------------------------------------------------------- |
| `EVD-19-01` | **ACCEPTED** | Mempool detection, pending state and approved MPC custody provider event integration. |
| `EVD-19-02` | **ACCEPTED** | Per-chain deposit state machine and finality table.                                   |
| `EVD-19-03` | **ACCEPTED** | Webhook signature, replay and ordering test evidence.                                 |
| `EVD-19-04` | **ACCEPTED** | Reorg, duplicate-log and unsupported-token test vectors.                              |
| `EVD-19-05` | **ACCEPTED** | End-to-end chain-to-ledger trace for each production asset.                           |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
