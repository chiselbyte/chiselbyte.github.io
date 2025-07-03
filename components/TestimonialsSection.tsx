"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Petr Mitrichev",
      role: "Russian Programmer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      testimonial: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      testimonial: "Outstanding service and exceptional quality. The team delivered beyond our expectations and provided innovative solutions that transformed our business processes completely."
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      testimonial: "Professional, reliable, and creative. Working with this team has been an absolute pleasure. They understand our needs and deliver results that exceed expectations."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      testimonial: "The attention to detail and commitment to excellence is remarkable. Our project was completed on time and the quality was outstanding. Highly recommended!"
    },
    {
      name: "David Thompson",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      testimonial: "Innovative solutions and excellent communication throughout the project. The team's expertise and dedication made all the difference in achieving our goals."
    },
    {
      name: "Lisa Wang",
      role: "Business Analyst",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      testimonial: "Exceptional service quality and professional approach. The results speak for themselves - our business has grown significantly since implementing their solutions."
    },
    {
      name: "James Wilson",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      testimonial: "Creative excellence combined with technical expertise. The team brought our vision to life and delivered a product that truly stands out in the market."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const currentUser = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-green-400"></div>
        <div className="absolute top-40 right-40 text-green-400 text-2xl font-bold">×</div>
        <div className="absolute bottom-32 left-32 w-4 h-1 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full"></div>
        <div className="absolute top-60 right-80 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-green-400"></div>
        <div className="absolute bottom-60 left-80 text-green-400 text-xl font-bold">×</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Users Saying
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-green-100 rounded-full p-1">
                  <img
                    src={currentUser.image}
                    alt={currentUser.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentUser.name}
                </h3>
                <p className="text-purple-500 font-medium mb-6">
                  {currentUser.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {currentUser.testimonial}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* User Carousel */}
        <div className="flex items-center justify-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* User Avatars */}
          <div className="flex items-center space-x-2">
            {testimonials.map((user, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`relative transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'w-16 h-16 ring-4 ring-green-400 ring-opacity-50'
                    : 'w-12 h-12 opacity-60 hover:opacity-80'
                }`}
              >
                <div className={`w-full h-full rounded-full overflow-hidden ${
                  index === currentTestimonial ? 'bg-green-100 p-0.5' : 'bg-gray-100 p-0.5'
                }`}>
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {index === currentTestimonial && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}