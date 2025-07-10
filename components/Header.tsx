"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import logoImage from "../assets/images/logo1.png";
import Link from "next/link";
import blogData from "@/data/blog.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogMobileOpen, setIsBlogMobileOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const blogItems = blogData.categories;

  const toggleCategory = (name: string) => {
    setOpenCategories((prev) =>
      prev[name] ? {} : { [name]: true }
    );
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src={logoImage.src} alt="Chiselbyte" className="h-24 cursor-pointer" />
              <span className="text-lg font-semibold text-gray-800">Chiselbyte</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              About Us
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-semibold text-lg cursor-pointer">
                <span>Blog</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full w-40 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-60">
                {blogItems.map((item) => (
                  <div key={item.name} className="relative group/item">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium"
                    >
                      <span>{item.name}</span>
                      {item.subItems && (
                        <>
                          <ChevronRight className="w-3 h-3 ml-1 hidden md:block" />
                          <ChevronDown className="w-3 h-3 ml-1 md:hidden" />
                        </>
                      )}
                    </button>
                    {item.subItems && (
                      <div className="absolute left-full top-0 w-40 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Contact Us
            </Link>
          </nav>


          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">
                About Us
              </Link>
              <button
                onClick={() => setIsBlogMobileOpen(!isBlogMobileOpen)}
                className="flex items-center justify-between text-gray-600 hover:text-blue-600 font-medium"
              >
                <span>Blog</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isBlogMobileOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isBlogMobileOpen && (
                <div className="pl-4 flex flex-col space-y-2">
                  {blogItems.map((item) => (
                    <div key={item.name} className="flex flex-col space-y-1">
                      <button
                        onClick={() => toggleCategory(item.name)}
                        className="flex items-center justify-between text-gray-600 hover:text-blue-600 text-sm"
                      >
                        <span>{item.name}</span>
                        {item.subItems && (
                          <ChevronDown
                            className={`w-3 h-3 transition-transform ${openCategories[item.name] ? "rotate-180" : ""}`}
                          />
                        )}
                      </button>
                      {item.subItems && openCategories[item.name] && (
                        <div className="pl-4 flex flex-col space-y-1 mt-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="text-gray-600 hover:text-blue-600 text-sm"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
