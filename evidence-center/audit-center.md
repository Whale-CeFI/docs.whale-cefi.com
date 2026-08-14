---
title: Audit Center
canonical: https://whale-cefi.com/docs/evidence-center/audit-center
document_status: official-release
audience: public
last_reviewed: '2026-08-10'
description: >-
  The Audit Center separates first-party remediation verification, independent
  audit records, and production deployment coverage.
---

# Audit Center

A report title or resolved source finding does not automatically cover production runtime code.

## Published security assessment

| Field                          | Current record                                                             |
| ------------------------------ | -------------------------------------------------------------------------- |
| Assessment                     | `WCF-SARV-2026-0810`                                                       |
| Title                          | Whale CeFi Security Assessment and Remediation Verification                |
| Version and date               | v3.0, 10 August 2026                                                       |
| Provider                       | Whale CeFi Security Engineering                                            |
| Relationship                   | First-party                                                                |
| Findings                       | 17 resolved in the exact assessed build; 0 open                            |
| Automated checks               | 31 passed; 0 failed                                                        |
| Environment                    | Isolated chain 31337; block 82                                             |
| Production deployments covered | None                                                                       |
| Artifact integrity             | SHA-256 `c34dfed3f00802fa51b1fecb6d0f4cff2148160cb72afaf81cef91cf1ebb6918` |

[Read the assessment summary and scope boundary](../security-and-custody/security-assessment-and-remediation-verification.md) or [download the original PDF](../.gitbook/assets/audits/Whale_CeFi_Security_Assessment_Remediation_Verification_v3.0_2026-08-10.pdf).

## Independent audit programme

Whale CeFi maintains separate programme records for **Eter** and **Hashlock**. Their legal identity, auditor-issued report, exact source scope, report hash, finding status, remediation response, independent retest, and covered deployment IDs remain distinct from the first-party assessment above.

An internal test result never upgrades an independent auditor's status. Likewise, an independent source review does not extend to an unlisted chain, proxy, implementation, service, backend, custodian, or production deployment.

## Status language

* **Open** - remediation is not accepted.
* **Remediated** - implementation evidence exists; independent closure remains separate where applicable.
* **Retested** - the named provider verified the named remediation scope.
* **Deployment-covered** - the reviewed source and configuration resolve to the exact active runtime identity.
* **Superseded** - a later report or deployment replaced the scope.
* **Not covered** - the component or deployment falls outside the record.

## Closure chain

`reported -> remediation-linked -> regression-tested -> provider-retested -> deployment-bound`

No finding is described as deployment-covered merely because the implementation team changed code or passed a local check. Production coverage requires a deployment record that binds chain, address, runtime bytecode, source, compiler, roles, applicable assessment or audit, and activation interval.

The independent audit programme is recorded in [audits.json](../data/audits.json). The published first-party assessment is recorded in [security-assessments.json](../data/security-assessments.json).
