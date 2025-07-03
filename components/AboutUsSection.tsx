"use client";

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-24 left-24 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-2">
            We aren’t driven by vanity metrics or tech buzzwords. We’re driven by
            quality.
          </p>
          <p className="text-md text-gray-500 leading-relaxed max-w-2xl mx-auto mb-2">
            Like sculptors choosing the right tools and techniques, we work
            thoughtfully, deliberately, and collaboratively. Every line of code
            reflects our values—clarity, simplicity, and reliability. We believe:
            Good code is clean, testable, and future-ready.
          </p>
          <p className="text-md text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Solutions should solve real problems, not just showcase trends.
            Integrity matters—both in logic and in how we work with people.
          </p>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Let's build something that lasts
          </h3>
          <p className="text-md text-gray-600 mb-2">
            Whether you're modernizing a legacy system or starting a bold new
            idea, let's connect.
          </p>
          <a
            href="mailto:contact@chiselbyte.com"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition-colors duration-200"
          >
            Write to us @ contact@chiselbyte.com
          </a>
        </div>
      </div>
    </section>
  );
}
