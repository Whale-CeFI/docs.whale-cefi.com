---
title: Contract Analysis and Adversarial Simulation
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/weni/20-contract-analysis-and-adversarial-simulation
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-20
description: >-
  Candidate actions are challenged before policy or presentation. Static and
  dynamic contract analysis, forked-state simulation and specialised critics
  search for privilege, token, routing, MEV, liquidi
---

# Contract Analysis and Adversarial Simulation

**Contract Analysis and Adversarial Simulation** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 20 is part of the 29 July 2026 official release. Its `FM-20-xx` controls and `EVD-20-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Candidate actions are challenged before policy or presentation. Static and dynamic contract analysis, forked-state simulation and specialised critics search for privilege, token, routing, MEV, liquidity and timing failure modes.

### Normative design rules

* Simulate the exact payload or prove equivalence between simulated and displayed payload.
* Model proxy upgrades, token callbacks, approvals and external-call dependencies.
* Record coverage and unknown state instead of translating no finding into safe.
* Keep critic output subordinate to reproducible evidence and policy.
* Use benign controls to monitor false-positive growth.

### Boundary / not claimed

Adversarial review is not cryptographic consensus and does not establish universal contract safety.

## Reference architecture

| Layer | Component          | Responsibility                                             |
| ----- | ------------------ | ---------------------------------------------------------- |
| L5    | Candidate plan     | Exact contracts, amounts, path and assumptions.            |
| L4    | Static analysis    | Code, bytecode, proxy, privileges and known patterns.      |
| L3    | Fork simulation    | State transition over pinned chain state.                  |
| L2    | Stress scenarios   | Gas, slippage, liquidity, delay, oracle and MEV variation. |
| L1    | Adversarial critic | Searches omissions and counterexamples.                    |
| L0    | Review bundle      | Findings, traces, coverage and unresolved risk.            |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component          | Responsibility / input                                     | Control invariant                                                                        |
| ------------------ | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Candidate plan     | Exact contracts, amounts, path and assumptions.            | Simulate the exact payload or prove equivalence between simulated and displayed payload. |
| Static analysis    | Code, bytecode, proxy, privileges and known patterns.      | Model proxy upgrades, token callbacks, approvals and external-call dependencies.         |
| Fork simulation    | State transition over pinned chain state.                  | Record coverage and unknown state instead of translating no finding into safe.           |
| Stress scenarios   | Gas, slippage, liquidity, delay, oracle and MEV variation. | Keep critic output subordinate to reproducible evidence and policy.                      |
| Adversarial critic | Searches omissions and counterexamples.                    | Use benign controls to monitor false-positive growth.                                    |
| Review bundle      | Findings, traces, coverage and unresolved risk.            | Simulate the exact payload or prove equivalence between simulated and displayed payload. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode          | Failure effect                            | Primary control         | Required state |
| ---------- | --------------------- | ----------------------------------------- | ----------------------- | -------------- |
| `FM-20-01` | Payload mismatch      | Displayed action differs from simulation  | Hash equivalence        | **BLOCK**      |
| `FM-20-02` | State drift           | Simulation no longer represents execution | Expiry and resimulation | **RECOMPUTE**  |
| `FM-20-03` | Unknown external call | Downstream behaviour is unmodelled        | Coverage gate           | **BLOCK/WARN** |
| `FM-20-04` | Critic hallucination  | Unsupported warning becomes fact          | Evidence requirement    | **DOWNGRADE**  |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                                     |
| ----------- | ------------ | --------------------------------------------------------------------- |
| `EVD-20-01` | **ACCEPTED** | Exact-payload simulation and equivalence test.                        |
| `EVD-20-02` | **ACCEPTED** | Scenario library for reentrancy, approvals, MEV and liquidity stress. |
| `EVD-20-03` | **ACCEPTED** | Coverage and unresolved-dependency schema.                            |
| `EVD-20-04` | **ACCEPTED** | False-positive/false-negative evaluation with benign controls.        |
| `EVD-20-05` | **ACCEPTED** | Reproducible trace bundle for every block outcome.                    |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
