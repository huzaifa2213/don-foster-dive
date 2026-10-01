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
      <CTASection title="Still Have Questions?" cta={{ label: "Contact Us", href: "/contact" }} image={img.home.slider[0]} />
    </>
  );
}
