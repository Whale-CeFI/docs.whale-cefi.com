---
title: "Asset Registry"
description: "Supported assets, routes, confirmation rules, precision and product availability."
canonical: "https://docs.whale-cefi.com/developers-and-reference/asset-registry"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Asset Registry

Supported assets, routes, confirmation rules, precision and product availability.

Whale CeFi's base asset catalogue includes 1INCH, ADA, ARB, AVAX, BNB, CAKE, DOGE, ETH, LINK, OP, POL, SOL, USDC, USDT and XRP.

A symbol alone is never enough to identify an asset. The registry also records network, native or token type, canonical contract or mint, decimals, deposit and withdrawal state, minimum amount, confirmation rule, memo or tag requirement, fee source and supported products.

The user interface resolves every symbol from this registry and refuses ambiguous routes.

## Registry identity

The canonical key is an internal asset ID bound to chain ID or network identifier and, where applicable, contract or mint address. Display symbols and names are aliases. Corporate actions, token migrations and network upgrades produce new effective-dated records rather than overwriting history.

An asset may remain visible for statements while deposits, new plans, or withdrawals are independently paused.

## Catalogue and product scope

USDT and USDC have an active published earning-rate matrix for Flexible and 30/90/180/365-day Locked plans. The remaining symbols belong to the active base catalogue but never inherit a universal rate or route. An earning option appears only when an active product version resolves the exact asset route, legal entity, region, term, funding policy, capacity, and disclosure set.
