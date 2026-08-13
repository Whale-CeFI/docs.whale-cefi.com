---
title: Privacy, Security, and Threat Model
canonical: >-
  https://whale-cefi.com/docs/weni-native-intelligence/privacy-security-and-threat-model
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  An intelligence system that reads market, wallet, account, document, or
  enterprise context creates security and privacy responsibilities beyond a
  normal chatbot.
---

# Privacy, Security, and Threat Model

## Identity and consent

Every interaction is scoped to an authenticated user or authorised workspace where required. Data use follows explicit purpose, consent, access, retention, and deletion rules.

## Data isolation

User, enterprise, platform, evaluation, and training data require clear separation. Private context never becomes shared model knowledge or another customer’s retrieval result.

## Untrusted input

Web pages, documents, smart contracts, governance posts, screenshots, social feeds, and tool output may contain manipulation or prompt-injection attempts. Retrieved content is evidence to classify and inspect, not instruction with authority over the system.

## Tool and service control

Tools require allowlists, typed contracts, bounded permissions, timeouts, rate limits, audit records, deterministic validation, and safe failure modes. A generic tool interface cannot grant a model broad infrastructure or financial authority.

## Model and artefact security

Foundation weights, licensed artefacts, adapters, datasets, prompts, policies, deployment configurations, and evaluation results require version identity, access control, integrity checks, and rights tracking.

## Threat families

The WENI threat model addresses prompt injection, data poisoning, source impersonation, contract-address substitution, stale-state replay, tool-result tampering, memory contamination, cross-tenant leakage, model extraction, policy bypass, approval fatigue, interface deception, and attempts to cross the Iron Boundary.

## Confidential execution and zero-knowledge verification

Sensitive workloads run inside attested confidential-computing boundaries when their data classification requires it. Zero-knowledge verification is restricted to defined proof targets with a pinned circuit, verifier identity, latency budget, threat model, and deployment evidence; it is never presented as a generic proof that a model response is correct.
