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

A displayed rate becomes available for a new position only after the product proves that it has sufficient approved capacity and reward funding for the obligation it is about to accept.

The current asset-specific rate matrix is published in Rates and Reward Mathematics. Position confirmation remains authoritative for an accepted product version.

## What supports a rate

Rate coverage can consist of:

1. recognized external income from approved staking, lending, liquidity, market-neutral or contractual strategy routes;
2. a segregated, pre-funded growth-support allocation committed to the relevant product or cohort;
3. approved platform coverage capital within defined risk limits.

Customer principal is not reward coverage.

## Growth-support prefunding

A company may raise capital from shareholders or strategic investors for technology development, operations and growth. Whale CeFi treats that financing as company capital until a specific amount is formally approved for a defined product incentive programme.

Only that committed allocation can enter the rate-capacity calculation. The system does not count:

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

* **EFC** is eligible forward coverage for cohort (c): realized-yield reserve, committed growth-support capital, approved coverage capital and legally enforceable receivables after haircut;
* **MRC** is the maximum remaining contractual reward commitment of the cohort;
* **OCB** is the operating, settlement, liquidity and stress-cost buffer.

Uncommitted forecasts and customer principal do not count as eligible reward coverage.

## TVL, incentive runway and rate normalization

TVL matters because a finite support pool must cover a growing base of eligible positions. As TVL increases, the incentive contribution available per unit of new capital may decrease.

However, Whale CeFi does not use a simplistic rule such as “TVL reaches X, rate becomes Y”. New-position rate decisions are based on the combined state of:

* active TVL and cohort size;
* remaining committed incentive budget and runway;
* realized and stressed external yield;
* strategy and counterparty capacity;
* liquidity and maturity concentration;
* custody, network and execution limits;
* reserve and stress buffers;
* legal and regional constraints.

This is the economic reason an early launch cohort may receive a stronger rate than a later, larger cohort even when both use the same underlying asset.

## Capacity is the smallest safe limit

\[ \text{Capacity} = \min( \text{Funding}, \text{Strategy}, \text{Liquidity}, \text{Counterparty}, \text{Custody}, \text{Network}, \text{Operations}, \text{Legal} ) ]

Each accepted position consumes the applicable capacity. Maturity, verified cancellation, realized strategy income or newly approved committed funding can release capacity. Concurrent requests cannot reserve the same coverage twice.

## Locked and Flexible treatment

An accepted Locked position retains its agreed product version for its term, subject to the applicable legal terms. Later rate normalization affects new offers rather than rewriting an existing contractual rate.

Flexible reward liability is measured continuously. A Flexible rate reduction can apply only prospectively after the configured notice and effective time. The platform cannot repair a funding gap by reversing already posted reward.

## Governance

* Rate proposal, growth-budget allocation, treasury funding, risk approval and publication are separate authorities.
* A rate increase cannot activate before funding, liquidity and stress reservations pass.
* Product capacity, accepted principal, reward liability, realized yield, committed support capital and buffers are reconciled at least daily and at every material event.
* A coverage breach blocks new exposure and preserves existing user-visible states.
* Auto-Reinvest is treated as a new capacity-consuming instruction, not silent compounding.
