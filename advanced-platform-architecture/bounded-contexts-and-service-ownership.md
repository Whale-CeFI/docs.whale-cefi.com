---
title: Bounded Contexts and Service Ownership
canonical: >-
  https://docs.whale-cefi.com/advanced-platform-architecture/bounded-contexts-and-service-ownership
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Bounded Contexts and Service Ownership

The platform is decomposed by business authority rather than by arbitrary technical layers. Identity, portfolio, transaction, ledger, rewards, staking, custody integration and compliance each own a narrow state model and publish versioned contracts.

## Control model

| Component or state  | Responsibility                                                |
| ------------------- | ------------------------------------------------------------- |
| Identity context    | Accounts, sessions, linked wallets and authentication state.  |
| Transaction context | Requests, chain observations, lifecycle and settlement state. |
| Ledger context      | Accounts, journals, postings, balances and reconciliation.    |
| Rewards context     | XP, task completion, tiers and reward liability.              |
| Staking context     | Products, terms, positions, yield and contract state.         |
| Service catalogue   | Owner, SLO, schema, authority and dependencies.               |

## Invariants

* No service writes directly into another context’s private tables.
* Every domain event has one producer authority and explicit consumers.
* Financial and reward liabilities use separate accounts and controls.
* Service ownership includes on-call, incident and data-steward responsibilities.
* Distributed design is justified by authority and scaling needs, not fashion.

## Failure containment

| Failure               | Effect                                | Control                 | Response    |
| --------------------- | ------------------------------------- | ----------------------- | ----------- |
| Shared-table coupling | One deployment breaks several domains | Owned schemas and APIs  | ISOLATE     |
| Dual authority        | Two services post the same state      | Single-writer rule      | REJECT      |
| Orphan service        | No team owns incident recovery        | Service catalogue/RACI  | ASSIGN      |
| Chatty decomposition  | Latency and failures multiply         | Coarse bounded contexts | CONSOLIDATE |

## Operational evidence

* Service catalogue with owners, repositories and environments.
* Context map and single-writer authority matrix.
* API/event contracts and compatibility policy.
* Dependency and critical-path latency graph.
* On-call and incident ownership by context.

## Boundary conditions

‘No monolith’ is not treated as a quality claim; service boundaries remain operationally defensible.
