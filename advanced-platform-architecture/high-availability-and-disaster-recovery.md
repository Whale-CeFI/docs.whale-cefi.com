---
title: High Availability and Disaster Recovery
canonical: >-
  https://whale-cefi.com/docs/advanced-platform-architecture/high-availability-and-disaster-recovery
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# High Availability and Disaster Recovery

Whale CeFi operates independent primary and recovery regions, each distributed across three availability zones. Zonal failover, regional continuity, data recovery, and business resumption use explicit RTO and RPO objectives for each critical service and financial authority.

![High Availability and Disaster Recovery](../.gitbook/assets/20-incident-command.png)

## Control model

| Component or state  | Responsibility                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| In-zone resilience  | Process, pod and node replacement.                                                                      |
| Multi-AZ resilience | Service and data survival after one AZ loss.                                                            |
| Provider failover   | RPC, custody and external dependency degradation.                                                       |
| Backup/recovery     | Encrypted point-in-time restoration and integrity checks.                                               |
| Regional continuity | Independently deployable compute, replicated evidence, dependency diversity, and controlled activation. |
| Business resumption | Reconciliation and controlled reopening after recovery.                                                 |

## Invariants

* Assign RTO and RPO by service, data authority and user impact.
* Test AZ loss, not only replica restart under healthy regional dependencies.
* Back up ledger and configuration with immutable copies and restore validation.
* Recover financial services in authority order: evidence, ledger, reconciliation, then writes.
* Do not reopen transaction flows until recovered state is independently reconciled.

## Failure containment

| Failure          | Effect                                 | Control                           | Response       |
| ---------------- | -------------------------------------- | --------------------------------- | -------------- |
| AZ outage        | Capacity and replicas are lost         | Topology/capacity reserve         | FAIL OVER      |
| Region outage    | Primary regional authority unavailable | Fenced recovery-region activation | FAIL OVER      |
| Corrupt backup   | Restoration cannot produce authority   | Restore drills/checksums          | ESCALATE       |
| Premature reopen | Recovered ledger conflicts with chain  | Reconciliation gate               | KEEP READ-ONLY |

## Operational evidence

* independent managed Kubernetes clusters across primary and recovery regions.
* RTO/RPO and dependency-tier register.
* AZ-loss, database failover and capacity exercise.
* Backup immutability and full restore evidence.
* Quarterly regional failover, failback, and financial-reconciliation evidence.

## Boundary conditions

Multi-region status applies only to capabilities whose failover, authority fencing, data recovery, and post-event reconciliation have passed the current continuity exercise.
