"use client";

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

export default function ReadyToTalkSection() {
  return (
    <section className="bg-gradient-to-br from-green-300 via-green-200 to-blue-400 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-60 right-80 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-60 left-80 w-3 h-3 bg-purple-400 rounded-full"></div>
      </div>

      <div className="py-10 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Have a scoped problem?
              <br />
              Let's pick the smallest thing that ships.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-800/90 leading-relaxed">
              We respond within one business day. If we're not the right fit, we'll say so.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                onClick={() => trackEvent("cta_start_project", { location: "ready_to_talk" })}
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start a project
              </Link>
              <Link
                href="/how-we-build"
                onClick={() => trackEvent("cta_see_how_we_work", { location: "ready_to_talk" })}
                className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300"
              >
                See how we work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
