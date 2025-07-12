"use client";

import { 
  Database, 
  Globe, 
  FolderOpen, 
  TrendingUp, 
  Folder, 
  Monitor, 
  Mail, 
  Cloud 
} from 'lucide-react';
import image from "../assets/images/image2.png";

export default function CloudHostingSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      iconColor: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Social Media Marketing",
      iconColor: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      iconColor: "text-blue-600"
    },
    {
      icon: Monitor,
      title: "Content Strategy",
      iconColor: "text-blue-600"
    },
    {
      icon: Database,
      title: "Analytics & Reporting",
      iconColor: "text-blue-600"
    },
    {
      icon: Cloud,
      title: "PPC Advertising",
      iconColor: "text-blue-600"
    },
    {
      icon: FolderOpen,
      title: "Influencer Outreach",
      iconColor: "text-blue-600"
    },
    {
      icon: Folder,
      title: "Brand Reputation Management",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section id="digital-marketing" className="py-8 sm:py-12 md:py-20 bg-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-60 right-80 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-60 left-80 w-3 h-3 bg-purple-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left illustration (image on left for desktop) */}
          <div className="relative flex justify-center items-center order-1 lg:order-1 mb-8 lg:mb-0">
            <img 
                src={image.src}
                alt="Digital Marketing Illustration"
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[28rem] lg:h-[28rem] rounded-2xl shadow-2xl object-contain mx-auto"
              />
          </div>

          {/* Right content (text/services on right for desktop) */}
          <div className="space-y-8 order-2 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-8 h-1 bg-green-500 rounded-full"></div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Digital Marketing Services
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Unlock your business potential with our full suite of digital marketing services. From SEO and content strategy to social media and analytics, we help you reach, engage, and convert your audience online.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <IconComponent className={`w-5 h-5 ${service.iconColor}`} />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{service.title}</span>
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