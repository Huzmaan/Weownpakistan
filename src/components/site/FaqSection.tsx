import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "./SiteLayout";

/** Accordion FAQ block, reused on home and about. */
export function FaqSection({
  items,
  eyebrow = "Questions",
  title = "Answers before you give",
  intro,
}: {
  items: { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container-wopf py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />

        <div className="reveal divide-y divide-border rounded-3xl border border-border bg-card shadow-soft">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left font-display text-base font-semibold text-foreground transition-colors hover:text-primary-deep sm:px-8"
                  >
                    {item.q}
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        open ? "surface-brand" : "bg-primary-soft text-primary-deep"
                      }`}
                    >
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                {open && (
                  <p className="px-6 pb-7 text-sm leading-relaxed text-muted-foreground sm:px-8 sm:pr-16">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
