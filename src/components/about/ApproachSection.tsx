"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const values = [
  {
    title: "Concept First",
    description:
      "Every project begins with a strong idea. We invest time in research and strategy before a single pixel is placed.",
  },
  {
    title: "Detail Obsessed",
    description:
      "The difference between good and exceptional lives in the details. We sweat the small stuff so the big picture shines.",
  },
  {
    title: "Collaborative",
    description:
      "The best work comes from true partnership. We work closely with our clients at every stage of the process.",
  },
  {
    title: "Purposeful",
    description:
      "Beautiful work should also be effective. Every creative decision is grounded in strategic intent.",
  },
];

export default function ApproachSection() {
  return (
    <div>
      <FadeIn>
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">
          How We Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
          Our Approach
        </h2>
        <p className="text-neutral-500 max-w-2xl mb-16 leading-relaxed">
          We believe great creative work is the product of clear thinking,
          meticulous craft, and genuine collaboration.
        </p>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        {values.map((value, index) => (
          <StaggerItem key={value.title}>
            <div className="border-t border-neutral-200 pt-6">
              <span className="text-xs text-neutral-400 mb-3 block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
