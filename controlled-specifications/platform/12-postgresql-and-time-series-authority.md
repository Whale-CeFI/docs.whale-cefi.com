---
title: "PostgreSQL and Time-Series Authority"
description: "PostgreSQL is reported as the transactional source for financial and product records, with TimescaleDB for governed time-series workloads. Schema ownership, constraints, isolation, high availability, backup…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/platform/12-postgresql-and-time-series-authority"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-12"
---

# PostgreSQL and Time-Series Authority

**PostgreSQL and Time-Series Authority** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 12 is part of the 29 July 2026 official release. Its `FM-12-xx` controls and `EVD-12-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

PostgreSQL is reported as the transactional source for financial and product records, with TimescaleDB for governed time-series workloads. Schema ownership, constraints, isolation, high availability, backup and recovery define the actual authority.

### Normative design rules

- Use constraints for balanced postings, uniqueness and valid state transitions.
- Assign schemas and migrations to one owning bounded context.
- Separate OLTP queries from heavy analytical workloads.
- Protect backup keys and test restoration into isolated accounts.
- Measure failover data loss and client reconnection, not only database availability.

### Boundary / not claimed

A database marked Multi-AZ is not assumed to meet recovery objectives until failover and restoration are measured.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Ledger schemas | Accounts, journals, postings and reconciliation records. |
| L4 | Product schemas | Positions, products, tasks and operational state. |
| L2 | Read models | Purpose-specific replicas or projections. |
| L1 | Multi-AZ database | Synchronous durability and automated failover. |
| L0 | Backup/PITR | Encrypted recovery points and tested restoration. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Ledger schemas | Accounts, journals, postings and reconciliation records. | Use constraints for balanced postings, uniqueness and valid state transitions. |
| Product schemas | Positions, products, tasks and operational state. | Assign schemas and migrations to one owning bounded context. |
| Timescale hypertables | Yield, market, service and audit time series. | Separate OLTP queries from heavy analytical workloads. |
| Read models | Purpose-specific replicas or projections. | Protect backup keys and test restoration into isolated accounts. |
| Multi-AZ database | Synchronous durability and automated failover. | Measure failover data loss and client reconnection, not only database availability. |
| Backup/PITR | Encrypted recovery points and tested restoration. | Use constraints for balanced postings, uniqueness and valid state transitions. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-12-01` | Migration defect | Financial schema becomes inconsistent | Expand/contract and rollback | **STOP** |
| `FM-12-02` | Replica lag | Read view shows stale balance | Authority labels/lag gates | **READ PRIMARY** |
| `FM-12-03` | Failover split | Clients write to inconsistent leader | Managed fencing | **RECONNECT** |
| `FM-12-04` | Backup illusion | Restore fails during incident | Regular restore drills | **ESCALATE** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-12-01` | **ACCEPTED** | PostgreSQL/TimescaleDB Multi-AZ direction. |
| `EVD-12-02` | **ACCEPTED** | Schema catalogue, ownership and migration policy. |
| `EVD-12-03` | **ACCEPTED** | Constraint and transaction-isolation tests. |
| `EVD-12-04` | **ACCEPTED** | Failover latency and client-recovery evidence. |
| `EVD-12-05` | **ACCEPTED** | Backup, PITR and restore drill reports. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
