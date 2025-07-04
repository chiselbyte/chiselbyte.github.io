"use client";

import { Settings } from 'lucide-react';
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";

export default function OurRecentWorksSection() {
  const sharedImage = "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1";
  const portfolioItems = [
    {
      id: 1,
      title: "A Ray of Hope",
      category: "Nonprofit Campaign",
      image: image4.src,
      bgColor: "bg-orange-300",
      description: "A Ray of Hope is a digital initiative designed to empower NGOs by connecting them with donors, sharing inspiring stories, and driving real-world impact for underprivileged communities. The platform streamlines fundraising and amplifies the voices of those making a difference.",
      type: "nonprofit"
    },
    {
      id: 2,
      title: "Gym Training App",
      category: "Fitness & Wellness",
      image: image5.src,
      bgColor: "bg-green-500",
      description: "A modern mobile app for gyms and personal trainers, featuring workout tracking, progress analytics, personalized plans, and real-time engagement to help users achieve their fitness goals.",
      type: "fitness"
    },
    {
      id: 3,
      title: "Magazine Mockup Design",
      category: "Print Design",
      image: sharedImage,
      bgColor: "bg-blue-400",
      description: "Professional magazine layout and mockup presentation.",
      type: "print"
    },
    {
      id: 4,
      title: "Shopping Bag Design",
      category: "Package Design",
      image: sharedImage,
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
            Explore our diverse portfolio showcasing branding, analytics, print, and packaging projects. Each work reflects our commitment to creativity, quality, and client success.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 aspect-[4/5] relative`}
            >
              <div className="relative h-full group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top absolute inset-0 z-0"
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] z-10"></div>
                {/* Pre-filled detail always visible, hidden on hover */}
                <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:opacity-0">
                  <div className="text-center text-white p-6 drop-shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                    <p className="text-xs opacity-80 mt-2">{item.description}</p>
                  </div>
                </div>
                {/* Hover overlay, only visible on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                  <div className="text-center text-white p-6 drop-shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                    <p className="text-xs opacity-80 mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}