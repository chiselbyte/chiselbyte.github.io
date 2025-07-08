"use client";

import { Monitor, Share2, Cloud, Shield } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Monitor,
      title: "Custom Application Development",
      description: "From ideation to production, we build robust, scalable software tailored to your business.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Share2,
      title: "Enterprise Integration",
      description: "Simplify complexity. We connect your systems through reliable, secure, and maintainable integrations.",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: Cloud,
      title: "Microservices & Cloud Migration",
      description: "Break monoliths, embrace scale. We design systems for speed, resilience, and continuous deployment.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Secure API Development",
      description: "From design to deployment, we create APIs that are clean, well-documented, and secured by design.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section id="services" className="py-8 sm:py-12 md:py-20 bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-400 rounded-full"></div>
        <div className="absolute top-60 right-80 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-60 left-80 w-3 h-3 bg-purple-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Services - What we craft
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Every service we offer is born out of expertise and refined through real-world experience:
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="space-y-4 sm:space-y-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className={`w-7 h-7 sm:w-8 sm:h-8 ${feature.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}