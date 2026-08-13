---
title: DPO and Financial-Safety Alignment
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/weni/09-dpo-and-financial-safety-alignment
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-09
description: >-
  09 DPO shapes learned preferences: retrieve instead of invent, clarify instead
  of guess, abstain when evidence is insufficient and preserve user authority.
  These are soft behavioural tendencies; deter
---

# DPO and Financial-Safety Alignment

**DPO and Financial-Safety Alignment** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 09 is part of the 29 July 2026 official release. Its `FM-09-xx` controls and `EVD-09-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

09 DPO shapes learned preferences: retrieve instead of invent, clarify instead of guess, abstain when evidence is insufficient and preserve user authority. These are soft behavioural tendencies; deterministic policy remains the hard financial control.

### Normative design rules

* Preference pairs must reflect real crypto failure modes, not generic politeness.
* Annotators receive conflict-of-interest, expertise and disagreement protocols.
* Safety tuning cannot remove visibility of legitimate uncertainty or adverse evidence.
* Evaluate helpfulness and safe completion together to detect refusal collapse.
* A DPO pass never authorises a model to calculate authoritative asset amounts.

### Boundary / not claimed

DPO does not mathematically eliminate hallucinations and is never cited as proof of transaction correctness.

## Reference architecture

| Layer | Component             | Responsibility                                                               |
| ----- | --------------------- | ---------------------------------------------------------------------------- |
| L4    | Preference taxonomy   | Evidence, uncertainty, clarification, refusal and user-control behaviours.   |
| L3    | Chosen/rejected pairs | Scenario-specific comparisons with provenance and adjudication.              |
| L2    | DPO optimisation      | Versioned objective, hyperparameters and base checkpoint.                    |
| L1    | Safety evaluation     | Pre/post tests for fabrication, over-agreement and unsafe action framing.    |
| L0    | Hard controls         | Policy, simulation and builders remain outside learned preference authority. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component             | Responsibility / input                                                       | Control invariant                                                                     |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Preference taxonomy   | Evidence, uncertainty, clarification, refusal and user-control behaviours.   | Preference pairs must reflect real crypto failure modes, not generic politeness.      |
| Chosen/rejected pairs | Scenario-specific comparisons with provenance and adjudication.              | Annotators receive conflict-of-interest, expertise and disagreement protocols.        |
| DPO optimisation      | Versioned objective, hyperparameters and base checkpoint.                    | Safety tuning cannot remove visibility of legitimate uncertainty or adverse evidence. |
| Safety evaluation     | Pre/post tests for fabrication, over-agreement and unsafe action framing.    | Evaluate helpfulness and safe completion together to detect refusal collapse.         |
| Hard controls         | Policy, simulation and builders remain outside learned preference authority. | A DPO pass never authorises a model to calculate authoritative asset amounts.         |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                        | Primary control                     | Required state  |
| ---------- | ------------------- | ------------------------------------- | ----------------------------------- | --------------- |
| `FM-09-01` | Sycophancy          | Model validates desired risky action  | Counter-preference cases and policy | **CHALLENGE**   |
| `FM-09-02` | Over-refusal        | Useful low-risk workflow is abandoned | Paired helpfulness evaluation       | **CLARIFY**     |
| `FM-09-03` | Preference bias     | Annotator culture becomes policy      | Diverse review and appeals          | **REVIEW DATA** |
| `FM-09-04` | Soft-control misuse | Alignment is treated as a guarantee   | Iron Boundary enforcement           | **BLOCK CLAIM** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                        |
| ----------- | ------------ | ------------------------------------------------------------------------ |
| `EVD-09-01` | **ACCEPTED** | Preference-data card and annotator policy.                               |
| `EVD-09-02` | **ACCEPTED** | DPO run card, hyperparameters and checkpoint hashes.                     |
| `EVD-09-03` | **ACCEPTED** | Pre/post hallucination, sycophancy, refusal and tool-use evaluation.     |
| `EVD-09-04` | **ACCEPTED** | High-risk adversarial set with human adjudication.                       |
| `EVD-09-05` | **ACCEPTED** | Evidence that deterministic controls remain independent of model output. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
