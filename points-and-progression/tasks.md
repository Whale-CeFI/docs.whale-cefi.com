---
title: "Tasks"
description: "Tasks are versioned objectives connected to eligible product activity, learning, referrals, profile setup, or seasonal events. A task is complete only when its underlying event reaches the required final state."
canonical: "https://docs.whale-cefi.com/points-and-progression/tasks"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Tasks

Tasks are versioned objectives connected to eligible product activity, learning, referrals, profile setup, or seasonal events. A task is complete only when its underlying event reaches the required final state.

## Current foundation catalogue

| Objective | Reward | Validation |
|---|---:|---|
| Complete a first deposit of at least USD 200 equivalent | 100 XP | Deposit credited and reconciled |
| Open a 30-day plan with at least USD 200 equivalent | 120 XP | Position active |
| Open a 90-day plan with at least USD 300 equivalent | 200 XP | Position active |
| Open a 180-day plan with at least USD 500 equivalent | 350 XP | Position active |
| Open a second active position of at least USD 300 equivalent | 250 XP | Two qualifying positions active |
| Enable Auto-Reinvest | 150 XP | Eligible rule active after confirmation |
| Open a 365-day plan with at least USD 1,000 equivalent | 650 XP | Position active |
| Open a 365-day plan with at least USD 5,000 equivalent | 1,400 XP | Position active |

State-based milestones include active principal thresholds of USD 1,000, 5,000, 10,000, 25,000, and 50,000 equivalent; multi-position thresholds; and a 30/90/180-day plan ladder. The live catalogue remains authoritative for exact reward, timing, asset scope, and repeatability.

## Task card contract

Every task shows title, objective, reward, progress measure, eligible assets and networks, minimum amount, required state, start and end time, timezone, repeatability, prerequisites, exclusions, and review status.

## Finality

A transaction broadcast, detected deposit, pending withdrawal, cancelled position, refunded purchase, or duplicated event does not qualify as final. If the underlying event is reversed, the corresponding XP event is reversed with an auditable reason.

## Task classes

Action-based tasks require a new event after activation. State-based tasks inspect current eligible state. Sequential tasks require visible prerequisites. Repeatable tasks publish their cooldown and maximum count. Time-limited tasks publish the exact closing time and treatment of events still pending at that time.
