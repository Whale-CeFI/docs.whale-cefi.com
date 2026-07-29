---
title: "Multi-AZ Kubernetes Runtime Topology"
description: "07 Production services are reported on managed Kubernetes across three availability zones in eu-central-1. Availability requires topology-aware scheduling, Pod disruption control, autoscaling, workload…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/platform/07-multi-az-kubernetes-runtime-topology"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-07"
---

# Multi-AZ Kubernetes Runtime Topology

**Multi-AZ Kubernetes Runtime Topology** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 07 is part of the 29 July 2026 official release. Its `FM-07-xx` controls and `EVD-07-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

07 Production services are reported on managed Kubernetes across three availability zones in eu-central-1. Availability requires topology-aware scheduling, Pod disruption control, autoscaling, workload identity and independent data-layer resilience - not Kubernetes alone.

### Normative design rules

- Spread replicas across zones and prevent one-zone placement through constraints.
- Define PodDisruptionBudgets that permit upgrades without blocking recovery.
- Use IRSA/workload identity instead of static cloud credentials in pods.
- Pin cluster/add-on versions and test upgrade/rollback paths.
- Separate critical financial services from burstable analytical workloads.

### Boundary / not claimed

Three availability zones improve regional availability; they do not provide multi-region disaster recovery.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L4 | System node groups | Critical controllers, DNS, ingress and observability. |
| L3 | Rust/Go services | Latency-critical and business-domain workloads. |
| L2 | Specialised compute | Isolated GPU or high-memory workloads where required. |
| L1 | Availability zones | Topology spread and zonal failure tolerance. |
| L0 | Policy layer | Admission, network, image and runtime controls. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Managed control plane | Versioned cluster API and upgrade lifecycle. | Spread replicas across zones and prevent one-zone placement through constraints. |
| System node groups | Critical controllers, DNS, ingress and observability. | Define PodDisruptionBudgets that permit upgrades without blocking recovery. |
| Rust/Go services | Latency-critical and business-domain workloads. | Use IRSA/workload identity instead of static cloud credentials in pods. |
| Specialised compute | Isolated GPU or high-memory workloads where required. | Pin cluster/add-on versions and test upgrade/rollback paths. |
| Availability zones | Topology spread and zonal failure tolerance. | Separate critical financial services from burstable analytical workloads. |
| Policy layer | Admission, network, image and runtime controls. | Spread replicas across zones and prevent one-zone placement through constraints. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-07-01` | Zonal concentration | One AZ removes all replicas | Topology spread | **RESCHEDULE** |
| `FM-07-02` | Bad eviction policy | Upgrade causes outage | PDB and capacity buffer | **PAUSE UPGRADE** |
| `FM-07-03` | Pod credential theft | Cloud resources compromised | Workload identity | **REVOKE** |
| `FM-07-04` | Noisy neighbour | Analytics starves ledger path | Node pools/quotas | **SHED LOAD** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-07-01` | **ACCEPTED** | managed Kubernetes and three-AZ regional topology. |
| `EVD-07-02` | **ACCEPTED** | Cluster, node-pool, namespace and workload inventory. |
| `EVD-07-03` | **ACCEPTED** | Zonal-failure and rescheduling exercise. |
| `EVD-07-04` | **ACCEPTED** | Upgrade, PDB, autoscaling and capacity evidence. |
| `EVD-07-05` | **ACCEPTED** | Admission, image, network and runtime policy exports. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
