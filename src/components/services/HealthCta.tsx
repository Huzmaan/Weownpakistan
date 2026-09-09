import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  primaryText: string;
  primaryLink: string;
  // secondaryText: string;
  // secondaryLink: string;
};

export function HealthCta({
  eyebrow,
  title,
  description,
  primaryText,
  primaryLink,
  // secondaryText,
  // secondaryLink,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24">
      <div className="veil absolute inset-0" />

      <div className="container-wopf relative text-center">
        <span className="inline-flex rounded-full bg-ink-foreground/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-[1.12] text-ink-foreground sm:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/70">
          {description}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to={primaryLink}
            className="surface-brand inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
          >
            {primaryText}

            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>

          {/* <Link
            to={secondaryLink}
            className="inline-flex items-center rounded-full border border-ink-foreground/25 px-6 py-3.5 text-sm font-bold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
          >
            {secondaryText}
          </Link> */}
        </div>
      </div>
    </section>
  );
}