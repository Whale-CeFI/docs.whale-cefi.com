---
title: "Deterministic Computation Services"
description: "Authoritative arithmetic is removed from free-form model generation. Versioned Rust/Go services operate over pinned, validated inputs and return reproducible calculations with units, precision, rounding…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/weni/19-deterministic-computation-services"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-19"
---

# Deterministic Computation Services

**Deterministic Computation Services** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 19 is part of the 29 July 2026 official release. Its `FM-19-xx` controls and `EVD-19-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Authoritative arithmetic is removed from free-form model generation. Versioned Rust/Go services operate over pinned, validated inputs and return reproducible calculations with units, precision, rounding, error bounds and expiry.

### Normative design rules

- Never use floating-point arithmetic for authoritative token amounts without a defined error model.
- Resolve token decimals and non-standard behaviour from trusted contract evidence.
- Return ranges and assumptions when later inclusion conditions are uncertain.
- Bind every result to code version, input hashes and chain/state reference.
- Property tests and independent implementations cover critical financial formulas.

### Boundary / not claimed

Deterministic computation proves reproducibility over specified inputs; it does not prove that external inputs are honest or changing conditions are safe.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Input contract | Chain state, quotes, decimals, policy and validity. |
| L4 | Numeric kernel | Explicit fixed/integer arithmetic and overflow behaviour. |
| L3 | Gas/fee service | Network-specific estimate and confidence range. |
| L2 | Impact/slippage | Route-specific depth, fee and amount calculation. |
| L1 | Allowance/state | Token permissions, balances and protocol preconditions. |
| L0 | Calculation record | Inputs, formula, code hash, output and TTL. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Input contract | Chain state, quotes, decimals, policy and validity. | Never use floating-point arithmetic for authoritative token amounts without a defined error model. |
| Numeric kernel | Explicit fixed/integer arithmetic and overflow behaviour. | Resolve token decimals and non-standard behaviour from trusted contract evidence. |
| Gas/fee service | Network-specific estimate and confidence range. | Return ranges and assumptions when later inclusion conditions are uncertain. |
| Impact/slippage | Route-specific depth, fee and amount calculation. | Bind every result to code version, input hashes and chain/state reference. |
| Allowance/state | Token permissions, balances and protocol preconditions. | Property tests and independent implementations cover critical financial formulas. |
| Calculation record | Inputs, formula, code hash, output and TTL. | Never use floating-point arithmetic for authoritative token amounts without a defined error model. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-19-01` | Decimal error | Amount differs by orders of magnitude | Typed units and token metadata | **BLOCK** |
| `FM-19-02` | Overflow/underflow | Calculation wraps or truncates | Checked arithmetic | **ERROR** |
| `FM-19-03` | Stale quote | Output is reproducible but no longer useful | Dynamic TTL | **EXPIRE** |
| `FM-19-04` | Fee-on-transfer | Expected and received amounts diverge | Balance-delta simulation | **REJECT/ADJUST** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-19-01` | **ACCEPTED** | Rust/Go latency-critical computation direction. |
| `EVD-19-02` | **ACCEPTED** | Formula specification, numeric types and golden test vectors. |
| `EVD-19-03` | **ACCEPTED** | Property, fuzz, overflow and decimal test results. |
| `EVD-19-04` | **ACCEPTED** | Independent implementation or formal review for critical kernels. |
| `EVD-19-05` | **ACCEPTED** | p50/p95/p99 latency and error rates by service class. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
