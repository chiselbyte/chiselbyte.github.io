"use client";

import { Settings } from 'lucide-react';

export default function OurRecentWorksSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      bgColor: "bg-orange-300",
      description: "Complete brand identity package with logo, business cards, and stationery design.",
      type: "branding"
    },
    {
      id: 2,
      title: "Best Analytics Audits",
      category: "Analytics",
      description: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      bgColor: "bg-green-500",
      type: "analytics",
      hasIcon: true
    },
    {
      id: 3,
      title: "Magazine Mockup Design",
      category: "Print Design",
      image: "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      bgColor: "bg-blue-400",
      description: "Professional magazine layout and mockup presentation.",
      type: "print"
    },
    {
      id: 4,
      title: "Shopping Bag Design",
      category: "Package Design",
      image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      bgColor: "bg-pink-200",
      description: "Eco-friendly shopping bag design with modern branding elements.",
      type: "packaging"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 text-green-400 text-2xl font-bold">×</div>
        <div className="absolute top-40 left-20 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-green-400"></div>
        <div className="absolute bottom-32 right-32 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full"></div>
        <div className="absolute top-60 left-80 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-60 right-80 w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Recent Works
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 ${
                index === 0 || index === 2 ? 'aspect-[4/5]' : 'aspect-square'
              }`}
            >
              {item.type === 'analytics' ? (
                // Analytics card with text content
                <div className="p-8 h-full flex flex-col justify-center text-white relative">
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : (
                // Image-based cards
                <div className="relative h-full group cursor-pointer">
                  <div className={`absolute inset-0 ${item.bgColor} opacity-90`}></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}