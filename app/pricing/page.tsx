import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingTable from "@/components/PricingTable";
import BookingPolicy from "@/components/BookingPolicy";
import CTASection from "@/components/CTASection";
import PricingIcon from "@/components/PricingIcon";
import { pricingCategories, pricingHighlights } from "@/lib/site";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Rates for diving, snorkelling and PADI courses with Don Foster's Dive Cayman.",
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing"
        crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        image={img.pricing.breadcrumb}
      />

      {/* highlight banner */}
      <div className="border-b-2 border-mist bg-white">
        <div className="container flex flex-wrap items-center justify-center gap-3 py-5">
          {pricingHighlights.map((h) => (
            <span
              key={h}
              className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-600"
            >
              <CheckIcon />
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* jump nav */}
      <div className="sticky top-[84px] z-30 border-b-2 border-mist bg-white/95 backdrop-blur">
        <div className="container flex gap-2 overflow-x-auto py-4 scrollbar-none">
          {pricingCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="flex shrink-0 items-center gap-2 rounded-full border-2 border-mist px-4 py-2 text-sm font-bold text-ink/80 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-600 transition-colors whitespace-nowrap"
            >
              <PricingIcon icon={c.icon} className="h-4 w-4" />
              {c.title}
            </a>
          ))}
        </div>
      </div>

      <section className="pt-10 pb-16 md:pb-28">
        <div className="container flex flex-col gap-8">
          {pricingCategories.map((category) => (
            <PricingTable key={category.id} category={category} />
          ))}

          <BookingPolicy />
        </div>
      </section>

      <CTASection
        title="Ready to Book Your Dive?"
        description="Reserve online or get in touch and our team will help you plan the perfect trip."
        cta={{ label: "Reserve Online", href: "/contact" }}
        image={img.pricing.breadcrumb}
      />
    </>
  );
}
