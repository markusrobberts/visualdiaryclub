import type { Metadata } from "next";
import { services } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From website design to social media management, explore the creative services Visual Diary Club offers.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
              What We Offer
            </h1>
            <p className="text-neutral-500 max-w-2xl leading-relaxed">
              We provide end-to-end creative services, from initial strategy
              through to final delivery. Every service is tailored to your
              brand&apos;s specific needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Details */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerChildren className="space-y-24">
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-xs text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-neutral-200" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-neutral-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-6">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-neutral-700"
                        >
                          <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">
              Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-16">
              How We Work Together
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by listening. Understanding your brand, audience, and objectives guides everything that follows.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We define the approach, establish key messages, and map out the project roadmap.",
              },
              {
                step: "03",
                title: "Creation",
                description:
                  "With a clear plan in place, our team brings the vision to life through iterative design and development.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Final assets are refined, tested, and delivered with comprehensive guidelines for implementation.",
              },
            ].map((process) => (
              <StaggerItem key={process.step}>
                <div>
                  <span className="text-3xl font-semibold text-neutral-200 block mb-4">
                    {process.step}
                  </span>
                  <h3 className="text-lg font-medium text-neutral-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
