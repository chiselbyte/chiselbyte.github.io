"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="flex flex-col justify-center items-center bg-gray-50 py-20 px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-8 text-center">
            We'd love to hear from you! Fill out the form below or email us at
            <a href="mailto:contact@chiselbyte.com" className="text-green-600 font-medium"> contact@chiselbyte.com</a>.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={5}
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-colors duration-200"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 space-y-4 text-gray-600">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div>
                <p>27 Division St, New York,</p>
                <p>NY 10002, USA</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <a href="mailto:contact@chiselbyte.com" className="hover:text-green-600">
                contact@chiselbyte.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <a href="tel:+13219847541" className="hover:text-green-600">
                + (321) 984 754
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
