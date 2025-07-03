"use client";

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            We aren’t driven by vanity metrics or tech buzzwords. We’re driven by quality.
          </p>
          <p className="text-md text-gray-500 max-w-2xl mx-auto mb-4">
            Like sculptors choosing the right tools and techniques, we work thoughtfully, deliberately, and collaboratively. Every line of code reflects our values—clarity, simplicity, and reliability. We believe: Good code is clean, testable, and future-ready.
          </p>
          <p className="text-md text-gray-500 max-w-2xl mx-auto mb-4">
            Solutions should solve real problems, not just showcase trends. Integrity matters—both in logic and in how we work with people.
          </p>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Let's build something that lasts</h3>
          <p className="text-md text-gray-600 mb-2">Whether you're modernizing a legacy system or starting a bold new idea, let's connect.</p>
          <a href="mailto:contact@chiselbyte.com" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition-colors duration-200">
            Write to us @ contact@chiselbyte.com
          </a>
        </div>
      </div>
    </section>
  );
}
