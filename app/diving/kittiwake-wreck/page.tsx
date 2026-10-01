import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Kittiwake Wreck",
  description: "Explore the USS Kittiwake, resting in clear, shallow Cayman waters.",
};

export default function KittiwakePage() {
  return (
    <>
      <PageHero
        title="Kittiwake Wreck"
        description="Min 4 / Max 12 · Beginners to expert"
        crumbs={[{ label: "Home", href: "/" }, { label: "Diving", href: "/diving" }, { label: "Kittiwake Wreck" }]}
      />
      <ImageTextSection eyebrow="Wreck Diving" title="Explore the USS Kittiwake" imageLabel="Kittiwake wreck photo placeholder">
        <p>The USS Kittiwake, a decommissioned submarine rescue vessel, rests in clear, shallow water off Seven Mile Beach — an unforgettable dive for photographers and explorers of any level.</p>
      </ImageTextSection>
      <CTASection title="Dive the Kittiwake" cta={{ label: "Reserve Online", href: "/contact" }} />
    </>
  );
}
