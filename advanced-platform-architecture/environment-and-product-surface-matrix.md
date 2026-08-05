---
title: Environment and Product Surface Matrix
canonical: >-
  https://docs.whale-cefi.com/advanced-platform-architecture/environment-and-product-surface-matrix
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Whale CeFi operates distinct web, mobile, conversational,
  internal-administration, and institutional surfaces under one canonical state
  contract. Availability resolves per signed production build, reg
---

# Environment and Product Surface Matrix

Whale CeFi operates distinct web, mobile, conversational, internal-administration, and institutional surfaces under one canonical state contract. Availability resolves per signed production build, region, and capability.

## Control model

| Component or state      | Responsibility                                                |
| ----------------------- | ------------------------------------------------------------- |
| Production web          | Next.js, React, Tailwind CSS and Vercel edge delivery.        |
| Mobile application      | React Native and Expo with protected local session state.     |
| Product service UI      | Streaming interface and reviewed modular components.          |
| Internal administration | RBAC, restricted access and privileged workflows.             |
| Institutional surface   | REST and gRPC contracts and OpenAPI 3.1 specification.        |
| Environment control     | Dev, test, staging, pre-production and production separation. |

## Invariants

* Publish maturity and availability per surface, region and build.
* Keep production credentials, data and network paths outside lower environments.
* Use one canonical backend state contract across all clients.
* Separate administrative identity and devices from consumer authentication.
* All institutional HTTP interfaces use valid OpenAPI 3.1 contracts and pass client/server conformance tests.

## Failure containment

| Failure               | Effect                                     | Control                    | Response             |
| --------------------- | ------------------------------------------ | -------------------------- | -------------------- |
| Environment confusion | Test capability is announced as production | Deployment matrix          | Reject and reconcile |
| Data crossover        | Production data enters development         | Account/project isolation  | BLOCK                |
| Client divergence     | Surfaces show inconsistent balances        | Contract conformance tests | NO-GO                |
| Admin exposure        | Privileged surface is internet-accessible  | Restricted access plane    | REVOKE               |

## Operational evidence

* Signed UI deployment matrix and technology stack by region and capability.
* Environment account/project inventory and data-flow map.
* Cross-client contract and state conformance suite.
* Production release/build identifiers by surface.
* Administrative access and device-trust evidence.

## Boundary conditions

Only surfaces with an active production record in the capability registry are exposed as generally available.
