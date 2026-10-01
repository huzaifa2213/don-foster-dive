import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = { title: "Awards" };

export default function AwardsPage() {
  return (
    <>
      <PageHero title="Awards" crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Awards" }]} />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Recognition" title="Award-Winning Diving, Since 1982" />
          <div className="mt-12">
            <Placeholder label="Awards / certificates photo placeholder" ratio="aspect-video" />
          </div>
        </div>
      </section>
      <CTASection title="Dive With an Award-Winning Team" cta={{ label: "Book Now", href: "/contact" }} />
    </>
  );
}
