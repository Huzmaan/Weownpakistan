import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useSiteInteractions } from "@/hooks/use-site-interactions";

/** Shared page chrome for every route. */
export function SiteLayout({ children }: { children: ReactNode }) {
  useSiteInteractions();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

/** Section eyebrow + heading + optional intro, used across all pages. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string | undefined;
  title: ReactNode;
  intro?: string | undefined;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] ${
            tone === "dark" ? "bg-ink-foreground/10 text-gold" : "bg-primary-soft text-primary-deep"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-5 text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          tone === "dark" ? "text-ink-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            tone === "dark" ? "text-ink-foreground/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/** Inner-page hero banner used on every page except home. */
export function PageBanner({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img src={image} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-45" />
      <div className="veil absolute inset-0" />
      <div className="container-wopf relative py-16 sm:py-24 lg:py-32">
        <span className="inline-flex rounded-full bg-ink-foreground/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.1] text-ink-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:mt-6 sm:text-lg">{intro}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
