---
title: Transaction Policy
canonical: https://whale-cefi.com/docs/security-and-custody/transaction-policy
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  The deterministic rules that constrain every custody and on-chain asset
  movement.
---

# Transaction Policy

Transaction policy evaluates a typed request before any signer sees it. Human quorum can approve a permitted request; it cannot override a hard prohibition.

## Policy dimensions

* asset and network identity;
* source and destination class;
* amount and rolling velocity;
* user withdrawal entitlement;
* allowlist and destination age;
* product, cohort, and strategy cap;
* risk, incident, and reconciliation state;
* transaction deadline and gas bounds;
* calldata selector and decoded parameters;
* required approval roles and quorum;
* cooling-off period for sensitive changes.

## Hard prohibitions

The policy engine rejects transfers that consume protected principal without a matched liability transition, use an unknown asset or chain, target unapproved contracts, exceed strategy caps, rely on stale evidence, bypass a pending-withdrawal reservation, or originate from WENI without a separately authenticated human action.

## Replacement and cancellation

Gas replacement transactions bind the same semantic payload and operation ID. A replacement cannot change recipient, asset, amount, calldata, or purpose. Cancellation is a distinct controlled transaction and does not settle the financial obligation until finality is observed.

## Decision record

Every policy evaluation stores input hash, policy version, facts used, result, reasons, required approvers, approvals, signed payload hash, broadcast transaction, and reconciliation outcome. Policy changes are effective-dated and do not reinterpret previously signed requests.
