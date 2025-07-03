"use client";

import { Button } from '@/components/ui/button';

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
                Secure IT Solutions
                <br />
                <span className="text-blue-900">for a more secure</span>
                <br />
                <span className="text-blue-900">environment</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis 
                ipsum suspendisse ultrices gravida
              </p>
            </div>

            <div>
              <Button className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                GET STARTED
              </Button>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-2xl">
              {/* 3D Isometric Illustration */}
              <div className="relative">
                {/* Main workspace platform */}
                <div className="relative transform perspective-1000 rotateX-15 rotateY-15">
                  {/* Desk surface */}
                  <div className="relative">
                    {/* Pink desk base */}
                    <div className="w-80 h-60 bg-gradient-to-br from-pink-300 to-pink-400 rounded-lg shadow-2xl transform skew-y-3 mx-auto"></div>
                    
                    {/* Person sitting */}
                    <div className="absolute top-4 left-20 z-20">
                      {/* Chair */}
                      <div className="w-16 h-20 bg-gray-800 rounded-lg relative">
                        <div className="absolute -top-2 left-2 w-12 h-12 bg-gray-700 rounded-full"></div>
                      </div>
                      
                      {/* Person */}
                      <div className="absolute -top-8 left-2 z-10">
                        {/* Head */}
                        <div className="w-12 h-12 bg-pink-300 rounded-full relative">
                          <div className="absolute top-1 w-12 h-8 bg-gray-800 rounded-t-full"></div>
                        </div>
                        {/* Body */}
                        <div className="w-14 h-16 bg-blue-500 rounded-lg -mt-2 relative">
                          {/* Arms */}
                          <div className="absolute -left-2 top-4 w-6 h-2 bg-pink-300 rounded-full"></div>
                          <div className="absolute -right-2 top-4 w-6 h-2 bg-pink-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Monitor */}
                    <div className="absolute top-8 right-16 z-10">
                      <div className="w-20 h-14 bg-gray-200 rounded-lg border-4 border-gray-300 relative">
                        <div className="w-full h-full bg-blue-900 rounded-md flex items-center justify-center">
                          <div className="text-green-400 text-xs font-mono leading-none">
                            <div className="grid grid-cols-4 gap-1">
                              {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-green-400 rounded-full"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Monitor stand */}
                      <div className="w-2 h-4 bg-gray-400 mx-auto"></div>
                      <div className="w-8 h-2 bg-gray-400 rounded-full mx-auto"></div>
                    </div>

                    {/* Books stack */}
                    <div className="absolute top-12 left-8 z-10">
                      <div className="space-y-1">
                        <div className="w-8 h-2 bg-red-500 rounded-sm"></div>
                        <div className="w-8 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-8 h-2 bg-blue-500 rounded-sm"></div>
                      </div>
                    </div>

                    {/* Pen holder */}
                    <div className="absolute top-10 left-16 z-10">
                      <div className="w-6 h-8 bg-yellow-400 rounded-lg relative">
                        <div className="absolute -top-2 left-1 w-1 h-6 bg-blue-600 rounded-full"></div>
                        <div className="absolute -top-1 left-3 w-1 h-5 bg-red-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Coffee cup */}
                    <div className="absolute bottom-8 right-8 z-10">
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-300 relative">
                        <div className="absolute -right-1 top-2 w-2 h-3 border-2 border-gray-300 rounded-r-full"></div>
                      </div>
                    </div>

                    {/* Plant */}
                    <div className="absolute -top-4 right-4 z-10">
                      <div className="w-6 h-8 bg-blue-400 rounded-lg relative">
                        <div className="absolute -top-2 left-1 w-4 h-6 bg-green-500 rounded-full"></div>
                        <div className="absolute -top-3 left-2 w-2 h-8 bg-green-600 rounded-full"></div>
                        <div className="absolute -top-2 right-1 w-3 h-5 bg-green-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Headphones */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <div className="w-8 h-6 border-4 border-orange-500 rounded-full relative">
                        <div className="absolute -top-2 left-1 w-6 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Floating geometric shapes */}
                    <div className="absolute -top-8 -left-8 z-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-400 rounded-lg transform rotate-12 opacity-80"></div>
                    </div>
                    
                    <div className="absolute -top-4 -right-4 z-5">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg transform -rotate-12 opacity-80"></div>
                    </div>
                    
                    <div className="absolute bottom-0 -left-6 z-5">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-300 to-green-400 rounded-lg transform rotate-45 opacity-80"></div>
                    </div>

                    {/* Additional floating elements */}
                    <div className="absolute -bottom-4 -right-8 z-5">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-80"></div>
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