import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { CTAButton } from "@/components/Button";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Dive Master Program",
  description:
    "Step into the professional world of scuba diving with the PADI Dive Master Program at Don Foster's Dive Cayman — where experience meets opportunity.",
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const responsibilities = [
  { title: "Supervise and lead dives", text: "Organize, conduct, and oversee recreational dives both from shore and from our boats." },
  { title: "Assist instructors", text: "Support PADI instructors in training programs, skill sessions, and student supervision." },
  { title: "Plan and manage dive logistics", text: "Assess dive sites for safety, conduct site briefings, and manage diver entry and exit." },
  { title: "Provide exceptional guest experiences", text: "Learn to deliver professional-level customer service from greeting guests to post-dive support." },
  { title: "Gain real operational insight", text: "Participate in all aspects of a busy dive center — gear setup, air fills, record-keeping, and maintenance." },
];

const requirements = [
  "Minimum age: 18 years",
  "PADI Rescue Diver certification (or equivalent)",
  "Emergency First Response (EFR) certification within the past 24 months",
  "Minimum of 40 logged dives to start the course (60 required for certification)",
  "Medically fit for diving, with a physician's clearance",
];

export default function DiveMasterProgramPage() {
  return (
    <>
      <PageHero
        title="Dive Master Program"
        description="Minimum age 18 · Where experience meets opportunity"
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: "Dive Master Program" }]}
        image={img.courses.divemaster.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Go Pro"
        title="Begin Your Professional Diving Career"
        image={img.courses.featured.divemaster}
        imageAlt="PADI Dive Master Program"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          Step into the professional world of scuba diving with the PADI Dive Master Program at Don
          Foster&rsquo;s Dive Cayman — where experience meets opportunity. Established in 1982, our dive
          operation is one of the most respected in the Cayman Islands, known for combining safety,
          professionalism, and passion for the ocean.
        </p>
        <p>
          This comprehensive program develops your diving knowledge, water skills, and leadership
          abilities. You will learn how to supervise diving activities, assist instructors during training,
          and guide certified divers on underwater adventures.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Why Don Foster's" title="Why Take the Dive Master Course With Us?" align="left" />
          <div className="mt-8 flex flex-col gap-5 reveal">
            <p className="text-ink/70 leading-relaxed">
              Our Dive Master training follows the PADI professional development protocols — but what truly
              sets us apart is our immersive, hands-on learning environment. For over 30 years, we&rsquo;ve
              trained Dive Master interns who gained real-world experience by interacting directly with
              guests, managing dive operations, and assisting with classes, boat dives, and snorkelling
              excursions.
            </p>
            <p className="text-ink/70 leading-relaxed">
              You won&rsquo;t just learn the theory — you&rsquo;ll live the dive life every day. Our dive
              center operates a fleet of vessels ranging from 48-foot V-hull dive boats to 65-foot
              double-deck snorkel boats, giving you exposure to multiple styles of diving operations.
              You&rsquo;ll also have the opportunity to take IYT (International Yacht Training) classes to
              enhance your seamanship and boat handling skills.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What You'll Learn and Do" title="The Role of a Dive Master" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map((item) => (
              <div key={item.title} className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-6 reveal">
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-ink/70 leading-relaxed reveal">
            As a qualified Dive Master, you&rsquo;ll be certified to guide divers, assist with instruction,
            conduct scuba reviews, and even teach snorkelling programs under supervision. Many of our Dive
            Master graduates go on to become PADI Instructors and work in world-class dive destinations
            around the globe.
          </p>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container max-w-2xl">
          <SectionHeading eyebrow="Requirements" title="Course Requirements" align="left" />
          <ul className="mt-8 flex flex-col gap-3 reveal">
            {requirements.map((item) => (
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

      <CTASection
        title="Ready to Go Pro?"
        description="Mentored by our senior instructor team and backed by over 40 years of island experience, turn your love for the ocean into the start of a genuine diving career."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.courses.featured.divemaster}
      />
    </>
  );
}
