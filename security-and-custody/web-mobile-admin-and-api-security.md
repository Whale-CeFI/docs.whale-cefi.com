---
title: Web, Mobile, Admin, and API Security
canonical: >-
  https://docs.whale-cefi.com/security-and-custody/web-mobile-admin-and-api-security
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Each client surface carries a different threat model. Browser edge delivery,
  React Native/Expo mobile storage, privileged administration and institutional
  APIs require distinct authentication, session
---

# Web, Mobile, Admin, and API Security

Each client surface carries a different threat model. Browser edge delivery, React Native/Expo mobile storage, privileged administration and institutional APIs require distinct authentication, session, integrity, abuse, dependency and release controls while sharing canonical backend authority.

## Control model

| Component or state | Responsibility                                                |
| ------------------ | ------------------------------------------------------------- |
| Web edge           | CSP, cookies, CSRF, dependency and origin controls.           |
| Mobile app         | Secure storage, attestation, deep-link and update integrity.  |
| Admin              | Restricted identity, managed device, JIT privilege and audit. |
| Public API         | Authentication, schema validation, quotas and abuse control.  |
| B2B API            | mTLS/OAuth, tenant isolation, signing and non-repudiation.    |
| Backend authority  | Server revalidates every financial and entitlement action.    |

## Invariants

* Keep authentication tokens out of insecure browser/mobile storage where feasible.
* Validate universal/deep links and wallet-return flows against origin substitution.
* Client-side checks never replace server-side financial and policy validation.
* Generate and test REST/gRPC contracts from governed schemas; use OpenAPI 3.1 for REST.
* Pin, scan and attest third-party packages and mobile/web release artefacts.

## Failure containment

| Failure              | Effect                                     | Control             | Response   |
| -------------------- | ------------------------------------------ | ------------------- | ---------- |
| Session fixation     | Attacker binds victim to malicious session | Rotation/binding    | REVOKE     |
| Deep-link hijack     | Wallet callback reaches attacker app       | Verified links      | BLOCK      |
| Tenant leakage       | B2B client reads another tenant            | Authorisation tests | DENY       |
| Supply-chain package | Malicious dependency enters build          | SBOM/signing        | QUARANTINE |

## Operational evidence

* Next.js/React/Tailwind, React Native/Expo, RBAC admin and REST and gRPC contracts.
* Surface-specific threat models and security acceptance tests.
* Session, CSRF/CSP, deep-link and secure-storage evidence.
* API tenant-isolation, authz, rate-limit and fuzz tests.
* Signed web/mobile artefact and SBOM provenance.

## Boundary conditions

A shared frontend framework or VPN does not make consumer, mobile, admin and B2B surfaces one security boundary.
