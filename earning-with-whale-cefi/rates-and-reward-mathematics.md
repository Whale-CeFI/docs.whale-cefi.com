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

Whale CeFi expresses the current plan percentages for supported assets as **monthly reward rates**. For calculation purposes, one reward month is a fixed 30-day interval of 2,592,000 seconds. It is not a variable-length calendar month, APR, APY, or an implied compounding rate.

## Current rate parameters

| Asset | Flexible | 30 Days | 90 Days | 180 Days | 365 Days |
| ----- | -------: | ------: | ------: | -------: | -------: |
| 1INCH |     5.8% |    6.8% |    9.8% |    11.4% |    12.5% |
| ADA   |     4.9% |    5.8% |    9.4% |    12.3% |    13.2% |
| ARB   |     5.3% |    6.3% |    9.5% |    12.2% |    13.5% |
| AVAX  |     3.5% |    4.1% |    6.2% |     8.5% |    10.1% |
| BNB   |     3.7% |    4.3% |    6.6% |     8.0% |     9.2% |
| CAKE  |     5.6% |    6.6% |   10.2% |    13.3% |    14.5% |
| DOGE  |     4.2% |    5.2% |    7.5% |     9.1% |    10.0% |
| ETH   |     2.9% |    3.5% |    4.8% |     6.5% |     7.8% |
| LINK  |     3.7% |    4.4% |    6.8% |     8.8% |     9.9% |
| OP    |     5.1% |    6.0% |    9.0% |    11.8% |    13.0% |
| POL   |     5.0% |    5.9% |    8.9% |    11.5% |    12.7% |
| SOL   |     3.9% |    4.5% |    6.9% |     9.2% |    10.8% |
| USDC  |     5.5% |    7.1% |    9.3% |    11.8% |    13.6% |
| USDT  |     5.5% |    7.1% |    9.3% |    11.8% |    13.6% |
| XRP   |     3.0% |    3.8% |    5.5% |     7.2% |     8.5% |

The rate applicable to a position is the rate shown for that asset and plan at confirmation and is bound to the accepted product version. The table above is the current published rate matrix; the position confirmation remains authoritative if a later rate version changes.

## Flexible calculation contract

For an eligible interval (d):

\[ R\_d = P\_d \times r\_m \times \frac{s\_d}{2{,}592{,}000} ]

where:

* (P\_d) is eligible principal in integer base units during the interval;
* (r\_m) is the fixed-point monthly reward rate in the applicable product version;
* (s\_d) is the number of eligible elapsed seconds in the interval;
* 2,592,000 is the fixed 30-day reward-month denominator.

For 1,000 USDT held for 15 complete days at the current 5.5% Flexible rate, the unrounded reward is:

\[ 1{,}000 \times 0.055 \times \frac{15}{30} = 27.5\ \text{USDT} ]

A prospective Flexible rate change applies only after the effective timestamp in a signed rate record. Posted reward is never recalculated retroactively.

## Locked calculation contract

A Locked position stores:

* accepted principal;
* start and maturity timestamps;
* immutable product-version identifier;
* displayed monthly reward rate for the selected asset and term;
* exact contractual maturity reward in payout-asset base units;
* rounding remainder and journal identifiers.

The contractual maturity reward is:

\[ R\_T = P\_0 \times r\_T ]

where (r\_T) is the exact term reward rate stored in the accepted product version. Any daily value shown before maturity is an informational linear allocation:

\[ R\_{\text{display\}} = R\_T \times \frac{\text{elapsed seconds\}}{\text{term seconds\}} ]

The table above shows the current monthly reward rate for each supported asset and term. The exact maturity reward is fixed in the position confirmation and is not reconstructed later from a generic APR, APY, or annualisation formula.

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
