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
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Development", href: "/#development" },
    { name: "Contact Us", href: "/contact" }
  ];

  const socialIcons = [
    { icon: Facebook, href: undefined, color: "text-blue-600 hover:text-blue-700", bg: "hover:bg-blue-50" },
    { icon: XIcon, href: undefined, color: "text-black", bg: "bg-white hover:bg-gray-100" },
    { icon: Instagram, href: "https://www.instagram.com/chiselbyte/", color: "text-pink-500 hover:text-pink-600", bg: "hover:bg-pink-50" },
    { icon: Linkedin, href: "https://in.linkedin.com/in/chisel-byte-b55817367", color: "text-blue-700 hover:text-blue-800", bg: "hover:bg-blue-50" }
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
        <div className="py-10 sm:py-14 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="space-y-6 sm:col-span-2 lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">Chiselbyte Softwares</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed lg:max-w-md">
                Chiselbyte Softwares delivers innovative digital solutions, from branding and web development to analytics and marketing. Our team is dedicated to helping businesses grow and succeed in the digital era.
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

            {/* Address & Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Address</h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-600">
                    <p>Pune, India</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a
                    href=""
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    contact@chiselbyte.com
                  </a>
                </div>

                {/** Phone
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a
                    href="tel:+13219847541"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    +91----------
                  </a>
                </div>
                */}
              </div>

              {/* Social Icons */}
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => {
                  const IconComponent = social.icon;
                  const commonClasses = `w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center ${social.bg} transition-all duration-200 hover:border-current`;
                  if (social.href) {
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commonClasses}
                      >
                        <IconComponent className={`w-5 h-5 ${social.color}`} />
                      </a>
                    );
                  }
                  return (
                    <button key={index} className={commonClasses} type="button">
                      <IconComponent className={`w-5 h-5 ${social.color}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 sm:space-y-4 md:space-y-0">
            <div className="text-gray-600 text-center text-xs sm:text-sm">
              <p>Copyright © 2025 ChiselByte Softwares</p>
            </div>

          </div>
        </div>
      </div>    </footer>  );}