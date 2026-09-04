"use client";

import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { trackEvent } from "@/lib/analytics";
import {
  CLOSING_LINE,
  CREDIT_NOTE,
  CURRENCY_NOTE,
  ENGAGEMENT,
  FIT_CALL_HINT,
  FIT_CALL_HREF,
  FIT_CALL_IS_EXTERNAL,
  PRICE_DRIVERS,
  PRICING_HASH,
  WHY_PAID,
} from "@/lib/pricing";

/** White on dark, to sit on the gray-900 closing callout. */
const buttonClasses =
  "inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 text-base font-semibold rounded-lg transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function PricingSection() {
  // The label is identical either way — only the destination changes when
  // BOOKING_URL is cleared in lib/pricing.ts, so copy and analytics stay stable.
  const label = "Book the 30-minute call";
  const track = () =>
    trackEvent("cta_book_fit_call", {
      location: "pricing_section",
      mode: FIT_CALL_IS_EXTERNAL ? "calendar" : "contact_form",
    });

  return (
    <section
      id={PRICING_HASH}
      aria-labelledby="pricing-heading"
      className="border-t border-gray-100 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div id="pricing-heading">
        <SectionHeader
          eyebrow="Pricing"
          align="left"
          title="What this costs."
          subtitle="Four numbers instead of a discovery process. You'd have to ask eventually, and a conversation that starts with a price is a shorter conversation."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {ENGAGEMENT.map((stage) => (
          <div
            key={stage.id}
            className="bg-gray-50 border border-gray-100 rounded-xl p-5 sm:p-6"
          >
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-lg font-bold text-green-700 font-mono">
                {stage.step}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                {stage.name}
              </h3>
            </div>
            <p className="text-lg sm:text-xl font-bold text-gray-900">{stage.price}</p>
            <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mt-1 mb-4">
              {stage.duration}
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
              {stage.summary}
            </p>
            <ul className="space-y-2">
              {stage.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start space-x-2 text-xs sm:text-sm text-gray-700"
                >
                  <span className="text-green-700 mt-0.5 flex-shrink-0" aria-hidden="true">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          The sprint fee comes off the build.
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{CREDIT_NOTE}</p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{WHY_PAID}</p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{PRICE_DRIVERS}</p>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{CURRENCY_NOTE}</p>
      </div>

      <div className="mt-8 sm:mt-10 bg-gray-900 text-white rounded-2xl p-8 sm:p-10">
        <p className="text-base sm:text-lg font-semibold leading-relaxed mb-2">
          {CLOSING_LINE}
        </p>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">{FIT_CALL_HINT}</p>
        {FIT_CALL_IS_EXTERNAL ? (
          <a
            href={FIT_CALL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={track}
            className={buttonClasses}
          >
            {label}
          </a>
        ) : (
          <Link href={FIT_CALL_HREF} onClick={track} className={buttonClasses}>
            {label}
          </Link>
        )}
      </div>
    </section>
  );
}
