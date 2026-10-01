import { img } from "./images";

export const business = {
  name: "Don Foster's Dive Cayman",
  shortName: "Don Foster's",
  founded: 1982,
  phone: "(345) 945-5132",
  phoneHref: "tel:+13459455132",
  email: "dfdretail@donfosters.com",
  address: "218 South Church Street, George Town, Grand Cayman",
  facebook: "https://www.facebook.com/donfostersdive",
  twitter: "https://twitter.com/DonFostersDive",
  googleReviews: "https://share.google/dJaqEGDnMXtgEYMfa",
  vessels: ["Cayman Wall", "Cayman Sky"],
  reefs: ["Casuarina Point Reef", "Devil's Grotto"],
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Gallery", href: "/gallery" },
      { label: "Where We Are", href: "/about/where-we-are" },
      { label: "Facilities & Boats", href: "/about/facilities" },
      { label: "Our Staff", href: "/about/staff" },
      { label: "Our Philosophy", href: "/about/philosophy" },
    ],
  },
  {
    label: "Adventure Diving",
    href: "/adventure-diving",
    children: [
      { label: "Shore Diving", href: "/adventure-diving/shore-diving" },
      { label: "Boat Diving", href: "/adventure-diving/boat-diving" },
      { label: "Night Diving", href: "/adventure-diving/night-diving" },
      { label: "Kittiwake Wreck", href: "/adventure-diving/kittiwake-wreck" },
      { label: "Photo & Video Services", href: "/adventure-diving/photo-video-services" },
    ],
  },
  { label: "Black Water Diving!", href: "/black-water-diving" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      {
        label: "Diving",
        href: "/courses#diving",
        children: [
          { label: "Scuba Diving Refresher", href: "/courses/refresher" },
          { label: "Discover Scuba Diving", href: "/courses/discover-scuba-diving" },
          { label: "Open Water", href: "/courses/open-water" },
          { label: "Advanced Open Water", href: "/courses/advanced-open-water" },
          { label: "Rescue Diver", href: "/courses/rescue-diver" },
          { label: "Dive Master Program", href: "/courses/divemaster" },
        ],
      },
      {
        label: "EFR",
        href: "/courses#efr",
        children: [
          { label: "EFR Primary & Secondary Care", href: "/courses/efr-primary-secondary-care" },
          { label: "EFR Refresher", href: "/courses/efr-refresher" },
        ],
      },
      { label: "Digital Underwater Photo", href: "/courses/digital-underwater-photo" },
    ],
  },
  { label: "Advanced Snorkelling", href: "/advanced-snorkelling" },
  { label: "Cruise Ships", href: "/cruise-ships" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export type ServiceSummary = {
  slug: string;
  title: string;
  group: string;
  activityLevel: string;
  blurb: string;
  href: string;
  image: string;
  category?: "diving" | "efr" | "photo";
};

export const divingServices: ServiceSummary[] = [
  {
    slug: "shore-diving",
    title: "Shore Diving",
    group: "min 2 / max 8",
    activityLevel: "Beginners to experienced",
    blurb:
      "Walk straight off our waterfront dock into Casuarina Point Reef and Devil's Grotto — two of Grand Cayman's most celebrated shore sites.",
    href: "/adventure-diving/shore-diving",
    image: img.adventureDiving.featured.shoreDiving,
  },
  {
    slug: "boat-diving",
    title: "Boat Diving",
    group: "min 4 / max 12",
    activityLevel: "Beginners to experienced",
    blurb:
      "Daily two-tank trips aboard Cayman Wall or Cayman Sky to Grand Cayman's finest wall and reef sites.",
    href: "/adventure-diving/boat-diving",
    image: img.adventureDiving.featured.boatDiving,
  },
  {
    slug: "black-water-diving",
    title: "Black Water Diving",
    group: "min 5 / max 12",
    activityLevel: "Night diving experience & buoyancy skills",
    blurb:
      "Drift over the open ocean depths after dark and encounter rarely-seen pelagic creatures drawn up from the deep.",
    href: "/black-water-diving",
    image: img.adventureDiving.featured.blackWaterDiving,
  },
  {
    slug: "night-diving",
    title: "Night Boat Diving",
    group: "min 5 / max 12",
    activityLevel: "All levels",
    blurb:
      "See the reef come alive after dark, when nocturnal creatures emerge and the water takes on an entirely different character.",
    href: "/adventure-diving/night-diving",
    image: img.adventureDiving.featured.nightDiving,
  },
  {
    slug: "kittiwake-wreck",
    title: "Kittiwake Wreck",
    group: "min 4 / max 12",
    activityLevel: "Beginners to expert",
    blurb:
      "Explore the USS Kittiwake, a decommissioned submarine rescue vessel resting in clear, shallow Cayman waters.",
    href: "/adventure-diving/kittiwake-wreck",
    image: img.adventureDiving.featured.kittiwakeWreck,
  },
  {
    slug: "photo-video-services",
    title: "Photo & Video Services",
    group: "Photo Buddy Guide",
    activityLevel: "Photo guiding / subject search / creative photography",
    blurb:
      "Rent underwater camera equipment or have one of our team capture your dive on photo or video to take home.",
    href: "/adventure-diving/photo-video-services",
    image: img.adventureDiving.featured.photoVideo,
  },
];

export const courses: ServiceSummary[] = [
  {
    slug: "discover-scuba-diving",
    title: "Discover Scuba Diving",
    group: "Half-day",
    activityLevel: "No experience required",
    blurb:
      "Experience the thrill of breathing underwater with our PADI Discover Scuba Diving (Resort) Course.",
    href: "/courses/discover-scuba-diving",
    image: img.courses.featured.discoverScuba,
    category: "diving",
  },
  {
    slug: "refresher",
    title: "Scuba Diving Refresher",
    group: "Half-day",
    activityLevel: "Certified divers",
    blurb:
      "Designed for certified divers who haven't been underwater for a while and want to refresh their skills.",
    href: "/courses/refresher",
    image: img.courses.featured.refresher,
    category: "diving",
  },
  {
    slug: "open-water",
    title: "Open Water",
    group: "3–4 days",
    activityLevel: "Beginners",
    blurb:
      "The PADI Open Water Course is your first step toward a lifetime of adventure and discovery beneath the surface.",
    href: "/courses/open-water",
    image: img.courses.featured.openWater,
    category: "diving",
  },
  {
    slug: "advanced-open-water",
    title: "Advanced Open Water",
    group: "2 days",
    activityLevel: "Certified divers",
    blurb:
      "The PADI Advanced Open Water Course is your next step toward expanding your underwater horizons.",
    href: "/courses/advanced-open-water",
    image: img.courses.featured.advancedOpenWater,
    category: "diving",
  },
  {
    slug: "rescue-diver",
    title: "Rescue Diver",
    group: "2–3 days",
    activityLevel: "Advanced divers",
    blurb: "The PADI Rescue Diver Course is designed to take your diving skills and confidence to the next level.",
    href: "/courses/rescue-diver",
    image: img.courses.featured.rescueDiver,
    category: "diving",
  },
  {
    slug: "divemaster",
    title: "Dive Master Program",
    group: "Multi-week",
    activityLevel: "Rescue Diver certified",
    blurb: "Step into the professional world of scuba diving with the PADI Dive Master Program.",
    href: "/courses/divemaster",
    image: img.courses.featured.divemaster,
    category: "diving",
  },
  {
    slug: "efr-primary-secondary-care",
    title: "EFR Primary & Secondary Care",
    group: "1 day",
    activityLevel: "All levels",
    blurb: "Emergency First Response primary and secondary care training for divers and non-divers alike.",
    href: "/courses/efr-primary-secondary-care",
    image: img.courses.featured.efrPrimary,
    category: "efr",
  },
  {
    slug: "efr-refresher",
    title: "EFR Refresher",
    group: "Half-day",
    activityLevel: "Previously EFR certified",
    blurb: "Keep your Emergency First Response skills current with a hands-on refresher.",
    href: "/courses/efr-refresher",
    image: img.courses.featured.efrRefresher,
    category: "efr",
  },
  {
    slug: "digital-underwater-photo",
    title: "Digital Underwater Photo",
    group: "1 day",
    activityLevel: "All levels",
    blurb: "Learn to capture the reef with a guided digital underwater photography course.",
    href: "/courses/digital-underwater-photo",
    image: img.courses.featured.digitalPhoto,
    category: "photo",
  },
];

export const faqs = [
  {
    q: "Do I need to be certified to dive with Don Foster's?",
    a: "No — our Discover Scuba Diving experience is open to complete beginners with no certification, supervised by a PADI professional. If you'd like to get certified, our Open Water course is the place to start.",
  },
  {
    q: "What's included in a boat dive?",
    a: "A two-tank trip aboard Cayman Wall or Cayman Sky, tanks and weights, an experienced guide, and access to some of Grand Cayman's best wall and reef sites.",
  },
  {
    q: "Can I dive straight from shore?",
    a: "Yes — our waterfront location gives direct access to Casuarina Point Reef and Devil's Grotto, ideal for shore diving at your own pace.",
  },
  {
    q: "Do you offer courses for complete beginners?",
    a: "Yes, from Discover Scuba Diving through to full PADI Open Water certification and beyond, for all experience levels.",
  },
  {
    q: "Do you work with cruise ship passengers?",
    a: "Yes, we regularly host cruise ship excursions — see our Cruise Ships page for details on timing and pickup.",
  },
];

// Real published rates (same operation as caymanscubadiving.com — the
// business's current site). All prices in US$, subject to change.
export type PriceRow = { label: string; price: string; note?: string };
export type PriceCategory = {
  id: string;
  title: string;
  icon: "diving" | "package" | "gear" | "cert" | "grad";
  rows: PriceRow[];
  includes?: string; // short, category-wide "what's included" note
  excludes?: string; // short, category-wide "what's not included" note
};

export const pricingNote =
  "All prices are listed in US$. Private charters (full and half days) available upon request. Prices subject to change.";

// Short, scannable chips shown as a banner above the pricing grid.
export const pricingHighlights = [
  "All prices in US$",
  "Private charters available on request",
  "Prices subject to change",
];

export const pricingCategories: PriceCategory[] = [
  {
    id: "diving",
    title: "Diving & Snorkelling",
    icon: "diving",
    rows: [
      { label: "2 Tank Dive", price: "$135" },
      { label: "1 Tank Dive", price: "$80" },
      { label: "Night Dive (Boat)", price: "$95" },
      { label: "Black Water Diving", price: "$95", note: "with Air or Nitrox" },
      { label: "Kittiwake Wreck Dive", price: "$90" },
      { label: "Kittiwake Snorkel", price: "$50" },
      { label: "Guided Night Shore Dive", price: "$80", note: "per diver, min 2 divers, incl. tanks & weights" },
    ],
  },
  {
    id: "packages",
    title: "Dive Packages",
    icon: "package",
    rows: [
      { label: "2 × Two-Tank Dives", price: "$260" },
      { label: "3 × Two-Tank Dives", price: "$360" },
      { label: "4 × Two-Tank Dives", price: "$460" },
      { label: "5 × Two-Tank Dives", price: "$550" },
      { label: "6 × Two-Tank Dives", price: "$630" },
    ],
  },
  {
    id: "rental",
    title: "Equipment Rental",
    icon: "gear",
    rows: [
      { label: "BCD & Regulator", price: "$40", note: "per day" },
      { label: "BCD", price: "$20", note: "per day" },
      { label: "Regulator", price: "$20", note: "per day" },
      { label: "Wetsuit (shortie)", price: "$15", note: "per day" },
      { label: "Mask, Snorkel & Fins", price: "$15", note: "per day" },
      { label: "Mask & Snorkel", price: "$10", note: "per day" },
      { label: "Fins", price: "$10", note: "per day" },
      { label: "Snorkel Vest", price: "$10", note: "per day" },
      { label: "Weights with Belt", price: "$10", note: "per day" },
      { label: "Dive Light", price: "$10", note: "per day" },
      { label: "Tanks", price: "$15 Air / $20 Nitrox", note: "per tank, incl. weights" },
    ],
  },
  {
    id: "instruction",
    title: "Instruction",
    icon: "cert",
    includes: "Equipment rental",
    excludes: "E-Learning portion",
    rows: [
      { label: "Discover Scuba Diving — from shore", price: "$150" },
      { label: "Discover Scuba Diving — with boat dive", price: "$225" },
      { label: "Repeat Discover Scuba — from shore", price: "$95" },
      { label: "Repeat Discover Scuba — with boat dive", price: "$120" },
      { label: "Repeat Discover Scuba — with Kittiwake", price: "$150" },
      { label: "Scuba Refresher — with shore dive", price: "$150" },
      { label: "Full Open Water Certification", price: "$650", note: "Practical portion only" },
      { label: "Open Water Referral — all 4 dives", price: "$450", note: "shore dives" },
      { label: "Open Water Referral — 1 of 4 dives", price: "$125", note: "shore dive" },
      { label: "Open Water Referral — 2 of 4 dives", price: "$250", note: "shore dives" },
    ],
  },
  {
    id: "continuing-education",
    title: "Continuing Education",
    icon: "grad",
    includes: "Dives",
    excludes: "Equipment rental & E-Learning portion",
    rows: [
      { label: "Advanced Open Water Course", price: "$400", note: "Shore dives; wreck & gear not included" },
      { label: "Emergency First Responder", price: "$120" },
      { label: "Rescue Diver", price: "$495" },
      { label: "Divemaster", price: "$1,000" },
      { label: "Nitrox", price: "$70", note: "Lecture & certification only" },
      { label: "Wreck Diver", price: "$444" },
      { label: "Specialties", price: "POA", note: "deep, night, search & recovery, and more" },
    ],
  },
];

export const bookingPolicy = {
  deposit:
    "To secure your reservation, a deposit of 20% of the total booking cost is required at time of booking. This deposit is non-refundable in the event of cancellation or no-show.",
  insurance:
    "We strongly recommend dive accident insurance as well as separate dive trip/travel insurance, available from DAN, DiveAssure and other providers. There are no refunds for lost diving days due to cancellations, trip delays, injury or equipment issues — check your individual policy for coverage.",
  packages:
    "Dive packages are non-refundable and include transfers to and from participating accommodations along the south end of Seven Mile Beach on diving days.",
};

// Options for the Contact page "Service" select field.
export const contactServiceOptions = [
  "Shore Diving",
  "Boat Diving",
  "Night Diving",
  "Black Water Diving",
  "Kittiwake Wreck",
  "Photo & Video Services",
  "Advanced Snorkelling",
  "Discover Scuba Diving",
  "Scuba Diving Refresher",
  "Open Water",
  "Advanced Open Water",
  "Rescue Diver",
  "Dive Master Program",
  "EFR Primary & Secondary Care",
  "EFR Refresher",
  "Digital Underwater Photo",
  "Cruise Ship Excursion",
  "Other / Not Sure",
];
