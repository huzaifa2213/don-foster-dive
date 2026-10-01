import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GoogleReviews from "@/components/GoogleReviews";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <PageHero title="Testimonials" crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Testimonials" }]} image={img.about.breadcrumb} />
      <GoogleReviews />
      <CTASection title="Create Your Own Story With Us" cta={{ label: "Book Now", href: "/contact" }} image={img.about.boats[0]} />
    </>
  );
}
