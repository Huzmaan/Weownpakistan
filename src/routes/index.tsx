import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Sparkles, CheckCircle2, Phone } from "lucide-react";
import { Carousel } from "@/components/site/Carousel";
import { SiteLayout, SectionHeading } from "@/components/site/SiteLayout";
import { StatsBand } from "@/components/site/StatsBand";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { FaqSection } from "@/components/site/FaqSection";
import { DonateSection } from "@/components/site/DonateSection";
import { FAQS_GENERAL, SERVICES, SITE } from "@/lib/site";
import heroFood from "@/assets/our-works/orphange/001.jpeg";
import heroIftar from "@/assets/our-works/ramdan-drive/005.jpeg";
import heroWater from "@/assets/hero-water.jpg";
import workYouth from "@/assets/work-youth.jpg";
import workMedical from "@/assets/work-medical.jpg";
import workClothing from "@/assets/our-works/orphange/007.jpeg";
import workEidMeal from "@/assets/our-works/orphange/002.jpeg";
import workChildren from "@/assets/our-works/events/006.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "We Own Pakistan Foundation | Welfare Across Sindh" },
      {
        name: "description",
        content:
          "WOPF is a volunteer-led welfare foundation serving Sindh with food distribution, Ramadan Iftar drives, clean water, medical camps and youth programs.",
      },
      { property: "og:title", content: "We Own Pakistan Foundation | Welfare Across Sindh" },
      {
        property: "og:description",
        content: "Food, water, health and youth programs delivered to communities across Sindh, Pakistan.",
      },
    ],
  }),
  component: Home,
});

const HERO_SLIDES = [

  {
    image: heroIftar,
    eyebrow: "Ramadan drive",
    title: "A place at the dastarkhwan for everyone.",
    text: "Thirty nights of community Iftar, Sehri boxes and Eid gifts across Karachi and Hyderabad.",
  },
  {
    image: heroFood,
    eyebrow: "Food security",
    title: "We own Pakistan and we own its hungriest days.",
    text: "Ration hampers reaching families in interior Sindh who are usually the last on every list.",
  },
  {
    image: heroWater,
    eyebrow: "Water relief",
    title: "Clean water within walking distance.",
    text: "Hand pumps and tanker rotations for drought-hit settlements in Tharparkar.",
  },
];

const WORKS = [
  { image: workClothing, title: "Monthly clothing distribution", place: "Hyderabad, Sindh", meta: "420 families served" },
  { image: workEidMeal, title: "Eid gift & meal packs", place: "Tharparkar", meta: "1,100 children" },
  { image: workMedical, title: "Free medical camp", place: "Thatta, Sindh", meta: "312 patients treated" },
  { image: workYouth, title: "Youth motivational seminar", place: "Hyderabad", meta: "600+ students" },
];

