"use client";

import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MapPin,
  Mail,
  Phone,
  X as XIcon
} from 'lucide-react';

export default function Footer() {
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Features", href: "#" },
    { name: "Our Pricing", href: "#" },
    { name: "Latest News", href: "#" }
  ];

  const supportLinks = [
    { name: "FAQ's", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Team", href: "#" },
    { name: "Contact Us", href: "#", highlight: true }
  ];

  const socialIcons = [
    { icon: Facebook, color: "text-blue-600 hover:text-blue-700", bg: "hover:bg-blue-50" },
    { icon: XIcon, color: "text-black", bg: "bg-white hover:bg-gray-100" },
    { icon: Instagram, color: "text-pink-500 hover:text-pink-600", bg: "hover:bg-pink-50" },
    { icon: Linkedin, color: "text-blue-700 hover:text-blue-800", bg: "hover:bg-blue-50" }
  ];

  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-20 right-20 text-green-400 text-2xl font-bold">×</div>
        <div className="absolute top-40 left-20 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-green-400"></div>
        <div className="absolute bottom-32 right-32 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full"></div>
        <div className="absolute top-60 left-80 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-60 right-80 w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">Chiselbyte Softwares</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi.
              </p>

              {/* Decorative Element */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-80"></div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Company</h3>
              <nav className="space-y-4">
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Support Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Support</h3>
              <nav className="space-y-4">
                {supportLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`block transition-colors duration-200 ${
                      link.highlight 
                        ? 'text-blue-600 hover:text-blue-700 font-medium'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Address & Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Address</h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-600">
                    <p>27 Division St, New York,</p>
                    <p>NY 10002, USA</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a 
                    href="mailto:startp@gmail.com" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Email: startp@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a 
                    href="tel:+13219847541" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Phone: + (321) 984 754
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={index}
                      className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center ${social.bg} transition-all duration-200 hover:border-current`}
                    >
                      <IconComponent className={`w-5 h-5 ${social.color}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-center text-sm">
              <p>Copyright © 2025 ChiselByte Softwares</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}