"use client";

import { Button } from '@/components/ui/button';

export default function ReadyToTalkSection() {
  // Company logos data - using text representations since we can't use actual logo files
  const companyLogos = [
    { name: "node", displayName: "node.js" },
    { name: "slack", displayName: "slack" },
    { name: "envato", displayName: "envato" },
    { name: "themeforest", displayName: "themeforest" },
    { name: "github", displayName: "GitHub" },
    { name: "node", displayName: "node.js" },
    { name: "rails", displayName: "RAILS" },
    { name: "node", displayName: "node.js" },
    { name: "slack", displayName: "slack" },
    { name: "envato", displayName: "envato" },
    { name: "themeforest", displayName: "themeforest" },
    { name: "github", displayName: "GitHub" },
    { name: "node", displayName: "node.js" },
    { name: "rails", displayName: "RAILS" },
    { name: "envato", displayName: "envato" },
    { name: "themeforest", displayName: "themeforest" },
    { name: "github", displayName: "GitHub" },
    { name: "node", displayName: "node.js" }
  ];

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
              Our team is here to answer your question about StartP
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                CONTACT US
              </Button>
              
              <div className="text-white">
                <span className="text-lg">Or, </span>
                <button className="underline hover:no-underline text-lg font-medium transition-all duration-200">
                  get started now with a free trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              More that 1.5 million businesses and organizations use StartP
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-6 gap-8 items-center opacity-60">
            {/* First Row */}
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg tracking-wider">
                node<span className="text-xs">®</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded mr-2 flex items-center justify-center">
                  <div className="text-white text-xs">⚙</div>
                </div>
                slack
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full mr-2"></div>
                envato
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
                themeforest
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg">
                GitHub
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg tracking-wider">
                node<span className="text-xs">®</span>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
                RAILS
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg tracking-wider">
                node<span className="text-xs">®</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded mr-2 flex items-center justify-center">
                  <div className="text-white text-xs">⚙</div>
                </div>
                slack
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full mr-2"></div>
                envato
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
                themeforest
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg">
                GitHub
              </div>
            </div>

            {/* Third Row */}
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg tracking-wider">
                node<span className="text-xs">®</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
                RAILS
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full mr-2"></div>
                envato
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
                themeforest
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg">
                GitHub
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-400 font-bold text-lg tracking-wider">
                node<span className="text-xs">®</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}