---
title: Cache and Analytical State Planes
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/platform/14-cache-and-analytical-state-planes
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-14
---

# Cache and Analytical State Planes

**Cache and Analytical State Planes** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 14 is part of the 29 July 2026 official release. Its `FM-14-xx` controls and `EVD-14-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Redis serves ephemeral sessions, locks, rate controls and short-lived context; ClickHouse serves analytical projections and abuse detection. Neither system may become the unacknowledged source of financial truth.

### Normative design rules

* Redis loss degrades sessions or performance but cannot erase financial state.
* Locks include ownership, fencing tokens and expiry semantics.
* ClickHouse projections are reproducible from governed sources.
* Analytical flags trigger review or policy, not direct ledger mutation.
* PII and wallet-linked analytics follow minimisation and retention controls.

### Boundary / not claimed

Redis and ClickHouse are explicitly classified as derived or transient planes, not accounting authorities.

## Reference architecture

| Layer | Component           | Responsibility                                                |
| ----- | ------------------- | ------------------------------------------------------------- |
| L5    | Redis session state | Short-lived authenticated session and websocket coordination. |
| L4    | Redis controls      | Rate limits, locks, deduplication hints and transient cache.  |
| L3    | ClickHouse ingest   | Versioned events and analytical facts.                        |
| L2    | Portfolio analytics | Performance and operational aggregates.                       |
| L1    | Abuse analytics     | Sybil and reward-anomaly candidates.                          |
| L0    | Authority boundary  | PostgreSQL ledger and source systems remain canonical.        |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component           | Responsibility / input                                        | Control invariant                                                             |
| ------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Redis session state | Short-lived authenticated session and websocket coordination. | Redis loss degrades sessions or performance but cannot erase financial state. |
| Redis controls      | Rate limits, locks, deduplication hints and transient cache.  | Locks include ownership, fencing tokens and expiry semantics.                 |
| ClickHouse ingest   | Versioned events and analytical facts.                        | ClickHouse projections are reproducible from governed sources.                |
| Portfolio analytics | Performance and operational aggregates.                       | Analytical flags trigger review or policy, not direct ledger mutation.        |
| Abuse analytics     | Sybil and reward-anomaly candidates.                          | PII and wallet-linked analytics follow minimisation and retention controls.   |
| Authority boundary  | PostgreSQL ledger and source systems remain canonical.        | Redis loss degrades sessions or performance but cannot erase financial state. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode     | Failure effect                 | Primary control        | Required state |
| ---------- | ---------------- | ------------------------------ | ---------------------- | -------------- |
| `FM-14-01` | Cache authority  | Stale cache overrides ledger   | Canonical-read policy  | **INVALIDATE** |
| `FM-14-02` | Lock expiry      | Two workers act concurrently   | Fencing/idempotency    | **REJECT**     |
| `FM-14-03` | Projection drift | Analytics diverges from source | Reconciliation/rebuild | **REBUILD**    |
| `FM-14-04` | False abuse flag | Valid user loses reward        | Human review/appeal    | **REVIEW**     |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                |
| ----------- | ------------ | ------------------------------------------------ |
| `EVD-14-01` | **ACCEPTED** | Redis Cluster and ClickHouse analytical plane.   |
| `EVD-14-02` | **ACCEPTED** | Cache/lock key catalogue and loss behaviour.     |
| `EVD-14-03` | **ACCEPTED** | ClickHouse source lineage and rebuild procedure. |
| `EVD-14-04` | **ACCEPTED** | Analytical-to-ledger reconciliation tests.       |
| `EVD-14-05` | **ACCEPTED** | Abuse-model false-positive and appeal evidence.  |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
