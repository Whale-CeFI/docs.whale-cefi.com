---
title: Product Constitution and Non-Negotiable Boundaries
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/02-product-constitution-and-non-negotiable-boundaries
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-02
description: >-
  02 The product constitution is the highest-order design control. It defines
  what no model, operator, commercial tier or partner integration may override:
  no private-key access, no autonomous signing,
---

# Product Constitution and Non-Negotiable Boundaries

**Product Constitution and Non-Negotiable Boundaries** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 02 is part of the 29 July 2026 official release. Its `FM-02-xx` controls and `EVD-02-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

02 The product constitution is the highest-order design control. It defines what no model, operator, commercial tier or partner integration may override: no private-key access, no autonomous signing, no hidden weakening of safety and no erasure of uncertainty.

### Normative design rules

* Private keys, seed phrases and signing shares never enter the WENI trust domain.
* A material change to destination, amount, route, evidence, policy or TTL invalidates review.
* Required safety controls cannot become premium-only features.
* The model cannot override deterministic policy or edit authoritative evidence.
* Autonomous trading requires a new signed product, safety and legal decision and is out of Release 1.

### Boundary / not claimed

Human-in-the-Loop is not used as a claim that every workflow is legally unregulated or economically safe.

## Reference architecture

| Layer | Component     | Responsibility                                               |
| ----- | ------------- | ------------------------------------------------------------ |
| L5    | Explain       | Translate evidence and mechanics into calibrated language.   |
| L4    | Screen        | Apply evidence coverage, integrity and eligibility controls. |
| L3    | Simulate      | Predict bounded state transition over pinned assumptions.    |
| L2    | Prepare       | Construct a decoded, unsigned and expiring request.          |
| L1    | IRON BOUNDARY | WENI stops; authority does not cross this boundary.          |
| L0    | Authorise     | User-controlled wallet or enterprise quorum signs.           |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component     | Responsibility / input                                       | Control invariant                                                                                    |
| ------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Explain       | Translate evidence and mechanics into calibrated language.   | Private keys, seed phrases and signing shares never enter the WENI trust domain.                     |
| Screen        | Apply evidence coverage, integrity and eligibility controls. | A material change to destination, amount, route, evidence, policy or TTL invalidates review.         |
| Simulate      | Predict bounded state transition over pinned assumptions.    | Required safety controls cannot become premium-only features.                                        |
| Prepare       | Construct a decoded, unsigned and expiring request.          | The model cannot override deterministic policy or edit authoritative evidence.                       |
| IRON BOUNDARY | WENI stops; authority does not cross this boundary.          | Autonomous trading requires a new signed product, safety and legal decision and is out of Release 1. |
| Authorise     | User-controlled wallet or enterprise quorum signs.           | Private keys, seed phrases and signing shares never enter the WENI trust domain.                     |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                                 | Primary control                                             | Required state       |
| ---------- | ------------------- | ---------------------------------------------- | ----------------------------------------------------------- | -------------------- |
| `FM-02-01` | Authority leakage   | Model output is treated as approval            | Typed state machine and isolated signing surface            | **STOP**             |
| `FM-02-02` | Consent collapse    | One click implies several permissions          | Distinct connect, message, allowance and transaction states | **RE-AUTHORISE**     |
| `FM-02-03` | Commercial override | Sponsored route bypasses suitability filters   | Ranking separation and hard eligibility policy              | **BLOCK**            |
| `FM-02-04` | UI drift            | Generated interface bypasses reviewed controls | Signed component registry                                   | **REJECT COMPONENT** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                |
| ----------- | ------------ | ---------------------------------------------------------------- |
| `EVD-02-01` | **ACCEPTED** | Signed Product Constitution and prohibited-capability register.  |
| `EVD-02-02` | **ACCEPTED** | End-to-end authority data-flow and key-exposure review.          |
| `EVD-02-03` | **ACCEPTED** | Wallet/multisig integration threat model and test vectors.       |
| `EVD-02-04` | **ACCEPTED** | Policy test proving non-overridable controls cannot be bypassed. |
| `EVD-02-05` | **ACCEPTED** | UX copy dictionary for every permission and signature state.     |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
