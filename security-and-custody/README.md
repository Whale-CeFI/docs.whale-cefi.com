---
title: Security and Custody
canonical: https://whale-cefi.com/docs/security-and-custody
document_status: official-release
audience: public
last_reviewed: '2026-08-28'
description: >-
  Security and custody separate source-level assessment evidence, production
  deployment identity, asset authority, and customer entitlement.
---

# Security and Custody

![Custody Architecture](../.gitbook/assets/05-custody-boundary.png)

Custody controls private-key authority and external asset movement. The financial ledger controls what Whale CeFi owes. Neither system can replace the other.

Whale CeFi publishes two first-party security-assurance records with separate scopes and evidence boundaries.

| Record | Reported result | Exact boundary |
|---|---|---|
| [Security Assessment and Remediation Verification v3.0](security-assessment-and-remediation-verification.md) | 17 resolved findings and 31 passing checks | Exact internally assessed smart-contract build on isolated chain 31337; no production deployment coverage |
| [Operation BLACK TIDE - Isolated Remediation Verification](operation-black-tide-remediation-verification.md) | 10/10 resolved findings, 89/89 report-recorded tests, and a valid 22-event scenario chain | `ISOLATED_REVALIDATION` at `O1-ISOLATED`; no production equivalence; executable evidence pack not supplied with the public PDF |

Neither record is represented as an independent Eter or Hashlock audit. A report-scoped result does not establish that the same control is deployed or operating in production.

![Custody zones](../.gitbook/assets/custody-zones.svg)

## Vault taxonomy

| Vault class        | Purpose                                   | Default movement rule                                  |
| ------------------ | ----------------------------------------- | ------------------------------------------------------ |
| Deposit collection | Receive user deposits before sweep        | Inbound plus governed sweep only                       |
| Operating hot      | Bounded routine withdrawals               | Low balance, velocity and destination limits           |
| Warm settlement    | Refill hot and receive strategy returns   | Multi-approver, scheduled windows                      |
| Cold reserve       | Long-horizon reserve and recovery         | Highest quorum, delayed, offline approval              |
| Strategy           | Explicit protocol or validator allocation | Allowlisted contract and capped exposure               |
| Fee and treasury   | Platform-owned assets                     | Physically and logically separate from customer assets |

Customer principal, reward inventory, platform capital, and fees never share an undifferentiated vault balance without sub-ledger segregation and independent reconciliation.

## Transaction lifecycle

![Custody authorization](../.gitbook/assets/custody-authorization.svg)

1. A financial or operational service creates a typed transaction request.
2. Policy validates asset, source vault, destination, amount, velocity, purpose, user claim, and risk state.
3. Independent approvers review the decoded payload and evidence.
4. The signing system signs only the exact approved payload.
5. Broadcast and replacement transactions preserve the original request identity.
6. Independent chain observers determine finality.
7. Reconciliation settles the pending ledger state.

![Custody approval interface](../.gitbook/assets/weni-approval.svg)

## Authority separation

Policy administrators cannot approve their own policy change. Transaction initiators cannot satisfy approval quorum. Reconciliation operators cannot sign transactions. API credentials cannot change quorum or key membership. Emergency pausing cannot create a new destination.

## Key controls

Key shares are generated and held in isolated hardware-backed environments. No application service, WENI component, CI runner, or database can export signing material. Signer membership, device trust, recovery material, and quorum changes require independent approval and produce immutable evidence.

## Reconciliation

Custody balances and transaction states are reconciled against the ledger and independent blockchain observations continuously. An unexplained difference blocks new exposure and non-essential movement for the affected asset while preserving investigation and safe-exit paths.
