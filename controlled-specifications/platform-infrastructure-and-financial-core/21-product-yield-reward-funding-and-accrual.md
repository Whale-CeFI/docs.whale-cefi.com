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

The user-facing rate, accrued reward liability and economic source that funds it are separate controlled objects. A rate can be supported by recognized external strategy income and, where approved, by finite company capital already committed to an incentive cohort. Customer principal is never reward income.

### Economic-role separation

* **Customer:** opens a product position and retains the applicable contractual asset rights. Product use does not create equity ownership in Whale CeFi.
* **Corporate investor / shareholder:** finances the company under a separate corporate instrument. That financing is company capital, not customer principal.
* **Growth-support allocation:** a defined portion of company capital that has been formally approved, funded, segregated and reserved for an incentive cohort.
* **Productive-yield source:** an approved external route that generates economic income from network, protocol, lending, liquidity, spread or contractual activity.

### Normative design rules

* Monthly reward rate is never relabelled APR or APY.
* Locked positions retain the accepted rate version; Flexible changes are prospective and notice-controlled.
* Accrual, source funding and payment remain separate ledger states.
* Productive external yield and company-funded growth support use different source accounts and evidence.
* Corporate financing is not counted as reward coverage until a specific funded allocation is committed to a cohort.
* Customer principal, later subscriptions, future fundraising and projected token appreciation are excluded from reward-source calculations.
* Rate capacity must consider active TVL, remaining incentive runway, realized yield, liquidity, counterparty capacity, reserves, maturity concentration and stress limits.
* Growth in TVL can cause new-position rates to normalize because a finite support budget is spread across a larger capital base; no fixed public TVL-to-rate formula is implied.

## Reference architecture

| Layer | Component                    | Responsibility                                                              |
| ----- | ---------------------------- | --------------------------------------------------------------------------- |
| L6    | Plan position                | Asset, eligible principal, term and accepted rate version                   |
| L5    | Accrual engine               | Deterministic calculation from the signed product version                   |
| L4    | Productive-yield attribution | Network, staking, lending, liquidity, spread or contractual strategy income |
| L3    | Growth-support attribution   | Committed company-funded incentive allocation and remaining runway          |
| L2    | Funding and capacity control | Coverage versus reward liability, TVL, liquidity and stress limits          |
| L1    | Financial ledger             | Accrued, payable, settled, reversed and disputed reward states              |
| L0    | Statement + evidence         | User-visible amount linked to formula, source class and settlement state    |

## Capacity rule

A new fixed-rate obligation is accepted only when eligible forward coverage exceeds the remaining reward commitment plus operating, liquidity and stress buffers.

Eligible coverage can include realized-yield reserves, committed growth-support capital, approved coverage capital and enforceable receivables after policy haircuts.

Headline financing amounts, unallocated treasury cash and future investment commitments do not qualify by themselves.

## Failure-mode analysis

| Failure mode                | Failure effect                                                              | Primary control                                 | Required state                    |
| --------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------- |
| Funding shortfall           | Reward liability exceeds approved source coverage                           | Cohort coverage ratio and exposure cap          | **STOP NEW EXPOSURE**             |
| Incentive runway exhaustion | Finite growth-support budget no longer supports the offered rate            | Rate and capacity review                        | **NORMALIZE / CLOSE NEW VERSION** |
| Source mislabelling         | Company-funded support appears as protocol yield                            | Source-specific ledger and disclosure           | **CORRECT + REVIEW**              |
| Corporate-funding overclaim | Uncommitted or headline investment is presented as available reward capital | Committed-allocation evidence gate              | **REJECT CLAIM**                  |
| Retroactive change          | Accepted entitlement changes silently                                       | Immutable rate binding and compensating journal | **REJECT**                        |

## Release evidence

A production release should preserve evidence for:

* current asset-specific rate matrix and product versions;
* exact accrual and maturity formulas;
* source register for productive strategies;
* committed growth-support allocation by cohort, including cap and runway;
* daily reward-liability coverage and proof that customer principal is excluded;
* rate-normalization decision history for new product versions;
* legal approval of customer, corporate-investor and reward-source terminology.
