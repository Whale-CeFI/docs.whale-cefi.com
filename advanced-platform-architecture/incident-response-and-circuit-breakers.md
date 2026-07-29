---
title: "Incident Response and Circuit Breakers"
description: "Incident response is a controlled state transition across detection, containment, financial authority, custody, contracts, communications, recovery and evidence preservation. Circuit breakers are scoped capabilities,…"
canonical: "https://docs.whale-cefi.com/advanced-platform-architecture/incident-response-and-circuit-breakers"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Incident Response and Circuit Breakers

Incident response is a controlled state transition across detection, containment, financial authority, custody, contracts, communications, recovery and evidence preservation. Circuit breakers are scoped capabilities, not one global off switch.

## Control model

| Component or state | Responsibility                                                |
| ------------------ | ------------------------------------------------------------- |
| Normal             | All authorised capabilities operate within SLO and invariant. |
| Degraded           | Read paths continue; risky writes or providers are limited.   |
| Read-only          | No new financial instructions are accepted.                   |
| Scoped pause       | Affected asset, chain, product or contract action stops.      |
| Manual control     | Reconciliation and approvals require named operators.         |
| Recovery           | Evidence, reconciliation, approval and staged reopening.      |

## Invariants

* Define breakers separately for deposits, withdrawals, staking, rewards and administrative changes.
* Automatic triggers may contain risk but require bounded scope and human escalation.
* Preserve logs, snapshots and decision evidence before destructive remediation.
* Communications state what is affected, what remains safe and when the next update occurs.
* Reopening requires root-cause containment, reconciliation and independent approval.

## Failure containment

| Failure             | Effect                                 | Control               | Response |
| ------------------- | -------------------------------------- | --------------------- | -------- |
| Over-broad breaker  | Safe user exits are disabled           | Scoped controls       | NARROW   |
| Under-broad breaker | Attack continues through adjacent path | Dependency map        | EXPAND   |
| No authority        | Team debates who may pause             | Incident RACI         | ESCALATE |
| Evidence loss       | Root cause cannot be proven            | Forensic preservation | ISOLATE  |

## Operational evidence

* Read-only, pause and manual-reconciliation modes.
* Incident severity, authority and circuit-breaker matrix.
* Contract, custody and platform containment runbooks.
* Tabletop plus technical exercise for a custody/chain incident.
* Recovery, reconciliation and communication evidence pack.

## Boundary conditions

‘Pause everything’ is not accepted as the sole incident strategy, especially when it can prevent legitimate withdrawals.
