import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "EFR Refresher",
  description:
    "The EFR (Emergency First Responder) Refresher course is designed for certified divers and individuals who wish to renew and enhance their emergency response skills.",
};

const whatYoullLearn = [
  {
    title: "Scene Assessment & Response",
    text: "Learn how to assess an emergency scene safely and determine the best course of action.",
  },
  {
    title: "CPR & AED Practice",
    text: "Refresh your hands-on CPR skills and get updated with the latest Automated External Defibrillator (AED) techniques.",
  },
  {
    title: "Primary & Secondary Care",
    text: "Review vital first aid steps, including managing bleeding, shock, and common injuries.",
  },
  {
    title: "Emergency Procedures",
    text: "Understand how to communicate effectively and coordinate care until professional medical help arrives.",
  },
];

export default function EfrRefresherPage() {
  return (
    <>
      <PageHero
        title="EFR Refresher"
        description="Half day · Approx. 3–4 hours"
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: "EFR Refresher" }]}
        image={img.courses.efrRefresher.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Stay Current"
        title="Refresh Your First Response Skills"
        image={img.courses.featured.efrRefresher}
        imageAlt="EFR Refresher course"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          The EFR (Emergency First Responder) Refresher course is designed for certified divers and
          individuals who wish to renew and enhance their emergency response skills. This half-day program
          focuses on refreshing your knowledge and updating you with the latest techniques in CPR
          (Cardiopulmonary Resuscitation) and First Aid.
        </p>
        <p>
          Whether it&rsquo;s been a while since your last training or you simply want to feel more
          confident in your ability to respond to an emergency, this class ensures you&rsquo;re
          well-prepared to act quickly and effectively when it matters most.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="What You'll Learn" title="Refresh Your Response Skills" />
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
          <SectionHeading eyebrow="Gallery" title="EFR Refresher" />
        </div>
        <div className="mt-10">
            <GallerySlider images={img.courses.efrRefresher.gallery} alt="EFR Refresher course" fadeFrom="white" />
          </div>
      </section>

      <CTASection
        title="Ready to Refresh Your Skills?"
        description="A few hours now keeps your CPR and first aid skills sharp for whenever they're needed. Stay confident and prepared to respond, both in and out of the water."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.courses.efrRefresher.gallery[0]}
      />
    </>
  );
}
