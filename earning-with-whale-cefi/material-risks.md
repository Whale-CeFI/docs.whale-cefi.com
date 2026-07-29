---
title: "Material Risks"
description: "The main ways value, access or timing can be affected and how each risk is controlled."
canonical: "https://docs.whale-cefi.com/earning-with-whale-cefi/material-risks"
document_status: "official-release"
audience: "public"
last_reviewed: "2026-07-29"
---

# Material Risks

The main ways value, access or timing can be affected and how each risk is controlled.

Crypto earning products are not bank deposits and rewards are not guaranteed. Before opening a plan, understand six risk families:

| Risk           | What it can change                            | Primary control                                            |
| -------------- | --------------------------------------------- | ---------------------------------------------------------- |
| Market         | The external value of the asset               | No value guarantee; asset-specific disclosure              |
| Network        | Confirmation time, fees or availability       | Finality policy, provider diversity and degraded modes     |
| Smart contract | Loss or blocked operations after a code fault | Versioned deployments, audits, limits and pause controls   |
| Custody        | Access to keys or ability to move assets      | MPC policy, role separation, allowlists and quorum         |
| Liquidity      | Time needed to make an exit available         | Capacity limits, liquidity planning and transparent queues |
| Operational    | Account, service or reconciliation failure    | Ledger controls, monitoring, incident states and recovery  |

Security controls reduce risk; they do not remove it. An audit is evidence about one code scope and version, not a promise that nothing can fail.

## Risk ownership

Every material risk has a named owner, a measurable indicator, a limit, a response, a residual-risk statement and a review cadence. A product cannot remain open when an applicable limit is breached without an approved exception that has an owner and expiry.

## Safe failure

The platform uses scoped states: normal, degraded, read-only, affected-product pause, manual reconciliation and controlled reopening. A global “pause everything” is not the only response because it can also prevent safe exits.
