---
title: Multi-Region Kubernetes Runtime
canonical: >-
  https://docs.whale-cefi.com/advanced-platform-architecture/multi-region-kubernetes-runtime
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Production services run on independent managed Kubernetes clusters in primary
  and recovery regions, each spanning three availability zones. Stateless
  services operate active-active; financial authorit
---

# Multi-Region Kubernetes Runtime

Production services run on independent managed Kubernetes clusters in primary and recovery regions, each spanning three availability zones. Stateless services operate active-active; financial authorities use fenced single-writer failover, replicated evidence, and reconciliation-gated reopening.

## Control model

| Component or state    | Responsibility                                        |
| --------------------- | ----------------------------------------------------- |
| Managed control plane | Versioned cluster API and upgrade lifecycle.          |
| System node groups    | Critical controllers, DNS, ingress and observability. |
| Rust/Go services      | Latency-critical and business-domain workloads.       |
| Specialised compute   | Isolated GPU or high-memory workloads where required. |
| Availability zones    | Topology spread and zonal failure tolerance.          |
| Policy layer          | Admission, network, image and runtime controls.       |

## Invariants

* Spread replicas across zones and prevent one-zone placement through constraints.
* Define PodDisruptionBudgets that permit upgrades without blocking recovery.
* Use workload identity federation instead of static cloud credentials in workloads.
* Pin cluster/add-on versions and test upgrade/rollback paths.
* Separate critical financial services from burstable analytical workloads.

## Failure containment

| Failure              | Effect                        | Control                 | Response      |
| -------------------- | ----------------------------- | ----------------------- | ------------- |
| Zonal concentration  | One AZ removes all replicas   | Topology spread         | RESCHEDULE    |
| Bad eviction policy  | Upgrade causes outage         | PDB and capacity buffer | PAUSE UPGRADE |
| Pod credential theft | Cloud resources compromised   | Workload identity       | REVOKE        |
| Noisy neighbour      | Analytics starves ledger path | Node pools/quotas       | SHED LOAD     |

## Operational evidence

* independent regional Kubernetes clusters and three-zone topology in each region.
* Cluster, node-pool, namespace and workload inventory.
* Zonal-failure and rescheduling exercise.
* Upgrade, PDB, autoscaling and capacity evidence.
* Admission, image, network and runtime policy exports.

## Boundary conditions

Stateless execution is active-active across regions; stateful financial authority uses controlled leader election, fencing, and reconciled regional failover.
