---
title: Withdrawal Lifecycle and User-Exit Safety
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/platform/20-withdrawal-lifecycle-and-user-exit-safety
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-20
---

# Withdrawal Lifecycle and User-Exit Safety

**Withdrawal Lifecycle and User-Exit Safety** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 20 is part of the 29 July 2026 official release. Its `FM-20-xx` controls and `EVD-20-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Withdrawals reverse the deposit path under stricter authority. The platform must authenticate intent, reserve the liability, screen policy, obtain custody approval, broadcast the exact authorised transfer, observe finality and settle the ledger without trapping legitimate user exits during an incident.

### Normative design rules

* Bind approval to immutable asset, chain, destination, amount, fee limit and expiry.
* Use separate idempotency identities for request, custody job and chain transaction.
* Never debit available balance without a recoverable reserved state.
* Failed, replaced and expired transactions follow explicit ledger transitions.
* Emergency pause design preserves a governed path for safe user exits where technically possible.

### Boundary / not claimed

The system does not imply that pause() may indiscriminately block every user withdrawal without an emergency-exit analysis. TEAM TRANSCRIPT + TECHNICAL NORMALISATION

## Reference architecture

| Layer | Component          | Responsibility                                                                  |
| ----- | ------------------ | ------------------------------------------------------------------------------- |
| L5    | Request            | Authenticated user selects asset, network, amount and destination.              |
| L4    | Risk checks        | Balance, destination, sanctions, velocity and product-state controls.           |
| L3    | Reservation        | Available liability moves atomically to withdrawal-pending.                     |
| L2    | Custody approval   | approved MPC custody provider MPC policy authorises the exact transfer request. |
| L1    | Broadcast/finality | Chain transaction is observed to terminal state.                                |
| L0    | Settlement         | Ledger clears reserved liability, fee and custody asset movement.               |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component          | Responsibility / input                                                          | Control invariant                                                                                |
| ------------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Request            | Authenticated user selects asset, network, amount and destination.              | Bind approval to immutable asset, chain, destination, amount, fee limit and expiry.              |
| Risk checks        | Balance, destination, sanctions, velocity and product-state controls.           | Use separate idempotency identities for request, custody job and chain transaction.              |
| Reservation        | Available liability moves atomically to withdrawal-pending.                     | Never debit available balance without a recoverable reserved state.                              |
| Custody approval   | approved MPC custody provider MPC policy authorises the exact transfer request. | Failed, replaced and expired transactions follow explicit ledger transitions.                    |
| Broadcast/finality | Chain transaction is observed to terminal state.                                | Emergency pause design preserves a governed path for safe user exits where technically possible. |
| Settlement         | Ledger clears reserved liability, fee and custody asset movement.               | Bind approval to immutable asset, chain, destination, amount, fee limit and expiry.              |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode         | Failure effect                      | Primary control                 | Required state |
| ---------- | -------------------- | ----------------------------------- | ------------------------------- | -------------- |
| `FM-20-01` | Address substitution | Funds leave to attacker destination | Decoded approval binding        | **BLOCK**      |
| `FM-20-02` | Double withdrawal    | Same liability is spent twice       | Atomic reservation/idempotency  | **REJECT**     |
| `FM-20-03` | Stuck transaction    | Funds remain indefinitely reserved  | Replacement/expiry workflow     | **RESOLVE**    |
| `FM-20-04` | Global pause         | Users cannot exit safe assets       | Granular breaker/emergency exit | **LIMIT**      |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                    |
| ----------- | ------------ | -------------------------------------------------------------------- |
| `EVD-20-01` | **ACCEPTED** | Withdrawal state machine, posting rules and approval contract.       |
| `EVD-20-02` | **ACCEPTED** | Destination, velocity, sanctions and step-up-authentication tests.   |
| `EVD-20-03` | **ACCEPTED** | Failed, replaced, dropped and reorg transaction scenarios.           |
| `EVD-20-04` | **ACCEPTED** | approved MPC custody provider policy-to-ledger correlation evidence. |
| `EVD-20-05` | **ACCEPTED** | Emergency withdrawal and user-communication exercise.                |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
