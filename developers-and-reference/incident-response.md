---
title: "Incident Response"
description: "The exact operational states used when safety, availability or financial integrity is uncertain."
canonical: "https://docs.whale-cefi.com/developers-and-reference/incident-response"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Incident Response

The exact operational states used when safety, availability or financial integrity is uncertain.

Whale CeFi does not treat every incident as the same outage. A problem can affect one asset, one network, one provider, one product or one capability while safe functions remain available.

| State          | What changes                                                                       |
| -------------- | ---------------------------------------------------------------------------------- |
| Normal         | All authorised capabilities operate within limits.                                 |
| Degraded       | Safe reads continue; affected providers or writes are limited.                     |
| Read-only      | New financial instructions stop while balances and evidence remain visible.        |
| Scoped pause   | One affected asset, network, product or contract action stops.                     |
| Manual control | Named operators reconcile and approve bounded actions.                             |
| Recovery       | Root cause, balances and external settlement are verified before staged reopening. |

Every public notice states what is affected, what remains available, what users should do and when the next update appears.

## Authority and evidence

The incident record binds severity, commander, financial authority, custody authority, technical leads, communication owner, start time, evidence preservation, containment decisions and next-review time.

Reopening requires root-cause containment, ledger and settlement reconciliation, restored control evidence, independent approval and staged exposure. The post-incident record preserves the timeline, impact, corrective actions and due dates.
