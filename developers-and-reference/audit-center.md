---
title: "Audit Integration Reference"
description: "This reference defines how software, registries, and diligence workflows consume Whale CeFi audit evidence without turning a report title into an unsupported assurance claim."
canonical: "https://docs.whale-cefi.com/developers-and-reference/audit-center"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Audit Integration Reference

This reference defines how software, registries, and diligence workflows consume Whale CeFi audit evidence without turning a report title into an unsupported assurance claim.

## Canonical record

The machine-readable source is [audits.json](../data/audits.json). Each audit record identifies:

- auditor and exact scope;
- report version and issue date;
- repository, commit, package, or deployed bytecode covered;
- immutable artifact hash;
- finding totals by severity and original auditor status;
- remediation commits and regression tests;
- independent retest artifact;
- deployment IDs that inherit the reviewed code;
- exclusions, expiry, and superseding review.

The public [Audit Center](../evidence-center/audit-center.md) is the reader-facing explanation. This page is the integration contract.

## Finding lifecycle

`reported → triaged → remediation-linked → regression-tested → independently-retested → deployment-bound`

An internal closure state never overwrites the original report. “Acknowledged,” “fixed,” “verified,” and “covered by the deployed version” remain separate fields.

## Consumer rules

1. Reject a record whose artifact hash, scope, code identity, or issue date is missing.
2. Do not extend review coverage to a contract, service, chain, proxy, implementation, or deployment that is absent from scope.
3. Treat a remediation without independent retest as remediated-but-unverified.
4. Resolve proxy and implementation addresses before displaying deployment coverage.
5. Preserve superseded records for history while presenting the latest applicable record first.
6. Fail closed when the audit record and deployment registry disagree.

## Current assurance set

The target-state registry names **Eter** and **Hashlock**. Auditor-issued files, hashes, exact finding statuses, and covered deployment IDs remain mandatory publication inputs; the documentation does not manufacture them.
