---
title: One Truth, Multiple Cognitive Projections
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/weni/27-one-truth-multiple-cognitive-projections
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-27
description: >-
  Tier-0, active, professional and enterprise users consume the same governed
  evidence through different projections. WENI changes language, density and
  control sequencing; it never hides material risk
---

# One Truth, Multiple Cognitive Projections

**One Truth, Multiple Cognitive Projections** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 27 is part of the 29 July 2026 official release. Its `FM-27-xx` controls and `EVD-27-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Tier-0, active, professional and enterprise users consume the same governed evidence through different projections. WENI changes language, density and control sequencing; it never hides material risk or fabricates simplicity.

### Normative design rules

* Competency is verified and user-correctable; it is not inferred once and frozen.
* Beginner simplicity uses progressive disclosure, not omission of adverse facts.
* Professional export excludes secrets, other tenants and restricted partner data.
* Enterprise workflows preserve separation between analyst, risk and signer roles.
* Every projection supports inspection of source and reason for block or abstention.

### Boundary / not claimed

A higher tier unlocks depth and capacity, not permission to bypass non-overridable safety policy.

## Reference architecture

| Layer | Component           | Responsibility                                                         |
| ----- | ------------------- | ---------------------------------------------------------------------- |
| L4    | Tier-0              | Plain language, comprehension, traffic-light labels and guided review. |
| L3    | Active              | Comparisons, simulation, current evidence and action preparation.      |
| L2    | Tier-Pro            | Raw metrics, JSON evidence, route graph and policy trace.              |
| L1    | Enterprise          | Tenant isolation, role separation, SLOs and multisig proposal.         |
| L0    | Material invariants | Evidence, unknowns, policy, payload and expiry shared by all.          |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component           | Responsibility / input                                                 | Control invariant                                                                  |
| ------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Tier-0              | Plain language, comprehension, traffic-light labels and guided review. | Competency is verified and user-correctable; it is not inferred once and frozen.   |
| Active              | Comparisons, simulation, current evidence and action preparation.      | Beginner simplicity uses progressive disclosure, not omission of adverse facts.    |
| Tier-Pro            | Raw metrics, JSON evidence, route graph and policy trace.              | Professional export excludes secrets, other tenants and restricted partner data.   |
| Enterprise          | Tenant isolation, role separation, SLOs and multisig proposal.         | Enterprise workflows preserve separation between analyst, risk and signer roles.   |
| Material invariants | Evidence, unknowns, policy, payload and expiry shared by all.          | Every projection supports inspection of source and reason for block or abstention. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode          | Failure effect                           | Primary control              | Required state   |
| ---------- | --------------------- | ---------------------------------------- | ---------------------------- | ---------------- |
| `FM-27-01` | Unsafe simplification | Tier-0 sees only green                   | Material invariant schema    | **EXPAND**       |
| `FM-27-02` | Expert leakage        | Pro export reveals protected source      | Entitlement/redaction        | **DENY**         |
| `FM-27-03` | Role confusion        | Enterprise analyst also signs            | RACI and quorum              | **REQUIRE ROLE** |
| `FM-27-04` | Tier gaming           | User claims expertise to bypass friction | Controls independent of tier | **NO BYPASS**    |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                    |
| ----------- | ------------ | -------------------------------------------------------------------- |
| `EVD-27-01` | **ACCEPTED** | Projection specifications mapped to one canonical response envelope. |
| `EVD-27-02` | **ACCEPTED** | Tier misclassification and comprehension testing.                    |
| `EVD-27-03` | **ACCEPTED** | Redaction and entitlement test suite.                                |
| `EVD-27-04` | **ACCEPTED** | Enterprise role and approval integration evidence.                   |
| `EVD-27-05` | **ACCEPTED** | Material-fact invariance regression tests.                           |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
