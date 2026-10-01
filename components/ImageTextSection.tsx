import { ReactNode } from "react";
import Image from "next/image";
import { CTAButton } from "./Button";

type Props = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  cta?: { label: string; href: string };
  reverse?: boolean;
  image: string;
  imageAlt?: string;
};

export default function ImageTextSection({ eyebrow, title, children, cta, reverse = false, image, imageAlt }: Props) {
  return (
    <section className="section">
      <div className={`container grid gap-10 md:gap-16 items-center md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative reveal group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl3 shadow-card">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <span className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-accent-500 hidden md:block" aria-hidden="true" />
        </div>
        <div className="reveal">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink">{title}</h2>
          <div className="mt-4 text-ink/70 leading-relaxed space-y-4">{children}</div>
          {cta && (
            <CTAButton href={cta.href} className="mt-6">
              {cta.label}
            </CTAButton>
          )}
        </div>
      </div>
    </section>
  );
}

export function TextImageSection(props: Omit<Props, "reverse">) {
  return <ImageTextSection {...props} reverse />;
}
