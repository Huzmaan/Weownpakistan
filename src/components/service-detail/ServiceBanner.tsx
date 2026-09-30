import { Link } from "@tanstack/react-router";

type Props = { eyebrow: string; title: string; subtitle: string; image: string; imageAlt: string };

export function ServiceBanner({ eyebrow, title, subtitle, image, imageAlt }: Props) {
  return (
    <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden md:min-h-[70vh]">
      <img src={image} alt={imageAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/70 to-primary/10" />
      <div className="container mx-auto px-4 pb-14 pt-32 text-primary-foreground md:pb-20">
        <nav className="mb-4 flex flex-wrap gap-2 text-sm opacity-80">
          <Link to="/">Home</Link><span>/</span>
          <Link to="/services">Services</Link><span>/</span>
          <span>{eyebrow}</span><span>/</span>
          <span className="font-semibold">Medical Support</span>
        </nav>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base opacity-90 sm:text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground">Donate Now</Link>
          <a href="#how-it-works" className="rounded-full border border-current px-7 py-3 font-semibold">How it works</a>
        </div>
      </div>
    </section>
  );
}