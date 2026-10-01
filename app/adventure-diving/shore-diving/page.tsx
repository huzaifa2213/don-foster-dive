import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Shore Diving",
  description:
    "Experience the thrill of underwater exploration right from our stunning waterfront location on South Church Street — our house reef, Casuarina Point.",
};

const activities = [
  {
    title: "Casuarina Point & Devil's Grotto Reefs",
    text: "Navigate coral formations teeming with colorful reef fish, spiny lobsters, and juvenile trunkfish.",
  },
  {
    title: "Marine Life Encounters",
    text: "Spot southern stingrays gliding across the sand patches and experience the reef's vibrant biodiversity up close.",
  },
  {
    title: "Diver-Friendly Facilities",
    text: "Enjoy easy water access, shaded rest areas, secure gear storage, rinse stations, and fresh water showers after your dive.",
  },
];

export default function ShoreDivingPage() {
  return (
    <>
      <PageHero
        title="Shore Diving"
        description="Activity Level: beginners to expert · Group Size: min 2 / max 8"
        crumbs={[{ label: "Home", href: "/" }, { label: "Adventure Diving", href: "/adventure-diving" }, { label: "Shore Diving" }]}
        image={img.adventureDiving.shoreDiving.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Waterfront Access"
        title="Shore Diving at Casuarina Point"
        image={img.adventureDiving.shoreDiving.featured}
        imageAlt="Shore diving entry point"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Experience the thrill of underwater exploration right from our stunning waterfront location on
          South Church Street. Our beautiful house reef, Casuarina Point, offers the perfect setting for
          both beginners and seasoned divers to enjoy a relaxed, independent dive experience. With
          crystal-clear waters, easy access, and a diverse marine environment, it&rsquo;s the ideal spot to
          immerse yourself in the beauty of Grand Cayman&rsquo;s underwater world.
        </p>
        <p>
          Depths range from 15ft (5m) to 60ft (18m), making it suitable for various skill levels. Entry is
          simple via a short ladder into 10ft (3m) of water, with the reef beginning just 70ft (20m)
          offshore. Divers can take advantage of our comfortable on-site amenities, including shaded gear
          setup areas, rinse tanks, and fresh water showers — all designed to make your shore diving
          experience seamless and enjoyable.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Activities Included" title="What to Expect" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {activities.map((item) => (
              <div key={item.title} className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-7 reveal">
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Shore Diving" />
        </div>
        <div className="mt-10">
          <GallerySlider images={img.adventureDiving.shoreDiving.gallery} alt="Shore diving at Casuarina Point" fadeFrom="white" />
        </div>
      </section>

      <CTASection
        title="Book Your Shore Dive"
        description="Walk straight into Casuarina Point and Devil's Grotto from our waterfront dock."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.adventureDiving.shoreDiving.gallery[0]}
      />
    </>
  );
}
