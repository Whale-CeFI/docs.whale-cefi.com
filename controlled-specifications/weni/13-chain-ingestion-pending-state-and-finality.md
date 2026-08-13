---
title: "Chain Ingestion, Pending State, and Finality"
description: "Ethereum, EVM L2s and additional supported networks expose different pending-state, sequencer and finality semantics. WENI normalises them into chain-specific evidence without pretending that public mempool visibility…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/weni/13-chain-ingestion-pending-state-and-finality"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-13"
---

# Chain Ingestion, Pending State, and Finality

**Chain Ingestion, Pending State, and Finality** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 13 is part of the 29 July 2026 official release. Its `FM-13-xx` controls and `EVD-13-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Ethereum, EVM L2s and additional supported networks expose different pending-state, sequencer and finality semantics. WENI normalises them into chain-specific evidence without pretending that public mempool visibility equals complete order-flow visibility.

### Normative design rules

- Record whether each endpoint is self-hosted, dedicated, shared or partner-operated.
- Treat private order flow and builder/relay visibility as unknown unless contractually available.
- Pin chain ID, block number, block hash, timestamp and finality state together.
- Derive confirmation policy per chain, asset and action instead of a universal twelve-block rule.
- Fail closed for action preparation when node divergence exceeds the defined policy.

### Boundary / not claimed

No ‘sub-millisecond mempool’ or complete advance visibility of attacks is claimed without a precisely measured stage and coverage boundary.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Node/provider quorum | Self-operated or enterprise endpoints with identity and health. |
| L4 | Pending telemetry | Public mempool, sequencer feed or explicit blind-spot state. |
| L3 | Canonical blocks | Header, receipts, logs, traces and state references. |
| L2 | Finality adapter | Chain-specific soft/hard finality and reorg model. |
| L1 | Normalizer | Typed events with source, timestamps and chain identity. |
| L0 | Evidence bus | Versioned delivery to monitoring and decision services. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Node/provider quorum | Self-operated or enterprise endpoints with identity and health. | Record whether each endpoint is self-hosted, dedicated, shared or partner-operated. |
| Pending telemetry | Public mempool, sequencer feed or explicit blind-spot state. | Treat private order flow and builder/relay visibility as unknown unless contractually available. |
| Canonical blocks | Header, receipts, logs, traces and state references. | Pin chain ID, block number, block hash, timestamp and finality state together. |
| Finality adapter | Chain-specific soft/hard finality and reorg model. | Derive confirmation policy per chain, asset and action instead of a universal twelve-block rule. |
| Normalizer | Typed events with source, timestamps and chain identity. | Fail closed for action preparation when node divergence exceeds the defined policy. |
| Evidence bus | Versioned delivery to monitoring and decision services. | Record whether each endpoint is self-hosted, dedicated, shared or partner-operated. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-13-01` | Provider eclipse | All reads share one faulty view | Diverse quorum and divergence alarms | **DEGRADED** |
| `FM-13-02` | Reorg | Credited state disappears | Finality-aware ledger state | **REVERSE/RECONCILE** |
| `FM-13-03` | Sequencer blind spot | L2 pending state is incomplete | Explicit visibility label | **RESTRICT CLAIM** |
| `FM-13-04` | Timestamp skew | Freshness appears better than reality | Monotonic clocks and source times | **INVALIDATE** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-13-01` | **ACCEPTED** | Direct/RPC ingestion for Ethereum, Arbitrum, Optimism and Base. |
| `EVD-13-02` | **ACCEPTED** | Network-by-network visibility and finality matrix. |
| `EVD-13-03` | **ACCEPTED** | Provider quorum, divergence and failover test results. |
| `EVD-13-04` | **ACCEPTED** | Reorg, delayed sequencer and stale-head simulation. |
| `EVD-13-05` | **ACCEPTED** | p50/p95/p99 source-to-normalised-event metrics. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
