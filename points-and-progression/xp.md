---
title: "XP"
description: "XP is Whale CeFi's exact internal progression score; the interface may show a rounded whole-number view without changing the ledger balance."
canonical: "https://docs.whale-cefi.com/points-and-progression/xp"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-08-10"
---

# XP

XP is Whale CeFi's progression score. It records eligible participation in an exact internal ledger and determines the user's current level.

XP can be awarded for:

- a Daily XP Claim;
- a published task or achievement;
- an eligible product milestone;
- a verified learning module;
- a valid referral milestone;
- an eligible leaderboard or season result;
- a chest outcome containing XP;
- or an approved event or support correction.

## XP multipliers

Each level has an XP multiplier from 1.00x to 1.50x. The multiplier is an XP-only mechanic. It never changes principal, a staking rate, a locked term reward, a balance-reward percentage, or a company-revenue percentage.

The live Daily XP Claim uses:

$$
XP_{credited}=XP_{base}\times M_{level}
$$

Other XP sources identify their own multiplier eligibility. A source without an explicit multiplier rule credits its stated XP amount.

## Exact ledger and rounded interface

Fractional XP is retained internally. Level thresholds and corrections use that exact balance. The standard interface displays no decimal places and rounds to the nearest whole XP using half-up rounding.

| Exact internal value | Standard display |
|---:|---:|
| 15.45 XP | 15 XP |
| 21.20 XP | 21 XP |
| 159.60 XP | 160 XP |
| 211.50 XP | 212 XP |

The rounded number is a presentation value only. It never overwrites the XP ledger or changes the moment at which a level threshold is crossed.

## What XP is not

XP:

- is not money or customer principal;
- has no guaranteed cash value;
- is not a deposit balance;
- is not a security or ownership interest;
- is not transferable between accounts;
- cannot be sold to another user;
- and does not by itself guarantee a token allocation, asset reward, or product right.

Balance rewards associated with a level are separate financial records. They are described in [Levels](levels.md) and never become XP merely because the same level determines eligibility.

## XP event states

| State | Meaning |
|---|---|
| **Tracking** | The system is measuring progress toward an objective. |
| **Pending** | The visible condition appears complete, but validation is incomplete. |
| **Confirmed** | The event passed the applicable rules and exact XP was credited. |
| **Under review** | The event requires automated or manual review. |
| **Rejected** | The event did not meet the published or integrity conditions. |
| **Reversed** | A correcting entry removed XP after cancellation, duplication, invalidation, abuse, refund, or error. |
| **Expired** | The required action was not completed within the valid period. |

## XP history

The XP history identifies the event, exact credited amount, displayed amount, base amount, multiplier, source category, time, related programme record, status, configuration ID, and any correcting entry. Confidential anti-abuse detail can remain restricted, but an unexplained XP balance change is not an acceptable user state.
