---
title: Hard Policy Engine and Fail-Closed Decisions
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/21-hard-policy-engine-and-fail-closed-decisions
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-21
description: >-
  The Hard Policy Engine translates product, security, jurisdictional and risk
  constraints into signed policy-as-code. Its outputs are typed and enforceable:
  allow research, require clarification, requi
---

# Hard Policy Engine and Fail-Closed Decisions

**Hard Policy Engine and Fail-Closed Decisions** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 21 is part of the 29 July 2026 official release. Its `FM-21-xx` controls and `EVD-21-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The Hard Policy Engine translates product, security, jurisdictional and risk constraints into signed policy-as-code. Its outputs are typed and enforceable: allow research, require clarification, require review, block preparation or invalidate an existing action.

### Normative design rules

* The model cannot edit, suppress or override policy outcomes.
* Non-overridable controls are explicit and tested independently of UI.
* Override applies only to enumerated warnings and requires comprehension and audit.
* Policies are environment-, jurisdiction-, action- and version-specific.
* Policy rollout uses simulation, shadow evaluation and rollback before enforcement.

### Boundary / not claimed

A hard policy decision reduces defined risk; it is not a guarantee of profitability, legality or protocol safety under changing conditions.

## Reference architecture

| Layer | Component      | Responsibility                                                    |
| ----- | -------------- | ----------------------------------------------------------------- |
| L5    | Policy inputs  | Evidence coverage, freshness, risk, user limits and jurisdiction. |
| L4    | Signed rules   | Versioned code, thresholds, exceptions and ownership.             |
| L3    | Evaluation     | Deterministic outcome with decisive rule references.              |
| L2    | Obligations    | Warnings, comprehension, approvals and review depth.              |
| L1    | Decision state | ALLOW, CLARIFY, REVIEW, BLOCK or INVALIDATE.                      |
| L0    | Audit          | Policy hash, inputs, outcome and override status.                 |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component      | Responsibility / input                                            | Control invariant                                                                  |
| -------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Policy inputs  | Evidence coverage, freshness, risk, user limits and jurisdiction. | The model cannot edit, suppress or override policy outcomes.                       |
| Signed rules   | Versioned code, thresholds, exceptions and ownership.             | Non-overridable controls are explicit and tested independently of UI.              |
| Evaluation     | Deterministic outcome with decisive rule references.              | Override applies only to enumerated warnings and requires comprehension and audit. |
| Obligations    | Warnings, comprehension, approvals and review depth.              | Policies are environment-, jurisdiction-, action- and version-specific.            |
| Decision state | ALLOW, CLARIFY, REVIEW, BLOCK or INVALIDATE.                      | Policy rollout uses simulation, shadow evaluation and rollback before enforcement. |
| Audit          | Policy hash, inputs, outcome and override status.                 | The model cannot edit, suppress or override policy outcomes.                       |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode   | Failure effect                   | Primary control                  | Required state |
| ---------- | -------------- | -------------------------------- | -------------------------------- | -------------- |
| `FM-21-01` | Policy bypass  | Unsafe path reaches builder      | Service-side mandatory gate      | **BLOCK**      |
| `FM-21-02` | Rule conflict  | Two policies disagree            | Priority and deny-by-default     | **ESCALATE**   |
| `FM-21-03` | Bad rollout    | New threshold blocks valid users | Shadow/canary and rollback       | **REVERT**     |
| `FM-21-04` | Override abuse | Warning becomes routine bypass   | Narrow categories and monitoring | **REVOKE**     |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                        |
| ----------- | ------------ | -------------------------------------------------------- |
| `EVD-21-01` | **ACCEPTED** | Policy schema, rule repository and signing procedure.    |
| `EVD-21-02` | **ACCEPTED** | Non-overridable control and bypass test suite.           |
| `EVD-21-03` | **ACCEPTED** | Conflict, precedence, rollback and stale-policy tests.   |
| `EVD-21-04` | **ACCEPTED** | Override taxonomy, comprehension flow and audit metrics. |
| `EVD-21-05` | **ACCEPTED** | Policy coverage mapped to threat and legal requirements. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
