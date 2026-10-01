import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ImageTextSection, { TextImageSection } from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { CTAButton } from "@/components/Button";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Advanced Snorkelling",
  description:
    "Experience the thrill of exploring Grand Cayman's underwater world like never before. Our Advanced Snorkelling adventures are designed for confident swimmers.",
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 9v4M12 17h.01" />
      <path d="M10.3 3.9L1.8 18a1.5 1.5 0 0 0 1.3 2.3h17.8a1.5 1.5 0 0 0 1.3-2.3L13.7 3.9a1.5 1.5 0 0 0-2.6 0z" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}

const reefs = [
  {
    name: "Casuarina Reef",
    description: "Located directly in front of our shop, offering spectacular coral formations and tropical fish.",
    image: img.advancedSnorkelling.gallery[2],
  },
  {
    name: "Sea View Reef",
    description: "Just south of our facility, known for its soft corals and calm conditions.",
    image: img.advancedSnorkelling.gallery[1],
  },
  {
    name: "Devil's Grotto",
    description: "One of Grand Cayman's most famous snorkel and dive sites, featuring caverns, tunnels, and breathtaking underwater scenery.",
    image: img.advancedSnorkelling.gallery[4],
  },
];

const included = ["Guide", "Briefing", "Snorkel Gear", "Underwater Flashlight / Torch"];

const requirements = [
  { label: "Age Limit", text: "12 years old and older." },
  { label: "Swim Proficiency", text: "Good swimming skills and comfort in open water too deep to stand on." },
  {
    label: "Health Condition",
    text: "Good physical health; no serious medical issues like asthma, heart problems, or epilepsy. Be aware of severe allergic reaction risk from jellyfish stings. Snorkelers need to negotiate an 8-step ladder to access and exit the water. Full body coverage (wetsuit or rash guard) is required for the night adventure.",
  },
  { label: "Snorkelling Experience", text: "Previous daytime snorkelling experience may be required." },
  {
    label: "Snorkelling Equipment",
    text: "Bring your own if you know it works well, or we'll provide mask, snorkel, fins and full-length rash guards (required due to possible jellyfish activity).",
  },
  { label: "Supervision", text: "Attend the adventure briefing. Guided by certified Divemasters / Scuba Instructors." },
  { label: "Night Visibility", text: "Must be comfortable snorkelling in low-light conditions, aided by underwater flashlights and/or glow sticks." },
  { label: "Consent Forms", text: "Completed waiver or consent forms acknowledging the risks involved." },
];

export default function AdvancedSnorkellingPage() {
  return (
    <>
      <PageHero
        title="Advanced Snorkelling"
        description="Designed for confident swimmers who want to go beyond the basics and discover the ocean from a whole new perspective."
        crumbs={[{ label: "Home", href: "/" }, { label: "Advanced Snorkelling" }]}
        image={img.advancedSnorkelling.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Beyond the Basics"
        title="Explore Cayman's Reefs Beyond the Surface"
        image={img.advancedSnorkelling.gallery[0]}
        imageAlt="Snorkeller exploring a Grand Cayman reef"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Experience the thrill of exploring Grand Cayman&rsquo;s underwater world like never before. Our
          Advanced Snorkelling adventures are designed for confident swimmers who want to go beyond the
          basics and discover the beauty of the ocean from a whole new perspective.
        </p>
        <p>
          Snorkelling with Don Foster&rsquo;s Dive Cayman is more than just swimming on the surface —
          it&rsquo;s about connecting with the ocean. Our experienced guides will brief you on safe
          snorkelling techniques, ocean awareness, and how to experience marine life respectfully and
          responsibly.
        </p>
      </ImageTextSection>

      {/* where adventure meets tranquility + reef cards */}
      <section className="section bg-mist">
        <div className="container">
          <SectionHeading
            eyebrow="Where Adventure Meets Tranquility"
            title="Three Reefs, Right From Our Shore"
            description="Most of our snorkelling experiences begin right from our waterfront location. With easy access via two ladders, you can explore along the shoreline or venture further toward the main section of the reef, about 100 yards offshore."
          />

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-accent-50 border border-accent-200 px-5 py-4 max-w-2xl mx-auto reveal">
            <AlertIcon />
            <p className="text-sm text-accent-700">
              <span className="font-bold">Please note:</span> you must be a strong swimmer, as the water
              here is too deep to stand.
            </p>
          </div>

          <p className="mt-8 text-center font-semibold text-ink/70 reveal">
            Within swimming distance of our facility are three magnificent reef sections:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reefs.map((reef) => (
              <div key={reef.name} className="overflow-hidden rounded-xl3 bg-white border-2 border-mist shadow-soft hover:shadow-card hover:border-brand-500 transition-all duration-300 reveal">
                <div className="relative aspect-[4/3]">
                  <Image src={reef.image} alt={reef.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">{reef.name}</h3>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{reef.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* glow quest night snorkel */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col items-center gap-3 text-center reveal">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-900 text-brand-300">
              <MoonIcon />
            </span>
            <span className="eyebrow">Glow Quest Night Snorkel Adventure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink max-w-2xl">
              Explore the Reef When Most Eyes Sleep
            </h2>
            <p className="max-w-2xl text-ink/70 leading-relaxed">
              Discover the mysterious world beneath the waves on a guided shore night snorkelling
              adventure. As darkness falls, explore shallow, vibrant coral reefs and encounter nocturnal
              marine life — curious octopuses, shimmering bioluminescent plankton, and glowing jellyfish.
              Guided by experienced instructors, you&rsquo;ll marvel at the underwater lights and the
              secrets of the deep in a safe, awe-inspiring environment.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-600">
                2½ hours
              </span>
              <span className="rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-600">
                Min 3 / Max 8 snorkelers
              </span>
            </div>
          </div>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[320px_1fr]">
            {/* what's included — stays pinned while requirements scroll past */}
            <div className="rounded-xl3 bg-brand-500 p-7 reveal lg:sticky lg:top-[100px]">
              <h3 className="text-lg font-bold text-white">What's Included</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-white">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-brand-600">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton href="/contact" variant="ghostLight" className="mt-6 w-full">
                Reserve This Adventure
              </CTAButton>
            </div>

            {/* requirements */}
            <div className="rounded-xl3 bg-white border-2 border-mist shadow-soft p-7 reveal">
              <h3 className="text-lg font-bold text-ink">Minimum Requirements for Any Snorkel Adventure</h3>
              <ol className="mt-5 flex flex-col divide-y divide-mist">
                {requirements.map((req, i) => (
                  <li key={req.label} className="flex gap-4 py-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                      {i + 1}
                    </span>
                    <p className="text-sm text-ink/70 leading-relaxed">
                      <span className="font-bold text-ink">{req.label}: </span>
                      {req.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* gallery */}
      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Life on the Reef" />
        </div>
        <div className="mt-10">
          <GallerySlider images={img.advancedSnorkelling.gallery} alt="Snorkelling in Grand Cayman" fadeFrom="mist" />
        </div>
      </section>

      <CTASection
        title="Ready for Your Snorkel Adventure?"
        description="From our three house reefs to the after-dark Glow Quest adventure, there's a snorkel trip here for every confident swimmer. Spaces are limited on every trip, so reserve yours today."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.advancedSnorkelling.gallery[6]}
      />
    </>
  );
}
