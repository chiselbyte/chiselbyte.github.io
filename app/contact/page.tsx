"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef } from "react";
import contactImg from "@/../assets/images/contact.jpg";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div className="mb-8 md:mb-0 block h-full w-full">
            <img
              src={contactImg.src}
              alt="Contact"
              className="w-full h-full object-cover rounded-2xl shadow"
            />
          </div>
          <div className="bg-white rounded-2xl shadow p-8 w-full">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
            <p className="text-gray-600 mb-8 text-center">
              We'd love to hear from you! Fill out the form below or email us at
              <a href="mailto:contact@chiselbyte.com" className="text-green-600 font-medium"> contact@chiselbyte.com</a>.
            </p>
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              setSuccess(false);
              setError("");
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              const form = e.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
              const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
              const formData = { name, email, message };
              try {
                const res = await fetch("/api/save-contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
                });
                if (res.ok) {
                  setSuccess(true);
                  form.reset();
                  timeoutRef.current = setTimeout(() => setSuccess(false), 6000);
                } else {
                  setError("There was an error. Please try again later.");
                }
              } catch {
                setError("There was an error. Please try again later.");
              }
            }}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={5}
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
            {success && (
              <div className="mt-6 text-green-700 bg-green-100 border border-green-200 rounded p-4 text-center font-medium">
                Thank you for contacting us! We'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="mt-6 text-red-700 bg-red-100 border border-red-200 rounded p-4 text-center font-medium">
                {error}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}