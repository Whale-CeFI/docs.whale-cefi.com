---
title: Incident Response and Circuit-Breaker Architecture
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/platform/31-incident-response-and-circuit-breaker-architecture
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-31
---

# Incident Response and Circuit-Breaker Architecture

**Incident Response and Circuit-Breaker Architecture** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 31 is part of the 29 July 2026 official release. Its `FM-31-xx` controls and `EVD-31-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Incident response is a controlled state transition across detection, containment, financial authority, custody, contracts, communications, recovery and evidence preservation. Circuit breakers are scoped capabilities, not one global off switch.

### Normative design rules

* Define breakers separately for deposits, withdrawals, staking, rewards and administrative changes.
* Automatic triggers may contain risk but require bounded scope and human escalation.
* Preserve logs, snapshots and decision evidence before destructive remediation.
* Communications state what is affected, what remains safe and when the next update occurs.
* Reopening requires root-cause containment, reconciliation and independent approval.

### Boundary / not claimed

‘Pause everything’ is not accepted as the sole incident strategy, especially when it can prevent legitimate withdrawals.

## Reference architecture

| Layer | Component      | Responsibility                                                |
| ----- | -------------- | ------------------------------------------------------------- |
| L5    | Normal         | All authorised capabilities operate within SLO and invariant. |
| L4    | Degraded       | Read paths continue; risky writes or providers are limited.   |
| L3    | Read-only      | No new financial instructions are accepted.                   |
| L2    | Scoped pause   | Affected asset, chain, product or contract action stops.      |
| L1    | Manual control | Reconciliation and approvals require named operators.         |
| L0    | Recovery       | Evidence, reconciliation, approval and staged reopening.      |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component      | Responsibility / input                                        | Control invariant                                                                                  |
| -------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Normal         | All authorised capabilities operate within SLO and invariant. | Define breakers separately for deposits, withdrawals, staking, rewards and administrative changes. |
| Degraded       | Read paths continue; risky writes or providers are limited.   | Automatic triggers may contain risk but require bounded scope and human escalation.                |
| Read-only      | No new financial instructions are accepted.                   | Preserve logs, snapshots and decision evidence before destructive remediation.                     |
| Scoped pause   | Affected asset, chain, product or contract action stops.      | Communications state what is affected, what remains safe and when the next update occurs.          |
| Manual control | Reconciliation and approvals require named operators.         | Reopening requires root-cause containment, reconciliation and independent approval.                |
| Recovery       | Evidence, reconciliation, approval and staged reopening.      | Define breakers separately for deposits, withdrawals, staking, rewards and administrative changes. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                         | Primary control       | Required state |
| ---------- | ------------------- | -------------------------------------- | --------------------- | -------------- |
| `FM-31-01` | Over-broad breaker  | Safe user exits are disabled           | Scoped controls       | **NARROW**     |
| `FM-31-02` | Under-broad breaker | Attack continues through adjacent path | Dependency map        | **EXPAND**     |
| `FM-31-03` | No authority        | Team debates who may pause             | Incident RACI         | **ESCALATE**   |
| `FM-31-04` | Evidence loss       | Root cause cannot be proven            | Forensic preservation | **ISOLATE**    |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                              |
| ----------- | ------------ | -------------------------------------------------------------- |
| `EVD-31-01` | **ACCEPTED** | Read-only, pause and manual-reconciliation modes.              |
| `EVD-31-02` | **ACCEPTED** | Incident severity, authority and circuit-breaker matrix.       |
| `EVD-31-03` | **ACCEPTED** | Contract, custody and platform containment runbooks.           |
| `EVD-31-04` | **ACCEPTED** | Tabletop plus technical exercise for a custody/chain incident. |
| `EVD-31-05` | **ACCEPTED** | Recovery, reconciliation and communication evidence pack.      |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
