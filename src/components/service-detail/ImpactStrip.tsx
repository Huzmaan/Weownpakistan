export function ImpactStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <section className="container relative z-10 mx-auto -mt-10 px-4">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-xl lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="bg-card p-6 text-center md:p-8">
            <div className="text-2xl font-bold text-primary md:text-4xl">{i.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}