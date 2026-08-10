---
title: Rates, Capacity, and Prefunding
canonical: >-
  https://docs.whale-cefi.com/yield-and-financial-transparency/rates-capacity-and-prefunding
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  How Whale CeFi opens rates within productive-economics, Marketing Incentive
  Pool, liquidity and risk capacity.
---

# Rates, Capacity, and Prefunding

A displayed rate becomes available for a new position only after the applicable product controls establish sufficient funding, liquidity and risk capacity for the obligation being accepted.

The current asset-specific matrix is published in Current Rate Card. Position confirmation remains authoritative for the product version accepted by the user.

{% hint style="info" %}
**Current model:** the early-growth programme can combine a Base Product Reward with a Growth Uplift released from an investor-funded Marketing Incentive Pool. The exact allocation, cap and runway are versioned funding facts.
{% endhint %}

### What supports a rate

Rate capacity can consist of:

1. recognized net economics from approved staking, lending, liquidity, market-neutral or contractual routes;
2. a segregated Marketing Incentive Pool allocation committed to the relevant product or cohort;
3. approved coverage capital within defined risk limits.

Customer principal is not reward coverage.

### Marketing Incentive Pool prefunding

Project investors finance a strategic budget for technology, operations and growth. Under Whale CeFi’s early-growth model, a defined part of that budget can be assigned to product acquisition through a Marketing Incentive Pool.

Before it can support a rate, the allocation must be:

* approved by the applicable authorities;
* actually funded;
* segregated from customer principal and general treasury cash;
* assigned to named assets, product versions or cohorts;
* capped and time-bounded;
* capacity-reserved against the obligations it can create.

The rate-capacity calculation does not count headline investment-round size, unfunded commitments, future fundraising, projected token value, unallocated treasury balances or expected future deposits.

### Prefunding gate for Locked products

Before a fixed-rate position is accepted:

**EFC\_c ≥ MRC\_c + OCB\_c**

where:

* **EFC** is eligible forward coverage for cohort c: realized-economics reserves, the verified Marketing Incentive Pool allocation, approved coverage capital and enforceable receivables after policy haircuts;
* **MRC** is the maximum remaining contractual reward commitment for the cohort;
* **OCB** is the operating, settlement, liquidity and stress-cost buffer.

Uncommitted forecasts and customer principal do not count as eligible forward coverage.

### Eligible TVL and Growth Uplift capacity

The Growth Uplift is finite. A planning approximation is:

**Growth Uplift capacity per unit ≈ allocatable incentive budget for the period ÷ projected eligible TVL for the period**

Eligible TVL is the covered principal to which a specific programme applies. Raw registration count is not the denominator.

As eligible TVL grows, the support available per unit of new capital can decrease unless additional approved budget or stronger realized external economics offsets the expansion.

### Rate normalization

Whale CeFi does not use a simplistic promise such as “TVL reaches X, rate becomes Y”. New-position decisions use the combined state of:

* active and projected eligible TVL;
* remaining Marketing Incentive Pool and runway;
* realized and stressed external economics;
* strategy and counterparty capacity;
* liquidity and maturity concentration;
* custody, network and execution limits;
* reserve and stress buffers;
* operating costs and regional constraints.

An early cohort can therefore receive a stronger rate than a later, larger cohort. The change is applied through a new product version rather than through dilution of an existing Locked position.

### Capacity is the smallest safe limit

**Capacity = minimum of Funding, Strategy, Liquidity, Counterparty, Custody, Network, Operations and Legal capacity**

Each accepted position consumes the applicable capacity. Maturity, verified cancellation, realized economics or newly approved funded allocation can release capacity. Concurrent requests cannot reserve the same coverage twice.

### Locked and Flexible treatment

An accepted Locked position retains its asset, term, monthly rate and calculation version until maturity under the accepted product rules. Later normalization applies to new offers.

Flexible reward liability is measured continuously. A Flexible rate reduction applies only prospectively after the configured notice and effective time. Already posted reward is not reversed to repair a later funding gap.

### Governance

* Rate proposal, Marketing Incentive Pool allocation, treasury funding, risk approval and publication remain separate authorities.
* A rate increase cannot activate before funding, liquidity and stress reservations pass.
* Product capacity, accepted principal, reward liability, realized economics, Growth Uplift releases and buffers are reconciled separately.
* A coverage breach blocks new exposure while preserving existing user-visible states.
* Auto-Reinvest is a new capacity-consuming instruction, not silent compounding.
