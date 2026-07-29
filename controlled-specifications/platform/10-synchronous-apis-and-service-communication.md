---
title: "Synchronous APIs and Service Communication"
description: "Controlled Platform chapter 10: normative API communication rules, service boundaries, failure controls and acceptance evidence for Whale CeFi."
canonical: "https://docs.whale-cefi.com/controlled-specifications/platform/10-synchronous-apis-and-service-communication"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-10"
---

# Synchronous APIs and Service Communication

**Synchronous APIs and Service Communication** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 10 is part of the 29 July 2026 official release. Its `FM-10-xx` controls and `EVD-10-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

REST, gRPC, WebSockets and internal streaming endpoints are selected by interaction contract. Every call is authenticated, versioned, bounded by deadline and safe to retry according to its semantics.

### Normative design rules

- Use deadlines, cancellation and bounded retries for every synchronous call.
- Idempotency keys protect create/post operations from client and network retries.
- WebSocket messages include sequence/version and resynchronisation path.
- Never expose internal provider errors or secrets through public responses.
- Deprecation includes consumer inventory, dates and compatibility evidence.

### Boundary / not claimed

An interface contract does not acquire authority over the financial state that it requests or displays.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | REST/OpenAPI 3.1 | External and administrative resource contracts. |
| L4 | gRPC | Typed internal or institutional service communication. |
| L3 | WebSockets | Versioned product updates and long-lived client sessions. |
| L2 | Event stream | Asynchronous domain facts through Kafka. |
| L1 | API gateway | Identity, quotas, routing, validation and observability. |
| L0 | Contract registry | Schemas, compatibility and deprecation lifecycle. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| REST/OpenAPI 3.1 | External and administrative resource contracts. | Use deadlines, cancellation and bounded retries for every synchronous call. |
| gRPC | Typed internal or institutional service communication. | Idempotency keys protect create/post operations from client and network retries. |
| WebSockets | Versioned product updates and long-lived client sessions. | WebSocket messages include sequence/version and resynchronisation path. |
| Event stream | Asynchronous domain facts through Kafka. | Never expose internal provider errors or secrets through public responses. |
| API gateway | Identity, quotas, routing, validation and observability. | Deprecation includes consumer inventory, dates and compatibility evidence. |
| Contract registry | Schemas, compatibility and deprecation lifecycle. | Use deadlines, cancellation and bounded retries for every synchronous call. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-10-01` | Retry amplification | One timeout multiplies writes | Idempotency/budget | **STOP RETRY** |
| `FM-10-02` | Contract drift | Consumer misinterprets field | Schema gate | **BLOCK DEPLOY** |
| `FM-10-03` | Socket desync | Client shows stale state | Sequence/snapshot recovery | **RESYNC** |
| `FM-10-04` | Tenant confusion | Request crosses organisation | Tenant-bound auth | **DENY** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-10-01` | **ACCEPTED** | OpenAPI 3.1, protobuf and WebSocket schemas. |
| `EVD-10-02` | **ACCEPTED** | Authentication, authorisation and tenant tests. |
| `EVD-10-03` | **ACCEPTED** | Timeout, retry, idempotency and circuit-breaker policies. |
| `EVD-10-04` | **ACCEPTED** | Contract compatibility and deprecation report. |
| `EVD-10-05` | **ACCEPTED** | Client resynchronisation and stale-state tests. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
