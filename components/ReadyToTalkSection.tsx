"use client";

import { Button } from '@/components/ui/button';

export default function ReadyToTalkSection() {
  return (
    <section className="bg-gradient-to-br from-green-400 to-green-500 relative overflow-hidden">
      {/* Main CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready To Talk?
            </h2>
            
            <p className="text-xl md:text-2xl text-white text-opacity-90 leading-relaxed">
              Our team is here to answer your question about Chiselbyte Softwares
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                CONTACT US
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}