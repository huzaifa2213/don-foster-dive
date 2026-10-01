import { business } from "@/lib/site";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={business.facebook}
        aria-label="Facebook"
        className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-white/25 hover:border-accent-500 hover:bg-accent-500 transition-all text-xs font-bold"
      >
        FB
      </a>
      <a
        href={business.twitter}
        aria-label="Twitter / X"
        className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-white/25 hover:border-accent-500 hover:bg-accent-500 transition-all text-xs font-bold"
      >
        X
      </a>
    </div>
  );
}
