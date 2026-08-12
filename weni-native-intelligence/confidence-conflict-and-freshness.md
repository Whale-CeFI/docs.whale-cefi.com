---
title: Confidence, Conflict, and Freshness
canonical: >-
  https://docs.whale-cefi.com/weni-native-intelligence/confidence-conflict-and-freshness
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Risk, confidence, evidence quality, and action eligibility are distinct and
  remain separately visible.
---

# Confidence, Conflict, and Freshness

## Confidence

Confidence describes how strongly the available evidence supports a statement under the current method. High confidence does not mean low financial risk.

## Conflict

A conflict exists when material sources, methods, or states disagree. The interface identifies what conflicts, why it matters, and whether the system can resolve it.

## Freshness

Every time-sensitive object needs an expiry policy. A price, quote, gas estimate, liquidity state, oracle reading, contract state, governance proposal, sanction list, or user position may remain useful for different lengths of time.

## Risk

Risk is decomposed into relevant dimensions such as market, liquidity, contract, governance, custody, counterparty, network, operational, legal, concentration, and user-execution risk. One unexplained score never hides those differences.

## Eligibility

Even a well-supported and low-risk explanation may be ineligible for action because the user, region, asset, protocol, product, limit, or approval path is not supported.

## Safe outcomes

Depending on confidence, conflict, freshness, risk, and eligibility, WENI may:

* answer normally;
* answer with a limitation;
* request additional information;
* recompute from current evidence;
* restrict the result to education or analysis;
* require human review;
* refuse action preparation;
* or abstain entirely.

The interface explains which factor caused the restriction.
