import SectionHeading from "./SectionHeading";
import FAQAccordion from "./FAQAccordion";
import { CTAButton } from "./Button";
import { faqs } from "@/lib/site";

export default function FAQ() {
  return (
    <section className="section bg-mist">
      <div className="container">
        <div className="flex flex-col gap-6 reveal md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" align="left" />
            <p className="mt-5 max-w-xl text-ink/70">
              Can&rsquo;t find what you&rsquo;re looking for? Our team is happy to help you plan every
              detail of your dive.
            </p>
          </div>
          <CTAButton href="/contact" className="shrink-0">
            Ask Us a Question
          </CTAButton>
        </div>

        <div className="mt-10 reveal">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
