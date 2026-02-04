"use client";

import { useState, FormEvent } from "react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Info */}
          <div>
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">
                Contact
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                Let&apos;s work
                <br />
                together
              </h1>
              <p className="text-neutral-500 leading-relaxed mb-12">
                Have a project in mind? We&apos;d love to hear about it. Fill out the
                form and we&apos;ll get back to you within 24 hours.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                    Email
                  </h3>
                  <p className="text-neutral-900">hello@visualdiaryclub.com</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                    Phone
                  </h3>
                  <p className="text-neutral-900">+1 (555) 000-0000</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
                    Location
                  </h3>
                  <p className="text-neutral-900">
                    123 Creative Ave
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column - Form */}
          <div>
            <FadeIn delay={0.15}>
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-neutral-900 mb-2">
                      Message sent
                    </h3>
                    <p className="text-neutral-500">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full border-b border-neutral-200 py-3 text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors bg-transparent"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full border-b border-neutral-200 py-3 text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors bg-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border-b border-neutral-200 py-3 text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors bg-transparent"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full border-b border-neutral-200 py-3 text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors bg-transparent"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:border-neutral-900 focus:outline-none transition-colors bg-transparent appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Design</option>
                      <option value="ecommerce">Ecommerce Strategy</option>
                      <option value="email">Email Marketing</option>
                      <option value="ads">Paid Advertising</option>
                      <option value="social">Social Media Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full border-b border-neutral-200 py-3 text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors bg-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg">
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
