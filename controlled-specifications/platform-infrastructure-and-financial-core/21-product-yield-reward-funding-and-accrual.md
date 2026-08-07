---
title: Product Yield, Reward Funding, and Accrual
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/21-product-yield-reward-funding-and-accrual
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-21
description: >-
  Controlled specification for product reward rates, productive yield,
  growth-support capital, accrual and funding capacity.
---

# Product Yield, Reward Funding, and Accrual

**Product Yield, Reward Funding, and Accrual** defines the controlled engineering contract for Whale CeFi product economics: rate versioning, source attribution, growth-support capital, deterministic accrual, capacity and financial evidence.

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The user-facing rate, accrued reward liability and economic source that funds it are separate controlled objects. A rate can be supported by recognized external strategy income and, where a verified allocation exists, by finite corporate capital committed to an incentive cohort. Customer principal is never reward income.

{% hint style="warning" %}
**Specification is not proof of a live allocation.** This chapter defines how growth-support capital must be controlled if it is used. A current claim that a product or cohort is funded by corporate or investor-originated capital requires a separate evidence record identifying the responsible legal entity, funded amount or cap, effective period, remaining runway and reconciliation state.
{% endhint %}

### Economic-role separation

* **Customer:** opens a product position and retains the applicable contractual asset rights. Product use does not create equity ownership in a Whale CeFi project or group entity.
* **Corporate investor / shareholder:** finances an applicable company or group entity under a separate corporate instrument. That financing is corporate capital, not customer principal.
* **Growth-support allocation:** where used, a defined portion of corporate capital that has been formally approved, funded, segregated and reserved for an incentive cohort.
* **Productive-yield source:** an approved external route that generates economic income from network, protocol, lending, liquidity, spread or contractual activity.

### Normative design rules

* Monthly reward rate is never relabelled APR or APY.
* Locked positions retain the accepted rate version; Flexible changes are prospective and notice-controlled.
* Accrual, source funding and payment remain separate ledger states.
* Productive external yield and company-funded growth support, when both are used, require different source accounts and evidence.
* Corporate financing is not counted as reward coverage until a specific funded allocation is committed to a product or cohort.
* Customer principal, later subscriptions, future fundraising and projected token appreciation are excluded from reward-source calculations.
* Rate capacity must consider applicable TVL, remaining verified incentive runway, realized yield, liquidity, counterparty capacity, reserves, maturity concentration and stress limits.
* When a finite support budget is used, growth in TVL can contribute to new-position rate normalization because the support budget is spread across a larger eligible capital base; no fixed public TVL-to-rate formula is implied.

## Reference architecture

| Layer | Component                    | Responsibility                                                                       |
| ----- | ---------------------------- | ------------------------------------------------------------------------------------ |
| L6    | Plan position                | Asset, eligible principal, term and accepted rate version                            |
| L5    | Accrual engine               | Deterministic calculation from the signed product version                            |
| L4    | Productive-yield attribution | Approved network, staking, lending, liquidity, spread or contractual strategy income |
| L3    | Growth-support attribution   | Where applicable, verified committed incentive allocation and remaining runway       |
| L2    | Funding and capacity control | Coverage versus reward liability, TVL, liquidity and stress limits                   |
| L1    | Financial ledger             | Accrued, payable, settled, reversed and disputed reward states                       |
| L0    | Statement + evidence         | User-visible amount linked to formula, source class and settlement state             |

## Capacity rule

A new fixed-rate obligation is accepted only when eligible forward coverage exceeds the remaining reward commitment plus operating, liquidity and stress buffers.

Eligible coverage can include realized-yield reserves, verified committed growth-support capital where applicable, approved coverage capital and enforceable receivables after policy haircuts.

Headline financing amounts, unallocated treasury cash and future investment commitments do not qualify by themselves.

## Failure-mode analysis

| Failure mode                | Failure effect                                                              | Primary control                                 | Required state                    |
| --------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------- |
| Funding shortfall           | Reward liability exceeds approved source coverage                           | Cohort coverage ratio and exposure cap          | **STOP NEW EXPOSURE**             |
| Incentive runway exhaustion | A verified finite support budget no longer supports the offered rate        | Rate and capacity review                        | **NORMALIZE / CLOSE NEW VERSION** |
| Source mislabelling         | Company-funded support appears as protocol yield                            | Source-specific ledger and disclosure           | **CORRECT + REVIEW**              |
| Corporate-funding overclaim | Uncommitted or headline investment is presented as available reward capital | Committed-allocation evidence gate              | **REJECT CLAIM**                  |
| Retroactive change          | Accepted entitlement changes silently                                       | Immutable rate binding and compensating journal | **REJECT**                        |

## Release evidence

A production release that uses the relevant mechanism should preserve evidence for:

* current asset-specific rate matrix and product versions;
* exact accrual and maturity formulas;
* source register for productive strategies actually used;
* verified committed growth-support allocation by cohort, if any, including responsible entity, cap and runway;
* reward-liability coverage and proof that customer principal is excluded;
* rate-normalization decision history for new product versions where applicable;
* legal approval of customer, corporate-investor and reward-source terminology.
