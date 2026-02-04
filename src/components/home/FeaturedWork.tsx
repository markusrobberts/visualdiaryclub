"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function FeaturedWork() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">
                Selected Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden sm:inline-flex text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200 items-center gap-2"
            >
              View all
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <Link href="/work" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      {project.client}
                    </p>
                  </div>
                  <span className="text-xs text-neutral-400 mt-1">
                    {project.category}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="mt-10 sm:hidden text-center">
          <Link
            href="/work"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            View all projects &rarr;
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
