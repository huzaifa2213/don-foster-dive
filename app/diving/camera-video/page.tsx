import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Camera & Video Services",
  description: "Underwater camera rental and video services with Don Foster's Dive Cayman.",
};

export default function CameraVideoPage() {
  return (
    <>
      <PageHero
        title="Camera & Video Services"
        description="Photo guiding · Equipment rental · All levels"
        crumbs={[{ label: "Home", href: "/" }, { label: "Diving", href: "/diving" }, { label: "Camera & Video Services" }]}
      />
      <ImageTextSection eyebrow="Capture the Moment" title="Take the Reef Home With You" imageLabel="Underwater photography photo placeholder">
        <p>Rent underwater camera equipment or have a member of our team guide and capture your dive on photo or video — a lasting memory of your time in the water.</p>
      </ImageTextSection>
      <CTASection title="Add Camera Services to Your Dive" cta={{ label: "Reserve Online", href: "/contact" }} />
    </>
  );
}
