import Image from "next/image";
import Breadcrumbs, { Crumb } from "./Breadcrumbs";

type Props = {
  title: string;
  description?: string;
  crumbs: Crumb[];
  image?: string;
};

export default function PageHero({ title, description, crumbs, image }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ink">
        {image && (
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover animate-kenburns"
          />
        )}
      </div>
      <div className="bg-ink/50 py-20 md:py-32">
        <div className="container text-white animate-fadeUp">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-4 text-3xl md:text-5xl text-white font-bold">{title}</h1>
          {description && <p className="mt-4 max-w-xl text-white/90">{description}</p>}
        </div>
      </div>
    </section>
  );
}
