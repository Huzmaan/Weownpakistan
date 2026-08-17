import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, SectionHeading, PageBanner } from "@/components/site/SiteLayout";
import { DonateSection } from "@/components/site/DonateSection";
import { SERVICES , SITE } from "@/lib/site";
import heroFood from "@/assets/our-works/orphange/006.jpeg";
import heroIftar from "@/assets/our-works/ramdan-drive/008.jpeg";
import heroWater from "@/assets/hero-water.jpg";
import workYouth from "@/assets/work-youth.jpg";
import workMedical from "@/assets/work-medical.jpg";
import workChildren from "@/assets/our-works/orphange/005.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Food, Water, Health & Youth Programs WOPF" },
      {
        name: "description",
        content:
          "Explore WOPF programs: ration distribution, Ramadan Iftar drives, water relief in Thar, free medical camps, youth skills training and community welfare in Sindh.",
      },
      { property: "og:title", content: "WOPF Services & Welfare Programs" },
      {
        property: "og:description",
        content: "Ration drives, Iftar dastarkhwans, water relief, medical camps and youth programs across Sindh.",
      },
    ],
  }),
  component: Services,
});

const IMAGES: Record<string, string> = {
  Cloth: heroFood,
  iftar: heroIftar,
  welfare: workChildren,
  water: heroWater,
  youth: workYouth,
  medical: workMedical,
};

function Services() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Services"
        title="Programs designed around what families actually ask for."
        intro="Food, water, healthcare, skills and emergency relief each with its own field team, calendar and reporting."
        image={heroFood}
      />

      <section className="container-wopf py-24 lg:py-32">
        <SectionHeading
          eyebrow="Program detail"
          title="Six initiatives running across Sindh, all year."
          align="center"
        />

        <div className="mt-20 space-y-24">
          {SERVICES.map((service, i) => (
            <article
              key={service.slug}
              className={`reveal grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="relative">
                <img
                  src={IMAGES[service.slug]}
                  alt={service.title}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-[420px] w-full rounded-[2rem] object-cover shadow-lift"
                />
                <figcaption className="absolute left-6 top-6 rounded-full bg-card/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-deep backdrop-blur">
                  0{i + 1} — {service.slug}
                </figcaption>
              </figure>

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
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="surface-brand inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
                  >
                    Call Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full border border-primary/25 px-6 py-3.5 text-sm font-bold text-primary-deep transition-colors hover:bg-primary-soft"
                  >
                    Volunteer here
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bonus: how a drive works */}
      <section className="bg-secondary/60 py-24">
        <div className="container-wopf">
          <SectionHeading eyebrow="Our process" title="How a single drive comes together" align="center" />
          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Survey", d: "Local coordinators map households, verify need and build a register." },
              { t: "Fund", d: "The drive is costed and matched to donations earmarked for that program." },
              { t: "Distribute", d: "Volunteers deliver in person no middlemen, no political banners." },
              { t: "Report", d: "Photos, counts and locations are published and shared with donors." },
            ].map((step, i) => (
              <li key={step.t} className="reveal rounded-3xl bg-card p-8 shadow-soft">
                <span className="font-display text-4xl font-bold text-gold">{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-bold">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* <DonateSection /> */}
    </SiteLayout>
  );
}
