---
title: Leaderboards and Seasons
canonical: https://whale-cefi.com/docs/points-and-progression/leaderboards-and-seasons
document_status: official-release
audience: public
last_reviewed: '2026-09-02'
description: >-
  How Whale CeFi calculates published standings, distinguishes provisional and
  final results, protects participant privacy, and governs seasonal rewards,
  reviews, corrections, and cancellations.
---

# Leaderboards and Seasons

Leaderboards are read-only projections of confirmed progression activity for a defined category and measurement window. They make comparative standing visible without changing the underlying XP ledger, account balance, product terms, or reward rate.

A leaderboard is valid only when its scoring metric, eligibility, time window, update state, tie rule, review period, and finalisation rule are attached to a published versioned record.

{% hint style="info" %}
Live standings are provisional. A displayed position or reward range does not become final until the published measurement and review windows have closed and the result has been finalised.
{% endhint %}

## How ranking works

Whale CeFi calculates a leaderboard from eligible source records rather than from editable profile values:

1. A task, learning, referral, product, or other eligible event is recorded.
2. The event reaches the confirmation or finality state required by its governing rule.
3. Eligibility, duplication, applicable limits, and review status are evaluated.
4. The confirmed scoring record is included in the applicable category and measurement window.
5. Scores are aggregated by eligible participant and ordered using the published ranking and tie rules.
6. A timestamped leaderboard snapshot is produced for display.

Pending, duplicated, reversed, refunded, cancelled, or ineligible events do not create a final score. A correction changes the source progression record and the next leaderboard calculation; it does not silently rewrite the historical event.

## What can be ranked

Published categories may include:

* total confirmed XP;
* seasonal XP;
* level or cohort standing;
* eligible asset or product categories;
* verified learning progress;
* or another metric announced for a specific event.

The exact scoring unit is stated beside the ranking. Different units, cohorts, products, or time windows are not combined unless the published rules define the conversion and eligibility method.

## What a leaderboard entry shows

Each published leaderboard identifies the information needed to interpret a position:

| Field | Meaning |
|---|---|
| Category | The activity, cohort, product, or metric being ranked |
| Scoring metric | The exact unit used to determine standing |
| Measurement window | The start and end time, including timezone |
| Position and score | The displayed rank and confirmed score |
| Last calculated | When the displayed snapshot was produced |
| Eligibility | Who may participate and which events qualify |
| Tie status | Whether the position is shared or resolved by a published rule |
| Result status | Provisional, under review, final, corrected, or cancelled |
| Reward positions | The positions eligible for rewards, where applicable |
| Finalisation date | When the result is expected to become final |

Public entries use an approved display name, masked identifier, or other pseudonymous label. A leaderboard does not expose an account's exact deposits, balances, addresses, identity documents, or confidential moderation signals.

## Season lifecycle

| Status | Meaning |
|---|---|
| Scheduled | The rules are published, but the measurement window has not opened |
| Live - provisional | Eligible activity is being counted and positions may change |
| Under review | Scoring has ended and validation is in progress |
| Final | The review window has closed and final positions are published |
| Corrected | A material issue required a documented adjustment after publication |
| Cancelled | The season was cancelled under its published rules |

Reward settlement has its own status. A final season can therefore show a reward as pending, claimable, processed, expired, withheld under review, or reversed without changing the final ranking itself.

## Time and snapshots

The season record identifies the authoritative timezone and the timestamp that controls eligibility. Depending on the category, that may be the time of submission, blockchain inclusion, confirmation, reconciliation, or final validation.

Documentation and system records use UTC unless the published record states otherwise. A local-time display is informational and does not replace the authoritative timestamp.

Every live ranking shows when it was last calculated. Delayed external systems, network congestion, or reconciliation queues are handled under the published late-event and outage rules rather than as an unpublished scoring exception.

## Tie-breaking

Tie rules are published before scoring begins and identify:

1. the primary score;
2. each tie-breaker in evaluation order;
3. whether a shared position is possible;
4. how a tied reward allocation is handled;
5. and how a later correction affects the result.

