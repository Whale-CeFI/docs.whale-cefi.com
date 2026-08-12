---
title: Identity Verification
canonical: https://docs.whale-cefi.com/account-and-access/identity-verification
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Identity verification establishes whether a person or organisation is eligible
  for a specific Whale CeFi service. It supports sanctions controls, fraud
  prevention, account recovery, transaction review
---

# Identity Verification

## Verification states

| State           | Meaning                                         | What the user can do                               |
| --------------- | ----------------------------------------------- | -------------------------------------------------- |
| Not started     | Required information has not been submitted     | Review public documentation                        |
| In progress     | Documents or checks are being processed         | Continue allowed non-financial setup               |
| Action required | Information is missing, expired, or unreadable  | Correct the stated issue                           |
| Verified        | Current checks passed for the stated scope      | Use capabilities allowed by the eligibility matrix |
| Limited         | Only named capabilities or limits are available | Follow the displayed restriction                   |
| Under review    | A deterministic or specialist review is open    | Wait for the case outcome                          |
| Expired         | A required record must be refreshed             | Complete reverification                            |

Verification is scoped. Passing an identity check does not guarantee every product, asset, network, rate, limit, or region.

## Data minimisation

The verification service collects only the fields required for the applicable purpose. Sensitive evidence is isolated from general product analytics and WENI memory. Access is role-bound, logged, time-limited where practical, and subject to retention rules.

## Organisations

Institutional verification adds legal entity, beneficial ownership, authorised persons, source-of-funds, mandate, signing policy, and account-purpose checks. An employee’s login does not replace the organisation’s approval quorum.

## If verification fails

The interface identifies the category of failure without disclosing fraud-detection rules that would enable evasion. Where review is permitted, the user receives a case ID, required evidence list, submission deadline, and final outcome route.
