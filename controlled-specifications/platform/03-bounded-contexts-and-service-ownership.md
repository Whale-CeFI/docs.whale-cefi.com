---
title: "Bounded Contexts and Service Ownership"
description: "03 The platform is decomposed by business authority rather than by arbitrary technical layers. Identity, portfolio, transaction, ledger, rewards, staking, custody integration and compliance each own a narrow…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/platform/03-bounded-contexts-and-service-ownership"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-03"
---

# Bounded Contexts and Service Ownership

**Bounded Contexts and Service Ownership** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 03 is part of the 29 July 2026 official release. Its `FM-03-xx` controls and `EVD-03-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

03 The platform is decomposed by business authority rather than by arbitrary technical layers. Identity, portfolio, transaction, ledger, rewards, staking, custody integration and compliance each own a narrow state model and publish versioned contracts.

### Normative design rules

- No service writes directly into another context’s private tables.
- Every domain event has one producer authority and explicit consumers.
- Financial and reward liabilities use separate accounts and controls.
- Service ownership includes on-call, incident and data-steward responsibilities.
- Distributed design is justified by authority and scaling needs, not fashion.

### Boundary / not claimed

‘No monolith’ is not treated as a quality claim; service boundaries must remain operationally defensible.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Identity context | Accounts, sessions, linked wallets and authentication state. |
| L4 | Transaction context | Requests, chain observations, lifecycle and settlement state. |
| L3 | Ledger context | Accounts, journals, postings, balances and reconciliation. |
| L2 | Rewards context | XP, task completion, tiers and reward liability. |
| L1 | Staking context | Products, terms, positions, yield and contract state. |
| L0 | Service catalogue | Owner, SLO, schema, authority and dependencies. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Identity context | Accounts, sessions, linked wallets and authentication state. | No service writes directly into another context’s private tables. |
| Transaction context | Requests, chain observations, lifecycle and settlement state. | Every domain event has one producer authority and explicit consumers. |
| Ledger context | Accounts, journals, postings, balances and reconciliation. | Financial and reward liabilities use separate accounts and controls. |
| Rewards context | XP, task completion, tiers and reward liability. | Service ownership includes on-call, incident and data-steward responsibilities. |
| Staking context | Products, terms, positions, yield and contract state. | Distributed design is justified by authority and scaling needs, not fashion. |
| Service catalogue | Owner, SLO, schema, authority and dependencies. | No service writes directly into another context’s private tables. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-03-01` | Shared-table coupling | One deployment breaks several domains | Owned schemas and APIs | **ISOLATE** |
| `FM-03-02` | Dual authority | Two services post the same state | Single-writer rule | **REJECT** |
| `FM-03-03` | Orphan service | No team owns incident recovery | Service catalogue/RACI | **ASSIGN** |
| `FM-03-04` | Chatty decomposition | Latency and failures multiply | Coarse bounded contexts | **CONSOLIDATE** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-03-01` | **ACCEPTED** | Service catalogue with owners, repositories and environments. |
| `EVD-03-02` | **ACCEPTED** | Context map and single-writer authority matrix. |
| `EVD-03-03` | **ACCEPTED** | API/event contracts and compatibility policy. |
| `EVD-03-04` | **ACCEPTED** | Dependency and critical-path latency graph. |
| `EVD-03-05` | **ACCEPTED** | On-call and incident ownership by context. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
