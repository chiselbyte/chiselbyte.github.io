"use client";

import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";

export default function OurRecentWorksSection() {
  const sharedImage = "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1";
  const portfolioItems = [
    {
      id: 1,
      title: "A Ray of Hope",
      category: "Nonprofit Campaign",
      image: image5.src,
      bgColor: "bg-orange-300",
      description: "A Ray of Hope is a digital initiative designed to empower NGOs by connecting them with donors, sharing inspiring stories, and driving real-world impact for underprivileged communities. The platform streamlines fundraising and amplifies the voices of those making a difference.",
      type: "nonprofit"
    },
    {
      id: 2,
      title: "Gym Training App",
      category: "Fitness & Wellness",
      image: image4.src,
      bgColor: "bg-green-500",
      description: "A modern mobile app for gyms and personal trainers, featuring workout tracking, progress analytics, personalized plans, and real-time engagement to help users achieve their fitness goals.",
      type: "fitness"
    },
    {
      id: 3,
      title: "Dietitian App",
      category: "Health & Wellness",
      image: sharedImage,
      bgColor: "bg-blue-400",
      description: "A nutrition focused application assisting users with personalized diet plans.",
      type: "health"
    },
    {
      id: 4,
      title: "Social Media Management",
      category: "Marketing",
      image: sharedImage,
      bgColor: "bg-pink-200",
      description: "Tools and strategies for handling multi-platform social media campaigns.",
      type: "marketing"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-white relative overflow-hidden">
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
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Recent Works
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore our diverse portfolio showcasing branding, analytics, print, and packaging projects. Each work reflects our commitment to creativity, quality, and client success.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 md:mb-12">
          {portfolioItems.map((item) => {
            // Add clickable redirect for the first project
            const isFirst = item.id === 1;
            const cardContent = (
              <div className="relative h-full cursor-pointer">
                {/* Card background gradient effect */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top rounded-3xl scale-105 group-hover:scale-100 transition-transform duration-500 blur-[1px] group-hover:blur-0 opacity-80 group-hover:opacity-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 group-hover:opacity-0 transition-all duration-300"></div>
                </div>
                {/* Text content always visible, but on hover, only text remains */}
                <div className="absolute inset-0 flex flex-col items-center justify-end z-30 p-4 sm:p-6 group-hover:justify-center transition-all duration-300">
                  <div className="w-full text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-1 sm:mb-2 text-white drop-shadow-lg tracking-tight transition-colors duration-300">{item.title}</h3>
                    <p className="text-xs sm:text-base font-medium text-white/90 mb-0.5 sm:mb-1 drop-shadow transition-colors duration-300">{item.category}</p>
                    <p className="text-[10px] sm:text-xs opacity-90 mt-1 sm:mt-2 text-white drop-shadow transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
                {/* On hover: subtle glowing border */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:ring-4 group-hover:ring-green-300/60 transition-all duration-300"></div>
              </div>
            );
            return (
              <div
                key={item.id}
                className={`bg-neutral-900/90 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-[4/5] relative border-2 border-white/10 hover:border-green-400 group`}
              >
                {isFirst ? (
                  <a href="https://arayofhope.org.in/" target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}