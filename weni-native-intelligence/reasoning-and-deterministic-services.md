---
title: Reasoning and Deterministic Services
canonical: >-
  https://whale-cefi.com/docs/weni-native-intelligence/reasoning-and-deterministic-services
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  WENI separates tasks that benefit from probabilistic reasoning from tasks that
  require repeatable calculation or hard enforcement.
---

# Reasoning and Deterministic Services

## Probabilistic reasoning

The intelligence layer may interpret a request, retrieve relevant context, compare evidence, form a bounded plan, critique assumptions, and explain a result. This is useful precisely because the input may be incomplete or expressed in natural language.

## Deterministic calculation

Rates, balances, fees, position mathematics, scenario formulas, eligibility conditions, and other exact computations are performed by versioned services with testable inputs and outputs.

## Contract analysis

Supported contract analysis resolves identity, proxy relationships, roles, permissions, dependencies, and relevant code paths. The result supplements — and does not silently replace — an audit, formal verification, deployment proof, or human security review.

## Simulation

A simulation is a bounded model of a possible outcome. It shows the pinned state, assumptions, excluded factors, time horizon, and expiry. It is not a promise that the market or chain reproduces the model.

## Hard policy

Eligibility, jurisdiction, product limits, blocked assets, risk thresholds, required approvals, and other mandatory controls are evaluated outside free-form model discretion.

## Payload preparation

Where supported, a reviewed service may construct an unsigned request only after the required evidence, calculation, simulation, and policy checks have completed. If the material state changes, the request expires.
