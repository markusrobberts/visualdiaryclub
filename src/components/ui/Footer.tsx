import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-neutral-900"
            >
              Visual Diary Club
            </Link>
            <p className="mt-4 text-sm text-neutral-500 max-w-sm leading-relaxed">
              A creative agency dedicated to visual storytelling. We craft brand
              experiences that connect, inspire, and endure.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-4">
              Pages
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {["Instagram", "LinkedIn", "Twitter", "Behance"].map(
                (social) => (
                  <li key={social}>
                    <span className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200 cursor-pointer">
                      {social}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Visual Diary Club. All rights
            reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
