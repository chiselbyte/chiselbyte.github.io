"use client";

import { 
  Settings, 
  Mail, 
  Grid3X3, 
  Info, 
  Package, 
  Bell 
} from 'lucide-react';

export default function OurFeaturesSection() {
  const features = [
    {
      icon: Settings,
      title: "Incredible Infrastructure",
      description: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Notifications",
      description: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Grid3X3,
      title: "Simple Dashboard",
      description: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Info,
      title: "Information Retrieval",
      description: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Package,
      title: "Drag & Drop Functionality",
      description: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Bell,
      title: "Deadline Reminders",
      description: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Features
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center`}>
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