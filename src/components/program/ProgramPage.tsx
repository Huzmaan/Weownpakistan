import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, HandHeart, Quote, ChevronDown, Sparkles } from "lucide-react";
import type { Program, ServiceGroup } from "@/lib/programs";
import {SITE } from "@/lib/site";
import { Carousel } from "@/components/site/Carousel";

export function ProgramPage({ group, program }: { group: ServiceGroup; program: Program }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const eyebrow = program.eyebrow ?? group.label;
  const heading = program.bannerHeading ?? program.title;
  const faqs = program.faqs ?? [];

  return (
    <>
      {/* 1. Banner */}
      <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden md:min-h-[70vh]">
        <img
          src={program.image}
          alt={program.title}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/75 to-primary/20" />
        <div className="container-wopf w-full pb-14 pt-32 text-primary-foreground md:pb-20">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm opacity-80">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <Link to={`/services/${group.slug}` as never} className="hover:underline">{group.label}</Link>
            <span>/</span>
            <span className="font-semibold text-accent">{program.title}</span>
          </nav>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="mt-4 max-w-2xl text-base opacity-90 sm:text-lg">{program.short}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" hash="donate" className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow-lift transition hover:opacity-95">
              Donate Now
            </Link>
            <a href="#about-program" className="rounded-full border border-current px-7 py-3 font-semibold transition hover:bg-white/10">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* 2. About + What We Provide */}
      <section id="about-program" className="container-wopf grid scroll-mt-28 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <img
            src={program.image}
            alt={program.title}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-accent px-6 py-4 font-bold text-accent-foreground shadow-lift sm:block">
            Since 2015
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary-deep md:text-4xl">{program.title}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{program.intro}</p>
          {program.extraIntro?.map((p, idx) => (
            <p key={idx} className="mt-4 leading-relaxed text-muted-foreground">{p}</p>
          ))}
          <ul className="mt-6 space-y-3">
            {program.points.map((pt) => (
              <li key={pt} className="flex items-start gap-3 font-medium text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Slider Gallery: Our Recent Works */}
      {program.gallery && program.gallery.length > 0 && (
        <section className="bg-muted/40 py-16 sm:py-20 overflow-hidden">
          <div className="container-wopf">
            <div className="mb-10 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Field Updates
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep md:text-4xl">
                Our Recent Works
              </h2>
              <p className="mt-2 text-muted-foreground max-w-xl">
                Glimpses of our ongoing field operations, distributions, and relief activities across Sindh.
              </p>
            </div>

            <div className="-mx-2">
              <Carousel
                dots={true}
                infinite={program.gallery.length > 2}
                speed={600}
                slidesToShow={3}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3500}
                responsive={[
                  { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } },
                  { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, dots: true } },
                ]}
              >
                {program.gallery.map((src, i) => (
                  <div key={i} className="px-2">
                    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-soft transition duration-300 hover:shadow-lift">
                      <img
                        src={src}
                        alt={`${program.title} recent work ${i + 1}`}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                        <span className="text-xs font-semibold text-white tracking-wide">
                          Field Activity #{i + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      )}

      {/* 4. Story / Quote */}
      {program.story && (
        <section className="bg-primary text-primary-foreground">
          <div className="grid lg:grid-cols-2">
            <img
              src={program.story.image ?? program.image}
              alt={`${program.story.name}, ${program.story.role}`}
              loading="lazy"
              className="h-72 w-full object-cover sm:h-96 lg:h-full min-h-[360px]"
            />
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <Quote className="h-10 w-10 text-accent" aria-hidden="true" />
              <blockquote className="mt-6 text-xl font-medium leading-relaxed md:text-2xl">
                "{program.story.quote}"
              </blockquote>
              <div className="mt-6 border-t border-white/20 pt-4">
                <p className="font-semibold text-lg">{program.story.name}</p>
                <p className="text-sm opacity-80">{program.story.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQ Section (Accordion) */}
      {faqs.length > 0 && (
        <section className="bg-secondary/40 py-16 sm:py-24">
          <div className="container-wopf max-w-3xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                Got Questions?
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Everything you need to know about our {program.title.toLowerCase()} operations and how you can participate.
              </p>
            </div>

            <div className="mt-10 space-y-3.5">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={f.q}
                    className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition hover:border-primary/40"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-foreground transition"
                    >
                      <span className="text-base sm:text-lg">{f.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-border/40 px-5 pb-5 pt-3 text-muted-foreground leading-relaxed text-sm sm:text-base animate-in fade-in duration-200">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. Donate / Volunteer Strip */}
      <section className="surface-brand">
        <div className="container-wopf flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold">Support {program.title}</h2>
            <p className="mt-2 opacity-90 max-w-xl">
              Your donation, Zakat, or volunteer time brings direct relief to struggling families in rural and urban Sindh.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="rounded-full bg-background px-7 py-3 text-sm font-semibold text-primary-deep shadow-lift transition hover:opacity-95"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-current px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              <HandHeart className="h-4 w-4" aria-hidden="true" /> Join as Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
