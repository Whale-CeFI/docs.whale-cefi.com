---
title: PEFT and Adapter Composition
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/weni/08-peft-and-adapter-composition
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-08
description: >-
  08 Parameter-efficient adaptation is treated as a controlled method family,
  not a magic compression claim. The chosen technique, targeted modules,
  trainable parameter count, composition, merging, quan
---

# PEFT and Adapter Composition

**PEFT and Adapter Composition** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 08 is part of the 29 July 2026 official release. Its `FM-08-xx` controls and `EVD-08-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

08 Parameter-efficient adaptation is treated as a controlled method family, not a magic compression claim. The chosen technique, targeted modules, trainable parameter count, composition, merging, quantisation and compatibility behaviour must be explicit.

### Normative design rules

* Do not label the implementation LoRA until the training manifest proves it.
* Measure active parameters, memory, throughput and quality under the deployed composition.
* Prevent incompatible adapters from silently sharing one runtime.
* Evaluate each adapter alone and in combination to expose interference.
* Bind every served adapter set to the deployment manifest and policy version.

### Boundary / not claimed

PEFT efficiency does not establish better reasoning, safety or ownership without task-specific evidence and contract rights.

## Reference architecture

| Layer | Component         | Responsibility                                                     |
| ----- | ----------------- | ------------------------------------------------------------------ |
| L5    | Frozen foundation | Contract-permitted base parameters and module map.                 |
| L4    | Domain adapters   | Crypto reasoning, code, protocol and market specialisation.        |
| L3    | Safety adapters   | Evidence use, abstention, uncertainty and interaction constraints. |
| L2    | Router            | Selects compatible adapter set by task and deployment policy.      |
| L1    | Merge/serve       | Deterministic packaging, quantisation and runtime compatibility.   |
| L0    | Rollback          | Independent removal or reversion of defective adaptation.          |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component         | Responsibility / input                                             | Control invariant                                                                         |
| ----------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Frozen foundation | Contract-permitted base parameters and module map.                 | Do not label the implementation LoRA until the training manifest proves it.               |
| Domain adapters   | Crypto reasoning, code, protocol and market specialisation.        | Measure active parameters, memory, throughput and quality under the deployed composition. |
| Safety adapters   | Evidence use, abstention, uncertainty and interaction constraints. | Prevent incompatible adapters from silently sharing one runtime.                          |
| Router            | Selects compatible adapter set by task and deployment policy.      | Evaluate each adapter alone and in combination to expose interference.                    |
| Merge/serve       | Deterministic packaging, quantisation and runtime compatibility.   | Bind every served adapter set to the deployment manifest and policy version.              |
| Rollback          | Independent removal or reversion of defective adaptation.          | Do not label the implementation LoRA until the training manifest proves it.               |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode          | Failure effect                            | Primary control               | Required state   |
| ---------- | --------------------- | ----------------------------------------- | ----------------------------- | ---------------- |
| `FM-08-01` | Adapter collision     | One domain capability degrades another    | Composition ablations         | **DISABLE SET**  |
| `FM-08-02` | Base incompatibility  | Checkpoint update changes representations | Compatibility contract        | **PIN VERSION**  |
| `FM-08-03` | Merge irreversibility | Defect cannot be isolated                 | Unmerged artefact retention   | **ROLL BACK**    |
| `FM-08-04` | Quantisation drift    | Amounts or tool calls degrade             | Task-specific precision tests | **REJECT BUILD** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                |
| ----------- | ------------ | ---------------------------------------------------------------- |
| `EVD-08-01` | **ACCEPTED** | Exact PEFT method and target-module manifest.                    |
| `EVD-08-02` | **ACCEPTED** | Adapter hashes, lineage, routing and merge policy.               |
| `EVD-08-03` | **ACCEPTED** | Memory, latency, cost and quality ablations.                     |
| `EVD-08-04` | **ACCEPTED** | Cross-adapter interference and rollback test suite.              |
| `EVD-08-05` | **NDA**      | Export, derivative and termination rights for adapter artefacts. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
