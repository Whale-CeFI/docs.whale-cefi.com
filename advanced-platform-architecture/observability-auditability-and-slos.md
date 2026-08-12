---
title: Observability, Auditability, and SLOs
canonical: >-
  https://docs.whale-cefi.com/advanced-platform-architecture/observability-auditability-and-slos
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Observability, Auditability, and SLOs

Observability explains whether users, balances, and settlement are safe — not merely whether workloads are running. Metrics, logs, traces, audit events and business invariants share correlation identities while sensitive data is minimised and access-controlled.

## Control model

| Component or state  | Responsibility                                                    |
| ------------------- | ----------------------------------------------------------------- |
| Golden signals      | Latency, traffic, errors and saturation by service.               |
| Business invariants | Ledger balance, reconciliation, pending ageing and custody drift. |
| Distributed traces  | Request/event/transaction correlation across boundaries.          |
| Security telemetry  | Identity, policy, deployment and anomaly signals.                 |
| Audit trail         | Who changed what, why, under which approval.                      |
| SLO control         | Error budgets, alerts, ownership and release policy.              |

## Invariants

* Define SLOs from user journeys and financial safety states, not component uptime alone.
* Use stable correlation IDs across API, Kafka, ledger, provider and chain records.
* Redact secrets, raw tokens and unnecessary personal data before log ingestion.
* Alert on invariant breach with runbook and owner, not on every noisy symptom.
* Protect audit evidence from alteration by production operators.

## Failure containment

| Failure              | Effect                              | Control               | Response     |
| -------------------- | ----------------------------------- | --------------------- | ------------ |
| Green infrastructure | Pods healthy while balances wrong   | Business invariants   | INCIDENT     |
| Alert flood          | Critical signal is ignored          | SLO-based routing     | TUNE         |
| Sensitive logging    | Tokens or PII leak                  | Redaction/data policy | PURGE/ROTATE |
| Trace gap            | Transaction cannot be reconstructed | Correlation contract  | FIX          |

## Operational evidence

* Service and user-journey SLO catalogue.
* Dashboard and alert ownership inventory.
* End-to-end trace from user request through ledger/chain.
* Log-redaction and sensitive-data scanning evidence.
* Immutable audit-log retention and access test.

## Boundary conditions

A millisecond component metric is not promoted to an end-to-end user or financial SLO without measured path evidence.
