---
title: Deterministic Action Builder and the Iron Boundary
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/22-deterministic-action-builder-and-the-iron-boundary
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-22
description: >-
  Only a deterministic, chain-specific builder may turn policy-approved typed
  parameters into transaction data. An independent decoder reconstructs
  human-readable effects; simulation and payload hashes
---

# Deterministic Action Builder and the Iron Boundary

**Deterministic Action Builder and the Iron Boundary** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 22 is part of the 29 July 2026 official release. Its `FM-22-xx` controls and `EVD-22-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Only a deterministic, chain-specific builder may turn policy-approved typed parameters into transaction data. An independent decoder reconstructs human-readable effects; simulation and payload hashes bind review to the exact unsigned request before WENI stops.

### Normative design rules

* Builder input is typed and policy-approved; free-form model text never becomes calldata.
* Decoder implementation is independent enough to detect builder defects.
* The exact payload hash appears in the Decision Ledger and review state.
* Any parameter or state change forces rebuild, resimulation and renewed review.
* WENI cannot access the private key, signing share or approval device.

### Boundary / not claimed

The builder prepares unsigned transaction data. It does not submit, sign or independently decide to move assets.

## Reference architecture

| Layer | Component           | Responsibility                                                 |
| ----- | ------------------- | -------------------------------------------------------------- |
| L5    | Approved parameters | Exact chain, contracts, methods, amounts, limits and deadline. |
| L4    | Action builder      | ABI-safe construction under an allowlisted action schema.      |
| L3    | Independent decoder | Reconstructs destination, value, calldata and permissions.     |
| L2    | Exact simulation    | Tests the final payload over pinned state.                     |
| L1    | Review envelope     | Evidence, effects, warnings, hash, policy and expiry.          |
| L0    | IRON BOUNDARY       | Unsigned request passes to a user-controlled signing surface.  |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component           | Responsibility / input                                         | Control invariant                                                                        |
| ------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Approved parameters | Exact chain, contracts, methods, amounts, limits and deadline. | Builder input is typed and policy-approved; free-form model text never becomes calldata. |
| Action builder      | ABI-safe construction under an allowlisted action schema.      | Decoder implementation is independent enough to detect builder defects.                  |
| Independent decoder | Reconstructs destination, value, calldata and permissions.     | The exact payload hash appears in the Decision Ledger and review state.                  |
| Exact simulation    | Tests the final payload over pinned state.                     | Any parameter or state change forces rebuild, resimulation and renewed review.           |
| Review envelope     | Evidence, effects, warnings, hash, policy and expiry.          | WENI cannot access the private key, signing share or approval device.                    |
| IRON BOUNDARY       | Unsigned request passes to a user-controlled signing surface.  | Builder input is typed and policy-approved; free-form model text never becomes calldata. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode         | Failure effect                     | Primary control                 | Required state |
| ---------- | -------------------- | ---------------------------------- | ------------------------------- | -------------- |
| `FM-22-01` | Calldata injection   | Unauthorised method or destination | Allowlisted schemas and decoder | **BLOCK**      |
| `FM-22-02` | Approval overreach   | Unlimited allowance exceeds intent | Exact allowance policy          | **REBUILD**    |
| `FM-22-03` | Review/sign mismatch | Wallet displays changed payload    | Hash and decoded comparison     | **ABORT**      |
| `FM-22-04` | Expired action       | Quote/state no longer valid        | TTL gate at handoff             | **RECOMPUTE**  |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                      |
| ----------- | ------------ | ------------------------------------------------------ |
| `EVD-22-01` | **ACCEPTED** | Chain/action builder specification and golden vectors. |
| `EVD-22-02` | **ACCEPTED** | Independent decoder and differential tests.            |
| `EVD-22-03` | **ACCEPTED** | Exact-payload simulation and hash-binding evidence.    |
| `EVD-22-04` | **ACCEPTED** | Wallet/multisig handoff and expiry integration tests.  |
| `EVD-22-05` | **ACCEPTED** | Key-exposure and signing-authority penetration review. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
