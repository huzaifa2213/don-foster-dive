"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export default function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border-2 transition-colors duration-300 ${
              isOpen ? "border-brand-500 bg-brand-50/40" : "border-mist bg-white"
            }`}
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-bold text-ink">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-brand-500 text-white" : "bg-brand-50 text-brand-500"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden px-6 text-ink/70 text-sm leading-relaxed">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
