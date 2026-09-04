# Chiselbyte website rebuild — reference notes

A one-shot rewrite of the company website, May 2026, to drop the outdated
"digital marketing agency" positioning and stand the company up as a
**production LLM systems / lending tech / WhatsApp portals / n8n automation**
operator. This file documents what shipped and where things live, so future
work can pick up without re-deriving the context.

---

## TL;DR

The site is a **Next.js 13 App Router + Tailwind + shadcn/ui** application
deployed via **Firebase App Hosting** (`apphosting.yaml`, server-rendered, not
static). Same visual language as before; ~80% of the content was replaced and
the information architecture was restructured around four service pillars.
Contact form posts to **Web3Forms**. Analytics via **Plausible** (gated off by
default).

---

## Positioning we built around

The site stands out by two explicit levers:

1. **Credibility signal** — proof-heavy, case-study-driven, technical depth
   visible on every page.
2. **Point of view** — strong opinions, contrarian takes, a clear philosophy
   of how Chiselbyte builds (the Basecamp / Pieter Levels playbook).

Hero copy (locked in during planning, not invented loosely): **"We build
production LLM systems. Not chatbots."**

Four manifesto principles run through the site (homepage section + dedicated
`/how-we-build` page + about page):

1. We ship the smallest stack that survives production.
2. Schemas are non-negotiable, especially with LLMs.
3. We don't build admin panels. We use n8n.
4. No retainers without a scoped win first.

---

## Site structure (file map)

```
app/
├── layout.tsx                       Root metadata, OG defaults, optional Plausible script
├── page.tsx                         Homepage (Hero, Pillars, Work, Manifesto teaser, Tech, Writing, CTA)
├── robots.ts                        Dynamic robots.txt
├── sitemap.ts                       Dynamic sitemap from blog.json + work.json + static routes
├── about/page.tsx                   "A small senior team. Pune, India. Boring software, on purpose."
├── about/layout.tsx                 Per-page metadata
├── contact/page.tsx                 Form posts JSON directly to Web3Forms (no backend route)
├── contact/layout.tsx               Per-page metadata
├── how-we-build/page.tsx            Full manifesto (4 principles, prose elaboration)
├── work/page.tsx                    Case study index with pillar filter chips
├── work/layout.tsx                  Per-page metadata
├── work/[slug]/page.tsx             Case study detail (markdown body + SVG diagram per slug)
├── blog/page.tsx                    Top-level blog index with category filter
├── blog/layout.tsx                  Per-page metadata
├── blog/[category]/page.tsx         Posts within a category, with empty-state CTA
├── blog/[category]/[slug]/page.tsx  Blog post (markdown body, prose styling, dynamic OG)
├── services/ai-development/page.tsx       Pillar page (uses PillarPageLayout)
├── services/lending/page.tsx              Pillar page
├── services/whatsapp/page.tsx             Pillar page
└── services/automation/page.tsx           Pillar page

components/
├── Header.tsx                       Top nav with Services dropdown
├── Footer.tsx                       Three-column footer
├── HeroSection.tsx                  Homepage hero
├── PillarsSection.tsx               Homepage four-pillar overview cards
├── SelectedWorkSection.tsx          Homepage case study cards (reads work.json)
├── HowWeBuildSection.tsx            Homepage manifesto teaser (dark bg)
├── TechStackSection.tsx             Homepage tech badges grouped by purpose
├── WritingSection.tsx               Homepage latest 3 posts (reads blog.json)
├── ReadyToTalkSection.tsx           Homepage CTA
├── PillarPageLayout.tsx             Shared layout for all 4 service pages
├── ui/SectionHeader.tsx             Shared eyebrow + heading + subtitle
├── ui/*                             shadcn/ui primitives (untouched)
└── diagrams/
    ├── DiagramPrimitives.tsx        Shared NodeBox / Arrow / Pipeline / Branch
    ├── AIArchDiagram.tsx            LLM pipeline (services/ai-development)
    ├── LendingArchDiagram.tsx       Lending state machine (services/lending)
    ├── WhatsAppArchDiagram.tsx      WhatsApp onboarding flow (services/whatsapp)
    ├── AutomationArchDiagram.tsx    n8n flow shape (services/automation)
    └── LeadQualificationDiagram.tsx Lead qualification case study

content/
├── work/
│   ├── lead-qualification-saas.md         Full case study (~1100 words)
│   ├── multi-bureau-credit-dashboard.md   Stub
│   ├── whatsapp-portal-agency.md          Stub
│   └── ops-automation-financial-firm.md   Stub
└── blog/opinions/
    ├── llm-apps-fail-in-production.md     Full POV post
    ├── n8n-vs-admin-panels.md             Full POV post
    └── chat-is-the-worst-llm-ui.md        Full POV post

data/
├── blog.json    Categories + posts metadata (title, description, date, tags, contentPath)
└── work.json    Case study metadata (slug, pillar, outcome, summary, techBadges, date)

lib/
├── analytics.ts   trackEvent helper (Plausible-compatible, no-op when unconfigured)
└── utils.ts       (untouched, shadcn cn helper)

assets/images/    contact.jpg, image1.jpg (hero), logo.png, logo1.png
```

