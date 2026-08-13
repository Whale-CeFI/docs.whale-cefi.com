---
title: The Decision-Quality Problem in Web3
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/weni/01-the-decision-quality-problem-in-web3
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-01
description: >-
  01 The failure WENI addresses is not lack of information. It is the collapse
  of decision quality when fragmented, time-sensitive and adversarial evidence
  meets irreversible financial action. A convers
---

# The Decision-Quality Problem in Web3

**The Decision-Quality Problem in Web3** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 01 is part of the 29 July 2026 official release. Its `FM-01-xx` controls and `EVD-01-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

01 The failure WENI addresses is not lack of information. It is the collapse of decision quality when fragmented, time-sensitive and adversarial evidence meets irreversible financial action. A conversational answer alone cannot close that gap.

### Normative design rules

* Treat ambiguity as a state to resolve, never as permission to invent a material parameter.
* Separate educational explanation from time-sensitive action preparation.
* Expose missing, stale and conflicting evidence before showing an actionable control.
* Measure safe task completion, not conversational fluency alone.
* Preserve the user’s final authority even when the system has high confidence.

### Boundary / not claimed

WENI is not represented as eliminating human error, market risk or protocol risk. It is a governed decision-support and action-preparation system.

## Reference architecture

| Layer | Component           | Responsibility                                                                    |
| ----- | ------------------- | --------------------------------------------------------------------------------- |
| L4    | Human expression    | Incomplete goals, slang, panic, FOMO and missing constraints.                     |
| L3    | Fragmented evidence | Chain state, protocol code, market structure and social signals disagree in time. |
| L2    | Decision context    | Intent, competence, risk state and jurisdiction must be made explicit.            |
| L1    | Action preparation  | A route becomes inspectable only after calculation, simulation and policy.        |
| L0    | Human authority     | The user or multisig independently decides and signs.                             |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component           | Responsibility / input                                                            | Control invariant                                                                          |
| ------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Human expression    | Incomplete goals, slang, panic, FOMO and missing constraints.                     | Treat ambiguity as a state to resolve, never as permission to invent a material parameter. |
| Fragmented evidence | Chain state, protocol code, market structure and social signals disagree in time. | Separate educational explanation from time-sensitive action preparation.                   |
| Decision context    | Intent, competence, risk state and jurisdiction must be made explicit.            | Expose missing, stale and conflicting evidence before showing an actionable control.       |
| Action preparation  | A route becomes inspectable only after calculation, simulation and policy.        | Measure safe task completion, not conversational fluency alone.                            |
| Human authority     | The user or multisig independently decides and signs.                             | Preserve the user’s final authority even when the system has high confidence.              |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                            | Primary control                                | Required state         |
| ---------- | ------------------- | ----------------------------------------- | ---------------------------------------------- | ---------------------- |
| `FM-01-01` | Cognitive overload  | User follows the first plausible route    | Progressive disclosure and comprehension gates | **CLARIFY OR EXPLAIN** |
| `FM-01-02` | Stale evidence      | Quote or contract state has changed       | Freshness budgets and dynamic expiry           | **RECOMPUTE**          |
| `FM-01-03` | Social manipulation | FOMO displaces risk context               | Behavioural signal plus independent evidence   | **DE-ESCALATE**        |
| `FM-01-04` | False certainty     | Language confidence is mistaken for truth | Evidence/confidence/risk separation            | **ABSTAIN OR BLOCK**   |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                      |
| ----------- | ------------ | ---------------------------------------------------------------------- |
| `EVD-01-01` | **ACCEPTED** | Versioned taxonomy of beginner and professional failure modes.         |
| `EVD-01-02` | **ACCEPTED** | Paired user studies measuring comprehension and safe completion.       |
| `EVD-01-03` | **ACCEPTED** | Incident corpus linking information failures to asset-impact pathways. |
| `EVD-01-04` | **ACCEPTED** | Action-state telemetry with clarification, abstention and block rates. |
| `EVD-01-05` | **ACCEPTED** | Product constitution approving retained human authority.               |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
