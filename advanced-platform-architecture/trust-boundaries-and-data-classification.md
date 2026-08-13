---
title: Trust Boundaries and Data Classification
canonical: >-
  https://whale-cefi.com/docs/advanced-platform-architecture/trust-boundaries-and-data-classification
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Trust Boundaries and Data Classification

Zero trust is implemented as explicit identities, least privilege, authenticated service calls, purpose-bound data and separate control planes. Public blockchain data becomes governed user data when it is linked, retained or used to personalise an account.

## Control model

| Component or state | Responsibility                                               |
| ------------------ | ------------------------------------------------------------ |
| Public/edge        | Browsers, devices, wallets and untrusted network input.      |
| Application plane  | Authenticated APIs and product services.                     |
| Financial plane    | Ledger, reconciliation and transaction authority.            |
| Custody plane      | MPC custody vault policy and authorised operators.           |
| Data plane         | PII, linked addresses, financial, audit and analytical data. |
| Control plane      | IAM, deployment, policy, secrets and break-glass authority.  |

## Invariants

* Classify data by sensitivity, authority, purpose, region and retention.
* Service identity is workload-bound and short-lived where possible.
* Network location never substitutes for authentication and authorisation.
* Financial and custody administration requires stronger separation than read-only analytics.
* Every cross-boundary flow is encrypted, authenticated, logged and minimised.

## Failure containment

| Failure                  | Effect                                       | Control                      | Response |
| ------------------------ | -------------------------------------------- | ---------------------------- | -------- |
| Trust transitivity       | Internal caller is accepted without identity | mTLS/workload identity       | DENY     |
| Data reclassification    | Linked address exposes personal profile      | Purpose and privacy controls | RESTRICT |
| Control-plane compromise | Attacker changes production policy           | Strong IAM/quorum            | FREEZE   |
| Audit blind spot         | Sensitive flow is unobservable               | Tamper-evident logs          | INCIDENT |

## Operational evidence

* Trust-boundary and data-classification diagrams.
* Workload identity and service authorisation policies.
* Encryption, key ownership and data-residency matrix.
* Cross-boundary access and logging tests.
* Privacy treatment of linked blockchain addresses.

## Boundary conditions

A private VPC or VPN is not represented as sufficient zero-trust security by itself.
