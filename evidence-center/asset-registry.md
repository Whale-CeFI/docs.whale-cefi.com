---
title: Asset Registry
canonical: https://whale-cefi.com/docs/evidence-center/asset-registry
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Asset Registry

An asset symbol is not a complete asset identity. Whale CeFi identifies an asset by network namespace, chain reference, native or token standard, contract where applicable, decimals, custody route, confirmation policy, deposit state, withdrawal state, limits, and evidence.

The supported catalogue covers 1INCH, ADA, ARB, AVAX, BNB, CAKE, DOGE, ETH, LINK, OP, POL, SOL, USDC, USDT, and XRP. Availability is route-specific: an asset can be active on one network and unavailable on another.

The deposit interface is generated from the same registry used by documentation and transaction policy. Free-text addresses, symbol-only selection, and unsupported routes are rejected.

The machine-readable source is [supported-assets.json](../data/supported-assets.json).
