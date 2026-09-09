import { SectionHeading } from "@/components/site/SiteLayout";

type Stat = {
  value: string;
  label: string;
};

type Props = {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
  stats: Stat[];
};

export function HealthOverview({
  image,
  eyebrow,
  title,
  text,
  stats,
}: Props) {
  return (
    <section className="container-wopf py-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <figure className="reveal relative">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={1200}
            height={900}
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-lift"
          />

          <figcaption className="absolute left-6 top-6 rounded-full bg-card/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-deep backdrop-blur">
            Since day one
          </figcaption>
        </figure>

        <div className="reveal">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
          />

          <p className="mt-5 leading-relaxed text-muted-foreground">
            {text}
          </p>

          <ul className="mt-8 grid grid-cols-3 gap-4 text-center">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl bg-secondary/70 px-3 py-5"
              >
                <span className="block font-display text-2xl font-bold text-primary-deep">
                  {stat.value}
                </span>

                <span className="mt-1 block text-xs font-semibold text-muted-foreground">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}