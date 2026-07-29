---
title: "Authentication and Sessions"
description: "Authentication proves control of an account session. It is deliberately separate from product consent, wallet signing, custody approval, and administrative authority."
canonical: "https://docs.whale-cefi.com/account-and-access/authentication-and-sessions"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Authentication and Sessions

Authentication proves control of an account session. It is deliberately separate from product consent, wallet signing, custody approval, and administrative authority.

## Authentication layers

- a unique password or passkey;
- a possession-based second factor;
- risk-based device and session checks;
- step-up authentication for sensitive changes;
- independent confirmation for withdrawals and recovery;
- signed wallet challenges when a wallet is linked.

A wallet-link challenge is domain-bound, nonce-bound, expiring, and human-readable. It proves control of an address for the stated purpose; it is not a token approval, transfer, blind signature, or permanent delegation.

## Session controls

The account shows active sessions, device class, approximate location, creation time, last activity, and security status. A user can terminate an individual session or all other sessions. Password, factor, recovery, or high-risk profile changes can revoke existing sessions automatically.

## Step-up events

Step-up authentication is required for actions such as adding a withdrawal address, changing security factors, exporting sensitive records, creating an API credential, changing an institutional mandate, or confirming an unusual withdrawal.

## Suspicious activity

When the risk engine detects an unusual login or session transition, it can challenge, limit, or block the operation. A challenge never asks for a seed phrase or private key. A blocked event creates a traceable security record and a recovery route.
