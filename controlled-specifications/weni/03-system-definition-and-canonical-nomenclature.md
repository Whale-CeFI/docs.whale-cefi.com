---
title: "System Definition and Canonical Nomenclature"
description: "03 WENI names the complete Whale CeFi-controlled intelligence and governance stack. The Whale CeFi AI Agent is a user-facing product surface. The WENI model artefact, Cognitive Execution Graph, deterministic…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/weni/03-system-definition-and-canonical-nomenclature"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-03"
---

# System Definition and Canonical Nomenclature

**System Definition and Canonical Nomenclature** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 03 is part of the 29 July 2026 official release. Its `FM-03-xx` controls and `EVD-03-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

03 WENI names the complete Whale CeFi-controlled intelligence and governance stack. The Whale CeFi AI Agent is a user-facing product surface. The WENI model artefact, Cognitive Execution Graph, deterministic services and policy engine are separately versioned components inside that system.

### Normative design rules

- Do not use WENI, model, agent, orchestrator and application as interchangeable nouns.
- Every deployed component receives an owner, version, checksum and lifecycle state.
- Internal Stream API means Whale CeFi’s streaming interface, not a third-party intelligence dependency.
- The system can be proprietary while its foundation checkpoint remains contractually licensed.
- Ownership is described per artefact, right and control dimension rather than through one absolute word.

### Boundary / not claimed

The paper does not claim that Whale CeFi trained a general-purpose foundation model from random initialisation.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Whale CeFi AI Agent | Consumer and professional interaction surface. |
| L4 | WENI model artefact | Domain-adapted model lineage and signed runtime package. |
| L1 | Policy plane | Signed rules, eligibility, limits and fail-closed outcomes. |
| L0 | Decision ledger | Attributable record of inputs, versions, outcomes and authority. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Whale CeFi AI Agent | Consumer and professional interaction surface. | Do not use WENI, model, agent, orchestrator and application as interchangeable nouns. |
| WENI model artefact | Domain-adapted model lineage and signed runtime package. | Every deployed component receives an owner, version, checksum and lifecycle state. |
| Cognitive Execution Graph | Evidence, intent, competence, policy and outcome relationships. | Internal Stream API means Whale CeFi’s streaming interface, not a third-party intelligence dependency. |
| Deterministic services | Calculation, analysis, simulation and transaction construction. | The system can be proprietary while its foundation checkpoint remains contractually licensed. |
| Policy plane | Signed rules, eligibility, limits and fail-closed outcomes. | Ownership is described per artefact, right and control dimension rather than through one absolute word. |
| Decision ledger | Attributable record of inputs, versions, outcomes and authority. | Do not use WENI, model, agent, orchestrator and application as interchangeable nouns. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-03-01` | Name collision | A model claim is applied to the whole system | Canonical component registry | **CORRECT CLAIM** |
| `FM-03-02` | Version ambiguity | Evidence cannot be reproduced | Signed system manifest | **QUARANTINE BUILD** |
| `FM-03-03` | Dependency masking | Partner component is mistaken for Whale CeFi IP | IP and licence schedule | **RESTRICT DISCLOSURE** |
| `FM-03-04` | Wrapper framing | Proprietary stack is reduced to an API call | Layered model-and-system definition | **SUPERSEDE** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-03-01` | **ACCEPTED** | Approved nomenclature and WENI component registry. |
| `EVD-03-02` | **ACCEPTED** | System manifest linking model, policy, code, data and interface versions. |
| `EVD-03-03` | **ACCEPTED** | IP schedule for base weights, deltas, adapters, code, data and evaluations. |
| `EVD-03-04` | **ACCEPTED** | Dependency graph and continuity plan for every external artefact. |
| `EVD-03-05` | **ACCEPTED** | Claim dictionary mapping public/internal terms to evidence thresholds. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
