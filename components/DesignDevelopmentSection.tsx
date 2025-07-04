"use client";

import {
  Smartphone,
  Code,
  Monitor,
  ShoppingCart,
  Palette,
  CheckCircle,
  Cloud,
  ShieldCheck,
  Share2,
  Shuffle,
  Database
} from 'lucide-react';
import image from "../assets/images/image3.png";

export default function DesignDevelopmentSection() {
  const services = [
    {
      icon: Monitor,
      title: "Java & Quarkus Development",
      iconColor: "text-green-600"
    },
    {
      icon: Shuffle, // Shuffle for Apache Camel (integration/routing)
      title: "Apache Camel Integrations",
      iconColor: "text-orange-600"
    },
    {
      icon: Share2, // Share2 for Kafka (event streaming)
      title: "Event-driven Solutions with Kafka",
      iconColor: "text-blue-600"
    },
    {
      icon: Cloud,
      title: "Cloud-native Deployments",
      iconColor: "text-blue-600"
    },
    {
      icon: ShieldCheck,
      title: "Secure API Design & Avro-based Serialization",
      iconColor: "text-green-600"
    },
    {
      icon: Palette,
      title: "Responsive design",
      iconColor: "text-pink-600"
    },
    {
      icon: Code,
      title: "React web development",
      iconColor: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile apps development",
      iconColor: "text-green-600"
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-60 right-80 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-60 left-80 w-3 h-3 bg-purple-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left illustration */}
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            <img 
                src={image.src}
                alt=""
                className="w-[28rem] h-[28rem] rounded-2xl shadow-2xl object-contain mx-auto"
              />
          </div>

          {/* Right content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-8 h-1 bg-green-500 rounded-full"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Design & Development
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in building robust, scalable, and modern digital solutions—from enterprise Java and cloud-native systems to seamless integrations, responsive web and mobile apps, and secure APIs. Our team delivers end-to-end design and development tailored to your business needs.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <IconComponent className={`w-5 h-5 ${service.iconColor}`} />
                      </div>
                      <span className="text-gray-700 font-medium">{service.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}