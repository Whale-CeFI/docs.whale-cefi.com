---
title: Trust Boundaries and Data Classification
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/platform/04-trust-boundaries-and-data-classification
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-04
---

# Trust Boundaries and Data Classification

**Trust Boundaries and Data Classification** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 04 is part of the 29 July 2026 official release. Its `FM-04-xx` controls and `EVD-04-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

04 Zero trust is implemented as explicit identities, least privilege, authenticated service calls, purpose-bound data and separate control planes. Public blockchain data becomes governed user data when it is linked, retained or used to personalise an account.

### Normative design rules

* Classify data by sensitivity, authority, purpose, region and retention.
* Service identity is workload-bound and short-lived where possible.
* Network location never substitutes for authentication and authorisation.
* Financial and custody administration requires stronger separation than read-only analytics.
* Every cross-boundary flow is encrypted, authenticated, logged and minimised.

### Boundary / not claimed

A private VPC or VPN is not represented as sufficient zero-trust security by itself.

## Reference architecture

| Layer | Component         | Responsibility                                                       |
| ----- | ----------------- | -------------------------------------------------------------------- |
| L5    | Public/edge       | Browsers, devices, wallets and untrusted network input.              |
| L4    | Application plane | Authenticated APIs and product services.                             |
| L3    | Financial plane   | Ledger, reconciliation and transaction authority.                    |
| L2    | Custody plane     | approved MPC custody provider vault policy and authorised operators. |
| L1    | Data plane        | PII, linked addresses, financial, audit and analytical data.         |
| L0    | Control plane     | IAM, deployment, policy, secrets and break-glass authority.          |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component         | Responsibility / input                                               | Control invariant                                                                           |
| ----------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Public/edge       | Browsers, devices, wallets and untrusted network input.              | Classify data by sensitivity, authority, purpose, region and retention.                     |
| Application plane | Authenticated APIs and product services.                             | Service identity is workload-bound and short-lived where possible.                          |
| Financial plane   | Ledger, reconciliation and transaction authority.                    | Network location never substitutes for authentication and authorisation.                    |
| Custody plane     | approved MPC custody provider vault policy and authorised operators. | Financial and custody administration requires stronger separation than read-only analytics. |
| Data plane        | PII, linked addresses, financial, audit and analytical data.         | Every cross-boundary flow is encrypted, authenticated, logged and minimised.                |
| Control plane     | IAM, deployment, policy, secrets and break-glass authority.          | Classify data by sensitivity, authority, purpose, region and retention.                     |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode             | Failure effect                               | Primary control              | Required state |
| ---------- | ------------------------ | -------------------------------------------- | ---------------------------- | -------------- |
| `FM-04-01` | Trust transitivity       | Internal caller is accepted without identity | mTLS/workload identity       | **DENY**       |
| `FM-04-02` | Data reclassification    | Linked address exposes personal profile      | Purpose and privacy controls | **RESTRICT**   |
| `FM-04-03` | Control-plane compromise | Attacker changes production policy           | Strong IAM/quorum            | **FREEZE**     |
| `FM-04-04` | Audit blind spot         | Sensitive flow is unobservable               | Tamper-evident logs          | **INCIDENT**   |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                     |
| ----------- | ------------ | ----------------------------------------------------- |
| `EVD-04-01` | **ACCEPTED** | Trust-boundary and data-classification diagrams.      |
| `EVD-04-02` | **ACCEPTED** | Workload identity and service authorisation policies. |
| `EVD-04-03` | **ACCEPTED** | Encryption, key ownership and data-residency matrix.  |
| `EVD-04-04` | **ACCEPTED** | Cross-boundary access and logging tests.              |
| `EVD-04-05` | **ACCEPTED** | Privacy treatment of linked blockchain addresses.     |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
