---
title: "Liquidity, Shortfall, and Resolution"
description: "Solvency and liquidity answer different questions. Solvency asks whether recognized assets cover liabilities. Liquidity asks whether the right asset can be delivered at the required time without unacceptable loss."
canonical: "https://docs.whale-cefi.com/yield-and-financial-transparency/liquidity-shortfall-and-resolution"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Liquidity, Shortfall, and Resolution

![Coverage limits close exposure before obligations outrun funding](../assets/visuals/diagrams/coverage-limits.svg)

Solvency and liquidity answer different questions. Solvency asks whether recognized assets cover liabilities. Liquidity asks whether the right asset can be delivered at the required time without unacceptable loss.

## Required metrics

$$ReserveCoverage_a=\frac{HaircutRecognizedReserves_a}{CustomerLiabilities_a}$$

$$LiquidCoverage_{a,h}=\frac{ImmediatelyAvailableAssets_{a,h}}{ProjectedNetOutflows_{a,h}}$$

$$ForwardRewardCoverage_c=\frac{EligibleForwardFunding_c}{RemainingRewardCommitment_c+CostBuffer_c}$$

Metrics are computed per canonical asset and cohort before any consolidated view. An excess of one token cannot conceal a deficit in another.

## Shortfall control sequence

1. Stop new positions, increases, and auto-renewals for the affected cohort.
2. Reprice variable products prospectively under their notice rules.
3. Suspend platform revenue release and restore the required buffer from realized income.
4. Release the cohort's pre-funded incentive escrow.
5. Release approved coverage capital under independent quorum.
6. Unwind liquid strategy positions under the loss-minimizing exit plan.
7. Invoke counterparty claims, collateral, or insurance only to the extent legally available. Pending recoveries are not treated as cash.
8. Enter resolution state if contractual liabilities remain uncovered, preserving records, user ranking, legal rights, and communication cadence.

## Loss order

Unless the signed product terms state otherwise, losses are absorbed in this order:

1. source-specific unrealized profit and retained yield reserve;
2. product incentive escrow;
3. platform coverage capital;
4. contractually subordinated platform revenue or fees;
5. strategy principal only where that risk was explicitly part of the product;
6. formal resolution under the applicable legal and product framework.

New customer principal is never inserted into this order.

## Stress programme

Each product is tested against depeg, a 50–100% source-yield collapse, simultaneous withdrawals, chain halt, delayed unstaking, validator slashing, protocol exploit, custodian outage, oracle divergence, gas spikes, and loss of the largest counterparty.

The result sets capacity, liquidity buffers, and exit controls. It is not reduced to a marketing risk score.
