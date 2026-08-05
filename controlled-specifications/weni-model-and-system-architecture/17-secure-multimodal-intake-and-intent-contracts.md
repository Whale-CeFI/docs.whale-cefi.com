---
title: Secure Multimodal Intake and Intent Contracts
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/17-secure-multimodal-intake-and-intent-contracts
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-17
description: >-
  Text, voice, screen, documents, contract code and authorised account context
  enter through different consent and trust classes. WENI converts ambiguous
  expression into a typed Intent Contract that rem
---

# Secure Multimodal Intake and Intent Contracts

**Secure Multimodal Intake and Intent Contracts** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 17 is part of the 29 July 2026 official release. Its `FM-17-xx` controls and `EVD-17-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Text, voice, screen, documents, contract code and authorised account context enter through different consent and trust classes. WENI converts ambiguous expression into a typed Intent Contract that remains a hypothesis until confirmed.

### Normative design rules

* Emotional language is labelled, not deleted; it may indicate a required safety flow.
* Screen analysis defaults to selected region or app context, not unrestricted device capture.
* Wallet connection and profile linkage require explicit, revocable user action.
* Use SIWE-style domain-bound authentication rather than ambiguous personal\_sign prompts where applicable.
* No material amount, asset, chain or risk constraint is inferred silently.

### Boundary / not claimed

Intent extraction does not prove the user understands or endorses the resulting action.

## Reference architecture

| Layer | Component            | Responsibility                                               |
| ----- | -------------------- | ------------------------------------------------------------ |
| L5    | Consent gateway      | Surface-, modality- and purpose-specific permission.         |
| L4    | Sanitisation         | Malware, secrets, prompt injection and data-loss controls.   |
| L3    | Transcription/vision | Bounded extraction with source confidence.                   |
| L2    | Semantic router      | Goal, asset, amount, chain, urgency and uncertainty.         |
| L1    | Intent Contract      | Typed fields, missing values and user-confirmed constraints. |
| L0    | Retention router     | Session-only, persistent or prohibited destination.          |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component            | Responsibility / input                                       | Control invariant                                                                                         |
| -------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Consent gateway      | Surface-, modality- and purpose-specific permission.         | Emotional language is labelled, not deleted; it may indicate a required safety flow.                      |
| Sanitisation         | Malware, secrets, prompt injection and data-loss controls.   | Screen analysis defaults to selected region or app context, not unrestricted device capture.              |
| Transcription/vision | Bounded extraction with source confidence.                   | Wallet connection and profile linkage require explicit, revocable user action.                            |
| Semantic router      | Goal, asset, amount, chain, urgency and uncertainty.         | Use SIWE-style domain-bound authentication rather than ambiguous personal\_sign prompts where applicable. |
| Intent Contract      | Typed fields, missing values and user-confirmed constraints. | No material amount, asset, chain or risk constraint is inferred silently.                                 |
| Retention router     | Session-only, persistent or prohibited destination.          | Emotional language is labelled, not deleted; it may indicate a required safety flow.                      |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                    | Primary control             | Required state |
| ---------- | ------------------- | --------------------------------- | --------------------------- | -------------- |
| `FM-17-01` | Prompt injection    | Document or screen controls tools | Content/tool separation     | **QUARANTINE** |
| `FM-17-02` | Secret capture      | Seed or API key enters model path | DLP and immediate redaction | **ABORT**      |
| `FM-17-03` | Transcription error | Asset or amount changes           | Readback and confirmation   | **CLARIFY**    |
| `FM-17-04` | Consent mismatch    | Data reused beyond purpose        | Purpose-bound token         | **DENY**       |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                           |
| ----------- | ------------ | ----------------------------------------------------------- |
| `EVD-17-01` | **ACCEPTED** | Modality-specific consent and retention matrix.             |
| `EVD-17-02` | **ACCEPTED** | Intent Contract schema and ambiguity test corpus.           |
| `EVD-17-03` | **ACCEPTED** | Prompt-injection, secret and malicious-file red-team suite. |
| `EVD-17-04` | **ACCEPTED** | Voice amount/asset transcription error benchmarks.          |
| `EVD-17-05` | **ACCEPTED** | Transient-data deletion and telemetry audit.                |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
