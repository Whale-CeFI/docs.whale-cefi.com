---
title: "Representation Grafting and Confidential Compute"
description: "Representation Grafting is Whale CeFi’s internal architecture for connecting contract-permitted non-public partner representations or truncated artefacts to Whale CeFi-controlled domain components…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/weni/11-representation-grafting-and-confidential-compute"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-11"
---

# Representation Grafting and Confidential Compute

**Representation Grafting and Confidential Compute** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 11 is part of the 29 July 2026 official release. Its `FM-11-xx` controls and `EVD-11-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Representation Grafting is Whale CeFi’s internal architecture for connecting contract-permitted non-public partner representations or truncated artefacts to Whale CeFi-controlled domain components. Confidential compute constrains where that composition can run and who can access it.

### Normative design rules

- Define whether the partner object is a weight, activation, hidden state, cache, embedding or runtime call.
- Release decryption keys only to approved hardware and measured software state.
- Disable debug, swap, crash-dump and telemetry paths that could expose protected material.
- Version tensor schema, precision, normalisation and compatibility ranges.
- Exercise revocation, partner termination, rollback prevention and enclave failover.

### Boundary / not claimed

A TEE does not by itself prove data sovereignty, correctness, availability or immunity to side channels.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Partner artefact | Versioned representation, checkpoint fragment or runtime interface. |
| L4 | Attested enclave | Measured image with controlled key release. |
| L3 | WENI adapters/heads | Whale CeFi-controlled domain transformations. |
| L2 | Bounded ingress | Authenticated, minimised and purpose-labelled inputs. |
| L1 | Bounded egress | Schema validation, DLP, rate control and audit. |
| L0 | Audit plane | Measurements, artefacts, key events and revocation state. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Partner artefact | Versioned representation, checkpoint fragment or runtime interface. | Define whether the partner object is a weight, activation, hidden state, cache, embedding or runtime call. |
| Attested enclave | Measured image with controlled key release. | Release decryption keys only to approved hardware and measured software state. |
| WENI adapters/heads | Whale CeFi-controlled domain transformations. | Disable debug, swap, crash-dump and telemetry paths that could expose protected material. |
| Bounded ingress | Authenticated, minimised and purpose-labelled inputs. | Version tensor schema, precision, normalisation and compatibility ranges. |
| Bounded egress | Schema validation, DLP, rate control and audit. | Exercise revocation, partner termination, rollback prevention and enclave failover. |
| Audit plane | Measurements, artefacts, key events and revocation state. | Define whether the partner object is a weight, activation, hidden state, cache, embedding or runtime call. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-11-01` | Representation leakage | Partner or user information is reconstructed | Privacy and inversion testing | **REVOKE INTERFACE** |
| `FM-11-02` | Host compromise | Host observes inputs or artefacts | Attestation and encryption | **DENY KEY** |
| `FM-11-03` | Rollback attack | Vulnerable enclave image returns | Monotonic policy and revocation | **BLOCK BOOT** |
| `FM-11-04` | Side channel | Secrets leak despite isolation | Threat-specific hardening | **FAIL CLOSED** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-11-01` | **NDA** | Representation interface and contractual rights specification. |
| `EVD-11-02` | **ACCEPTED** | Enclave measurement, attestation and key-release evidence. |
| `EVD-11-03` | **ACCEPTED** | Ingress/egress, telemetry and crash-path data-flow audit. |
| `EVD-11-04` | **ACCEPTED** | Side-channel, extraction and rollback red-team report. |
| `EVD-11-05` | **ACCEPTED** | Partner-loss continuity and artefact-destruction procedure. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
