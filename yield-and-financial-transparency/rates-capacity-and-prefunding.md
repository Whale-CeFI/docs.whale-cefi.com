---
title: Rates, Capacity, and Prefunding
canonical: >-
  https://docs.whale-cefi.com/yield-and-financial-transparency/rates-capacity-and-prefunding
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Rates are opened only within approved productive-yield, incentive, liquidity
  and risk capacity.
---

# Rates, Capacity, and Prefunding

A displayed rate becomes available for a new position only after the applicable product controls establish sufficient approved capacity and reward funding for the obligation being accepted.

The current asset-specific rate matrix is published in Rates and Reward Mathematics. Position confirmation remains authoritative for an accepted product version.

{% hint style="info" %}
**Evidence boundary:** this page defines how a growth-support allocation would enter rate capacity. It is not evidence that a current product has such an allocation. A live allocation requires a funded and versioned record.
{% endhint %}

## What supports a rate

Rate coverage can consist of:

1. recognized external income from approved staking, lending, liquidity, market-neutral or contractual strategy routes;
2. where applicable, a segregated and verified pre-funded growth-support allocation committed to the relevant product or cohort;
3. approved coverage capital within defined risk limits.

Customer principal is not reward coverage.

## Growth-support prefunding

A project or group entity may raise capital from shareholders or strategic investors for technology development, operations and growth. Under the control model, that financing remains corporate capital until a specific amount is formally approved and funded for a defined product incentive programme.

Only that verified committed allocation can enter the rate-capacity calculation. The system must not count:

* the headline size of a financing round;
* investor commitments not yet funded;
* future fundraising;
* projected token value;
* unallocated treasury balances;
* expected future customer deposits.

This prevents a marketing claim about corporate financing from being confused with actual reward coverage.

## Prefunding gate for Locked products

Before a fixed-rate position is accepted:

\[ EFC\_c \geq MRC\_c + OCB\_c ]

where:

* **EFC** is eligible forward coverage for cohort (c): realized-yield reserve, verified committed growth-support capital where applicable, approved coverage capital and legally enforceable receivables after haircut;
* **MRC** is the maximum remaining contractual reward commitment of the cohort;
* **OCB** is the operating, settlement, liquidity and stress-cost buffer.

Uncommitted forecasts and customer principal do not count as eligible reward coverage.

## TVL, incentive runway and rate normalization

Where a finite support pool is used, TVL matters because that pool supports a growing base of eligible positions. As TVL increases, the incentive contribution available per unit of new capital can decrease.

However, Whale CeFi does not use a simplistic public rule such as “TVL reaches X, rate becomes Y”. New-position rate decisions can be based on the combined state of:

* active TVL and cohort size;
* remaining verified incentive budget and runway;
* realized and stressed external yield;
* strategy and counterparty capacity;
* liquidity and maturity concentration;
* custody, network and execution limits;
* reserve and stress buffers;
* legal and regional constraints.

This is one economic reason an early launch cohort can receive a stronger rate than a later, larger cohort when a finite incentive allocation is actually present.

## Capacity is the smallest safe limit

\[ \text{Capacity} = \min( \text{Funding}, \text{Strategy}, \text{Liquidity}, \text{Counterparty}, \text{Custody}, \text{Network}, \text{Operations}, \text{Legal} ) ]

Each accepted position consumes the applicable capacity. Maturity, verified cancellation, realized strategy income or newly approved committed funding can release capacity. Concurrent requests cannot reserve the same coverage twice.

## Locked and Flexible treatment

An accepted Locked position retains its agreed product version for its term, subject to the applicable legal terms. Later rate normalization affects new offers rather than rewriting an existing contractual rate.

Flexible reward liability is measured continuously. A Flexible rate reduction can apply only prospectively after the configured notice and effective time. The platform cannot repair a funding gap by reversing already posted reward.

## Governance

* Rate proposal, any growth-budget allocation, treasury funding, risk approval and publication must remain separate authorities.
* A rate increase should not activate before funding, liquidity and stress reservations pass.
* Product capacity, accepted principal, reward liability, realized yield, any verified committed support capital and buffers must be reconciled under the applicable operating schedule.
* A coverage breach blocks new exposure and preserves existing user-visible states.
* Auto-Reinvest is treated as a new capacity-consuming instruction, not silent compounding.
