"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoImage from "../assets/images/logo.png";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogMobileOpen, setIsBlogMobileOpen] = useState(false);

  const blogItems = [
    { name: "Java", href: "/blog/java" },
    { name: "Spring Boot", href: "/blog/springboot" },
    { name: "Python", href: "/blog/python" },
    { name: "DevOps", href: "/blog/devops" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImage.src} alt="Chiselbyte" className="h-20" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors font-medium cursor-pointer">
                <span>Blog</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full w-40 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-60">
                {blogItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </Link>
              <button
                onClick={() => setIsBlogMobileOpen(!isBlogMobileOpen)}
                className="flex items-center justify-between text-gray-600 hover:text-gray-900 font-medium"
              >
                <span>Blog</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isBlogMobileOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isBlogMobileOpen && (
                <div className="pl-4 flex flex-col space-y-2">
                  {blogItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
