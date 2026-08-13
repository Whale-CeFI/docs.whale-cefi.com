---
title: Event Mesh and Delivery Semantics
canonical: >-
  https://whale-cefi.com/docs/advanced-platform-architecture/event-mesh-and-delivery-semantics
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Event Mesh and Delivery Semantics

Kafka carries immutable domain events for balances, XP, tasks and operational workflows. It is a transport and history plane; the financial journal remains independently authoritative unless a formally governed event-sourced ledger proves otherwise.

## Control model

| Component or state   | Responsibility                                                  |
| -------------------- | --------------------------------------------------------------- |
| Transactional outbox | Atomically records domain change and pending event.             |
| Publisher            | Delivers versioned event with stable key and producer identity. |
| Kafka topics         | Partitioning, retention, ACL and schema compatibility.          |
| Consumer inbox       | Deduplication and idempotent effect application.                |
| Projection           | Balances, XP, analytics or notifications derived safely.        |
| Replay control       | Bounded reprocessing with side-effect protection.               |

## Invariants

* Every event has one authoritative producer and stable idempotency key.
* Use outbox/inbox rather than unsafe database-plus-Kafka dual writes.
* Ordering guarantees are defined per key, never assumed globally.
* Replay distinguishes pure projections from irreversible external side effects.
* Schema changes follow backward/forward compatibility rules and consumer inventory.

## Failure containment

| Failure            | Effect                               | Control              | Response         |
| ------------------ | ------------------------------------ | -------------------- | ---------------- |
| Dual-write gap     | DB changes without event or reverse  | Transactional outbox | REPAIR           |
| Duplicate delivery | XP or notification repeats           | Consumer inbox       | IGNORE DUPLICATE |
| Poison event       | Partition cannot progress            | DLQ/quarantine       | ISOLATE          |
| Unsafe replay      | Financial or external effect repeats | Replay policy        | BLOCK            |

## Operational evidence

* Kafka event-streaming architecture.
* Topic catalogue, producer owner, key and retention matrix.
* Outbox/inbox and idempotency implementation evidence.
* Schema compatibility and poison-event tests.
* Controlled replay exercise for balances and XP projections.

## Boundary conditions

Kafka replay is not claimed to reconstruct authoritative balances from nothing without the durable ledger journal and settlement evidence.
