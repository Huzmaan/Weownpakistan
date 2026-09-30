import { Quote } from "lucide-react";

type Props = { image: string; imageAlt: string; quote: string; name: string; role: string };

export function StoryQuote({ image, imageAlt, quote, name, role }: Props) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="grid lg:grid-cols-2">
        <img src={image} alt={imageAlt} loading="lazy" className="h-72 w-full object-cover sm:h-96 lg:h-full" />
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <Quote className="h-10 w-10 text-accent" />
          <blockquote className="mt-6 text-xl font-medium leading-relaxed md:text-2xl">"{quote}"</blockquote>
          <p className="mt-6 font-semibold">{name}</p>
          <p className="text-sm opacity-75">{role}</p>
        </div>
      </div>
    </section>
  );
}