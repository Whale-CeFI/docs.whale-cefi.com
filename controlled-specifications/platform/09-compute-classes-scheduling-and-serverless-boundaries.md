---
title: "Compute Classes, Scheduling, and Serverless Boundaries"
description: "09 Whale CeFi uses different compute classes for deterministic on-chain services, Go business services, specialised workloads and event-driven triggers. Each class receives explicit latency, isolation…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/platform/09-compute-classes-scheduling-and-serverless-boundaries"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-09"
---

# Compute Classes, Scheduling, and Serverless Boundaries

**Compute Classes, Scheduling, and Serverless Boundaries** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 09 is part of the 29 July 2026 official release. Its `FM-09-xx` controls and `EVD-09-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

09 Whale CeFi uses different compute classes for deterministic on-chain services, Go business services, specialised workloads and event-driven triggers. Each class receives explicit latency, isolation, scaling, persistence and failure semantics.

### Normative design rules

- Do not place durable financial authority inside ephemeral serverless execution.
- Every job is idempotent or carries an explicit exactly-once posting boundary.
- Reserve capacity for ledger, transaction and reconciliation critical paths.
- Bound Lambda retries, concurrency and dead-letter behaviour.
- Specialised compute is isolated so failures cannot starve financial services.

### Boundary / not claimed

Specialised compute is documented only as a runtime class; application internals are outside this infrastructure control.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Rust compute | On-chain ingestion, parsing and latency-critical validation. |
| L4 | Go services | Domain APIs, workflow control and business logic. |
| L3 | Specialised nodes | GPU/high-memory workload namespace with isolated capacity. |
| L2 | AWS Lambda | Short-lived asynchronous triggers and bounded glue tasks. |
| L1 | Batch workers | Reconciliation, analytics and controlled reprocessing. |
| L0 | Scheduler policy | Priority, quotas, autoscaling and graceful degradation. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Rust compute | On-chain ingestion, parsing and latency-critical validation. | Do not place durable financial authority inside ephemeral serverless execution. |
| Go services | Domain APIs, workflow control and business logic. | Every job is idempotent or carries an explicit exactly-once posting boundary. |
| Specialised nodes | GPU/high-memory workload namespace with isolated capacity. | Reserve capacity for ledger, transaction and reconciliation critical paths. |
| AWS Lambda | Short-lived asynchronous triggers and bounded glue tasks. | Bound Lambda retries, concurrency and dead-letter behaviour. |
| Batch workers | Reconciliation, analytics and controlled reprocessing. | Specialised compute is isolated so failures cannot starve financial services. |
| Scheduler policy | Priority, quotas, autoscaling and graceful degradation. | Do not place durable financial authority inside ephemeral serverless execution. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-09-01` | Retry storm | One event executes repeatedly | Idempotency/DLQ | **QUARANTINE** |
| `FM-09-02` | Cold-start latency | Time-sensitive workflow misses budget | Provisioning/class choice | **FALLBACK** |
| `FM-09-03` | Capacity starvation | Critical service cannot schedule | Priority/reservations | **SHED LOAD** |
| `FM-09-04` | Ephemeral loss | State disappears with function | Durable external state | **RETRY** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-09-01` | **ACCEPTED** | Rust, Go, specialised compute and Lambda usage direction. |
| `EVD-09-02` | **ACCEPTED** | Workload-to-compute-class matrix. |
| `EVD-09-03` | **ACCEPTED** | Concurrency, retry, timeout and DLQ policies. |
| `EVD-09-04` | **ACCEPTED** | Critical-path capacity and load-shed test. |
| `EVD-09-05` | **ACCEPTED** | Cost and performance baselines by compute class. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
