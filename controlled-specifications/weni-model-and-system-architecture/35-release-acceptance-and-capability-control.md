---
title: Release Acceptance and Capability Control
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/35-release-acceptance-and-capability-control
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-35
description: >-
  Release readiness is governed by a signed capability matrix and completed
  evidence gates rather than by a calendar date. Release 1 is the Whale
  CeFi-controlled WENI model-and-system stack with strict
---

# Release Acceptance and Capability Control

**Release Acceptance and Capability Control** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 35 is part of the 29 July 2026 official release. Its `FM-35-xx` controls and `EVD-35-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The 29 July 2026 release is governed by its signed capability matrix and accepted release evidence. The released Whale CeFi-controlled WENI model-and-system stack enforces strict human authorisation; autonomous signing and unsupported cross-chain execution remain outside the approved scope.

### Normative design rules

* Bind every release claim to the signed release manifest and supported-scope matrix.
* Core WENI is documented as Whale CeFi technology, not an API wrapper.
* Every launch claim resolves to the signed release manifest and supported-scope matrix.
* zkML, private-market integration, and controlled execution remain inside explicit capability boundaries.
* A failed safety or evidence control immediately suspends the affected capability regardless of marketing schedule.

### Boundary / not claimed

The release date, named approvals, supported jurisdictions, exact product mechanics, and signed go-live decision are bound to one release record.

## Reference architecture

| Layer | Component        | Responsibility                                                     |
| ----- | ---------------- | ------------------------------------------------------------------ |
| L5    | Feature freeze   | Networks, assets, actions, tiers and regions are signed.           |
| L4    | Evidence freeze  | Builds, model, policy, data and audit artefacts are complete.      |
| L3    | Security gate    | Contract, cloud, mobile, model and incident tests pass.            |
| L2    | Operational gate | SLOs, support, monitoring, reconciliation and rollback pass.       |
| L1    | Legal gate       | Entity, service and jurisdiction approvals are documented.         |
| L0    | Go-live          | Named authority accepts residual risks and signs release manifest. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component        | Responsibility / input                                             | Control invariant                                                                                        |
| ---------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Feature freeze   | Networks, assets, actions, tiers and regions are signed.           | Bind every release claim to the signed release manifest and supported-scope matrix.                      |
| Evidence freeze  | Builds, model, policy, data and audit artefacts are complete.      | Core WENI is documented as Whale CeFi technology, not an API wrapper.                                    |
| Security gate    | Contract, cloud, mobile, model and incident tests pass.            | No launch claim precedes the signed release manifest and supported-scope matrix.                         |
| Operational gate | SLOs, support, monitoring, reconciliation and rollback pass.       | zkML, private-market integration, and controlled execution remain inside explicit capability boundaries. |
| Legal gate       | Entity, service and jurisdiction approvals are documented.         | A failed safety or evidence control suspends the affected capability regardless of marketing schedule.   |
| Go-live          | Named authority accepts residual risks and signs release manifest. | Bind every release claim to the signed release manifest and supported-scope matrix.                      |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                                        | Primary control             | Required state |
| ---------- | ------------------- | ----------------------------------------------------- | --------------------------- | -------------- |
| `FM-35-01` | Scope inflation     | Unfinished capability enters launch                   | Signed scope and acceptance | **DEFER**      |
| `FM-35-02` | Date pressure       | Risk is accepted without authority                    | Non-waivable gates          | **NO-GO**      |
| `FM-35-03` | Region mismatch     | User receives unsupported service                     | KYC/geo/legal policy        | **DENY**       |
| `FM-35-04` | Model framing error | Own technology is presented as endpoint orchestration | Canonical claim review      | **CORRECT**    |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                                                          |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| `EVD-35-01` | **ACCEPTED** | Owner-approved release record defining exact scope, effective timestamp, and public availability decision. |
| `EVD-35-02` | **ACCEPTED** | Signed Release 1 scope and supported network/asset/action matrix.                                          |
| `EVD-35-03` | **ACCEPTED** | Model, code, policy, data and deployment release manifest.                                                 |
| `EVD-35-04` | **ACCEPTED** | Security, operational, reconciliation and rollback acceptance pack.                                        |
| `EVD-35-05` | **ACCEPTED** | Jurisdiction, disclosure and public-copy approval.                                                         |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
