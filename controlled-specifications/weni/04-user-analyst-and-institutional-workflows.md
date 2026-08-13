---
title: "User, Analyst, and Institutional Workflows"
description: "04 One evidence state must support very different cognitive and organisational contexts. WENI changes explanation density, control sequencing and approval integration without changing the underlying material…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/weni/04-user-analyst-and-institutional-workflows"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-04"
---

# User, Analyst, and Institutional Workflows

**User, Analyst, and Institutional Workflows** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 04 is part of the 29 July 2026 official release. Its `FM-04-xx` controls and `EVD-04-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

04 One evidence state must support very different cognitive and organisational contexts. WENI changes explanation density, control sequencing and approval integration without changing the underlying material facts or granting itself authority.

### Normative design rules

- Competency changes presentation depth, not factual content or required controls.
- Institutional workflows use role separation and approval quorum, not a larger chat window.
- The novice path favours comprehension gates before payload construction.
- The professional path exposes machine-readable evidence without exposing secrets.
- Every persona can inspect why the system abstained, blocked or expired an action.

### Boundary / not claimed

Personalisation is not permission to produce undisclosed personalised investment advice.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Tier-0 learner | Needs clarity, capital protection and guided comprehension. |
| L4 | Active participant | Needs current evidence, comparisons and safe preparation. |
| L3 | Tier-Pro analyst | Needs raw provenance, logs, exports and reproducibility. |
| L2 | Risk manager | Needs policy, limits, segregation of duties and auditability. |
| L1 | Enterprise multisig | Needs an unsigned proposal integrated with existing approval. |
| L0 | WENI evidence state | One governed substrate projected to each authorised role. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Tier-0 learner | Needs clarity, capital protection and guided comprehension. | Competency changes presentation depth, not factual content or required controls. |
| Active participant | Needs current evidence, comparisons and safe preparation. | Institutional workflows use role separation and approval quorum, not a larger chat window. |
| Tier-Pro analyst | Needs raw provenance, logs, exports and reproducibility. | The novice path favours comprehension gates before payload construction. |
| Risk manager | Needs policy, limits, segregation of duties and auditability. | The professional path exposes machine-readable evidence without exposing secrets. |
| Enterprise multisig | Needs an unsigned proposal integrated with existing approval. | Every persona can inspect why the system abstained, blocked or expired an action. |
| WENI evidence state | One governed substrate projected to each authorised role. | Competency changes presentation depth, not factual content or required controls. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-04-01` | Persona drift | Wrong disclosure depth or control path | Verified role and competency state | **FALL BACK** |
| `FM-04-02` | Institutional overreach | One analyst creates and approves a route | Segregation of duties | **REQUIRE QUORUM** |
| `FM-04-03` | Beginner concealment | Complex risk hidden behind green status | Material-fact invariants | **EXPAND WARNING** |
| `FM-04-04` | Data oversharing | Pro view exposes restricted evidence | Field-level entitlements | **REDACT** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-04-01` | **ACCEPTED** | Journey maps and state machines for all four primary roles. |
| `EVD-04-02` | **ACCEPTED** | Competency calibration study and misclassification analysis. |
| `EVD-04-03` | **ACCEPTED** | Enterprise RACI and multisig integration specification. |
| `EVD-04-04` | **ACCEPTED** | Accessibility and comprehension validation for Tier-0 warnings. |
| `EVD-04-05` | **ACCEPTED** | Redaction tests for Tier-Pro exports. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
