import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import ContactMap from "@/components/ContactMap";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Don Foster's Dive Cayman to plan your visit.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Questions, bookings, or just want to say hi? We'd love to hear from you."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image={img.home.slider[3]}
      />
      <ContactSection />
      <ContactMap />
    </>
  );
}
