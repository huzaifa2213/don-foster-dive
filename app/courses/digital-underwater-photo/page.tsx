import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Digital Underwater Photo",
  description:
    "Turn your dives into unforgettable memories with the PADI Digital Underwater Photographer – Level 1 Course.",
};

const whatYoullLearn = [
  {
    title: "Camera Setup & Care",
    text: "Learn how to prepare and maintain your camera or action cam for underwater use.",
  },
  {
    title: "Lighting & Composition",
    text: "Discover how to use natural and artificial light to enhance your shots and compose stunning images.",
  },
  {
    title: "Practical Dive Experience",
    text: "Apply what you learn during guided dives, capturing photos of Cayman's vibrant reefs and marine life.",
  },
];

export default function DigitalUnderwaterPhotoPage() {
  return (
    <>
      <PageHero
        title="Digital Underwater Photo"
        description="PADI Digital Underwater Photographer — Level 1"
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: "Digital Underwater Photo" }]}
        image={img.courses.digitalPhoto.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Capture the Reef"
        title="PADI Digital Underwater Photographer"
        image={img.courses.featured.digitalPhoto}
        imageAlt="Digital underwater photography course"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Turn your dives into unforgettable memories with the PADI Digital Underwater Photographer — Level
          1 Course. This program introduces you to the fundamentals of underwater photography using
          today&rsquo;s modern digital cameras. Whether you&rsquo;re using a compact camera, GoPro, or
          advanced system, you&rsquo;ll learn how to adjust settings, control buoyancy, and use natural
          light to create stunning underwater images.
        </p>
        <p>
          The course combines a short classroom session with hands-on diving practice right here in the
          crystal-clear waters of Grand Cayman. You&rsquo;ll explore techniques to handle common challenges
          such as color loss, backscatter, and motion blur while discovering the secrets of framing,
          composition, and lighting.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="What You'll Learn" title="From Camera to Composition" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {whatYoullLearn.map((item) => (
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
          <SectionHeading eyebrow="Gallery" title="Digital Underwater Photo" />
        </div>
        <div className="mt-10">
            <GallerySlider images={img.courses.digitalPhoto.gallery} alt="Digital underwater photography course" fadeFrom="white" />
          </div>
      </section>

      <CTASection
        title="Ready to Capture the Reef?"
        description="Learn to handle lighting, composition, and your camera settings underwater, so the photos you bring home finally do justice to what you saw beneath the waves."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.courses.digitalPhoto.gallery[0]}
      />
    </>
  );
}
