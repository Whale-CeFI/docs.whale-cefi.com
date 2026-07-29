---
title: "Chests"
description: "Chests are controlled reward containers awarded through progression, tasks, achievements, seasons, daily events, or approved purchases. The result is probabilistic, so the configuration is disclosed before a chest is…"
canonical: "https://docs.whale-cefi.com/points-and-progression/chests"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Chests

Chests are controlled reward containers awarded through progression, tasks, achievements, seasons, daily events, or approved purchases. The result is probabilistic, so the configuration is disclosed before a chest is opened.

## Chest tiers and outcome distribution

| Outcome rarity | Bronze | Epic | Legendary | Mythic |
|---|---:|---:|---:|---:|
| Common | 70% | 55% | 40% | 0% |
| Rare | 25% | 30% | 35% | 40% |
| Epic | 5% | 12% | 20% | 35% |
| Legendary | 0% | 3% | 5% | 20% |
| Mythic | 0% | 0% | 0% | 5% |

Every column totals 100%. The live chest record also publishes the reward pool, draw count, duplicate treatment, expiry, account and period limits, regional availability, and effective configuration hash.

## Randomness and finality

The randomness service commits to the eligible pool and configuration before the draw, records the request identity, produces a verifiable result reference, and posts the reward to the progression ledger. A retry cannot create a second outcome for the same request.

The public explanation exposes enough information to verify fairness without publishing exploitable fraud thresholds or secret material.

## Financial-value rewards

An asset bonus or rate boost is not mixed into a chest merely as visual flair. It requires an approved funding source, liability cap, tax and regional treatment, payout state machine, and a clear statement of whether the result is pending, confirmed, expired, reversed, or under review.
