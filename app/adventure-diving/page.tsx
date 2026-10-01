import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import CTASection from "@/components/CTASection";
import { divingServices } from "@/lib/site";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Adventure Diving in Grand Cayman",
  description: "Boat diving, shore diving, night diving, wreck diving and more with Don Foster's Dive Cayman.",
};

export default function AdventureDivingPage() {
  return (
    <>
      <PageHero
        title="Adventure Diving in Grand Cayman"
        description="From waterfront shore dives to daily boat trips and the famous Kittiwake wreck."
        crumbs={[{ label: "Home", href: "/" }, { label: "Adventure Diving" }]}
        image={img.adventureDiving.breadcrumb}
      />
      <ServiceGrid eyebrow="Choose Your Adventure" title="Dive Experiences" services={divingServices} />
      <CTASection title="Ready to Get in the Water?" cta={{ label: "Reserve Online", href: "/contact" }} image={img.adventureDiving.featured.boatDiving} />
    </>
  );
}
