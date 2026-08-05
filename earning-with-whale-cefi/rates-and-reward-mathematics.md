---
title: Rates and Reward Mathematics
canonical: >-
  https://docs.whale-cefi.com/earning-with-whale-cefi/rates-and-reward-mathematics
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  This page defines the unit, calculation, versioning, display, and rounding
  rules behind Whale CeFi reward rates.
---

# Rates and Reward Mathematics

This page defines the unit, calculation, versioning, display, and rounding rules behind Whale CeFi reward rates.

![Rates and Reward Mathematics](../.gitbook/assets/gross-to-user-waterfall.svg)

Whale CeFi expresses the current USDT and USDC plan percentages as **monthly reward rates**. For calculation purposes, one reward month is a fixed 30-day interval of 2,592,000 seconds. It is not a variable-length calendar month, APR, APY, or an implied compounding rate.

## Current rate parameters

| Plan       |              Term | Monthly reward rate |              Exact term reward rate |
| ---------- | ----------------: | ------------------: | ----------------------------------: |
| Flexible   | No fixed maturity |                6.0% | Determined by eligible elapsed time |
| Locked 30  |           30 days |                9.2% |                                9.2% |
| Locked 90  |           90 days |               12.3% |                               36.9% |
| Locked 180 |          180 days |               14.7% |                               88.2% |
| Locked 365 |          365 days |               16.8% |                              201.6% |

The exact term reward rate is a product-version field accepted before a Locked position opens. The service does not reconstruct it later from a generic annual formula.

## Flexible calculation contract

For an eligible interval (d):

\[ R\_d = P\_d \times r\_m \times \frac{s\_d}{2{,}592{,}000} ]

where:

* (P\_d) is eligible principal in integer base units during the interval;
* (r\_m) is the fixed-point monthly reward rate in the applicable product version;
* (s\_d) is the number of eligible elapsed seconds in the interval;
* 2,592,000 is the fixed 30-day reward-month denominator.

For 1,000 USDT held for 15 complete days at 6.0%, the unrounded reward is:

\[ 1{,}000 \times 0.06 \times \frac{15}{30} = 30\ \text{USDT} ]

A prospective Flexible rate change applies only after the effective timestamp in a signed rate record. Posted reward is never recalculated retroactively.

## Locked calculation contract

A Locked position stores:

* accepted principal;
* start and maturity timestamps;
* immutable product-version identifier;
* exact term reward rate;
* exact maturity reward in payout-asset base units;
* rounding remainder and journal identifiers.

The contractual maturity reward is:

\[ R\_T = P\_0 \times r\_T ]

where (r\_T) is the exact term reward rate. Any daily value shown before maturity is an informational linear allocation:

\[ R\_{\text{display\}} = R\_T \times \frac{\text{elapsed seconds\}}{\text{term seconds\}} ]

The 365-day product therefore pays the accepted 201.6% term reward rate; the additional five days beyond twelve 30-day periods do not create an undisclosed thirteenth monthly charge or reward.

## Precision and rounding

Internal calculations use fixed-point integers and asset decimals rather than floating-point arithmetic. Posting rounds down once in favour of solvency. Sub-unit remainders remain associated with the position and are settled at closure when the asset permits it. Reprocessing the same position, interval, rate version, and run identifier is idempotent.

The statement exposes principal, product version, rate unit, interval, unrounded calculation, posted amount, cumulative reward, and journal ID.

## No implicit compounding

Accrued reward does not become principal automatically. Auto-Reinvest is a separate, revocable instruction that creates a new consented journal and uses only reward already eligible for reinvestment. The interface distinguishes:

* simple contractual reward;
* an optional mathematical annualisation;
* an optional compounding illustration;
* the actual result of a user-authorised Auto-Reinvest configuration.

Only the first and last can describe an active position. Illustrations are labelled and cannot be presented as guaranteed outcomes.

## Rate-control requirements

* Every rate record is effective-dated, signed, versioned, and bound to eligible assets and plans.
* Rate proposal, funding approval, risk approval, and publication are segregated roles.
* A Locked rate cannot activate until cohort funding and liquidity coverage pass.
* The accrual engine rejects missing, overlapping, retroactive, expired, or unsigned schedules.
* Golden test vectors cover partial days, leap years, UTC boundaries, maturity, closure, maximum supported amounts, and every supported asset decimal.
