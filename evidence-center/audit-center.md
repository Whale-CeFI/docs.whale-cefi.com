---
title: Audit Center
canonical: https://whale-cefi.com/docs/evidence-center/audit-center
document_status: official-release
audience: public
last_reviewed: '2026-08-28'
description: >-
  The Audit Center separates first-party assessment and adversary-emulation
  records, independent audits, and production deployment coverage.
---

# Audit Center

A report title or resolved source finding does not automatically cover production runtime code.

## Published first-party security-assurance records

| Field | Smart-contract assessment | Operation BLACK TIDE |
|---|---|---|
| Record | `WCF-SARV-2026-0810` | `SHL-WCF-RV-2026-0814` |
| Version and date | v3.0, 10 August 2026 | v2.0, 14 August 2026 |
| Provider | Whale CeFi Security Engineering | SHERLOCK Internal Security Assurance |
| Relationship | First-party | First-party / internal assurance |
| Reported result | 17/17 resolved; 31/31 checks passed | 10/10 resolved; 89/89 tests passed; 22-event chain `VALID`; scenario `CONTAINED` |
| Environment | Isolated chain 31337 through block 82 | `ISOLATED_REVALIDATION` |
| Assurance boundary | Exact assessed build | `O1-ISOLATED` |
| Production deployments covered | None | None asserted |
| Artifact integrity | SHA-256 `c34dfed3f00802fa51b1fecb6d0f4cff2148160cb72afaf81cef91cf1ebb6918` | SHA-256 `373576273053d791d45fa2628437c7b593e1ab993aa6b17e078321438920a4b0` |
| Evidence-pack state | Not applicable to the published record | Referenced executable pack not supplied with the public PDF; documentation-team reproduction not asserted |

Read the [smart-contract assessment summary](../security-and-custody/security-assessment-and-remediation-verification.md) or [download its original PDF](../.gitbook/assets/audits/Whale_CeFi_Security_Assessment_Remediation_Verification_v3.0_2026-08-10.pdf). Read the [BLACK TIDE adversary path, containment trace, and assurance boundary](../security-and-custody/operation-black-tide-remediation-verification.md) or [download its original PDF](../.gitbook/assets/audits/SHERLOCK_Whale_CeFi_Operation_BLACK_TIDE_Remediation_Verification_v2.0_2026-08-14.pdf).

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

The independent audit programme is recorded in [audits.json](../data/audits.json). Both published first-party security-assurance records are recorded in [security-assessments.json](../data/security-assessments.json).
