import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "EFR (First Aid)",
  description: "Emergency First Response primary and secondary care training and refreshers.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="EFR (First Aid)"
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: "EFR (First Aid)" }]}
      />
      <ImageTextSection eyebrow="Emergency First Response" title="First Aid Skills for Divers and Non-Divers" imageLabel="EFR (First Aid) training photo placeholder">
        <p>Our EFR courses cover Primary and Secondary Care, alongside refresher training, for divers and non-divers alike.</p>
        <p>A valuable, practical skillset whether or not you plan to continue toward Rescue Diver or Divemaster.</p>
      </ImageTextSection>
      <CTASection title="Enroll in This Course" cta={{ label: "Reserve Online", href: "/contact" }} />
    </>
  );
}
