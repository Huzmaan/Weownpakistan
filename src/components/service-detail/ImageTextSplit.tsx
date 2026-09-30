import { CheckCircle2 } from "lucide-react";

type Props = { eyebrow: string; title: string; paragraphs: string[]; bullets: string[]; image: string; imageAlt: string };

export function ImageTextSplit({ eyebrow, title, paragraphs, bullets, image, imageAlt }: Props) {
  return (
    <section className="container mx-auto grid items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:gap-16">
      <div className="relative">
        <img src={image} alt={imageAlt} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-accent px-6 py-4 font-bold text-accent-foreground shadow-lg sm:block">Since 2015</div>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
        {paragraphs.map((p) => <p key={p} className="mt-4 text-muted-foreground">{p}</p>)}
        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}