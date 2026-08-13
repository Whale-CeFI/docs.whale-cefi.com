---
title: "Diligence Evidence, Residual Risk, and Decision Record"
description: "A top-tier architecture dossier ends with falsifiable evidence, not adjectives. Every material claim maps to source, owner, environment, deployed identity, test, exception and approval; gaps remain visible as…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/platform/36-diligence-evidence-residual-risk-and-decision-record"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-36"
---

# Diligence Evidence, Residual Risk, and Decision Record

**Diligence Evidence, Residual Risk, and Decision Record** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 36 is part of the 29 July 2026 official release. Its `FM-36-xx` controls and `EVD-36-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

A top-tier architecture dossier ends with falsifiable evidence, not adjectives. Every material claim maps to source, owner, environment, deployed identity, test, exception and approval; gaps remain visible as diligence requests and cannot be hidden by visual polish.

### Normative design rules

- Use one-way promotion: proposed to owner-confirmed to implemented to evidenced.
- Make evidence reproducible and tied to the deployed version and environment.
- Distinguish attached evidence, team report, technical specification and legal opinion.
- Track residual risk with measurable treatment and expiry rather than ‘accepted’ prose alone.
- Keep the independent auditor annex unmodified and interpret it through an explicit status register.

### Boundary / not claimed

This paper is an architecture and diligence control document; it is not independent proof that every specified control is already deployed. COMPLETE CONTROLLED CORPUS

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Claim register | Exact statement, scope, status and permitted audience. |
| L4 | Architecture evidence | Runtime inventory, configuration and ownership. |
| L3 | Control evidence | Tests, logs, reconciliations and exercises. |
| L2 | Deployment identity | Commit, artefact, manifest, address and digest. |
| L1 | Gap/risk register | Impact, likelihood, owner, treatment and expiry. |
| L0 | Decision record | Go/no-go, waiver, rationale and independent approval. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Claim register | Exact statement, scope, status and permitted audience. | Use one-way promotion: proposed to owner-confirmed to implemented to evidenced. |
| Architecture evidence | Runtime inventory, configuration and ownership. | Make evidence reproducible and tied to the deployed version and environment. |
| Control evidence | Tests, logs, reconciliations and exercises. | Distinguish attached evidence, team report, technical specification and legal opinion. |
| Deployment identity | Commit, artefact, manifest, address and digest. | Track residual risk with measurable treatment and expiry rather than ‘accepted’ prose alone. |
| Gap/risk register | Impact, likelihood, owner, treatment and expiry. | Keep the independent auditor annex unmodified and interpret it through an explicit status register. |
| Decision record | Go/no-go, waiver, rationale and independent approval. | Use one-way promotion: proposed to owner-confirmed to implemented to evidenced. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-36-01` | Architecture theatre | Document outruns deployed system | Evidence mapping | **DOWNGRADE CLAIM** |
| `FM-36-02` | Stale evidence | Old test is applied to new build | Version binding | **RETEST** |
| `FM-36-03` | Oral dependency | Only one person can explain control | Data-room artefact | **DOCUMENT** |
| `FM-36-04` | Hidden residual risk | Launch authority lacks true picture | Risk register | **NO-GO** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-36-01` | **ACCEPTED** | Supplied independent auditor audit artefact and controlled team transcript. |
| `EVD-36-02` | **ACCEPTED** | Current service, environment, data and deployment inventory. |
| `EVD-36-03` | **ACCEPTED** | Financial golden journals, reconciliation and custody traces. |
| `EVD-36-04` | **ACCEPTED** | Security, resilience, recovery and release test packages. |
| `EVD-36-05` | **ACCEPTED** | Signed residual-risk, legal and final go/no-go decisions. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
