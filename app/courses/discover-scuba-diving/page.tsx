import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Discover Scuba Diving",
  description:
    "Experience the thrill of breathing underwater and explore the beauty of the Caribbean Sea with our PADI Discover Scuba Diving (Resort) Course.",
};

const whyChooseUs = [
  {
    title: "Personalized Instruction",
    text: "Small group sizes ensure individual attention and a comfortable learning environment.",
  },
  {
    title: "Ideal Training Environment",
    text: "Practice in our freshwater pool before diving into the Caribbean's crystal-clear waters.",
  },
  {
    title: "Unforgettable Experience",
    text: "Discover the freedom of diving and create memories that will last a lifetime.",
  },
];

export default function DiscoverScubaDivingPage() {
  return (
    <>
      <PageHero
        title="Discover Scuba Diving"
        description="No experience required · Approx. 3 hours, includes the guided dive"
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: "Discover Scuba Diving" }]}
        image={img.courses.discoverScuba.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Your First Breath Underwater"
        title="Discover Scuba Diving"
        image={img.courses.featured.discoverScuba}
        imageAlt="Discover Scuba Diving in Grand Cayman"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Experience the thrill of breathing underwater and explore the beauty of the Caribbean Sea with
          our PADI Discover Scuba Diving (Resort) Course. This entry-level program is designed for
          beginners who have never dived before but are eager to discover what it&rsquo;s like to explore
          beneath the waves.
        </p>
        <p>
          Your journey begins with a short, engaging lecture where our experienced instructors introduce
          you to the basics of scuba diving, covering essential safety concepts and equipment use.
          You&rsquo;ll then move to our on-site training pool, where you&rsquo;ll practice key scuba
          skills — including mask clearing, regulator recovery, and regulator clearing — all under the
          close supervision of your instructor.
        </p>
        <p>
          Once you&rsquo;re comfortable and confident, you&rsquo;ll embark on an unforgettable guided dive
          on our house reef, Casuarina Point, teeming with vibrant coral formations and colorful marine
          life.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container max-w-3xl">
          <div className="rounded-xl3 bg-white border-2 border-mist shadow-soft p-8 reveal">
            <p className="text-ink/70 leading-relaxed">
              The entire experience lasts approximately 3 hours and includes the guided dive. Please note
              this is <span className="font-bold text-ink">not a certification course</span> — it&rsquo;s
              the perfect first step toward becoming a certified diver. Afterward, you may continue your
              adventure with a Repeat Resort Dive on our afternoon 1-Tank Dive, or a relaxed shore dive at
              Casuarina Point.
            </p>
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-brand-50 px-6 py-4">
              <span className="font-bold text-ink">Price</span>
              <span className="rounded-full bg-brand-500 px-4 py-1.5 text-sm font-bold text-white">
                $150 USD — includes full equipment
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Choose Us" title="A Safe, Supported First Dive" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-7 reveal">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Discover Scuba Diving" />
        </div>
        <div className="mt-10">
            <GallerySlider images={img.courses.discoverScuba.gallery} alt="Discover Scuba Diving course" fadeFrom="mist" />
          </div>
      </section>

      <CTASection
        title="Ready to Breathe Underwater?"
        description="Your first dive adventure is waiting."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.courses.discoverScuba.gallery[0]}
      />
    </>
  );
}