A tie is never silently resolved using an unpublished account attribute or moderation signal. If the season record does not contain a complete tie rule, equal scores remain tied until an approved correction or rule clarification is published.

## Season record

Every season is governed by a versioned record containing:

* season identifier, version, public name, and status;
* start and end time with timezone;
* eligible population and regional restrictions;
* category, scoring metric, and qualifying event states;
* applicable limits and exclusions;
* leaderboard update cadence;
* ranking and tie-breaking rules;
* reward positions and settlement conditions;
* review window and expected finalisation date;
* correction, outage, and cancellation rules;
* and the governing configuration version.

A material rules change creates a new version and a visible change notice. Historical versions remain distinguishable from the active record.

## Provisional results and review

Live rankings remain provisional while qualifying events can still be confirmed, reversed, reconciled, or reviewed. Validation may cover:

* duplicate or reversed events;
* eligibility failures;
* linked-account or coordinated abuse;
* manipulation of referrals, tasks, or learning activity;
* incorrect configuration;
* and material outages affecting the measurement window.

An account under review may be temporarily hidden, marked, or excluded according to the published rules. Whale CeFi does not disclose every fraud signal or detection threshold because doing so could weaken the review system.

An anomaly is not automatically proof of abuse. Material adverse action follows documented rules, attributable evidence, and the applicable review or appeal path. Where appropriate, the affected participant receives a meaningful outcome category without disclosure of confidential controls.

## Privacy and public identity

Leaderboards are designed for visibility without unnecessary disclosure of account information. Public ranking data does not include:

* balances, exact deposits, withdrawals, or wallet addresses;
* identity and verification documents;
* private learning responses;
* internal risk scores or fraud signals;
* or support and investigation records.

Small cohorts may be suppressed or aggregated where a ranking could identify an individual. Participation and profile visibility follow the published privacy and season rules.

## Rewards and settlement

Leaderboard rewards are valid only when they appear in the approved versioned season configuration. That configuration identifies:

* eligible positions;
* reward unit and amount or allocation method;
* total pool and funding source;
* caps and programme liability limits;
* regional or account restrictions;
* claim or settlement timing;
* expiry conditions;
* and reversal or disqualification rules.

XP, levels, badges, chests, and other progression records remain separate from principal, position balances, and product reward rates. A provisional rank does not create a final reward entitlement. Settlement begins only after finalisation and satisfaction of the published eligibility conditions.

## Corrections, outages, and cancellations

If a material configuration error, outage, or data-integrity issue affects a season, finalisation may be paused while the impact is evaluated. A material notice identifies:

* the affected season and measurement window;
* the nature of the issue;
* whether provisional positions were affected;
* the correction method;
* the revised review or finalisation time;
* and the available review or appeal route.

Corrections preserve an auditable relationship between the original record and the correcting entry. If fair reconstruction is not possible, the season may be cancelled under its published rules. Cancellation does not create replacement scoring or reward terms that were never approved.

## Historical seasons and reward claims

Rules and rewards from a completed season do not automatically apply to a later season. Historical references to Top 100, Top 10, Top 3, first-place XP, chests, or similar rewards are valid only for the specific season record in which they were approved.

They are not current rewards unless the active configuration independently confirms them.

## Current season status

Exact active dates, categories, scoring rules, tie-breakers, and rewards are authoritative only when published in the current versioned season record. If no active record is displayed, this page defines the leaderboard governance model and does not announce an active ranking period or reward schedule.

## Related documentation

* [XP](xp.md)
* [Tasks](tasks.md)
* [Eligibility, Timing, and Corrections](eligibility-timing-and-corrections.md)
* [Fair Use and Anti-Abuse](fair-use-and-anti-abuse.md)
* [Privacy and Public Profiles](privacy-and-public-profiles.md)
* [Reviews, Appeals, and Support](reviews-appeals-and-support.md)
* [Rewards and Boosts](rewards-and-boosts.md)
