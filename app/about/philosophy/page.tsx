import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection, { TextImageSection } from "@/components/ImageTextSection";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "With every dive, we learn. With every student, we grow. Our philosophy, mission and vision at Don Foster's Dive Cayman.",
};

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        title="Our Philosophy"
        description="With every dive, we learn. With every student, we grow."
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Our Philosophy" }]}
        image={img.about.breadcrumb}
      />

      <ImageTextSection eyebrow="Our Philosophy" title="A Journey of Discovery and Connection" image={img.about.philosophy} imageAlt="Our philosophy">
        <p>
          At Don Foster&rsquo;s Dive Cayman, diving is not just a sport — it&rsquo;s a journey of discovery
          and connection. We believe that true divers are not only skilled but also mindful and respectful
          of the marine environment.
        </p>
        <p>
          Our instructors guide students to develop independence, confidence, and decision-making skills
          underwater. We strive to create divers who explore responsibly, protect marine life, and become
          ambassadors for the world&rsquo;s oceans.
        </p>
      </ImageTextSection>

      <TextImageSection eyebrow="Our Mission" title="Teach, Inspire, Empower" image={img.about.mission} imageAlt="Our mission">
        <p>
          To teach, inspire, and empower divers to explore the ocean safely and responsibly while fostering
          a lifelong appreciation for marine life. We aim to deliver exceptional diving experiences that
          enrich lives and deepen respect for the underwater world.
        </p>
        <p>
          Every course we teach and every dive we guide is built on the same foundation: safety first,
          skill second, and a genuine love of the ocean woven through everything in between. We measure our
          success not by certifications issued, but by the confidence, curiosity, and care each diver
          carries with them long after they leave Grand Cayman.
        </p>
        <p>
          Whether it&rsquo;s a first-time Discover Scuba Diver taking their first breath underwater or a
          Dive Master candidate preparing for a career in the industry, our mission stays the same — meet
          every diver where they are, and help them go further than they thought possible.
        </p>
      </TextImageSection>

      <ImageTextSection eyebrow="Our Vision" title="Where Passion Meets Purpose" image={img.about.vision} imageAlt="Our vision">
        <p>
          To be the Cayman Islands&rsquo; leading dive experience — where passion meets purpose, and where
          every dive inspires a deeper connection with the sea. We envision a community of divers who learn,
          grow, and advocate for the ocean, preserving its wonders for generations to come.
        </p>
        <p>
          We see a future where every guest who dives with us leaves as more than just a certified diver —
          they leave as an ambassador for the reef, someone who understands why these waters are worth
          protecting. That ripple effect, one diver at a time, is how we believe real change happens.
        </p>
        <p>
          As Don Foster&rsquo;s Dive Cayman continues to grow, our vision stays rooted in what brought us
          here in the first place: a deep respect for the Caribbean Sea, a commitment to doing things the
          right way, and a belief that the best dive operations are built on trust earned one dive at a
          time.
        </p>
      </ImageTextSection>

      <CTASection title="Join Us Below the Surface" cta={{ label: "Book Now", href: "/contact" }} image={img.about.boats[3]} />
    </>
  );
}
