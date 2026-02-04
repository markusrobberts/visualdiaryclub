import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import ServicesOverview from "@/components/home/ServicesOverview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ServicesOverview />
      <ContactCTA />
    </>
  );
}
