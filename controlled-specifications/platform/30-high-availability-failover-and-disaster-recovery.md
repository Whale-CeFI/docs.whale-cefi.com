---
title: "High Availability, Failover, and Disaster Recovery"
description: "Three availability zones in Frankfurt provide regional high availability, not geographic disaster recovery. Whale CeFi separates zonal failover, regional continuity, data recovery and business resumption…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/platform/30-high-availability-failover-and-disaster-recovery"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-30"
---

# High Availability, Failover, and Disaster Recovery

**High Availability, Failover, and Disaster Recovery** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 30 is part of the 29 July 2026 official release. Its `FM-30-xx` controls and `EVD-30-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Three availability zones in Frankfurt provide regional high availability, not geographic disaster recovery. Whale CeFi separates zonal failover, regional continuity, data recovery and business resumption, with explicit RTO/RPO objectives per critical service and financial state.

### Normative design rules

- Assign RTO and RPO by service, data authority and user impact.
- Test AZ loss, not only replica restart under healthy regional dependencies.
- Back up ledger and configuration with immutable copies and restore validation.
- Recover financial services in authority order: evidence, ledger, reconciliation, then writes.
- Do not reopen transaction flows until recovered state is independently reconciled.

### Boundary / not claimed

The platform is not described as multi-region until a second regional stack and tested failover evidence exist.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | In-zone resilience | Process, pod and node replacement. |
| L4 | Multi-AZ resilience | Service and data survival after one AZ loss. |
| L3 | Provider failover | RPC, custody and external dependency degradation. |
| L2 | Backup/recovery | Encrypted point-in-time restoration and integrity checks. |
| L1 | Regional continuity | Documented secondary-region design and activation criteria. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| In-zone resilience | Process, pod and node replacement. | Assign RTO and RPO by service, data authority and user impact. |
| Multi-AZ resilience | Service and data survival after one AZ loss. | Test AZ loss, not only replica restart under healthy regional dependencies. |
| Provider failover | RPC, custody and external dependency degradation. | Back up ledger and configuration with immutable copies and restore validation. |
| Backup/recovery | Encrypted point-in-time restoration and integrity checks. | Recover financial services in authority order: evidence, ledger, reconciliation, then writes. |
| Regional continuity | Documented secondary-region design and activation criteria. | Do not reopen transaction flows until recovered state is independently reconciled. |
| Business resumption | Reconciliation and controlled reopening after recovery. | Assign RTO and RPO by service, data authority and user impact. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-30-01` | AZ outage | Capacity and replicas are lost | Topology/capacity reserve | **FAIL OVER** |
| `FM-30-02` | Region outage | All eu-central-1 services unavailable | DR plan/secondary region | **ACTIVATE** |
| `FM-30-03` | Corrupt backup | Restoration cannot produce authority | Restore drills/checksums | **ESCALATE** |
| `FM-30-04` | Premature reopen | Recovered ledger conflicts with chain | Reconciliation gate | **KEEP READ-ONLY** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-30-01` | **ACCEPTED** | managed Kubernetes across three AZs in eu-central-1. |
| `EVD-30-02` | **ACCEPTED** | RTO/RPO and dependency-tier register. |
| `EVD-30-03` | **ACCEPTED** | AZ-loss, database failover and capacity exercise. |
| `EVD-30-04` | **ACCEPTED** | Backup immutability and full restore evidence. |
| `EVD-30-05` | **ACCEPTED** | Regional DR design, runbook and test status. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
