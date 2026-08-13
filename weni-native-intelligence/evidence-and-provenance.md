---
title: Evidence and Provenance
canonical: https://whale-cefi.com/docs/weni-native-intelligence/evidence-and-provenance
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  WENI operates on the principle that every statement carries enough context to
  be inspected.
---

# Evidence and Provenance

![Evidence and Provenance](../.gitbook/assets/evidence-provenance.svg)

A material evidence object identifies:

* source and provider;
* licensing and permitted use;
* network, chain ID, block, transaction, token, contract, or market identity where relevant;
* event time, observation time, validation time, and expiry time;
* parser, schema, transformation, and version;
* confidence and conflict state;
* user consent and data-purpose restrictions;
* and the downstream decisions for which the evidence is eligible.

## Evidence classes

Different evidence answers different questions. Canonical chain state may establish that a transaction was included. It does not establish that an internal user entitlement was correctly posted. A custody record may establish an authorised transfer. It does not prove the safety of the receiving protocol. A social or governance source may explain intention. It does not overwrite deployed bytecode.

## Provenance in the interface

The user can see where a material fact came from and how current it is without reading an internal engineering trace. A concise evidence card may show source, timestamp, block or version, confidence, conflicts, and a link to more detail.

## Evidence before narrative

The Agent may summarise and explain evidence, but generated language is a projection of the underlying state. When the two conflict, the authoritative evidence and policy state wins. The system withdraws or downgrades the narrative rather than preserve a fluent but unsupported answer.
