import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/site";
import { img } from "@/lib/images";
import SocialLinks from "./SocialLinks";
import { CTAButton } from "./Button";

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Adventure Diving", href: "/adventure-diving" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
];

const moreLinks = [
  { label: "Advanced Snorkelling", href: "/advanced-snorkelling" },
  { label: "Cruise Ships", href: "/cruise-ships" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center">
            <Image src={img.logo} alt={business.name} width={72} height={72} className="h-16 w-16 object-contain" />
          </Link>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Diving Grand Cayman since {business.founded}. Waterfront boat and shore diving, snorkelling
            and PADI courses from {business.address}.
          </p>
          <CTAButton href="/contact" variant="primary" className="mt-6">
            Book Now
          </CTAButton>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-accent-400 border-b-2 border-accent-500 pb-2 inline-block">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {aboutLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-accent-400 border-b-2 border-accent-500 pb-2 inline-block">More</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {moreLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-accent-400 border-b-2 border-accent-500 pb-2 inline-block">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{business.address}</li>
            <li>
              <a href={business.phoneHref} className="hover:text-brand-300 transition-colors">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-brand-300 transition-colors">
                {business.email}
              </a>
            </li>
          </ul>
          <SocialLinks className="mt-5" />
        </div>
      </div>

      <div className="border-t-2 border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
