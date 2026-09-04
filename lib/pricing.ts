/**
 * Single source of truth for every published price on the site.
 *
 * Nothing else in the repo may hard-code a currency amount. The pricing
 * section, the schema.org Offer nodes, and the manifesto's fourth principle
 * all read from here, so changing a number is a one-line change.
 */

export const CURRENCY = "USD";

/**
 * ── BOOKING URL ─────────────────────────────────────────────────────────
 * Microsoft Bookings link for the free fit call. This is the ONLY place the
 * booking URL appears. Empty it and the CTA falls back to the contact form —
 * same label, same tracking, one fewer thing to maintain.
 *
 * The `: string` annotation is deliberate: without it TypeScript narrows the
 * value to a literal type and the `||` fallback below becomes dead code.
 */
export const BOOKING_URL: string =
  "https://outlook.office.com/bookwithme/user/6f3dca481d074710bf26ae9bd88a6fee@chiselbyte.com/meetingtype/LttDzbZKdEu548njWFLpzQ2?anonymous&ismsaljsauthenabled&ep=mlink";

export const FIT_CALL_HREF = BOOKING_URL || "/contact";
export const FIT_CALL_IS_EXTERNAL = FIT_CALL_HREF.startsWith("http");
export const FIT_CALL_HINT = FIT_CALL_IS_EXTERNAL
  ? "Pick a slot. No form, and no qualification call before the call."
  : "Tell us roughly what you're trying to ship and we'll send times back the same day.";

/** Canonical pricing anchor. Link here; never repeat the numbers. */
export const PRICING_PATH = "/how-we-build";
export const PRICING_HASH = "what-this-costs";
export const PRICING_HREF = `${PRICING_PATH}#${PRICING_HASH}`;

export const SPRINT_MIN = 1500;
export const BUILD_MIN = 6000;
export const BUILD_MAX = 15000;
export const RETAINER_MIN = 2500;

/** Explicit "en-US" so server and client render byte-identical strings. */
export function usd(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

export interface EngagementStage {
  id: string;
  step: string;
  name: string;
  price: string;
  duration: string;
  summary: string;
  includes: string[];
}

export const ENGAGEMENT: EngagementStage[] = [
  {
    id: "fit-call",
    step: "01",
    name: "Fit call",
    price: "Free",
    duration: "30 minutes",
    summary:
      "Thirty minutes with the engineer who would do the work. We tell you whether this is a thing worth building, a thing you should buy off the shelf, or a thing nobody should build.",
    includes: [
      "A straight answer on whether we're the right team",
      "The rough shape of the system, if there is one",
      "No deck, no written report, no follow-up sequence",
    ],
  },
  {
    id: "scoping-sprint",
    step: "02",
    name: "Scoping sprint",
    price: `From ${usd(SPRINT_MIN)}`,
    duration: "3–5 days · credited against the build",
    summary:
      "We stop guessing and go read the actual system. At the end you own a plan detailed enough to hand to another team, and a fixed price for building it.",
    includes: [
      "A requirements document written for engineers, not for signature",
      "The schema and architecture, drawn and argued for",
      "A working thin slice — real code, running, against your data",
      "A fixed-price quote for the build, with what's excluded named",
    ],
  },
  {
    id: "build",
    step: "03",
    name: "Fixed-price build",
    price: `Typically ${usd(BUILD_MIN)}–${usd(BUILD_MAX)}`,
    duration: "1–2 weeks · the scoped win",
    summary:
      "One deliverable, shipped into your production environment, at the price we quoted at the end of the sprint. If we estimated badly, that's our problem. The price is the price.",
    includes: [
      "Quoted from the sprint's findings, not guessed at on a call",
      "Shipped to production, not to a demo branch",
      "Deployed, instrumented, and handed over with the runbook",
      "Larger systems run past this range — we say so in the quote, not in week three",
    ],
  },
  {
    id: "retainer",
    step: "04",
    name: "Monthly retainer",
    price: `From ${usd(RETAINER_MIN)} / month`,
    duration: "Month to month",
    summary:
      "Hosting, monitoring, incident response, and incremental additions. It starts after something has shipped. Never before.",
    includes: [
      "Infrastructure we run and stay on the hook for",
      "One or two new workflows or features a month, typically",
      "Month to month — no notice period past the month you're in",
      "No retainer without a scoped win first. That one isn't negotiable",
    ],
  },
];

export const CREDIT_NOTE =
  "The sprint fee comes off the build invoice in full if you proceed. If you don't, you keep " +
  "the document, the schema, and the code. We got paid for the week, you own the output, and " +
  "neither side is owed anything. That's the whole arrangement.";

/** The objection-handling line. This is the one that has to land. */
export const WHY_PAID =
  "Why the scoping isn't free: free scoping still gets paid for. It gets paid for by padding " +
  "the build, or by someone junior writing a document in a hurry to win the work, or by us " +
  "saying yes to projects we should have said no to. Charging for the week means we spend it " +
  "reading your code instead of writing a proposal — and it means the number at the end is one " +
  `we'll stand behind. If the sprint concludes you shouldn't build this, you spent ${usd(SPRINT_MIN)} ` +
  "instead of six figures. We consider that the sprint working.";

export const PRICE_DRIVERS =
  "What actually moves a number: how many systems have to be integrated, whether the data is " +
  "clean, how much compliance surface it touches, and how many people have to approve a " +
  "decision. Not headcount. Not how urgent it is.";

export const CURRENCY_NOTE =
  "Prices are in USD and exclude tax (GST where applicable). We invoice in USD or INR — " +
  "the USD figure is the figure.";

export const CLOSING_LINE =
  "Start with the call. It costs nothing and it's the fastest way to find out we're wrong about your problem.";
