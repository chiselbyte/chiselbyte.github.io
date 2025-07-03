"use client";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-20 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 mb-8 text-center">We'd love to hear from you! Fill out the form below or email us at <a href="mailto:contact@chiselbyte.com" className="text-green-600 font-medium">contact@chiselbyte.com</a>.</p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input type="text" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@email.com" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" rows={5} placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-colors duration-200">Send Message</button>
        </form>
      </div>
    </section>
  );
}
