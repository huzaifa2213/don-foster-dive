import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Staff",
  description: "Meet the PADI instructors, dive guides, and boat captains behind every dive at Don Foster's Dive Cayman.",
};

const team = [
  { name: "Sergio", role: "Dive Instructor, Dive Guide and Owner", image: img.about.staff.sergio },
  { name: "Mishal", role: "Dive Instructor, Dive Guide and Boat Captain", image: img.about.staff.mishal },
  { name: "Lewis", role: "Dive Instructor and Dive Guide", image: img.about.staff.lewis },
  { name: "Lindsey", role: "Dive Instructor, Dive Guide and Boat Captain", image: img.about.staff.lindsey },
  { name: "Nick", role: "Dive Instructor, Dive Guide and Boat Captain", image: img.about.staff.nick },
];

const loop = [...team, ...team];

export default function StaffPage() {
  return (
    <>
      <PageHero title="Our Staff" crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Staff" }]} image={img.about.breadcrumb} />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Meet the Team" title="Passionate Instructors & Guides" />
        </div>

        <div
          className="relative mt-12 overflow-hidden reveal"
          style={{ ["--marquee-duration" as string]: `${team.length * 6}s` }}
        >
          <div className="marquee-track flex w-max gap-8">
            {loop.map((member, i) => (
              <div key={i} className="w-56 shrink-0 text-center">
                <div className="relative aspect-square overflow-hidden rounded-xl2 shadow-soft">
                  <Image src={member.image} alt={member.name} fill sizes="224px" className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm text-brand-500">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>
      <CTASection
        title="Dive With Our Team"
        description="Our instructors and guides bring decades of combined experience to every trip. Book your dive and see firsthand why so many divers request them by name."
        cta={{ label: "Book Now", href: "/contact" }}
        image={img.about.staff.sergio}
      />
    </>
  );
}
