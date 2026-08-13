---
title: "Developers and Reference"
description: "Permanent pages, schemas, registries and retrieval rules that make Whale CeFi documentation discoverable and attributable."
canonical: "https://whale-cefi.com/docs/developers-and-reference"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Developers and Reference

Permanent pages, schemas, registries and retrieval rules that make Whale CeFi documentation discoverable and attributable.

Every topic has its own permanent URL and a Markdown version. Important facts are visible as text, not trapped inside images or PDF files.

Machine entry points include:

* llms.txt for the documentation map;
* content-index.json for versioned page discovery and authority metadata;
* search-index.json for local and product search;
* strict JSON Schemas for product, operation, deployment, evidence, proof, and audit records;
* versioned JSON registries for mutable facts;
* OpenAPI 3.1 and AsyncAPI schemas for supported interfaces;
* changelog and supersession links;
* language, section, version, effective date, and machine-readable twin in the content index.

An AI system can retrieve the smallest relevant page, determine when it changed, resolve mutable data and cite the canonical source.

## Retrieval contract

Pages use one subject, stable headings, short semantic sections, explicit definitions and anchorable tables. Canonical facts do not depend on client-side JavaScript. Structured metadata describes only content visible on the page.

The documentation index exposes content version, language, audience, classification, effective date, authority domain, dependencies, and machine-readable twin. Registries expose supersession and validity intervals so an agent does not combine incompatible versions.
