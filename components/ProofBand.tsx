import Link from "next/link";
import { PRICING_HREF } from "@/lib/pricing";
import { ArrowRight } from "lucide-react";

/**
 * Proof band, immediately below the hero.
 *
 * The homepage previously went hero -> pillars -> work, so a visitor had to
 * scroll through a features list before seeing any reason to believe the
 * claim in the headline. Each item here is a claim the site already makes
 * elsewhere, linked to the page that backs it up — so it is evidence a
 * reader can check in one click, not another adjective.
 */
const proofPoints = [
  {
    label: "Architecture, not logos",
    body: "Case studies show the pipeline, the decisions, and what we would do differently.",
    href: "/work",
    cta: "Read the work",
  },
  {
    label: "Schema-validated output",
    body: "Invalid model output goes to a human review queue. It is never silently coerced.",
    href: "/services/ai-development",
    cta: "See the pipeline",
  },
  {
    label: "Published prices",
    body: "A paid scoping sprint, a fixed-price build, then a monthly retainer. The numbers are on the site.",
    href: PRICING_HREF,
    cta: "See what this costs",
  },
  {
    label: "One business day",
    body: "We reply within one business day. If we're not the right fit, we'll say so.",
    href: "/contact",
    cta: "Start a conversation",
  },
];

export default function ProofBand() {
  return (
    <section className="border-y border-gray-200 bg-white" aria-labelledby="proof-heading">
      <h2 id="proof-heading" className="sr-only">
        Why teams work with us
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-gray-200 sm:divide-y-0 sm:divide-x">
          {proofPoints.map((point) => (
            <Link
              key={point.href}
              href={point.href}
              className="group flex flex-col gap-2 px-0 py-6 sm:px-6 sm:py-8 hover:bg-gray-50 transition-colors"
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-green-700">
                {point.label}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">{point.body}</p>
              <span className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                {point.cta}
                <ArrowRight
                  aria-hidden="true"
                  className="w-4 h-4 ml-1 motion-safe:group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
