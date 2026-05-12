"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoImage from "../assets/images/logo1.png";
import Link from "next/link";

interface ServiceItem {
  name: string;
  href: string;
  description: string;
}

const serviceItems: ServiceItem[] = [
  {
    name: "AI Development",
    href: "/services/ai-development",
    description: "Production LLM systems for classification, extraction, decisions.",
  },
  {
    name: "Lending & Fintech",
    href: "/services/lending",
    description: "Onboarding, KYC, credit decisioning, disbursement tracking.",
  },
  {
    name: "WhatsApp Business API",
    href: "/services/whatsapp",
    description: "Multi-tenant WABA portals via Meta Embedded Signup.",
  },
  {
    name: "Automation (n8n)",
    href: "/services/automation",
    description: "Self-hosted n8n flows that replace manual coordination.",
  },
];

const primaryLinks = [
  { name: "Work", href: "/work" },
  { name: "Writing", href: "/blog" },
  { name: "How We Build", href: "/how-we-build" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src={logoImage.src} alt="Chiselbyte" className="h-24 cursor-pointer" />
              <span className="text-xl font-semibold text-gray-800">ChiselByte</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors font-semibold text-sm lg:text-base"
            >
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors font-semibold text-sm lg:text-base cursor-pointer">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-60">
                <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-green-600 transition-colors font-semibold text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-semibold">
                Home
              </Link>

              <button
                onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                className="flex items-center justify-between text-gray-700 hover:text-green-600 font-semibold"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isServicesMobileOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isServicesMobileOpen && (
                <div className="pl-4 flex flex-col space-y-3 border-l-2 border-gray-100">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-green-600 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {primaryLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 font-semibold"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
