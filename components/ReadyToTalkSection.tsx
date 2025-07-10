"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ReadyToTalkSection() {
  return (
    <section className="bg-gradient-to-br from-green-300 via-green-200 to-blue-400 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-60 right-80 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-60 left-80 w-3 h-3 bg-purple-400 rounded-full"></div>
      </div>
      
      {/* Main CTA Section */}
      <div className="py-10 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ready To Talk?
            </h2>

            <p className="text-base sm:text-xl md:text-2xl text-gray-600 text-opacity-90 leading-relaxed">
              Let's build something that lasts
              <br />
              Whether you're modernizing a legacy system or starting a bold new idea, let's connect.
              
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <Link href="/contact" passHref legacyBehavior>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>  );}