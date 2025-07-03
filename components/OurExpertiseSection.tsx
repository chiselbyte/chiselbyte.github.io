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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our expertise - <span className="text-blue-600">Precision focused</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            We don't do everything—and that's by design.
          </p>
          <p className="text-md text-gray-500 max-w-2xl mx-auto">
            At ChiselByte, we specialize in a carefully curated stack of technologies and platforms that we’ve mastered through experience and dedication. Whether it’s cloud-native microservices, API integrations, or event-driven architecture, we go deep—not wide.
          </p>
        </div>
        {/* Expertise List */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Our core areas of expertise:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside mx-auto max-w-xl">
            {expertiseAreas.map((area, idx) => (
              <li key={idx} className="text-gray-700 text-lg pl-2">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
