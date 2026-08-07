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

The user-facing rate, accrued reward liability and economic sources that fund it are separate controlled objects. Current product rates are versioned; customer principal is not reward income.

{% hint style="info" %}
**Evidence status:** this page defines the funding-control model. It does not by itself establish that a current product uses a growth-support allocation. A current growth-support claim requires a product-version or capacity record showing the funded allocation, responsible entity, cap, effective period, remaining runway and reconciliation evidence.
{% endhint %}

## Control model

| Component or state           | Responsibility                                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| Plan position                | Asset, eligible principal, Flexible or Locked term and accepted rate version                    |
| Accrual engine               | Deterministic calculation from the accepted product version                                     |
| Productive-yield attribution | Approved network, staking, lending, liquidity, spread or contractual source used by the product |
| Growth-support attribution   | Where applicable, a verified finite company-funded incentive allocation committed to the cohort |
| Funding control              | Recognized source assets and verified committed budgets compared with user reward liability     |
| Financial ledger             | Accrued, payable, settled, reversed and disputed reward states                                  |
| Statement + evidence         | User-visible amount linked to formula, source class and settlement state                        |

## Economic model

Whale CeFi distinguishes two possible contributors to a displayed reward rate.

**Productive external economics** can come from approved staking, validator activity, institutional or overcollateralized lending, DeFi lending, protocol liquidity, market-neutral spread strategies, contractual rebates or other specifically approved routes. A listed route is not assumed to be active unless the applicable source record authorizes it.

**Growth-support capital**, where used, is a finite allocation of corporate capital committed in advance to a defined product cohort. The corporate capital may ultimately originate from financing raised by an applicable project or group entity from shareholders or strategic investors, but financing does not become eligible reward funding until a specific amount is approved, funded, segregated and reserved.

A customer opening a staking or earning position is not thereby a shareholder or venture investor in a Whale CeFi project or group entity. Customer principal remains separate from corporate financing and cannot fund another customer's reward.

## Why elevated early rates can exist

A product rate can exceed the native staking yield of the underlying asset when the applicable product version combines productive external income with a verified finite growth-support allocation.

This must never be presented as if the blockchain or protocol generated the entire displayed percentage.

Where such support is used, it can serve a product-bootstrapping purpose such as measurable user acquisition, retention, TVL formation and ecosystem scale. As the eligible capital base grows, the incentive contribution available per unit of new TVL can decline.

TVL can therefore be a rate-governance input alongside remaining incentive runway, realized yield, liquidity, strategy capacity, counterparty exposure, reserve requirements, maturity profile and stress limits.

No automatic TVL-to-rate promise is made. Rate normalization applies to newly offered product versions. Accepted Locked positions retain their agreed rate version; Flexible changes are prospective and notice-controlled.

## Invariants

* Productive external yield and growth-support capital, when both are used, must use separate source accounts, evidence and disclosure.
* Corporate financing is not counted as reward coverage until a specific funded allocation is committed to a product or cohort.
* Customer principal, later subscriptions, future fundraising and projected token appreciation are not reward-income sources.
* Every active product version must define day count, precision, rounding, credit cadence, maturity and source policy.
* A product must stop accepting new exposure when funding, liquidity or risk capacity is insufficient.

## Failure containment

| Failure                     | Effect                                                             | Control                                | Response                          |
| --------------------------- | ------------------------------------------------------------------ | -------------------------------------- | --------------------------------- |
| Funding shortfall           | Reward liability exceeds approved source coverage                  | Cohort coverage ratio and exposure cap | **STOP NEW EXPOSURE**             |
| Incentive runway exhaustion | A verified support pool no longer sustains the offered rate        | Rate and capacity review               | **NORMALIZE / CLOSE NEW VERSION** |
| Source mislabelling         | Company-funded support appears as protocol yield                   | Source-specific ledger and disclosure  | **CORRECT + REVIEW**              |
| Corporate-funding overclaim | Headline or uncommitted investment is presented as reward coverage | Committed-allocation evidence gate     | **REJECT CLAIM**                  |
| Retroactive change          | Accepted entitlement changes silently                              | Immutable rate binding                 | **REJECT**                        |

## Evidence required

The current public rate matrix contains fifteen canonical assets with asset-specific Flexible and 30/90/180/365-day rates.

Before documentation claims that a current product or cohort is supported by growth capital, the evidence set should include:

* exact accrual and maturity specification for the applicable active product version;
* source records for the productive strategies actually used;
* the verified committed growth-support allocation, if any, including responsible entity, cap, effective period and remaining runway;
* reward-liability coverage and reconciliation records;
* evidence that customer principal is excluded from reward-source calculations.

Absence of a verified growth-support record means the documentation must not infer that a high displayed rate is currently subsidized by investor or corporate capital.
