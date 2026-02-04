import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Visual Diary Club | Creative Agency",
    template: "%s | Visual Diary Club",
  },
  description:
    "Visual Diary Club is a creative agency specializing in brand identity, art direction, and digital experiences.",
  keywords: [
    "creative agency",
    "brand identity",
    "art direction",
    "digital design",
    "visual storytelling",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
