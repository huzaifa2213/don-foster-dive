import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="section">
        <div className="container max-w-3xl prose">
          <p className="text-brand-600">Add your privacy policy content here.</p>
        </div>
      </section>
    </>
  );
}
