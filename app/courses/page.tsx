import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { CTAButton } from "@/components/Button";
import { courses } from "@/lib/site";
import { img } from "@/lib/images";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PADI Courses",
  description: "Discover Scuba Diving through Divemaster and EFR — PADI courses with Don Foster's Dive Cayman.",
};

const divingCourses = courses.filter((c) => c.category === "diving");
const efrCourses = courses.filter((c) => c.category === "efr");
const photoCourse = courses.find((c) => c.category === "photo")!;

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="PADI Courses"
        description="From your first breath underwater to professional-level certification."
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
        image={img.courses.breadcrumb}
      />

      <ServiceGrid
        id="diving"
        eyebrow="Diving Courses"
        title="Learn to Dive With Confidence"
        description="From your first breath underwater to a professional-level certification."
        services={divingCourses}
      />

      <ServiceGrid
        id="efr"
        eyebrow="Emergency First Response"
        title="EFR Courses"
        description="First aid and emergency care training for divers and non-divers alike."
        services={efrCourses}
        className="bg-mist"
      />

      <section id="digital-underwater-photo-spotlight" className="section scroll-mt-24">
        <div className="container">
          <div className="grid items-center gap-10 md:gap-16 rounded-xl3 bg-brand-50 p-8 md:p-12 lg:grid-cols-2 reveal">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl3 shadow-card">
              <Image
                src={photoCourse.image}
                alt={photoCourse.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading eyebrow="Capture the Reef" title={photoCourse.title} align="left" />
              <p className="mt-4 text-ink/70 leading-relaxed">{photoCourse.blurb}</p>
              <CTAButton href={photoCourse.href} className="mt-7">
                Explore This Course
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Start Your Dive Training" cta={{ label: "Reserve Online", href: "/contact" }} />
    </>
  );
}
