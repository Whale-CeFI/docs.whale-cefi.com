---
title: Upgrade, Timelock, Pause, and Governance Controls
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/26-upgrade-timelock-pause-and-governance-controls
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-26
description: >-
  Privileged contract operations must be slower, more observable and more
  independently approved than routine user activity. A reported 48-hour timelock
  creates review time only when proposals are decod
---

# Upgrade, Timelock, Pause, and Governance Controls

**Upgrade, Timelock, Pause, and Governance Controls** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 26 is part of the 29 July 2026 official release. Its `FM-26-xx` controls and `EVD-26-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Privileged contract operations must be slower, more observable and more independently approved than routine user activity. A reported 48-hour timelock creates review time only when proposals are decoded, monitored and cancellable before execution.

### Normative design rules

* Decode privileged calldata before approval; hashes alone are not a review interface.
* Timelock changes and bypasses require stricter authority than normal upgrades.
* Pause privileges are granular by function, product and asset where contract design permits.
* User exits, accounting and incident evidence remain operable under a pause plan.
* Every upgrade has a compatibility, rollback and communication runbook.

### Boundary / not claimed

A 48-hour delay is not by itself governance, and pause() is not by itself a complete incident-control design.

## Reference architecture

| Layer | Component            | Responsibility                                             |
| ----- | -------------------- | ---------------------------------------------------------- |
| L5    | Proposal             | Exact target, calldata, implementation hash and rationale. |
| L4    | Independent review   | Security, financial, legal and operational impact.         |
| L3    | Timelock queue       | Minimum delay and public/internal monitoring window.       |
| L2    | Execution quorum     | Authorised MPC or governance approval.                     |
| L1    | Post-check           | Bytecode, roles, invariants and service compatibility.     |
| L0    | Rollback/containment | Predefined safe implementation or pause scope.             |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component            | Responsibility / input                                     | Control invariant                                                                           |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Proposal             | Exact target, calldata, implementation hash and rationale. | Decode privileged calldata before approval; hashes alone are not a review interface.        |
| Independent review   | Security, financial, legal and operational impact.         | Timelock changes and bypasses require stricter authority than normal upgrades.              |
| Timelock queue       | Minimum delay and public/internal monitoring window.       | Pause privileges are granular by function, product and asset where contract design permits. |
| Execution quorum     | Authorised MPC or governance approval.                     | User exits, accounting and incident evidence remain operable under a pause plan.            |
| Post-check           | Bytecode, roles, invariants and service compatibility.     | Every upgrade has a compatibility, rollback and communication runbook.                      |
| Rollback/containment | Predefined safe implementation or pause scope.             | Decode privileged calldata before approval; hashes alone are not a review interface.        |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                     | Primary control          | Required state |
| ---------- | ------------------- | ---------------------------------- | ------------------------ | -------------- |
| `FM-26-01` | Malicious upgrade   | Contract logic expropriates assets | Timelock/quorum/review   | **CANCEL**     |
| `FM-26-02` | Emergency-key abuse | Pause or bypass becomes takeover   | Narrow role/monitoring   | **REVOKE**     |
| `FM-26-03` | Unsafe rollback     | Old code cannot read new state     | Forward/rollback testing | **CONTAIN**    |
| `FM-26-04` | Pause traps funds   | Users cannot exit during incident  | Exit-safe design         | **LIMIT**      |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                      |
| ----------- | ------------ | ------------------------------------------------------ |
| `EVD-26-01` | **ACCEPTED** | 48-hour timelock, MPC approval and pause() capability. |
| `EVD-26-02` | **ACCEPTED** | Deployed role graph and timelock configuration.        |
| `EVD-26-03` | **ACCEPTED** | Decoded proposal, cancellation and execution examples. |
| `EVD-26-04` | **ACCEPTED** | Upgrade/storage/invariant and rollback rehearsal.      |
| `EVD-26-05` | **ACCEPTED** | Granular pause and emergency-exit verification.        |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
