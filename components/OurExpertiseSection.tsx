"use client";

export default function OurExpertiseSection() {
  const expertiseAreas = [
    "Java & Quarkus Development",
    "Apache Camel Integrations",
    "Event-driven Solutions with Kafka",
    "Cloud-native Deployments (Kubernetes, OpenShift)",
    "Secure API Design & Avro-based Serialization"
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-24 left-24 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our expertise - <span className="text-blue-600">Precision focused</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-2">
            We don't do everything—and that's by design.
          </p>
          <p className="text-md text-gray-500 leading-relaxed max-w-2xl mx-auto">
            At ChiselByte, we specialize in a carefully curated stack of technologies and platforms that we’ve mastered through experience and dedication. Whether it’s cloud-native microservices, API integrations, or event-driven architecture, we go deep—not wide.
          </p>
        </div>
        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {expertiseAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 flex items-center"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
              <span className="text-gray-800 text-lg font-semibold">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
