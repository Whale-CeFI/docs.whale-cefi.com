---
title: Explain, Prepare, Approve
canonical: https://whale-cefi.com/docs/weni-native-intelligence/explain-prepare-approve
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  The action model uses distinct verbs because each verb carries different
  authority.
---

# Explain, Prepare, Approve

## Explain

The Agent describes the current evidence, assumptions, uncertainty, risk, and available product context.

## Calculate

An approved deterministic service produces a repeatable result from declared inputs and a versioned method.

## Simulate

The system models a possible outcome under bounded assumptions. Simulation does not make the outcome certain.

## Prepare

The system constructs an inspectable possible route or unsigned request. Preparation does not authorise execution.

## Review

The user or authorised enterprise approvers inspect the exact asset, amount, network, contract, recipient, permissions, limits, fees, quote, simulation, risk, and expiry.

## Approve

The user explicitly indicates that the displayed current request may proceed to the external signing boundary. Approval is state-specific and expires if a material element changes.

## Sign and submit

The authorised wallet or enterprise signing system applies cryptographic authority and submits the transaction. This occurs outside the Agent’s authority.

## Confirm and reconcile

The chain, custody, and product systems observe the outcome and update their authoritative records under the applicable finality and reconciliation rules.

No interface compresses these states into one ambiguous button such as “AI execute.”
