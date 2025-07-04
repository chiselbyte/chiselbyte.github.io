"use client";

import { Button } from '@/components/ui/button';
import image from "../assets/images/image1.png";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Triangles */}
        <div className="absolute top-20 left-20 w-6 h-6 border-2 border-green-400 rotate-45"></div>
        <div className="absolute top-32 right-40 w-4 h-4 border-2 border-green-400 rotate-45"></div>
        <div className="absolute bottom-40 left-40 w-5 h-5 border-2 border-green-400 rotate-45"></div>

        {/* Circles */}
        <div className="absolute top-40 left-10 w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-80"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-80"></div>

        {/* X shapes */}
        <div className="absolute top-24 right-20 text-green-400 text-2xl font-bold">×</div>
        <div className="absolute bottom-32 left-20 text-green-400 text-xl font-bold">×</div>

        {/* Additional decorative elements */}
        <div className="absolute top-60 right-60 w-8 h-8 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-60 right-80 w-6 h-6 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Precision in Every Byte
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                At ChiselByte, we’re not just building software—we’re crafting solutions. Like a master artisan chisels stone with precision and care, we write code with intention, clarity, and pride. We believe that technology, when crafted well, becomes invisible—it just works.From our first line of code to the final deployment, we’re obsessed with delivering clean, scalable, and high-quality software that not only works but lasts. Because to us, software is more than logic—it’s legacy.
              </p>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-2xl">
              {/* Replace 3D Isometric Illustration with static image */}
              <img 
                src={image.src}
                alt=""
                className="w-[28rem] h-[28rem] rounded-2xl shadow-2xl object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}