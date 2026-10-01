import { ReactNode } from "react";

export default function ContactInfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-xl3 bg-white border-2 border-mist shadow-soft hover:border-brand-500 hover:shadow-card transition-all duration-300 p-6 reveal">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
        {icon}
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-ink/50">{label}</p>
        <p className="mt-1 font-bold text-ink break-words">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
