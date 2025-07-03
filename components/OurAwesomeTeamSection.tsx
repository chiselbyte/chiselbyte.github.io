"use client";

import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github 
} from 'lucide-react';

export default function OurAwesomeTeamSection() {
  const teamMembers = [
    {
      name: "Jason Statham",
      role: "UX/UI Designer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
      bgColor: "bg-green-100"
    },
    {
      name: "Corey Anderson",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
      bgColor: "bg-green-100"
    },
    {
      name: "Josh Buttler",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
      bgColor: "bg-blue-100"
    },
    {
      name: "Alex Maxwel",
      role: "Marketing Manager",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
      bgColor: "bg-green-100"
    },
    {
      name: "Janny Cotller",
      role: "Web Developer",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
      bgColor: "bg-green-100"
    }
  ];

  const socialIcons = [
    { icon: Facebook, color: "text-purple-500 hover:text-purple-600" },
    { icon: Twitter, color: "text-purple-500 hover:text-purple-600" },
    { icon: Linkedin, color: "text-purple-500 hover:text-purple-600" },
    { icon: Github, color: "text-purple-500 hover:text-purple-600" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
            Our Awesome Team
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="space-y-6">
                {/* Profile Image */}
                <div className="relative mx-auto">
                  <div className={`w-32 h-32 ${member.bgColor} rounded-full p-2 mx-auto`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Name and Role */}
                <div className="bg-green-500 text-white rounded-full py-3 px-6 mx-auto inline-block">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
                
                {/* Social Icons */}
                <div className="flex justify-center space-x-4">
                  {socialIcons.map((social, socialIndex) => {
                    const IconComponent = social.icon;
                    return (
                      <button
                        key={socialIndex}
                        className={`w-8 h-8 ${social.color} transition-colors duration-200`}
                      >
                        <IconComponent className="w-full h-full" />
                      </button>
                    );
                  })}
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}