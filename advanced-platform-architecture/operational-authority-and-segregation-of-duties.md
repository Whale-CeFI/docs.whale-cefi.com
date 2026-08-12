---
title: Operational Authority and Segregation of Duties
canonical: >-
  https://docs.whale-cefi.com/advanced-platform-architecture/operational-authority-and-segregation-of-duties
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Operational Authority and Segregation of Duties

Operational safety depends on who can propose, approve, deploy, pause, reconcile and recover. Automated systems detect and veto within policy; they never become an additional custody signer or sole financial authority.

## Control model

| Component or state | Responsibility                                                    |
| ------------------ | ----------------------------------------------------------------- |
| Propose            | Create change, transaction, deployment or reconciliation request. |
| Review             | Validate code, financial effect, evidence and policy.             |
| Approve            | Independent human or authorised quorum accepts the action.        |
| Execute            | Controlled automation performs the approved operation.            |
| Observe            | Monitoring detects deviation and records evidence.                |
| Recover            | Break-glass path restores service under separate authority.       |

## Invariants

* No individual can unilaterally change code, custody policy and financial records.
* Policy engines are veto/validation controls unless explicitly authorised otherwise.
* Break-glass access is time-bound, independently approved and exhaustively logged.
* Reconciliation corrections use new journal entries, never direct balance edits.
* Privileged actions carry ticket, reason, approvers and post-action verification.

## Failure containment

| Failure                 | Effect                                  | Control                 | Response |
| ----------------------- | --------------------------------------- | ----------------------- | -------- |
| Privilege concentration | One account controls entire platform    | Role separation/quorum  | REVOKE   |
| Automation overreach    | Policy node acts as signer              | Veto-only design        | BLOCK    |
| Break-glass abuse       | Emergency access becomes routine        | Expiry and review       | DISABLE  |
| Untracked correction    | Financial state changes without journal | Posting-only correction | REJECT   |

## Operational evidence

* Platform and custody RACI matrices.
* Privileged-role inventory and toxic-combination review.
* Break-glass issue, use and revocation exercise.
* Change/approval evidence for critical workflows.
* Quarterly access recertification and exception register.

## Boundary conditions

Approval quorum and signing mechanism are recorded independently: an MPC custody policy is never represented as an on-chain multisignature account.
