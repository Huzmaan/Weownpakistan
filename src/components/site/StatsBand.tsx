import { STATS } from "@/lib/site";

/** Bonus section: impact statistics band. */
export function StatsBand() {
  return (
    <section className="container-wopf -mt-14 relative z-10">
      <div className="reveal grid gap-px overflow-hidden rounded-3xl bg-border shadow-lift sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-card px-8 py-9 text-center">
            <p className="font-display text-3xl font-bold text-primary-deep lg:text-4xl">{stat.value}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
