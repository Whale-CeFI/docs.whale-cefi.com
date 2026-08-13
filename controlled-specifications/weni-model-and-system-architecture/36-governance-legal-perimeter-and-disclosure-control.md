---
title: Governance, Legal Perimeter, and Disclosure Control
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/weni/36-governance-legal-perimeter-and-disclosure-control
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-36
description: >-
  Technical architecture cannot decide legal classification by wording.
  Explanation, ranking, recommendation, routing, custody, transfer and execution
  are assessed per service, entity, jurisdiction and
---

# Governance, Legal Perimeter, and Disclosure Control

**Governance, Legal Perimeter, and Disclosure Control** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 36 is part of the 29 July 2026 official release. Its `FM-36-xx` controls and `EVD-36-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Technical architecture cannot decide legal classification by wording. Explanation, ranking, recommendation, routing, custody, transfer and execution are assessed per service, entity, jurisdiction and user. Disclosure follows the same evidence discipline as code release.

### Normative design rules

* Human signature alone does not settle advice, execution or transfer classification.
* Non-custodial WENI and hybrid-custody staking are documented as separate contours.
* MiCA/CASP, privacy, AI and sanctions requirements are mapped to actual services and entities.
* NDA partner names, benchmark details and infrastructure secrets require explicit approval.
* Every public claim maps to an evidence record, owner and expiry/review date.

### Boundary / not claimed

This whitepaper is internal technical design and diligence material; it is not legal advice, an investment recommendation or a public product promise.

## Reference architecture

| Layer | Component          | Responsibility                                                  |
| ----- | ------------------ | --------------------------------------------------------------- |
| L5    | Product governance | Constitution, scope, policy, models and release decisions.      |
| L4    | Risk governance    | Risk appetite, control ownership, exceptions and incidents.     |
| L3    | Model governance   | Lineage, evaluation, change, rollback and monitoring.           |
| L1    | Legal perimeter    | Entity, licence, service, jurisdiction and user classification. |
| L0    | Disclosure control | Green, restricted, NDA and prohibited claim states.             |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component            | Responsibility / input                                          | Control invariant                                                                             |
| -------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Product governance   | Constitution, scope, policy, models and release decisions.      | Human signature alone does not settle advice, execution or transfer classification.           |
| Risk governance      | Risk appetite, control ownership, exceptions and incidents.     | Non-custodial WENI and hybrid-custody staking are documented as separate contours.            |
| Model governance     | Lineage, evaluation, change, rollback and monitoring.           | MiCA/CASP, privacy, AI and sanctions requirements are mapped to actual services and entities. |
| Financial governance | Ledger, custody, reconciliation and contract authority.         | NDA partner names, benchmark details and infrastructure secrets require explicit approval.    |
| Legal perimeter      | Entity, licence, service, jurisdiction and user classification. | Every public claim maps to an evidence record, owner and expiry/review date.                  |
| Disclosure control   | Green, restricted, NDA and prohibited claim states.             | Human signature alone does not settle advice, execution or transfer classification.           |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode                 | Failure effect                               | Primary control                | Required state |
| ---------- | ---------------------------- | -------------------------------------------- | ------------------------------ | -------------- |
| `FM-36-01` | Regulatory misclassification | Service operates without required permission | Service-specific legal opinion | **RESTRICT**   |
| `FM-36-02` | Claim overreach              | Marketing exceeds evidence                   | Claim register and approval    | **WITHDRAW**   |
| `FM-36-03` | NDA breach                   | Restricted relationship disclosed            | Need-to-know controls          | **INCIDENT**   |
| `FM-36-04` | Governance deadlock          | Critical decision has no owner               | RACI and escalation            | **NO-GO**      |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                               |
| ----------- | ------------ | --------------------------------------------------------------- |
| `EVD-36-01` | **ACCEPTED** | Entity/service/jurisdiction regulatory perimeter matrix.        |
| `EVD-36-02` | **ACCEPTED** | Privacy records, DPIA where applicable and processor inventory. |
| `EVD-36-03` | **ACCEPTED** | Model, security, financial and disclosure governance charters.  |
| `EVD-36-04` | **ACCEPTED** | Claim-substantiation and NDA approval register.                 |
| `EVD-36-05` | **ACCEPTED** | Data-room index with owners, versions and access classes.       |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
