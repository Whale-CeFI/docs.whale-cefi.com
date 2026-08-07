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

<table><thead><tr><th width="92">Asset</th><th align="right">Flexible</th><th align="right">30 Days</th><th align="right">90 Days</th><th align="right">180 Days</th><th align="right">365 Days</th></tr></thead><tbody><tr><td>1INCH</td><td align="right">5.8%</td><td align="right">6.8%</td><td align="right">9.8%</td><td align="right">11.4%</td><td align="right">12.5%</td></tr><tr><td>ADA</td><td align="right">4.9%</td><td align="right">5.8%</td><td align="right">9.4%</td><td align="right">12.3%</td><td align="right">13.2%</td></tr><tr><td>ARB</td><td align="right">5.3%</td><td align="right">6.3%</td><td align="right">9.5%</td><td align="right">12.2%</td><td align="right">13.5%</td></tr><tr><td>AVAX</td><td align="right">3.5%</td><td align="right">4.1%</td><td align="right">6.2%</td><td align="right">8.5%</td><td align="right">10.1%</td></tr><tr><td>BNB</td><td align="right">3.7%</td><td align="right">4.3%</td><td align="right">6.6%</td><td align="right">8.0%</td><td align="right">9.2%</td></tr><tr><td>CAKE</td><td align="right">5.6%</td><td align="right">6.6%</td><td align="right">10.2%</td><td align="right">13.3%</td><td align="right">14.5%</td></tr><tr><td>DOGE</td><td align="right">4.2%</td><td align="right">5.2%</td><td align="right">7.5%</td><td align="right">9.1%</td><td align="right">10.0%</td></tr><tr><td>ETH</td><td align="right">2.9%</td><td align="right">3.5%</td><td align="right">4.8%</td><td align="right">6.5%</td><td align="right">7.8%</td></tr><tr><td>LINK</td><td align="right">3.7%</td><td align="right">4.4%</td><td align="right">6.8%</td><td align="right">8.8%</td><td align="right">9.9%</td></tr><tr><td>OP</td><td align="right">5.1%</td><td align="right">6.0%</td><td align="right">9.0%</td><td align="right">11.8%</td><td align="right">13.0%</td></tr><tr><td>POL</td><td align="right">5.0%</td><td align="right">5.9%</td><td align="right">8.9%</td><td align="right">11.5%</td><td align="right">12.7%</td></tr><tr><td>SOL</td><td align="right">3.9%</td><td align="right">4.5%</td><td align="right">6.9%</td><td align="right">9.2%</td><td align="right">10.8%</td></tr><tr><td>USDC</td><td align="right">5.5%</td><td align="right">7.1%</td><td align="right">9.3%</td><td align="right">11.8%</td><td align="right">13.6%</td></tr><tr><td>USDT</td><td align="right">5.5%</td><td align="right">7.1%</td><td align="right">9.3%</td><td align="right">11.8%</td><td align="right">13.6%</td></tr><tr><td>XRP</td><td align="right">3.0%</td><td align="right">3.8%</td><td align="right">5.5%</td><td align="right">7.2%</td><td align="right">8.5%</td></tr></tbody></table>

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
