import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function ServiceFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Questions</h2>
        <div className="mt-10 space-y-3">
          {items.map((f, i) => (
            <div key={f.q} className="rounded-xl bg-card">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
                className="flex w-full items-center justify-between p-5 text-left font-semibold">
                {f.q}<ChevronDown className={`h-5 w-5 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}