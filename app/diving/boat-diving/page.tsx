import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Boat Diving",
  description: "Daily two-tank boat dives aboard Cayman Wall and Cayman Sky.",
};

export default function BoatDivingPage() {
  return (
    <>
      <PageHero
        title="Boat Diving"
        description="Min 4 / Max 12 · Beginners to experienced"
        crumbs={[{ label: "Home", href: "/" }, { label: "Diving", href: "/diving" }, { label: "Boat Diving" }]}
      />
      <ImageTextSection eyebrow="Daily Departures" title={`Aboard ${business.vessels.join(" & ")}`} imageLabel="Dive boat departure photo placeholder">
        <p>Our two dive vessels, {business.vessels.join(" and ")}, run daily two-tank trips to Grand Cayman&rsquo;s finest wall and reef sites, keeping groups small and personal.</p>
      </ImageTextSection>
      <section className="section bg-mist">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Details" title="What to Expect" align="left" />
          <div className="mt-8">
            <FAQAccordion
              items={[
                { q: "What's included?", a: "Tanks, weights, an experienced guide, and transport to and from the dive sites." },
                { q: "How many dives per trip?", a: "Our standard boat trip is a two-tank dive, typically visiting a wall site and a shallower reef site." },
                { q: "Is boat diving suitable for beginners?", a: "Yes, our guides tailor each trip to the group's certification level and experience." },
              ]}
            />
          </div>
        </div>
      </section>
      <CTASection title="Reserve Your Boat Dive" cta={{ label: "Reserve Online", href: "/contact" }} />
    </>
  );
}
