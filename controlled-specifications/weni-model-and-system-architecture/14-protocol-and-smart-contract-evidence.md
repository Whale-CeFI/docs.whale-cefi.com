---
title: Protocol and Smart-Contract Evidence
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/weni/14-protocol-and-smart-contract-evidence
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-14
description: >-
  Contract safety requires more than source retrieval. WENI resolves proxies and
  implementations, compiler metadata, bytecode, privileged roles, upgrade
  history, token behaviour, external calls and…
---

# Protocol and Smart-Contract Evidence

**Protocol and Smart-Contract Evidence** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 14 is part of the 29 July 2026 official release. Its `FM-14-xx` controls and `EVD-14-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Contract safety requires more than source retrieval. WENI resolves proxies and implementations, compiler metadata, bytecode, privileged roles, upgrade history, token behaviour, external calls and state-dependent conditions before interpreting scanner findings.

### Normative design rules

* Unverified source code is not the same as unavailable bytecode.
* Scanner output is evidence, not an audit verdict by itself.
* Resolve implementation code and privileged upgrade paths before scoring risk.
* Test fee-on-transfer, rebasing, non-standard return values and allowance edge cases.
* Bind every finding to tool version, rule, code hash, state and reproduction trace.

### Boundary / not claimed

WENI preliminary analysis is not represented as formal verification or a substitute for an independent professional audit.

## Reference architecture

| Layer | Component         | Responsibility                                                |
| ----- | ----------------- | ------------------------------------------------------------- |
| L5    | Identity          | Chain, address, bytecode hash, source and compiler metadata.  |
| L4    | Proxy resolution  | Proxy standard, implementation, admin and upgrade history.    |
| L3    | Static analysis   | Rules, dataflow, privileges and known vulnerability patterns. |
| L2    | Dynamic analysis  | Forked-state calls, invariants and adverse token behaviour.   |
| L1    | External evidence | Audits, disclosures, incidents and dependency risk.           |
| L0    | Coverage map      | What was tested, what remains unknown and why.                |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component         | Responsibility / input                                        | Control invariant                                                                    |
| ----------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Identity          | Chain, address, bytecode hash, source and compiler metadata.  | Unverified source code is not the same as unavailable bytecode.                      |
| Proxy resolution  | Proxy standard, implementation, admin and upgrade history.    | Scanner output is evidence, not an audit verdict by itself.                          |
| Static analysis   | Rules, dataflow, privileges and known vulnerability patterns. | Resolve implementation code and privileged upgrade paths before scoring risk.        |
| Dynamic analysis  | Forked-state calls, invariants and adverse token behaviour.   | Test fee-on-transfer, rebasing, non-standard return values and allowance edge cases. |
| External evidence | Audits, disclosures, incidents and dependency risk.           | Bind every finding to tool version, rule, code hash, state and reproduction trace.   |
| Coverage map      | What was tested, what remains unknown and why.                | Unverified source code is not the same as unavailable bytecode.                      |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode           | Failure effect                                   | Primary control                      | Required state       |
| ---------- | ---------------------- | ------------------------------------------------ | ------------------------------------ | -------------------- |
| `FM-14-01` | Proxy confusion        | Benign proxy or malicious implementation misread | Full resolution and history          | **BLOCK IF UNKNOWN** |
| `FM-14-02` | Scanner false positive | Safe route rejected                              | Multi-tool evidence and reproduction | **REVIEW**           |
| `FM-14-03` | Scanner false negative | Exploit path passes                              | Dynamic tests and holdout corpus     | **FAIL BUILD**       |
| `FM-14-04` | Token non-compliance   | Accounting differs from nominal amount           | Balance-delta validation             | **REJECT ASSET**     |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                                                              |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| `EVD-14-01` | **ACCEPTED** | Contract identity and proxy-resolution specification.                                                          |
| `EVD-14-02` | **ACCEPTED** | Tool/version/rule coverage matrix and reproduction bundle.                                                     |
| `EVD-14-03` | **ACCEPTED** | Benign hard-negative and exploit holdout corpus.                                                               |
| `EVD-14-04` | **ACCEPTED** | Independent auditor-issued report tied to the exact reviewed source, commit, scope, findings, and report hash. |
| `EVD-14-05` | **ACCEPTED** | Deployment-bytecode-to-audited-commit attestation.                                                             |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
