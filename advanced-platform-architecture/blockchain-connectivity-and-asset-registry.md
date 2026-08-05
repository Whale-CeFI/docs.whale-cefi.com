---
title: Blockchain Connectivity and Asset Registry
canonical: >-
  https://docs.whale-cefi.com/advanced-platform-architecture/blockchain-connectivity-and-asset-registry
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  The platform operates authenticated connectivity for EVM and Solana network
  families through isolated adapters and a governed asset registry. A governed
  asset registry binds chain, canonical address,
---

# Blockchain Connectivity and Asset Registry

The platform operates authenticated connectivity for EVM and Solana network families through isolated adapters and a governed asset registry. A governed asset registry binds chain, canonical address, decimals, token behaviour, action eligibility, finality and custody support.

## Control model

| Component or state | Responsibility                                            |
| ------------------ | --------------------------------------------------------- |
| Network registry   | Chain ID, RPC quorum, finality and operational status.    |
| Asset registry     | Address/mint, decimals, symbol, behaviour and risk class. |
| Provider quorum    | Enterprise RPC endpoints, health and divergence state.    |
| Contract registry  | Whale CeFi pool/vault addresses and deployment versions.  |
| Action matrix      | Deposit, stake, withdraw or read-only eligibility.        |
| Change control     | Approval, validation and rollback for registry updates.   |

## Invariants

* Never select an asset by symbol alone; bind network and canonical address.
* Validate token decimals, fee-on-transfer, rebasing and return-value behaviour.
* Model public mempool, private flow and L2 sequencer visibility separately.
* Confirmation/finality policy is network- and action-specific.
* Registry changes are signed and independently reviewed before product exposure.

## Failure containment

| Failure             | Effect                               | Control                 | Response            |
| ------------------- | ------------------------------------ | ----------------------- | ------------------- |
| Address confusion   | Wrong token accepted                 | Chain/address allowlist | BLOCK               |
| RPC divergence      | Platform observes inconsistent state | Quorum/health policy    | Enter degraded mode |
| Non-standard token  | Ledger amount differs from transfer  | Balance-delta checks    | REJECT/ADJUST       |
| Registry compromise | Malicious contract becomes eligible  | Quorum and audit        | REVOKE              |

## Operational evidence

* Network and asset integration snapshot.
* Signed network/asset/contract registry export.
* Token-behaviour and address-validation test pack.
* RPC quorum, failover and divergence evidence.
* Chain-specific finality and reorg matrix.

## Boundary conditions

Solana actions use a dedicated adapter, finality policy, token identity model, and custody capability record; EVM assumptions are never reused implicitly.
