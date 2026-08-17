import { ShieldCheck, ReceiptText, Landmark } from "lucide-react";
import { DONATION_TIERS, SITE } from "@/lib/site";

/**
 * Donation section. Payment processing is intentionally NOT wired up the client will integrate a gateway later. The form posts nowhere.
 */
export function DonateSection() {
  return (
    <section id="donate" className="relative isolate overflow-hidden bg-ink py-24 lg:py-32">
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />

      <div className="container-wopf relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="reveal">
          <span className="inline-flex rounded-full bg-ink-foreground/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            Donate
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-[1.12] text-ink-foreground sm:text-4xl lg:text-5xl">
            Your contribution becomes a meal, a pump, a prescription.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70">
            Every rupee is assigned to a live field project before it is spent, and every distribution is photographed
            and logged against a beneficiary register. Choose an amount that matches the impact you want to create.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {DONATION_TIERS.map((tier) => (
              <li
                key={tier.amount}
                className="rounded-2xl border border-ink-foreground/12 bg-ink-foreground/5 p-5 transition-colors hover:border-gold/50"
              >
                <p className="font-display text-xl font-bold text-gold">{tier.amount}</p>
                <p className="mt-1 text-sm font-semibold text-ink-foreground">{tier.label}</p>
                <p className="mt-1 text-xs text-ink-foreground/60">{tier.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-6 text-xs text-ink-foreground/60">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" /> Zakat-eligible pool kept separate
            </span>
            <span className="inline-flex items-center gap-2">
              <ReceiptText className="h-4 w-4 text-gold" aria-hidden="true" /> Receipt & proof on request
            </span>
            <span className="inline-flex items-center gap-2">
              <Landmark className="h-4 w-4 text-gold" aria-hidden="true" /> Bank transfer supported
            </span>
          </div>
        </div>

        {/* Donation form shell gateway integration to be added by the client. */}
        <form
          className="reveal rounded-3xl bg-card p-7 shadow-lift sm:p-9"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Donation form"
        >
          <h3 className="font-display text-xl font-bold text-foreground">Make a donation</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Payment processing is being set up. Submit your details and our team will confirm the transfer options with
            you directly.
          </p>

          <fieldset className="mt-7">
            <legend className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Select amount (PKR)
            </legend>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["3,500", "7,000", "25,000"].map((amt, i) => (
                <label key={amt} className="cursor-pointer">
                  <input type="radio" name="amount" defaultChecked={i === 0} className="peer sr-only" />
                  <span className="block rounded-xl border border-border px-3 py-3 text-center text-sm font-semibold text-foreground transition-colors peer-checked:border-primary peer-checked:bg-primary-soft peer-checked:text-primary-deep">
                    {amt}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-5 grid gap-4">
            <Field label="Other amount" id="custom-amount" type="number" placeholder="e.g. 15000" />
            <Field label="Full name" id="donor-name" placeholder="Your name" required />
            <Field label="Email" id="donor-email" type="email" placeholder="you@example.com" required />
            <div>
              <label htmlFor="donation-type" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Donation type
              </label>
              <select
                id="donation-type"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/25"
              >
                <option>General donation</option>
                <option>Zakat</option>
                <option>Sadaqah</option>
                <option>Ramadan / Iftar drive</option>
                <option>Water project</option>
                <option>Medical camp</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="surface-brand mt-7 w-full rounded-full px-6 py-4 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Pledge my donation
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Prefer a bank transfer? Email{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-primary-deep underline-offset-2 hover:underline">
              {SITE.email}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/25"
      />
    </div>
  );
}
