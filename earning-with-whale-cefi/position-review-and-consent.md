---
title: Position Review and Consent
canonical: >-
  https://docs.whale-cefi.com/earning-with-whale-cefi/position-review-and-consent
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  The immutable review object a user sees and accepts before a position can be
  opened.
---

# Position Review and Consent

The immutable review object a user sees and accepts before a position can be opened.

The final confirmation screen is a cryptographically identified review object, not a transient rendering. It contains every material term needed to reproduce the position and evaluate the action later.

![Plan confirmation](../.gitbook/assets/product-review.svg)

## Review object

| Field           | Canonical rule                                                                               |
| --------------- | -------------------------------------------------------------------------------------------- |
| Review identity | Globally unique identifier plus a hash over the canonical serialized object                  |
| Product version | Immutable identifier for asset, term, rate, calculation, funding, exit, and disclosure terms |
| Asset identity  | Namespace, chain identifier, token reference, decimals, and token-behavior profile           |
| Principal       | Integer base units; display formatting is never used for calculation                         |
| Rate version    | Typed monthly rate, scale, effective interval, and day-count rule                            |
| Time            | Opening, eligibility, maturity, and review-expiry timestamps in UTC                          |
| Exit rule       | Versioned maturity, early-exit, queue, fee, and availability behavior                        |
| Funding policy  | Coverage cohort, waterfall, reserve requirement, and capacity reservation                    |
| Disclosures     | Content hashes for risk, fee, legal-entity, and regional eligibility versions                |
| Authorization   | Authenticated subject, acceptance time, session assurance, and signature evidence            |

The user accepts the exact review hash. Any material change — asset, amount, term, rate, fee, maturity, source mix, destination, or risk disclosure — invalidates the review and requires a new confirmation.

## Consent separation

Account authentication, wallet connection, token allowance, plan acceptance, transaction signature, marketing consent, and WENI memory consent are separate permissions. No earlier permission implies a later one. Consent is purpose-bound, time-bound where appropriate, and revocable unless the action has already created an irreversible external settlement.

## Capacity admission

Before confirmation the product service reserves capacity against the exact cohort. The reservation expires with the review object. Opening fails closed if capacity, funding coverage, asset status, network status, account policy, or quote validity changes before commit.

## Receipt

Successful opening produces a receipt containing the accepted review hash, position identifier, ledger journal, external transaction or custody reference where applicable, effective time, and a human-readable rendering. The rendering can evolve; the signed facts cannot.
