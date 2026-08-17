import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, ArrowRight } from "lucide-react";
import { SiteLayout, SectionHeading, PageBanner } from "@/components/site/SiteLayout";
import { FaqSection } from "@/components/site/FaqSection";
import { DonateSection } from "@/components/site/DonateSection";
import { StatsBand } from "@/components/site/StatsBand";
import { FAQS_ORG, TEAM } from "@/lib/site";
import heroIftar from "@/assets/our-works/ramdan-drive/005.jpeg";
import workRation from "@/assets/our-works/orphange/005.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WOPF | Our Story, Mission & Team" },
      {
        name: "description",
        content:
          "Founded in 2016 in Karachi, We Own Pakistan Foundation delivers food, water, healthcare and youth programs across Sindh. Meet the mission, vision and team.",
      },
      { property: "og:title", content: "About We Own Pakistan Foundation" },
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
        intro="We Own Pakistan Foundation began with one ration drive in 2016 and grew into a year-round welfare network across Sindh."
        image={heroIftar}
      />

      <StatsBand />

      {/* ---------- Story ---------- */}
      <section className="container-wopf py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="From a single ration drive to a province-wide operation."
              intro="In 2016, founding chairman Nadir Abbas and a handful of friends in Karachi pooled their own money to deliver ration bags to forty families. Word travelled, volunteers arrived, and within a year the group was registered as We Own Pakistan Foundation."
            />
            <div className="reveal mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Today WOPF runs food distribution, Ramadan Iftar drives, water relief in drought-hit districts, free
                medical camps and youth development sessions. The board is unpaid; almost every hand on the ground is a
                volunteer who lives in the community being served.
              </p>
              <p>
                We keep our promises small and verifiable: a register of names, a photograph of every distribution, and
                a phone number families can call. That is the standard we hold ourselves to, drive after drive.
              </p>
            </div>
            <Link
              to="/our-works"
              className="reveal mt-9 inline-flex items-center gap-2 text-sm font-bold text-primary-deep transition-all hover:gap-3"
            >
              See the projects behind the story <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <img
            src={workRation}
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
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To deliver dignified, transparent and continuous welfare support food, clean water, healthcare and
              education to the most underserved communities of Sindh, and to prove with documentation that every
              contribution reached a real household.
            </p>
          </article>
          <article className="reveal rounded-[2rem] bg-card p-10 shadow-soft">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-gold-foreground">
              <Eye className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-7 font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A Pakistan where no family goes without a meal, no village walks kilometres for water, and every young
              person has a mentor and a skill a country its own citizens take responsibility for.
            </p>
          </article>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="container-wopf py-24 lg:py-32">
        <SectionHeading
          eyebrow="Our team"
          title="The people who answer the phone at 6 a.m."
          intro="A volunteer board of professionals, doctors and educators who serve without compensation."
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
                alt={`${member.name}, ${member.role} at We Own Pakistan Foundation`}
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
        title="How the foundation is run"
        intro="Governance, selection criteria and partnerships the questions donors and partners ask us most."
      />
      {/* <DonateSection /> */}
    </SiteLayout>
  );
}
