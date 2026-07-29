---
title: "Current Rate Card"
description: "This page explains the customer-visible rates for the current USDT and USDC campaign configuration. Rates are expressed as a reward rate per month, not APR and not APY."
canonical: "https://docs.whale-cefi.com/earning-with-whale-cefi/current-rate-card"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Current Rate Card

This page explains the customer-visible rates for the current USDT and USDC campaign configuration. Rates are expressed as a **reward rate per month**, not APR and not APY.

## USDT and USDC

| Plan | Displayed monthly reward rate | Exact fixed-term reward rate | Exit model |
|---|---:|---:|---|
| Flexible | 6.0% per 30-day reward period | Variable by actual holding time | Available at any time; 2.5% principal adjustment before 14 complete days |
| Locked 30 days | 9.2% | 9.2% of accepted principal | No early exit |
| Locked 90 days | 12.3% | 36.9% of accepted principal | No early exit |
| Locked 180 days | 14.7% | 88.2% of accepted principal | No early exit |
| Locked 365 days | 16.8% | 201.6% of accepted principal | No early exit |

The exact fixed-term reward is shown before confirmation in both percentage and payout-asset units. A locked position retains the accepted product version for its entire term.

{% hint style="warning" %}
These percentages are monthly reward rates. They must not be described as annual percentage rate, annual percentage yield, or a bank-deposit rate.
{% endhint %}

## Example with 1,000 USDT

| Plan | Principal | Reward at maturity | Principal + reward |
|---|---:|---:|---:|
| 30 days | 1,000 USDT | 92 USDT | 1,092 USDT |
| 90 days | 1,000 USDT | 369 USDT | 1,369 USDT |
| 180 days | 1,000 USDT | 882 USDT | 1,882 USDT |
| 365 days | 1,000 USDT | 2,016 USDT | 3,016 USDT |

The example assumes no auto-reinvestment, no principal change, and settlement in the same asset. It is arithmetic under the stated plan version, not a statement that a user should select the plan.

## Flexible calculation

Flexible reward accrues in integer base units using:

`reward = eligible principal × 0.06 × eligible seconds / seconds in 30 days`

The rate can change only for accrual beginning at the effective time in a signed rate record. Already posted reward is not recalculated. If a Flexible position is closed before 14 complete UTC days, the 2.5% early-exit adjustment is applied to principal and shown before confirmation.

## Locked calculation

Locked plans use an immutable `term_reward_rate`. Daily display accrual is an informational linear allocation of the exact maturity reward. Rounding remainders are assigned at maturity so the ledger result equals the accepted term amount.

## Minimums, fees, and capacity

- Minimum deposit: the equivalent of **USD 50** unless a stricter asset-route record applies.
- Whale CeFi platform deposit fee: **0**.
- Whale CeFi platform withdrawal fee: **0**.
- Network, validator, issuer, or third-party charges remain separate and are shown before confirmation when knowable.
- A plan stops accepting new exposure when its approved funding or capacity limit is reached.

## Rate history

The prior USDT and USDC monthly rates were 5.5% Flexible, 7.1% for 30 days, 9.3% for 90 days, 11.8% for 180 days, and 13.6% for 365 days. Rate history does not change an already accepted locked product version.
