---
title: "Daily Bonus and Streaks"
description: "The daily bonus is a light progression mechanic. It rewards a valid return to the platform without requiring a deposit, trade, plan opening, or other financial risk."
canonical: "https://docs.whale-cefi.com/points-and-progression/daily-bonus-and-streaks"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Daily Bonus and Streaks

The daily bonus is a light progression mechanic. It rewards a valid return to the platform without requiring a deposit, trade, plan opening, or other financial risk.

## Daily cycle

The system uses 00:00 UTC as the canonical reset and displays the equivalent local time. A daily collection becomes final when the account is eligible, the request is unique for the day, and the progression ledger posts the event.

The interface shows:

- current streak;
- next reset in UTC and local time;
- today’s confirmed or pending result;
- the next milestone;
- source-specific caps;
- the exact consequence of missing the window.

Missing a day ends the active streak but does not remove previously confirmed XP, chests, achievements, or level history.

## Safe design

No daily mechanic requires a financial action. A message must never imply that a user should deposit or lock assets to avoid losing a streak. Promotional variants use a separate configuration version, start and end time, and eligibility record.
