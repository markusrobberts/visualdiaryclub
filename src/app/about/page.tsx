import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import TeamSection from "@/components/about/TeamSection";
import ApproachSection from "@/components/about/ApproachSection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Visual Diary Club — our team, our approach, and what drives us.",
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-8">
              We are Visual
              <br />
              Diary Club
            </h1>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn delay={0.2}>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Founded with a belief that visual communication has the power to
                transform brands, we&apos;ve spent over a decade helping companies
                find their voice through design, photography, and digital craft.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We&apos;re a tight-knit team of creatives, strategists, and makers.
                Every project we take on receives our full attention — we don&apos;t
                believe in assembly lines. We believe in craft, in storytelling,
                and in work that lasts.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10+", label: "Years in Business" },
                { number: "200+", label: "Projects Completed" },
                { number: "80+", label: "Clients Worldwide" },
                { number: "15", label: "Awards Won" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-semibold text-neutral-900">
                    {stat.number}
                  </p>
                  <p className="text-sm text-neutral-500 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">
              The Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-16">
              The people behind
              <br />
              the work
            </h2>
          </FadeIn>
          <TeamSection />
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ApproachSection />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
