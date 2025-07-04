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
      iconColor: "text-green-600"
    },
    {
      icon: Globe,
      title: "Social Media Marketing",
      iconColor: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      iconColor: "text-green-600"
    },
    {
      icon: Monitor,
      title: "Content Strategy",
      iconColor: "text-green-600"
    },
    {
      icon: Database,
      title: "Analytics & Reporting",
      iconColor: "text-green-600"
    },
    {
      icon: Cloud,
      title: "PPC Advertising",
      iconColor: "text-green-600"
    },
    {
      icon: FolderOpen,
      title: "Influencer Outreach",
      iconColor: "text-green-600"
    },
    {
      icon: Folder,
      title: "Brand Reputation Management",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-8 h-1 bg-green-500 rounded-full"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Digital Marketing Services
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlock your business potential with our full suite of digital marketing services. From SEO and content strategy to social media and analytics, we help you reach, engage, and convert your audience online.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <IconComponent className={`w-5 h-5 ${service.iconColor}`} />
                      </div>
                      <span className="text-gray-700 font-medium">{service.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative flex justify-center items-center">
            <img 
                src={image.src}
                alt=""
                className="w-[28rem] h-[28rem] rounded-2xl shadow-2xl object-contain mx-auto"
              />
          </div>
        </div>
      </div>
    </section>
  );
}