---
title: Eligibility, Timing, and Corrections
canonical: >-
  https://docs.whale-cefi.com/points-and-progression/eligibility-timing-and-corrections
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Progression depends on both the visible objective and the underlying eligible
  event.
---

# Eligibility, Timing, and Corrections

## Eligibility may depend on

* account and identity status;
* country or region;
* age or legal capacity;
* product availability;
* asset, network, amount, and plan state;
* task start and end time;
* prerequisite completion;
* account standing;
* review status;
* and programme-specific terms.

## Time rules

Every timed mechanic should identify:

* authoritative platform timezone;
* local-time display;
* start and end timestamp;
* whether the deadline applies to user submission, blockchain inclusion, confirmation, reconciliation, or final validation;
* grace period, if any;
* and treatment of outages or delayed external systems.

## Duplicate and late events

An idempotent reward system should not credit the same underlying event twice. An event observed after a deadline may qualify only if the published rule defines the relevant event time and the event satisfies it.

## Reversals

XP or rewards may be corrected if the underlying event is reversed, refunded, cancelled, duplicated, fraudulent, misconfigured, or credited in error. The history should preserve the original and correcting entries.

## Configuration errors

If a task, rate boost, chest, or leaderboard was configured incorrectly, Whale CeFi should publish the incident, affected period, correction rule, and appeal path when the error is material.
