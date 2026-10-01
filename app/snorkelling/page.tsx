import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Snorkelling",
  description: "Shore snorkelling from our waterfront location and Stingray City trips.",
};

export default function SnorkellingPage() {
  return (
    <>
      <PageHero
        title="Snorkelling"
        description="Shallow reef exploration for all ages and experience levels."
        crumbs={[{ label: "Home", href: "/" }, { label: "Snorkelling" }]}
      />
      <ImageTextSection eyebrow="For All Ages" title="Explore the Shallows" imageLabel="Snorkelling photo placeholder">
        <p>Snorkel straight from our waterfront dock over shallow sections of Casuarina Point Reef, or join a boat trip out to Stingray City for a bucket-list encounter with Grand Cayman&rsquo;s famous rays.</p>
      </ImageTextSection>
      <CTASection title="Book a Snorkelling Trip" cta={{ label: "Reserve Online", href: "/contact" }} />
    </>
  );
}
