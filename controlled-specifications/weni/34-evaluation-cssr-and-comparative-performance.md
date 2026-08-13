---
title: "Evaluation, CSSR, and Comparative Performance"
description: "The reported advantage is evaluated as compound system performance on crypto workflows, not as a universal intelligence score. CSSR counts a case as successful only when every required evidence, safety…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/weni/34-evaluation-cssr-and-comparative-performance"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-34"
---

# Evaluation, CSSR, and Comparative Performance

**Evaluation, CSSR, and Comparative Performance** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 34 is part of the 29 July 2026 official release. Its `FM-34-xx` controls and `EVD-34-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The reported advantage is evaluated as compound system performance on crypto workflows, not as a universal intelligence score. CSSR counts a case as successful only when every required evidence, safety, interface and payload condition passes.

### Normative design rules

- Define whether +16 means percentage points or relative improvement.
- Publish exact model IDs, dates, prompts, tool access and compute conditions internally.
- Zero observed misses is reported with sample size and confidence bound, never as zero true risk.
- Score safe abstention and correct clarification explicitly.
- Track latency, cost, memory and human-supervision load beside quality.

### Boundary / not claimed

The +16% result is not presented publicly in this document as a verified superiority claim over Claude or any general-purpose model.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Frozen cases | Time-split beginner, analyst, contract and action workflows. |
| L4 | Paired systems | Exact comparator models/settings versus complete WENI stack. |
| L3 | Scoring contract | Eligibility, evidence, clarification, calculation, UI and payload criteria. |
| L2 | Independent adjudication | Blind review, disagreement and appeal process. |
| L1 | Statistics | Paired deltas, intervals, failure taxonomy and contamination checks. |
| L0 | Ablations | Model, data, planner, policy, simulator and interface contribution. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Frozen cases | Time-split beginner, analyst, contract and action workflows. | Define whether +16 means percentage points or relative improvement. |
| Paired systems | Exact comparator models/settings versus complete WENI stack. | Publish exact model IDs, dates, prompts, tool access and compute conditions internally. |
| Scoring contract | Eligibility, evidence, clarification, calculation, UI and payload criteria. | Zero observed misses is reported with sample size and confidence bound, never as zero true risk. |
| Independent adjudication | Blind review, disagreement and appeal process. | Score safe abstention and correct clarification explicitly. |
| Statistics | Paired deltas, intervals, failure taxonomy and contamination checks. | Track latency, cost, memory and human-supervision load beside quality. |
| Ablations | Model, data, planner, policy, simulator and interface contribution. | Define whether +16 means percentage points or relative improvement. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-34-01` | Benchmark leakage | Cases influenced training or tuning | Independent holdout custody | **INVALIDATE** |
| `FM-34-02` | Unequal tools | WENI has data unavailable to comparator | Multiple fair comparison tracks | **QUALIFY** |
| `FM-34-03` | Metric gaming | Refusal inflates safety score | Compound success criteria | **RECALIBRATE** |
| `FM-34-04` | Headline misuse | System delta becomes model IQ claim | Claim matrix | **BLOCK PUBLICATION** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-34-01` | **ACCEPTED** | Internal result approximately 16% above an unspecified Claude baseline. |
| `EVD-34-02` | **ACCEPTED** | Frozen CSSR specification, dataset and adjudication guide. |
| `EVD-34-03` | **ACCEPTED** | Exact comparator IDs, settings, costs and tool parity matrix. |
| `EVD-34-04` | **ACCEPTED** | Confidence intervals, failure analysis and component ablations. |
| `EVD-34-05` | **ACCEPTED** | Signed evaluation report before any external claim. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
