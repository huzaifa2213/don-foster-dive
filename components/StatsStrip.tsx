type Stat = { value: string; label: string };

export default function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-ink text-white py-4">
      <div className="container grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
        {stats.map((s) => (
          <div key={s.label} className="py-12 text-center reveal">
            <div className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-300">
              {s.value}
            </div>
            <div className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
