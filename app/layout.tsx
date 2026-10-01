import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.donfosters.com"),
  title: {
    default: `${business.name} | Boat & Shore Diving, Grand Cayman`,
    template: `%s | ${business.name}`,
  },
  description:
    "Don Foster's Dive Cayman has offered boat diving, shore diving, night diving and PADI courses in Grand Cayman since 1982.",
  openGraph: {
    type: "website",
    siteName: business.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: business.name,
              telephone: business.phone,
              email: business.email,
              address: business.address,
              foundingDate: String(business.founded),
              sameAs: [business.facebook, business.twitter],
            }),
          }}
        />
      </body>
    </html>
  );
}
