import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/site/SiteLayout";

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  steps: ProcessStep[];
};

export function HealthProcess({
  eyebrow,
  title,
  intro,
  steps,
}: Props) {
  return (
    <section className="overflow-hidden bg-ink py-24 text-ink-foreground">
      <div className="container-wopf">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          tone="dark"
        />

        <ol className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-ink-foreground/20 lg:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <li
              key={step.title}
              className="reveal relative"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-ink text-gold shadow-soft">
                <step.icon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                Step 0{index + 1}
              </p>

              <h3 className="mt-2 text-lg font-bold text-ink-foreground">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}