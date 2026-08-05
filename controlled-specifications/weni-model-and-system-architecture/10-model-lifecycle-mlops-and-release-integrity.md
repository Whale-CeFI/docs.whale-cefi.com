---
title: Model Lifecycle, MLOps, and Release Integrity
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/10-model-lifecycle-mlops-and-release-integrity
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-10
description: >-
  A WENI model release is a controlled software supply-chain event. Training,
  evaluation, packaging, signing, staged rollout, monitoring, incident response
  and rollback must be joined by one immutable…
---

# Model Lifecycle, MLOps, and Release Integrity

**Model Lifecycle, MLOps, and Release Integrity** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 10 is part of the 29 July 2026 official release. Its `FM-10-xx` controls and `EVD-10-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

A WENI model release is a controlled software supply-chain event. Training, evaluation, packaging, signing, staged rollout, monitoring, incident response and rollback must be joined by one immutable deployment record.

### Normative design rules

* Production never loads mutable ‘latest’ model or adapter references.
* Evaluation data and harness versions are pinned beside the model release.
* Canary traffic cannot reach action preparation without the same hard controls as production.
* Rollback invalidates incompatible caches, proofs, prompts and interface artefacts.
* Model monitoring separates distribution drift, performance drift and control failure.

### Boundary / not claimed

A signed model package proves identity and approval, not semantic correctness in every later context.

## Reference architecture

| Layer | Component        | Responsibility                                                      |
| ----- | ---------------- | ------------------------------------------------------------------- |
| L5    | Build            | Reproducible environment, data snapshot and training configuration. |
| L4    | Evaluate         | Frozen capability, safety, latency, cost and regression suites.     |
| L3    | Approve          | Named model, security, product and legal owners.                    |
| L2    | Sign             | Checkpoint, adapters, tokenizer, runtime and manifest digests.      |
| L1    | Deploy           | Canary, shadow, limited cohort and progressive traffic.             |
| L0    | Observe/rollback | Drift, incident and compatibility monitoring.                       |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component        | Responsibility / input                                              | Control invariant                                                                            |
| ---------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Build            | Reproducible environment, data snapshot and training configuration. | Production never loads mutable ‘latest’ model or adapter references.                         |
| Evaluate         | Frozen capability, safety, latency, cost and regression suites.     | Evaluation data and harness versions are pinned beside the model release.                    |
| Approve          | Named model, security, product and legal owners.                    | Canary traffic cannot reach action preparation without the same hard controls as production. |
| Sign             | Checkpoint, adapters, tokenizer, runtime and manifest digests.      | Rollback invalidates incompatible caches, proofs, prompts and interface artefacts.           |
| Deploy           | Canary, shadow, limited cohort and progressive traffic.             | Model monitoring separates distribution drift, performance drift and control failure.        |
| Observe/rollback | Drift, incident and compatibility monitoring.                       | Production never loads mutable ‘latest’ model or adapter references.                         |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode            | Failure effect                              | Primary control               | Required state    |
| ---------- | ----------------------- | ------------------------------------------- | ----------------------------- | ----------------- |
| `FM-10-01` | Supply-chain compromise | Malicious runtime or weights deploy         | SBOM, signing and attestation | **REVOKE**        |
| `FM-10-02` | Silent regression       | New model passes chat tests but fails tools | Workflow regression suite     | **ROLL BACK**     |
| `FM-10-03` | Rollback mismatch       | Old model uses new tool schema              | Compatibility matrix          | **DEGRADED MODE** |
| `FM-10-04` | Unbounded canary        | Experimental output reaches assets          | Cohort and action gates       | **ISOLATE**       |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                          |
| ----------- | ------------ | ---------------------------------------------------------- |
| `EVD-10-01` | **ACCEPTED** | Reproducible build and training environment specification. |
| `EVD-10-02` | **ACCEPTED** | Signed release manifest and approval record.               |
| `EVD-10-03` | **ACCEPTED** | Canary, rollback and revoked-artefact exercise.            |
| `EVD-10-04` | **ACCEPTED** | Model/tool/policy compatibility matrix.                    |
| `EVD-10-05` | **ACCEPTED** | Monitoring SLOs and incident ownership.                    |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
