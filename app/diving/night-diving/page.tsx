import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Night Diving",
  description: "Experience the reef after dark on a guided night dive.",
};

export default function NightDivingPage() {
  return (
    <>
      <PageHero
        title="Night Diving"
        description="Min 5 / Max 12 · Night diving experience recommended"
        crumbs={[{ label: "Home", href: "/" }, { label: "Diving", href: "/diving" }, { label: "Night Diving" }]}
      />
      <ImageTextSection eyebrow="After Dark" title="See the Reef Transform" imageLabel="Night diving photo placeholder">
        <p>As the sun sets, the reef takes on an entirely different character. Nocturnal creatures emerge and familiar sites feel brand new under the beam of a dive light.</p>
        <p>Guided night dives depart from our waterfront dock or by boat, depending on conditions and group preference.</p>
      </ImageTextSection>
      <CTASection title="Book a Night Dive" cta={{ label: "Reserve Online", href: "/contact" }} />
    </>
  );
}
