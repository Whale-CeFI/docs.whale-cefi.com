---
title: Environment and Product-Surface Matrix
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/platform/02-environment-and-product-surface-matrix
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-02
---

# Environment and Product-Surface Matrix

**Environment and Product-Surface Matrix** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 02 is part of the 29 July 2026 official release. Its `FM-02-xx` controls and `EVD-02-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

02 Whale CeFi operates multiple surfaces at different maturity levels. Production web, production mobile, developing conversational UI, internal administration and production B2B access must never be collapsed into one generic ‘platform is live’ statement.

### Normative design rules

* Publish maturity and availability per surface, region and build.
* Keep production credentials, data and network paths outside lower environments.
* Use one canonical backend state contract across all clients.
* Separate administrative identity and devices from consumer authentication.
* Use OpenAPI 3.1 and reject the malformed version token found in the raw transcription.

### Boundary / not claimed

A development or production surface is not represented as generally available production functionality.

## Reference architecture

| Layer | Component             | Responsibility                                                |
| ----- | --------------------- | ------------------------------------------------------------- |
| L5    | Production web        | Next.js, React, Tailwind CSS and Vercel edge delivery.        |
| L4    | Production mobile     | React Native and Expo with protected local session state.     |
| L3    | Product service UI    | Streaming interface and reviewed modular components.          |
| L1    | Institutional surface | Production REST/gRPC contracts and OpenAPI 3.1 specification. |
| L0    | Environment control   | Dev, test, staging, pre-production and production separation. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component               | Responsibility / input                                        | Control invariant                                                                      |
| ----------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Production web          | Next.js, React, Tailwind CSS and Vercel edge delivery.        | Publish maturity and availability per surface, region and build.                       |
| Production mobile       | React Native and Expo with protected local session state.     | Keep production credentials, data and network paths outside lower environments.        |
| Product service UI      | Streaming interface and reviewed modular components.          | Use one canonical backend state contract across all clients.                           |
| Internal administration | RBAC, restricted access and privileged workflows.             | Separate administrative identity and devices from consumer authentication.             |
| Institutional surface   | Production REST/gRPC contracts and OpenAPI 3.1 specification. | Use OpenAPI 3.1 and reject the malformed version token found in the raw transcription. |
| Environment control     | Dev, test, staging, pre-production and production separation. | Publish maturity and availability per surface, region and build.                       |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode          | Failure effect                             | Primary control            | Required state |
| ---------- | --------------------- | ------------------------------------------ | -------------------------- | -------------- |
| `FM-02-01` | Environment confusion | Test capability is announced as production | Deployment matrix          | **CORRECT**    |
| `FM-02-02` | Data crossover        | Production data enters development         | Account/project isolation  | **BLOCK**      |
| `FM-02-03` | Client divergence     | Surfaces show inconsistent balances        | Contract conformance tests | **NO-GO**      |
| `FM-02-04` | Admin exposure        | Privileged surface is internet-accessible  | Restricted access plane    | **REVOKE**     |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                        |
| ----------- | ------------ | -------------------------------------------------------- |
| `EVD-02-01` | **ACCEPTED** | Current UI deployment matrix and technology stack.       |
| `EVD-02-02` | **ACCEPTED** | Environment account/project inventory and data-flow map. |
| `EVD-02-03` | **ACCEPTED** | Cross-client contract and state conformance suite.       |
| `EVD-02-04` | **ACCEPTED** | Production release/build identifiers by surface.         |
| `EVD-02-05` | **ACCEPTED** | Administrative access and device-trust evidence.         |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
