"use client";

import {
  Instagram,
  Linkedin,
  MapPin,
  Mail,
} from 'lucide-react';
import Link from 'next/link';

interface FooterGroup {
  heading: string;
  links: { name: string; href: string }[];
}

const footerGroups: FooterGroup[] = [
  {
    heading: "Services",
    links: [
      { name: "AI Development", href: "/services/ai-development" },
      { name: "Lending & Fintech", href: "/services/lending" },
      { name: "WhatsApp Business API", href: "/services/whatsapp" },
      { name: "Automation (n8n)", href: "/services/automation" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "Work", href: "/work" },
      { name: "Writing", href: "/blog" },
      { name: "How We Build", href: "/how-we-build" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const socialIcons = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/chiselbyte/",
    color: "text-pink-500 hover:text-pink-600",
    bg: "hover:bg-pink-50",
  },
  {
    icon: Linkedin,
    href: "https://in.linkedin.com/in/chisel-byte-b55817367",
    color: "text-blue-700 hover:text-blue-800",
    bg: "hover:bg-blue-50",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 hidden sm:block pointer-events-none">
        <div className="absolute top-20 right-20 text-green-400 text-2xl font-bold">×</div>
        <div className="absolute top-40 left-20 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-green-400"></div>
        <div className="absolute bottom-32 right-32 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full"></div>
        <div className="absolute top-60 left-80 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-60 right-80 w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-10 sm:py-14 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="space-y-6 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">ChiselByte</span>
              </div>

              <p className="text-gray-600 leading-relaxed lg:max-w-md">
                Chiselbyte is a small senior team building production LLM systems, lending platforms, WhatsApp portals, and n8n automations. Pune, India.
              </p>

              <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-80"></div>
            </div>

            {footerGroups.map((group) => (
              <div key={group.heading} className="space-y-6">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">
                  {group.heading}
                </h3>
                <nav className="space-y-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Contact + social row */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span>Pune, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:info@chiselbyte.com"
                  className="hover:text-green-600 transition-colors"
                >
                  info@chiselbyte.com
                </a>
              </div>
            </div>

            <div className="flex space-x-3">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center ${social.bg} transition-all duration-200`}
                  >
                    <Icon className={`w-5 h-5 ${social.color}`} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0">
            <div className="text-gray-500 text-center text-xs sm:text-sm">
              <p>Copyright © {new Date().getFullYear()} ChiselByte Softwares</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
