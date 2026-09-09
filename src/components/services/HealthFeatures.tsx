import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/site/SiteLayout";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  features: Feature[];
};

export function HealthFeatures({
  eyebrow,
  title,
  intro,
  features,
}: Props) {
  return (
    <section className="bg-secondary/60 py-24">
      <div className="container-wopf">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="reveal rounded-3xl bg-card p-8 shadow-soft"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep">
                <feature.icon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </span>

              <h3 className="mt-5 font-display text-lg font-bold">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}