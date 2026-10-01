import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Shore Diving",
  description: "Walk straight into Casuarina Point Reef and Devil's Grotto from our waterfront dock.",
};

export default function ShoreDivingPage() {
  return (
    <>
      <PageHero
        title="Shore Diving"
        description="Min 2 / Max 8 · Beginners to experienced"
        crumbs={[{ label: "Home", href: "/" }, { label: "Diving", href: "/diving" }, { label: "Shore Diving" }]}
      />
      <ImageTextSection eyebrow="Waterfront Access" title="Dive Straight From Our Dock" imageLabel="Shore diving entry point photo placeholder">
        <p>Our waterfront location gives direct access to Casuarina Point Reef and Devil&rsquo;s Grotto — two of Grand Cayman&rsquo;s most celebrated shore dive sites — without ever needing to board a boat.</p>
        <p>Go at your own pace with a guide, or set your own schedule across multiple shore dives in a day.</p>
      </ImageTextSection>
      <section className="section bg-mist">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Details" title="What to Expect" align="left" />
          <div className="mt-8">
            <FAQAccordion
              items={[
                { q: "Do I need to be certified?", a: "Certified divers can shore dive independently with a buddy; uncertified guests can join with a guide or take our Discover Scuba Diving course first." },
                { q: "What gear is provided?", a: "Tanks, weights and full rental gear are available on-site." },
                { q: "How deep are the sites?", a: "Casuarina Point Reef and Devil's Grotto offer both shallow reef and deeper wall sections, suitable for a range of experience levels." },
              ]}
            />
          </div>
        </div>
      </section>
      <CTASection title="Book Your Shore Dive" cta={{ label: "Reserve Online", href: "/contact" }} />
    </>
  );
}
