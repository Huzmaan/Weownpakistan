import { STATS } from "@/lib/site";

/** Bonus section: impact statistics band. */
export function StatsBand() {
  return (
    <section className="container-wopf -mt-14 relative z-10">
      <div className="reveal grid gap-px overflow-hidden rounded-3xl bg-border shadow-lift sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-card px-8 py-9 text-center">
  <h3 className="mt-2 text-sm font-extrabold uppercase tracking-[0.16em] text-primary-deep">
    {stat.label}
  </h3>

  <p className="mt-1 font-display text-2xl font-bold text-primary-deep lg:text-3xl">
    {stat.value}
  </p>
</div>
        ))}
      </div>
    </section>
  );
}
