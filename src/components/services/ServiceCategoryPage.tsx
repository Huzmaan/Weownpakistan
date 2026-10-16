import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Carousel } from "@/components/site/Carousel";
import { PageBanner, SectionHeading, SiteLayout } from "@/components/site/SiteLayout";
import { SERVICE_GROUPS } from "@/lib/programs";
import { SERVICES } from "@/lib/site";
import { SERVICE_CATEGORY_IMAGES } from "@/lib/service-category-images";
import { SERVICE_PAGE_IMAGES } from "@/lib/service-page-images";
import { SERVICE_CATEGORY_CONTENT } from "@/lib/service-category-content";
import { PROGRAM_PAGE_CONTENT } from "@/lib/program-page-content";

export function ServiceCategoryPage({ serviceSlug }: { serviceSlug: string }) {
  const group = SERVICE_GROUPS.find((item) => item.slug === serviceSlug);
  const service = SERVICES.find((item) => item.slug === serviceSlug);
  const content = SERVICE_CATEGORY_CONTENT[serviceSlug];
  const bannerImage = SERVICE_CATEGORY_IMAGES[serviceSlug];

  if (!group || !service || !content || !bannerImage) {
    return (
      <SiteLayout>
        <section className="container-wopf py-24">
          <h1 className="font-display text-3xl font-bold">Service not found</h1>
        </section>
      </SiteLayout>
    );
  }

  const pageImages = SERVICE_PAGE_IMAGES[group.slug as keyof typeof SERVICE_PAGE_IMAGES];

  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Our Services"
        title={group.label}
        intro={content.subheading}
        image={bannerImage}
      />

      <section className="container-wopf grid gap-10 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Overview"
            title={content.overviewTitle}
            intro={content.overview[0]}
          />
          {content.overview.slice(1).map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
        {pageImages && (
          <img
            src={pageImages.overview}
            alt={`${group.label} field work`}
            loading="lazy"
            width={1408}
            height={1008}
            className="h-80 w-full rounded-3xl object-cover shadow-soft lg:h-[26rem]"
          />
        )}
      </section>

      <section className="bg-secondary/50 py-20 sm:py-24">
        <div className="container-wopf">
          <SectionHeading
            eyebrow="Programs"
            title={`Programs in ${group.label}`}
            intro={service.summary}
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {group.programs.map((program, index) => {
              const programContent = PROGRAM_PAGE_CONTENT[`${group.slug}/${program.slug}`];
              const summary = programContent?.short ?? program.short;
              const points = programContent?.points ?? program.points;

              return (
                <article
                  key={program.slug}
                  className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    {program.eyebrow ?? group.label} · 0{index + 1}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold text-primary-deep md:text-3xl">
                    {program.title}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{summary}</p>
                  <ul className="mt-5 space-y-2 text-sm font-medium text-foreground/80">
                    {points.slice(0, 3).map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${group.slug}/${program.slug}` as never}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
                  >
                    Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {content.highlights.items.length > 0 && (
        <section className="container-wopf py-16 sm:py-20">
          <SectionHeading
            eyebrow="Program details"
            title={content.highlights.title}
            align="center"
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {content.highlights.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-secondary/70 p-5 leading-relaxed"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="container-wopf grid gap-12 py-20 sm:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Who we help" title="Support shaped around real needs" />
          <p className="mt-5 leading-relaxed text-muted-foreground">{content.audience}</p>
        </div>
        <div>
          <SectionHeading eyebrow="How we work" title="Careful, direct and accountable" />
          <ul className="mt-5 space-y-4">
            {content.approach.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 leading-relaxed text-muted-foreground"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {pageImages && (
        <section className="overflow-hidden bg-secondary/50 py-20 sm:py-24">
          <div className="container-wopf">
            <SectionHeading
              eyebrow="From the field"
              title="Snapshots from our work"
              intro={`A look at ${group.label.toLowerCase()} activities and the communities we serve.`}
              align="center"
            />
            <div className="mt-12">
              <Carousel
                dots
                arrows={false}
                infinite={pageImages.gallery.length > 2}
                autoplay={pageImages.gallery.length > 1}
                autoplaySpeed={3500}
                slidesToShow={3}
                className="works-slider"
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 2 } },
                  { breakpoint: 700, settings: { slidesToShow: 1 } },
                ]}
              >
                {pageImages.gallery.map((image, index) => (
                  <div key={image} className="px-3">
                    <img
                      src={image}
                      alt={`${group.label} field activity ${index + 1}`}
                      loading="lazy"
                      width={1408}
                      height={1008}
                      className="h-72 w-full rounded-3xl object-cover shadow-soft"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      )}

      <section className="surface-brand">
        <div className="container-wopf flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold">How you can help</h2>
            <p className="mt-2 max-w-3xl opacity-90">{content.waysToHelp}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-bold text-primary-deep transition hover:-translate-y-0.5"
          >
            Get involved <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

export function ServiceProgramsSection({ serviceSlug }: { serviceSlug: string }) {
  const group = SERVICE_GROUPS.find((item) => item.slug === serviceSlug);
  if (!group) return null;

  return (
    <section className="container-wopf border-t border-border py-16 sm:py-20">
      <SectionHeading
        eyebrow="Explore programs"
        title={`Programs in ${group.label}`}
        intro="Open a program to see its services, field updates, FAQs, and ways to contribute."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {group.programs.map((program) => {
          const programContent = PROGRAM_PAGE_CONTENT[`${group.slug}/${program.slug}`];
          return (
            <Link
              key={program.slug}
              to={`/services/${group.slug}/${program.slug}` as never}
              className="group flex items-center justify-between gap-4 border-b border-border py-5"
            >
              <span>
                <span className="block font-display text-xl font-bold text-primary-deep">
                  {program.title}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                  {programContent?.short ?? program.short}
                </span>
              </span>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
