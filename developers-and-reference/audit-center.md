---
title: "Audit Integration Reference"
description: "This reference defines how consumers resolve audit programmes, first-party security assessments, remediation status, artifact integrity, and deployment coverage."
canonical: "https://docs.whale-cefi.com/developers-and-reference/audit-center"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-08-10"
---

# Audit Integration Reference

This reference defines how consumers resolve audit programmes, first-party security assessments, remediation status, artifact integrity, and deployment coverage without converting one evidence type into another.

## Canonical records

- [audits.json](../data/audits.json) records the independent Eter and Hashlock audit programme.
- [security-assessments.json](../data/security-assessments.json) records first-party security assessment `WCF-SARV-2026-0810`.
- [security-assessment.schema.json](../schemas/security-assessment.schema.json) defines the first-party assessment record contract.
- [Audit Center](../evidence-center/audit-center.md) provides the reader-facing assurance view.

## Published first-party record

`WCF-SARV-2026-0810` binds:

- provider and first-party relationship;
- issue date and report version;
- immutable PDF path and SHA-256;
- baseline commit and source hash;
- compiler, optimizer, EVM, chain, and block;
- finding totals and closure status;
- automated check totals;
- scope exclusions and residual work;
- and an empty production-deployment coverage list.

The exact PDF hash is `c34dfed3f00802fa51b1fecb6d0f4cff2148160cb72afaf81cef91cf1ebb6918`.

## Consumer rules

1. Verify the artifact hash before displaying any count or conclusion.
2. Preserve `provider_relationship=first-party`; do not label the record independent.
3. Display `Resolved` only with the qualifier `in the exact assessed build`.
4. Treat `production_deployment_coverage=[]` as no production coverage.
5. Do not inherit local chain 31337 addresses into a production Deployment Registry.
6. Resolve independent Eter and Hashlock records separately.
7. Fail closed when source, compiler, runtime, role state, or deployment identity differs from the assessment scope.
8. Preserve the PDF unchanged; later remediation or deployment records append evidence rather than rewriting it.

## Finding lifecycle

`reported -> remediation-linked -> regression-tested -> provider-retested -> deployment-bound`

`Resolved in assessed build` and `deployment-covered` are separate states. A source-level closure remains valid for its exact scope while production assurance stays unclaimed until a matching deployment record exists.
