import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Photo & Video Services",
  description:
    "Designed exclusively for passionate underwater photographers, beginners and advanced alike — a Photo Buddy Guide for your dive.",
};

const whoItsFor = [
  "Photographers seeking knowledgeable local support",
  "Divers who want to refine macro or wide-angle techniques",
  "Anyone who values patience, time, and personalized attention underwater",
];

export default function PhotoVideoPage() {
  return (
    <>
      <PageHero
        title="Photo & Video Services"
        description="Activity Level: Basic Level · Photo Buddy Guide"
        crumbs={[{ label: "Home", href: "/" }, { label: "Adventure Diving", href: "/adventure-diving" }, { label: "Photo & Video Services" }]}
        image={img.adventureDiving.photoVideo.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Photo Buddy Guide"
        title="Capture the Reef Like a Pro"
        image={img.adventureDiving.photoVideo.featured}
        imageAlt="Underwater photography guide"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Designed exclusively for passionate underwater photographers — beginners and advanced alike. Your
          personal Ace Guide leads you through the dive site with an expert eye for finding rare marine
          species and unique scenes many divers overlook.
        </p>
        <p>
          Whether your interest is in macro photography, capturing mesmerizing tiny details, or wide-angle
          shots showcasing dramatic walls and wrecks, this service ensures your dive revolves around
          creativity and precision. Enjoy a relaxed, slow-paced dive where you can fully focus on your
          subject — adjusting lighting, refining settings, and waiting for that perfect angle without ever
          feeling rushed.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container max-w-2xl">
          <SectionHeading eyebrow="Activities Included" title="Who This Is For" align="left" />
          <ul className="mt-8 flex flex-col gap-3 reveal">
            {whoItsFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink/70">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Photo & Video Services" />
        </div>
        <div className="mt-10">
          <GallerySlider images={img.adventureDiving.photoVideo.gallery} alt="Underwater photography in Grand Cayman" fadeFrom="white" />
        </div>
      </section>

      <CTASection
        title="Add a Photo Guide to Your Dive"
        description="Take the reef home with you — guided by an expert eye."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.adventureDiving.photoVideo.gallery[0]}
      />
    </>
  );
}
