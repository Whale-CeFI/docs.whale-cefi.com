---
title: "Audit Center"
description: "The Audit Center connects each security review to exact code, remediation, retesting, and deployments. An auditor’s logo or report title alone is not deployment assurance."
canonical: "https://docs.whale-cefi.com/evidence-center/audit-center"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Audit Center

The Audit Center connects each security review to exact code, remediation, retesting, and deployments. An auditor’s logo or report title alone is not deployment assurance.

## Current assurance chain

Whale CeFi maintains independent review records for **Eter** and **Hashlock**. Each record contains the auditor’s legal identity, report date, repository, scope commit, compiler and dependency manifest, exclusions, findings, remediation commits, regression tests, independent retest, report hash, and covered deployments.

No finding is described as closed merely because the implementation team changed code. Closure requires evidence that the affected code was remediated, tested, independently retested where required, and linked to the runtime bytecode of the covered deployment.

## Status language

- Open - remediation is not accepted.
- Remediated - implementation evidence exists; independent closure is pending where required.
- Retested - the auditor or approved independent reviewer verified the named remediation scope.
- Superseded - a later report or deployment replaced the scope.
- Not covered - the deployment or component falls outside the report.

The target records are defined in [audits.json](../data/audits.json) and [audit-closure.schema.json](../schemas/audit-closure.schema.json).
