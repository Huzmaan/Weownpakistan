import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, ArrowRight } from "lucide-react";
import { SiteLayout, SectionHeading, PageBanner } from "@/components/site/SiteLayout";
import { FaqSection } from "@/components/site/FaqSection";
import { DonateSection } from "@/components/site/DonateSection";
import { StatsBand } from "@/components/site/StatsBand";
import { FAQS_ORG, TEAM } from "@/lib/site";
import aboutbaner from "@/assets/about-banner.jpg";
import aboutImage from "@/assets/about-image.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WOPF | Our Story, Mission & Team" },
      {
        name: "description",
        content:
          "Founded in 2016 in Karachi, We Own Pakistan Humanitarian and Welfare Foundation delivers food, water, healthcare and youth programs across Sindh. Meet the mission, vision and team.",
      },
      { property: "og:title", content: "About We Own Pakistan Humanitarian and Welfare Foundation" },
      {
        property: "og:description",
        content: "The story, mission, vision and team behind WOPF's welfare work in Sindh.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="About us"
        title="Ordinary people, organised well, refusing to look away."
        intro="We Own Pakistan Humanitarian and Welfare Foundation began with one ration drive in 2016 and grew into a year-round welfare network across Sindh."
        image={aboutbaner}
      />

      <StatsBand />

      {/* ---------- Story ---------- */}
      <section className="container-wopf py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="A Foundation Built By People Who Chose To Help"
              intro="We Own Pakistan Humanitarian and Welfare Foundation was established in 2016 in Karachi by Founder and Chairman Nadir Abbas along with a group of dedicated volunteers who believed that communities can create solutions when people come together."
            />
            <div className="reveal mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>What started as a small ration distribution activity has grown into a wider welfare initiative supporting communities through food assistance, healthcare activities, water projects, youth programs, and emergency support.</p>
              <p>We do not believe in helping from a distance. Our volunteers work directly with communities, understand their challenges, and provide support according to their needs.</p>
            </div>
            <Link
              to="/services"
              className="reveal mt-9 inline-flex items-center gap-2 text-sm font-bold text-primary-deep transition-all hover:gap-3"
            >
              See the projects behind the story <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <img
            src={aboutImage}
            alt="Volunteers loading ration bags for a WOPF distribution drive"
            loading="lazy"
            width={1408}
            height={1008}
            className="reveal arch h-[540px] w-full object-cover shadow-lift"
          />
        </div>
      </section>

      {/* ---------- Mission & Vision ---------- */}
      <section className="bg-secondary/60 py-24 lg:py-28">
        <div className="container-wopf grid gap-6 lg:grid-cols-2">
          <article className="reveal rounded-[2rem] bg-card p-10 shadow-soft">
            <span className="surface-brand inline-flex h-14 w-14 items-center justify-center rounded-2xl">
              <Target className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-7 font-display text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">To inspire, mobilize, and empower individuals and communities to serve those in need with compassion, dedication, honesty, and integrity.</p>
          </article>
          <article className="reveal rounded-[2rem] bg-card p-10 shadow-soft">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-gold-foreground">
              <Eye className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-7 font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">A Pakistan where every citizen believes that helping those in need is not an act of charity but a shared responsibility.</p>
          </article>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="container-wopf py-24 lg:py-32">
        <SectionHeading
          eyebrow="Our team"
          title="The Hands and Hearts Behind Our Mission"
          intro="A volunteer network of dedicated professionals committed to making a lasting difference across Pakistan."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="reveal group rounded-3xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1.5 hover:shadow-lift sm:p-8"
            >
              <img
                src={member.image}
                alt={`${member.name}, ${member.role} at We Own Pakistan Humanitarian and Welfare Foundation`}
                loading="lazy"
                // width={640}
                // height={640}
                className="mx-auto h-[400] w-full rounded-md object-cover shadow-soft ring-4 ring-primary-soft"
              />
              <h3 className="mt-6 font-display text-lg font-bold text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <FaqSection
        items={FAQS_ORG}
        eyebrow="Organisation FAQ"
        title="How the foundation operates"
        intro="Frequently asked questions about our governance, transparency, and donation impact."
      />
      {/* <DonateSection /> */}
    </SiteLayout>
  );
}
