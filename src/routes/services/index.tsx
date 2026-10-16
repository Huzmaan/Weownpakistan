import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, SectionHeading, PageBanner } from "@/components/site/SiteLayout";
import { SERVICES } from "@/lib/site";
import { SERVICE_GROUPS } from "@/lib/programs";
import serviceBanner from "@/assets/service-banner.jpeg";
import { SERVICE_CATEGORY_IMAGES } from "@/lib/service-category-images";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Programs | We Own Pakistan Foundation" },
      {
        name: "description",
        content:
          "Food, health, education, clean water, disaster relief, disability support and youth programs run by volunteers across Sindh. See what we do and how you can help.",
      },
      { property: "og:title", content: "Our Programs | We Own Pakistan Foundation" },
      {
        property: "og:description",
        content:
          "Seven programs, one approach: find the need, help directly and keep a record of it.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Services"
        title="What We Do"
        intro="Seven programs, one approach. We find the need, help directly and keep a record of it."
        image={serviceBanner}
      />

      <section className="container-wopf max-w-5xl py-16 sm:py-20">
        <p className="text-lg leading-relaxed text-muted-foreground">
          We Own Pakistan Humanitarian and Welfare Foundation is a volunteer-led organisation based
          in Karachi. Our work began in 2016 with a simple ration drive. Over time we kept meeting
          families whose problems went beyond food: a child who had to leave school, a village with
          no clean water, a patient who could not pay for medicine. Our programs grew out of those
          meetings.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Each program below has its own page with details on what we do, who we help and how you
          can take part.
        </p>
      </section>

      <section className="container-wopf py-24 lg:py-32">
        <SectionHeading
          eyebrow="Our programs"
          title="Practical support, built around community needs."
          align="center"
        />

        <div className="mt-20 space-y-24">
          {SERVICES.map((service, i) => {
            const group = SERVICE_GROUPS.find((item) => item.slug === service.slug);
            const image = SERVICE_CATEGORY_IMAGES[service.slug];

            return (
              <article
                key={service.slug}
                className={`reveal grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                {image ? (
                  <figure className="relative">
                    <img
                      src={image}
                      alt={service.title}
                      loading="lazy"
                      width={1408}
                      height={1008}
                      className="h-[420px] w-full rounded-[2rem] object-cover shadow-lift"
                    />
                    <figcaption className="absolute left-6 top-6 rounded-full bg-card/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-deep backdrop-blur">
                      0{i + 1} — {service.title}
                    </figcaption>
                  </figure>
                ) : (
                  <section className="rounded-2xl border border-border bg-secondary/50 p-8 sm:p-10">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Programs
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold">Explore this service</h3>
                    <ul className="mt-6 divide-y divide-border">
                      {group?.programs.map((program) => (
                        <li key={program.slug}>
                          <Link
                            to={`/services/${service.slug}/${program.slug}` as never}
                            className="flex items-center justify-between gap-4 py-4 font-semibold hover:text-primary"
                          >
                            {program.title}
                            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <div>
                  <h3 className="text-3xl font-bold leading-tight sm:text-4xl">{service.title}</h3>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{service.summary}</p>
                  <ul className="mt-8 space-y-3">
                    {service.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-3 rounded-2xl bg-secondary/70 px-5 py-4 text-sm font-semibold text-foreground/85"
                      >
                        <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {image && group && (
                    <div className="mt-7">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">
                        Programs
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.programs.map((program) => (
                          <Link
                            key={program.slug}
                            to={`/services/${service.slug}/${program.slug}` as never}
                            className="rounded-full border border-primary/25 px-4 py-2 text-sm font-semibold text-primary-deep transition-colors hover:bg-primary-soft"
                          >
                            {program.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Link
                      to={service.button}
                      className="surface-brand inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
                    >
                      Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center rounded-full border border-primary/25 px-6 py-3.5 text-sm font-bold text-primary-deep transition-colors hover:bg-primary-soft"
                    >
                      Volunteer here
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="container-wopf">
          <SectionHeading eyebrow="Our approach" title="How we work" align="center" />
          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Start with the need",
                d: "We visit, listen and verify before deciding who receives help.",
              },
              {
                t: "Help directly",
                d: "Volunteers and coordinators are present at distributions, camps and sessions.",
              },
              {
                t: "Keep records",
                d: "Beneficiaries and activities are documented, and Zakat funds are recorded separately.",
              },
            ].map((step, i) => (
              <li key={step.t} className="reveal rounded-3xl bg-card p-8 shadow-soft">
                <span className="font-display text-4xl font-bold text-gold">{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-bold">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-card p-8 text-center shadow-soft md:flex-row md:text-left">
            <div>
              <h3 className="font-display text-2xl font-bold">
                Not sure where your help fits best?
              </h3>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Call us on +92 300 817 5519 or message us on WhatsApp. We will tell you which
                program needs support right now.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+923008175519"
                className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
              >
                Call Now
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-primary/25 px-6 py-3 text-sm font-bold text-primary-deep"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <DonateSection /> */}
    </SiteLayout>
  );
}
