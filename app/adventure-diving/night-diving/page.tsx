import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection, { TextImageSection } from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Night Diving",
  description:
    "Experience the ocean like never before with our mesmerizing Night Dive at Casuarina Point Reef — when the sun sets, the reef awakens.",
};

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}

const activities = [
  "Guided Shore Night Dive at Casuarina Point Reef",
  "Briefing and safety overview with professional Dive Guide",
  "Full gear setup and buddy check assistance",
  "Observation of nocturnal marine life and coral activity",
  "Bioluminescence viewing (lights-off experience)",
  "Post-dive relaxation at our oceanfront facilities",
];

export default function NightDivingPage() {
  return (
    <>
      <PageHero
        title="Night Diving"
        description="Activity Level: all levels · Group Size: min 5 / max 12"
        crumbs={[{ label: "Home", href: "/" }, { label: "Adventure Diving", href: "/adventure-diving" }, { label: "Night Diving" }]}
        image={img.adventureDiving.nightDiving.breadcrumb}
      />

      <ImageTextSection
        eyebrow="After Dark"
        title="Night Boat Diving"
        image={img.adventureDiving.nightDiving.featured}
        imageAlt="Night diving at Casuarina Point"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Experience the ocean like never before with our mesmerizing Night Dive at Casuarina Point Reef.
          When the sun sets, the reef awakens, transforming into a completely new underwater world full of
          color, mystery, and life. Guided by our expert Dive Instructors, you&rsquo;ll witness the
          incredible nocturnal behavior of marine creatures and discover the ocean&rsquo;s hidden wonders
          under the glow of your dive light. This guided experience is designed for certified divers
          looking to take their adventure to the next level.
        </p>
        <p>
          Our Guided Shore Night Dive begins right from our house reef — safe, familiar, and perfect for
          exploring the beauty that only night diving reveals. With easy shore access, calm conditions, and
          an abundance of life, it&rsquo;s the ideal setting for an unforgettable underwater adventure
          beneath the stars.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container max-w-2xl">
          <SectionHeading eyebrow="Activities Included" title="What's Included" align="left" />
          <ul className="mt-8 flex flex-col gap-3 reveal">
            {activities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink/70">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <MoonIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ImageTextSection
        eyebrow="Why Night Diving?"
        title="A Completely Different World After Dark"
        image={img.adventureDiving.nightDiving.gallery[0]}
        imageAlt="Diver with light exploring the reef at night"
      >
        <p>
          Night diving opens up a completely different world beneath the surface. The familiar reef
          transforms into a stage for nature&rsquo;s most incredible night show. Equipped with your light,
          you&rsquo;ll see the ocean in a new way — colors become more vibrant, movements more dramatic, and
          the sense of exploration more thrilling.
        </p>
        <p>
          As you descend into the quiet darkness, your focus sharpens and your connection with the ocean
          deepens. Every flicker of light reveals something extraordinary — a lobster on the move, a
          curious eel, or coral gently blooming. It&rsquo;s pure magic under the moonlit sea.
        </p>
      </ImageTextSection>

      <TextImageSection
        eyebrow="What Do You See at Night?"
        title="A Different Cast of Characters"
        image={img.adventureDiving.nightDiving.gallery[1]}
        imageAlt="Nocturnal marine life on the reef"
      >
        <p>
          The reef comes alive with a completely different cast of characters after dark. Daytime fish find
          places to sleep while nocturnal creatures begin their nightly routines. You&rsquo;ll encounter
          crabs, lobsters, shrimp, octopi, barracuda, tarpons, and moray eels moving gracefully through the
          reef.
        </p>
        <p>
          One of the most fascinating sights is coral feeding — colorful polyps extend to absorb nutrients,
          creating a breathtaking spectacle. And when you switch off your lights, you&rsquo;ll witness
          bioluminescence — tiny glowing organisms lighting up the water around you, a true natural wonder
          that can only be seen at night.
        </p>
      </TextImageSection>

      <section className="section bg-mist">
        <div className="container max-w-3xl">
          <div className="rounded-xl3 bg-white border-2 border-mist shadow-soft p-8 reveal">
            <h3 className="text-lg font-bold text-ink">Guided Shore Night Dive at Casuarina Point</h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Our house reef, Casuarina Point, offers the ideal setting for night diving — easy entry and
              exit, a shallow cove, and a gentle slope toward the reef. Your Dive Guide will ensure a safe
              and rewarding experience, leading you along the most captivating routes while keeping you
              oriented to the shoreline.
            </p>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Night Dives are scheduled upon request, any night of the week. Reservations must be made at
              least 24 hours in advance, with a minimum of two divers.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Night Diving" />
        </div>
        <div className="mt-10">
          <GallerySlider images={img.adventureDiving.nightDiving.gallery} alt="Night diving in Grand Cayman" fadeFrom="white" />
        </div>
      </section>

      <CTASection
        title="Book a Night Dive"
        description="Watch Casuarina Point transform after dark, from bioluminescent plankton to nocturnal reef life you'll never see by day. Reservations required at least 24 hours in advance, minimum 2 divers."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.adventureDiving.nightDiving.gallery[2]}
      />
    </>
  );
}
