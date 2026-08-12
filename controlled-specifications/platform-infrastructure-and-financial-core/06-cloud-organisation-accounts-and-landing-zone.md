---
title: Cloud Organisation, Accounts, and Landing Zone
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/06-cloud-organisation-accounts-and-landing-zone
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-06
---

# Cloud Organisation, Accounts, and Landing Zone

**Cloud Organisation, Accounts, and Landing Zone** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 06 is part of the 29 July 2026 official release. Its `FM-06-xx` controls and `EVD-06-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

06 The AWS foundation isolates production, non-production, security, logging and shared services. Organisation policies, central identity, immutable logging and controlled network connectivity establish the blast-radius boundaries before workloads are deployed.

### Normative design rules

* Use separate AWS accounts for production, security, logs and non-production.
* Prevent disabling audit, security or backup controls through organisation policy.
* Centralise human access through federated identity and short-lived sessions.
* Keep root credentials protected, monitored and unused for routine operation.
* Tag accounts and resources for owner, environment, data class and cost allocation.

### Boundary / not claimed

A single AWS region or account is not described as geographically distributed merely because it uses three availability zones.

## Reference architecture

| Layer | Component       | Responsibility                                             |
| ----- | --------------- | ---------------------------------------------------------- |
| L5    | Management      | Organisation policy, billing and account lifecycle.        |
| L4    | Security        | Detection, response tooling and delegated administration.  |
| L3    | Log archive     | Immutable cross-account audit and access evidence.         |
| L2    | Shared services | DNS, artefacts, CI/CD and approved connectivity.           |
| L1    | Non-production  | Development, test and staging workloads.                   |
| L0    | Production      | managed Kubernetes, data and regulated platform workloads. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component       | Responsibility / input                                     | Control invariant                                                                  |
| --------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Management      | Organisation policy, billing and account lifecycle.        | Use separate AWS accounts for production, security, logs and non-production.       |
| Security        | Detection, response tooling and delegated administration.  | Prevent disabling audit, security or backup controls through organisation policy.  |
| Log archive     | Immutable cross-account audit and access evidence.         | Centralise human access through federated identity and short-lived sessions.       |
| Shared services | DNS, artefacts, CI/CD and approved connectivity.           | Keep root credentials protected, monitored and unused for routine operation.       |
| Non-production  | Development, test and staging workloads.                   | Tag accounts and resources for owner, environment, data class and cost allocation. |
| Production      | managed Kubernetes, data and regulated platform workloads. | Use separate AWS accounts for production, security, logs and non-production.       |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode       | Failure effect                     | Primary control             | Required state |
| ---------- | ------------------ | ---------------------------------- | --------------------------- | -------------- |
| `FM-06-01` | Account compromise | Attacker reaches every environment | Account separation/SCPs     | **CONTAIN**    |
| `FM-06-02` | Log deletion       | Incident evidence disappears       | Archive account/object lock | **ALERT**      |
| `FM-06-03` | Shadow account     | Uncontrolled workload holds data   | Account vending/inventory   | **QUARANTINE** |
| `FM-06-04` | Root use           | Unreviewed unrestricted action     | Hardware MFA and alerting   | **INCIDENT**   |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                       |
| ----------- | ------------ | ------------------------------------------------------- |
| `EVD-06-01` | **ACCEPTED** | AWS deployment in eu-central-1.                         |
| `EVD-06-02` | **ACCEPTED** | AWS organisation/account inventory and SCP export.      |
| `EVD-06-03` | **ACCEPTED** | CloudTrail/config/security-log immutability evidence.   |
| `EVD-06-04` | **ACCEPTED** | Root, federation and privileged-access controls.        |
| `EVD-06-05` | **ACCEPTED** | Resource ownership, tagging and cost-governance report. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
