import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GallerySlider from "@/components/GallerySlider";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from diving, snorkelling and courses with Don Foster's Dive Cayman.",
};

const sections: { title: string; images: string[] }[] = [
  { title: "Adventure Diving", images: [img.adventureDiving.featured.shoreDiving, img.adventureDiving.featured.boatDiving, img.adventureDiving.featured.nightDiving, img.adventureDiving.featured.kittiwakeWreck, img.adventureDiving.featured.photoVideo, img.adventureDiving.breadcrumb] },
  { title: "Boat Diving", images: img.adventureDiving.boatDiving.gallery },
  { title: "Shore Diving", images: img.adventureDiving.shoreDiving.gallery },
  { title: "Night Diving", images: img.adventureDiving.nightDiving.gallery },
  { title: "Kittiwake Wreck", images: img.adventureDiving.kittiwakeWreck.gallery },
  { title: "Black Water Diving", images: img.blackWaterDiving.gallery },
  { title: "Our Boats & Facilities", images: [...img.about.boats, ...img.about.facilities] },
  { title: "Cruise Ship Excursions", images: img.cruiseShips.gallery },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]} image={img.about.breadcrumb} />
      {sections.map((s, i) => (
        <section key={s.title} className={`section first:pt-16 ${i % 2 === 1 ? "bg-mist" : ""}`}>
          <div className="container">
            <SectionHeading eyebrow="Gallery" title={s.title} align="left" />
          </div>
          <div className="mt-8">
            <GallerySlider images={s.images} alt={s.title} fadeFrom={i % 2 === 1 ? "mist" : "white"} />
          </div>
        </section>
      ))}
      <CTASection
        title="Create Your Own Cayman Memories"
        description="These photos are just a glimpse of what's waiting below the surface. Join us for a boat dive, a relaxed afternoon of shore diving, or a PADI course, and start building your own collection of Grand Cayman memories."
        cta={{ label: "Book Now", href: "/contact" }}
        image={img.adventureDiving.shoreDiving.gallery[2]}
      />
    </>
  );
}
