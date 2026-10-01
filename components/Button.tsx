import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "ghostLight";
  className?: string;
};

export function CTAButton({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 active:scale-95";
  const styles = {
    primary: "bg-brand-500 text-white hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-card shadow-soft",
    secondary: "bg-accent-500 text-white hover:bg-accent-600 hover:-translate-y-0.5 hover:shadow-card shadow-soft",
    ghost: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
    ghostLight: "border-2 border-white text-white hover:bg-white hover:text-ink",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children, className = "", variant = "ghost" }: Props) {
  return (
    <CTAButton href={href} variant={variant} className={className}>
      {children}
    </CTAButton>
  );
}
