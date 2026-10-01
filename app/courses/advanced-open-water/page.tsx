import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Advanced Open Water",
  description:
    "The PADI Advanced Open Water Course is your next step toward expanding your underwater horizons — two core dives plus three elective dives of your choice.",
};

const electives = [
  { title: "Boat Diving", text: "Learn best practices for diving from a vessel and managing your gear efficiently on board." },
  { title: "Peak Performance Buoyancy", text: "Perfect your control and glide through the water with ease and precision." },
  { title: "Night Diving", text: "Discover a completely different underwater world that comes alive after dark." },
  { title: "Wreck Diving", text: "Experience the mystery and history of submerged vessels while learning proper wreck exploration techniques." },
  { title: "Fish Identification", text: "Get to know the marine life you encounter and gain a deeper appreciation for ocean biodiversity." },
  { title: "Search and Recovery", text: "Master techniques to locate and retrieve lost objects safely and effectively." },
];

export default function AdvancedOpenWaterPage() {
  return (
    <>
      <PageHero
        title="Advanced Open Water"
        description="2 core dives + 3 elective dives of your choice · 2–3 days"
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: "Advanced Open Water" }]}
        image={img.courses.advancedOpenWater.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Next Step"
        title="Expand Your Underwater Horizons"
        image={img.courses.featured.advancedOpenWater}
        imageAlt="PADI Advanced Open Water course"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          The PADI Advanced Open Water Course at Don Foster&rsquo;s Dive Cayman is your next step toward
          expanding your underwater horizons. Designed for certified divers ready to elevate their skills,
          this course refines what you&rsquo;ve already learned and introduces new, exciting diving
          experiences.
        </p>
        <p>
          Through a combination of online study and hands-on training, you&rsquo;ll complete two core dives
          — <span className="font-semibold text-ink">Deep</span> and{" "}
          <span className="font-semibold text-ink">Underwater Navigation</span> — plus three elective dives
          of your choice, tailored to your interests and goals.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Choose Your Path" title="Elective Dives" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {electives.map((item) => (
              <div key={item.title} className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-6 reveal">
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="rounded-xl3 bg-white border-2 border-mist shadow-soft p-8 reveal">
            <p className="text-ink/70 leading-relaxed">
              While it&rsquo;s possible to complete the Advanced Open Water Course in just two days, we
              recommend allowing three days to truly enjoy and absorb the experience. The online portion
              can be completed beforehand via the PADI eLearning platform, maximizing your in-water time
              once you arrive in Cayman.
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Depending on your selected dives, training sessions take place from either our shore site at
              Casuarina Point Reef or aboard our dive boats — Cayman Wall and Cayman Sky — both offering
              access to some of the island&rsquo;s most beautiful underwater sites.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Advanced Open Water" />
        </div>
        <div className="mt-10">
            <GallerySlider images={img.courses.advancedOpenWater.gallery} alt="Advanced Open Water course" fadeFrom="mist" />
          </div>
      </section>

      <CTASection
        title="Ready to Go Further?"
        description="Deep dives, wrecks, navigation, photography — choose the electives that match your interests and take your diving skills further, guided by our experienced instructor team."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.courses.advancedOpenWater.gallery[0]}
      />
    </>
  );
}
