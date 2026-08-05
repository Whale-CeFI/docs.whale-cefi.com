---
title: Proprietary Moat, Ownership, and Technology Transfer
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/05-proprietary-moat-ownership-and-technology-transfer
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-05
description: >-
  05 Whale CeFi’s moat is the compound system: crypto-specific model adaptation,
  proprietary evidence and behavioural datasets, Cognitive Execution Graph,
  deterministic controls, policy, evaluation and
---

# Proprietary Moat, Ownership, and Technology Transfer

**Proprietary Moat, Ownership, and Technology Transfer** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 05 is part of the 29 July 2026 official release. Its `FM-05-xx` controls and `EVD-05-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

05 Whale CeFi’s moat is the compound system: crypto-specific model adaptation, proprietary evidence and behavioural datasets, Cognitive Execution Graph, deterministic controls, policy, evaluation and observed outcomes. Partner technology transfer strengthens the stack but does not define it.

### Normative design rules

* Separate pre-existing partner IP from Whale CeFi-owned and restrictively licensed derivatives.
* Record rights to modify, merge, distil, deploy, benchmark, export and survive termination.
* Do not publicly name NDA counterparties or imply rights not present in the agreements.
* Treat datasets, labels and evaluations as first-class proprietary artefacts.
* Measure sovereignty across weights, training, inference, data, policy and operations independently.

### Boundary / not claimed

‘Proprietary’ does not mean every underlying foundation artefact is owned outright by Whale CeFi.

## Reference architecture

| Layer | Component             | Responsibility                                                       |
| ----- | --------------------- | -------------------------------------------------------------------- |
| L5    | Licensed foundation   | Contract-permitted starting checkpoint and capabilities.             |
| L4    | Whale CeFi adaptation | CPT, PEFT, DPO, data mixtures and training artefacts.                |
| L3    | Execution IP          | Calculators, analysers, policy, simulation and builders.             |
| L2    | Cognitive graph       | Permissioned relationship between knowledge, behaviour and outcomes. |
| L1    | Evaluation flywheel   | Adversarial cases, regression gates and failure-derived learning.    |
| L0    | Operational control   | Deployment, signing, rollback, audit and incident response.          |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component             | Responsibility / input                                               | Control invariant                                                                                   |
| --------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Licensed foundation   | Contract-permitted starting checkpoint and capabilities.             | Separate pre-existing partner IP from Whale CeFi-owned and restrictively licensed derivatives.      |
| Whale CeFi adaptation | CPT, PEFT, DPO, data mixtures and training artefacts.                | Record rights to modify, merge, distil, deploy, benchmark, export and survive termination.          |
| Execution IP          | Calculators, analysers, policy, simulation and builders.             | Do not publicly name NDA counterparties or imply rights not present in the agreements.              |
| Cognitive graph       | Permissioned relationship between knowledge, behaviour and outcomes. | Treat datasets, labels and evaluations as first-class proprietary artefacts.                        |
| Evaluation flywheel   | Adversarial cases, regression gates and failure-derived learning.    | Measure sovereignty across weights, training, inference, data, policy and operations independently. |
| Operational control   | Deployment, signing, rollback, audit and incident response.          | Separate pre-existing partner IP from Whale CeFi-owned and restrictively licensed derivatives.      |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                                | Primary control                | Required state        |
| ---------- | ------------------- | --------------------------------------------- | ------------------------------ | --------------------- |
| `FM-05-01` | Licence termination | Model component becomes unavailable           | Continuity and revocation plan | **ROLL BACK**         |
| `FM-05-02` | IP contamination    | Training data or artefact rights are unclear  | Provenance and legal gates     | **QUARANTINE**        |
| `FM-05-03` | Partner overclaim   | Public copy exceeds contract language         | Disclosure approval matrix     | **BLOCK PUBLICATION** |
| `FM-05-04` | Moat illusion       | Value depends on a replaceable model endpoint | Ablation and dependency tests  | **RE-ARCHITECT**      |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                      |
| ----------- | ------------ | ---------------------------------------------------------------------- |
| `EVD-05-01` | **NDA**      | Contract-derived technology-transfer and weight-rights matrix.         |
| `EVD-05-02` | **ACCEPTED** | Model and data bill of materials with ownership per artefact.          |
| `EVD-05-03` | **ACCEPTED** | Partner-loss continuity and degraded-mode test.                        |
| `EVD-05-04` | **ACCEPTED** | Component ablations proving system value beyond foundation capability. |
| `EVD-05-05` | **ACCEPTED** | Signed public disclosure language by counterparty and claim.           |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
