"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  Menu, 
  X
} from 'lucide-react';
import logoImage from '../assets/images/logo.png';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'About', hasDropdown: false },
    { name: 'Blog', hasDropdown: true },
    { name: 'Contact', hasDropdown: false, href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImage.src} alt="Your Company Logo" className="h-20" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.href ? (
                  <Link href={item.href} className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    <span className="font-medium">{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                  >
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    className="flex items-center justify-between text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}