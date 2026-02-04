"use client";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-6">
            Start a Project
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
            Have a vision?
            <br />
            <span className="text-neutral-400">Let&apos;s make it real.</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
            We&apos;re always looking for the next great collaboration. Tell us about
            your project, and we&apos;ll bring it to life.
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
