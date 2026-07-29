---
title: "Network, Ingress, and Egress Architecture"
description: "08 Network architecture separates public edge, private application services, financial workloads, data stores and administrative control. Egress is treated as an explicit capability because unrestricted…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/platform/08-network-ingress-and-egress-architecture"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-08"
---

# Network, Ingress, and Egress Architecture

**Network, Ingress, and Egress Architecture** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 08 is part of the 29 July 2026 official release. Its `FM-08-xx` controls and `EVD-08-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

08 Network architecture separates public edge, private application services, financial workloads, data stores and administrative control. Egress is treated as an explicit capability because unrestricted outbound traffic can bypass every data-governance promise.

### Normative design rules

- No database, Kafka, Redis or internal service is publicly routable.
- Egress is allowlisted by destination, purpose and workload identity.
- Use private endpoints where they reduce public exposure without hiding dependency risk.
- Protect origins from direct bypass of WAF/CDN controls.
- Capture flow and DNS evidence sufficient for incident reconstruction.

### Boundary / not claimed

Private networking reduces exposure but does not replace authenticated service identity or application authorisation. TEAM TRANSCRIPT + TECHNICAL NORMALISATION

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Edge | CDN/WAF, TLS termination, rate control and origin protection. |
| L4 | Ingress | Authenticated API routing and service exposure. |
| L3 | Service network | Private east-west traffic with identity and policy. |
| L2 | Data network | Restricted database, cache, event and analytics endpoints. |
| L1 | Custody/RPC egress | Allowlisted provider paths with DNS and certificate control. |
| L0 | Admin plane | Separate privileged access, device trust and audit. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Edge | CDN/WAF, TLS termination, rate control and origin protection. | No database, Kafka, Redis or internal service is publicly routable. |
| Ingress | Authenticated API routing and service exposure. | Egress is allowlisted by destination, purpose and workload identity. |
| Service network | Private east-west traffic with identity and policy. | Use private endpoints where they reduce public exposure without hiding dependency risk. |
| Data network | Restricted database, cache, event and analytics endpoints. | Protect origins from direct bypass of WAF/CDN controls. |
| Custody/RPC egress | Allowlisted provider paths with DNS and certificate control. | Capture flow and DNS evidence sufficient for incident reconstruction. |
| Admin plane | Separate privileged access, device trust and audit. | No database, Kafka, Redis or internal service is publicly routable. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-08-01` | Origin bypass | Attacker avoids edge controls | Origin authentication | **BLOCK** |
| `FM-08-02` | Open egress | Data exfiltration to arbitrary host | Egress gateway/allowlist | **DENY** |
| `FM-08-03` | Flat network | Compromise reaches financial stores | Segmentation/policy | **CONTAIN** |
| `FM-08-04` | DNS manipulation | Traffic reaches malicious endpoint | Resolver and TLS controls | **FAIL** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-08-01` | **ACCEPTED** | VPC, subnet, route, firewall and endpoint diagrams. |
| `EVD-08-02` | **ACCEPTED** | Public exposure and origin-bypass tests. |
| `EVD-08-03` | **ACCEPTED** | East-west and egress policy conformance evidence. |
| `EVD-08-04` | **ACCEPTED** | RPC/approved MPC custody provider endpoint allowlist and certificate policy. |
| `EVD-08-05` | **ACCEPTED** | Flow-log, DNS-log and retention validation. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
