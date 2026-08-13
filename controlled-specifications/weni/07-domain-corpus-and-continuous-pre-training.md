---
title: "Domain Corpus and Continuous Pre-Training"
description: "07 Domain adaptation succeeds only when the corpus represents how Web3 actually fails: proxy upgrades, bytecode patterns, transaction traces, liquidity events, exploit families, protocol documents, audits and…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/weni/07-domain-corpus-and-continuous-pre-training"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-07"
---

# Domain Corpus and Continuous Pre-Training

**Domain Corpus and Continuous Pre-Training** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 07 is part of the 29 July 2026 official release. Its `FM-07-xx` controls and `EVD-07-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

07 Domain adaptation succeeds only when the corpus represents how Web3 actually fails: proxy upgrades, bytecode patterns, transaction traces, liquidity events, exploit families, protocol documents, audits and time-dependent market structure. Volume without provenance is a liability.

### Normative design rules

- Every datum carries licence, origin, acquisition time, chain and transformation lineage.
- Deduplicate forks, mirrors, copied audits and exploit variants across train/eval splits.
- Preserve benign hard negatives so security training does not equate complexity with malice.
- Use time-split holdouts to measure generalisation to unseen protocols and attack families.
- Exclude secrets, private keys, unlawfully obtained data and unlicensed partner content.

### Boundary / not claimed

The paper does not infer corpus size, token count or performance from the words ‘millions of lines’ without a signed dataset manifest.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Code layer | Solidity/Vyper source, bytecode, ABIs and compiler metadata. |
| L4 | Execution layer | Traces, calls, logs, state transitions and transaction graphs. |
| L3 | Security layer | Audits, exploits, post-mortems and vulnerability taxonomies. |
| L2 | Protocol layer | Documentation, governance, upgrades and economic mechanics. |
| L1 | Market layer | Liquidity, volatility, funding, liquidation and oracle history. |
| L0 | Temporal holdout | Later-period cases isolated from training and tuning. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Code layer | Solidity/Vyper source, bytecode, ABIs and compiler metadata. | Every datum carries licence, origin, acquisition time, chain and transformation lineage. |
| Execution layer | Traces, calls, logs, state transitions and transaction graphs. | Deduplicate forks, mirrors, copied audits and exploit variants across train/eval splits. |
| Security layer | Audits, exploits, post-mortems and vulnerability taxonomies. | Preserve benign hard negatives so security training does not equate complexity with malice. |
| Protocol layer | Documentation, governance, upgrades and economic mechanics. | Use time-split holdouts to measure generalisation to unseen protocols and attack families. |
| Market layer | Liquidity, volatility, funding, liquidation and oracle history. | Exclude secrets, private keys, unlawfully obtained data and unlicensed partner content. |
| Temporal holdout | Later-period cases isolated from training and tuning. | Every datum carries licence, origin, acquisition time, chain and transformation lineage. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-07-01` | Data contamination | Evaluation examples appear in training | Hash and semantic deduplication | **INVALIDATE RUN** |
| `FM-07-02` | Label leakage | Outcome metadata reveals target | Blind preprocessing and audits | **REBUILD SPLIT** |
| `FM-07-03` | Licence breach | Artefact cannot be deployed | Rights registry and ingestion gate | **QUARANTINE** |
| `FM-07-04` | Temporal bias | Model only recognises known attacks | Forward-chaining evaluation | **RETRAIN** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-07-01` | **ACCEPTED** | Dataset card by family, licence, date range and volume. |
| `EVD-07-02` | **ACCEPTED** | Deduplication, contamination and PII/secrets scan report. |
| `EVD-07-03` | **ACCEPTED** | Temporal split manifest and independent holdout custody. |
| `EVD-07-04` | **ACCEPTED** | Training-mixture ablations and catastrophic-forgetting checks. |
| `EVD-07-05` | **ACCEPTED** | Data deletion and partner-revocation propagation test. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
