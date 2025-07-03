"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  ShoppingCart, 
  Menu, 
  X,
  Database,
  Code,
  Shield
} from 'lucide-react';
import logoImage from '../assets/images/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', hasDropdown: true },
    { name: 'About', hasDropdown: true },
    { name: 'Pages', hasDropdown: true },
    { name: 'Shop', hasDropdown: true },
    { name: 'Blog', hasDropdown: true },
    { name: 'Contact', hasDropdown: false },
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
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <span className="font-medium">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <div className="relative">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Support */}
            <button className="hidden md:block text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
              SUPPORT
            </button>

            {/* Login Button */}
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-200">
              LOGIN
            </Button>

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
                <button
                  key={item.name}
                  className="flex items-center justify-between text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="font-medium">{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
              <button className="text-left text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                SUPPORT
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}