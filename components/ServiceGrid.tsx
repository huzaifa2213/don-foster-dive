import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";
import type { ServiceSummary } from "@/lib/site";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  services: ServiceSummary[];
  id?: string;
  className?: string;
};

export default function ServiceGrid({ eyebrow, title, description, services, id, className = "" }: Props) {
  return (
    <section id={id} className={`section scroll-mt-24 ${className}`}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
