import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "EFR Primary & Secondary Care",
  description:
    "The Emergency First Response (EFR) Primary & Secondary Care Course equips you with essential life-saving skills to respond effectively during emergencies.",
};

const whatYoullLearn = [
  {
    title: "Primary Care (CPR)",
    text: "Learn how to provide immediate care for life-threatening emergencies such as cardiac arrest, choking, and serious bleeding.",
  },
  {
    title: "Secondary Care (First Aid)",
    text: "Gain the skills to assess and treat injuries or illnesses that aren't immediately life-threatening.",
  },
  {
    title: "Practical Scenarios",
    text: "Practice real-life emergency simulations that reinforce confidence and readiness to assist others safely and effectively.",
  },
  {
    title: "Emergency Response Steps",
    text: "Master EFR's easy-to-follow \"Cycle of Care\" for handling medical emergencies calmly and efficiently.",
  },
];

export default function EfrPrimarySecondaryCarePage() {
  return (
    <>
      <PageHero
        title="EFR Primary & Secondary Care"
        description="Emergency First Responder · CPR and First Aid certification"
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: "EFR Primary & Secondary Care" }]}
        image={img.courses.efrPrimary.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Emergency First Response"
        title="Life-Saving Skills for Any Situation"
        image={img.courses.featured.efrPrimary}
        imageAlt="EFR Primary and Secondary Care course"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          The Emergency First Response (EFR) Primary & Secondary Care Course is designed to equip you with
          essential life-saving skills to respond effectively during emergencies. This internationally
          recognized certification focuses on CPR (Cardiopulmonary Resuscitation) and First Aid techniques
          that could make a crucial difference when it matters most.
        </p>
        <p>
          Whether you&rsquo;re on land, underwater, at home, or at work, this hands-on training ensures
          you&rsquo;ll have the confidence to act quickly and correctly in a critical situation. The EFR
          course is suitable for divers and non-divers alike — from Dive Masters and instructors to
          teachers, parents, coaches, or office professionals.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="What You'll Learn" title="Primary & Secondary Care" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whatYoullLearn.map((item) => (
              <div key={item.title} className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-6 reveal">
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="EFR Primary & Secondary Care" />
        </div>
        <div className="mt-10">
            <GallerySlider images={img.courses.efrPrimary.gallery} alt="EFR Primary and Secondary Care course" fadeFrom="white" />
          </div>
      </section>

      <CTASection
        title="Ready to Learn Life-Saving Skills?"
        description="Suitable for divers and non-divers alike."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.courses.efrPrimary.gallery[0]}
      />
    </>
  );
}
