---
title: "Cache and Analytical State Planes"
description: "Redis serves ephemeral sessions, locks, rate controls and short-lived context; ClickHouse serves analytical projections and abuse detection. Neither system may become the unacknowledged source of financial truth."
canonical: "https://docs.whale-cefi.com/advanced-platform-architecture/cache-and-analytical-state-planes"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Cache and Analytical State Planes

Redis serves ephemeral sessions, locks, rate controls and short-lived context; ClickHouse serves analytical projections and abuse detection. Neither system may become the unacknowledged source of financial truth.

## Control model

| Component or state  | Responsibility                                                |
| ------------------- | ------------------------------------------------------------- |
| Redis session state | Short-lived authenticated session and websocket coordination. |
| Redis controls      | Rate limits, locks, deduplication hints and transient cache.  |
| ClickHouse ingest   | Versioned events and analytical facts.                        |
| Portfolio analytics | Performance and operational aggregates.                       |
| Abuse analytics     | Sybil and reward-anomaly candidates.                          |
| Authority boundary  | PostgreSQL ledger and source systems remain canonical.        |

## Invariants

* Redis loss degrades sessions or performance but cannot erase financial state.
* Locks include ownership, fencing tokens and expiry semantics.
* ClickHouse projections are reproducible from governed sources.
* Analytical flags trigger review or policy, not direct ledger mutation.
* PII and wallet-linked analytics follow minimisation and retention controls.

## Failure containment

| Failure          | Effect                         | Control                | Response   |
| ---------------- | ------------------------------ | ---------------------- | ---------- |
| Cache authority  | Stale cache overrides ledger   | Canonical-read policy  | INVALIDATE |
| Lock expiry      | Two workers act concurrently   | Fencing/idempotency    | REJECT     |
| Projection drift | Analytics diverges from source | Reconciliation/rebuild | REBUILD    |
| False abuse flag | Valid user loses reward        | Human review/appeal    | REVIEW     |

## Operational evidence

* Redis Cluster and ClickHouse analytical plane.
* Cache/lock key catalogue and loss behaviour.
* ClickHouse source lineage and rebuild procedure.
* Analytical-to-ledger reconciliation tests.
* Abuse-model false-positive and appeal evidence.

## Boundary conditions

Redis and ClickHouse are explicitly classified as derived or transient planes, not accounting authorities.
