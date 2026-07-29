---
title: "Evidence Graph and Truth Hierarchy"
description: "WENI does not ask a model to decide what is true from a bag of documents. It creates typed Evidence Envelopes and resolves authority fact by fact: chain state, contract code, price, protocol claim, user…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/weni/12-evidence-graph-and-truth-hierarchy"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-12"
---

# Evidence Graph and Truth Hierarchy

**Evidence Graph and Truth Hierarchy** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 12 is part of the 29 July 2026 official release. Its `FM-12-xx` controls and `EVD-12-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

WENI does not ask a model to decide what is true from a bag of documents. It creates typed Evidence Envelopes and resolves authority fact by fact: chain state, contract code, price, protocol claim, user preference and policy each have different authoritative sources.

### Normative design rules

- On-chain state outranks marketing text for contract behaviour claims.
- One source cannot be authoritative for every fact class.
- Conflicting evidence remains visible and may restrict action eligibility.
- The model has read access to governed evidence and no authority to mutate it.
- Every action result binds to a frozen evidence set and validity window.

### Boundary / not claimed

‘Blockchain is truth’ is not applied to identity, intent, off-chain legal claims or later market conditions.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Source registry | Identity, licence, trust class and permitted use. |
| L4 | Evidence envelope | Value, provenance, timestamps, state pin and confidence. |
| L3 | Validation | Schema, signature, quorum, anomaly and freshness checks. |
| L2 | Truth resolver | Fact-specific authority and conflict policy. |
| L1 | Evidence graph | Versioned relationships and dependency lineage. |
| L0 | Decision trace | Exact evidence used by a user-visible result. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Source registry | Identity, licence, trust class and permitted use. | On-chain state outranks marketing text for contract behaviour claims. |
| Evidence envelope | Value, provenance, timestamps, state pin and confidence. | One source cannot be authoritative for every fact class. |
| Validation | Schema, signature, quorum, anomaly and freshness checks. | Conflicting evidence remains visible and may restrict action eligibility. |
| Truth resolver | Fact-specific authority and conflict policy. | The model has read access to governed evidence and no authority to mutate it. |
| Evidence graph | Versioned relationships and dependency lineage. | Every action result binds to a frozen evidence set and validity window. |
| Decision trace | Exact evidence used by a user-visible result. | On-chain state outranks marketing text for contract behaviour claims. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-12-01` | Context poisoning | Untrusted text enters authoritative graph | Trust-class isolation | **QUARANTINE** |
| `FM-12-02` | False quorum | Correlated providers appear independent | Operator/lineage diversity | **LOWER CONFIDENCE** |
| `FM-12-03` | Stale cache | Old state survives a source update | Event-driven invalidation | **EXPIRE** |
| `FM-12-04` | Licence misuse | Restricted evidence appears in output | Field-level use policy | **REDACT/BLOCK** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-12-01` | **ACCEPTED** | Evidence Envelope schema and source registry. |
| `EVD-12-02` | **ACCEPTED** | Fact-specific authority hierarchy and conflict tests. |
| `EVD-12-03` | **ACCEPTED** | Context-poisoning and provenance-forgery red team. |
| `EVD-12-04` | **ACCEPTED** | Licence and redistribution policy enforcement tests. |
| `EVD-12-05` | **ACCEPTED** | Decision-to-evidence reproducibility demonstration. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
