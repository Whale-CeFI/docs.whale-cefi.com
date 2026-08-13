---
title: "MPC, Vault, and Custody Policy Architecture"
description: "The staking contour is reported as hybrid custody using approved MPC custody provider infrastructure. Vault segregation, MPC policy, operator roles, transaction screening and reconciliation define the actual…"
canonical: "https://whale-cefi.com/docs/controlled-specifications/platform/24-mpc-vault-and-custody-policy-architecture"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-24"
---

# MPC, Vault, and Custody Policy Architecture

**MPC, Vault, and Custody Policy Architecture** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 24 is part of the 29 July 2026 official release. Its `FM-24-xx` controls and `EVD-24-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The staking contour is reported as hybrid custody using approved MPC custody provider infrastructure. Vault segregation, MPC policy, operator roles, transaction screening and reconciliation define the actual control; ‘3-of-5’ must be documented as the configured approval mechanism rather than casually relabelled multisig.

### Normative design rules

- Separate proposal, approval, policy administration and reconciliation roles.
- Allowlist destinations and bind approvals to decoded transaction intent.
- Treat automated policy as validation/veto, not an unexplained signing share.
- Rotate and revoke people, devices and policy access under controlled procedure.
- Continuously reconcile provider records with direct network state and ledger obligations.

### Boundary / not claimed

This document does not claim an on-chain 3-of-5 multisig unless deployment evidence proves that exact mechanism.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Vault segregation | Assets separated by entity, product, environment and risk. |
| L4 | MPC key shares | No complete private key exists in one operational location. |
| L3 | Policy rules | Asset, destination, amount, role, time and velocity constraints. |
| L2 | Approval quorum | Configured authorised approvers validate an exact request. |
| L1 | Broadcast evidence | Provider job maps to decoded on-chain transaction. |
| L0 | Reconciliation | Vault positions support ledger control accounts. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Vault segregation | Assets separated by entity, product, environment and risk. | Separate proposal, approval, policy administration and reconciliation roles. |
| MPC key shares | No complete private key exists in one operational location. | Allowlist destinations and bind approvals to decoded transaction intent. |
| Policy rules | Asset, destination, amount, role, time and velocity constraints. | Treat automated policy as validation/veto, not an unexplained signing share. |
| Approval quorum | Configured authorised approvers validate an exact request. | Rotate and revoke people, devices and policy access under controlled procedure. |
| Broadcast evidence | Provider job maps to decoded on-chain transaction. | Continuously reconcile provider records with direct network state and ledger obligations. |
| Reconciliation | Vault positions support ledger control accounts. | Separate proposal, approval, policy administration and reconciliation roles. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-24-01` | Policy bypass | Unauthorised transfer is approved | Quorum/allowlist/SoD | **BLOCK** |
| `FM-24-02` | Provider outage | Custody action cannot progress | Queue/degraded procedure | **HOLD** |
| `FM-24-03` | Role compromise | Attacker changes approval policy | Independent admin quorum | **FREEZE** |
| `FM-24-04` | Terminology error | Reviewers misunderstand authority | Actual control mapping | **CORRECT** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-24-01` | **ACCEPTED** | approved MPC custody provider integration, vaults, MPC and 3-of-5 policy concept. |
| `EVD-24-02` | **ACCEPTED** | approved MPC custody provider workspace, vault and policy export. |
| `EVD-24-03` | **ACCEPTED** | Authoriser, administrator, operator and auditor role matrix. |
| `EVD-24-04` | **ACCEPTED** | Destination allowlist and policy-bypass test evidence. |
| `EVD-24-05` | **ACCEPTED** | Provider-to-chain-to-ledger transaction trace. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
