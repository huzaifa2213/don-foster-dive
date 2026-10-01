import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { business } from "@/lib/site";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the story of Don Foster's Dive Cayman, diving Grand Cayman since 1982.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Don Foster's"
        description="Four decades of diving Grand Cayman, guided by the same passion for the ocean we started with."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={img.about.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Who We Are"
        title="Four Decades of Diving Grand Cayman"
        image={img.about.whoWeAre}
        imageAlt="Don Foster's Dive Cayman team"
      >
        <p>
          Since {business.founded}, Don Foster&rsquo;s Dive Cayman has been one of the island&rsquo;s most
          respected and beloved dive operations. For over four decades, we&rsquo;ve shared our passion for
          the ocean with visitors and locals alike, inspiring safe, skilled, and environmentally conscious
          scuba divers.
        </p>
        <p>
          Our experienced instructors and guides are dedicated to helping every diver experience the beauty
          of the underwater world in new and unforgettable ways. As we evolve, our mission remains the
          same — to teach, explore, and inspire a lifelong love for the ocean.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Learn More" title="More About Our Operation" />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Where We Are" description="Our waterfront location on South Church Street, George Town." image={img.about.whereWeAre} cta={{ label: "View Location", href: "/about/where-we-are" }} />
            <FeatureCard title="Facilities & Boats" description="A look at our shop, dock, and dive vessels Cayman Wall and Cayman Sky." image={img.about.facilities[0]} cta={{ label: "See Facilities", href: "/about/facilities" }} />
            <FeatureCard title="Our Staff" description="Meet the PADI instructors and guides behind every dive." image={img.about.staff.sergio} cta={{ label: "Meet the Team", href: "/about/staff" }} />
            <FeatureCard title="Our Philosophy" description="Our mission, vision and approach to diving Grand Cayman." image={img.about.philosophy} cta={{ label: "Our Approach", href: "/about/philosophy" }} />
            <FeatureCard title="Testimonials" description="What divers from around the world say about diving with us." image={img.about.mission} cta={{ label: "Read Reviews", href: "/about/testimonials" }} />
            <FeatureCard title="Gallery" description="A look at life on and below the water with Don Foster's." image={img.about.vision} cta={{ label: "View Gallery", href: "/gallery" }} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Life at Don Foster's" />
        </div>
        <div className="mt-10">
          <GallerySlider
            images={[
              img.about.whoWeAre,
              img.about.whereWeAre,
              ...img.about.facilities,
              ...img.about.boats,
              img.about.staff.sergio,
              img.about.staff.mishal,
            ]}
            alt="Life at Don Foster's Dive Cayman"
            fadeFrom="white"
          />
        </div>
      </section>

      <CTASection
        title="Ready to Dive With Us?"
        description="From your first Discover Scuba experience to advanced wreck and night dives, our team is ready to show you why divers keep coming back to Don Foster's year after year."
        cta={{ label: "Book Now", href: "/contact" }}
        image={img.about.boats[0]}
      />
    </>
  );
}
