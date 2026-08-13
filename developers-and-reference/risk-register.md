---
title: "Risk Register"
description: "How product, market, liquidity, custody, contract, operational and AI risks are governed."
canonical: "https://whale-cefi.com/docs/developers-and-reference/risk-register"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Risk Register

How product, market, liquidity, custody, contract, operational and AI risks are governed.

The risk register connects every material risk to a product, asset, network, system and accountable role. It records likelihood, impact, leading indicator, limit, control, response and residual risk.

Risks are grouped into market, liquidity, network, protocol, smart-contract, custody, counterparty, financial, operational, cyber, privacy, regulatory, model and third-party families.

The user-facing product sheet shows only the risks relevant to that product. The full register preserves the technical detail and decision history.

## Limit breach

A limit breach emits a versioned risk event and selects a scoped action: monitor, restrict new positions, reduce capacity, switch provider, enter read-only mode, pause an affected operation, require manual reconciliation or wind down. The response has a deadline, approver and reopening test.

Residual risk cannot be accepted through an unowned note. Acceptance names the accountable authority, rationale, duration, compensating control and expiry.
