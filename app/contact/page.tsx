"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useRef } from "react";
import contactImg from "@/../assets/images/contact.jpg";
import { trackEvent } from "@/lib/analytics";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "6cec701e-93b3-4355-ba10-f0dc0d66ea83";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

const inputClasses =
  "w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700";
const inputErrorClasses =
  "w-full border-2 border-red-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  /** Move focus to the first field that failed validation, so keyboard and
   *  screen-reader users land on the problem instead of hunting for it. */
  function focusFirstError(errors: FieldErrors) {
    const order: FieldName[] = ["name", "email", "message"];
    const first = order.find((field) => errors[field]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#contact-${first}`)?.focus();
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div className="mb-8 md:mb-0 relative w-full aspect-[4/5] md:aspect-square">
            {/* Decorative — the form beside it carries all the meaning. */}
            <Image
              src={contactImg}
              alt=""
              sizes="(min-width: 768px) 536px, 100vw"
              className="w-full h-full object-cover rounded-2xl shadow"
            />
          </div>
          <div className="bg-white rounded-2xl shadow p-8 w-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
            <p className="text-gray-600 mb-8 text-center text-sm sm:text-base">
              We'd love to hear from you! Fill out the form below or email us at{" "}
              <a href="mailto:info@chiselbyte.com" className="text-green-700 font-medium">info@chiselbyte.com</a>.
            </p>
            <form
              ref={formRef}
              className="space-y-6"
              noValidate
              onSubmit={async (e) => {
                e.preventDefault();
                setSuccess(false);
                setError("");
                setFieldErrors({});
                if (timeoutRef.current) clearTimeout(timeoutRef.current);

                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() || "";
                const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim() || "";
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim() || "";
                // Honeypot — bots tick this; humans never see it.
                // NOTE: read `.checked`, not `.value`. A checkbox's `value` is the
                // string "on" whether or not it is ticked, so testing `.value`
                // discarded every real submission while still showing "Thank you".
                const botcheck = (form.elements.namedItem("botcheck") as HTMLInputElement)?.checked ?? false;

                if (botcheck) {
                  setSuccess(true);
                  form.reset();
                  return;
                }

                const errors: FieldErrors = {};
                if (!name) errors.name = "Enter your name.";
                if (!email) {
                  errors.email = "Enter your email address.";
                } else if (!EMAIL_REGEX.test(email)) {
                  errors.email = "Enter a valid email address, like you@company.com.";
                }
                if (!message) errors.message = "Tell us what you're trying to build.";

                if (Object.keys(errors).length > 0) {
                  setFieldErrors(errors);
                  focusFirstError(errors);
                  return;
                }

                trackEvent("contact_form_submit");
                setSubmitting(true);

                try {
                  const res = await fetch(WEB3FORMS_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    body: JSON.stringify({
                      access_key: WEB3FORMS_ACCESS_KEY,
                      subject: `New contact form submission from ${name}`,
                      from_name: "Chiselbyte contact form",
                      replyto: email,
                      name,
                      email,
                      message,
                      botcheck: "",
                    }),
                  });
                  const result = await res.json().catch(() => ({ success: false }));

                  if (res.ok && result.success) {
                    setSuccess(true);
                    trackEvent("contact_form_success");
                    form.reset();
                    timeoutRef.current = setTimeout(() => setSuccess(false), 6000);
                  } else {
                    setError("There was an error sending your message. Please email us directly.");
                    trackEvent("contact_form_error", {
                      reason: "web3forms_rejected",
                      message: result?.message ?? "unknown",
                    });
                  }
                } catch (err) {
                  setError("There was a network error. Please try again or email us directly.");
                  trackEvent("contact_form_error", { reason: "network" });
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <div>
                <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-1 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  className={fieldErrors.name ? inputErrorClasses : inputClasses}
                  placeholder="Your Name"
                  required
                  maxLength={200}
                  aria-invalid={fieldErrors.name ? true : undefined}
                  aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                />
                {fieldErrors.name && (
                  <p id="contact-name-error" className="mt-1 text-sm text-red-700">
                    {fieldErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-gray-700 font-medium mb-1 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  className={fieldErrors.email ? inputErrorClasses : inputClasses}
                  placeholder="you@email.com"
                  required
                  maxLength={320}
                  aria-invalid={fieldErrors.email ? true : undefined}
                  aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                />
                {fieldErrors.email && (
                  <p id="contact-email-error" className="mt-1 text-sm text-red-700">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-gray-700 font-medium mb-1 text-sm">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={fieldErrors.message ? inputErrorClasses : inputClasses}
                  rows={5}
                  placeholder="How can we help you?"
                  required
                  maxLength={5000}
                  aria-invalid={fieldErrors.message ? true : undefined}
                  aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                ></textarea>
                {fieldErrors.message && (
                  <p id="contact-message-error" className="mt-1 text-sm text-red-700">
                    {fieldErrors.message}
                  </p>
                )}
              </div>
              {/* Honeypot: Web3Forms-recognized field. Hidden from humans, bots fill it. */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <button
                type="submit"
                disabled={submitting}
                aria-busy={submitting}
                className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md transition-colors duration-200"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            {/* Always rendered so assistive tech is already observing the region
                when its contents change. */}
            <div role="status" aria-live="polite" className="empty:hidden">
              {success && (
                <div className="mt-6 text-green-800 bg-green-100 border border-green-200 rounded p-4 text-center font-medium text-sm">
                  Thank you. We'll get back to you within one business day.
                </div>
              )}
            </div>
            <div role="alert" className="empty:hidden">
              {error && (
                <div className="mt-6 text-red-700 bg-red-100 border border-red-200 rounded p-4 text-center font-medium text-sm">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
