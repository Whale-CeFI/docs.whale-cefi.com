---
title: Sovereign Cognitive Memory and Consent
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/25-sovereign-cognitive-memory-and-consent
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-25
description: >-
  WENI memory combines explicit profile data, verified competency, episodic
  summaries and vector retrieval under user control. Memory is permissioned,
  purpose-limited and inspectable; it is not an unlim
---

# Sovereign Cognitive Memory and Consent

**Sovereign Cognitive Memory and Consent** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 25 is part of the 29 July 2026 official release. Its `FM-25-xx` controls and `EVD-25-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

WENI memory combines explicit profile data, verified competency, episodic summaries and vector retrieval under user control. Memory is permissioned, purpose-limited and inspectable; it is not an unlimited transcript archive.

### Normative design rules

* No sensitive inferred trait persists without source, confidence, purpose and expiry.
* Resetting personalisation is distinguished from deleting immutable financial records.
* Vector entries never become the sole canonical copy of user facts.
* Cross-surface memory use requires field-level purpose and consent.
* User correction updates subsequent behaviour and preserves an auditable correction history.

### Boundary / not claimed

‘Sovereign memory’ does not mean every record can be instantly erased regardless of legal, security or ledger retention duties.

## Reference architecture

| Layer | Component           | Responsibility                                           |
| ----- | ------------------- | -------------------------------------------------------- |
| L5    | Explicit profile    | Goals, constraints and user-correctable preferences.     |
| L4    | Competency graph    | Verified assessments, modules and credential state.      |
| L3    | Episodic memory     | Purpose-scoped summaries with source and expiry.         |
| L2    | Vector index        | Retrieval aid with provenance back to canonical records. |
| L1    | Brain Control Panel | Inspect, correct, export, reset and request deletion.    |
| L0    | Retention authority | Legal, security and product-specific lifecycle rules.    |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component           | Responsibility / input                                   | Control invariant                                                                           |
| ------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Explicit profile    | Goals, constraints and user-correctable preferences.     | No sensitive inferred trait persists without source, confidence, purpose and expiry.        |
| Competency graph    | Verified assessments, modules and credential state.      | Resetting personalisation is distinguished from deleting immutable financial records.       |
| Episodic memory     | Purpose-scoped summaries with source and expiry.         | Vector entries never become the sole canonical copy of user facts.                          |
| Vector index        | Retrieval aid with provenance back to canonical records. | Cross-surface memory use requires field-level purpose and consent.                          |
| Brain Control Panel | Inspect, correct, export, reset and request deletion.    | User correction updates subsequent behaviour and preserves an auditable correction history. |
| Retention authority | Legal, security and product-specific lifecycle rules.    | No sensitive inferred trait persists without source, confidence, purpose and expiry.        |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode     | Failure effect                       | Primary control                | Required state |
| ---------- | ---------------- | ------------------------------------ | ------------------------------ | -------------- |
| `FM-25-01` | Memory poisoning | Malicious interaction persists       | Source and confidence controls | **QUARANTINE** |
| `FM-25-02` | Over-retention   | Sensitive context outlives purpose   | TTL and deletion workflow      | **DELETE**     |
| `FM-25-03` | False inference  | Risk preference becomes assumed fact | User confirmation              | **DOWNGRADE**  |
| `FM-25-04` | Vector leakage   | Embedding reveals private content    | Isolation and access controls  | **INCIDENT**   |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                       |
| ----------- | ------------ | ------------------------------------------------------- |
| `EVD-25-01` | **ACCEPTED** | Memory schema, purpose taxonomy and retention schedule. |
| `EVD-25-02` | **ACCEPTED** | Brain Control Panel functional specification.           |
| `EVD-25-03` | **ACCEPTED** | Correction, export, reset and deletion evidence.        |
| `EVD-25-04` | **ACCEPTED** | Vector-store isolation and inversion assessment.        |
| `EVD-25-05` | **ACCEPTED** | Cross-surface consent and tenant-separation tests.      |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
