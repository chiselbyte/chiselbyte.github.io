import type { Metadata } from "next";
import Link from "next/link";

/**
 * Explicit metadata here replaces the root layout's defaults rather than
 * appending to them — without this file Next fell back to its built-in 404,
 * which emitted a second <title> and a conflicting <meta name="robots">.
 */
export const metadata: Metadata = {
  title: "Page not found",
  description: "That page doesn't exist. Here's the way back.",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/work", label: "Case studies" },
  { href: "/how-we-build", label: "How we build" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Start a project" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p className="text-sm font-semibold tracking-widest uppercase text-green-700 mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          That page doesn&apos;t exist.
        </h1>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Either it moved or the link was wrong. Nothing here is worth hunting
          for — here&apos;s the way back.
        </p>
        <ul className="flex flex-wrap gap-3">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
