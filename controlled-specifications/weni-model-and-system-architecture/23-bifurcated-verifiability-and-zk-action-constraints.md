---
title: Bifurcated Verifiability and ZK Action Constraints
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/23-bifurcated-verifiability-and-zk-action-constraints
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-23
description: >-
  The fast deterministic path and the proof path solve different problems.
  Rust/Go services provide responsive calculations; the production ZK
  Action-Constraint Proof establishes that committed code pro
---

# Bifurcated Verifiability and ZK Action Constraints

**Bifurcated Verifiability and ZK Action Constraints** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 23 is part of the 29 July 2026 official release. Its `FM-23-xx` controls and `EVD-23-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The fast deterministic path and the proof path solve different problems. Rust/Go services provide responsive calculations; the production ZK Action-Constraint Proof establishes that committed code processed committed inputs and satisfied encoded constraints.

### Normative design rules

* First proof target is deterministic action/policy computation, not open-ended language reasoning.
* Public inputs bind chain, state, data commitments, policy, route and payload hash.
* Proof states are explicit: not required, pending, verified, failed, expired or unavailable.
* A proof-required path fails closed on generation or verification failure.
* Prover cost, latency, setup, circuit coverage and key lifecycle are measured separately.

### Boundary / not claimed

No production zkML, proof of natural-language truth or proof of economic safety under changing conditions is claimed for Release 1.

## Reference architecture

| Layer | Component   | Responsibility                                                |
| ----- | ----------- | ------------------------------------------------------------- |
| L5    | Freeze      | Commit state, quotes, policy, user limits, route and payload. |
| L4    | Compute     | Run the deterministic action programme and simulation.        |
| L3    | Witness     | Construct private witness and public commitments.             |
| L2    | Prove       | Generate proof under a versioned proving key.                 |
| L1    | Verify      | Independent verifier accepts or rejects.                      |
| L0    | Bind/expire | Attach proof to exact payload and invalidate on change.       |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component   | Responsibility / input                                        | Control invariant                                                                                 |
| ----------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Freeze      | Commit state, quotes, policy, user limits, route and payload. | First proof target is deterministic action/policy computation, not open-ended language reasoning. |
| Compute     | Run the deterministic action programme and simulation.        | Public inputs bind chain, state, data commitments, policy, route and payload hash.                |
| Witness     | Construct private witness and public commitments.             | Proof states are explicit: not required, pending, verified, failed, expired or unavailable.       |
| Prove       | Generate proof under a versioned proving key.                 | A proof-required path fails closed on generation or verification failure.                         |
| Verify      | Independent verifier accepts or rejects.                      | Prover cost, latency, setup, circuit coverage and key lifecycle are measured separately.          |
| Bind/expire | Attach proof to exact payload and invalidate on change.       | First proof target is deterministic action/policy computation, not open-ended language reasoning. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode     | Failure effect                        | Primary control         | Required state  |
| ---------- | ---------------- | ------------------------------------- | ----------------------- | --------------- |
| `FM-23-01` | False scope      | Proof is described as truth or safety | Canonical statement     | **BLOCK CLAIM** |
| `FM-23-02` | Circuit omission | Relevant risk is not encoded          | Coverage register       | **DISCLOSE**    |
| `FM-23-03` | Input dishonesty | Committed source is stale or false    | Evidence validation     | **INVALIDATE**  |
| `FM-23-04` | Key compromise   | Invalid proofs could verify           | Ceremony and revocation | **ROTATE**      |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                  |
| ----------- | ------------ | ------------------------------------------------------------------ |
| `EVD-23-01` | **ACCEPTED** | Circuit/zkVM programme, statement and witness specification.       |
| `EVD-23-02` | **ACCEPTED** | Prover/verifier implementation, keys and security assumptions.     |
| `EVD-23-03` | **ACCEPTED** | Proof size, latency, cost and mobile verification benchmark.       |
| `EVD-23-04` | **ACCEPTED** | Independent audit and invalid-proof test vectors.                  |
| `EVD-23-05` | **ACCEPTED** | Public wording that confines proof meaning to encoded computation. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
