---
title: Infrastructure Scope and System Context
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/platform/01-infrastructure-scope-and-system-context
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-01
---

# Infrastructure Scope and System Context

**Infrastructure Scope and System Context** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 01 is part of the 29 July 2026 official release. Its `FM-01-xx` controls and `EVD-01-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

01 This paper defines the operating platform beneath Whale CeFi: client surfaces, services, data stores, financial records, blockchain connectivity, custody, contracts, security and release operations. Internal AI-agent technology is explicitly outside scope.

### Normative design rules

* Treat platform infrastructure and AI-agent technology as separate controlled documents.
* Every component receives an owner, environment, authority class and evidence state.
* Financial state is governed independently from presentation and analytical projections.
* External providers are dependencies with explicit failure and continuity modes.
* Architecture diagrams distinguish reported deployment from normative target design.

### Boundary / not claimed

This document does not describe how any AI-agent model is trained, aligned, reasoned, personalised or internally executed.

## Reference architecture

| Layer | Component             | Responsibility                                                              |
| ----- | --------------------- | --------------------------------------------------------------------------- |
| L5    | Client surfaces       | Web, mobile, administration and institutional product interfaces.           |
| L4    | Platform services     | Identity, portfolio, staking, rewards, ledger and transaction domains.      |
| L3    | Data and event plane  | Transactional, streaming, cache, time-series and analytical systems.        |
| L2    | Financial authority   | Ledger, settlement evidence, reconciliation and exception control.          |
| L1    | Custody/contracts     | approved MPC custody provider policy and on-chain smart-contract authority. |
| L0    | OUT-OF-SCOPE BOUNDARY | Model training, cognition and all AI-agent internals.                       |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component             | Responsibility / input                                                      | Control invariant                                                                       |
| --------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Client surfaces       | Web, mobile, administration and institutional product interfaces.           | Treat platform infrastructure and AI-agent technology as separate controlled documents. |
| Platform services     | Identity, portfolio, staking, rewards, ledger and transaction domains.      | Every component receives an owner, environment, authority class and evidence state.     |
| Data and event plane  | Transactional, streaming, cache, time-series and analytical systems.        | Financial state is governed independently from presentation and analytical projections. |
| Financial authority   | Ledger, settlement evidence, reconciliation and exception control.          | External providers are dependencies with explicit failure and continuity modes.         |
| Custody/contracts     | approved MPC custody provider policy and on-chain smart-contract authority. | Architecture diagrams distinguish reported deployment from normative target design.     |
| OUT-OF-SCOPE BOUNDARY | Model training, cognition and all AI-agent internals.                       | Treat platform infrastructure and AI-agent technology as separate controlled documents. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                            | Primary control             | Required state      |
| ---------- | ------------------- | ----------------------------------------- | --------------------------- | ------------------- |
| `FM-01-01` | Scope bleed         | AI internals displace platform detail     | Explicit exclusion register | **REMOVE**          |
| `FM-01-02` | Authority ambiguity | UI or analytics becomes source of record  | System-of-record matrix     | **CORRECT**         |
| `FM-01-03` | Hidden dependency   | Provider failure has no degraded mode     | Dependency inventory        | **DEGRADE**         |
| `FM-01-04` | Status inflation    | Reference design is presented as deployed | Evidence tags               | **DOWNGRADE CLAIM** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                           |
| ----------- | ------------ | ----------------------------------------------------------- |
| `EVD-01-01` | **ACCEPTED** | Approved platform boundary and excluded AI-technology list. |
| `EVD-01-02` | **ACCEPTED** | System context, ownership and authority diagrams.           |
| `EVD-01-03` | **ACCEPTED** | Environment and external-dependency inventory.              |
| `EVD-01-04` | **ACCEPTED** | Source-of-record matrix for every material state.           |
| `EVD-01-05` | **ACCEPTED** | Architecture-to-runtime evidence index.                     |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
