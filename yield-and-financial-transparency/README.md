---
title: Yield and Financial Transparency
canonical: https://docs.whale-cefi.com/yield-and-financial-transparency
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Whale CeFi recognizes reward funding only when value has been produced by an
  approved external source or released from capital already committed to a
  defined product cohort.
---

# Yield and Financial Transparency

Reward begins with an economic source and a funding decision, not with a percentage on a screen.

Whale CeFi separates customer principal, productive external yield, growth-support capital, reward liabilities, reserves and platform revenue. This separation is fundamental to explaining why early product rates can be high without treating customer deposits as company financing.

## Users and investors are different economic roles

A user who opens a Whale CeFi earning or staking position is a customer of the product. That action does not make the user an equity investor, shareholder or venture investor in Whale CeFi.

Company financing is raised separately at the corporate level. Where part of that capital is approved for product bootstrapping, it is transferred into a controlled growth-support budget before it can support user rewards.

Customer principal remains outside that budget.

## Constitutional separation

| Economic class            | Meaning                                                                                                          | Permitted use                                                                   |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Customer principal        | Asset owed to the user under the applicable product structure                                                    | Custody, approved strategy deployment and settlement back to the entitled user  |
| Realized external income  | Income generated and recognized from an approved network, protocol, lending, liquidity or institutional strategy | Costs, reserves, user rewards and residual platform revenue under the waterfall |
| Reward liability          | Amount owed under an active product version                                                                      | Settlement to the entitled user only                                            |
| Growth-support allocation | Finite company capital committed before a supported reward obligation is offered                                 | Named product, cohort, asset, period and acquisition programme only             |
| Coverage capital          | Platform-owned buffer for approved shortfall and risk treatment                                                  | Declared shortfall and resolution rules                                         |
| Platform revenue          | Residual earned after costs, reserves and user obligations                                                       | Corporate use after recognition and reconciliation                              |

## Two-layer reward economics

The user-facing rate may combine two separately controlled layers.

### Layer A — productive external economics

Depending on the approved route, this can include native staking, validator rewards, institutional or overcollateralized lending, DeFi lending, protocol liquidity fees, market-neutral basis or funding strategies, contractual rebates and other specifically approved sources.

### Layer B — finite growth support

During an early growth phase, Whale CeFi may supplement productive yield using company capital already committed to a defined incentive programme. That capital may originate from corporate financing received from shareholders or strategic investors, but the investment itself is not automatically a reward pool.

Only the amount that has been formally allocated, segregated and capacity-reserved is recognized as eligible growth-support funding.

The purpose is to bootstrap product adoption through measurable participation: user acquisition, retention, TVL formation, liquidity depth and ecosystem scale. This is economically different from claiming that an underlying protocol naturally generates the full displayed reward rate.

## Why rates can be higher early and lower later

A finite growth-support pool has a finite runway.

At an early stage, a relatively small eligible capital base can receive a larger incentive contribution per unit of TVL. As participation and TVL expand, the same committed pool supports a larger base and the marginal incentive available to new positions can decline.

The rate committee therefore considers TVL together with realized yield, remaining incentive runway, liquidity, strategy capacity, counterparty concentration, maturity profile, reserves, stress tests, custody and legal limits.

This process can lead to lower rates for new product versions as the platform matures. Whale CeFi does not publish an automatic promise that a particular user count, TVL level or date will produce a specific future percentage.

## Anti-pyramid invariants

1. A new user's principal cannot settle an older user's reward.
2. Principal, reward funding, fees and platform capital occupy distinct ledger accounts and custody scopes.
3. A fixed reward obligation cannot be created without forward funding coverage.
4. Productive yield and company-funded support are disclosed separately.
5. Unrealized token appreciation, unclaimed emissions, future fundraising or projected strategy profit cannot be credited as realized reward funding.
6. Capacity closes when funding, liquidity, solvency, counterparty, custody, network, legal or operational limits are reached.
7. Referral and gamification rewards use finite, separately identified budgets.
8. Every correction posts through a new journal; historical reward records are never edited in place.

## Position-level source binding

Every position stores a `funding_policy_id`. The policy identifies permitted sources, allocation priority, fee split, reserve target, committed incentive amount, capacity reservation, loss treatment, maturity match and change authority.

Because the funding policy is bound to the product version, the original economics remain reproducible after the public catalogue changes.

{% hint style="success" %}
**Source-of-funds test:** a reward must be traceable from the user statement to a ledger journal, funding account, external settlement or approved release from a committed growth-support pool.
{% endhint %}
