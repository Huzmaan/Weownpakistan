import { Quote } from "lucide-react";

type Props = {
  image: string;
  imageAlt: string;
  caption: string;
  quote: string;
  author: string;
  role: string;
  text: string;
};

export function HealthFieldStory({
  image,
  imageAlt,
  caption,
  quote,
  author,
  role,
  text,
}: Props) {
  return (
    <section className="container-wopf py-24 lg:py-32">
      <div className="grid overflow-hidden rounded-3xl bg-primary-soft lg:grid-cols-[1.08fr_0.92fr]">
        {/* <figure className="relative min-h-[360px] lg:min-h-[560px]">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            width={1600}
            height={1067}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <figcaption className="absolute bottom-5 left-5 rounded-full bg-card/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-deep shadow-soft">
            {caption}
          </figcaption>
        </figure> */}

        <div className="reveal flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <Quote
            className="h-9 w-9 text-primary"
            aria-hidden="true"
          />

          <blockquote className="mt-6 text-2xl font-bold leading-snug text-foreground sm:text-3xl">
            “{quote}”
          </blockquote>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-primary-deep">
            {author}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {role}
          </p>

          <p className="mt-7 leading-relaxed text-muted-foreground">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}