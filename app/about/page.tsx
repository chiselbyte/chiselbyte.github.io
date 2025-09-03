"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">🚀 Our Story</h1>
        </div>
        
        <div className="space-y-12">
          {/* Our Story Section */}
          <div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                From a Few Lines of Code to Software That Matters Every great software begins with a small idea—and a few passionate minds. That's how Chisel Byte was born. We're not a giant corporation with layers of red tape. We're a close-knit team of developers, designers, and tech enthusiasts who believe in one simple philosophy: <strong>"We Just Don't Code – We Carve."</strong>
              </p>
              <p>
                At Chisel Byte, we treat every line of code as craftsmanship. Our mission is not just to build software, but to shape reliable, beautiful, and purpose-driven digital experiences that truly solve real-world problems. It started with a whiteboard, coffee-fueled brainstorming, and a dream to create quality software without compromise.
              </p>
              <p>
                Today, we work alongside startups, enterprises, and visionaries—offering powerful solutions in mobile apps, web development, cloud integrations, and beyond. We may be small, but we're sharp. We may be lean, but we're laser-focused.
              </p>
            </div>
          </div>

          {/* Why We're Different Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🧠 Why We're Different</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                It all started with a whiteboard, some midnight coffee, and a dream to build software without compromise. Today, our team works hand-in-hand with startups, agencies, and enterprises, building tech that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Solves real-world problems</li>
                <li>Scales with your growth</li>
                <li>Delivers intuitive user experiences</li>
                <li>Is built with clean, testable, maintainable code</li>
              </ul>
              <p>
                We may be small, but we're sharp. We may be lean, but we're laser-focused. And when it comes to quality—we don't settle for anything less than excellent. So whether you're building your next-gen mobile app, integrating legacy systems, or launching a blazing-fast web portal, we're here to chisel your vision into reality—one byte at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
