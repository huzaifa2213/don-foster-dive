import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import Gallery from "@/components/Gallery";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Black Water Diving",
  description: "Drift over the open ocean depths after dark on a black water dive with Don Foster's Dive Cayman.",
};

export default function BlackWaterDivingPage() {
  return (
    <>
      <PageHero
        title="Black Water Diving!"
        description="Min 5 / Max 12 · Night diving experience & buoyancy skills"
        crumbs={[{ label: "Home", href: "/" }, { label: "Black Water Diving" }]}
        image={img.blackWaterDiving.breadcrumb}
      />
      <ImageTextSection eyebrow="A Different Kind of Night Dive" title="Drift Above the Abyss" image={img.blackWaterDiving.featured} imageAlt="Black water diving">
        <p>Black water diving takes you far from shore after dark, drifting weightless over thousands of feet of open ocean. Rarely-seen pelagic creatures rise from the deep each night, making every dive completely unpredictable.</p>
        <p>Good buoyancy control and prior night diving experience are recommended for this advanced experience.</p>
      </ImageTextSection>
      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Black Water Diving" />
          <div className="mt-10">
            <Gallery images={img.blackWaterDiving.gallery} />
          </div>
        </div>
      </section>
      <CTASection
        title="Book a Black Water Dive"
        description="Drift over the open ocean after dark and encounter pelagic creatures most divers never see. Spaces are limited and prior night diving experience is recommended — reserve your spot today."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.blackWaterDiving.gallery[0]}
      />
    </>
  );
}
