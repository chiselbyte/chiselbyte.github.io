## The problem

A digital agency was reselling WhatsApp messaging to merchant clients by going through a BSP (Business Solution Provider). Every message routed through a third party. The BSP kept the margin and owned the relationship with Meta. The agency wanted to own the infrastructure — and the margin — directly.

## What we built

A multi-tenant WhatsApp Business API portal that lets the agency onboard merchant tenants directly via Meta Embedded Signup. End-to-end:

- Meta App Dashboard configuration and policy review
- Embedded Signup flow with WABA scoping
- OAuth + System User token generation, storage, and refresh
- Webhook subscription, verification, and per-tenant routing
- Template lifecycle: creation, submission, approval tracking, versioning
- Phone number registration and verification
- Broadcast campaign tooling with rate-limit awareness
- A clean admin interface tenants can self-serve from

## Status

Full write-up coming soon — including a walk-through of the Meta app review process and the policy answers Meta actually asks. [Get in touch](/contact) if you have a WhatsApp portal project on your roadmap.
