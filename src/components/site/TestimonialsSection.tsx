import { Quote, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";
import { Carousel } from "./Carousel";
import { SectionHeading } from "./SiteLayout";

/** Beneficiary testimonials with proof-of-impact labels (Slick carousel). */
export function TestimonialsSection() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="container-wopf">
        <SectionHeading
          eyebrow="Voices from the field"
          title="Proof that your donation reached a doorstep"
          intro="Each testimonial below is tied to a documented distribution a register entry, a photograph and a verified location."
          align="center"
        />

        <div className="reveal mt-14">
          <Carousel
            dots
            arrows={false}
            infinite
            autoplay
            autoplaySpeed={6000}
            speed={600}
            slidesToShow={2}
            className="works-slider"
            responsive={[{ breakpoint: 900, settings: { slidesToShow: 1 } }]}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="px-3 pb-2">
                <figure className="flex h-full flex-col rounded-3xl bg-card p-8 shadow-soft">
                  <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
                  <blockquote className="mt-5 text-base leading-relaxed text-foreground/85">“{t.quote}”</blockquote>
                  <figcaption className="mt-7 border-t border-border pt-5">
                    <p className="font-display font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary-deep">
                      <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.proof}
                    </p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
