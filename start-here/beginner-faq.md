---
title: Beginner FAQ
canonical: https://docs.whale-cefi.com/start-here/beginner-faq
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  The required route depends on the product surface and supported deposit
  method. When an external wallet is used, it remains responsible for signing
  the transfer. Whale CeFi never needs the wallet's se
---

# Beginner FAQ

## Do I need my own wallet?

The required route depends on the product surface and supported deposit method. When an external wallet is used, it remains responsible for signing the transfer. Whale CeFi never needs the wallet's seed phrase.

## Is a wallet the same as an account?

No. A Whale CeFi account identifies the user, permissions, product positions, and internal financial record. A wallet controls signing authority for blockchain instructions. One may be linked to the other without becoming the same system.

## Why can the same asset appear on several networks?

A token can be issued or represented on more than one blockchain. The symbol may be identical while the settlement route and contract are different. Always match the exact supported network.

## Why is my deposit visible but not credited?

Detection occurs before finality. Whale CeFi waits for the route's confirmation rule and validates the asset, destination, and amount before creating a ledger credit.

## What is a position?

A position is the accepted record of an amount placed under a specific product version. It binds the asset, term, rate, formula, source policy, fees, risks, maturity, and exit rule.

## Is the displayed percentage APR or APY?

Only when it is explicitly labeled that way. Whale CeFi preserves the product's native rate unit. Current USDT and USDC catalogue percentages are expressed as monthly reward rates; annualized figures, when shown, are mathematical comparisons.

## Do rewards compound automatically?

No. Reward does not silently become principal. Auto-Reinvest is a separate user instruction and creates a separately recorded financial event.

## Where does the reward come from?

Recognized funding can come from approved realized external economics, a pre-funded incentive escrow, or explicit coverage capital. Customer principal is excluded as a reward source.

## Can I exit a fixed-term position early?

Fixed positions remain committed until maturity unless the accepted terms define a specific emergency path. Choose the term based on when you may realistically need the asset.

## Can WENI move my assets?

No. WENI can explain, calculate, simulate, and prepare an unsigned proposal. A separate user wallet or approved institutional quorum must authorize the exact payload.

## What proves my balance?

The user statement is derived from append-only double-entry journals. Custody and blockchain evidence corroborate controlled assets, while reconciliation checks agreement between the financial and external states.

## What should I save?

Keep the deposit transaction hash, position confirmation record, product version, relevant statements, withdrawal transaction hash, and any support case identifier until the complete lifecycle is reconciled.
