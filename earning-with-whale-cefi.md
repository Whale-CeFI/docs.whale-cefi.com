---
title: "Earning with Whale CeFi"
description: "Understand what Whale CeFi does, what happens to an asset and which decisions remain yours."
canonical: "https://whale-cefi.com/docs/earning-with-whale-cefi"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Earning with Whale CeFi

Understand what Whale CeFi does, what happens to an asset and which decisions remain yours.

![Product Overview](./assets/visuals/heroes/02-product-journey.png)

Whale CeFi is a centralised crypto earning and staking ecosystem. You choose a supported asset, choose a flexible or fixed-term plan, review the exact rules, and decide whether to open it.

You do **not** need to understand blockchains before reading this page. Start with five questions:

1. **What am I depositing?** The asset and network must match the deposit instruction exactly.
2. **How long can I leave it?** Flexible plans can be closed under their rules. Fixed-term plans remain locked until maturity.
3. **How is the reward shown?** Every plan labels the rate unit and the period it applies to.
4. **Where can the reward come from?** Each plan has a source-attribution sheet that separates protocol or network income from any treasury-funded incentive.
5. **What could I lose or wait for?** The review screen shows market, protocol, custody, smart-contract, liquidity and operational risks before confirmation.

### The whole journey

| Step       | What you do                                | What Whale CeFi does                            | What you can inspect                            |
| ---------- | ------------------------------------------ | ----------------------------------------------- | ----------------------------------------------- |
| 1. Prepare | Create and protect an account              | Checks eligibility and account security         | Security settings and access policy             |
| 2. Deposit | Send the exact asset on the exact network  | Detects, confirms and credits the transfer      | Address, network, transaction and confirmations |
| 3. Choose  | Compare plans                              | Shows term, rate unit, source mix and exit rule | Product data sheet and calculation method       |
| 4. Confirm | Review the final summary                   | Records the accepted product version            | Confirmation record and timestamp               |
| 5. Track   | Watch principal and rewards                | Posts daily accruals to the internal ledger     | Accrual history and statement                   |
| 6. Exit    | Close a flexible plan or wait for maturity | Settles the plan and processes withdrawal       | Withdrawal states, network fee and transaction  |

> **One rule to remember:** never confirm a deposit or plan until the asset, network, term, rate unit and exit condition all make sense to you.

## System view

A product surface receives an authenticated instruction. A domain service validates the product and account policy. The financial ledger records the obligation. Custody and blockchain systems provide external settlement evidence. Reconciliation proves that the internal obligation remains consistent with assets and transactions outside the application.

The interface is a view of this system; it is not the financial source of record. Every material state therefore has four identities: the user-facing state, the ledger state, the custody state and the blockchain state.

## Before any confirmation

The review object binds the account, asset, network, product version, rate unit, term, source attribution, fee schedule, risk disclosure and expiry. Any material change invalidates the review and requires a new confirmation.
