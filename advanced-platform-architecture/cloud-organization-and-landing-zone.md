---
title: Cloud Organization and Landing Zone
canonical: >-
  https://docs.whale-cefi.com/advanced-platform-architecture/cloud-organization-and-landing-zone
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Cloud Organization and Landing Zone

The cloud platform foundation isolates production, non-production, security, logging and shared services. Organisation policies, central identity, immutable logging and controlled network connectivity establish the blast-radius boundaries before workloads are deployed.

## Control model

| Component or state | Responsibility                                             |
| ------------------ | ---------------------------------------------------------- |
| Management         | Organisation policy, billing and account lifecycle.        |
| Security           | Detection, response tooling and delegated administration.  |
| Log archive        | Immutable cross-account audit and access evidence.         |
| Shared services    | DNS, artefacts, CI/CD and approved connectivity.           |
| Non-production     | Development, test and staging workloads.                   |
| Production         | managed Kubernetes, data and regulated platform workloads. |

## Invariants

* Use separate cloud accounts for production, security, logs and non-production.
* Prevent disabling audit, security or backup controls through organisation policy.
* Centralise human access through federated identity and short-lived sessions.
* Keep root credentials protected, monitored and unused for routine operation.
* Tag accounts and resources for owner, environment, data class and cost allocation.

## Failure containment

| Failure            | Effect                             | Control                                               | Response   |
| ------------------ | ---------------------------------- | ----------------------------------------------------- | ---------- |
| Account compromise | Attacker reaches every environment | Account separation and organization-policy guardrails | CONTAIN    |
| Log deletion       | Incident evidence disappears       | Archive account/object lock                           | ALERT      |
| Shadow account     | Uncontrolled workload holds data   | Account vending/inventory                             | QUARANTINE |
| Root use           | Unreviewed unrestricted action     | Hardware MFA and alerting                             | INCIDENT   |

## Operational evidence

* independent primary and recovery regions with three availability zones per region.
* cloud organization, account inventory, and organization-policy export.
* organization-wide audit, configuration, and security-log immutability evidence.
* Root, federation and privileged-access controls.
* Resource ownership, tagging and cost-governance report.

## Boundary conditions

Geographic availability is claimed only for capabilities with replicated authority, tested regional failover, and reconciled recovery evidence.
