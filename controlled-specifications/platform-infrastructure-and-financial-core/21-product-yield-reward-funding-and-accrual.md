---
title: Product Yield, Reward Funding, and Accrual
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/21-product-yield-reward-funding-and-accrual
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-21
description: >-
  Controlled specification for Base Product Reward, investor-funded Growth
  Uplift, rate versioning, accrual and capacity.
---

# Product Yield, Reward Funding, and Accrual

**Product Yield, Reward Funding, and Accrual** defines the controlled engineering contract for Whale CeFi product economics: rate versioning, source attribution, Marketing Incentive Pool releases, deterministic accrual, capacity and financial evidence.

### Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The user-facing monthly reward rate, accrued reward liability and sources that fund it are separate controlled objects.

**R\_user,v = R\_base,v + R\_growth,v**

The Base Product Reward is supported by recognized net economics from approved productive routes. The temporary Growth Uplift is released from a finite Marketing Incentive Pool funded from the strategic growth and marketing budget provided by project investors.

Customer principal is never reward income.

{% hint style="warning" %}
**Source evidence remains versioned.** The commercial model is active, while the exact allocation, cap, effective period, release schedule and remaining runway for each cohort must be established by its product and funding records.
{% endhint %}

#### Economic-role separation

* **Customer:** opens a product position and retains the applicable contractual asset rights.
* **Project investor or shareholder:** finances the applicable company or group entity under a separate corporate instrument.
* **Strategic Growth Budget:** investor-funded capital approved for technology, operations, marketing and ecosystem growth.
* **Marketing Incentive Pool:** the funded, segregated and assigned portion of that budget available for eligible product cohorts.
* **Growth Uplift:** the temporary rate component released from the Marketing Incentive Pool.
* **Productive-economics source:** an approved external route that generates recognized economic income.

#### Normative design rules

* The native product unit is monthly reward rate and is never silently relabelled APR or APY.
* Locked positions retain the accepted rate version; Flexible changes are prospective and notice-controlled.
* Accrual, source recognition, incentive release and payment remain separate ledger states.
* Productive external economics and Growth Uplift use separate source accounts and evidence.
* Project-investor financing enters reward coverage only through a funded Marketing Incentive Pool allocation assigned to a product or cohort.
* Customer principal, later subscriptions, future fundraising and projected token appreciation are excluded from reward-source calculations.
* Rate capacity considers eligible TVL, remaining incentive runway, realized economics, liquidity, counterparty capacity, reserves, maturity concentration and stress limits.
* Growth in eligible TVL can reduce the Growth Uplift available per unit of new capital; no fixed public TVL-to-rate formula is implied.
* XP, chests, referrals and progression remain outside the financial reward ledger unless a separate entitlement is created.

### Reference architecture

| Layer | Component                        | Responsibility                                                                 |
| ----- | -------------------------------- | ------------------------------------------------------------------------------ |
| L7    | Product position                 | Asset, eligible principal, term and accepted rate version                      |
| L6    | Accrual engine                   | Deterministic calculation from the accepted product version                    |
| L5    | Productive-economics attribution | Approved network, staking, lending, liquidity, spread or contractual economics |
| L4    | Marketing Incentive Pool         | Funded allocation, cohort binding, release schedule and runway                 |
| L3    | Growth Uplift attribution        | Released incentive amount mapped to reward liability                           |
| L2    | Funding and capacity control     | Coverage versus liability, eligible TVL, liquidity and stress limits           |
| L1    | Financial ledger                 | Accrued, payable, settled, reversed and disputed reward states                 |
| L0    | Statement and evidence           | User-visible amount linked to formula, source class and settlement state       |

### Capacity rule

A new fixed-rate obligation is accepted only when eligible forward coverage exceeds the maximum remaining reward commitment plus operating, liquidity and stress buffers.

Eligible forward coverage can include realized-economics reserves, the funded Marketing Incentive Pool allocation, approved coverage capital and enforceable receivables after policy haircuts.

Headline financing amounts, unallocated treasury cash, future investment commitments and customer principal do not qualify.

### Rate-governance input

For planning purposes:

**Indicative Growth Uplift capacity ≈ allocatable incentive budget ÷ projected eligible TVL over the covered period**

The production decision additionally applies realized-economics, liquidity, reserve, counterparty, maturity, custody, network, legal and operational constraints.

A rate change produces a new product version. It does not mutate an accepted Locked position.

### Failure-mode analysis

| Failure mode         | Failure effect                                                           | Primary control                                 | Required state                    |
| -------------------- | ------------------------------------------------------------------------ | ----------------------------------------------- | --------------------------------- |
| Funding shortfall    | Liability exceeds approved coverage                                      | Cohort coverage ratio and exposure cap          | **STOP NEW EXPOSURE**             |
| Incentive exhaustion | Pool no longer supports the offered uplift                               | Rate and capacity review                        | **NORMALIZE / CLOSE NEW VERSION** |
| Source mislabelling  | Growth Uplift appears as protocol yield                                  | Source-specific ledger and disclosure           | **CORRECT + REVIEW**              |
| Budget overclaim     | Unfunded or headline investment is presented as available reward capital | Funded-allocation evidence gate                 | **REJECT CLAIM**                  |
| Retroactive change   | Accepted entitlement changes silently                                    | Immutable rate binding and compensating journal | **REJECT**                        |

### Release evidence

A production release preserves:

* current asset-specific rate matrix and product versions;
* exact accrual, rounding and maturity formulas;
* source register for productive routes actually used;
* Marketing Incentive Pool allocation by cohort, including cap, effective period and runway;
* reward-liability coverage and proof that customer principal is excluded;
* rate-normalization decision history;
* reconciliation between source recognition, incentive release, accrual and payment.
