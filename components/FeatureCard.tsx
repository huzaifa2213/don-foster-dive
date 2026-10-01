import Image from "next/image";
import { CTAButton } from "./Button";

type Props = {
  title: string;
  description: string;
  image: string;
  cta?: { label: string; href: string };
};

export default function FeatureCard({ title, description, image, cta }: Props) {
  return (
    <div className="group flex flex-col items-start gap-4 rounded-xl3 border-2 border-mist bg-white p-7 shadow-soft hover:shadow-card hover:border-brand-500 hover:-translate-y-1.5 transition-all duration-300 reveal">
      <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-brand-50 p-2">
        <Image src={image} alt="" fill sizes="64px" className="object-contain p-2" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-ink/70 text-sm">{description}</p>
      {cta && (
        <CTAButton href={cta.href} variant="ghost" className="mt-2">
          {cta.label}
        </CTAButton>
      )}
    </div>
  );
}
