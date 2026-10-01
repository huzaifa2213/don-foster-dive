import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageTextSection, { TextImageSection } from "@/components/ImageTextSection";
import SectionHeading from "@/components/SectionHeading";
import ContactInfoCard from "@/components/ContactInfoCard";
import GallerySlider from "@/components/GallerySlider";
import CTASection from "@/components/CTASection";
import { CTAButton } from "@/components/Button";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Cruise Ships",
  description:
    "If you're arriving in Grand Cayman on a cruise ship and want to explore our stunning underwater world, we've got you covered.",
};

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h3l2-2h6l2 2h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}
function SeatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4M4 20h16M8 20v-3M16 20v-3" />
    </svg>
  );
}
function CrewIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
    </svg>
  );
}
function BoatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14l2 5h14l2-5H3z" />
      <path d="M6 14V6h8l4 8" />
      <path d="M11 2v4" />
    </svg>
  );
}
function ShoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <circle cx="12" cy="7" r="2.5" />
      <path d="M12 9.5V14" />
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
function AnchorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v13M7 12H4a8 8 0 0 0 8 8 8 8 0 0 0 8-8h-3M8 10l4-3 4 3" />
    </svg>
  );
}
function FlagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 21V4" />
      <path d="M6 4h12l-3 4 3 4H6" />
    </svg>
  );
}
function HourglassIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12M6 21h12" />
      <path d="M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9" />
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
function TicketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9a2 2 0 1 0 0 6v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 1 1 0-6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3z" />
    </svg>
  );
}

const boatFeatures = [
  "Camera tables and freshwater rinse tanks for cameras and dive computers",
  "Shaded seating and easy water access",
  "Professional crew focused on safety and personalized service",
];

const importantDetails = [
  { icon: <ClockIcon />, label: "Check-In Time", value: "8:30 AM local time" },
  { icon: <AnchorIcon />, label: "Boat Departure", value: "9:00 AM" },
  { icon: <FlagIcon />, label: "Return Time", value: "Approx. 1:00–1:30 PM" },
  { icon: <HourglassIcon />, label: "Duration", value: "Around 4.5 hours" },
  { icon: <PinIcon />, label: "Location", value: "A few blocks from the cruise port" },
  { icon: <TicketIcon />, label: "Availability", value: "Limited spaces, reservations required" },
];

export default function CruiseShipsPage() {
  return (
    <>
      <PageHero
        title="Cruise Ship Excursions"
        description="Arriving in Grand Cayman on a cruise ship? Explore our stunning underwater world — we've got you covered."
        crumbs={[{ label: "Home", href: "/" }, { label: "Cruise Ships" }]}
        image={img.cruiseShips.breadcrumb}
      />

      <ImageTextSection
        eyebrow="In Port for the Day"
        title="Explore Grand Cayman's Underwater Paradise"
        image={img.cruiseShips.gallery[1]}
        imageAlt="Diver exploring a Grand Cayman reef"
        cta={{ label: "Reserve Online", href: "/contact" }}
      >
        <p>
          If you&rsquo;re arriving in Grand Cayman on a cruise ship and want to explore our stunning
          underwater world, we&rsquo;ve got you covered.
        </p>
        <p>
          Our dive shop is conveniently located just a few blocks from the main port terminal, making it
          easy for you to step off the ship and dive straight into adventure.
        </p>
      </ImageTextSection>

      {/* small groups, big experience */}
      <section className="section bg-mist">
        <div className="container">
          <SectionHeading
            eyebrow="Our Boats"
            title="Small Groups, Big Experience"
            description="We specialize in catering to cruise ship passengers, certified divers, and snorkelers looking for a memorable underwater experience in Grand Cayman. Our spacious boats are designed for comfort and small group experiences, ensuring a relaxed and personalized dive."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: <CameraIcon />, text: boatFeatures[0] },
              { icon: <SeatIcon />, text: boatFeatures[1] },
              { icon: <CrewIcon />, text: boatFeatures[2] },
            ].map((f, i) => (
              <div key={i} className="rounded-xl3 bg-white border-2 border-mist shadow-soft p-6 reveal">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                  {f.icon}
                </span>
                <p className="mt-4 text-sm text-ink/70 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* boat dives & shore dives */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Choose Your Adventure" title="Boat Dives & Shore Dives" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-8 reveal">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-soft">
                <BoatIcon />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">Boat Dives</h3>
              <p className="mt-2 text-ink/70 leading-relaxed">
                Explore some of Grand Cayman&rsquo;s most stunning reefs and dive sites, guided by our
                experienced dive masters.
              </p>
            </div>
            <div className="rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-8 reveal">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-soft">
                <ShoreIcon />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">Shore Dives</h3>
              <p className="mt-2 text-ink/70 leading-relaxed">
                Dive our incredible house reef, located right off our shore. Grab your buddy and enjoy an
                easy, independent dive full of marine life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* certified divers */}
      <TextImageSection
        eyebrow="Certified Divers"
        title="Two-Tank Boat Dive or House Reef Shore Dive"
        image={img.cruiseShips.gallery[2]}
        imageAlt="Certified divers boarding a dive boat"
      >
        <p>
          If you&rsquo;re already certified, you can choose between a two-tank boat dive or a shore dive
          on our stunning house reef. Our daily boat dives typically depart at 9:00 AM local time (check
          your ship&rsquo;s time zone) and return around 1:00 PM, giving you plenty of time to enjoy your
          day on the island.
        </p>
        <p>
          Divers must hold an Open Water Diver certification (or higher) and have logged a dive within the
          past two years, or completed a recent refresher course.
        </p>
        <CTAButton href="/courses/refresher" variant="ghost">
          Need a Refresher First?
        </CTAButton>
      </TextImageSection>

      {/* important details */}
      <section className="section bg-mist">
        <div className="container">
          <SectionHeading eyebrow="Plan Ahead" title="Important Details" align="left" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {importantDetails.map((d) => (
              <ContactInfoCard key={d.label} icon={d.icon} label={d.label} value={d.value} />
            ))}
          </div>
        </div>
      </section>

      {/* gallery slider */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Life on the Water" />
        </div>
        <div className="mt-10">
          <GallerySlider images={img.cruiseShips.gallery} alt="Cruise ship excursion" />
        </div>
      </section>

      <CTASection
        title="Book Your Shore Excursion"
        description="Limited spaces, reservations required — reserve your spot before your ship docks."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.cruiseShips.gallery[3]}
      />
    </>
  );
}
