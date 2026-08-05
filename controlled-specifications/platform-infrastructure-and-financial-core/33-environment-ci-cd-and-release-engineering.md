---
title: Environment, CI/CD, and Release Engineering
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/33-environment-ci-cd-and-release-engineering
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-33
description: >-
  Release engineering turns reviewed source into an attributable production
  state. Repositories, dependencies, tests, artefacts, infrastructure, database
  migrations, contract deployments and client buil
---

# Environment, CI/CD, and Release Engineering

**Environment, CI/CD, and Release Engineering** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 33 is part of the 29 July 2026 official release. Its `FM-33-xx` controls and `EVD-33-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Release engineering turns reviewed source into an attributable production state. Repositories, dependencies, tests, artefacts, infrastructure, database migrations, contract deployments and client builds are versioned and promoted through segregated environments without rebuilding mutable outputs.

### Normative design rules

* Build once and promote immutable digests; do not rebuild per environment.
* Separate production deployment authority from source approval and custody authority.
* Make database and event-schema changes backward-compatible or explicitly sequenced.
* Require signed manifests for container, Lambda, web, mobile and contract releases.
* Rollback is tested against data and contract compatibility, not only application binaries.

### Boundary / not claimed

A successful CI job is not represented as production readiness without environment, security, financial and operational gates. TEAM TRANSCRIPT + TECHNICAL NORMALISATION

## Reference architecture

| Layer | Component              | Responsibility                                                  |
| ----- | ---------------------- | --------------------------------------------------------------- |
| L5    | Source change          | Reviewed code, schema, infrastructure or contract update.       |
| L4    | Build                  | Hermetic pipeline emits signed artefact, SBOM and test results. |
| L3    | Security gates         | SAST, secrets, dependencies, images and policy checks.          |
| L2    | Environment validation | Integration, migration, failure and rollback tests.             |
| L1    | Promotion              | Same digest advances under independent approval.                |
| L0    | Runtime attestation    | Deployed digest, configuration and evidence are recorded.       |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component              | Responsibility / input                                          | Control invariant                                                                          |
| ---------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Source change          | Reviewed code, schema, infrastructure or contract update.       | Build once and promote immutable digests; do not rebuild per environment.                  |
| Build                  | Hermetic pipeline emits signed artefact, SBOM and test results. | Separate production deployment authority from source approval and custody authority.       |
| Security gates         | SAST, secrets, dependencies, images and policy checks.          | Make database and event-schema changes backward-compatible or explicitly sequenced.        |
| Environment validation | Integration, migration, failure and rollback tests.             | Require signed manifests for container, Lambda, web, mobile and contract releases.         |
| Promotion              | Same digest advances under independent approval.                | Rollback is tested against data and contract compatibility, not only application binaries. |
| Runtime attestation    | Deployed digest, configuration and evidence are recorded.       | Build once and promote immutable digests; do not rebuild per environment.                  |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode          | Failure effect                       | Primary control                  | Required state |
| ---------- | --------------------- | ------------------------------------ | -------------------------------- | -------------- |
| `FM-33-01` | Artefact substitution | Unreviewed binary reaches production | Signing/provenance               | **BLOCK**      |
| `FM-33-02` | Migration failure     | Services see incompatible schema     | Expand/contract plan             | **ROLL BACK**  |
| `FM-33-03` | Environment drift     | Staging test does not represent prod | Declarative config               | **RECONCILE**  |
| `FM-33-04` | Secret exposure       | Pipeline leaks credential            | Secret scanning/short-lived auth | **ROTATE**     |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                      |
| ----------- | ------------ | ------------------------------------------------------ |
| `EVD-33-01` | **ACCEPTED** | Repository, pipeline and environment inventory.        |
| `EVD-33-02` | **ACCEPTED** | Signed artefact, SBOM and provenance examples.         |
| `EVD-33-03` | **ACCEPTED** | Database/event/contract migration compatibility suite. |
| `EVD-33-04` | **ACCEPTED** | Production approval, deploy and rollback exercise.     |
| `EVD-33-05` | **ACCEPTED** | Runtime digest and configuration attestation.          |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
