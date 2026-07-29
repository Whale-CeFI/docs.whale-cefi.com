---
title: "Product Yield, Reward Funding, and Accrual"
description: "The user-facing rate, the accrued reward liability and the economic source that funds it are separate controlled objects. Current plans use monthly reward rates with daily accrual; every amount must be…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/platform/21-product-yield-reward-funding-and-accrual"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-21"
---

# Product Yield, Reward Funding, and Accrual

**Product Yield, Reward Funding, and Accrual** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 21 is part of the 29 July 2026 official release. Its `FM-21-xx` controls and `EVD-21-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The user-facing rate, the accrued reward liability and the economic source that funds it are separate controlled objects. Current plans use monthly reward rates with daily accrual; every amount must be reproducible from a signed product version, attributable to an approved source category and reconciled without treating user principal as income.

### Normative design rules

- Monthly reward rate is never relabelled APR or APY; Locked positions retain the accepted rate version and Flexible changes are prospective and notice-controlled.
- Accrual, funding and payment remain distinct: every credit links to a source category, and customer principal or later subscriptions are never classified as reward income.
- Protocol/network income, strategy result and treasury, operational-reserve or marketing subsidy use separate accounts, evidence and disclosure.
- The calculation specification defines day count, timezone, partial days, compounding, precision, rounding, credit cadence, maturity and reversal treatment before release.
- XP, chests, referral points and other progression remain outside the financial reward ledger unless a separate legal entitlement is created.

### Boundary / not claimed

Earlier universal claims of protocol-derived-only reward and a fixed performance fee are not treated as current product facts. They require product-specific approval and evidence before use. OWNER FACTS 2026-07-21 + CURRENT PRODUCT TERMS

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Plan position | Asset, eligible principal, Flexible or Locked term and accepted rate version. |
| L4 | Accrual engine | Deterministic daily calculation from an explicitly monthly reward rate. |
| L3 | Source attribution | Network, protocol, strategy or separately approved subsidy bucket. |
| L2 | Funding control | Recognised source assets and budgets compared with user reward liability. |
| L1 | Financial ledger | Accrued, payable, settled, reversed and disputed reward states. |
| L0 | Statement + evidence | User-visible amount linked to formula, source class and settlement state. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Plan position | Asset, eligible principal, Flexible or Locked term and accepted rate version. | Monthly reward rate is never relabelled APR or APY; Locked positions retain the accepted rate version and Flexible changes are prospective and notice-controlled. |
| Accrual engine | Deterministic daily calculation from an explicitly monthly reward rate. | Accrual, funding and payment remain distinct: every credit links to a source category, and customer principal or later subscriptions are never classified as reward income. |
| Source attribution | Network, protocol, strategy or separately approved subsidy bucket. | Protocol/network income, strategy result and treasury, operational-reserve or marketing subsidy use separate accounts, evidence and disclosure. |
| Funding control | Recognised source assets and budgets compared with user reward liability. | The calculation specification defines day count, timezone, partial days, compounding, precision, rounding, credit cadence, maturity and reversal treatment before release. |
| Financial ledger | Accrued, payable, settled, reversed and disputed reward states. | XP, chests, referral points and other progression remain outside the financial reward ledger unless a separate legal entitlement is created. |
| Statement + evidence | User-visible amount linked to formula, source class and settlement state. | Monthly reward rate is never relabelled APR or APY; Locked positions retain the accepted rate version and Flexible changes are prospective and notice-controlled. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-21-01` | Funding shortfall | Accrued reward exceeds approved source coverage | Cohort coverage ratio and exposure cap | **STOP NEW EXPOSURE** |
| `FM-21-02` | Rate ambiguity | Systems or users calculate different amounts | Signed formula and golden cases | **BLOCK RELEASE** |
| `FM-21-03` | Source mislabelling | Subsidy appears as protocol-derived yield | Source-specific ledger and disclosure | **CORRECT + REVIEW** |
| `FM-21-04` | Retroactive change | Accepted entitlement changes silently | Immutable rate binding and compensating journal | **REJECT** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-21-01` | **ACCEPTED** | OWNER-CONFIRMED: Fifteen assets, USD 50 minimum, Flexible and 30/90/180/365-day Locked plans, monthly rates and daily accrual. |
| `EVD-21-02` | **ACCEPTED** | Exact day-count, timestamp, compounding, rounding, crediting and maturity specification for every product version. |
| `EVD-21-03` | **ACCEPTED** | Reward-source register and gross-to-user waterfall for each active asset, plan, cohort and rate version. |
| `EVD-21-04` | **ACCEPTED** | Daily user-liability coverage, subsidy budget/runway and proof that customer principal is excluded from reward-source calculations. |
| `EVD-21-05` | **ACCEPTED** | LEGAL-APPROVED: Product classification, rate language, Locked exit rights, Flexible 2.5% early-exit adjustment, source disclosure and regional availability. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
