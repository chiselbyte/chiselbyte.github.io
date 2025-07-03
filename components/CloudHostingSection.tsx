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

export default function CloudHostingSection() {
  const services = [
    {
      icon: Database,
      title: "Cloud databases",
      iconColor: "text-green-600"
    },
    {
      icon: Globe,
      title: "Website hosting",
      iconColor: "text-green-600"
    },
    {
      icon: FolderOpen,
      title: "File storage",
      iconColor: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Forex trading",
      iconColor: "text-green-600"
    },
    {
      icon: Folder,
      title: "File backups",
      iconColor: "text-green-600"
    },
    {
      icon: Monitor,
      title: "Remote desktop",
      iconColor: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email servers",
      iconColor: "text-green-600"
    },
    {
      icon: Cloud,
      title: "Hybrid cloud",
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
                Cloud Hosting Services
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
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
            <div className="relative w-full max-w-2xl">
              {/* 3D Isometric Cloud Workspace Illustration */}
              <div className="relative">
                <div className="relative transform perspective-1000">
                  {/* Main platform */}
                  <div className="relative">
                    {/* Base platform */}
                    <div className="w-96 h-80 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl shadow-2xl transform skew-y-2 mx-auto relative overflow-hidden">
                      {/* Platform surface gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 opacity-50"></div>
                    </div>
                    
                    {/* Cloud above */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="relative">
                        {/* Main cloud body */}
                        <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full relative shadow-xl">
                          {/* Cloud bumps */}
                          <div className="absolute -top-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full"></div>
                          <div className="absolute -top-6 left-12 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                          <div className="absolute -top-4 right-4 w-14 h-14 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full"></div>
                          
                          {/* Cloud highlight */}
                          <div className="absolute top-2 left-6 w-8 h-4 bg-white opacity-30 rounded-full blur-sm"></div>
                        </div>
                        
                        {/* Small decorative cloud */}
                        <div className="absolute -top-8 -right-8 w-8 h-5 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-80"></div>
                      </div>
                    </div>

                    {/* Desk setup */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
                      {/* Chair */}
                      <div className="absolute top-16 left-8">
                        <div className="w-12 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg relative">
                          <div className="absolute -top-2 left-1 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"></div>
                          {/* Chair arms */}
                          <div className="absolute top-4 -left-1 w-2 h-8 bg-blue-700 rounded-full"></div>
                          <div className="absolute top-4 -right-1 w-2 h-8 bg-blue-700 rounded-full"></div>
                        </div>
                      </div>

                      {/* Monitor */}
                      <div className="absolute top-4 right-8 z-10">
                        <div className="w-24 h-16 bg-gray-200 rounded-lg border-2 border-gray-300 relative shadow-lg">
                          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-md flex items-center justify-center">
                            {/* Screen content - chart */}
                            <div className="space-y-1">
                              <div className="flex space-x-1 items-end">
                                <div className="w-1 h-3 bg-green-400 rounded-full"></div>
                                <div className="w-1 h-5 bg-blue-400 rounded-full"></div>
                                <div className="w-1 h-2 bg-purple-400 rounded-full"></div>
                                <div className="w-1 h-4 bg-pink-400 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Monitor stand */}
                        <div className="w-2 h-4 bg-gray-400 mx-auto"></div>
                        <div className="w-8 h-2 bg-gray-400 rounded-full mx-auto"></div>
                      </div>

                      {/* Server/Database */}
                      <div className="absolute top-8 left-4 z-10">
                        <div className="space-y-1">
                          <div className="w-8 h-3 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-sm relative">
                            <div className="absolute right-1 top-0.5 w-1 h-1 bg-green-400 rounded-full"></div>
                          </div>
                          <div className="w-8 h-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-sm relative">
                            <div className="absolute right-1 top-0.5 w-1 h-1 bg-blue-400 rounded-full"></div>
                          </div>
                          <div className="w-8 h-3 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-sm relative">
                            <div className="absolute right-1 top-0.5 w-1 h-1 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* WiFi symbol */}
                      <div className="absolute top-2 left-16 z-15">
                        <div className="relative">
                          <div className="w-6 h-6 border-2 border-cyan-400 rounded-full opacity-60"></div>
                          <div className="absolute top-1 left-1 w-4 h-4 border-2 border-cyan-400 rounded-full opacity-80"></div>
                          <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full"></div>
                        </div>
                      </div>

                      {/* Floating data elements */}
                      <div className="absolute -top-4 right-4 z-15">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-300 to-green-400 rounded-lg transform rotate-12 opacity-90 shadow-lg"></div>
                      </div>
                      
                      <div className="absolute top-0 left-0 z-15">
                        <div className="w-4 h-4 bg-gradient-to-br from-purple-300 to-purple-400 rounded-lg transform -rotate-12 opacity-90 shadow-lg"></div>
                      </div>

                      {/* Connection lines */}
                      <div className="absolute top-8 left-12 z-5">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                      </div>
                      <div className="absolute top-6 left-20 z-5">
                        <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent transform rotate-45"></div>
                      </div>
                    </div>

                    {/* Additional floating elements around the platform */}
                    <div className="absolute -top-8 -left-8 z-5">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl transform rotate-12 opacity-80 shadow-lg"></div>
                    </div>
                    
                    <div className="absolute -bottom-4 -right-8 z-5">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-pink-400 rounded-xl transform -rotate-12 opacity-80 shadow-lg"></div>
                    </div>
                    
                    <div className="absolute top-4 -right-12 z-5">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-80 shadow-lg"></div>
                    </div>

                    <div className="absolute -bottom-8 -left-4 z-5">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-80 shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}