---
title: "WENI Model Lineage and Identity"
description: "06 The canonical lineage begins with a licensed foundation checkpoint and ends with a signed WENI deployment artefact. Every transformation must be reproducible and rights-aware: domain CPT, PEFT, DPO…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/weni/06-weni-model-lineage-and-identity"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-06"
---

# WENI Model Lineage and Identity

**WENI Model Lineage and Identity** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 06 is part of the 29 July 2026 official release. Its `FM-06-xx` controls and `EVD-06-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

06 The canonical lineage begins with a licensed foundation checkpoint and ends with a signed WENI deployment artefact. Every transformation must be reproducible and rights-aware: domain CPT, PEFT, DPO, evaluation, packaging and controlled rollout.

### Normative design rules

- No checkpoint advances without a complete lineage graph and dataset temporal cut-off.
- Tokenizer, context, modalities, tool schema and quantisation are versioned dependencies.
- Adapter merges and routing must be reversible and hash-addressable.
- The deployed package is signed only after capability and safety gates pass.
- Rollback preserves evidence compatibility and invalidates incompatible cached outputs.

### Boundary / not claimed

The lineage does not imply random-initialisation pretraining or unrestricted ownership of the foundation weights.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Licensed checkpoint | Immutable identifier, checksum, model card and permitted-use record. |
| L4 | Domain CPT | Crypto code, state, incidents, protocol and market representations. |
| L3 | PEFT | Specialised trainable parameters and composition rules. |
| L2 | DPO | Preference alignment for evidence, abstention and user control. |
| L1 | Evaluation gate | Capability, safety, latency, cost and regression suites. |
| L0 | Signed deployment | Model, tokenizer, runtime, policy and tool manifest. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Licensed checkpoint | Immutable identifier, checksum, model card and permitted-use record. | No checkpoint advances without a complete lineage graph and dataset temporal cut-off. |
| Domain CPT | Crypto code, state, incidents, protocol and market representations. | Tokenizer, context, modalities, tool schema and quantisation are versioned dependencies. |
| PEFT | Specialised trainable parameters and composition rules. | Adapter merges and routing must be reversible and hash-addressable. |
| DPO | Preference alignment for evidence, abstention and user control. | The deployed package is signed only after capability and safety gates pass. |
| Evaluation gate | Capability, safety, latency, cost and regression suites. | Rollback preserves evidence compatibility and invalidates incompatible cached outputs. |
| Signed deployment | Model, tokenizer, runtime, policy and tool manifest. | No checkpoint advances without a complete lineage graph and dataset temporal cut-off. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-06-01` | Lineage gap | Result cannot be reproduced or licensed | Signed artefact graph | **DO NOT DEPLOY** |
| `FM-06-02` | Checkpoint drift | Behaviour changes without evaluation | Immutable versions and gates | **ROLL BACK** |
| `FM-06-03` | Tokenizer mismatch | Tool or amount parsing changes | Compatibility suite | **BLOCK MERGE** |
| `FM-06-04` | Unsigned runtime | Unknown code or weights execute | Attested image and key release | **DENY START** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-06-01` | **NDA** | Foundation checkpoint receipt, licence schedule and checksum. |
| `EVD-06-02` | **ACCEPTED** | CPT, PEFT and DPO run cards with seeds and environment. |
| `EVD-06-03` | **ACCEPTED** | Signed WENI model identity declaration. |
| `EVD-06-04` | **ACCEPTED** | Deployment SBOM, image digest and rollback target. |
| `EVD-06-05` | **ACCEPTED** | Pre/post adaptation capability and safety report. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
