---
title: "Levels"
description: "The live level registry binds each cumulative XP threshold to an XP-only multiplier, a Daily XP Claim, and a separately calculated balance reward."
canonical: "https://docs.whale-cefi.com/points-and-progression/levels"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-08-10"
---

# Levels

The live level registry binds each cumulative XP threshold to an XP-only multiplier, a Daily XP Claim, and a separately calculated balance reward. A level does not change the Monthly Reward Rate of a staking position.

## Live level registry

| Level | Name | Cumulative XP | XP multiplier | Base Daily XP | Exact XP credited | XP displayed | Balance reward |
|---:|---|---:|---:|---:|---:|---:|---|
| 1 | Plankton | 0 | 1.00x | 10 | 10.00 | 10 | Daily: 0.005% of eligible deposit |
| 2 | Minnow | 2,100 | 1.03x | 15 | 15.45 | 15 | Daily: 0.0075% of eligible deposit |
| 3 | Puffer | 5,900 | 1.06x | 20 | 21.20 | 21 | Daily: 0.001% of eligible deposit |
| 4 | Dolphin | 11,600 | 1.10x | 30 | 33.00 | 33 | Daily: 0.0125% of eligible deposit |
| 5 | Orca | 19,200 | 1.15x | 40 | 46.00 | 46 | Daily: 0.015% of eligible deposit |
| 6 | Blue Whale | 29,400 | 1.20x | 60 | 72.00 | 72 | Daily: 0.02% of eligible deposit |
| 7 | Shark | 44,100 | 1.26x | 90 | 113.40 | 113 | Monthly: 0.002% of company Net Monthly Revenue per eligible user |
| 8 | Leviathan | 62,800 | 1.33x | 120 | 159.60 | 160 | Monthly: 0.002% of company Net Monthly Revenue per eligible user |
| 9 | Kraken | 87,300 | 1.41x | 150 | 211.50 | 212 | Monthly: 0.002% of company Net Monthly Revenue per eligible user |
| 10 | Megalodon | 120,000 | 1.50x | 180 | 270.00 | 270 | Monthly: 0.002% of company Net Monthly Revenue per eligible user |

The Puffer balance-reward rate is **0.001%**. This value is intentionally recorded exactly and must not be normalised to 0.01%.

## XP calculation

For the Daily XP Claim:

$$
XP_{credited}=XP_{base}\times M_{level}
$$

The multiplier applies to XP only. It does not multiply staking rewards, deposit-based balance rewards, the company-revenue reward, principal, or a locked position rate. An XP source outside the Daily XP Claim uses the level multiplier only when that source's live configuration expressly marks it as multiplier-eligible.

Fractional XP remains in the internal XP ledger and counts toward level thresholds. The interface displays the nearest whole XP using half-up rounding: a fractional part below 0.5 rounds down and 0.5 or above rounds up. Display rounding never changes the internal balance.

Examples:

- Minnow: `15 x 1.03 = 15.45 XP` internally and `15 XP` displayed.
- Leviathan: `120 x 1.33 = 159.60 XP` internally and `160 XP` displayed.
- Kraken: `150 x 1.41 = 211.50 XP` internally and `212 XP` displayed.

## Daily eligible-deposit reward: Levels 1-6

For Plankton through Blue Whale, a valid daily claim can create a separate balance reward:

$$
B_{daily}=D_{eligible}\times r_{level}
$$

`D_eligible` is the eligible-deposit amount used by the live programme record. `r_level` is the decimal rate corresponding to the percentage in the table. For example, 0.005% is `0.00005` and 0.02% is `0.0002`.

This reward is posted separately from principal, staking reward accrual, and XP. It does not amend the accepted product version or compound into a locked position unless a separate user instruction creates a new eligible position.

## Company Net Revenue reward: Levels 7-10

Starting at Shark, the deposit-based daily reward is replaced by an individual monthly reward equal to **0.002% of company Net Monthly Revenue**:

$$
B_{user,month}=R_{net,month}\times0.00002
$$

This is a per-user allocation, not a shared 0.002% pool. If `N` users qualify for the month, the total programme obligation is:

$$
B_{total,month}=R_{net,month}\times0.00002\times N
$$

At company Net Monthly Revenue of USD 1,000,000, each eligible Shark, Leviathan, Kraken, or Megalodon receives USD 20. With 1,000 eligible users, the total programme obligation is USD 20,000, equal to 2% of that month's Net Monthly Revenue.

Net Monthly Revenue is distinct from customer principal, TVL, gross customer inflow, and net profit. The applicable month, closed revenue base, eligibility state, calculation record, and credit status remain visible in the reward record.

## Level transitions and corrections

Only confirmed XP counts. A level threshold is tested against the exact internal XP balance, including hidden fractions. If XP is reversed, the current level is recalculated from the corrected ledger. The account history preserves the original XP event, correction, previous level, new level, effective time, and configuration ID.

Higher levels never bypass identity checks, geographic restrictions, security challenges, asset-route validation, plan capacity, withdrawal policy, anti-abuse review, or the WENI Iron Boundary.
