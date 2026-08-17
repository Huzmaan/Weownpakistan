import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import { SiteLayout, SectionHeading, PageBanner } from "@/components/site/SiteLayout";
import { DonateSection } from "@/components/site/DonateSection";
import { POSTS } from "@/lib/site";
import workYouth from "@/assets/work-youth.jpg";
import heroIftar from "@/assets/our-works/ramdan-drive/006.jpeg";
import heroWater from "@/assets/hero-water.jpg";
import heroFood from "@/assets/our-works/orphange/008.jpeg";
import workMedical from "@/assets/work-medical.jpg";
import workChildren from "@/assets/our-works/orphange/002.jpeg";
import workRation from "@/assets/our-works/orphange/008.jpeg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Field Notes | We Own Pakistan Foundation" },
      {
        name: "description",
        content:
          "Field notes, drive reports and transparency updates from WOPF volunteers working across Karachi, Hyderabad, Thatta and Tharparkar.",
      },
      { property: "og:title", content: "WOPF Blog Field Notes from Sindh" },
      {
        property: "og:description",
        content: "Stories, drive reports and transparency updates from We Own Pakistan Foundation.",
      },
    ],
  }),
  component: Blog,
});

const IMAGES = [heroIftar, heroWater, workYouth, workMedical, workChildren, workRation];

function Blog() {
  const [featured, ...rest] = POSTS;

  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Blog"
        title="Field notes, drive reports and what we learned."
        intro="Written by the volunteers who were actually there plus the transparency updates we publish for donors."
        image={heroFood}
      />

      {/* Featured post */}
      {featured && (
        <section className="container-wopf py-20">
          <article className="reveal grid gap-10 overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-soft lg:grid-cols-2">
            <img
              src={IMAGES[0]}
              alt={featured.title}
              loading="lazy"
              width={1920}
              height={1088}
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="p-10 lg:py-14 lg:pr-14">
              <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-deep">
                Featured • {featured.category}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight lg:text-4xl">{featured.title}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {featured.date} • {featured.read}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary-deep">
                Full article coming soon <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </article>
        </section>
      )}

      {/* Listing */}
      <section className="container-wopf pb-24">
        <SectionHeading eyebrow="Latest posts" title="More from the field" />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <article
              key={post.slug}
              className="reveal group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-lift"
            >
              <img
                src={IMAGES[(i + 1) % IMAGES.length]}
                alt={post.title}
                loading="lazy"
                width={1408}
                height={1008}
                className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col p-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">{post.category}</span>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {post.date} • {post.read}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-wopf pb-24">
        <div className="surface-brand reveal grid gap-8 rounded-[2.5rem] p-10 shadow-lift lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Get the monthly field report</h2>
            <p className="mt-4 max-w-lg opacity-85">
              One email a month: what we distributed, where, and what is planned next. No fundraising spam.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full bg-card px-6 py-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* <DonateSection /> */}
    </SiteLayout>
  );
}
