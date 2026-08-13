---
title: "Market, Oracle, and Social Intelligence"
description: "Prices and market risk are resolved from liquidity-aware, time-aligned evidence. Social streams are behavioural signals, never authoritative price or protocol facts. WENI retains disagreement rather than…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/weni/15-market-oracle-and-social-intelligence"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-15"
---

# Market, Oracle, and Social Intelligence

**Market, Oracle, and Social Intelligence** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 15 is part of the 29 July 2026 official release. Its `FM-15-xx` controls and `EVD-15-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Prices and market risk are resolved from liquidity-aware, time-aligned evidence. Social streams are behavioural signals, never authoritative price or protocol facts. WENI retains disagreement rather than manufacturing a comforting average.

### Normative design rules

- Resolve price by intended use: display, collateral, execution or risk stress.
- Weight evidence by liquidity, latency, venue health and manipulability.
- Use source-event time, not only ingestion time, for freshness.
- A fixed 0.5% divergence is not universally unsafe; thresholds are context-specific.
- Social signals may escalate review but never override chain or contract evidence.

### Boundary / not claimed

No oracle, venue quorum or sentiment model is claimed to predict later prices or eliminate market risk.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | CEX venues | Timestamped trades, books, volume and market status. |
| L4 | DEX venues | Pool state, liquidity curves, fees and route-specific impact. |
| L3 | Oracles | Feed rounds, confidence, staleness and deviation state. |
| L2 | Derivatives | Funding, open interest, liquidations and basis. |
| L1 | Social firehose | Panic, coordinated promotion and narrative anomalies. |
| L0 | Resolver | Purpose-specific price and risk evidence with conflict state. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| CEX venues | Timestamped trades, books, volume and market status. | Resolve price by intended use: display, collateral, execution or risk stress. |
| DEX venues | Pool state, liquidity curves, fees and route-specific impact. | Weight evidence by liquidity, latency, venue health and manipulability. |
| Oracles | Feed rounds, confidence, staleness and deviation state. | Use source-event time, not only ingestion time, for freshness. |
| Derivatives | Funding, open interest, liquidations and basis. | A fixed 0.5% divergence is not universally unsafe; thresholds are context-specific. |
| Social firehose | Panic, coordinated promotion and narrative anomalies. | Social signals may escalate review but never override chain or contract evidence. |
| Resolver | Purpose-specific price and risk evidence with conflict state. | Resolve price by intended use: display, collateral, execution or risk stress. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-15-01` | Oracle lag | Collateral or quote uses stale round | Round/freshness checks | **BLOCK/REQUOTE** |
| `FM-15-02` | Thin-liquidity manipulation | Observed price is non-executable | Depth and impact modelling | **LOWER CONFIDENCE** |
| `FM-15-03` | Venue outage | Price quorum is correlated or absent | Health-aware resolver | **DEGRADED** |
| `FM-15-04` | Coordinated shilling | Narrative appears as evidence | Semantic anomaly isolation | **FLAG ONLY** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-15-01` | **ACCEPTED** | Price-purpose taxonomy and resolver specification. |
| `EVD-15-02` | **ACCEPTED** | Venue, oracle and liquidity coverage inventory. |
| `EVD-15-03` | **ACCEPTED** | Historical replay of depegs, outages and manipulation events. |
| `EVD-15-04` | **ACCEPTED** | Social-signal precision/recall and harm analysis. |
| `EVD-15-05` | **ACCEPTED** | Licence and redistribution rights by data feed. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
