---
title: Custody, Contract Governance, and Audit Evidence
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/31-custody-contract-governance-and-audit-evidence
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-31
description: >-
  Whale CeFi separates the non-custodial WENI action-preparation boundary from
  the reported hybrid-custody staking contour. approved MPC custody
  provider-based key policy, contract administration, upgra
---

# Custody, Contract Governance, and Audit Evidence

**Custody, Contract Governance, and Audit Evidence** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 31 is part of the 29 July 2026 official release. Its `FM-31-xx` controls and `EVD-31-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Whale CeFi separates the non-custodial WENI action-preparation boundary from the reported hybrid-custody staking contour. approved MPC custody provider-based key policy, contract administration, upgrades, pause powers and audited code require one explicit authority map.

### Normative design rules

* Distinguish MPC policy approvals from an on-chain multisig threshold.
* Separate proposer, approver, deployer, pauser and reconciler duties.
* Emergency pause authority is narrow, logged and paired with recovery/withdrawal design.
* A 48-hour timelock is verified from deployed contracts and governance configuration, not prose.
* Represent audit findings exactly as recorded by the attached report.

### Boundary / not claimed

The existence of a independent auditor audit is affirmed. The attached version does not by itself evidence that all acknowledged findings were later resolved.

## Reference architecture

| Layer | Component        | Responsibility                                                                          |
| ----- | ---------------- | --------------------------------------------------------------------------------------- |
| L5    | WENI contour     | Read, analyse, simulate and prepare; no signing key.                                    |
| L4    | Custody contour  | approved MPC custody provider vaults, MPC policy and authorised operators.              |
| L3    | Contract contour | UUPS implementation, admin, timelock and pause roles.                                   |
| L2    | Policy veto      | Automated monitoring may block workflow but should not silently become a signing share. |
| L1    | Audit evidence   | independent auditor report bound to repository commit and audited file.                 |
| L0    | Deployment proof | Required mapping from audited commit to live bytecode and roles.                        |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component        | Responsibility / input                                                                  | Control invariant                                                                               |
| ---------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| WENI contour     | Read, analyse, simulate and prepare; no signing key.                                    | Distinguish MPC policy approvals from an on-chain multisig threshold.                           |
| Custody contour  | approved MPC custody provider vaults, MPC policy and authorised operators.              | Separate proposer, approver, deployer, pauser and reconciler duties.                            |
| Contract contour | UUPS implementation, admin, timelock and pause roles.                                   | Emergency pause authority is narrow, logged and paired with recovery/withdrawal design.         |
| Policy veto      | Automated monitoring may block workflow but should not silently become a signing share. | A 48-hour timelock is verified from deployed contracts and governance configuration, not prose. |
| Audit evidence   | independent auditor report bound to repository commit and audited file.                 | Represent audit findings exactly as recorded by the attached report.                            |
| Deployment proof | Required mapping from audited commit to live bytecode and roles.                        | Distinguish MPC policy approvals from an on-chain multisig threshold.                           |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode              | Failure effect                            | Primary control                        | Required state   |
| ---------- | ------------------------- | ----------------------------------------- | -------------------------------------- | ---------------- |
| `FM-31-01` | Custody-policy compromise | Assets move under stolen authority        | MPC policy, quorum and device controls | **FREEZE**       |
| `FM-31-02` | Upgrade abuse             | Implementation changes after review       | Timelock, quorum and monitoring        | **BLOCK/ALERT**  |
| `FM-31-03` | Pause abuse               | Users cannot exit                         | Scoped roles and emergency withdrawal  | **ESCALATE**     |
| `FM-31-04` | Audit mismatch            | Live bytecode differs from audited commit | Deployment attestation                 | **DO NOT CLAIM** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                                                 |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------- |
| `EVD-31-01` | **ACCEPTED** | 45-page independent auditor report, delivered/verified 22 December 2025, commit 6abbb72e…c4510c2. |
| `EVD-31-02` | **ACCEPTED** | Attached report summary records 9 acknowledged findings and 0 resolved.                           |
| `EVD-31-03` | **ACCEPTED** | Team reports later remediation and re-audit; closure artefact remains required.                   |
| `EVD-31-04` | **ACCEPTED** | Live proxy/implementation bytecode and role manifest tied to audited commit.                      |
| `EVD-31-05` | **ACCEPTED** | approved MPC custody provider vault, MPC policy, quorum and separation-of-duties evidence.        |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