---

## Content storage patterns

| Content type | Where it lives | How to edit |
|---|---|---|
| Homepage section copy | Component files in `components/*Section.tsx` | Edit the array/JSX directly |
| Pillar page copy | `app/services/<slug>/page.tsx` (props passed to `PillarPageLayout`) | Edit the page file |
| Case study metadata | `data/work.json` | Edit JSON, regenerates sitemap on build |
| Case study body | `content/work/<slug>.md` | Edit markdown (rendered via `marked` + `prose-base`) |
| Blog post metadata | `data/blog.json` | Edit JSON |
| Blog post body | `content/blog/<category>/<slug>.md` | Edit markdown |
| Architecture diagrams | `components/diagrams/*Diagram.tsx` | Edit JSX (Tailwind, zero runtime cost) |
| Manifesto principles | `app/how-we-build/page.tsx` (array at top) | Edit the `principles` array |
| About page | `app/about/page.tsx` | Edit JSX |

---

## Key decisions (locked in during planning)

| Question | Decision |
|---|---|
| Case study client naming | **Anonymized** ("a B2B SaaS", "a lending startup"). Technical depth is the credibility. |
| Hero direction | **Anti-hype, technical** — "We build production LLM systems. Not chatbots." |
| Manifesto principles on homepage | **All four** (smallest stack, schemas, n8n, scoped win) |
| Pillar pages structure | Homepage overview + **dedicated page per pillar** |
| POV blog posts | Ship **3 strong opinion posts now** (LLM apps fail, n8n vs admin panels, chat is the worst LLM UI) |
| Visual redesign | **Not in scope** — same Tailwind + decorative geometric language as the original site |

---

## Environment variables

All optional. Site works in dev with no env config.

| Variable | What it does | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Used in `metadataBase`, sitemap, robots, OG tags | `https://chiselbyte.com` |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Contact form delivery key (public by design) | Hard-coded fallback in `app/contact/page.tsx` |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Enables Plausible analytics | unset → no tracking |
| `NEXT_PUBLIC_PLAUSIBLE_SRC` | Override script URL (self-host / Umami) | `https://plausible.io/js/script.js` |

All are documented inline in `apphosting.yaml` with example values, commented out.

---

## Contact form architecture

`Form (client) → POST api.web3forms.com/submit → email`

The form posts directly from the browser to Web3Forms. No backend route — the
contact form does not depend on any server code we ship.

