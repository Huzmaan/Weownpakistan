import * as Icons from "lucide-react";

type Item = { icon: string; title: string; text: string };

export function FeatureGrid({ items }: { items: Item[] }) {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">What we provide</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, idx) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[f.icon] ?? Icons.HeartPulse;
            return (
              <div key={f.title} className="group relative rounded-2xl bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="absolute right-6 top-5 text-4xl font-bold text-muted/60">0{idx + 1}</span>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}