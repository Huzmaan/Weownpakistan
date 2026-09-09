import {
  ReceiptText,
  ShieldCheck,
} from "lucide-react";

type BudgetItem = {
  label: string;
  share: string;
  width: string;
};

type Props = {
  title: string;
  description: string;
  sponsorship: string;
  patientsText: string;
  note: string;
  budget: BudgetItem[];
};

export function HealthTransparency({
  title,
  description,
  sponsorship,
  patientsText,
  note,
  budget,
}: Props) {
  return (
    <section className="bg-sand py-24">
      <div className="container-wopf grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div className="reveal">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-card text-primary-deep shadow-soft">
            <ReceiptText
              className="h-6 w-6"
              aria-hidden="true"
            />
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="mt-7 flex items-start gap-3 text-sm font-semibold text-primary-deep">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0"
              aria-hidden="true"
            />

            {note}
          </div>
        </div>

        <div className="reveal rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="flex items-end justify-between border-b border-border pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Example sponsorship
              </p>

              <p className="mt-2 font-display text-3xl font-bold text-primary-deep">
                {sponsorship}
              </p>
            </div>

            <p className="text-right text-sm font-semibold text-muted-foreground">
              {patientsText}
            </p>
          </div>

          <div className="mt-7 space-y-6">
            {budget.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex justify-between gap-4 text-sm font-semibold">
                  <span>{item.label}</span>

                  <span className="text-primary-deep">
                    {item.share}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`h-full rounded-full bg-primary ${item.width}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}