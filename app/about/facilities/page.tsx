import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Facilities & Boats",
  description:
    "A freshwater training pool, full-service boat dock, premium rental equipment, and our two modern dive vessels — Cayman Sky and Cayman Wall.",
};

const boats = [
  {
    name: "Cayman Sky",
    specs: "48 ft twin-engine Pro 48",
    capacity: "Accommodates up to 24 divers",
  },
  {
    name: "Cayman Wall",
    specs: "40 ft single-engine Pro 42",
    capacity: "Accommodates up to 16 divers",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Facilities & Boats"
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Facilities & Boats" }]}
        image={img.about.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Our Shop"
        title="A Waterfront Base Built for Comfort"
        image={img.about.facilities[0]}
        imageAlt="Don Foster's waterfront facilities"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Our waterfront base has been thoughtfully designed to make every diver&rsquo;s experience
          comfortable and convenient. We feature a freshwater training pool surrounded by a sun deck and
          BBQ area with shaded picnic tables — perfect for post-dive relaxation with breathtaking ocean
          views.
        </p>
        <p>
          The boat dock includes rinse tanks, drying racks, and secure overnight storage for your dive gear.
          We rent premium Scubapro BCDs, regulators with dive computers, and shorty wetsuits, all serviced
          in-house by certified technicians. Air & Nitrox tanks and snorkel gear are also available. Relax
          under a Casuarina Pine after your dive, enjoy a refreshing drink, and log your underwater
          adventures in the most tranquil setting imaginable.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Our Fleet" title="Our Boats" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {boats.map((boat) => (
              <div key={boat.name} className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-8 reveal">
                <h3 className="text-xl font-bold text-ink">{boat.name}</h3>
                <p className="mt-2 text-sm font-bold text-brand-600">{boat.specs}</p>
                <p className="mt-1 text-sm text-ink/70">{boat.capacity}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-ink/70 leading-relaxed reveal">
            Both boats are equipped with freshwater showers, dry storage, ice chests, and rinse tanks for
            electronics and cameras. Each vessel meets Cayman Islands Port Authority standards and carries
            emergency oxygen, first aid kits, VHF radios, and life jackets.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Our Facilities & Boats" />
        </div>
        <div className="mt-10">
          <GallerySlider
            images={[...img.about.facilities.slice(1), ...img.about.boats]}
            alt="Don Foster's facilities and boats"
            fadeFrom="white"
          />
        </div>
      </section>

      <CTASection title="See Our Boats in Action" cta={{ label: "Book a Boat Dive", href: "/adventure-diving/boat-diving" }} image={img.about.boats[2]} />
    </>
  );
}
