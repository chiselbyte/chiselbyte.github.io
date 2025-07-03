"use client";

import { Button } from '@/components/ui/button';

export default function StatisticsContactSection() {
  const statistics = [
    {
      number: "180K",
      label: "Downloaded",
      color: "text-green-500"
    },
    {
      number: "20K",
      label: "Feedback",
      color: "text-green-500"
    },
    {
      number: "500+",
      label: "Workers",
      color: "text-green-500"
    },
    {
      number: "70+",
      label: "Contributors",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
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
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We Always Try To Understand Users
            <br />
            Expectation
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Have any question about us?
            </h3>
            <p className="text-gray-600 text-lg">
              Don't hesitate to contact us
            </p>
            <div>
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}