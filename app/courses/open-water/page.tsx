import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { CTAButton } from "@/components/Button";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Open Water",
  description:
    "Ready to explore the underwater world and become a certified diver? The PADI Open Water Course is your first step toward a lifetime of adventure and discovery.",
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const inclusions = [
  "All required dive equipment (BCD, regulator, wetsuit, tanks, weights, mask, fins, snorkel)",
  "Professional instruction from certified PADI Instructors",
  "Pool and open water training sessions",
  "Certification processing",
  "Complimentary water and shore facilities access",
];

export default function OpenWaterPage() {
  return (
    <>
      <PageHero
        title="Open Water"
        description="Your first PADI certification — dive safely and independently, anywhere in the world"
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: "Open Water" }]}
        image={img.courses.openWater.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Your First Certification"
        title="Start a Lifetime of Diving"
        image={img.courses.featured.openWater}
        imageAlt="PADI Open Water course in Grand Cayman"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Ready to explore the underwater world and become a certified diver? The PADI Open Water Course
          is your first step toward a lifetime of adventure and discovery beneath the surface. Whether
          you&rsquo;re new to diving or continuing your learning journey, this course gives you the
          essential skills, confidence, and certification to dive safely and independently anywhere in the
          world.
        </p>
        <p>
          At Don Foster&rsquo;s Dive Cayman, you&rsquo;ll experience crystal-clear Caribbean waters,
          vibrant marine life, and personalized instruction from our experienced dive professionals.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="rounded-xl3 bg-white border-2 border-mist shadow-soft p-8 reveal">
            <h3 className="text-xl font-bold text-ink">Open Water Referral Program</h3>
            <p className="mt-3 text-sm text-ink/70 leading-relaxed">
              Already completed your classroom and pool sessions at home? Finish your certification in the
              warm, clear waters of Grand Cayman. Bring your referral form from your local dive center, and
              our instructors will take you through your four certification dives — usually completed over
              two days (two dives per day). Your first day is typically from shore, your second from either
              a boat or the shore. We proudly accept PADI and Universal Referral Program students.
            </p>
            <span className="mt-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold text-brand-600">
              2 days
            </span>
          </div>
          <div className="rounded-xl3 bg-white border-2 border-mist shadow-soft p-8 reveal">
            <h3 className="text-xl font-bold text-ink">Open Water with E-Learning</h3>
            <p className="mt-3 text-sm text-ink/70 leading-relaxed">
              Short on time? Complete all your academic requirements — lectures, videos, quizzes, and exams
              — online at your own pace before arriving on island. Once here, bring your e-learning
              completion record and get started right away with pool sessions and your four open water
              dives. Typically completed in three days (weather and performance permitting).
            </p>
            <span className="mt-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold text-brand-600">
              3 days
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-2xl">
          <SectionHeading eyebrow="What's Included" title="Course Inclusions" align="left" />
          <ul className="mt-8 flex flex-col gap-3 reveal">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink/70">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CTAButton href="/contact">Reserve Online</CTAButton>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Open Water" />
        </div>
        <div className="mt-10">
            <GallerySlider images={img.courses.openWater.gallery} alt="Open Water course" fadeFrom="mist" />
          </div>
      </section>

      <CTASection
        title="Ready to Get Certified?"
        description="Whether you choose the Referral path or complete your e-learning first, your PADI Open Water certification starts here, in some of the clearest water in the Caribbean."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.courses.openWater.gallery[0]}
      />
    </>
  );
}
