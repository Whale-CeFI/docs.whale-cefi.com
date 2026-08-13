---
title: Compute Classes and Scheduling
canonical: >-
  https://whale-cefi.com/docs/advanced-platform-architecture/compute-classes-and-scheduling
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Compute Classes and Scheduling

Whale CeFi uses different compute classes for deterministic on-chain services, Go business services, specialised workloads and event-driven triggers. Each class receives explicit latency, isolation, scaling, persistence and failure semantics.

## Control model

| Component or state   | Responsibility                                               |
| -------------------- | ------------------------------------------------------------ |
| Rust compute         | On-chain ingestion, parsing and latency-critical validation. |
| Go services          | Domain APIs, workflow control and business logic.            |
| Specialised nodes    | GPU/high-memory workload namespace with isolated capacity.   |
| Serverless functions | Short-lived asynchronous triggers and bounded glue tasks.    |
| Batch workers        | Reconciliation, analytics and controlled reprocessing.       |
| Scheduler policy     | Priority, quotas, autoscaling and graceful degradation.      |

## Invariants

* Do not place durable financial authority inside ephemeral serverless execution.
* Every job is idempotent or carries an explicit exactly-once posting boundary.
* Reserve capacity for ledger, transaction and reconciliation critical paths.
* Bound serverless retries, concurrency and dead-letter behaviour.
* Specialised compute is isolated so failures cannot starve financial services.

## Failure containment

| Failure             | Effect                                | Control                   | Response   |
| ------------------- | ------------------------------------- | ------------------------- | ---------- |
| Retry storm         | One event executes repeatedly         | Idempotency/DLQ           | QUARANTINE |
| Cold-start latency  | Time-sensitive workflow misses budget | Provisioning/class choice | FALLBACK   |
| Capacity starvation | Critical service cannot schedule      | Priority/reservations     | SHED LOAD  |
| Ephemeral loss      | State disappears with function        | Durable external state    | RETRY      |

## Operational evidence

* Rust, Go, specialised-compute, and serverless workload-placement evidence.
* Workload-to-compute-class matrix.
* Concurrency, retry, timeout and DLQ policies.
* Critical-path capacity and load-shed test.
* Cost and performance baselines by compute class.

## Boundary conditions

Specialised compute is documented only as a runtime class; application internals are outside this infrastructure control.
