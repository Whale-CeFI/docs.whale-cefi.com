---
title: Reward Funding, Yield, and Accrual
canonical: >-
  https://docs.whale-cefi.com/yield-and-financial-transparency/reward-funding-yield-and-accrual
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  The user-facing rate, accrued reward liability and economic sources that fund
  it are separate controlled objects.
---

# Reward Funding, Yield, and Accrual

The user-facing rate, accrued reward liability and economic sources that fund it are separate controlled objects. Current plans use monthly reward rates with daily accrual; every amount is reproducible from a signed product version and reconciled without treating customer principal as income.

## Control model

| Component or state           | Responsibility                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------- |
| Plan position                | Asset, eligible principal, Flexible or Locked term and accepted rate version       |
| Accrual engine               | Deterministic calculation from the accepted product version                        |
| Productive-yield attribution | Network, staking, lending, liquidity, spread or contractual strategy source        |
| Growth-support attribution   | Finite company-funded incentive allocation committed to the cohort                 |
| Funding control              | Recognized source assets and committed budgets compared with user reward liability |
| Financial ledger             | Accrued, payable, settled, reversed and disputed reward states                     |
| Statement + evidence         | User-visible amount linked to formula, source class and settlement state           |

## Economic model

Whale CeFi separates two possible contributors to a displayed reward rate.

**Productive external economics** can come from approved staking, validator activity, institutional or overcollateralized lending, DeFi lending, protocol liquidity, market-neutral spread strategies, contractual rebates or other specifically approved routes.

**Growth-support capital** is a finite allocation of company capital committed in advance to a defined early product cohort. That company capital may have originated from financing provided to Whale CeFi by shareholders or strategic investors, but it is not eligible reward funding until a specific amount is approved, funded, segregated and reserved.

A customer opening a staking or earning position is not thereby a shareholder or venture investor in Whale CeFi. Customer principal remains separate from company financing and cannot fund another customer's reward.

## Why elevated early rates can exist

An early cohort can receive a user-facing reward rate that is higher than the native staking yield of the underlying asset because the product can combine productive external income with a finite growth-support allocation.

This must never be presented as if the blockchain or protocol generated the entire displayed percentage.

The support is used to bootstrap measurable product adoption, including user acquisition, retention, TVL formation and ecosystem scale. As the eligible capital base grows, the incentive contribution available per unit of new TVL can decline.

TVL is therefore a major rate-governance input, alongside remaining incentive runway, realized yield, liquidity, strategy capacity, counterparty exposure, reserve requirements, maturity profile and stress limits.

No automatic TVL-to-rate promise is made. Rate normalization applies to newly offered product versions. Accepted Locked positions retain their agreed rate version; Flexible changes are prospective and notice-controlled.

## Invariants

* Productive external yield and growth-support capital use separate accounts, evidence and disclosure.
* Corporate financing is not counted as reward coverage until a funded allocation is specifically committed to a cohort.
* Customer principal, later subscriptions, future fundraising and projected token appreciation are not reward-income sources.
* Every active product version fixes day count, precision, rounding, credit cadence, maturity and source policy.
* A product stops accepting new exposure when funding, liquidity or risk capacity is insufficient.

## Failure containment

| Failure                     | Effect                                                             | Control                                | Response                          |
| --------------------------- | ------------------------------------------------------------------ | -------------------------------------- | --------------------------------- |
| Funding shortfall           | Reward liability exceeds approved source coverage                  | Cohort coverage ratio and exposure cap | **STOP NEW EXPOSURE**             |
| Incentive runway exhaustion | Support pool no longer sustains the offered rate                   | Rate and capacity review               | **NORMALIZE / CLOSE NEW VERSION** |
| Source mislabelling         | Company-funded support appears as protocol yield                   | Source-specific ledger and disclosure  | **CORRECT + REVIEW**              |
| Corporate-funding overclaim | Headline or uncommitted investment is presented as reward coverage | Committed-allocation evidence gate     | **REJECT CLAIM**                  |
| Retroactive change          | Accepted entitlement changes silently                              | Immutable rate binding                 | **REJECT**                        |

## Operational evidence

* The registry contains fifteen canonical assets with asset-specific Flexible and 30/90/180/365-day product rates.
* Exact day-count, timestamp, compounding, rounding, crediting and maturity specification exists for every active product version.
* Reward-source records identify productive economics and committed growth-support capital separately for each active asset, plan, cohort and rate version.
* Coverage records show reward liability, committed support budget, remaining runway and proof that customer principal is excluded from reward-source calculations.
