## The problem

A financial services firm was running customer onboarding through Excel sheets, Slack handoffs, and ops associates manually nudging documents along. Cases stalled invisibly. Spreadsheets diverged from each other. New hires onboarded slowly because the "process" lived in muscle memory.

The instinct in most teams would be to build a custom admin panel. We didn't.

## What we built

n8n flows that replace the manual coordination layer:

- WhatsApp / SMS-triggered case routing when new applications arrive
- Document collection workflows that automatically chase customers (and ops) when items are missing
- Google Sheets dashboards as the operational view — auto-synced, no manual update
- Webhook-driven case handoffs between teams
- Slack / WhatsApp notifications for SLA breaches and escalations

No admin panel. No bespoke CRUD interface. The ops team reads the n8n flow directly when they want to understand what happens to a case.

## Status

Full write-up coming soon. This case study illustrates [why we use n8n instead of building admin panels](/blog/opinions/n8n-vs-admin-panels). [Get in touch](/contact) if you have a manual ops process that should be automated.
