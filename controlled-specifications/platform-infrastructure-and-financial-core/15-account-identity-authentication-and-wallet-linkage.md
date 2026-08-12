---
title: Account Identity, Authentication, and Wallet Linkage
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/15-account-identity-authentication-and-wallet-linkage
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-15
---

# Account Identity, Authentication, and Wallet Linkage

**Account Identity, Authentication, and Wallet Linkage** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 15 is part of the 29 July 2026 official release. Its `FM-15-xx` controls and `EVD-15-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

A UUIDv4 is an internal identifier, not a privacy control by itself. Whale CeFi must isolate PII, authentication identities and wallet relationships through explicit mapping stores, consent, cryptographic proof and revocation.

### Normative design rules

* Prefer SIWE/EIP-4361-style domain, nonce, chain and expiry binding over ambiguous personal\_sign text.
* Wallet proof authenticates address control, not legal identity or asset ownership.
* Separate PII store, account profile and public on-chain history.
* Protect recovery and wallet relinking against account takeover.
* Record consent and purpose when linked addresses drive product behaviour.

### Boundary / not claimed

A UUID does not ‘fully isolate’ personal and on-chain data without separate storage, access and purpose controls.

## Reference architecture

| Layer | Component           | Responsibility                                              |
| ----- | ------------------- | ----------------------------------------------------------- |
| L5    | Internal user ID    | Stable UUID that contains no embedded personal meaning.     |
| L4    | Web2 identity       | Email/OAuth identity with session and recovery controls.    |
| L3    | Wallet identity     | Address ownership proof using domain-bound signed message.  |
| L2    | Mapping vault       | Restricted relationship between account, PII and addresses. |
| L1    | Session service     | Short-lived token, device and risk state.                   |
| L0    | Consent/ revocation | User control over linkage and permitted uses.               |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component           | Responsibility / input                                      | Control invariant                                                                                      |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Internal user ID    | Stable UUID that contains no embedded personal meaning.     | Prefer SIWE/EIP-4361-style domain, nonce, chain and expiry binding over ambiguous personal\_sign text. |
| Web2 identity       | Email/OAuth identity with session and recovery controls.    | Wallet proof authenticates address control, not legal identity or asset ownership.                     |
| Wallet identity     | Address ownership proof using domain-bound signed message.  | Separate PII store, account profile and public on-chain history.                                       |
| Mapping vault       | Restricted relationship between account, PII and addresses. | Protect recovery and wallet relinking against account takeover.                                        |
| Session service     | Short-lived token, device and risk state.                   | Record consent and purpose when linked addresses drive product behaviour.                              |
| Consent/ revocation | User control over linkage and permitted uses.               | Prefer SIWE/EIP-4361-style domain, nonce, chain and expiry binding over ambiguous personal\_sign text. |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode       | Failure effect                         | Primary control                | Required state |
| ---------- | ------------------ | -------------------------------------- | ------------------------------ | -------------- |
| `FM-15-01` | Signature phishing | User signs misleading message          | Decoded domain-bound challenge | **REJECT**     |
| `FM-15-02` | Account takeover   | Attacker relinks wallet                | Step-up and delay              | **FREEZE**     |
| `FM-15-03` | UUID misconception | PII remains linkable despite random ID | Mapping isolation              | **CORRECT**    |
| `FM-15-04` | Session theft      | Attacker controls account              | Rotation/device/risk controls  | **REVOKE**     |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                      |
| ----------- | ------------ | ------------------------------------------------------ |
| `EVD-15-01` | **ACCEPTED** | UUIDv4, OAuth/JWT and wallet-signature hybrid model.   |
| `EVD-15-02` | **ACCEPTED** | Identity store and mapping-vault architecture.         |
| `EVD-15-03` | **ACCEPTED** | SIWE/challenge, nonce, replay and phishing tests.      |
| `EVD-15-04` | **ACCEPTED** | Account recovery and wallet-relink threat model.       |
| `EVD-15-05` | **ACCEPTED** | Consent, unlinking and linked-data deletion behaviour. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
