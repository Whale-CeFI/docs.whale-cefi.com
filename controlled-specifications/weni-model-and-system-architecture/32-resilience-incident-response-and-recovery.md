---
title: Resilience, Incident Response, and Recovery
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/weni/32-resilience-incident-response-and-recovery
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-32
description: >-
  Whale CeFi requires controlled degradation across chain ingestion, inference,
  policy, ledger, custody and user surfaces. Failover is valuable only when it
  preserves correctness and does not convert…
---

# Resilience, Incident Response, and Recovery

**Resilience, Incident Response, and Recovery** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 32 is part of the 29 July 2026 official release. Its `FM-32-xx` controls and `EVD-32-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Whale CeFi requires controlled degradation across chain ingestion, inference, policy, ledger, custody and user surfaces. Failover is valuable only when it preserves correctness and does not convert uncertainty into silent execution.

### Normative design rules

* RPC failover validates chain head and divergence before traffic switches.
* Redis buffers are not treated as durable transaction storage.
* Deposits, withdrawals and emergency exits have separate circuit breakers.
* RTO/RPO, data integrity and safe-state entry are measured per service.
* Recovery requires reconciliation and approval, not only process restart.

### Boundary / not claimed

A reported 50-millisecond provider switch is not an end-to-end resilience guarantee and requires measured correctness under failover.

## Reference architecture

| Layer | Component             | Responsibility                                                 |
| ----- | --------------------- | -------------------------------------------------------------- |
| L5    | Normal                | All evidence, policy, ledger and custody dependencies healthy. |
| L4    | Degraded read         | Some sources unavailable; education/research may continue.     |
| L3    | Action suspended      | Preparation and signing handoff disabled.                      |
| L2    | Financial safe mode   | Posting, deposits or withdrawals isolated by incident class.   |
| L1    | Manual reconciliation | Named operators investigate and approve corrections.           |
| L0    | Recovery              | Evidence, journal and state reconciled before reactivation.    |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component             | Responsibility / input                                         | Control invariant                                                         |
| --------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Normal                | All evidence, policy, ledger and custody dependencies healthy. | RPC failover validates chain head and divergence before traffic switches. |
| Degraded read         | Some sources unavailable; education/research may continue.     | Redis buffers are not treated as durable transaction storage.             |
| Action suspended      | Preparation and signing handoff disabled.                      | Deposits, withdrawals and emergency exits have separate circuit breakers. |
| Financial safe mode   | Posting, deposits or withdrawals isolated by incident class.   | RTO/RPO, data integrity and safe-state entry are measured per service.    |
| Manual reconciliation | Named operators investigate and approve corrections.           | Recovery requires reconciliation and approval, not only process restart.  |
| Recovery              | Evidence, journal and state reconciled before reactivation.    | RPC failover validates chain head and divergence before traffic switches. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode          | Failure effect                       | Primary control                  | Required state    |
| ---------- | --------------------- | ------------------------------------ | -------------------------------- | ----------------- |
| `FM-32-01` | Fast wrong failover   | Backup serves divergent chain        | Quorum validation                | **READ ONLY**     |
| `FM-32-02` | Database corruption   | Ledger state becomes unreliable      | PITR and journal verification    | **STOP POSTING**  |
| `FM-32-03` | Kafka outage          | Events lag or duplicate              | Outbox and replay-safe consumers | **DEGRADE**       |
| `FM-32-04` | Incident reactivation | System resumes before reconciliation | Recovery gate and signoff        | **REMAIN PAUSED** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                    |
| ----------- | ------------ | -------------------------------------------------------------------- |
| `EVD-32-01` | **ACCEPTED** | Service-level RTO/RPO and dependency map.                            |
| `EVD-32-02` | **ACCEPTED** | Multi-AZ, provider and data-store failover exercises.                |
| `EVD-32-03` | **ACCEPTED** | Ledger restore and full reconciliation drill.                        |
| `EVD-32-04` | **ACCEPTED** | Incident playbooks, roles, communications and evidence preservation. |
| `EVD-32-05` | **ACCEPTED** | Safe-mode entry/exit and emergency-withdrawal tests.                 |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
