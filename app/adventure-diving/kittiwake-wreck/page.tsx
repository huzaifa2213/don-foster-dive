import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kittiwake Wreck",
  description:
    "Dive into history with the Kittiwake Wreck — one of Grand Cayman's most iconic underwater attractions, a 252-foot former U.S. Navy vessel.",
};

const activities = [
  {
    title: "Scuba Diving Exploration",
    text: "Experience a guided dive through the Kittiwake's decks, engine room, and wheelhouse, observing marine life and the wreck's remarkable preservation.",
  },
  {
    title: "Snorkeling Adventure",
    text: "For those who prefer to stay near the surface, enjoy crystal-clear views of the wreck's upper sections and surrounding reef teeming with sea creatures.",
  },
  {
    title: "Historical & Safety Briefing",
    text: "Learn about the vessel's naval history and the story of its transformation into a marine sanctuary before diving in.",
  },
];

export default function KittiwakePage() {
  return (
    <>
      <PageHero
        title="Kittiwake Wreck"
        description="Activity Level: beginners to expert · Group Size: min 4 / max 12"
        crumbs={[{ label: "Home", href: "/" }, { label: "Adventure Diving", href: "/adventure-diving" }, { label: "Kittiwake Wreck" }]}
        image={img.adventureDiving.kittiwakeWreck.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Wreck Diving"
        title="Dive Into History"
        image={img.adventureDiving.kittiwakeWreck.featured}
        imageAlt="USS Kittiwake wreck"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Dive into history with the Kittiwake Wreck — one of Grand Cayman&rsquo;s most iconic underwater
          attractions. Once a proud U.S. Navy vessel in service from 1945 to 1994, the Kittiwake now rests
          gracefully within the West Bay bight, transformed into a thriving artificial reef and marine park.
        </p>
        <p>
          Resting upright on a 60-foot sandy seabed, this 252-foot vessel offers divers a captivating
          experience. With its wheelhouse and upper decks reaching near the surface, the wreck is perfect
          for both scuba divers and snorkelers. Large openings throughout the structure allow for safe
          exploration and stunning views as sunlight filters through the interior, revealing a vibrant
          ecosystem of coral, sponges, and marine life.
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

          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-accent-50 border border-accent-200 px-5 py-4 max-w-2xl mx-auto reveal">
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-accent-600" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 9v4M12 17h.01" />
              <path d="M10.3 3.9L1.8 18a1.5 1.5 0 0 0 1.3 2.3h17.8a1.5 1.5 0 0 0 1.3-2.3L13.7 3.9a1.5 1.5 0 0 0-2.6 0z" />
            </svg>
            <p className="text-sm text-accent-700">
              <span className="font-bold">Please note:</span> as the Kittiwake is a protected private
              marine park, dive groups maintain a small ratio (typically 6:1) for safety and a personalized
              experience. Trips are scheduled regularly — please check with our dive shop for upcoming
              excursions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Kittiwake Wreck" />
        </div>
        <div className="mt-10">
          <GallerySlider images={img.adventureDiving.kittiwakeWreck.gallery} alt="USS Kittiwake wreck" fadeFrom="white" />
        </div>
      </section>

      <CTASection
        title="Dive the Kittiwake"
        description="A 252-foot former U.S. Navy vessel turned thriving artificial reef, the Kittiwake is one of Grand Cayman's most photographed dives — suitable for both scuba divers and snorkelers."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.adventureDiving.kittiwakeWreck.gallery[0]}
      />
    </>
  );
}
