import Image from "next/image";
import Link from "next/link";
import { img as imageMap } from "@/lib/images";

type Props = {
  title: string;
  description?: string;
  cta: { label: string; href: string };
  image?: string;
};

export default function CTASection({ title, description, cta, image }: Props) {
  // Falls back to a proper square, high-resolution photo (never one of the
  // 1600x600 wide banner/slider images) — those are too short vertically to
  // stay sharp once cropped into this circle, especially on retina screens.
  const photo = image ?? imageMap.home.adventureDiving.boatDiving;

  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl3 bg-brand-500 px-8 py-12 md:px-14 md:py-16 reveal">
          {/* decorative dotted rings */}
          <div
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full border-2 border-dashed border-white/15"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-[18%] bottom-0 h-3 w-3 rounded-full bg-white/40 hidden md:block"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_260px] md:gap-14">
            <div>
              <h2 className="text-2xl md:text-4xl text-white font-bold leading-tight">{title}</h2>
              {description && <p className="mt-4 text-white/85 max-w-md">{description}</p>}
              <Link
                href={cta.href}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-600 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                {cta.label}
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white text-xs">
                  →
                </span>
              </Link>
            </div>

            <div className="relative mx-auto hidden aspect-square w-full max-w-[260px] md:block">
              <div
                className="absolute -inset-3 rounded-full border-2 border-dotted border-white/30"
                aria-hidden="true"
              />
              <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-white/20">
                <Image src={photo} alt="" fill sizes="260px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
