---
title: Configuration, Secrets, and Software Supply Chain
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/11-configuration-secrets-and-software-supply-chain
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-11
---

# Configuration, Secrets, and Software Supply Chain

**Configuration, Secrets, and Software Supply Chain** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 11 is part of the 29 July 2026 official release. Its `FM-11-xx` controls and `EVD-11-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Configuration, credentials, images and dependencies are production artefacts. The platform requires signed builds, immutable versions, secret rotation, admission controls and traceability from source commit to running workload.

### Normative design rules

* No mutable image tags or unpinned dependencies in production.
* Secrets never enter source, images, client bundles, logs or crash reports.
* Separate configuration from secrets and validate both before rollout.
* Block deployment on critical provenance, signature or policy failure.
* Record the exact artefact and configuration running in every environment.

### Boundary / not claimed

A successful vulnerability scan does not prove an artefact is trustworthy or free from exploitable defects. TECHNICAL NORMALISATION

## Reference architecture

| Layer | Component         | Responsibility                                             |
| ----- | ----------------- | ---------------------------------------------------------- |
| L5    | Source            | Reviewed commit, protected branch and signed change.       |
| L4    | Build             | Hermetic pipeline, dependency resolution and tests.        |
| L3    | Artefact          | SBOM, vulnerability scan, provenance and signature.        |
| L2    | Configuration     | Typed environment values with review and ownership.        |
| L1    | Secrets           | KMS-backed issuance, rotation and least-privilege access.  |
| L0    | Admission/runtime | Verify image, policy, identity and expected configuration. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component         | Responsibility / input                                     | Control invariant                                                          |
| ----------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------- |
| Source            | Reviewed commit, protected branch and signed change.       | No mutable image tags or unpinned dependencies in production.              |
| Build             | Hermetic pipeline, dependency resolution and tests.        | Secrets never enter source, images, client bundles, logs or crash reports. |
| Artefact          | SBOM, vulnerability scan, provenance and signature.        | Separate configuration from secrets and validate both before rollout.      |
| Configuration     | Typed environment values with review and ownership.        | Block deployment on critical provenance, signature or policy failure.      |
| Secrets           | KMS-backed issuance, rotation and least-privilege access.  | Record the exact artefact and configuration running in every environment.  |
| Admission/runtime | Verify image, policy, identity and expected configuration. | No mutable image tags or unpinned dependencies in production.              |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode          | Failure effect                       | Primary control        | Required state |
| ---------- | --------------------- | ------------------------------------ | ---------------------- | -------------- |
| `FM-11-01` | Dependency compromise | Malicious package reaches production | SBOM/signing/scanning  | **QUARANTINE** |
| `FM-11-02` | Secret leakage        | Provider/custody access exposed      | Vault/DLP/rotation     | **REVOKE**     |
| `FM-11-03` | Config drift          | Runtime differs from reviewed state  | GitOps/diff detection  | **ROLL BACK**  |
| `FM-11-04` | Unsigned image        | Unknown code executes                | Admission verification | **DENY**       |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                    |
| ----------- | ------------ | ---------------------------------------------------- |
| `EVD-11-01` | **ACCEPTED** | CI build provenance, SBOM and image signatures.      |
| `EVD-11-02` | **ACCEPTED** | Dependency and base-image patch policy.              |
| `EVD-11-03` | **ACCEPTED** | Secret inventory, access and rotation evidence.      |
| `EVD-11-04` | **ACCEPTED** | Production configuration and drift report.           |
| `EVD-11-05` | **ACCEPTED** | Compromised-artefact and secret-revocation exercise. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
