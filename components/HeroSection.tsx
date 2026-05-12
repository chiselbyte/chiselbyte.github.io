"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import image from "../assets/images/image1.jpg";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-8 sm:py-12 md:py-20 flex relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Triangles */}
        <div className="absolute top-20 left-20 w-6 h-6 border-2 border-green-400 rotate-45"></div>
        <div className="absolute top-32 right-40 w-4 h-4 border-2 border-green-400 rotate-45"></div>
        <div className="absolute bottom-40 left-40 w-5 h-5 border-2 border-green-400 rotate-45"></div>

        {/* Circles */}
        <div className="absolute top-40 left-10 w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-80"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-80"></div>

        {/* X shapes */}
        <div className="absolute top-24 right-20 text-green-400 text-2xl font-bold">×</div>
        <div className="absolute bottom-32 left-20 text-green-400 text-xl font-bold">×</div>

        {/* Additional decorative elements */}
        <div className="absolute top-60 right-60 w-8 h-8 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-60 right-80 w-6 h-6 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We build production LLM systems.
                <br />
                <span className="text-green-600">Not chatbots.</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                Structured extraction, classification, decision support — schema-validated, observable, and boring on purpose. We also ship lending platforms, WhatsApp portals, and n8n automations for teams that want fewer demos and more shipped software.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <Link
                  href="#work"
                  onClick={() => trackEvent("cta_see_our_work", { location: "hero" })}
                  className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  See our work
                </Link>
                <Link
                  href="/contact"
                  onClick={() => trackEvent("cta_start_project", { location: "hero" })}
                  className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-full max-w-[16rem] sm:max-w-xs md:max-w-md lg:max-w-2xl">
              {/* Responsive static image */}
              <img
                src={image.src}
                alt="ChiselByte Hero"
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[28rem] lg:h-[28rem] rounded-2xl shadow-2xl object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
