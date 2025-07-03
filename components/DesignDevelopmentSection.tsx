"use client";

import { 
  Smartphone, 
  Code, 
  Monitor, 
  ShoppingCart, 
  Palette, 
  CheckCircle 
} from 'lucide-react';

export default function DesignDevelopmentSection() {
  const services = [
    {
      icon: Smartphone,
      title: "Responsive design",
      iconColor: "text-green-600"
    },
    {
      icon: Code,
      title: "React web development",
      iconColor: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Android apps development",
      iconColor: "text-green-600"
    },
    {
      icon: Code,
      title: "Laravel web development",
      iconColor: "text-blue-600"
    },
    {
      icon: Monitor,
      title: "iOS apps development",
      iconColor: "text-green-600"
    },
    {
      icon: Palette,
      title: "UX/UI design",
      iconColor: "text-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce development",
      iconColor: "text-green-600"
    },
    {
      icon: CheckCircle,
      title: "Print ready design",
      iconColor: "text-green-600"
    }
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
            <div className="relative w-full max-w-2xl">
              {/* Creative Workspace Illustration */}
              <div className="relative">
                <div className="relative transform perspective-1000">
                  {/* Main workspace */}
                  <div className="relative">
                    {/* Desk surface */}
                    <div className="w-96 h-64 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl shadow-2xl transform skew-y-1 mx-auto relative overflow-hidden">
                      {/* Desk surface details */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 opacity-50"></div>
                      {/* Desk edge */}
                      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-br from-orange-300 to-orange-400"></div>
                    </div>
                    
                    {/* Person sitting at desk */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
                      {/* Chair */}
                      <div className="absolute top-12 left-4">
                        <div className="w-14 h-18 bg-gradient-to-br from-red-500 to-red-600 rounded-lg relative">
                          {/* Chair back */}
                          <div className="absolute -top-3 left-1 w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-t-lg"></div>
                          {/* Chair arms */}
                          <div className="absolute top-2 -left-1 w-2 h-8 bg-red-600 rounded-full"></div>
                          <div className="absolute top-2 -right-1 w-2 h-8 bg-red-600 rounded-full"></div>
                        </div>
                      </div>

                      {/* Person */}
                      <div className="absolute top-0 left-6 z-10">
                        {/* Head */}
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full relative">
                          {/* Hair */}
                          <div className="absolute -top-1 left-1 w-8 h-6 bg-gradient-to-br from-purple-800 to-purple-900 rounded-t-full"></div>
                        </div>
                        {/* Body */}
                        <div className="w-12 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg -mt-2 relative">
                          {/* Left arm pointing */}
                          <div className="absolute -left-3 top-3 w-8 h-2 bg-pink-300 rounded-full transform -rotate-12"></div>
                          {/* Right arm */}
                          <div className="absolute -right-2 top-4 w-6 h-2 bg-pink-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Monitor/Screen */}
                    <div className="absolute top-4 right-12 z-15">
                      <div className="w-28 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl border-4 border-orange-300 relative shadow-xl">
                        {/* Screen content - landscape image */}
                        <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                          {/* Sky */}
                          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-300 to-blue-400"></div>
                          {/* Clouds */}
                          <div className="absolute top-1 left-2 w-4 h-2 bg-white rounded-full opacity-80"></div>
                          <div className="absolute top-2 right-3 w-3 h-1 bg-white rounded-full opacity-80"></div>
                          {/* Ground/landscape */}
                          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-400 to-green-300"></div>
                          {/* Mountains */}
                          <div className="absolute bottom-4 left-1 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-gray-600"></div>
                          <div className="absolute bottom-4 left-4 w-0 h-0 border-l-3 border-r-3 border-b-4 border-transparent border-b-gray-500"></div>
                        </div>
                        {/* Orange frame lines */}
                        <div className="absolute top-1 left-1 right-1 h-0.5 bg-orange-400"></div>
                        <div className="absolute top-2 left-1 right-1 h-0.5 bg-orange-400"></div>
                        <div className="absolute top-3 left-1 right-1 h-0.5 bg-orange-400"></div>
                      </div>
                    </div>

                    {/* Target/Bullseye */}
                    <div className="absolute -top-4 right-4 z-25">
                      <div className="relative">
                        {/* Target circles */}
                        <div className="w-12 h-12 border-4 border-red-500 rounded-full relative">
                          <div className="absolute top-1 left-1 w-8 h-8 border-3 border-red-400 rounded-full">
                            <div className="absolute top-1 left-1 w-4 h-4 bg-red-500 rounded-full">
                              <div className="absolute top-1 left-1 w-2 h-2 bg-red-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        {/* Arrow in target */}
                        <div className="absolute top-2 -right-2 w-6 h-1 bg-blue-600 rounded-full transform rotate-45">
                          <div className="absolute -right-1 -top-0.5 w-0 h-0 border-l-2 border-t-1 border-b-1 border-transparent border-l-blue-600"></div>
                        </div>
                      </div>
                    </div>

                    {/* Light bulb (idea) */}
                    <div className="absolute -top-8 left-8 z-25">
                      <div className="relative">
                        {/* Bulb */}
                        <div className="w-8 h-10 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-t-full relative">
                          <div className="absolute bottom-0 left-1 right-1 h-2 bg-gray-400 rounded-sm"></div>
                          {/* Light rays */}
                          <div className="absolute -top-2 left-3 w-0.5 h-4 bg-yellow-400 transform -rotate-45"></div>
                          <div className="absolute -top-3 left-4 w-0.5 h-4 bg-yellow-400"></div>
                          <div className="absolute -top-2 right-3 w-0.5 h-4 bg-yellow-400 transform rotate-45"></div>
                          <div className="absolute top-0 -left-2 w-4 h-0.5 bg-yellow-400 transform -rotate-45"></div>
                          <div className="absolute top-0 -right-2 w-4 h-0.5 bg-yellow-400 transform rotate-45"></div>
                          <div className="absolute top-2 -left-3 w-4 h-0.5 bg-yellow-400"></div>
                          <div className="absolute top-2 -right-3 w-4 h-0.5 bg-yellow-400"></div>
                        </div>
                      </div>
                    </div>

                    {/* Plant pot */}
                    <div className="absolute bottom-4 left-8 z-15">
                      <div className="w-8 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-b-lg relative">
                        {/* Plant leaves */}
                        <div className="absolute -top-3 left-1 w-6 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full transform -rotate-12"></div>
                        <div className="absolute -top-4 left-2 w-4 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full transform rotate-12"></div>
                        <div className="absolute -top-2 right-1 w-3 h-5 bg-gradient-to-br from-red-400 to-red-500 rounded-full transform rotate-45"></div>
                      </div>
                    </div>

                    {/* Small laptop/device */}
                    <div className="absolute bottom-8 right-8 z-15">
                      <div className="w-12 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg relative">
                        {/* Screen */}
                        <div className="w-10 h-6 bg-gradient-to-br from-blue-900 to-purple-900 rounded-sm mx-auto mt-1">
                          {/* Code lines */}
                          <div className="pt-1 px-1 space-y-0.5">
                            <div className="w-6 h-0.5 bg-green-400 rounded-full"></div>
                            <div className="w-4 h-0.5 bg-blue-400 rounded-full"></div>
                            <div className="w-5 h-0.5 bg-purple-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating geometric shapes */}
                    <div className="absolute -top-12 -left-12 z-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-400 rounded-2xl transform rotate-12 opacity-80 shadow-lg"></div>
                    </div>
                    
                    <div className="absolute -bottom-8 -right-12 z-5">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl transform -rotate-12 opacity-80 shadow-lg"></div>
                    </div>
                    
                    <div className="absolute top-8 -left-16 z-5">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-80 shadow-lg"></div>
                    </div>

                    <div className="absolute -bottom-4 left-4 z-5">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-80 shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
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