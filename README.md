---
title: "Whale CeFi Documentation"
description: "Understand the product before you move an asset. Verify the evidence before you trust a claim. Keep final authority in human hands."
canonical: "https://docs.whale-cefi.com"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Whale CeFi Documentation

**Understand the product before you move an asset. Verify the evidence before you trust a claim. Keep final authority in human hands.**

![Whale CeFi system boundary](./assets/visuals/heroes/v3/01-iron-boundary.png)

Whale CeFi is a digital-asset earning platform built around explicit product terms, separately recorded principal and rewards, verifiable operating evidence, and WENI - the platform’s human-controlled intelligence layer.

This documentation is designed for four readers at once:

- a first-time crypto user who needs a safe path from account creation to withdrawal;
- an experienced user comparing plans, rates, networks, and operational risk;
- an engineer or auditor inspecting state machines, contracts, financial controls, and deployment identity;
- an institutional team reviewing authority, evidence, security, legal perimeter, and WENI governance.

The same facts appear at different depths. A beginner receives a plain-language explanation. A specialist can continue into exact rules, schemas, registries, and evidence. The underlying product fact never changes between those views.

{% hint style="info" %}
**Official domain:** [whale-cefi.com](https://whale-cefi.com). Links, support messages, deposit instructions, and documentation that use another domain must be treated as unverified.
{% endhint %}

## Start with the route that matches your question

| I want to… | Begin here |
|---|---|
| Understand Whale CeFi in a few minutes | [Start Here](start-here.md) |
| Secure an account and understand verification | [Account and Access](account-and-access.md) |
| Compare the current USDT and USDC plans | [Current Rate Card](earning-with-whale-cefi/current-rate-card.md) |
| Make a first deposit without using the wrong network | [Your First Deposit](start-here/your-first-deposit.md) |
| Understand XP, levels, tasks, chests, and achievements | [Points and Progression](points-and-progression.md) |
| Understand what WENI can and cannot do | [WENI - Native Intelligence](weni-native-intelligence.md) |
| Review custody, risks, audits, and reserves | [Evidence Center](evidence-center.md) |
| Inspect smart contracts or platform architecture | [Technical Specifications](advanced-platform-architecture.md) |
| Find the entity, legal relationship, or complaints route | [Legal and Support](legal-and-support.md) |

## The product in one minute

1. **Secure and verify the account.** Identity, authentication, recovery, eligibility, and geographic rules determine who can use a capability.
2. **Select the exact asset and network.** A token symbol alone is not enough; asset, network, contract or native identity, and destination must match.
3. **Compare a versioned plan.** The review shows principal, rate unit, exact term reward, maturity, funding model, exit rules, risks, and terms hash.
4. **Deposit and wait for finality.** A broadcast transaction remains uncredited until the required checks complete. Detection, confirmations, screening, ledger credit, and reconciliation are separate states.
5. **Open the position.** The accepted product version becomes immutable for that position.
6. **Track principal and rewards separately.** Every material balance change has a ledger event, calculation period, and evidence reference.
7. **Exit under the accepted rules.** Maturity, redemption, withdrawal authorisation, broadcast, chain finality, and reconciliation remain visible.

## Three non-negotiable boundaries

### Principal is not revenue

Customer principal, accrued reward liabilities, reward-funding assets, operating revenue, reserves, fees, and platform capital occupy separate accounts and control scopes. New customer principal cannot be used to settle an older customer reward.

### A published rate creates an explicit obligation model

Locked-plan rates are bound to a specific product version and accepted before the position opens. Flexible rates can change only prospectively under the notice and effective-time rules stated in the active rate record. The interface does not label a monthly rate as APR or APY.

### WENI cannot become asset authority

WENI can explain, retrieve evidence, calculate, compare, simulate, and prepare a reviewable unsigned proposal. It cannot hold private keys, approve its own proposal, alter the ledger, bypass product eligibility, or broadcast an asset movement without an independent user or institutional authorisation.

{% hint style="success" %}
An operation is complete only when the user-facing state, financial record, custody state, blockchain state, and evidence state agree.
{% endhint %}
