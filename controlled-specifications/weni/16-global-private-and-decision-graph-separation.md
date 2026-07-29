---
title: "Global, Private, and Decision Graph Separation"
description: "The Cognitive Execution Graph is implemented as separated authorities: a global evidence graph, a private user intelligence graph and a decision/audit graph. Their relationship is permissioned and…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/weni/16-global-private-and-decision-graph-separation"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-16"
---

# Global, Private, and Decision Graph Separation

**Global, Private, and Decision Graph Separation** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 16 is part of the 29 July 2026 official release. Its `FM-16-xx` controls and `EVD-16-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The Cognitive Execution Graph is implemented as separated authorities: a global evidence graph, a private user intelligence graph and a decision/audit graph. Their relationship is permissioned and purpose-bound; none is a free-form transcript store.

### Normative design rules

- User identity mapping is isolated from public address data through controlled linkage, not UUID alone.
- Derived traits such as risk tolerance remain sensitive personal data.
- Global evidence cannot be poisoned by user-controlled memory writes.
- Every cross-graph join has purpose, expiry, tenant and disclosure policy.
- Deletion, reset and legal retention are distinct lifecycle operations.

### Boundary / not claimed

A user-visible delete action does not promise deletion of records that must lawfully remain in security, ledger or audit systems.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L4 | Global Evidence Graph | Market, chain, protocol and security facts. |
| L3 | Private User Graph | Consent, competence, goals, constraints and corrections. |
| L2 | Decision Graph | Evidence, plan, policy, simulation, payload and outcome. |
| L1 | Purpose broker | Authorises minimum field-level joins for one workflow. |
| L0 | Audit log | Records who accessed what, why, for how long and under which policy. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Global Evidence Graph | Market, chain, protocol and security facts. | User identity mapping is isolated from public address data through controlled linkage, not UUID alone. |
| Private User Graph | Consent, competence, goals, constraints and corrections. | Derived traits such as risk tolerance remain sensitive personal data. |
| Decision Graph | Evidence, plan, policy, simulation, payload and outcome. | Global evidence cannot be poisoned by user-controlled memory writes. |
| Purpose broker | Authorises minimum field-level joins for one workflow. | Every cross-graph join has purpose, expiry, tenant and disclosure policy. |
| Audit log | Records who accessed what, why, for how long and under which policy. | Deletion, reset and legal retention are distinct lifecycle operations. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-16-01` | Graph bleed | Private state enters global evidence | Separate stores and typed broker | **REVOKE JOIN** |
| `FM-16-02` | Identity linkage | Addresses expose personal profile | Tokenised mapping vault | **RESTRICT** |
| `FM-16-03` | Inferred-trait persistence | Temporary panic becomes permanent profile | Confidence, expiry and consent | **EXPIRE** |
| `FM-16-04` | Audit tampering | Decision provenance is altered | Append-only signed records | **INCIDENT** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-16-01` | **ACCEPTED** | Graph schemas and cross-graph purpose contracts. |
| `EVD-16-02` | **ACCEPTED** | Identity linkage, tokenisation and access-control design. |
| `EVD-16-03` | **ACCEPTED** | Consent, correction, export, reset and deletion test suite. |
| `EVD-16-04` | **ACCEPTED** | Tenant isolation and re-identification assessment. |
| `EVD-16-05` | **ACCEPTED** | Decision-graph integrity and retention policy. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
