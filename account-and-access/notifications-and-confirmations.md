---
title: "Notifications and Confirmations"
description: "Notifications make material state changes visible outside the screen where they occurred. They are evidence and safety controls, not marketing decoration."
canonical: "https://docs.whale-cefi.com/account-and-access/notifications-and-confirmations"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Notifications and Confirmations

Notifications make material state changes visible outside the screen where they occurred. They are evidence and safety controls, not marketing decoration.

## Mandatory security events

Whale CeFi notifies the user about new logins, factor changes, recovery attempts, wallet links, address-list changes, plan confirmations, withdrawal requests, policy holds, broadcasts, finality, and material terms changes.

Every material message includes:

- event type and status;
- time and relevant account context;
- a safe route to inspect the event;
- what action is required, if any;
- what Whale CeFi never asks the user to provide;
- a case or operation ID.

Links point only to the canonical domain. A notification never asks the user to paste a seed phrase, private key, full one-time code, or remote-access credential.

## Confirmation is not the same as completion

An email or push confirmation can prove that the user acknowledged a request. It does not prove ledger posting, blockchain finality, custody approval, or reconciliation. The operation timeline shows each state separately.
