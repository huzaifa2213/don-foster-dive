"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navigation, business, type NavItem } from "@/lib/site";
import { img } from "@/lib/images";
import { CTAButton } from "./Button";
import MobileNav from "./MobileNav";

function DesktopSubItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="block whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold text-ink hover:bg-brand-50 hover:text-brand-500 transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={item.href}
        className="flex items-center justify-between gap-6 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold text-ink hover:bg-brand-50 hover:text-brand-500 transition-colors"
      >
        {item.label}
        <span aria-hidden="true">›</span>
      </Link>
      {open && (
        <div className="absolute left-full top-0 min-w-[220px] rounded-2xl bg-white shadow-card border-2 border-mist p-2 reveal z-50">
          {item.children.map((sub) => (
            <DesktopSubItem key={sub.href} item={sub} />
          ))}
        </div>
      )}
    </div>
  );
}

function DesktopNavLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={item.href}
        className="relative flex items-center gap-1 px-3 py-2 text-sm font-bold text-ink hover:text-brand-500 transition-colors whitespace-nowrap after:absolute after:left-3 after:right-3 after:bottom-0 after:h-0.5 after:bg-brand-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
      >
        {item.label}
        {item.children && (
          <svg
            viewBox="0 0 12 8"
            className={`h-2.5 w-2.5 fill-current transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </Link>

      {item.children && open && (
        <div className="absolute left-0 top-full min-w-[240px] rounded-2xl bg-white shadow-card border-2 border-mist p-2 reveal z-50">
          {item.children.map((child) => (
            <DesktopSubItem key={child.href} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-brand-100">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-5 lg:px-10 py-4">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={img.logo}
            alt={business.name}
            width={64}
            height={64}
            className="h-14 w-14 md:h-16 md:w-16 object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navigation.map((item) => (
            <DesktopNavLink key={item.href} item={item} />
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <CTAButton href="/contact">Book Now</CTAButton>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
