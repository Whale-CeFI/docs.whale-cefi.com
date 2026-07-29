---
title: "Threat Model and Security Assurance"
description: "WENI’s threat model spans models, data, tools, chain state, contracts, cloud, custody, identities, users and insiders. Security assurance maps every control to an asset, threat, trust boundary, detection path…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/weni/33-threat-model-and-security-assurance"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-33"
---

# Threat Model and Security Assurance

**Threat Model and Security Assurance** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 33 is part of the 29 July 2026 official release. Its `FM-33-xx` controls and `EVD-33-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

WENI’s threat model spans models, data, tools, chain state, contracts, cloud, custody, identities, users and insiders. Security assurance maps every control to an asset, threat, trust boundary, detection path and tested recovery state.

### Normative design rules

- Use named trust boundaries and data flows, not a generic security checklist.
- Separate prevention, detection, containment, recovery and evidence preservation.
- Map every high-risk control to a test and owner.
- Treat partner, provider and admin access as first-class threat surfaces.
- Red-team cross-layer attacks that exploit individually correct components.

### Boundary / not claimed

No architecture is described as impenetrable, unhackable or a universal ‘AI armour’ against Web3 loss.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Model threats | Prompt injection, extraction, poisoning and unsafe planning. |
| L4 | Data threats | Stale, forged, correlated, unlicensed or private evidence. |
| L3 | Execution threats | Builder, decoder, simulation, MEV and payload mismatch. |
| L2 | Platform threats | IAM, supply chain, cluster, network and observability. |
| L1 | Financial threats | Ledger, reconciliation, custody, upgrade and oracle failure. |
| L0 | Human threats | Phishing, coercion, insider abuse and approval fatigue. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Model threats | Prompt injection, extraction, poisoning and unsafe planning. | Use named trust boundaries and data flows, not a generic security checklist. |
| Data threats | Stale, forged, correlated, unlicensed or private evidence. | Separate prevention, detection, containment, recovery and evidence preservation. |
| Execution threats | Builder, decoder, simulation, MEV and payload mismatch. | Map every high-risk control to a test and owner. |
| Platform threats | IAM, supply chain, cluster, network and observability. | Treat partner, provider and admin access as first-class threat surfaces. |
| Financial threats | Ledger, reconciliation, custody, upgrade and oracle failure. | Red-team cross-layer attacks that exploit individually correct components. |
| Human threats | Phishing, coercion, insider abuse and approval fatigue. | Use named trust boundaries and data flows, not a generic security checklist. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-33-01` | Cross-layer exploit | Model steers a valid tool into harmful context | End-to-end adversarial tests | **BLOCK** |
| `FM-33-02` | Insider abuse | Privileged operator changes policy or route | Quorum and immutable audit | **REVOKE** |
| `FM-33-03` | Supply-chain compromise | Dependency injects code | SBOM, signing and scanning | **QUARANTINE** |
| `FM-33-04` | Approval phishing | User signs a different action | Decoded wallet handoff | **ABORT** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-33-01` | **ACCEPTED** | STRIDE/attack-tree model for all trust boundaries. |
| `EVD-33-02` | **ACCEPTED** | Cloud, API, mobile and admin penetration test. |
| `EVD-33-03` | **ACCEPTED** | Model/tool/data red-team programme. |
| `EVD-33-04` | **ACCEPTED** | Supply-chain SBOM, provenance and signing evidence. |
| `EVD-33-05` | **ACCEPTED** | Incident exercises with measurable containment and recovery. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
