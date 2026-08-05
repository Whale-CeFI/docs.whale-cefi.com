---
title: Product Surfaces and Frontend Topology
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/28-product-surfaces-and-frontend-topology
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-28
description: >-
  Whale CeFi exposes one governed system through production web surfaces, a
  production mobile application, the WENI streaming interface, internal
  administration and a production institutional interface.
---

# Product Surfaces and Frontend Topology

**Product Surfaces and Frontend Topology** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 28 is part of the 29 July 2026 official release. Its `FM-28-xx` controls and `EVD-28-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Whale CeFi exposes one governed system through production web surfaces, a production mobile application, the WENI streaming interface, internal administration and a production institutional interface. Shared identity does not imply unrestricted shared state.

### Normative design rules

* ‘Stream API’ is a Whale CeFi product interface, not the core intelligence source.
* Every surface renders the same canonical action and evidence state.
* Admin paths use separate identity, device trust and just-in-time privilege.
* Mobile local storage contains no signing secrets and uses platform key protection where appropriate.
* B2B interfaces expose typed evidence and unsigned proposals under tenant policy.

### Boundary / not claimed

The institutional API is Whale CeFi’s own product surface; it is not evidence that WENI is a third-party model API wrapper.

## Reference architecture

| Layer | Component               | Responsibility                                                     |
| ----- | ----------------------- | ------------------------------------------------------------------ |
| L5    | Web/dashboard           | Next.js, React, Tailwind and Vercel edge delivery.                 |
| L4    | Mobile app              | React Native/Expo with local session protection.                   |
| L3    | WENI chat/UI            | WebSockets, Whale CeFi Stream API and modular rendering.           |
| L2    | Admin                   | Internal RBAC, privileged workflows and restricted network access. |
| L1    | Institutional interface | Production REST/gRPC surface with OpenAPI 3.1 contracts.           |
| L0    | Policy gateway          | Consistent auth, entitlement, evidence and action states.          |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component               | Responsibility / input                                             | Control invariant                                                                                    |
| ----------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Web/dashboard           | Next.js, React, Tailwind and Vercel edge delivery.                 | ‘Stream API’ is a Whale CeFi product interface, not the core intelligence source.                    |
| Mobile app              | React Native/Expo with local session protection.                   | Every surface renders the same canonical action and evidence state.                                  |
| WENI chat/UI            | WebSockets, Whale CeFi Stream API and modular rendering.           | Admin paths use separate identity, device trust and just-in-time privilege.                          |
| Admin                   | Internal RBAC, privileged workflows and restricted network access. | Mobile local storage contains no signing secrets and uses platform key protection where appropriate. |
| Institutional interface | Production REST/gRPC surface with OpenAPI 3.1 contracts.           | B2B interfaces expose typed evidence and unsigned proposals under tenant policy.                     |
| Policy gateway          | Consistent auth, entitlement, evidence and action states.          | ‘Stream API’ is a Whale CeFi product interface, not the core intelligence source.                    |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode       | Failure effect                              | Primary control                       | Required state         |
| ---------- | ------------------ | ------------------------------------------- | ------------------------------------- | ---------------------- |
| `FM-28-01` | Surface divergence | Different clients show different risk state | Canonical response envelope           | **BLOCK RELEASE**      |
| `FM-28-02` | Admin compromise   | Privileged action bypasses controls         | JIT/RBAC and approvals                | **REVOKE**             |
| `FM-28-03` | Mobile extraction  | Session/context leaks from device           | Secure storage and minimisation       | **INVALIDATE SESSION** |
| `FM-28-04` | Streaming race     | UI shows partial state as final             | Versioned snapshots and state machine | **PENDING**            |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                         |
| ----------- | ------------ | --------------------------------------------------------- |
| `EVD-28-01` | **ACCEPTED** | Web production and mobile production stack.               |
| `EVD-28-02` | **ACCEPTED** | Cross-client canonical-state conformance suite.           |
| `EVD-28-03` | **ACCEPTED** | Mobile storage, session and jailbreak/root threat review. |
| `EVD-28-04` | **ACCEPTED** | Admin privilege and break-glass audit.                    |
| `EVD-28-05` | **ACCEPTED** | Institutional API contract and tenant-isolation tests.    |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
