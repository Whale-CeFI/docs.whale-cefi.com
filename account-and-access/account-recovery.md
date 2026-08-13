---
title: Account Recovery
canonical: https://whale-cefi.com/docs/account-and-access/account-recovery
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Recovery restores account access without silently transferring financial
  authority to an attacker. It is therefore slower and more evidence-heavy than
  an ordinary login.
---

# Account Recovery

## Recovery principles

1. Recovery evidence is evaluated independently from the compromised session.
2. Security-factor changes and withdrawals are separated by a cooling period where risk requires it.
3. Existing sessions, API credentials, address allowlists, and pending sensitive actions are reviewed.
4. The user receives notifications through previously established channels.
5. Every override has a case ID, approver, reason, expiry, and audit record.

## Recovery path

Start from the authenticated emergency route when possible. If the account cannot be accessed, use the official account-compromise channel listed in [Contact Routes](../legal-and-support/contact-routes.md).

The case may require identity reverification, ownership evidence, device history, previous account activity, or an institutional mandate. Support can restore access under policy; support cannot invent a ledger balance, recover a blockchain transaction, or ask a user to reveal a wallet secret.

## Post-recovery state

After recovery, the account displays revoked sessions, changed factors, frozen or cancelled requests, address-list status, API credential status, and the time when sensitive capabilities become available again.
