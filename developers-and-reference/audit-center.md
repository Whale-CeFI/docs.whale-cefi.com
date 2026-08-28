---
title: "Audit Integration Reference"
description: "This reference defines how consumers resolve audit programmes, first-party security assessments, remediation status, artifact integrity, and deployment coverage."
canonical: "https://whale-cefi.com/docs/developers-and-reference/audit-center"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-08-28"
---

# Audit Integration Reference

This reference defines how consumers resolve audit programmes, first-party security assessments, remediation status, artifact integrity, and deployment coverage without converting one evidence type into another.

## Canonical records

- [audits.json](../data/audits.json) records the independent Eter and Hashlock audit programme.
- [security-assessments.json](../data/security-assessments.json) records first-party security-assurance records `WCF-SARV-2026-0810` and `SHL-WCF-RV-2026-0814`.
- [security-assessment.schema.json](../schemas/security-assessment.schema.json) defines the first-party assessment record contract.
- [Audit Center](../evidence-center/audit-center.md) provides the reader-facing assurance view.

## Published first-party records

### WCF-SARV-2026-0810

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

### SHL-WCF-RV-2026-0814

`SHL-WCF-RV-2026-0814` binds:

- SHERLOCK Internal Security Assurance as a first-party/internal provider;
- report version 2.0 and issue date 14 August 2026;
- immutable 57-page PDF path and SHA-256;
- baseline report, reported source-root hash, `ISOLATED_REVALIDATION`, and `O1-ISOLATED`;
- 10/10 finding closure and 89/89 report-recorded automated tests;
- scenario `CONTAINED`, USD 0 simulated principal loss, and a 22-event chain marked `VALID`;
- an empty production-deployment coverage list;
- and the explicit state that the referenced executable evidence pack was not supplied and was not reproduced by the documentation team.

The exact PDF hash is `373576273053d791d45fa2628437c7b593e1ab993aa6b17e078321438920a4b0`.

## Consumer rules

1. Verify the artifact hash before displaying any count or conclusion.
2. Preserve `provider_relationship=first-party`; do not label the record independent.
3. Display `Resolved` only with the record's exact qualifier: `in the exact assessed build` for WCF-SARV or `in isolated revalidation` for BLACK TIDE.
4. Treat `production_deployment_coverage=[]` as no production coverage.
5. Do not inherit local chain 31337 addresses into a production Deployment Registry.
6. Resolve independent Eter and Hashlock records separately.
7. Fail closed when source, compiler, runtime, role state, or deployment identity differs from the assessment scope.
8. Do not convert BLACK TIDE's report-recorded test totals into an independently reproduced result while `evidence_pack.independent_reproduction_by_documentation_team=false`.
9. Preserve each PDF unchanged; later reproduction, remediation, or deployment records append evidence rather than rewriting it.

## Finding lifecycle

`reported -> remediation-linked -> regression-tested -> provider-retested -> deployment-bound`

`Resolved in assessed build` and `deployment-covered` are separate states. A source-level closure remains valid for its exact scope while production assurance stays unclaimed until a matching deployment record exists.
