---
title: Microservices, Event Mesh, and Data Infrastructure
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/29-microservices-event-mesh-and-data-infrastructure
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-29
description: >-
  The reported production direction uses bounded-context Rust and Go services on
  managed Kubernetes across multiple availability zones, with Kafka,
  PostgreSQL/TimescaleDB, Redis and ClickHouse. Reliabil
---

# Microservices, Event Mesh, and Data Infrastructure

**Microservices, Event Mesh, and Data Infrastructure** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 29 is part of the 29 July 2026 official release. Its `FM-29-xx` controls and `EVD-29-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The reported production direction uses bounded-context Rust and Go services on managed Kubernetes across multiple availability zones, with Kafka, PostgreSQL/TimescaleDB, Redis and ClickHouse. Reliability depends on ownership and consistency patterns, not on product names alone.

### Normative design rules

* Use transactional outbox/inbox and idempotency to bridge database and Kafka state.
* Kafka is not the sole financial ledger unless retention, ordering and journal semantics prove it.
* Schema compatibility, event ownership and replay effects are explicit per topic.
* Redis loss cannot erase authoritative user, ledger or decision state.
* GPU inference, deterministic services and custody integrations occupy separate trust zones.

### Boundary / not claimed

A microservice architecture is not automatically resilient, consistent or secure; those properties require measured controls.

## Reference architecture

| Layer | Component                        | Responsibility                                                 |
| ----- | -------------------------------- | -------------------------------------------------------------- |
| L5    | managed Kubernetes service plane | Bounded contexts, workload identities and network policy.      |
| L4    | WENI GPU plane                   | Whale CeFi-controlled inference workloads and model artefacts. |
| L3    | Kafka event mesh                 | Versioned domain events, schemas and replay boundaries.        |
| L2    | PostgreSQL/Timescale             | Transactional state, ledger and time-series evidence.          |
| L1    | Redis                            | Ephemeral session, locks, rate and short-lived context.        |
| L0    | ClickHouse                       | Analytical projections, abuse signals and portfolio telemetry. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component                        | Responsibility / input                                         | Control invariant                                                                                 |
| -------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| managed Kubernetes service plane | Bounded contexts, workload identities and network policy.      | Use transactional outbox/inbox and idempotency to bridge database and Kafka state.                |
| WENI GPU plane                   | Whale CeFi-controlled inference workloads and model artefacts. | Kafka is not the sole financial ledger unless retention, ordering and journal semantics prove it. |
| Kafka event mesh                 | Versioned domain events, schemas and replay boundaries.        | Schema compatibility, event ownership and replay effects are explicit per topic.                  |
| PostgreSQL/Timescale             | Transactional state, ledger and time-series evidence.          | Redis loss cannot erase authoritative user, ledger or decision state.                             |
| Redis                            | Ephemeral session, locks, rate and short-lived context.        | GPU inference, deterministic services and custody integrations occupy separate trust zones.       |
| ClickHouse                       | Analytical projections, abuse signals and portfolio telemetry. | Use transactional outbox/inbox and idempotency to bridge database and Kafka state.                |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode       | Failure effect                    | Primary control                 | Required state       |
| ---------- | ------------------ | --------------------------------- | ------------------------------- | -------------------- |
| `FM-29-01` | Dual write         | DB and event disagree             | Outbox/inbox and reconciliation | **REPAIR**           |
| `FM-29-02` | Replay side effect | XP or balance posts twice         | Idempotency keys                | **REJECT DUPLICATE** |
| `FM-29-03` | Noisy neighbour    | Inference starves safety services | Resource isolation              | **SHED LOAD**        |
| `FM-29-04` | Schema break       | Consumer misreads event           | Registry and compatibility gate | **STOP DEPLOY**      |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                      |
| ----------- | ------------ | ---------------------------------------------------------------------- |
| `EVD-29-01` | **ACCEPTED** | managed Kubernetes, eu-central-1 multi-AZ and GPU inference direction. |
| `EVD-29-02` | **ACCEPTED** | Service catalogue, ownership, SLO and trust-zone diagram.              |
| `EVD-29-03` | **ACCEPTED** | Event schemas, outbox/inbox and idempotency test evidence.             |
| `EVD-29-04` | **ACCEPTED** | Multi-AZ failover, load-shed and recovery benchmarks.                  |
| `EVD-29-05` | **ACCEPTED** | Data-store backup, restore and corruption exercises.                   |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
