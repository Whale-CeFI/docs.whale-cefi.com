---
title: Deposit Credit and Financial Finality
canonical: >-
  https://docs.whale-cefi.com/yield-and-financial-transparency/deposit-credit-and-financial-finality
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Deposit Credit and Financial Finality

A deposit becomes an internal user liability only after the platform has identified the canonical asset, observed the transfer, applied the chain-specific finality policy, validated custody evidence and posted a balanced ledger transaction. Mempool visibility is a user-experience signal, not settlement.

## Control model

| Component or state | Responsibility                                                  |
| ------------------ | --------------------------------------------------------------- |
| Initiation         | Wallet submits a transfer to an approved address or contract.   |
| Observation        | On-chain ingester records transaction, asset and destination.   |
| Pending state      | UI exposes observed but non-spendable value.                    |
| Finality gate      | Network/action policy evaluates confirmations and reorg risk.   |
| Custody validation | Signed provider event or direct balance evidence is reconciled. |
| Ledger credit      | Atomic posting creates the platform asset and user liability.   |

## Invariants

* Use a unique deposit identity composed from chain, transaction and log/output index.
* Credit only allowlisted asset, network, destination and amount evidence.
* Finality is configured per chain and action; no universal 12-confirmation rule is assumed.
* Provider webhooks are authenticated, replay-protected and reconciled to independent chain evidence.
* A credited deposit publishes an event through a transactional outbox after the ledger commit.

## Failure containment

| Failure              | Effect                                      | Control                          | Response       |
| -------------------- | ------------------------------------------- | -------------------------------- | -------------- |
| Chain reorganisation | Previously observed transfer disappears     | Pending/finality state machine   | REVERT PENDING |
| Webhook replay       | Duplicate liability is created              | Idempotency and sequence control | REJECT         |
| Wrong token          | Unsupported asset is credited               | Canonical registry validation    | QUARANTINE     |
| Ledger/event split   | Credit exists but downstream state is stale | Transactional outbox             | REPLAY         |

## Operational evidence

* Mempool detection, pending state and MPC custody event integration.
* Per-chain deposit state machine and finality table.
* Webhook signature, replay and ordering test evidence.
* Reorg, duplicate-log and unsupported-token test vectors.
* End-to-end chain-to-ledger trace for each production asset.

## Boundary conditions

A transaction seen in the mempool or included in one block is not represented as a final credited deposit.
