---
title: "Learn-to-Earn, Credentials, and Anti-Abuse"
description: "Learn-to-Earn is a competency system, not a click-farm. Adaptive tasks, evidence-backed grading, progression and Whale CeFi credentials must measure demonstrated knowledge while resisting Sybil, collusion…"
canonical: "https://docs.whale-cefi.com/controlled-specifications/weni/26-learn-to-earn-credentials-and-anti-abuse"
document_status: "official-release"
audience: "technical"
last_reviewed: "2026-07-29"
control_id: "WENI-26"
---

# Learn-to-Earn, Credentials, and Anti-Abuse

**Learn-to-Earn, Credentials, and Anti-Abuse** defines the controlled engineering contract for **WENI Model and System Architecture**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 26 is part of the 29 July 2026 official release. Its `FM-26-xx` controls and `EVD-26-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Learn-to-Earn is a competency system, not a click-farm. Adaptive tasks, evidence-backed grading, progression and Whale CeFi credentials must measure demonstrated knowledge while resisting Sybil, collusion, plagiarism, synthetic media and model-assisted answer abuse.

### Normative design rules

- No single detection provider becomes a truth oracle for learner authenticity.
- Integrity signals are calibrated, appealable and separated by modality.
- Credentials state exactly what was assessed and under which version.
- Rewards do not incentivise rapid low-quality completion over learning.
- Safety controls remain identical regardless of earned tier or token status.

### Boundary / not claimed

Turnitin, GPTZero, Reality Defender or Originality.ai signals do not by themselves prove independent learning or user identity.

## Reference architecture

| Layer | Component | Responsibility |
|---|---|---|
| L5 | Competency map | Skills, prerequisites, objectives and tier transitions. |
| L4 | Task generator | Versioned templates and difficulty calibration. |
| L3 | Evidence capture | Answer, process, timing and permitted assistance context. |
| L2 | Integrity ensemble | Similarity, AI-text, identity, media and behavioural signals. |
| L1 | Human review | Appeals, edge cases and high-stakes credential decisions. |
| L0 | Credential | Issuer, scope, evidence, expiry, revocation and privacy. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component | Responsibility / input | Control invariant |
|---|---|---|
| Competency map | Skills, prerequisites, objectives and tier transitions. | No single detection provider becomes a truth oracle for learner authenticity. |
| Task generator | Versioned templates and difficulty calibration. | Integrity signals are calibrated, appealable and separated by modality. |
| Evidence capture | Answer, process, timing and permitted assistance context. | Credentials state exactly what was assessed and under which version. |
| Integrity ensemble | Similarity, AI-text, identity, media and behavioural signals. | Rewards do not incentivise rapid low-quality completion over learning. |
| Human review | Appeals, edge cases and high-stakes credential decisions. | Safety controls remain identical regardless of earned tier or token status. |
| Credential | Issuer, scope, evidence, expiry, revocation and privacy. | No single detection provider becomes a truth oracle for learner authenticity. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID | Failure mode | Failure effect | Primary control | Required state |
|---|---|---|---|---|
| `FM-26-01` | Sybil farming | Rewards multiply across identities | Graph, device and economic controls | **WITHHOLD/REVIEW** |
| `FM-26-02` | False accusation | Legitimate learner is blocked | Ensemble and appeal | **HUMAN REVIEW** |
| `FM-26-03` | Credential inflation | Tier no longer predicts competence | Calibration and expiry | **REASSESS** |
| `FM-26-04` | Privacy overreach | Anti-abuse collection exceeds need | Minimisation and retention | **DELETE/RESTRICT** |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID | State | Required evidence |
|---|---|---|
| `EVD-26-01` | **ACCEPTED** | Competency framework and psychometric validation plan. |
| `EVD-26-02` | **ACCEPTED** | Provider-by-provider integration, rights and accuracy limits. |
| `EVD-26-03` | **ACCEPTED** | Sybil, collusion and false-positive benchmarks. |
| `EVD-26-04` | **ACCEPTED** | Credential schema, revocation, recovery and privacy design. |
| `EVD-26-05` | **ACCEPTED** | Appeals, human review and adverse-action process. |

## Related records

- [Controlled Technical Specifications](../weni-model-and-system-architecture.md)
- [Evidence Center](../../evidence-center.md)
- [Release Manifest](../../evidence-center/release-manifest.md)
