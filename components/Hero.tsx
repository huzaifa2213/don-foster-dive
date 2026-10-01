import HeroSlider from "./HeroSlider";
import { CTAButton, SecondaryButton } from "./Button";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  images: string[];
};

export default function Hero({ eyebrow, title, description, primaryCta, secondaryCta, images }: Props) {
  return (
    <section className="relative">
      <HeroSlider images={images} />
      <div className="bg-ink/50 py-28 md:py-44">
        <div className="container">
          <div className="max-w-2xl text-white animate-fadeUp">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 text-4xl md:text-6xl leading-[1.05] text-white font-bold">{title}</h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">{description}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
              {secondaryCta && (
                <SecondaryButton href={secondaryCta.href} variant="ghostLight">
                  {secondaryCta.label}
                </SecondaryButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
