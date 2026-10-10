import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import JotFormEmbed from "@/components/JotFormEmbed";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Book your dive, course, or snorkelling trip with Don Foster's Dive Cayman.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        title="Book Now"
        description="Reserve your dives, courses, or snorkelling trips online — our team will confirm your booking by email."
        crumbs={[{ label: "Home", href: "/" }, { label: "Book Now" }]}
        image={img.home.slider[0]}
      />

      <section className="section bg-mist">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Reserve Your Spot" title="Booking Request" align="left" />
          <p className="mt-4 max-w-xl text-ink/70">
            Fill out the form below and our team will reach out to confirm availability and details.
          </p>

          <div className="mt-10 reveal">
            <JotFormEmbed
              src="https://form.jotform.com/jsform/31964493207863"
              title="Booking Request"
              description="Tell us what you'd like to book and when — we'll confirm availability by email."
            />
          </div>
        </div>
      </section>
    </>
  );
}
