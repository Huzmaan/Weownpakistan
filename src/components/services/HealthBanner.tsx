type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
};

export function HealthBanner({
  eyebrow,
  title,
  intro,
  image,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={image}
        alt={title}
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />

      <div className="veil absolute inset-0" />

      <div className="container-wopf relative py-16 sm:py-24 lg:py-32">
        <span className="inline-flex rounded-full bg-ink-foreground/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>

        <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.1] text-ink-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:mt-6 sm:text-lg">
          {intro}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}