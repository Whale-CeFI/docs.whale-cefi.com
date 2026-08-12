---
title: Configuration, Secrets, and Software Supply Chain
canonical: >-
  https://docs.whale-cefi.com/advanced-platform-architecture/configuration-secrets-and-software-supply-chain
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Configuration, Secrets, and Software Supply Chain

Configuration, credentials, images and dependencies are production artefacts. The platform requires signed builds, immutable versions, secret rotation, admission controls and traceability from source commit to running workload.

## Control model

| Component or state | Responsibility                                                       |
| ------------------ | -------------------------------------------------------------------- |
| Source             | Reviewed commit, protected branch and signed change.                 |
| Build              | Hermetic pipeline, dependency resolution and tests.                  |
| Artefact           | SBOM, vulnerability scan, provenance and signature.                  |
| Configuration      | Typed environment values with review and ownership.                  |
| Secrets            | key-management-backed issuance, rotation and least-privilege access. |
| Admission/runtime  | Verify image, policy, identity and expected configuration.           |

## Invariants

* No mutable image tags or unpinned dependencies in production.
* Secrets never enter source, images, client bundles, logs or crash reports.
* Separate configuration from secrets and validate both before rollout.
* Block deployment on critical provenance, signature or policy failure.
* Record the exact artefact and configuration running in every environment.

## Failure containment

| Failure               | Effect                               | Control                | Response   |
| --------------------- | ------------------------------------ | ---------------------- | ---------- |
| Dependency compromise | Malicious package reaches production | SBOM/signing/scanning  | QUARANTINE |
| Secret leakage        | Provider/custody access exposed      | Vault/DLP/rotation     | REVOKE     |
| Config drift          | Runtime differs from reviewed state  | GitOps/diff detection  | ROLL BACK  |
| Unsigned image        | Unknown code executes                | Admission verification | DENY       |

## Operational evidence

* CI build provenance, SBOM and image signatures.
* Dependency and base-image patch policy.
* Secret inventory, access and rotation evidence.
* Production configuration and drift report.
* Compromised-artefact and secret-revocation exercise.

## Boundary conditions

A successful vulnerability scan does not prove an artefact is trustworthy or free from exploitable defects.
