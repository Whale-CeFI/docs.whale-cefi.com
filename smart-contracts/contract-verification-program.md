---
title: "Contract Verification Program"
description: "The layered test, analysis, formal, deployment, and monitoring controls required for every release."
canonical: "https://docs.whale-cefi.com/smart-contracts/contract-verification-program"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Contract Verification Program

The layered test, analysis, formal, deployment, and monitoring controls required for every release.

No single audit or tool defines contract safety. Release evidence combines independent methods that fail differently.

## Verification layers

| Layer                        | Coverage                                                                                 |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| Compiler and static analysis | Type, visibility, inheritance, dead code, unsafe calls, and known vulnerability patterns |
| Unit tests                   | Function behavior, access boundaries, errors, and events                                 |
| Stateful fuzzing             | Arbitrary operation sequences, callers, time, amounts, and token behavior                |
| Invariant tests              | Solvency, conservation, authority, uniqueness, and terminal-state properties             |
| Differential tests           | Contract output versus an independent financial reference model                          |
| Fork tests                   | Real token contracts, RPC behavior, protocol adapters, and chain conditions              |
| Formal properties            | Critical state and authority properties over bounded or complete models                  |
| Adversarial review           | Economic attacks, governance misuse, upgrade abuse, and integration assumptions          |
| Independent audit            | Exact source commit, dependencies, build settings, and stated scope                      |
| Deployment verification      | Reproducible bytecode, constructor data, role state, and activation block                |
| Runtime monitoring           | Role changes, pauses, solvency, exposure, anomalous transfers, and invariant drift       |

## Mandatory properties

Release is blocked unless all critical invariants pass, all legacy finding regressions pass, mutation testing demonstrates that the tests detect removed guards, bytecode is reproducible, no critical or high issue remains open, and the role graph matches the approved model.

## Economic testing

The suite models reward underfunding, strategy loss, liquidity runs, token depeg, chain halt, oracle divergence, gas spikes, validator slashing, delayed settlement, and adversarial transaction ordering. A contract can be logically correct and still fail economically; both dimensions are evaluated.

## Continuous assurance

The deployment monitor observes contract code hash, implementation pointers, role membership, timelock delay, pauser membership, asset registry, strategy caps, vault balances, and event continuity. An unexpected change produces a security incident even if the transaction was valid under the current chain state.
