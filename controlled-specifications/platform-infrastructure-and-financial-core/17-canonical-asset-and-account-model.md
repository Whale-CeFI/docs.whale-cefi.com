---
title: Canonical Asset and Account Model
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/17-canonical-asset-and-account-model
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-17
---

# Canonical Asset and Account Model

**Canonical Asset and Account Model** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 17 is part of the 29 July 2026 official release. Its `FM-17-xx` controls and `EVD-17-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Every financial record depends on a canonical definition of entity, account, asset, network, quantity, precision and liability. The model prevents symbol ambiguity and separates user liability, platform asset, pending settlement, fee, yield and reward states.

### Normative design rules

* Store authoritative quantities in integer base units or exact decimal types.
* Symbols and display decimals never define asset identity.
* Separate available, pending, locked, accrued and disputed amounts.
* Every account belongs to one entity, currency and purpose.
* Cross-network representations of the same symbol remain distinct assets.

### Boundary / not claimed

The public token symbol is never treated as sufficient financial or technical identity. TEAM TRANSCRIPT + ACCOUNTING NORMALISATION

## Reference architecture

| Layer | Component            | Responsibility                                                    |
| ----- | -------------------- | ----------------------------------------------------------------- |
| L5    | Legal/product entity | Which entity owes or controls the balance.                        |
| L4    | Ledger account       | Asset, liability, income, expense, equity or memorandum class.    |
| L3    | Asset identity       | Network plus contract/mint plus decimals and behaviour.           |
| L2    | Quantity             | Integer base units with explicit rounding and display conversion. |
| L1    | Position             | Term, product, principal, accrued state and lifecycle.            |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component            | Responsibility / input                                            | Control invariant                                                            |
| -------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Legal/product entity | Which entity owes or controls the balance.                        | Store authoritative quantities in integer base units or exact decimal types. |
| Ledger account       | Asset, liability, income, expense, equity or memorandum class.    | Symbols and display decimals never define asset identity.                    |
| Asset identity       | Network plus contract/mint plus decimals and behaviour.           | Separate available, pending, locked, accrued and disputed amounts.           |
| Quantity             | Integer base units with explicit rounding and display conversion. | Every account belongs to one entity, currency and purpose.                   |
| Position             | Term, product, principal, accrued state and lifecycle.            | Cross-network representations of the same symbol remain distinct assets.     |
| Settlement reference | Chain transaction, custody transfer or internal movement.         | Store authoritative quantities in integer base units or exact decimal types. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode     | Failure effect                   | Primary control       | Required state |
| ---------- | ---------------- | -------------------------------- | --------------------- | -------------- |
| `FM-17-01` | Unit error       | Amount differs by decimal factor | Typed base units      | **BLOCK**      |
| `FM-17-02` | Asset conflation | Bridged and native token mixed   | Canonical identity    | **REJECT**     |
| `FM-17-03` | State conflation | Pending funds shown available    | Balance buckets       | **HOLD**       |
| `FM-17-04` | Entity ambiguity | Wrong company carries liability  | Entity-bound accounts | **ESCALATE**   |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                             |
| ----------- | ------------ | --------------------------------------------- |
| `EVD-17-01` | **ACCEPTED** | Canonical asset and network identifiers.      |
| `EVD-17-02` | **ACCEPTED** | Chart of accounts and entity ownership model. |
| `EVD-17-03` | **ACCEPTED** | Quantity, decimal and rounding specification. |
| `EVD-17-04` | **ACCEPTED** | Available/pending/locked/accrued state tests. |
| `EVD-17-05` | **ACCEPTED** | Cross-network and token-variant test vectors. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
