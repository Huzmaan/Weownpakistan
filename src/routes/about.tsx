import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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

  const [activeTab, setActiveTab] = useState("board");

  const tabs = [
    { id: "board", label: "Board of Directors" },
    { id: "executive", label: "Executive Directors" },
    { id: "team", label: "Team Members" },
  ];

  const filteredTeam = TEAM.filter(
    (member) => member.category === activeTab
  );
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="About us"
        title="Ordinary People, Organized Around a Shared Responsibility."
        intro="WOPF began with a small group of people who chose to respond instead of looking away. Since 2016, that same spirit of volunteerism has shaped our work with communities across Sindh and beyond."
        image={aboutbaner}
      />

      <StatsBand />

      {/* ---------- Story ---------- */}
      <section className="container-wopf py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="A Foundation Built by People Who Chose to Help."
              intro="We Own Pakistan Humanitarian & Welfare Foundation was established in Karachi in 2016 by Founder and Chairman Nadir Abbas together with a group of volunteers who believed that community problems should not always be left for someone else to solve."
            />
            <div className="reveal mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>Their first initiative focused on ration support for families facing financial hardship. It was a modest beginning, but direct contact with communities made one thing clear: the need extended far beyond food. Families were also struggling with healthcare, safe water, education and the consequences of emergencies.</p>
              <p>As volunteers and supporters joined, WOPF’s work expanded in response to those needs. The organization began arranging medical camps, water initiatives, education support, emergency relief and opportunities for young people to participate in community service.</p>
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
      {/* ---------- Team ---------- */}
      <section className="container-wopf py-24 lg:py-32">
        <SectionHeading
          eyebrow="Our team"
          title="The People Behind the Work."
          intro="WOPF is led and supported by people who contribute their time, professional experience and community knowledge to the organization’s welfare activities. Leadership profiles should be concise, factual and focused on each person’s role and contribution."
          align="center"
        />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition-all ${activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card text-foreground hover:bg-primary-soft"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTeam.map((member) => (
            <article
              key={member.name}
              className="reveal group rounded-3xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1.5 hover:shadow-lift sm:p-8"
            >
              <img
                src={member.image}
                alt={`${member.name}, ${member.role} at We Own Pakistan Humanitarian and Welfare Foundation`}
                loading="lazy"
                className="mx-auto h-[400px] w-full rounded-md object-cover shadow-soft ring-4 ring-primary-soft"
              />

              <h3 className="mt-6 font-display text-lg font-bold text-foreground">
                {member.name}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {member.role}
              </p>
              {/* <p className="mt-1 text-sm text-muted-foreground">
                {member.description}
              </p> */}
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
