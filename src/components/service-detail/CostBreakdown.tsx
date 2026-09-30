type Props = { total: string; caption: string; items: { label: string; amount: string; pct: number }[] };

export function CostBreakdown({ total, caption, items }: Props) {
  return (
    <section className="container mx-auto grid gap-10 px-4 py-20 lg:grid-cols-2">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Transparency</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Where your money goes</h2>
        <p className="mt-6 text-5xl font-bold text-primary">{total}</p>
        <p className="mt-2 text-muted-foreground">{caption}</p>
      </div>
      <div className="space-y-6 rounded-3xl border bg-card p-6 sm:p-8">
        {items.map((i) => (
          <div key={i.label}>
            <div className="flex justify-between text-sm font-medium"><span>{i.label}</span><span>{i.amount}</span></div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-primary" style={{ width: `${i.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}