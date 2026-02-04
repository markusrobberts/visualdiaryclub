"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, categories } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      <FadeIn>
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm transition-all duration-200 ${
                activeCategory === category
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </FadeIn>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-neutral-50/90 backdrop-blur-sm p-4 w-full">
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    {project.client}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-400 block">
                    {project.category}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
