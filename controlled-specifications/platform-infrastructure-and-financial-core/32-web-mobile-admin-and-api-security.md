---
title: Web, Mobile, Admin, and API Security
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/32-web-mobile-admin-and-api-security
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-32
---

# Web, Mobile, Admin, and API Security

**Web, Mobile, Admin, and API Security** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 32 is part of the 29 July 2026 official release. Its `FM-32-xx` controls and `EVD-32-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Each client surface carries a different threat model. Browser edge delivery, React Native/Expo mobile storage, privileged administration and institutional APIs require distinct authentication, session, integrity, abuse, dependency and release controls while sharing canonical backend authority.

### Normative design rules

* Keep authentication tokens out of insecure browser/mobile storage where feasible.
* Validate universal/deep links and wallet-return flows against origin substitution.
* Client-side checks never replace server-side financial and policy validation.
* Generate and test REST/gRPC contracts from governed schemas; use OpenAPI 3.1 for REST.
* Pin, scan and attest third-party packages and mobile/web release artefacts.

### Boundary / not claimed

A shared frontend framework or VPN does not make consumer, mobile, admin and B2B surfaces one security boundary.

## Reference architecture

| Layer | Component         | Responsibility                                                |
| ----- | ----------------- | ------------------------------------------------------------- |
| L5    | Web edge          | CSP, cookies, CSRF, dependency and origin controls.           |
| L4    | Mobile app        | Secure storage, attestation, deep-link and update integrity.  |
| L3    | Admin             | Restricted identity, managed device, JIT privilege and audit. |
| L2    | Public API        | Authentication, schema validation, quotas and abuse control.  |
| L1    | B2B API           | mTLS/OAuth, tenant isolation, signing and non-repudiation.    |
| L0    | Backend authority | Server revalidates every financial and entitlement action.    |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component         | Responsibility / input                                        | Control invariant                                                                      |
| ----------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Web edge          | CSP, cookies, CSRF, dependency and origin controls.           | Keep authentication tokens out of insecure browser/mobile storage where feasible.      |
| Mobile app        | Secure storage, attestation, deep-link and update integrity.  | Validate universal/deep links and wallet-return flows against origin substitution.     |
| Admin             | Restricted identity, managed device, JIT privilege and audit. | Client-side checks never replace server-side financial and policy validation.          |
| Public API        | Authentication, schema validation, quotas and abuse control.  | Generate and test REST/gRPC contracts from governed schemas; use OpenAPI 3.1 for REST. |
| B2B API           | mTLS/OAuth, tenant isolation, signing and non-repudiation.    | Pin, scan and attest third-party packages and mobile/web release artefacts.            |
| Backend authority | Server revalidates every financial and entitlement action.    | Keep authentication tokens out of insecure browser/mobile storage where feasible.      |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode         | Failure effect                             | Primary control     | Required state |
| ---------- | -------------------- | ------------------------------------------ | ------------------- | -------------- |
| `FM-32-01` | Session fixation     | Attacker binds victim to malicious session | Rotation/binding    | **REVOKE**     |
| `FM-32-02` | Deep-link hijack     | Wallet callback reaches attacker app       | Verified links      | **BLOCK**      |
| `FM-32-03` | Tenant leakage       | B2B client reads another tenant            | Authorisation tests | **DENY**       |
| `FM-32-04` | Supply-chain package | Malicious dependency enters build          | SBOM/signing        | **QUARANTINE** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                               |
| ----------- | ------------ | ------------------------------------------------------------------------------- |
| `EVD-32-01` | **ACCEPTED** | Next.js/React/Tailwind, React Native/Expo, RBAC admin and production REST/gRPC. |
| `EVD-32-02` | **ACCEPTED** | Surface-specific threat models and security acceptance tests.                   |
| `EVD-32-03` | **ACCEPTED** | Session, CSRF/CSP, deep-link and secure-storage evidence.                       |
| `EVD-32-04` | **ACCEPTED** | API tenant-isolation, authz, rate-limit and fuzz tests.                         |
| `EVD-32-05` | **ACCEPTED** | Signed web/mobile artefact and SBOM provenance.                                 |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
