import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import CTASection from "@/components/CTASection";
import { business } from "@/lib/site";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Where We Are",
  description:
    "Conveniently located at 218 South Church Street, George Town, just 600 yards from downtown and the harbor.",
};

export default function WhereWeArePage() {
  return (
    <>
      <PageHero
        title="Where We Are"
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Where We Are" }]}
        image={img.about.breadcrumb}
      />
      <ImageTextSection
        eyebrow="Our Location"
        title="A Waterfront Home on South Church Street"
        image={img.about.whereWeAre}
        imageAlt="Don Foster's waterfront location"
        cta={{ label: "Get Directions", href: "/contact" }}
      >
        <p>
          We are conveniently located at {business.address}, just 600 yards from downtown and the harbor
          yet nestled within a peaceful residential neighborhood. Our dive shop, a charming traditional
          Caymanian-style building, overlooks the crystal-clear waters of the Caribbean Sea.
        </p>
        <p>
          From here, divers enjoy easy access to {business.reefs[0]} and {business.reefs[1]}, two of Grand
          Cayman&rsquo;s most spectacular shore dive sites. Whether arriving by cruise ship or staying
          nearby, we&rsquo;re just a short walk or drive from the island&rsquo;s top attractions.
        </p>
      </ImageTextSection>
      <CTASection title="Come Dive With Us" cta={{ label: "Get Directions", href: "/contact" }} image={img.about.boats[1]} />
    </>
  );
}
