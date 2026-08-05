---
title: Observability, Auditability, and Service-Level Objectives
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/29-observability-auditability-and-service-level-objectives
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-29
description: >-
  Observability must explain whether users, balances and settlement are safe -
  not merely whether pods are running. Metrics, logs, traces, audit events and
  business invariants share correlation identiti
---

# Observability, Auditability, and Service-Level Objectives

**Observability, Auditability, and Service-Level Objectives** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 29 is part of the 29 July 2026 official release. Its `FM-29-xx` controls and `EVD-29-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Observability must explain whether users, balances and settlement are safe - not merely whether pods are running. Metrics, logs, traces, audit events and business invariants share correlation identities while sensitive data is minimised and access-controlled.

### Normative design rules

* Define SLOs from user journeys and financial safety states, not component uptime alone.
* Use stable correlation IDs across API, Kafka, ledger, provider and chain records.
* Redact secrets, raw tokens and unnecessary personal data before log ingestion.
* Alert on invariant breach with runbook and owner, not on every noisy symptom.
* Protect audit evidence from alteration by production operators.

### Boundary / not claimed

A millisecond component metric is not promoted to an end-to-end user or financial SLO without measured path evidence. TEAM TRANSCRIPT + TECHNICAL NORMALISATION

## Reference architecture

| Layer | Component           | Responsibility                                                    |
| ----- | ------------------- | ----------------------------------------------------------------- |
| L5    | Golden signals      | Latency, traffic, errors and saturation by service.               |
| L4    | Business invariants | Ledger balance, reconciliation, pending ageing and custody drift. |
| L3    | Distributed traces  | Request/event/transaction correlation across boundaries.          |
| L2    | Security telemetry  | Identity, policy, deployment and anomaly signals.                 |
| L1    | Audit trail         | Who changed what, why, under which approval.                      |
| L0    | SLO control         | Error budgets, alerts, ownership and release policy.              |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component           | Responsibility / input                                            | Control invariant                                                                       |
| ------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Golden signals      | Latency, traffic, errors and saturation by service.               | Define SLOs from user journeys and financial safety states, not component uptime alone. |
| Business invariants | Ledger balance, reconciliation, pending ageing and custody drift. | Use stable correlation IDs across API, Kafka, ledger, provider and chain records.       |
| Distributed traces  | Request/event/transaction correlation across boundaries.          | Redact secrets, raw tokens and unnecessary personal data before log ingestion.          |
| Security telemetry  | Identity, policy, deployment and anomaly signals.                 | Alert on invariant breach with runbook and owner, not on every noisy symptom.           |
| Audit trail         | Who changed what, why, under which approval.                      | Protect audit evidence from alteration by production operators.                         |
| SLO control         | Error budgets, alerts, ownership and release policy.              | Define SLOs from user journeys and financial safety states, not component uptime alone. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode         | Failure effect                      | Primary control       | Required state   |
| ---------- | -------------------- | ----------------------------------- | --------------------- | ---------------- |
| `FM-29-01` | Green infrastructure | Pods healthy while balances wrong   | Business invariants   | **INCIDENT**     |
| `FM-29-02` | Alert flood          | Critical signal is ignored          | SLO-based routing     | **TUNE**         |
| `FM-29-03` | Sensitive logging    | Tokens or PII leak                  | Redaction/data policy | **PURGE/ROTATE** |
| `FM-29-04` | Trace gap            | Transaction cannot be reconstructed | Correlation contract  | **FIX**          |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                        |
| ----------- | ------------ | -------------------------------------------------------- |
| `EVD-29-01` | **ACCEPTED** | Service and user-journey SLO catalogue.                  |
| `EVD-29-02` | **ACCEPTED** | Dashboard and alert ownership inventory.                 |
| `EVD-29-03` | **ACCEPTED** | End-to-end trace from user request through ledger/chain. |
| `EVD-29-04` | **ACCEPTED** | Log-redaction and sensitive-data scanning evidence.      |
| `EVD-29-05` | **ACCEPTED** | Immutable audit-log retention and access test.           |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
