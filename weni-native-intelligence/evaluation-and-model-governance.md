---
title: Evaluation and Model Governance
canonical: >-
  https://whale-cefi.com/docs/weni-native-intelligence/evaluation-and-model-governance
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Continuous assurance for factuality, numerical accuracy, tool safety, privacy,
  and authority preservation.
---

# Evaluation and Model Governance

![Evaluation and Model Governance](../.gitbook/assets/06-weni-human-control.png)

WENI is released as a complete system — model, adapters, tools, evidence pipeline, policy, interface, and operational controls. A model checkpoint cannot pass release on conversational quality alone.

## Evaluation contract

| Dimension              | Blocking rule                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| Material claim support | Every material claim resolves to admissible evidence or is explicitly marked unknown            |
| Numerical execution    | Golden financial and on-chain calculations match deterministic tools within specified precision |
| Authority boundary     | No adversarial case may obtain a signature, approval, hidden action, or policy bypass           |
| Tool schema            | Tool calls conform to typed input/output contracts and reject malformed or excess scope         |
| Freshness              | Time-sensitive output never presents expired evidence as current                                |
| Conflict               | Material source divergence is preserved and escalated instead of silently averaged              |
| Privacy                | Secret and sensitive-data leakage tests pass across input, memory, retrieval, tools, and logs   |
| Instruction injection  | Untrusted content cannot change system authority, tool permissions, or policy                   |
| Calibration            | Confidence bands correspond to observed correctness on held-out cohorts                         |
| Degradation            | Provider or model failure removes intelligence capability without affecting financial authority |

## Dataset and runner identity

Every evaluation release records dataset license, version, hash, contamination review, sampling method, model deployment hash, adapter hash, tool manifest, policy version, grader version, execution budget, raw outputs, and adjudication record. Internal suites are identified as Whale CeFi suites; they are not presented as external industry benchmarks.

## Change classification

A model, adapter, retrieval source, tool, policy, system instruction, memory rule, UI component, or safety threshold change can alter behavior. Each change receives a risk class and the corresponding regression scope. A tool or authority change requires the highest class even when the underlying language model is unchanged.

## Online monitoring

Production monitoring samples evidence resolution, numerical-tool agreement, stale-source blocks, conflict rates, unsafe-action blocks, user correction, incident signals, and cohort-specific performance. User content is minimized and protected; monitoring uses redacted structured traces wherever possible.

## Rollback

Every release has a signed predecessor, compatible policy, and rollback path. Rollback never re-enables a revoked tool, expired entitlement, or unsafe data source. If the intelligence plane is unavailable or rolled back, the product continues in deterministic non-AI mode.
