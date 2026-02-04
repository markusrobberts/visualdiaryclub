import type { Metadata } from "next";
import ProjectGrid from "@/components/work/ProjectGrid";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore our portfolio of brand identity, editorial, campaign, and digital projects.",
};

export default function WorkPage() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
            Our Work
          </h1>
          <p className="text-neutral-500 max-w-2xl mb-16 leading-relaxed">
            A curated selection of projects across brand identity, editorial,
            campaigns, and digital experiences.
          </p>
        </FadeIn>
        <ProjectGrid />
      </div>
    </section>
  );
}
