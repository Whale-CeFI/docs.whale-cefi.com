---
title: Synchronous APIs and Service Communication
canonical: >-
  https://whale-cefi.com/docs/advanced-platform-architecture/synchronous-apis-and-service-communication
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  REST, gRPC, WebSockets and internal streaming endpoints are selected by
  interaction contract. Every call is authenticated, versioned, bounded by
  deadline and safe to retry according to its semantics.
---

# Synchronous APIs and Service Communication

## Control model

| Component or state | Responsibility                                            |
| ------------------ | --------------------------------------------------------- |
| REST/OpenAPI 3.1   | External and administrative resource contracts.           |
| gRPC               | Typed internal or institutional service communication.    |
| WebSockets         | Versioned product updates and long-lived client sessions. |
| Event stream       | Asynchronous domain facts through Kafka.                  |
| API gateway        | Identity, quotas, routing, validation and observability.  |
| Contract registry  | Schemas, compatibility and deprecation lifecycle.         |

## Invariants

* Use deadlines, cancellation and bounded retries for every synchronous call.
* Idempotency keys protect create/post operations from client and network retries.
* WebSocket messages include sequence/version and resynchronisation path.
* Never expose internal provider errors or secrets through public responses.
* Deprecation includes consumer inventory, dates and compatibility evidence.

## Failure containment

| Failure             | Effect                        | Control                    | Response     |
| ------------------- | ----------------------------- | -------------------------- | ------------ |
| Retry amplification | One timeout multiplies writes | Idempotency/budget         | STOP RETRY   |
| Contract drift      | Consumer misinterprets field  | Schema gate                | BLOCK DEPLOY |
| Socket desync       | Client shows stale state      | Sequence/snapshot recovery | RESYNC       |
| Tenant confusion    | Request crosses organisation  | Tenant-bound auth          | DENY         |

## Operational evidence

* OpenAPI 3.1, protobuf and WebSocket schemas.
* Authentication, authorisation and tenant tests.
* Timeout, retry, idempotency and circuit-breaker policies.
* Contract compatibility and deprecation report.
* Client resynchronisation and stale-state tests.

## Boundary conditions

An interface contract does not acquire authority over the financial state that it requests or displays.
