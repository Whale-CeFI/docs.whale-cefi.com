---
title: "Release Scope and Acceptance"
description: "Release readiness is governed by a signed capability matrix and completed evidence gates rather than by a calendar date. Release scope is converted from a date into a signed capability matrix: surfaces…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/platform/35-release-scope-and-acceptance"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-35"
---

# Release Scope and Acceptance

**Release Scope and Acceptance** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 35 is part of the 29 July 2026 official release. Its `FM-35-xx` controls and `EVD-35-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Release readiness is governed by a signed capability matrix and completed evidence gates rather than by a calendar date. Release scope is converted from a date into a signed capability matrix: surfaces, regions, networks, assets, custody paths, financial controls, operational limits and evidence gates.

### Normative design rules

- Publish only capabilities that have explicit production acceptance evidence.
- Freeze supported assets by canonical address and action, not token name alone.
- Use progressive exposure and reversible limits for new financial paths.
- Maintain staffed incident, custody and reconciliation coverage through launch.
- Record every waiver with owner, rationale, expiry and compensating control.

### Boundary / not claimed

A calendar date is not evidence of readiness; every feature, region, and financial path requires explicit production acceptance.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Scope freeze | Named surfaces, functions, networks, assets and regions. |
| L4 | Evidence complete | Security, financial, contract, custody and operational proof. |
| L3 | Capacity/readiness | SLO load, staffing, provider limits and incident response. |
| L2 | Legal approval | Entity, product, region, disclosure and token controls. |
| L1 | Go/no-go | Named authority accepts residual risk and rollback. |
| L0 | Launch/observe | Phased exposure, telemetry, reconciliation and review. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Scope freeze | Named surfaces, functions, networks, assets and regions. | Publish only capabilities that have explicit production acceptance evidence. |
| Evidence complete | Security, financial, contract, custody and operational proof. | Freeze supported assets by canonical address and action, not token name alone. |
| Capacity/readiness | SLO load, staffing, provider limits and incident response. | Use progressive exposure and reversible limits for new financial paths. |
| Legal approval | Entity, product, region, disclosure and token controls. | Maintain staffed incident, custody and reconciliation coverage through launch. |
| Go/no-go | Named authority accepts residual risk and rollback. | Record every waiver with owner, rationale, expiry and compensating control. |
| Launch/observe | Phased exposure, telemetry, reconciliation and review. | Publish only capabilities that have explicit production acceptance evidence. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-35-01` | Date-driven launch | Known gaps are ignored | Evidence-based no-go | **DELAY SCOPE** |
| `FM-35-02` | Scope ambiguity | Unsupported action appears available | Capability registry | **HIDE/BLOCK** |
| `FM-35-03` | Provider limit | Launch traffic exhausts dependency | Capacity proof | **THROTTLE** |
| `FM-35-04` | Unowned waiver | Risk persists indefinitely | Expiry/governance | **REJECT** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-35-01` | **ACCEPTED** | Owner-approved release record defining exact scope, effective timestamp, and public availability decision. |
| `EVD-35-02` | **ACCEPTED** | Mobile application, Learn-to-Earn and fifteen base assets intended for scope. |
| `EVD-35-03` | **ACCEPTED** | Frozen release capability and region matrix. |
| `EVD-35-04` | **ACCEPTED** | Signed security, finance, custody, contract and operations acceptance. |
| `EVD-35-05` | **ACCEPTED** | Capacity, incident staffing, rollback and launch-day control evidence. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
