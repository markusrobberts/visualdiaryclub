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
    "Visual Diary Club is a creative agency specializing in website design, ecommerce strategy, email marketing, paid advertising, and social media management.",
  keywords: [
    "creative agency",
    "website design",
    "ecommerce strategy",
    "email marketing",
    "paid advertising",
    "social media management",
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
