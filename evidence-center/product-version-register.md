---
title: Product Version Register
canonical: https://whale-cefi.com/docs/evidence-center/product-version-register
document_status: official-release
audience: public
last_reviewed: '2026-07-29'
description: >-
  Every position is bound to an immutable product version. The version record
  contains product ID, asset and network scope, minimum and maximum principal,
  rate nature, rate unit, exact term reward, accr
---

# Product Version Register

Every position is bound to an immutable product version. The version record contains product ID, asset and network scope, minimum and maximum principal, rate nature, rate unit, exact term reward, accrual display convention, maturity, exit rules, fees, funding source, capacity, legal entity, region, risk version, terms hash, and effective interval.

## Version behaviour

An active version can accept new positions while capacity and eligibility remain available. A restricted version accepts only named operations. An exit-only version supports closure but not new exposure. A retired version remains available for historical verification.

Changing a rate, calculation method, network, custody route, early-exit rule, funding source, or legal relationship creates a new product version. Existing locked positions retain the accepted version.

The machine-readable source is [product-versions.json](../data/product-versions.json). Human-readable pages render from the same record.
