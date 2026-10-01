import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import StatsStrip from "@/components/StatsStrip";
import ImageTextSection from "@/components/ImageTextSection";
import FeatureCard from "@/components/FeatureCard";
import GallerySlider from "@/components/GallerySlider";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { divingServices, courses, business } from "@/lib/site";
import { img } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={`Diving Grand Cayman Since ${business.founded}`}
        title="Driving Discovery and Making Lives Richer With New Dive Experiences"
        description="From our waterfront base on South Church Street, we offer unforgettable dive experiences — from daily boat and shore dives to night dives, snorkelling, and PADI courses for all levels."
        primaryCta={{ label: "Reserve Online", href: "/contact" }}
        secondaryCta={{ label: "Explore Diving", href: "/adventure-diving" }}
        images={img.home.slider}
      />

      <ImageTextSection
        eyebrow="Our Story"
        title="Trusted Since 1982"
        cta={{ label: "About Don Foster's", href: "/about" }}
        image={img.home.story}
        imageAlt="Don Foster's dive team on the water"
      >
        <p>
          Since 1982, Don Foster&rsquo;s Dive Cayman has been inspiring divers from around the world to
          explore the beauty and wonder of the Caribbean Sea. With over four decades of experience,
          we&rsquo;ve become one of the island&rsquo;s most trusted dive operations — known for our safety,
          professionalism, and deep respect for the ocean.
        </p>
        <p>
          Our passionate team of PADI-certified instructors and guides are dedicated to helping divers of
          all levels learn, explore, and connect with the underwater world in ways they&rsquo;ve never
          imagined. Join us, and let the ocean transform the way you see the world.
        </p>
      </ImageTextSection>

      <ServiceGrid
        eyebrow="Adventure Diving"
        title="Dive Experiences for Every Level"
        description="Daily boat and shore dives, night diving and more, guided by our experienced PADI team."
        services={divingServices}
      />

      <StatsStrip
        stats={[
          { value: "40+", label: "Years of Diving Experience" },
          { value: "10,000+", label: "Certified Divers Trained" },
          { value: "100%", label: "Safety-First Record" },
        ]}
      />

      <ServiceGrid
        eyebrow="PADI Courses"
        title="Learn to Dive With Confidence"
        description="From your first breath underwater to professional-level certification."
        services={courses.slice(0, 6)}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Choose Us" title="What Sets Don Foster's Apart" />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 max-w-3xl mx-auto">
            <FeatureCard
              title="Expert & Passionate Instructors"
              description="Our PADI-certified instructors and dive masters are experienced professionals who are passionate about teaching and inspiring confidence in every diver."
              image={img.home.passionateInstructors}
              cta={{ label: "Meet the Team", href: "/about/staff" }}
            />
            <FeatureCard
              title="World-Class Dive Locations"
              description="Explore iconic sites like Devil's Grotto, Casuarina Point Reef, and the Kittiwake Wreck — some of the Caribbean's most breathtaking underwater destinations."
              image={img.home.worldClassLocations}
              cta={{ label: "Where We Are", href: "/about/where-we-are" }}
            />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="A Glimpse Below" title="Life on the Reef" />
        </div>
        <div className="mt-10">
          <GallerySlider
            images={[
              img.home.adventureDiving.shoreDiving,
              img.home.adventureDiving.boatDiving,
              img.home.adventureDiving.nightDiving,
              img.home.adventureDiving.kittiwakeWreck,
              img.home.adventureDiving.blackWaterDiving,
              img.home.adventureDiving.photoVideo,
            ]}
            alt="Life on the reef in Grand Cayman"
            fadeFrom="mist"
          />
        </div>
      </section>

      <GoogleReviews />
      <FAQ />

      <CTASection
        title="Dive Into Discovery"
        description="Experience Grand Cayman's breathtaking underwater world with expert guides and unforgettable dives. Book your next adventure today!"
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.home.slider[1]}
      />
    </>
  );
}
