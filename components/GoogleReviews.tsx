import SectionHeading from "./SectionHeading";
import GoogleLogo from "./GoogleLogo";
import TrustindexWidget from "./TrustindexWidget";
import { business } from "@/lib/site";

// Live Google Reviews, powered by Trustindex — pulls real, current reviews
// directly from the business's Google Business Profile. No fabricated
// content: what renders here is exactly what's live on Google.
export default function GoogleReviews() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading eyebrow="Guest Reviews" title="What Divers Say on Google" />

        <div className="mt-12 reveal">
          <TrustindexWidget />
        </div>

        <div className="mt-10 flex justify-center reveal">
          <a
            href={business.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-card"
          >
            <GoogleLogo className="h-5 w-5" />
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
