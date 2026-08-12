---
title: Data Graphs and Truth Resolution
canonical: >-
  https://docs.whale-cefi.com/weni-native-intelligence/data-graphs-and-truth-resolution
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  WENI’s data architecture separates three connected but non-interchangeable
  structures.
---

# Data Graphs and Truth Resolution

## Evidence Graph

The Evidence Graph organises attributable observations: chain state, contract identity, market data, protocol documentation, governance events, audited artefacts, product state, and user-authorised context.

## Intelligence Graph

The Intelligence Graph organises relationships, hypotheses, entities, scenarios, and analytical context used to support reasoning. Its outputs may be useful without becoming canonical fact.

## Cognitive Execution Graph

The Cognitive Execution Graph records the controlled path from intent to evidence, reasoning, tool use, policy, proposed route, review, and outcome. It makes the decision process reproducible without exposing private raw chain-of-thought.

## Truth resolution

When sources disagree, the system applies a question-specific authority hierarchy rather than popularity or an unqualified average.

For example:

* chain state determines the canonical on-chain balance at a pinned block;
* an approved product ledger determines Whale CeFi’s recorded obligation;
* the deployment registry and chain bytecode determine contract identity;
* a legal and policy registry determines product eligibility;
* market sources contribute to a price or liquidity view under a declared methodology;
* social sources contribute context, not financial authority.

If a conflict cannot be resolved, the conflict remains part of the answer. The system may lower confidence, ask for review, refuse to simulate, or block action preparation.
