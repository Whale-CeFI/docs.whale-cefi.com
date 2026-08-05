---
title: End-to-End User Journey
canonical: https://docs.whale-cefi.com/earning-with-whale-cefi/end-to-end-user-journey
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  A short mental model of the product, financial records, infrastructure,
  security and intelligence layer.
---

# End-to-End User Journey

A short mental model of the product, financial records, infrastructure, security and intelligence layer.

![End-to-End User Journey](../.gitbook/assets/10-asset-lifecycle.png)

Think of Whale CeFi as five connected layers.

### 1. Product

The website or app lets you create an account, deposit a supported asset, choose a plan, see accruals and request an eligible withdrawal.

### 2. Financial record

An internal double-entry ledger records what the platform owes each user and why. A displayed balance is derived from approved ledger entries, not edited by hand.

### 3. Asset operations

Custody, smart contracts and blockchain transactions move or secure assets under separate permissions. No single screen or employee controls the complete asset path.

### 4. Control system

Reconciliation, monitoring, audit logs, limits and incident states detect when the internal record and external reality diverge.

### 5. Intelligence

WENI explains evidence, performs deterministic calculations, simulates possible actions and can prepare a reviewable request. It does not hold the final signing authority.

## Authority map

| Question                               | Authority                                          |
| -------------------------------------- | -------------------------------------------------- |
| Who may use the account?               | Identity and eligibility policy                    |
| What product terms apply?              | Versioned product registry                         |
| What does the platform owe?            | Double-entry ledger                                |
| Did an external transfer settle?       | Custody and blockchain evidence                    |
| May a privileged action proceed?       | Signed policy and approval quorum                  |
| May an AI-prepared action move assets? | No; a separate wallet or authorised multisig signs |

Explanation, calculation, accounting, custody, and authorisation remain separate authority domains throughout the user journey.
