import Link from "next/link";
import Image from "next/image";
import type { ServiceSummary } from "@/lib/site";

export default function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <Link
      href={service.href}
      className="group block overflow-hidden rounded-xl3 bg-white border-2 border-transparent shadow-soft hover:shadow-card hover:border-brand-500 hover:-translate-y-1.5 transition-all duration-300 reveal"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-soft">
          {service.group}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="mt-2 text-sm text-ink/70">
          <span className="font-bold text-ink">Activity level: </span>
          {service.activityLevel}
        </p>
        <p className="mt-3 text-sm text-ink/70 line-clamp-2">{service.blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-500 group-hover:text-brand-500 transition-colors">
          Read more <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
