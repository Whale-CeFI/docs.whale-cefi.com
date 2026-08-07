---
title: Yield and Financial Transparency
canonical: https://docs.whale-cefi.com/yield-and-financial-transparency
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Whale CeFi separates customer principal, productive yield and any verified
  growth-support funding so that the economic source of a reward can be traced.
---

# Yield and Financial Transparency

Reward begins with an economic source and a funding decision, not with a percentage on a screen.

Whale CeFi separates customer principal, productive external yield, any verified growth-support capital, reward liabilities, reserves and platform revenue. This separation is fundamental to explaining how a product rate can be structured without treating customer deposits as company financing.

{% hint style="info" %}
**Evidence boundary:** growth-support capital is a permitted funding mechanism, not a factual claim about the source mix of every current product. A current cohort can be described as growth-supported only when a funded allocation is present in the applicable product-version or capacity evidence.
{% endhint %}

## Users and investors are different economic roles

A user who opens a Whale CeFi earning or staking position is a customer of the product. That action does not make the user an equity investor, shareholder or venture investor in any Whale CeFi project or group entity.

Corporate financing, where applicable, is raised under separate corporate instruments. Where part of such capital is approved for product bootstrapping, it must be transferred or allocated into a controlled growth-support budget before it can be counted as reward funding.

Customer principal remains outside that budget.

## Constitutional separation

| Economic class            | Meaning                                                                                                          | Permitted use                                                                   |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Customer principal        | Asset owed to the user under the applicable product structure                                                    | Custody, approved strategy deployment and settlement back to the entitled user  |
| Realized external income  | Income generated and recognized from an approved network, protocol, lending, liquidity or institutional strategy | Costs, reserves, user rewards and residual platform revenue under the waterfall |
| Reward liability          | Amount owed under an active product version                                                                      | Settlement to the entitled user only                                            |
| Growth-support allocation | Verified finite corporate capital committed before a supported reward obligation is offered                      | Named product, cohort, asset, period and approved programme only                |
| Coverage capital          | Approved buffer for shortfall and risk treatment                                                                 | Declared shortfall and resolution rules                                         |
| Platform revenue          | Residual earned after costs, reserves and user obligations                                                       | Corporate use after recognition and reconciliation                              |

## Two-layer reward economics

The user-facing rate may have more than one separately controlled source.

### Layer A — productive external economics

Depending on the approved route, permitted sources can include native staking, validator rewards, institutional or overcollateralized lending, DeFi lending, protocol liquidity fees, market-neutral basis or funding strategies, contractual rebates and other specifically approved sources. A source is current only when the applicable product and source records identify it.

### Layer B — finite growth support

During an early growth phase, a product may supplement productive yield using corporate capital already committed to a defined incentive programme. Such capital may ultimately originate from financing raised by an applicable project or group entity from shareholders or strategic investors, but the financing itself is not automatically a reward pool.

Only the amount that has been formally approved, actually funded, segregated and capacity-reserved can be recognized as eligible growth-support funding.

The purpose can be to bootstrap product adoption through measurable participation such as user acquisition, retention, TVL formation, liquidity depth and ecosystem scale. This is economically different from claiming that an underlying protocol naturally generates the full displayed reward rate.

## Why rates can be higher early and lower later

Where a finite growth-support pool is active, it has a finite runway.

At an early stage, a relatively small eligible capital base can receive a larger incentive contribution per unit of TVL. As participation and TVL expand, the same committed pool can support a larger base and the marginal incentive available to new positions can decline.

The rate-governance process can therefore consider TVL together with realized yield, remaining verified incentive runway, liquidity, strategy capacity, counterparty concentration, maturity profile, reserves, stress tests, custody and legal limits.

This can lead to lower rates for new product versions as the platform matures. Whale CeFi does not publish an automatic promise that a particular user count, TVL level or date will produce a specific future percentage.

## Anti-pyramid invariants

1. A new user's principal cannot settle an older user's reward.
2. Principal, reward funding, fees and platform capital occupy distinct ledger accounts and custody scopes.
3. A fixed reward obligation cannot be created without forward funding coverage.
4. Productive yield and company-funded support, when both are used, must be disclosed separately.
5. Unrealized token appreciation, unclaimed emissions, future fundraising or projected strategy profit cannot be credited as realized reward funding.
6. Capacity closes when funding, liquidity, solvency, counterparty, custody, network, legal or operational limits are reached.
7. Referral and gamification rewards use finite, separately identified budgets.
8. Every correction posts through a new journal; historical reward records are never edited in place.

## Position-level source binding

Under the controlled architecture, each product position is bound to a versioned funding policy or equivalent source-policy reference. That policy identifies permitted sources, allocation priority, fee split, reserve target, verified committed incentive amount where applicable, capacity reservation, loss treatment, maturity match and change authority.

Because the funding policy is bound to the product version, the original economics should remain reproducible after the public catalogue changes.

{% hint style="success" %}
**Source-of-funds test:** a reward should be traceable from the user statement to a ledger journal, funding account, external settlement and, where applicable, an approved release from a verified committed growth-support pool.
{% endhint %}
