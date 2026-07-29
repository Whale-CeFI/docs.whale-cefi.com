---
title: "Governance and Responsibility"
description: "How product, finance, security, custody, AI, risk and legal authority remain separated."
canonical: "https://docs.whale-cefi.com/developers-and-reference/governance-and-responsibility"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Governance and Responsibility

How product, finance, security, custody, AI, risk and legal authority remain separated.

Good governance makes it impossible for one person to silently change the product, financial record, custody policy and public disclosure.

| Decision                | Responsible function          | Independent check                           |
| ----------------------- | ----------------------------- | ------------------------------------------- |
| Product terms and rates | Product + Finance             | Risk + Legal                                |
| Reward funding          | Treasury                      | Finance Control + Risk                      |
| Ledger policy           | Finance Engineering           | Financial Controller                        |
| Custody policy          | Treasury Operations           | Security + approval quorum                  |
| Contract upgrade        | Smart Contract Engineering    | Security review + timelock authority        |
| AI safety policy        | AI Product + Model Governance | Security + Legal/Risk                       |
| Incident reopening      | Incident Commander            | Finance, Security and accountable executive |
| Public claim            | Communications owner          | Evidence owner + Legal                      |

Committees publish a charter, membership by role, quorum, conflicts policy, minutes policy and escalation path.

## Segregation of duties

The role model prohibits toxic combinations such as code approval plus production deployment plus custody approval; reward-rate creation plus ledger posting; or AI policy change plus benchmark approval. Break-glass access is time-bound, independently approved and reviewed after use.

Every material decision produces a signed record with scope, evidence, dissent, residual risk, effective time and review date.
