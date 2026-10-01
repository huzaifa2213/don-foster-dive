"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, type NavItem } from "@/lib/site";
import { CTAButton } from "./Button";

function MobileNavItem({ item, depth, onNavigate }: { item: NavItem; depth: number; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={depth === 0 ? "border-b-2 border-mist" : ""}>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onNavigate}
          className={
            depth === 0
              ? "py-3 text-base font-bold text-ink"
              : depth === 1
              ? "py-2 text-sm font-bold uppercase tracking-wide text-brand-500"
              : "py-1.5 text-sm font-semibold text-ink/70 hover:text-brand-500 transition-colors"
          }
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            aria-label={`Toggle ${item.label} submenu`}
            onClick={() => setExpanded((v) => !v)}
            className={
              depth === 0
                ? "flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white text-lg font-bold"
                : "flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-500 text-base font-bold"
            }
          >
            {expanded ? "−" : "+"}
          </button>
        )}
      </div>
      {item.children && expanded && (
        <div className={`pb-2 flex flex-col gap-1 ${depth === 0 ? "pl-4" : "pl-3"}`}>
          {item.children.map((child) => (
            <MobileNavItem key={child.href} item={child} depth={depth + 1} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col gap-1.5 p-2"
      >
        <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {open && (
        <div className="fixed inset-0 top-[84px] z-40 bg-white overflow-y-auto reveal">
          <nav className="container flex flex-col py-6">
            {navigation.map((item) => (
              <MobileNavItem key={item.href} item={item} depth={0} onNavigate={() => setOpen(false)} />
            ))}
            <div className="pt-6">
              <CTAButton href="/contact" className="w-full">
                Book Now
              </CTAButton>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
