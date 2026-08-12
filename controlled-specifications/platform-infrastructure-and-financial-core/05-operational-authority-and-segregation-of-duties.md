---
title: Operational Authority and Segregation of Duties
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/05-operational-authority-and-segregation-of-duties
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-05
---

# Operational Authority and Segregation of Duties

**Operational Authority and Segregation of Duties** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 05 is part of the 29 July 2026 official release. Its `FM-05-xx` controls and `EVD-05-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

05 Operational safety depends on who can propose, approve, deploy, pause, reconcile and recover. Automated systems may detect and veto; they should not silently become an additional custody signer or sole financial authority.

### Normative design rules

* No individual can unilaterally change code, custody policy and financial records.
* Policy engines are veto/validation controls unless explicitly authorised otherwise.
* Break-glass access is time-bound, independently approved and exhaustively logged.
* Reconciliation corrections use new journal entries, never direct balance edits.
* Privileged actions carry ticket, reason, approvers and post-action verification.

### Boundary / not claimed

A 3-of-5 approval policy is not automatically an on-chain multisig and must be documented according to the actual approved MPC custody provider/MPC mechanism.

## Reference architecture

| Layer | Component | Responsibility                                                    |
| ----- | --------- | ----------------------------------------------------------------- |
| L5    | Propose   | Create change, transaction, deployment or reconciliation request. |
| L4    | Review    | Validate code, financial effect, evidence and policy.             |
| L3    | Approve   | Independent human or authorised quorum accepts the action.        |
| L2    | Execute   | Controlled automation performs the approved operation.            |
| L1    | Observe   | Monitoring detects deviation and records evidence.                |
| L0    | Recover   | Break-glass path restores service under separate authority.       |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input                                            | Control invariant                                                                   |
| --------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Propose   | Create change, transaction, deployment or reconciliation request. | No individual can unilaterally change code, custody policy and financial records.   |
| Review    | Validate code, financial effect, evidence and policy.             | Policy engines are veto/validation controls unless explicitly authorised otherwise. |
| Approve   | Independent human or authorised quorum accepts the action.        | Break-glass access is time-bound, independently approved and exhaustively logged.   |
| Execute   | Controlled automation performs the approved operation.            | Reconciliation corrections use new journal entries, never direct balance edits.     |
| Observe   | Monitoring detects deviation and records evidence.                | Privileged actions carry ticket, reason, approvers and post-action verification.    |
| Recover   | Break-glass path restores service under separate authority.       | No individual can unilaterally change code, custody policy and financial records.   |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode            | Failure effect                          | Primary control         | Required state |
| ---------- | ----------------------- | --------------------------------------- | ----------------------- | -------------- |
| `FM-05-01` | Privilege concentration | One account controls entire platform    | Role separation/quorum  | **REVOKE**     |
| `FM-05-02` | Automation overreach    | Policy node acts as signer              | Veto-only design        | **BLOCK**      |
| `FM-05-03` | Break-glass abuse       | Emergency access becomes routine        | Expiry and review       | **DISABLE**    |
| `FM-05-04` | Untracked correction    | Financial state changes without journal | Posting-only correction | **REJECT**     |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                        |
| ----------- | ------------ | -------------------------------------------------------- |
| `EVD-05-01` | **ACCEPTED** | Platform and custody RACI matrices.                      |
| `EVD-05-02` | **ACCEPTED** | Privileged-role inventory and toxic-combination review.  |
| `EVD-05-03` | **ACCEPTED** | Break-glass issue, use and revocation exercise.          |
| `EVD-05-04` | **ACCEPTED** | Change/approval evidence for critical workflows.         |
| `EVD-05-05` | **ACCEPTED** | Quarterly access recertification and exception register. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
