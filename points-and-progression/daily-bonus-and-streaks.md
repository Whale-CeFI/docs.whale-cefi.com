---
title: "Daily XP Claim and Balance Rewards"
description: "The daily flow separates the XP credited to progression from any deposit-based amount credited to the user's balance."
canonical: "https://whale-cefi.com/docs/points-and-progression/daily-bonus-and-streaks"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-08-10"
---

# Daily XP Claim and Balance Rewards

The daily flow contains two different ledger events: an XP claim and, for Levels 1-6 with an eligible deposit, a separate balance reward. They use different units and never share one ambiguous `Daily Bonus` label.

## Daily XP Claim

The base Daily XP Claim rises with level from 10 XP to 180 XP. The exact credited amount is the base amount multiplied by the current level's XP multiplier. Fractional XP remains in the internal ledger even when the interface shows a rounded whole number.

The complete live table is published in [Levels](levels.md).

## Daily balance reward: Levels 1-6

For Plankton, Minnow, Puffer, Dolphin, Orca, and Blue Whale, a valid daily claim can also credit a percentage of the eligible deposit amount to the user's balance.

| Level | Daily rate of eligible deposit |
|---|---:|
| Plankton | 0.005% |
| Minnow | 0.0075% |
| Puffer | 0.001% |
| Dolphin | 0.0125% |
| Orca | 0.015% |
| Blue Whale | 0.02% |

Puffer is exactly **0.001%**, not 0.01%.

The balance reward is not XP, principal, staking accrual, APR, APY, or a modification of the accepted position rate. It posts through a separate balance-reward record.

## Monthly company-revenue reward: Levels 7-10

From Shark onward, the live balance reward is monthly rather than a percentage of the user's deposit. Each eligible user receives 0.002% of company Net Monthly Revenue for the applicable completed month. It is an individual allocation and not a shared reward pool.

## Daily cycle

The canonical reset is 00:00 UTC, with the equivalent local time displayed to the user. A daily request is unique for the UTC day. The progression ledger records the current level, base XP, multiplier, exact credited XP, displayed XP, eligibility result, related balance-reward event, and configuration ID.

Missing a daily collection does not remove previously confirmed XP, balance rewards, chests, achievements, or level history. Any streak-specific consequence is stated by the active streak configuration.

## Corrections

Duplicate requests are idempotent. A correction posts a new reversing or adjusting entry; it does not edit the original XP or balance-reward event. Material configuration errors identify the affected period, correction rule, account impact, and review route.
