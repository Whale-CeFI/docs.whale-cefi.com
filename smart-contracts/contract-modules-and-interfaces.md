---
title: Contract Modules and Interfaces
canonical: https://docs.whale-cefi.com/smart-contracts/contract-modules-and-interfaces
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  The responsibility, inputs, outputs, and authority ceiling of each production
  contract.
---

# Contract Modules and Interfaces

Each module exposes a narrow interface. Cross-module calls are typed, versioned, and protected against reentrancy and partial success.

## AssetRegistry

The registry key is a CAIP-compatible asset identifier containing namespace, chain reference, token standard, and canonical address. A symbol is display metadata only. Each record stores decimals, transfer behavior, permit support, rebasing behavior, fee-on-transfer behavior, pause state, adapter address, activation block, and supersession record.

An asset cannot be activated until its adapter test suite passes balance-delta, return-value, decimal, callback, reentrancy, and extreme-amount tests.

## PlanRegistry

A plan version is append-only. It binds asset, vault implementation hash, term, rate unit, reward policy, capacity, exit semantics, fee schedule, and risk disclosure. A position references one version forever. Disabling a version stops new positions and does not rewrite existing positions.

## VaultFactory

The factory deploys approved immutable implementations with CREATE2. Salt derivation includes chain ID, asset ID, plan version, implementation hash, and deployment nonce. The expected address is computed before funding. Factory authority can approve a new implementation hash only through the governance timelock.

## FlexibleVault

The flexible vault implements preview, maximum, deposit, mint, withdraw, and redeem behavior consistent with ERC-4626. Global and account-level limits are reflected in maximum functions. Conversion uses a fixed virtual-asset and virtual-share offset, EIP-4626-compliant directional rounding, caller-supplied minimum-share or maximum-asset bounds, and explicit empty-vault and donation invariants. An unsolicited donation changes the common exchange rate but cannot create an attacker-specific claim or zero a compliant depositor's shares.

## LockedPositionManager

Each position contains owner, asset, principal, product version, start time, maturity, accrued reward, reward-claim state, and closure state. Position receipts are non-transferable unless the product and compliance perimeter explicitly permit transfer. Early exit is impossible unless the accepted plan version defines an exact penalty and liquidity path.

## RewardEscrow

Escrow inventory is partitioned by asset, cohort, and funding policy. Release cannot exceed funded inventory. Unused inventory returns only after all cohort claims expire or settle. Principal vaults never source rewards by consuming another user's principal.

## StrategyRouter

Adapters receive explicit caps by asset, protocol, chain, maturity bucket, and risk tier. The router validates adapter identity, current status, exposure, slippage, and deadline. It cannot call arbitrary targets or calldata. Return assets are measured by balance delta and reconciled to adapter-reported positions.

## WithdrawalQueue

Requests are uniquely identified and cannot be fulfilled twice. A request moves through `Requested → Reserved → Authorized → Broadcast → Finalized → Claimable → Settled` or a terminal failure state. Cancellation is allowed only before external commitment and restores the exact reserved claim through a compensating transition.
