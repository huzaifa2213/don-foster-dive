import SectionHeading from "./SectionHeading";
import JotFormEmbed from "./JotFormEmbed";
import ContactInfoCard from "./ContactInfoCard";
import { business } from "@/lib/site";

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section className="section bg-mist">
      <div className="container">
        <SectionHeading eyebrow="Get in Touch" title="Get in Touch with Us" align="left" />
        <p className="mt-4 max-w-xl text-ink/70">
          Our experienced team is here to help with bookings, dive schedules, and training information.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <ContactInfoCard icon={<EmailIcon />} label="Email" value={business.email} href={`mailto:${business.email}`} />
          <ContactInfoCard icon={<PhoneIcon />} label="Call or WhatsApp" value={business.phone} href={business.phoneHref} />
          <ContactInfoCard icon={<PinIcon />} label="Address" value={business.address} />
        </div>

        <div className="mt-10 reveal">
          <JotFormEmbed
            src="https://form.jotform.com/jsform/31893946371869"
            title="Send Us a Message"
            description="Questions about a dive, course, or anything else — drop us a line and we'll get back to you shortly."
          />
        </div>
      </div>
    </section>
  );
}
