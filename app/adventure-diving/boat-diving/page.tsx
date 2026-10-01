import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Boat Diving",
  description:
    "Experience the beauty of Grand Cayman's underwater world through our unforgettable Boat Diving adventures aboard Cayman Wall and Cayman Sky.",
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const dives = [
  {
    title: "Two-Tank Morning Dive",
    meta: "9:00 AM Departure",
    text: "Enjoy a deep wall dive (up to 100 ft) followed by a shallower reef dive (50–60 ft). Each dive lasts approximately 40–50 minutes, allowing ample bottom time to explore and capture the beauty below.",
  },
  {
    title: "One-Tank Afternoon Dive",
    meta: "2:00 PM Departure",
    text: "Perfect for novice divers, underwater photographers, or Discover Scuba Divers under instructor supervision. A relaxed shallow dive with longer bottom time, designed to enhance comfort and confidence.",
  },
  {
    title: "Guided & Buddy Team Options",
    meta: "All Dives",
    text: "Every dive is led by our professional guides, though certified divers may explore as independent buddy teams following standard safety protocols. Solo diving is not permitted.",
  },
];

const highlights = [
  "Access to dozens of established dive sites across Grand Cayman's Marine Park System",
  "Scenic boat rides (10–30 minutes) aboard Cayman Wall and Cayman Sky with full amenities",
  "Complimentary fresh water, rinse tanks, and secure storage on board",
  "Professionally guided dives emphasizing safety, marine conservation, and exploration",
];

export default function BoatDivingPage() {
  return (
    <>
      <PageHero
        title="Boat Diving"
        description="Activity Level: beginners to experienced · Group Size: min 4 / max 12"
        crumbs={[{ label: "Home", href: "/" }, { label: "Adventure Diving", href: "/adventure-diving" }, { label: "Boat Diving" }]}
        image={img.adventureDiving.boatDiving.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Daily Departures"
        title="Aboard Cayman Wall & Cayman Sky"
        image={img.adventureDiving.boatDiving.featured}
        imageAlt="Dive boat departure"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Experience the beauty of Grand Cayman&rsquo;s underwater world through our unforgettable Boat
          Diving adventures. Our boat dives offer access to some of the island&rsquo;s most spectacular and
          remote dive sites — places unreachable from shore, yet easily accessible aboard our modern dive
          vessels Cayman Wall and Cayman Sky. With calm seas, crystal-clear visibility, and vibrant marine
          life, every dive promises a unique and awe-inspiring experience.
        </p>
        <p>
          Located on the protected western side of Grand Cayman, we have quick and convenient access to
          dozens of established sites within the Island Marine Park areas. From dramatic wall dives to
          colorful shallow reefs, our boat diving program caters to divers of all levels. Weather
          permitting, we also venture to the North Wall for an even more thrilling underwater adventure.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Dive Schedule" title="Two Boat Trips Daily" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {dives.map((item) => (
              <div key={item.title} className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-7 reveal">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600">{item.meta}</span>
                <h3 className="mt-3 font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-2xl">
          <SectionHeading eyebrow="Dive Highlights" title="What's Included" align="left" />
          <ul className="mt-8 flex flex-col gap-3 reveal">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink/70">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Boat Diving" />
        </div>
        <div className="mt-10">
          <GallerySlider images={img.adventureDiving.boatDiving.gallery} alt="Boat diving in Grand Cayman" fadeFrom="mist" />
        </div>
      </section>

      <CTASection
        title="Reserve Your Boat Dive"
        description="Daily two-tank trips to Grand Cayman's finest wall and reef sites."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.adventureDiving.boatDiving.gallery[0]}
      />
    </>
  );
}
