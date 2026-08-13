---
title: WENI Domain Planner and Tool Orchestrator
canonical: >-
  https://whale-cefi.com/docs/controlled-specifications/weni/18-weni-domain-planner-and-tool-orchestrator
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: WENI-18
description: >-
  The planner decomposes a confirmed goal into bounded research, retrieval,
  calculation, analysis, simulation and policy tasks. It cannot directly
  construct or submit a transaction and cannot call an…
---

# WENI Domain Planner and Tool Orchestrator

**WENI Domain Planner and Tool Orchestrator** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 18 is part of the 29 July 2026 official release. Its `FM-18-xx` controls and `EVD-18-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

The planner decomposes a confirmed goal into bounded research, retrieval, calculation, analysis, simulation and policy tasks. It cannot directly construct or submit a transaction and cannot call an unregistered tool.

### Normative design rules

* Tools are allowlisted by schema, version, tenant, environment and action class.
* The planner may propose alternatives but cannot declare policy eligibility.
* Every tool result preserves provenance and cannot be overwritten by natural-language synthesis.
* Budgets limit recursion, latency, cost and denial-of-service amplification.
* Unknown tools, schema drift and partial results fail into explicit states.

### Boundary / not claimed

The planner is not a transaction signer, price oracle or policy authority.

## Reference architecture

| Layer | Component          | Responsibility                                      |
| ----- | ------------------ | --------------------------------------------------- |
| L5    | Confirmed intent   | Typed goal, constraints and unresolved fields.      |
| L4    | Task graph         | Research and computation dependencies with budgets. |
| L3    | Tool registry      | Versioned schemas, permissions and authority class. |
| L2    | Evidence retrieval | Purpose-scoped queries with provenance.             |
| L1    | Candidate plans    | Alternatives, assumptions and required checks.      |
| L0    | Handoff            | Only typed parameters reach deterministic services. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component          | Responsibility / input                              | Control invariant                                                                               |
| ------------------ | --------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Confirmed intent   | Typed goal, constraints and unresolved fields.      | Tools are allowlisted by schema, version, tenant, environment and action class.                 |
| Task graph         | Research and computation dependencies with budgets. | The planner may propose alternatives but cannot declare policy eligibility.                     |
| Tool registry      | Versioned schemas, permissions and authority class. | Every tool result preserves provenance and cannot be overwritten by natural-language synthesis. |
| Evidence retrieval | Purpose-scoped queries with provenance.             | Budgets limit recursion, latency, cost and denial-of-service amplification.                     |
| Candidate plans    | Alternatives, assumptions and required checks.      | Unknown tools, schema drift and partial results fail into explicit states.                      |
| Handoff            | Only typed parameters reach deterministic services. | Tools are allowlisted by schema, version, tenant, environment and action class.                 |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode        | Failure effect                        | Primary control             | Required state |
| ---------- | ------------------- | ------------------------------------- | --------------------------- | -------------- |
| `FM-18-01` | Tool injection      | Model invokes unauthorised capability | Signed registry and broker  | **DENY**       |
| `FM-18-02` | Recursive explosion | Planner consumes unbounded resources  | Budgets and circuit breaker | **ABORT**      |
| `FM-18-03` | Schema drift        | Parameter meaning changes             | Version pinning             | **REPLAN**     |
| `FM-18-04` | Evidence omission   | Plan ignores adverse source           | Coverage rules and critic   | **INCOMPLETE** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                          |
| ----------- | ------------ | ---------------------------------------------------------- |
| `EVD-18-01` | **ACCEPTED** | Planner task schema and tool authority registry.           |
| `EVD-18-02` | **ACCEPTED** | Tool-call permission, budget and schema conformance tests. |
| `EVD-18-03` | **ACCEPTED** | Adverse-evidence omission benchmark.                       |
| `EVD-18-04` | **ACCEPTED** | Partial-failure and timeout state-machine tests.           |
| `EVD-18-05` | **ACCEPTED** | Deterministic handoff contract for every action class.     |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
