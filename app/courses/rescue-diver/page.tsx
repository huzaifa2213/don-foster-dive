import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import ContactInfoCard from "@/components/ContactInfoCard";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Rescue Diver",
  description:
    "The PADI Rescue Diver Course is designed to take your diving skills to the next level — building your confidence and preparing you to handle emergency situations.",
};

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M8 13l-2 8 6-3 6 3-2-8" />
    </svg>
  );
}
function AgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
function IncludeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const skills = [
  { title: "Self-Rescue Techniques", text: "Learn to identify and respond to potential issues before they become emergencies." },
  { title: "Recognizing & Managing Stress in Others", text: "Gain insight into human behavior under pressure and how to diffuse anxiety underwater." },
  { title: "Emergency Management & Equipment", text: "Learn how to organize and manage emergency responses effectively." },
  { title: "Rescuing Panicked Divers", text: "Practice calm, controlled intervention techniques to help divers in distress." },
  { title: "Rescuing Unresponsive Divers", text: "Develop the skills to locate, surface, and provide assistance to an unresponsive diver." },
  { title: "Evaluating Environmental Conditions", text: "Understand how to assess dive sites and manage potential hazards." },
  { title: "Risk Prevention & Management", text: "Build awareness of situational risks and implement prevention strategies before each dive." },
];

export default function RescueDiverPage() {
  return (
    <>
      <PageHero
        title="Rescue Diver"
        description="Minimum age 12 · Approx. 4 days of practical sessions after eLearning"
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: "Rescue Diver" }]}
        image={img.courses.rescueDiver.breadcrumb}
      />

      <ImageTextSection
        eyebrow="Level Up Your Skills"
        title="Take Your Diving to the Next Level"
        image={img.courses.featured.rescueDiver}
        imageAlt="PADI Rescue Diver course"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          The PADI Rescue Diver Course is designed to take your diving skills to the next level. This
          course is both challenging and rewarding, building your confidence and preparing you to handle
          emergency situations — for yourself and for other divers. It&rsquo;s often described as the most
          demanding, yet most gratifying course in scuba diving.
        </p>
        <p>
          Through a mix of classroom theory, realistic scenarios, and open-water practice, you&rsquo;ll
          develop strong problem-solving abilities and a proactive mindset that makes you a better dive
          buddy and a more self-reliant diver.
        </p>
      </ImageTextSection>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="What You'll Learn" title="Skills You'll Master" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((item) => (
              <div key={item.title} className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-6 reveal">
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Course Structure"
            title="Certification & Prerequisites"
            align="left"
            description="After completing the online knowledge development portion through PADI eLearning, allow approximately four days to complete the practical sessions here at Don Foster's Dive Cayman."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ContactInfoCard icon={<BadgeIcon />} label="Prerequisite" value="PADI Advanced Open Water (or equivalent)" />
            <ContactInfoCard icon={<AgeIcon />} label="Minimum Age" value="12 years" />
            <ContactInfoCard icon={<ClockIcon />} label="Course Duration" value="Approx. 4 days (after eLearning)" />
            <ContactInfoCard icon={<IncludeIcon />} label="Includes" value="Instructor-led training, sessions, equipment & certification" />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container max-w-3xl">
          <div className="rounded-xl3 bg-white border-2 border-mist shadow-soft p-8 reveal">
            <h3 className="text-lg font-bold text-ink">Why Choose Us</h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              With decades of experience and a passion for ocean education, our instructors provide a safe,
              supportive, and engaging environment for every diver. From realistic emergency scenarios to
              hands-on guidance, we ensure that each participant leaves not only with new skills — but with
              a renewed respect for the underwater world and a deeper sense of responsibility as a diver.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Rescue Diver" />
        </div>
        <div className="mt-10">
            <GallerySlider images={img.courses.rescueDiver.gallery} alt="Rescue Diver course" fadeFrom="white" />
          </div>
      </section>

      <CTASection
        title="Ready to Become a Rescue Diver?"
        description="Build the confidence and skills to keep yourself and your buddies safe."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.courses.rescueDiver.gallery[0]}
      />
    </>
  );
}
