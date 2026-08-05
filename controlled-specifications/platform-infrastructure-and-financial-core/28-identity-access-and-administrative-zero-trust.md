---
title: Identity, Access, and Administrative Zero Trust
canonical: >-
  https://docs.whale-cefi.com/controlled-specifications/platform/28-identity-access-and-administrative-zero-trust
document_status: official-release
audience: technical
last_reviewed: '2026-07-29'
control_id: PLATFORM-28
description: >-
  Administrative and workload access is governed by identity, device posture,
  purpose, time and approval rather than network location. Consumer
  authentication, staff federation, cloud administration, Ku
---

# Identity, Access, and Administrative Zero Trust

**Identity, Access, and Administrative Zero Trust** defines the controlled engineering contract for **Whale CeFi Platform Infrastructure and Financial Core**: normative design, reference architecture, runtime responsibility, failure containment, and acceptance evidence.

{% hint style="info" %}
**Control rule:** Chapter 28 is part of the 29 July 2026 official release. Its `FM-28-xx` controls and `EVD-28-xx` evidence records are bound to the same released source state and remain continuously reviewable.
{% endhint %}

## Core specification

**Claim state:** RELEASED / CONTROLLED SYSTEM SPECIFICATION

Administrative and workload access is governed by identity, device posture, purpose, time and approval rather than network location. Consumer authentication, staff federation, cloud administration, Kubernetes access, database roles and custody authority remain distinct identity planes.

### Normative design rules

* Use phishing-resistant MFA for all privileged staff and custody roles.
* Issue time-bound just-in-time privilege with ticket and approver context.
* Prohibit shared accounts and static service credentials where workload identity exists.
* Record and review privilege use across cloud, cluster, data and custody planes.
* Continuously detect toxic role combinations and dormant privilege.

### Boundary / not claimed

VPN membership is not treated as proof of identity, authorisation or device trust.

## Reference architecture

| Layer | Component          | Responsibility                                                       |
| ----- | ------------------ | -------------------------------------------------------------------- |
| L5    | Consumer identity  | Email/OAuth, wallet proof and account recovery.                      |
| L4    | Workforce identity | Federated SSO, phishing-resistant MFA and managed devices.           |
| L3    | Workload identity  | Short-lived service credentials and scoped roles.                    |
| L2    | Cloud/Kubernetes   | Just-in-time administration and audited sessions.                    |
| L1    | Data privilege     | Database, ledger and analytics role separation.                      |
| L0    | Custody privilege  | Independent approved MPC custody provider policy and approval plane. |

## Control contract

Each component receives a narrow responsibility, typed inputs, and an observable control invariant. Natural-language output never upgrades a component's authority.

| Component          | Responsibility / input                                               | Control invariant                                                                       |
| ------------------ | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Consumer identity  | Email/OAuth, wallet proof and account recovery.                      | Use phishing-resistant MFA for all privileged staff and custody roles.                  |
| Workforce identity | Federated SSO, phishing-resistant MFA and managed devices.           | Issue time-bound just-in-time privilege with ticket and approver context.               |
| Workload identity  | Short-lived service credentials and scoped roles.                    | Prohibit shared accounts and static service credentials where workload identity exists. |
| Cloud/Kubernetes   | Just-in-time administration and audited sessions.                    | Record and review privilege use across cloud, cluster, data and custody planes.         |
| Data privilege     | Database, ledger and analytics role separation.                      | Continuously detect toxic role combinations and dormant privilege.                      |
| Custody privilege  | Independent approved MPC custody provider policy and approval plane. | Use phishing-resistant MFA for all privileged staff and custody roles.                  |

**Interface invariant:** Every runtime handoff is versioned, attributable and rejectable. Partial, stale, unlicensed or schema-incompatible output remains an explicit state; it cannot be silently normalised into success.

## Failure-mode analysis

A control is incomplete unless the system has a defined state transition when it fails, becomes stale, or loses authority.

| ID         | Failure mode           | Failure effect                      | Primary control   | Required state |
| ---------- | ---------------------- | ----------------------------------- | ----------------- | -------------- |
| `FM-28-01` | Session theft          | Attacker inherits staff privilege   | MFA/device/JIT    | **REVOKE**     |
| `FM-28-02` | Workload impersonation | Service reaches financial data      | Workload identity | **DENY**       |
| `FM-28-03` | Toxic combination      | One person deploys and moves assets | SoD analysis      | **REMOVE**     |
| `FM-28-04` | VPN overtrust          | Network access bypasses identity    | Per-request auth  | **BLOCK**      |

## Release evidence

This official release binds each implementation claim to reviewable evidence, reproducible controls, and the deployed source state. Owner approval and independently issued evidence retain separate provenance labels.

| ID          | State        | Required evidence                                         |
| ----------- | ------------ | --------------------------------------------------------- |
| `EVD-28-01` | **ACCEPTED** | Admin RBAC and internal VPN access.                       |
| `EVD-28-02` | **ACCEPTED** | Identity-plane and privileged-role inventory.             |
| `EVD-28-03` | **ACCEPTED** | MFA, device, JIT and break-glass configuration evidence.  |
| `EVD-28-04` | **ACCEPTED** | Quarterly access recertification and toxic-role review.   |
| `EVD-28-05` | **ACCEPTED** | Privileged-session and custody-approval correlation test. |

## Related records

* [Controlled Technical Specifications](./)
* [Evidence Center](../../evidence-center/)
* [Release Manifest](../../evidence-center/release-manifest.md)
