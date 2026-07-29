---
title: "Smart-Contract Architecture and Deployment Identity"
description: "Whale CeFi staking contracts are reported to use a UUPS upgradeability pattern. Safe operation requires exact source-to-bytecode identity, initialisation control, storage-layout compatibility, role…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/platform/25-smart-contract-architecture-and-deployment-identity"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "PLATFORM-25"
---

# Smart-Contract Architecture and Deployment Identity

**Smart-Contract Architecture and Deployment Identity** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 25 is part of the 29 July 2026 official release. Its `FM-25-xx` controls and `EVD-25-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Whale CeFi staking contracts are reported to use a UUPS upgradeability pattern. Safe operation requires exact source-to-bytecode identity, initialisation control, storage-layout compatibility, role boundaries, dependency pinning and a registry that ties every environment to its deployed implementation and proxy.

### Normative design rules

- Reproduce bytecode from the reviewed commit and pinned build environment.
- Disable implementation initialisation and test proxy initialisation exactly once.
- Validate UUPS authorisation and proxiable compatibility on every upgrade.
- Diff storage layout and state invariants before proposing implementation changes.
- Publish machine-readable deployment manifests for internal verification.

### Boundary / not claimed

UUPS is an upgradeability pattern, not a patent model and not evidence that a particular deployment is safe.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Reviewed source | Repository, commit, compiler and dependency lock. |
| L4 | Implementation | Versioned logic contract with disabled initialiser. |
| L3 | UUPS proxy | Stable address delegates to approved implementation. |
| L2 | Storage state | Layout compatibility and invariant preservation. |
| L1 | Roles | Owner, upgrader, pauser, operator and user permissions. |
| L0 | Deployment registry | Chain, address, bytecode hash and release identity. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Reviewed source | Repository, commit, compiler and dependency lock. | Reproduce bytecode from the reviewed commit and pinned build environment. |
| Implementation | Versioned logic contract with disabled initialiser. | Disable implementation initialisation and test proxy initialisation exactly once. |
| UUPS proxy | Stable address delegates to approved implementation. | Validate UUPS authorisation and proxiable compatibility on every upgrade. |
| Storage state | Layout compatibility and invariant preservation. | Diff storage layout and state invariants before proposing implementation changes. |
| Roles | Owner, upgrader, pauser, operator and user permissions. | Publish machine-readable deployment manifests for internal verification. |
| Deployment registry | Chain, address, bytecode hash and release identity. | Reproduce bytecode from the reviewed commit and pinned build environment. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-25-01` | Uninitialised contract | Attacker acquires privileged role | Initialisation controls | **BLOCK** |
| `FM-25-02` | Storage collision | Upgrade corrupts balances | Layout diff/invariants | **REJECT** |
| `FM-25-03` | Build mismatch | Reviewed source differs from chain | Reproducible bytecode | **NO-GO** |
| `FM-25-04` | Role sprawl | Privileged function lacks oversight | Role inventory/quorum | **REVOKE** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-25-01` | **ACCEPTED** | Independent auditor-issued report tying the reviewed contract scope to the exact repository, commit, build manifest, findings, and report hash. |
| `EVD-25-02` | **ACCEPTED** | UUPS pattern, timelock and pause capability. |
| `EVD-25-03` | **ACCEPTED** | Build manifest, compiler settings and dependency lock. |
| `EVD-25-04` | **ACCEPTED** | Proxy/implementation addresses and on-chain bytecode hashes. |
| `EVD-25-05` | **ACCEPTED** | Initialisation, role and storage-layout upgrade test evidence. |

## Related records

- [Controlled Technical Specifications](../platform-infrastructure-and-financial-core.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
