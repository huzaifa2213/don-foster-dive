type Props = { icon: "diving" | "package" | "gear" | "cert" | "grad"; className?: string };

// Simple line icons, no external icon library needed.
export default function PricingIcon({ icon, className = "h-6 w-6" }: Props) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (icon) {
    case "diving":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <circle cx="12" cy="6" r="2.5" />
          <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
          <path d="M3 13c2-1 4-1 6 0M15 13c2-1 4-1 6 0" />
        </svg>
      );
    case "package":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M3 8l9-5 9 5-9 5-9-5z" />
          <path d="M3 8v8l9 5 9-5V8" />
          <path d="M12 13v8" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2M12 19v2M5 5l1.5 1.5M17.5 17.5L19 19M3 12h2M19 12h2M5 19l1.5-1.5M17.5 6.5L19 5" />
        </svg>
      );
    case "cert":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M4 4h16v13H8l-4 4V4z" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      );
    case "grad":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M2 9l10-5 10 5-10 5-10-5z" />
          <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
        </svg>
      );
  }
}
