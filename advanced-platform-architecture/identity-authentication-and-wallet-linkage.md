---
title: Identity, Authentication, and Wallet Linkage
canonical: >-
  https://whale-cefi.com/docs/advanced-platform-architecture/identity-authentication-and-wallet-linkage
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Identity, Authentication, and Wallet Linkage

A UUIDv4 is an internal identifier, not a privacy control by itself. Whale CeFi isolates PII, authentication identities, and wallet relationships through explicit mapping stores, consent, cryptographic proof, and revocation.

## Control model

| Component or state  | Responsibility                                              |
| ------------------- | ----------------------------------------------------------- |
| Internal user ID    | Stable UUID that contains no embedded personal meaning.     |
| Web2 identity       | Email/OAuth identity with session and recovery controls.    |
| Wallet identity     | Address ownership proof using domain-bound signed message.  |
| Mapping vault       | Restricted relationship between account, PII and addresses. |
| Session service     | Short-lived token, device and risk state.                   |
| Consent/ revocation | User control over linkage and permitted uses.               |

## Invariants

* Prefer SIWE/EIP-4361-style domain, nonce, chain and expiry binding over ambiguous personal\_sign text.
* Wallet proof authenticates address control, not legal identity or asset ownership.
* Separate PII store, account profile and public on-chain history.
* Protect recovery and wallet relinking against account takeover.
* Record consent and purpose when linked addresses drive product behaviour.

## Failure containment

| Failure            | Effect                                 | Control                        | Response             |
| ------------------ | -------------------------------------- | ------------------------------ | -------------------- |
| Signature phishing | User signs misleading message          | Decoded domain-bound challenge | REJECT               |
| Account takeover   | Attacker relinks wallet                | Step-up and delay              | FREEZE               |
| UUID misconception | PII remains linkable despite random ID | Mapping isolation              | Reject and reconcile |
| Session theft      | Attacker controls account              | Rotation/device/risk controls  | REVOKE               |

## Operational evidence

* UUIDv4, OAuth/JWT and wallet-signature hybrid model.
* Identity store and mapping-vault architecture.
* SIWE/challenge, nonce, replay and phishing tests.
* Account recovery and wallet-relink threat model.
* Consent, unlinking and linked-data deletion behaviour.

## Boundary conditions

A UUID does not ‘fully isolate’ personal and on-chain data without separate storage, access and purpose controls.
