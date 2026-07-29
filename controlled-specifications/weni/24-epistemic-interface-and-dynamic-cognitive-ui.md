---
title: "Epistemic Interface and Dynamic Cognitive UI"
description: "WENI’s interface is an epistemic instrument: it shows what is known, from where, at what state, with what uncertainty, which policy applied and how long an action remains valid. The model selects approved…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/weni/24-epistemic-interface-and-dynamic-cognitive-ui"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-24"
---

# Epistemic Interface and Dynamic Cognitive UI

**Epistemic Interface and Dynamic Cognitive UI** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 24 is part of the 29 July 2026 official release. Its `FM-24-xx` controls and `EVD-24-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

WENI’s interface is an epistemic instrument: it shows what is known, from where, at what state, with what uncertainty, which policy applied and how long an action remains valid. The model selects approved modules; it does not generate arbitrary executable UI.

### Normative design rules

- Evidence confidence, analytical confidence, execution confidence, residual risk and eligibility are distinct.
- Green means current checks passed, never universally safe.
- Material missing data and block reasons remain visible at every tier.
- Raw hidden chain-of-thought is not displayed; structured rationale is.
- Component schemas and state transitions are reviewed, signed and testable.

### Boundary / not claimed

Dynamic UI changes presentation, not the underlying evidence or the hard-policy outcome.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Evidence header | Sources, state pin, timestamps and freshness. |
| L4 | Risk vectors | Separate security, market, liquidity, operational and permission risk. |
| L3 | Simulation card | Inputs, expected effects, ranges and assumptions. |
| L2 | Decision rationale | Decisive evidence, calculations, alternatives and policy. |
| L1 | Action module | Decoded unsigned request, proof state and expiry. |
| L0 | Progressive detail | Tier-specific language over the same material facts. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Evidence header | Sources, state pin, timestamps and freshness. | Evidence confidence, analytical confidence, execution confidence, residual risk and eligibility are distinct. |
| Risk vectors | Separate security, market, liquidity, operational and permission risk. | Green means current checks passed, never universally safe. |
| Simulation card | Inputs, expected effects, ranges and assumptions. | Material missing data and block reasons remain visible at every tier. |
| Decision rationale | Decisive evidence, calculations, alternatives and policy. | Raw hidden chain-of-thought is not displayed; structured rationale is. |
| Action module | Decoded unsigned request, proof state and expiry. | Component schemas and state transitions are reviewed, signed and testable. |
| Progressive detail | Tier-specific language over the same material facts. | Evidence confidence, analytical confidence, execution confidence, residual risk and eligibility are distinct. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-24-01` | Confidence conflation | User interprets score as safety | Separate labelled variables | **RENDER WARNING** |
| `FM-24-02` | Generated control | Model invents executable button | Component registry | **REJECT** |
| `FM-24-03` | Stale display | Valid-looking card uses expired data | Live TTL and invalidation | **DISABLE** |
| `FM-24-04` | Hidden unknown | Missing evidence is collapsed | Known-unknown module | **BLOCK/ABSTAIN** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-24-01` | **ACCEPTED** | Component registry, schema and signed release process. |
| `EVD-24-02` | **ACCEPTED** | State-machine tests for stale, conflict, proof and block states. |
| `EVD-24-03` | **ACCEPTED** | Comprehension and risk-interpretation studies. |
| `EVD-24-04` | **ACCEPTED** | Accessibility tests for colour, icon and text redundancy. |
| `EVD-24-05` | **ACCEPTED** | Decision-rationale fidelity and provenance test. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
