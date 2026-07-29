---
title: "Data Protection and Geographic Controls"
description: "Compliance architecture maps legal entity, product, data, custody, user region, and permitted action to enforceable controls. KYC, sanctions, privacy, retention, and geographic restrictions are driven by approved…"
canonical: "https://docs.whale-cefi.com/security-and-custody/data-protection-and-geographic-controls"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Data Protection and Geographic Controls

Compliance architecture maps legal entity, product, data, custody, user region, and permitted action to enforceable controls. KYC, sanctions, privacy, retention, and geographic restrictions are driven by approved policy and verified legal authority.

## Control model

| Component or state  | Responsibility                                                     |
| ------------------- | ------------------------------------------------------------------ |
| Entity/product      | Which company provides which service and assumes which obligation. |
| User eligibility    | Identity, residency, sanctions and product-access decision.        |
| Data purpose        | Collection, use, sharing, retention and deletion authority.        |
| Regional routing    | Storage, processing, support and provider geography.               |
| Control enforcement | API, UI, custody and contract action restrictions.                 |
| Evidence/audit      | Policy version, decision reason and legal approval.                |

## Invariants

* Treat IP geolocation as one signal; bind material eligibility to verified account policy.
* Apply sanctions and product restrictions at every relevant execution boundary.
* Link public wallet data to personal identity only under documented purpose and retention.
* Support subject rights without deleting mandatory financial or security records unlawfully.
* Version legal policy and preserve which rule produced each eligibility decision.

## Failure containment

| Failure                | Effect                                                     | Control                  | Response    |
| ---------------------- | ---------------------------------------------------------- | ------------------------ | ----------- |
| Geo bypass             | Restricted user accesses product                           | KYC/policy enforcement   | DENY        |
| Policy drift           | Different services apply different rules                   | Central versioned policy | HALT ACTION |
| Over-retention         | Personal data exceeds purpose                              | Retention/deletion jobs  | REMEDIATE   |
| Authorisation mismatch | Requested service lacks an applicable authorisation record | Legal-perimeter policy   | DENY        |

## Operational evidence

* Eurozone and UAE service scopes are versioned in the eligibility registry; USA, Canada, and sanctions restrictions are enforced at every execution boundary.
* Legal-entity and product-perimeter opinion.
* Each regulated capability resolves to the exact licence or registration record relied upon by the contracting entity.
* KYC, sanctions, geofencing and policy-consistency test suite.
* Data inventory, purpose, retention, residency and rights records.

## Boundary conditions

A regulated capability is enabled only when the contracting entity, product, region, and verified authorisation record resolve together.
