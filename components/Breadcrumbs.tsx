import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-bold uppercase tracking-wide">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="text-white/80 hover:text-brand-300 transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-brand-300">{c.label}</span>
            )}
            {i < crumbs.length - 1 && <span aria-hidden="true" className="text-white/50">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