function Home() {
  return (
    <SiteLayout>
      {/* ---------- Hero slider ---------- */}
      <section className="relative isolate h-[calc(100svh-5rem)] min-h-[520px] max-h-[860px] overflow-hidden bg-ink sm:min-h-[600px]">
        <Carousel dots arrows={false} infinite fade autoplay autoplaySpeed={6500} speed={900} pauseOnHover={false}>
          {HERO_SLIDES.map((slide, i) => (
            <div key={slide.title} className="relative h-[calc(100svh-5rem)] min-h-[520px] max-h-[860px] sm:min-h-[600px]">
              <img
                src={slide.image}
                alt={slide.eyebrow}
                width={1920}
                height={1088}
                {...(i === 0 ? {} : { loading: "lazy" as const })}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="veil absolute inset-0" />
              <div className="container-wopf relative flex h-full items-center">
                <div className="max-w-2xl">
                  <span className="inline-flex rounded-full bg-ink-foreground/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold backdrop-blur">
                    {slide.eyebrow}
                  </span>
                  <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-ink-foreground sm:text-5xl lg:text-[3.75rem]">
                    {slide.title}
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/80">{slide.text}</p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="surface-brand inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold shadow-lift transition-transform hover:-translate-y-0.5"
                    >
                      Call Now  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <Link
                      to="/our-works"
                      className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/5 px-7 py-4 text-sm font-bold text-ink-foreground backdrop-blur transition-colors hover:bg-ink-foreground/15"
                    >
                      See our work
                    </Link>
                  </div>
                  <p className="mt-8 font-display text-sm text-gold/90 text-end" lang="ur" dir="rtl">
                    {SITE.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      <StatsBand />

      {/* ---------- About ---------- */}
      <section className="container-wopf py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="reveal relative">
            <img
              src={workChildren}
              alt="Children receiving food packs from WOPF volunteers"
              loading="lazy"
              width={1408}
              height={912}
              className="arch h-[380px] w-full object-cover shadow-lift sm:h-[460px] lg:h-[520px]"
            />
            <div className="absolute -bottom-8 -right-2 hidden w-56 rounded-3xl bg-card p-6 shadow-lift sm:block">
              <p className="font-display text-3xl font-bold text-primary-deep">2016</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Foundation established
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About WOPF"
              title="A foundation built by neighbours, not by outsiders."
              intro="We Own Pakistan Foundation was established in 2016 in Karachi by founding chairman Nadir Abbas and a small group of volunteers who were tired of waiting for someone else to act. What began as a single ration drive is now a year-round welfare operation across Sindh."
            />
            <p className="reveal mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Our mission is simple: restore dignity through direct, verifiable help. We work where the roads end the
              goths, the desert settlements, the neighbourhoods that never make the news and we stay in touch with the
              same families year after year.
            </p>
            <ul className="reveal mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Volunteer-led, low overhead",
                "Documented beneficiary registers",
                "Zakat kept in a separate pool",
                "Present in 120+ villages",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-medium text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="reveal mt-10 inline-flex items-center gap-2 text-sm font-bold text-primary-deep hover:gap-3 transition-all"
            >
              Read our full story <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="bg-secondary/60 py-24 lg:py-32">
        <div className="container-wopf">
          <SectionHeading
            eyebrow="What we do"
            title="Six programs, one promise: help that actually arrives."
            intro="Each program runs on its own calendar with dedicated field coordinators, so support is continuous rather than seasonal."
            align="center"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <article
                key={service.slug}
                className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="font-display text-sm font-bold text-gold">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                <ul className="mt-6 space-y-2">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs font-semibold text-primary-deep">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Call to action ---------- */}
      <section className="container-wopf py-24">
        <div className="surface-brand reveal relative overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:rounded-[2.5rem] sm:py-16 shadow-lift sm:px-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/25 blur-3xl" aria-hidden="true" />
          <h2 className="relative mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            One family. One month of food. One decision from you.
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-85">
            Whether you give once, give monthly, or give your Saturday mornings as a volunteer it turns into something
            measurable on the ground within days.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-card px-8 py-4 text-sm font-bold text-primary-deep transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 px-8 py-4 text-sm font-bold transition-colors hover:bg-primary-foreground/10"
            >
              <Users className="h-4 w-4" aria-hidden="true" /> Become a volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Our works slider ---------- */}
      <section className="container-wopf py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our works" title="Recent drives, documented as they happened." />
          <Link
            to="/our-works"
            className="reveal inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3 text-sm font-bold text-primary-deep transition-colors hover:bg-primary-soft"
          >
            View all projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="reveal mt-14">
          <Carousel
            dots
            arrows={false}
            infinite
            autoplay
            autoplaySpeed={5000}
            slidesToShow={3}
            className="works-slider"
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 700, settings: { slidesToShow: 1 } },
            ]}
          >
            {WORKS.map((work) => (
              <div key={work.title} className="px-3">
                <article className="group relative overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={work.image}
                    alt={`${work.title} in ${work.place}`}
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="h-[300px] w-full object-cover transition-transform sm:h-[380px] duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">{work.place}</p>
                    <h3 className="mt-2 font-display text-xl font-bold text-ink-foreground">{work.title}</h3>
                    <p className="mt-1 text-sm text-ink-foreground/70">{work.meta}</p>
                  </div>
                </article>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <TestimonialsSection />

      {/* ---------- Bonus: volunteer call ---------- */}
      <section className="container-wopf py-24">
        <div className="reveal grid gap-10 rounded-[2.5rem] border border-border bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-deep">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Join the team
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              900 volunteers. Room for one more you.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Packing days, distribution routes, medical camp registration desks and school sessions. Give a few hours a
              month and we will place you where you're needed most.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Packing crew", d: "Weekend warehouse shifts" },
              { t: "Field distribution", d: "Travel with the convoy" },
              { t: "Camp support", d: "Registration & pharmacy desk" },
              { t: "Youth mentors", d: "Speak at school sessions" },
            ].map((r) => (
              <div key={r.t} className="rounded-2xl bg-secondary/70 p-5">
                <p className="font-display text-sm font-bold text-primary-deep">{r.t}</p>
                <p className="mt-1 text-xs text-muted-foreground">{r.d}</p>
              </div>
            ))}
            <Link
              to="/contact"
              className="surface-brand sm:col-span-2 rounded-2xl px-6 py-4 text-center text-sm font-bold transition-transform hover:-translate-y-0.5"
            >
              Sign up to volunteer
            </Link>
          </div>
        </div>
      </section>

      <FaqSection items={FAQS_GENERAL} />
      {/* <DonateSection /> */}
    </SiteLayout>
  );
}
