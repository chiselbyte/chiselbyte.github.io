"use client";

import { Database, Code, Users, Shield } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Database,
      title: "Zero Configuration",
      description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Code,
      title: "Code Security",
      description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Access Controlled",
      description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center`}>
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}