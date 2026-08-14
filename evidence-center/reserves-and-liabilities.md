---
title: Reserves and Liabilities
canonical: https://whale-cefi.com/docs/evidence-center/reserves-and-liabilities
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Proof of reserves is meaningful only when reserves, customer liabilities,
  encumbrances, and observation time refer to the same scope.
---

# Reserves and Liabilities

## Proof epoch

Each epoch binds:

* customer principal and posted reward liabilities through a Merkle-sum commitment;
* user inclusion proofs without exposing another customer’s balance;
* controlled on-chain balances and wallet-control challenges;
* custody attestations for off-chain balances;
* strategy positions with liquidity and valuation haircuts;
* pending deposits, withdrawals, and settlement adjustments;
* borrowed, pledged, frozen, or otherwise encumbered assets;
* the signed ledger close, block heights, valuation rules, and previous epoch hash.

Coverage is calculated per canonical asset before a consolidated view. An excess of one asset does not silently conceal a deficit in another.

## Limits

A proof verifies a closed state. It does not authorise a transaction, prove every subsequent outcome, remove insolvency risk, or replace audited financial statements. The methodology and exclusions are versioned with the epoch.

The machine-readable target contract is [proof-epochs.json](../data/proof-epochs.json).
