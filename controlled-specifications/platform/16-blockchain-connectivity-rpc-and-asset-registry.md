---
title: "Blockchain Connectivity, RPC, and Asset Registry"
description: "The platform reports Ethereum, Arbitrum, Optimism and Base support with active Solana connectivity and analysis. A governed asset registry binds chain, canonical address, decimals, token behaviour, action eligibility…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/platform/16-blockchain-connectivity-rpc-and-asset-registry"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-16"
---

# Blockchain Connectivity, RPC, and Asset Registry

**Blockchain Connectivity, RPC, and Asset Registry** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 16 is part of the 29 July 2026 official release. Its `FM-16-xx` controls and `EVD-16-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The platform reports Ethereum, Arbitrum, Optimism and Base support with active Solana connectivity and analysis. A governed asset registry binds chain, canonical address, decimals, token behaviour, action eligibility, finality and custody support.

### Normative design rules

- Never select an asset by symbol alone; bind network and canonical address.
- Validate token decimals, fee-on-transfer, rebasing and return-value behaviour.
- Model public mempool, private flow and L2 sequencer visibility separately.
- Confirmation/finality policy is network- and action-specific.
- Registry changes are signed and independently reviewed before product exposure.

### Boundary / not claimed

Solana capabilities are represented only where the signed route registry marks deposit, earning, custody or analysis as active.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Network registry | Chain ID, RPC quorum, finality and operational status. |
| L4 | Asset registry | Address/mint, decimals, symbol, behaviour and risk class. |
| L3 | Provider quorum | Enterprise RPC endpoints, health and divergence state. |
| L2 | Contract registry | Whale CeFi pool/vault addresses and deployment versions. |
| L1 | Action matrix | Deposit, stake, withdraw or read-only eligibility. |
| L0 | Change control | Approval, validation and rollback for registry updates. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Network registry | Chain ID, RPC quorum, finality and operational status. | Never select an asset by symbol alone; bind network and canonical address. |
| Asset registry | Address/mint, decimals, symbol, behaviour and risk class. | Validate token decimals, fee-on-transfer, rebasing and return-value behaviour. |
| Provider quorum | Enterprise RPC endpoints, health and divergence state. | Model public mempool, private flow and L2 sequencer visibility separately. |
| Contract registry | Whale CeFi pool/vault addresses and deployment versions. | Confirmation/finality policy is network- and action-specific. |
| Action matrix | Deposit, stake, withdraw or read-only eligibility. | Registry changes are signed and independently reviewed before product exposure. |
| Change control | Approval, validation and rollback for registry updates. | Never select an asset by symbol alone; bind network and canonical address. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-16-01` | Address confusion | Wrong token accepted | Chain/address allowlist | **BLOCK** |
| `FM-16-02` | RPC divergence | Platform observes inconsistent state | Quorum/health policy | **DEGRADE** |
| `FM-16-03` | Non-standard token | Ledger amount differs from transfer | Balance-delta checks | **REJECT/ADJUST** |
| `FM-16-04` | Registry compromise | Malicious contract becomes eligible | Quorum and audit | **REVOKE** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-16-01` | **ACCEPTED** | Network and asset integration snapshot. |
| `EVD-16-02` | **ACCEPTED** | Signed network/asset/contract registry export. |
| `EVD-16-03` | **ACCEPTED** | Token-behaviour and address-validation test pack. |
| `EVD-16-04` | **ACCEPTED** | RPC quorum, failover and divergence evidence. |
| `EVD-16-05` | **ACCEPTED** | Chain-specific finality and reorg matrix. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
