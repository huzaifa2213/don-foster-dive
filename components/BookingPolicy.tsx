import { bookingPolicy } from "@/lib/site";

function DepositIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M3 10h18M8 4v4M16 4v4" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  );
}
function PackageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8l9-5 9 5-9 5-9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 7.8-8 9-4.5-1.2-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const policies = [
  { icon: <DepositIcon />, title: "Deposit", text: bookingPolicy.deposit },
  { icon: <PackageIcon />, title: "Dive Packages", text: bookingPolicy.packages },
  { icon: <ShieldIcon />, title: "Trip Insurance", text: bookingPolicy.insurance },
];

export default function BookingPolicy() {
  return (
    <div className="rounded-xl3 bg-brand-500 p-8 md:p-12 reveal">
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-600 shadow-soft">
        Before You Book
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Booking Policy</h2>

      <div className="mt-8 flex flex-col gap-4">
        {policies.map((p) => (
          <div
            key={p.title}
            className="flex items-start gap-5 rounded-xl3 bg-white/10 border-2 border-white/15 p-6 transition-colors duration-300 hover:bg-white/15"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-600">
              {p.icon}
            </span>
            <div>
              <h4 className="font-bold text-white">{p.title}</h4>
              <p className="mt-1.5 text-sm text-white leading-relaxed">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
