"use client";

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function PricingPlansSection() {
  const pricingPlans = [
    {
      name: "BASIC PLAN",
      price: "$15.00",
      period: "/Mon",
      features: [
        "5 GB Bandwidth",
        "Highest Speed",
        "1 GB Storage",
        "Unlimited Website",
        "Unlimited Users",
        "24x7 Great Support",
        { text: "Data Security and Backups", disabled: true },
        { text: "Monthly Reports and Analytics", disabled: true }
      ],
      buttonText: "SELECT PLAN",
        buttonStyle: "bg-green-500 hover:bg-blue-600 text-white",
      cardStyle: "bg-white border border-gray-200",
      popular: false
    },
    {
      name: "ADVANCED PLAN",
      price: "$35.00",
      period: "/Mon",
      features: [
        "10 GB Bandwidth",
        "Highest Speed",
        "3 GB Storage",
        "Unlimited Website",
        "Unlimited Users",
        "24x7 Great Support",
        { text: "Data Security and Backups", disabled: true },
        { text: "Monthly Reports and Analytics", disabled: true }
      ],
      buttonText: "SELECT PLAN",
      buttonStyle: "bg-purple-500 hover:bg-purple-600 text-white",
      cardStyle: "bg-white border border-gray-200",
      headerStyle: "bg-green-500 text-white",
      popular: true
    },
    {
      name: "EXPERT PLAN",
      price: "$65.00",
      period: "/Mon",
      features: [
        "15 GB Bandwidth",
        "Highest Speed",
        "5 GB Storage",
        "Unlimited Website",
        "Unlimited Users",
        "24x7 Great Support",
        "Data Security and Backups",
        "Monthly Reports and Analytics"
      ],
      buttonText: "SELECT PLAN",
        buttonStyle: "bg-green-500 hover:bg-blue-600 text-white",
      cardStyle: "bg-white border border-gray-200",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 text-green-400 text-3xl font-bold">×</div>
        <div className="absolute top-40 left-20 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-green-400"></div>
        <div className="absolute bottom-32 right-32 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full"></div>
        <div className="absolute top-60 left-80 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-60 right-80 w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.cardStyle} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden ${
                plan.popular ? 'transform scale-105' : ''
              }`}
            >
              {/* Header */}
              <div className={`${plan.headerStyle || 'bg-gray-50'} px-8 py-6 text-center`}>
                <h3 className={`text-lg font-bold ${plan.headerStyle ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="px-8 py-8 text-center">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-green-500">{plan.price}</span>
                  <span className="text-gray-500 text-lg ml-1">{plan.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => {
                    const isDisabled = typeof feature === 'object' && feature.disabled;
                    const featureText = typeof feature === 'string' ? feature : feature.text;
                    
                    return (
                      <div
                        key={featureIndex}
                        className={`flex items-center justify-center space-x-3 ${
                          isDisabled ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        <Check className={`w-4 h-4 ${isDisabled ? 'text-gray-300' : 'text-green-500'}`} />
                        <span className={isDisabled ? 'line-through' : ''}>{featureText}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Button */}
                <Button className={`${plan.buttonStyle} px-8 py-3 font-semibold rounded-lg transition-all duration-300 w-full`}>
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}