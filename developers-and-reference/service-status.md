---
title: "Service Status"
description: "Current capability state, dependency health, incident history and reconciliation condition."
canonical: "https://docs.whale-cefi.com/developers-and-reference/service-status"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Service Status

Current capability state, dependency health, incident history and reconciliation condition.

The status page reports user journeys, not only server uptime. Deposits, plan opening, accrual display, withdrawals, account access, WENI, each supported network and each critical provider receive an independent state.

States are operational, degraded, read-only, scoped pause, maintenance or incident. Financial safety indicators show reconciliation condition and pending-age bands without exposing sensitive data.

Incident history remains available with start time, affected scope, user impact, updates, resolution and post-incident review.

## Status authority

Automated signals propose state; the incident workflow assigns owner and communication. Status data is signed by the service-status pipeline and sourced from journey SLOs, business invariants, provider health and reconciliation controls.

Scheduled maintenance lists affected capability, start and end window, rollback plan and next update. A missed update is itself visible.