Client-side validation: required fields, email regex, length caps (`maxLength`
on each input: 200/320/5000), `botcheck` honeypot (a Web3Forms-recognized
field that bots fill and humans don't see). On success, `replyto` is set to
the submitter's email so you can reply directly from your inbox.

The form file is `app/contact/page.tsx`. The Web3Forms access key is
hard-coded as `WEB3FORMS_ACCESS_KEY` near the top of that file and can be
overridden via `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. Web3Forms access keys are
public by design — they identify the account, not authenticate it.

Earlier iterations of this rebuild used Firebase Firestore, then Resend, then
a `/api/save-contact` server proxy. All removed in favor of direct
client → Web3Forms — simpler, no server cold-start latency, no 502s from
flaky backends, and the access key is meant to be public anyway.

---

## Analytics

`lib/analytics.ts` exports a typed `trackEvent(name, props?)` helper. It calls
`window.plausible(...)` if Plausible is loaded; otherwise it's a no-op (with a
debug log in dev). Compatible with any provider that exposes a Plausible-style
API (Umami, self-hosted Plausible, etc.) — swap providers by changing the
script URL via `NEXT_PUBLIC_PLAUSIBLE_SRC`.

Instrumented events (see `AnalyticsEvent` union in `lib/analytics.ts`):

- Hero / Selected Work / Writing / Ready to Talk CTA clicks
- Pillar card clicks (homepage)
- Case study + blog post link clicks
- `contact_form_submit` / `contact_form_success` / `contact_form_error`

---

## Typography scale

After an initial pass at "large heroic" sizes, the scale was reduced one step
across the board:

- Page hero H1: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (caps at 48px)
- Section H2: `text-lg sm:text-xl md:text-2xl` (caps at 24px) for pillar
  sections; `text-xl sm:text-2xl md:text-3xl lg:text-4xl` for homepage
  section headers
- Body / lists: `text-sm sm:text-base`
- Markdown prose: `prose-base` (was `prose-lg`)
- Header nav: `text-sm lg:text-base`

If the site ever feels too dense again, reverse direction by bumping each
class one step up.

---

## SEO

- `app/robots.ts` (dynamic robots.txt, points at sitemap)
- `app/sitemap.ts` (dynamic, includes static routes + all case studies +
  blog categories + blog posts, with sensible `priority` + `changeFrequency`)
- Root `metadata` with `metadataBase`, title template, default OG + Twitter
- Per-page `metadata` exports (or sibling `layout.tsx` for client pages)
- `generateMetadata()` on `/work/[slug]` and `/blog/[category]/[slug]` for
  dynamic OG / Twitter / `publishedTime` / `tags`

---

## Deployment

Target: **Firebase App Hosting** (`apphosting.yaml`, server-rendered).

- `next.config.js` has `output: 'standalone'`
- `firebase.json` at the root is **legacy** — it's configured for static
  hosting (`"public": "out"`), which is incompatible with server-rendered
  output. It's dormant; only matters if someone runs `firebase deploy --only
  hosting`. Safe to delete if cleanup is desired.

To enable analytics + custom domain after first deploy:

```bash
firebase apphosting:secrets:set WEB3FORMS_ACCESS_KEY   # only if rotating
# Then uncomment the relevant entries in apphosting.yaml.
```

---

## What's not done

These were on the original plan but explicitly skipped or deferred:

- **`gray-matter` frontmatter migration** — post metadata is currently in
  `data/blog.json`. Moving it into the markdown frontmatter would be cleaner,
  but the JSON works fine. Refactor only.
- **Architecture diagrams for the three stub case studies** —
  `multi-bureau-credit-dashboard`, `whatsapp-portal-agency`,
  `ops-automation-financial-firm`. Their markdown is also stubbed. Pattern is
  established: add a TSX diagram in `components/diagrams/`, register it in
  the `caseStudyDiagrams` map in `app/work/[slug]/page.tsx`, flesh out the
  markdown.
- **Visual redesign** — kept the original geometric language (gradient dots,
  pink/purple/orange accents) per the brief. The brand will eventually want a
  more "operator-serious" pass.
- **Click analytics rollout** — `lib/analytics.ts` is fully wired, but
  `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is unset, so nothing is being tracked yet.
  Set the env var to flip it on.

---

## Pitfalls (lessons from this rebuild)

1. **Don't add `prose` classes without `@tailwindcss/typography` installed.**
   The original blog used `prose prose-sm` with no plugin installed, so it
   degraded silently. Installed in this rebuild.
2. **Header dropdown previously read from `data/blog.json`** — the new
   Services dropdown is hardcoded in `Header.tsx` instead, because the
   service taxonomy is more stable than the blog one.
3. **Firestore was breaking the contact form silently.** The old
   `lib/firebase.ts` initialized with empty env vars and the `addDoc` call
   would fail at runtime. Removed entirely in favor of Web3Forms.
4. **If the dev server seems to render unstyled HTML**, kill any stale
   `next dev` processes (`pkill -f "next dev"`), `rm -rf .next`, restart.
   That was the root cause of one false alarm during this rebuild.
