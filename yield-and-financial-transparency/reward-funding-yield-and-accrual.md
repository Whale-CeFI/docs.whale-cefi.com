---
title: Reward Funding, Yield, and Accrual
canonical: >-
  https://whale-cefi.com/docs/yield-and-financial-transparency/reward-funding-yield-and-accrual
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  The controlled relationship between product rates, accrual, productive
  external economics and the investor-funded Growth Uplift.
---

# Reward Funding, Yield, and Accrual

The user-facing rate, accrued reward liability and economic sources that fund it are separate controlled objects. Current product rates are versioned; customer principal is not reward income.

{% hint style="info" %}
**Current early-growth structure:** Whale CeFi combines productive external economics with a temporary Growth Uplift released from an investor-funded Marketing Incentive Pool. The amount, cap, period and remaining runway are controlled at product and cohort level.
{% endhint %}

### Control model

| Component or state               | Responsibility                                                               |
| -------------------------------- | ---------------------------------------------------------------------------- |
| Product position                 | Asset, eligible principal, Flexible or Locked term and accepted rate version |
| Accrual engine                   | Deterministic calculation from the accepted product version                  |
| Productive-economics attribution | Approved network, staking, lending, liquidity, spread or contractual source  |
| Growth Uplift attribution        | Release from the Marketing Incentive Pool for the named product or cohort    |
| Funding control                  | Recognized source assets and funded budgets compared with reward liability   |
| Financial ledger                 | Accrued, payable, settled, reversed and disputed reward states               |
| Statement and evidence           | User-visible amount linked to formula, source class and settlement state     |

### Economic model

Whale CeFi distinguishes two contributors to a displayed monthly reward rate:

**R\_user,v = R\_base,v + R\_growth,v**

The **Base Product Reward** is supported by recognized net economics from approved staking, validation, lending, protocol-liquidity, market-neutral spread, contractual or other specifically authorized routes.

The **Growth Uplift** is released from the Marketing Incentive Pool. That pool is a finite allocation from the strategic growth and marketing budget funded by project investors. It becomes eligible reward funding only after a specific amount is approved, funded, segregated, assigned and capacity-reserved.

A customer opening an earning or staking position is not thereby a shareholder or venture investor. Customer principal remains separate from project-investor capital and cannot fund another customer’s reward.

### Commercial purpose

The Marketing Incentive Pool converts part of the conventional acquisition budget into value delivered through the product.

Instead of paying only for impressions, registrations or short-term bonuses, Whale CeFi uses a defined part of the budget to improve the economics of verified early participation. The intended outcomes are active-user acquisition, early TVL and liquidity formation, retention, ecosystem scale and a stronger user base before the wider token campaign.

The Growth Uplift is therefore a marketing-funded product incentive. It is not protocol yield and is not intended to remain constant for every future cohort.

### Why elevated early rates can exist

When eligible TVL is smaller, a finite incentive pool can contribute more per unit of covered capital. As eligible TVL expands, the available Growth Uplift for new positions can decline.

Rate governance considers eligible TVL together with remaining incentive runway, realized economics, liquidity, strategy capacity, counterparty exposure, reserves, maturity profile, operating cost and stress limits.

There is no automatic TVL-to-rate promise. Normalization affects newly offered product versions.

### Position protection

* Locked positions retain the rate version accepted at opening until maturity.
* Flexible changes are prospective and notice-controlled.
* Accrual, funding release and payment remain distinct ledger states.
* A later change to the public rate card does not rewrite historical product versions.

### Invariants

* Productive external economics and Growth Uplift use separate source accounts, evidence and disclosure.
* Project-investor capital does not count as reward coverage until a specific Marketing Incentive Pool allocation is funded and assigned.
* Customer principal, later subscriptions, future fundraising and projected token appreciation are not reward-income sources.
* Every active product version defines unit, day count, precision, rounding, credit cadence, maturity and source policy.
* A product stops accepting new exposure when funding, liquidity or risk capacity is insufficient.
* XP, chests, referral points and other progression remain outside the financial reward ledger unless a separate product entitlement is created.

### Failure containment

| Failure              | Effect                                                          | Control                                | Response                          |
| -------------------- | --------------------------------------------------------------- | -------------------------------------- | --------------------------------- |
| Funding shortfall    | Reward liability exceeds approved coverage                      | Cohort coverage ratio and exposure cap | **STOP NEW EXPOSURE**             |
| Incentive exhaustion | The pool no longer supports the offered Growth Uplift           | Rate and capacity review               | **NORMALIZE / CLOSE NEW VERSION** |
| Source mislabelling  | Growth Uplift appears as protocol yield                         | Source-specific ledger and disclosure  | **CORRECT + REVIEW**              |
| Budget overclaim     | Headline or unfunded investment is presented as reward coverage | Funded-allocation evidence gate        | **REJECT CLAIM**                  |
| Retroactive change   | Accepted entitlement changes silently                           | Immutable rate binding                 | **REJECT**                        |

### Evidence required

The evidence set for an active product includes:

* the rate and accrual specification for the applicable product version;
* source records for the productive routes actually used;
* the funded Marketing Incentive Pool allocation, cap, effective period and remaining runway;
* reward-liability coverage and reconciliation records;
* proof that customer principal is excluded from reward-source calculations;
* the decision record for any prospective rate normalization.
