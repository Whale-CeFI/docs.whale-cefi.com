---
title: Network Ingress and Egress
canonical: >-
  https://docs.whale-cefi.com/advanced-platform-architecture/network-ingress-and-egress
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Network Ingress and Egress

Network architecture separates public edge, private application services, financial workloads, data stores and administrative control. Egress is treated as an explicit capability because unrestricted outbound traffic can bypass every data-governance promise.

## Control model

| Component or state | Responsibility                                                |
| ------------------ | ------------------------------------------------------------- |
| Edge               | CDN/WAF, TLS termination, rate control and origin protection. |
| Ingress            | Authenticated API routing and service exposure.               |
| Service network    | Private east-west traffic with identity and policy.           |
| Data network       | Restricted database, cache, event and analytics endpoints.    |
| Custody/RPC egress | Allowlisted provider paths with DNS and certificate control.  |
| Admin plane        | Separate privileged access, device trust and audit.           |

## Invariants

* No database, Kafka, Redis or internal service is publicly routable.
* Egress is allowlisted by destination, purpose and workload identity.
* Use private endpoints where they reduce public exposure without hiding dependency risk.
* Protect origins from direct bypass of WAF/CDN controls.
* Capture flow and DNS evidence sufficient for incident reconstruction.

## Failure containment

| Failure          | Effect                              | Control                   | Response |
| ---------------- | ----------------------------------- | ------------------------- | -------- |
| Origin bypass    | Attacker avoids edge controls       | Origin authentication     | BLOCK    |
| Open egress      | Data exfiltration to arbitrary host | Egress gateway/allowlist  | DENY     |
| Flat network     | Compromise reaches financial stores | Segmentation/policy       | CONTAIN  |
| DNS manipulation | Traffic reaches malicious endpoint  | Resolver and TLS controls | FAIL     |

## Operational evidence

* VPC, subnet, route, firewall and endpoint diagrams.
* Public exposure and origin-bypass tests.
* East-west and egress policy conformance evidence.
* RPC/MPC custody endpoint allowlist and certificate policy.
* Flow-log, DNS-log and retention validation.

## Boundary conditions

Private networking reduces exposure but does not replace authenticated service identity or application authorisation.
