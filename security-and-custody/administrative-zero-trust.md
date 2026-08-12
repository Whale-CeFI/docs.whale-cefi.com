---
title: Administrative Zero Trust
canonical: https://docs.whale-cefi.com/security-and-custody/administrative-zero-trust
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
---

# Administrative Zero Trust

Administrative and workload access is governed by identity, device posture, purpose, time and approval rather than network location. Consumer authentication, staff federation, cloud administration, Kubernetes access, database roles and custody authority remain distinct identity planes.

## Control model

| Component or state | Responsibility                                             |
| ------------------ | ---------------------------------------------------------- |
| Consumer identity  | Email/OAuth, wallet proof and account recovery.            |
| Workforce identity | Federated SSO, phishing-resistant MFA and managed devices. |
| Workload identity  | Short-lived service credentials and scoped roles.          |
| Cloud/Kubernetes   | Just-in-time administration and audited sessions.          |
| Data privilege     | Database, ledger and analytics role separation.            |
| Custody privilege  | Independent MPC custody policy and approval plane.         |

## Invariants

* Use phishing-resistant MFA for all privileged staff and custody roles.
* Issue time-bound just-in-time privilege with ticket and approver context.
* Prohibit shared accounts and static service credentials where workload identity exists.
* Record and review privilege use across cloud, cluster, data and custody planes.
* Continuously detect toxic role combinations and dormant privilege.

## Failure containment

| Failure                | Effect                              | Control           | Response |
| ---------------------- | ----------------------------------- | ----------------- | -------- |
| Session theft          | Attacker inherits staff privilege   | MFA/device/JIT    | REVOKE   |
| Workload impersonation | Service reaches financial data      | Workload identity | DENY     |
| Toxic combination      | One person deploys and moves assets | SoD analysis      | Isolate  |
| VPN overtrust          | Network access bypasses identity    | Per-request auth  | BLOCK    |

## Operational evidence

* Admin RBAC and internal VPN access.
* Identity-plane and privileged-role inventory.
* MFA, device, JIT and break-glass configuration evidence.
* Quarterly access recertification and toxic-role review.
* Privileged-session and custody-approval correlation test.

## Boundary conditions

VPN membership is not treated as proof of identity, authorisation or device trust.
