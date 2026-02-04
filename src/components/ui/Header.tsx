"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-100">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-neutral-900"
          >
            Visual Diary Club
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: 45, y: 0 }
                  : { rotate: 0, y: -4 }
              }
              className="absolute w-5 h-px bg-neutral-900 block"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={
                mobileMenuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              className="absolute w-5 h-px bg-neutral-900 block"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: -45, y: 0 }
                  : { rotate: 0, y: 4 }
              }
              className="absolute w-5 h-px bg-neutral-900 block"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-neutral-50 border-b border-neutral-100"
          >
            <div className="px-6 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg ${
                    pathname === item.href
                      ? "text-neutral-900"
                      : "text-neutral-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
