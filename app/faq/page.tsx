import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about diving with Don Foster's Dive Cayman.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        image={img.about.breadcrumb}
      />
      <FAQ />
      <CTASection
        title="Still Have Questions?"
        description="Can't find the answer you're looking for? Our team knows these waters inside and out and is happy to walk you through anything — from gear and certification requirements to picking the right dive for your trip."
        cta={{ label: "Contact Us", href: "/contact" }}
        image={img.about.whoWeAre}
      />
    </>
  );
}
