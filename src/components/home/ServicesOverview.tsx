"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-neutral-500 max-w-2xl mb-16 leading-relaxed">
            We partner with ambitious brands to create meaningful visual
            experiences across every touchpoint.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group">
                <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6">
                  <span className="text-white text-sm font-medium">
                    {service.id.padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                  {service.description.slice(0, 120)}...
                </p>
                <Link
                  href="/services"
                  className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
