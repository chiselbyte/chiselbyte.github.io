"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  // Close the desktop dropdown on a click anywhere outside it.
  useEffect(() => {
    if (!isServicesOpen) return;
    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isServicesOpen]);

  function closeAllMenus() {
    setIsServicesOpen(false);
    setIsServicesMobileOpen(false);
    setIsMenuOpen(false);
  }

  return (
    // Sticky so navigation stays reachable on long pages (the homepage is seven
    // sections deep). `html { scroll-padding-top }` in globals.css keeps
    // anchor targets from landing underneath this bar.
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2" onClick={closeAllMenus}>
              {/* Decorative: the wordmark beside it already names the brand. */}
              <Image src={logoImage} alt="" width={40} height={40} priority className="h-10 w-10" />
              <span className="text-xl font-semibold text-gray-800">Chiselbyte</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main"
            className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-8"
          >
            <Link
              href="/"
              className="text-gray-700 hover:text-green-700 transition-colors font-semibold text-sm lg:text-base"
            >
              Home
            </Link>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                  setIsServicesOpen(false);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape" && isServicesOpen) {
                  setIsServicesOpen(false);
                  servicesButtonRef.current?.focus();
                }
              }}
            >
              <button
                ref={servicesButtonRef}
                type="button"
                aria-expanded={isServicesOpen}
                aria-controls="services-menu"
                onClick={() => setIsServicesOpen((open) => !open)}
                className="flex items-center space-x-1 text-gray-700 hover:text-green-700 transition-colors font-semibold text-sm lg:text-base cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id="services-menu"
                hidden={!isServicesOpen}
                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-80"
              >
                <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeAllMenus}
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
                className="text-gray-700 hover:text-green-700 transition-colors font-semibold text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-green-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="w-6 h-6" />
            ) : (
              <Menu aria-hidden="true" className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-200 py-4">
            <nav aria-label="Main" className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={closeAllMenus}
                className="text-gray-700 hover:text-green-700 font-semibold"
              >
                Home
              </Link>

              <button
                type="button"
                onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                aria-expanded={isServicesMobileOpen}
                aria-controls="mobile-services-menu"
                className="flex items-center justify-between text-gray-700 hover:text-green-700 font-semibold"
              >
                <span>Services</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`w-4 h-4 transition-transform ${isServicesMobileOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isServicesMobileOpen && (
                <div
                  id="mobile-services-menu"
                  className="pl-4 flex flex-col space-y-3 border-l-2 border-gray-100"
                >
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeAllMenus}
                      className="text-gray-600 hover:text-green-700 text-sm font-medium"
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
                  onClick={closeAllMenus}
                  className="text-gray-700 hover:text-green-700 font-semibold"
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
