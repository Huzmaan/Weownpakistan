import { createFileRoute } from "@tanstack/react-router";
import { MapPin, CalendarDays } from "lucide-react";
import { Carousel } from "@/components/site/Carousel";
import { SiteLayout, SectionHeading, PageBanner } from "@/components/site/SiteLayout";
import { DonateSection } from "@/components/site/DonateSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import heroWater from "@/assets/hero-water.jpg";
import workYouth from "@/assets/work-youth.jpg";
import workMedical from "@/assets/work-medical.jpg";
import workRation from "@/assets/our-works/orphange/008.jpeg";
import workOrphange from "@/assets/our-works/orphange/002.jpeg";
import ramandanDriveOne from "@/assets/our-works/orphange/005.jpeg";
import ramandanDriveTwo from "@/assets/our-works/ramdan-drive/002.jpeg";
import ramandanDriveThree from "@/assets/our-works/orphange/007.jpeg";
import ramandanDriveFour from "@/assets/our-works/ramdan-drive/004.jpeg";
import ramandanDriveFive from "@/assets/our-works/events/002.jpeg";
import ramandanDriveSix from "@/assets/our-works/ramdan-drive/006.jpeg";
import ramandanDriveSeven from "@/assets/our-works/orphange/013.jpeg";
import ramandanDriveEight from "@/assets/our-works/orphange/012.jpeg";
import ramandanDriveNine from "@/assets/our-works/ramdan-drive/009.jpeg";
import ramandanDriveTen from "@/assets/our-works/ramdan-drive/010.jpeg";

export const Route = createFileRoute("/our-works")({
  head: () => ({
    meta: [
      { title: "Our Works | WOPF Projects & Impact Across Sindh" },
      {
        name: "description",
        content:
          "A portfolio of completed WOPF projects: ration drives, Iftar dastarkhwans, hand pumps in Thar, free medical camps and youth seminars, with beneficiary numbers.",
      },
      { property: "og:title", content: "WOPF Our Works Completed Projects" },
      {
        property: "og:description",
        content: "Documented welfare projects delivered by We Own Pakistan Foundation across Sindh.",
      },
    ],
  }),
  component: OurWorks,
});

const PROJECTS = [

  {
    image: workOrphange,
    title: "Eid gift & meal packs",
    place: "Karachi",
    date: "Eid 2026",
    meta: "1,100 children",
    desc: "Sweets, meal packs and new clothes so children in remote villages share in the celebration.",
  },
  {
    image: ramandanDriveFive,
    title: "Ramadan street dastarkhwan",
    place: "Karachi",
    date: "Ramadan 2026",
    meta: "30 nights • 6 locations",
    desc: "Community Iftar tables set up nightly for labourers, travellers and families across six neighbourhoods.",
  },
  {
    image: workRation,
    title: "Monthly Clothing Distribution",
    place: "Hyderabad, Sindh",
    date: "Ongoing since 2021",
    meta: "420 families / month",
    desc: "Family ration hampers of flour, rice, pulses, oil and tea delivered to a fixed register of households.",
  },
  {
    image: heroWater,
    title: "Hand pump installation drive",
    place: "Tharparkar",
    date: "2025–2026",
    meta: "18 pumps installed",
    desc: "Clean water access for desert settlements where women previously walked kilometres each morning.",
  },
  {
    image: workMedical,
    title: "Free medical camp",
    place: "Thatta, Sindh",
    date: "November 2025",
    meta: "312 patients treated",
    desc: "General screening, eye checks and a free medicine counter staffed by twelve volunteer doctors.",
  },
  {
    image: workYouth,
    title: "Youth motivational seminar series",
    place: "Hyderabad",
    date: "2025–2026",
    meta: "600+ students",
    desc: "Career counselling and confidence sessions in government schools, followed by short skill courses.",
  },
];

const GALLERY = [ramandanDriveOne, ramandanDriveTwo, ramandanDriveThree, ramandanDriveFour, ramandanDriveFive, ramandanDriveSix , ramandanDriveSeven , ramandanDriveEight , ramandanDriveNine , ramandanDriveTen];

function OurWorks() {
  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Our works"
        title="Every project here has a register, a date and a photograph."
        intro="A portfolio of drives completed across Sindh with the numbers we reported to our donors."
        image={workMedical}
      />

      {/* Gallery slider */}
      <section className="container-wopf py-20">
        <SectionHeading eyebrow="From the field" title="Snapshots from recent drives" align="center" />
        <div className="reveal mt-14">
          <Carousel
            dots
            arrows={false}
            infinite
            autoplay
            autoplaySpeed={3500}
            slidesToShow={3}
            className="works-slider"
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 700, settings: { slidesToShow: 1 } },
            ]}
          >
            {GALLERY.map((img, i) => (
              <div key={i} className="px-3">
                <img
                  src={img}
                  alt={`WOPF field work photograph ${i + 1}`}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-72 w-full rounded-3xl object-cover shadow-soft"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Project portfolio */}
      <section className="container-wopf pb-24">
        <SectionHeading eyebrow="Portfolio" title="Completed & ongoing projects" />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="reveal group overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-card/95 px-4 py-1.5 text-xs font-bold text-primary-deep backdrop-blur">
                  {p.meta}
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> {p.place}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> {p.date}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <TestimonialsSection />
      {/* <DonateSection /> */}
    </SiteLayout>
  );
}
