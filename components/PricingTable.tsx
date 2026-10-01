import PricingIcon from "./PricingIcon";
import type { PriceCategory } from "@/lib/site";

function isExclusionNote(note: string) {
  return /not incl|non-refundable|not inlcuded/i.test(note);
}

function InfoIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  );
}

function CheckIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function CrossIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function PricingTable({ category }: { category: PriceCategory }) {
  return (
    <div id={category.id} className="scroll-mt-28 flex flex-col overflow-hidden rounded-xl3 bg-white border-2 border-mist shadow-soft reveal">
      <div className="flex items-center gap-4 bg-brand-50/60 border-b-2 border-mist px-6 py-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-soft">
          <PricingIcon icon={category.icon} className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-ink">{category.title}</h3>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">
            {category.rows.length} {category.rows.length === 1 ? "option" : "options"}
          </p>
        </div>
      </div>

      {(category.includes || category.excludes) && (
        <div className="flex flex-wrap gap-2 border-b-2 border-mist bg-white px-6 py-4">
          {category.includes && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-600 border border-brand-100">
              <CheckIcon />
              Includes {category.includes}
            </span>
          )}
          {category.excludes && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1.5 text-xs font-bold text-accent-600 border border-accent-200">
              <CrossIcon />
              Not Included: {category.excludes}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col divide-y divide-mist">
        {category.rows.map((row) => {
          const exclusion = row.note ? isExclusionNote(row.note) : false;
          return (
            <div key={row.label} className="flex flex-col gap-2 px-6 py-4 hover:bg-mist/50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <p className="font-bold text-ink">{row.label}</p>
                <span className="shrink-0 rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-bold text-brand-600 whitespace-nowrap">
                  {row.price}
                </span>
              </div>
              {row.note && (
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    exclusion
                      ? "bg-accent-50 text-accent-600 border border-accent-200"
                      : "bg-brand-50 text-brand-600 border border-brand-100"
                  }`}
                >
                  <InfoIcon />
                  {row.note}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
