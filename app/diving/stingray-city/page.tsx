import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Stingray City",
  description: "Snorkel or dive with Grand Cayman's famous southern stingrays.",
};

export default function StingrayCityPage() {
  return (
    <>
      <PageHero
        title="Stingray City"
        description="Min 4 / Max 12 · All levels"
        crumbs={[{ label: "Home", href: "/" }, { label: "Diving", href: "/diving" }, { label: "Stingray City" }]}
      />
      <ImageTextSection eyebrow="Iconic Cayman Experience" title="Meet the Southern Stingrays" imageLabel="Stingray City photo placeholder">
        <p>Wade or snorkel alongside Grand Cayman&rsquo;s famous southern stingrays in warm, waist-deep sandbar waters — a bucket-list experience for divers and non-divers alike.</p>
      </ImageTextSection>
      <CTASection title="Book Your Stingray City Trip" cta={{ label: "Reserve Online", href: "/contact" }} />
    </>
  );
}
