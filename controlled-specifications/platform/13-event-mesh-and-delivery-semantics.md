---
title: "Event Mesh and Delivery Semantics"
description: "Kafka carries immutable domain events for balances, XP, tasks and operational workflows. It is a transport and history plane; the financial journal remains independently authoritative unless a formally…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/platform/13-event-mesh-and-delivery-semantics"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-13"
---

# Event Mesh and Delivery Semantics

**Event Mesh and Delivery Semantics** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 13 is part of the 29 July 2026 official release. Its `FM-13-xx` controls and `EVD-13-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Kafka carries immutable domain events for balances, XP, tasks and operational workflows. It is a transport and history plane; the financial journal remains independently authoritative unless a formally governed event-sourced ledger proves otherwise.

### Normative design rules

- Every event has one authoritative producer and stable idempotency key.
- Use outbox/inbox rather than unsafe database-plus-Kafka dual writes.
- Ordering guarantees are defined per key, never assumed globally.
- Replay distinguishes pure projections from irreversible external side effects.
- Schema changes follow backward/forward compatibility rules and consumer inventory.

### Boundary / not claimed

Kafka replay is not claimed to reconstruct authoritative balances from nothing without the durable ledger journal and settlement evidence.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Transactional outbox | Atomically records domain change and pending event. |
| L4 | Publisher | Delivers versioned event with stable key and producer identity. |
| L3 | Kafka topics | Partitioning, retention, ACL and schema compatibility. |
| L2 | Consumer inbox | Deduplication and idempotent effect application. |
| L1 | Projection | Balances, XP, analytics or notifications derived safely. |
| L0 | Replay control | Bounded reprocessing with side-effect protection. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Transactional outbox | Atomically records domain change and pending event. | Every event has one authoritative producer and stable idempotency key. |
| Publisher | Delivers versioned event with stable key and producer identity. | Use outbox/inbox rather than unsafe database-plus-Kafka dual writes. |
| Kafka topics | Partitioning, retention, ACL and schema compatibility. | Ordering guarantees are defined per key, never assumed globally. |
| Consumer inbox | Deduplication and idempotent effect application. | Replay distinguishes pure projections from irreversible external side effects. |
| Projection | Balances, XP, analytics or notifications derived safely. | Schema changes follow backward/forward compatibility rules and consumer inventory. |
| Replay control | Bounded reprocessing with side-effect protection. | Every event has one authoritative producer and stable idempotency key. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-13-01` | Dual-write gap | DB changes without event or reverse | Transactional outbox | **REPAIR** |
| `FM-13-02` | Duplicate delivery | XP or notification repeats | Consumer inbox | **IGNORE DUPLICATE** |
| `FM-13-03` | Poison event | Partition cannot progress | DLQ/quarantine | **ISOLATE** |
| `FM-13-04` | Unsafe replay | Financial or external effect repeats | Replay policy | **BLOCK** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-13-01` | **ACCEPTED** | Kafka event-streaming architecture. |
| `EVD-13-02` | **ACCEPTED** | Topic catalogue, producer owner, key and retention matrix. |
| `EVD-13-03` | **ACCEPTED** | Outbox/inbox and idempotency implementation evidence. |
| `EVD-13-04` | **ACCEPTED** | Schema compatibility and poison-event tests. |
| `EVD-13-05` | **ACCEPTED** | Controlled replay exercise for balances and XP projections. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
