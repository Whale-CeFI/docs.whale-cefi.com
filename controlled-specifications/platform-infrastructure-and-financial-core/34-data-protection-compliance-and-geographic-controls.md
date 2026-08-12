---
title: Data Protection, Compliance, and Geographic Controls
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/34-data-protection-compliance-and-geographic-controls
document_status: official-release
audience: technical
last_reviewed: '2026-08-10'
control_id: PLATFORM-34
---

# Data Protection, Compliance, and Geographic Controls

**Data Protection, Compliance, and Geographic Controls** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 34 is part of the 29 July 2026 official release. Its `FM-34-xx` controls and `EVD-34-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Compliance architecture maps legal entity, product, data, custody, user region and permitted action to enforceable controls. KYC, sanctions, privacy, retention and geographic restrictions must be driven by approved policy and legal evidence rather than marketing assumptions.

### Normative design rules

* Treat IP geolocation as one signal; bind material eligibility to verified account policy.
* Apply sanctions and product restrictions at every relevant execution boundary.
* Link public wallet data to personal identity only under documented purpose and retention.
* Support subject rights without deleting mandatory financial or security records unlawfully.
* Version legal policy and preserve which rule produced each eligibility decision.

### Boundary / not claimed

The document does not assert that a CASP/MiCA authorisation is already granted unless the licence artefact is attached and verified.

## Reference architecture

| Layer | Component           | Responsibility                                                     |
| ----- | ------------------- | ------------------------------------------------------------------ |
| L5    | Entity/product      | Which company provides which service and assumes which obligation. |
| L4    | User eligibility    | Identity, residency, sanctions and product-access decision.        |
| L3    | Data purpose        | Collection, use, sharing, retention and deletion authority.        |
| L2    | Regional routing    | Storage, processing, support and provider geography.               |
| L1    | Control enforcement | API, UI, custody and contract action restrictions.                 |
| L0    | Evidence/audit      | Policy version, decision reason and legal approval.                |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component           | Responsibility / input                                             | Control invariant                                                                           |
| ------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Entity/product      | Which company provides which service and assumes which obligation. | Treat IP geolocation as one signal; bind material eligibility to verified account policy.   |
| User eligibility    | Identity, residency, sanctions and product-access decision.        | Apply sanctions and product restrictions at every relevant execution boundary.              |
| Data purpose        | Collection, use, sharing, retention and deletion authority.        | Link public wallet data to personal identity only under documented purpose and retention.   |
| Regional routing    | Storage, processing, support and provider geography.               | Support subject rights without deleting mandatory financial or security records unlawfully. |
| Control enforcement | API, UI, custody and contract action restrictions.                 | Version legal policy and preserve which rule produced each eligibility decision.            |
| Evidence/audit      | Policy version, decision reason and legal approval.                | Treat IP geolocation as one signal; bind material eligibility to verified account policy.   |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode       | Failure effect                           | Primary control          | Required state  |
| ---------- | ------------------ | ---------------------------------------- | ------------------------ | --------------- |
| `FM-34-01` | Geo bypass         | Restricted user accesses product         | KYC/policy enforcement   | **DENY**        |
| `FM-34-02` | Policy drift       | Different services apply different rules | Central versioned policy | **HALT ACTION** |
| `FM-34-03` | Over-retention     | Personal data exceeds purpose            | Retention/deletion jobs  | **REMEDIATE**   |
| `FM-34-04` | Licence assumption | Launch claim lacks legal evidence        | Counsel/licence gate     | **NO-GO**       |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                                                                       |
| ----------- | ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `EVD-34-01` | **ACCEPTED** | El Salvador operating perimeter and account-specific eligible regions; USA, Canada and sanctions restrictions reported. |
| `EVD-34-02` | **ACCEPTED** | Legal-entity and product-perimeter opinion.                                                                             |
| `EVD-34-03` | **ACCEPTED** | Licence/registration evidence before claiming CASP/MiCA passporting.                                                    |
| `EVD-34-04` | **ACCEPTED** | KYC, sanctions, geofencing and policy-consistency test suite.                                                           |
| `EVD-34-05` | **ACCEPTED** | Data inventory, purpose, retention, residency and rights records.                                                       |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
