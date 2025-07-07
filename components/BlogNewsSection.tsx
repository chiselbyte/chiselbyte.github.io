"use client";

import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogNewsSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The Security Risks of Changing Package Owners",
      author: "Admin",
      date: "March 15, 2022",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Tips to Protecting Your Business and Family",
      author: "Smith",
      date: "March 17, 2022",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Protect Your Workplace from Cyber Attacks",
      author: "John",
      date: "March 19, 2022",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-gray-50 relative overflow-hidden">
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
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            The News From Our Blog
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Date Badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <div className="bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center space-x-2 shadow-lg">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-medium">{post.date}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <div className="space-y-2 sm:space-y-4">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Author */}
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                    <span>By</span>
                    <span className="text-blue-600 font-medium">{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-base">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-2 sm:pt-4">
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group/link text-sm sm:text-base">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            VIEW ALL POSTS
          </button>
        </div>
      </div>
    </section>
  );
}