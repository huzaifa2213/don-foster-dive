import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Scuba Diving Refresher",
  description:
    "The Scuba Diving Refresher Course is designed for certified divers who haven't been underwater for a while and want to refresh their knowledge and skills.",
};

const whatToExpect = [
  {
    title: "Lecture Review",
    text: "Revisit key diving principles, safety procedures, and emergency skills through a structured knowledge review led by one of our experienced instructors.",
  },
  {
    title: "Practical Skills Practice",
    text: "Get back into the water for a pool session focused on essential techniques — gear setup, buddy checks, buoyancy control, mask clearing, and air-sharing.",
  },
  {
    title: "Personalized Experience",
    text: "Each refresher is adapted to your experience and comfort level, whether you need a quick tune-up or a more thorough reintroduction to diving skills.",
  },
];

export default function ScubaRefresherPage() {
  return (
    <>
      <PageHero
        title="Scuba Diving Refresher"
        description="Professional instructor · Recommended after 2+ years away from diving"
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: "Scuba Diving Refresher" }]}
        image={img.courses.refresher.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Back in the Water"
        title="Scuba Diving Refresher"
        image={img.courses.featured.refresher}
        imageAlt="Scuba diving refresher course"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          The Scuba Diving Refresher Course is designed for certified divers who haven&rsquo;t been
          underwater for a while and want to refresh their knowledge and skills before their next dive
          adventure. At Don Foster&rsquo;s Dive Cayman, we recommend a refresher if it has been two years
          or more since your last dive.
        </p>
        <p>
          The session begins with a short classroom review covering essential dive theory and safety
          concepts, followed by hands-on skills practice in our on-site training pool, under the guidance
          of a professional instructor — ensuring you regain comfort, confidence, and readiness to dive
          safely and enjoyably in open water once again.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="What to Expect" title="Rebuild Your Comfort and Confidence" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {whatToExpect.map((item) => (
              <div key={item.title} className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-7 reveal">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Scuba Diving Refresher" />
        </div>
        <div className="mt-10">
            <GallerySlider images={img.courses.refresher.gallery} alt="Scuba diving refresher course" fadeFrom="white" />
          </div>
      </section>

      <CTASection
        title="Ready to Get Back in the Water?"
        description="Rebuild your confidence with a professional instructor by your side."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.courses.refresher.gallery[0]}
      />
    </>
  );
}
