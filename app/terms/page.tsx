import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <section className="section">
        <div className="container max-w-3xl prose">
          <p className="text-brand-600">Add your terms & conditions content here.</p>
        </div>
      </section>
    </>
  );
}
