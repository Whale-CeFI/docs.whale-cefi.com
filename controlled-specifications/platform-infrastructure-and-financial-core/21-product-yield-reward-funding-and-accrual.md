---
title: "Product Yield, Reward Funding, and Accrual"
canonical: "https://docs.whale-cefi.com/controlled-specifications/platform/21-product-yield-reward-funding-and-accrual"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-08-10"
control_id: "PLATFORM-21"
description: "Controlled specification for Base Product Reward, investor-funded Growth Uplift, rate versioning, accrual, capacity, and level-linked balance rewards."
---

# Product Yield, Reward Funding, and Accrual

**Product Yield, Reward Funding, and Accrual** defines the controlled engineering contract for Whale CeFi product economics: rate versioning, source attribution, Marketing Incentive Pool releases, deterministic accrual, capacity and financial evidence.

## Core specification

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
* Level XP multipliers never alter a staking rate or financial reward percentage.
* Level-linked balance rewards post separately from XP, principal and position reward accrual.
* The Level 7-10 company Net Revenue reward creates a per-user monthly liability equal to the closed monthly revenue base multiplied by 0.00002.

## Reference architecture

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

## Control contract

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Product position | Accepted product version and principal | Locked economics remain immutable for the position. |
| Accrual engine | Rate, eligible time, rounding and position state | Calculations use fixed-point values and the accepted product version. |
| Productive economics | Realized approved source income | Customer principal and projections never become income. |
| Marketing Incentive Pool | Funded allocation and cohort release | A Growth Uplift cannot exceed its assigned funded capacity. |
| Level-linked balance reward | Level, eligibility, calculation base and cadence | XP multiplier, balance reward and staking reward remain separate units. |
| Financial ledger | Liability, funding, settlement and correction | Every correction uses a new journal entry. |

**Interface invariant:** A rate, XP multiplier, deposit-based percentage, or company-revenue percentage retains its own unit, source, version, and ledger destination.

## Failure-mode analysis

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-21-01` | Funding or incentive shortfall | Liability exceeds approved coverage | Coverage ratio, runway and exposure cap | **STOP NEW EXPOSURE** |
| `FM-21-02` | Source mislabelling | Growth Uplift or balance reward appears as protocol yield | Source-specific ledger and disclosure | **CORRECT + REVIEW** |
| `FM-21-03` | Budget overclaim | Unfunded financing is presented as available reward capital | Funded-allocation evidence gate | **REJECT CLAIM** |
| `FM-21-04` | Retroactive or cross-unit change | Position economics or XP silently alter another ledger | Immutable version binding and unit validation | **REJECT** |

## Release evidence

| ID | State | Required evidence |
|---|---|---|
| `EVD-21-01` | **ACCEPTED** | Current asset-specific rate matrix, immutable product versions, and exact accrual formulas. |
| `EVD-21-02` | **ACCEPTED** | Productive-source register and Marketing Incentive Pool allocation by cohort, cap, period and runway. |
| `EVD-21-03` | **ACCEPTED** | Reward-liability coverage and proof that customer principal is excluded. |
| `EVD-21-04` | **ACCEPTED** | Live gamification configuration with XP and balance-reward unit separation. |
| `EVD-21-05` | **ACCEPTED** | Reconciliation between source recognition, incentive release, accrual, balance reward, payment and correction. |
