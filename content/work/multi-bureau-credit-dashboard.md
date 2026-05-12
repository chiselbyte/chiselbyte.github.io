## The problem

A lending startup needed to make sense of credit bureau data from three sources — CIBIL, CRIF, and Equifax — across consumer and commercial reports. Each bureau returns deeply nested JSON in a different schema, with different naming conventions, different denormalization patterns, and different ideas of what "account active" means. Credit operations was spending more time normalizing data than evaluating borrowers.

## What we built

A bureau ingestion + rendering layer that:

- Ingests structured credit data from CIBIL, CRIF, and Equifax (consumer + commercial variants)
- Normalizes the schemas into a single internal model
- Computes derived insights on top: capital utilization, account tenure, DPD (days past due) bucketing, year-on-year credit trends
- Renders branded, client-ready dashboards that look the same regardless of which bureau the underlying data came from

## Status

Full write-up coming soon. This case study covers a recent proof-of-concept project. [Get in touch](/contact) if you want to dig into the architecture before the public write-up lands.
