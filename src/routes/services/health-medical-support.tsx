import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionHeading } from "@/components/site/SiteLayout";
import { Carousel } from "@/components/site/Carousel";
import { HealthBanner } from "@/components/services/HealthBanner";
import { HealthOverview } from "@/components/services/HealthOverview";
import { HealthFeatures } from "@/components/services/HealthFeatures";
import { HealthProcess } from "@/components/services/HealthProcess";
import { HealthFaq } from "@/components/services/HealthFaq";
import { HealthCta } from "@/components/services/HealthCta";
import { ServiceProgramsSection } from "@/components/services/ServiceCategoryPage";
import healthAndSupportImage from "@/assets/health-and-support-image.png";
import serviceOneImage from "@/assets/service-one-image.png";
import breastCancerEventOne from "@/assets/field-photos/events/breast-cancer-awareness/event-1.jpg";
import breastCancerEventTwo from "@/assets/field-photos/events/breast-cancer-awareness/event-2.jpg";
import breastCancerEventThree from "@/assets/field-photos/events/breast-cancer-awareness/event-3.jpg";
import breastCancerEventFour from "@/assets/field-photos/events/breast-cancer-awareness/event-4.jpg";

import {
  Stethoscope,
  Pill,
  Baby,
  Ambulance,
  MapPin,
  Users,
  Truck,
  ClipboardCheck,
} from "lucide-react";

const healthBanner = serviceOneImage;
const healthOverview = healthAndSupportImage;

export const Route = createFileRoute("/services/health-medical-support")({
  head: () => ({
    meta: [
      { title: "Health & Medical Support | We Own Pakistan Foundation" },
      {
        name: "description",
        content:
          "Free medical camps, a medicine bank and referrals for families in Sindh who cannot afford basic healthcare.",
      },
      { property: "og:title", content: "Health & Medical Support — WOPF" },
      {
        property: "og:description",
        content: "Free medical camps, a medicine bank and referrals for families in Sindh.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HealthMedicalSupportPage,
});

function HealthMedicalSupportPage() {
  const HEALTH_OVERVIEW = {
    eyebrow: "Overview",
    title: "Basic healthcare, brought closer to families who find it hard to reach.",
    text: "For many families, a visit to the doctor means losing a day's wages, and one prescription can cost more than a week of groceries. People wait, and a small illness turns into a serious one. Our health program takes doctors and volunteers into communities, collects suitable donated medicines, and helps patients who need hospital care find where to go next.",
    stats: [],
  };

  const HEALTH_FEATURES = [
    {
      icon: Stethoscope,
      title: "Free Medical Camps",
      text: "Consultations, basic screening and medicines for people in areas with few clinics.",
    },
    {
      icon: Pill,
      title: "Medicine Bank",
      text: "Sealed, unexpired medicines donated by individuals and pharmacies are checked before they reach patients.",
    },
    {
      icon: Baby,
      title: "Health Awareness",
      text: "Sessions on maternal and child health, hygiene, common illnesses and breast cancer awareness.",
    },
    {
      icon: ClipboardCheck,
      title: "Diagnostic Tests",
      text: "Help with essential diagnostic tests where funds allow.",
    },
    {
      icon: Ambulance,
      title: "Hospital Referrals",
      text: "Guidance to hospitals and specialists for patients who need care beyond a camp.",
    },
  ];

  const HEALTH_PROCESS = [
    {
      icon: MapPin,
      title: "Choose the place",
      text: "Select an area with poor access to healthcare, after speaking with people who live there.",
    },
    {
      icon: Users,
      title: "Prepare",
      text: "Arrange doctors, medicines, seating, water and volunteers, then share the camp date with the community.",
    },
    {
      icon: Truck,
      title: "Run the camp",
      text: "Volunteers manage queues and help people get registered, screened and seen by a doctor.",
    },
    {
      icon: ClipboardCheck,
      title: "Follow up",
      text: "Record the number of patients seen and keep notes on cases referred for further care.",
    },
  ];

  const HEALTH_FAQS = [
    {
      q: "Is it really free?",
      a: "Yes. Consultation and the medicines available at the camp are free of charge.",
    },
    {
      q: "Where is the next camp?",
      a: "Contact us for the latest camp dates and locations.",
    },
  ];

  const GALLERY = [healthAndSupportImage, serviceOneImage];

  return (
    <SiteLayout>
      <HealthBanner
        eyebrow="Health & Medical Support"
        title="Health & Medical Support"
        intro="Basic healthcare, brought closer to families who find it hard to reach."
        image={healthBanner}
      />

      {/* <HealthImpact
        items={HEALTH_IMPACT}
      /> */}

      <HealthOverview
        image={healthOverview}
        eyebrow={HEALTH_OVERVIEW.eyebrow}
        title={HEALTH_OVERVIEW.title}
        text={HEALTH_OVERVIEW.text}
        stats={HEALTH_OVERVIEW.stats}
      />

      {/* Gallery slider */}
      <section className="container-wopf py-20">
        <SectionHeading
          eyebrow="From the field"
          title="Snapshots from recent activities"
          align="center"
        />
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

      <HealthFeatures
        eyebrow="What we provide"
        title="Our health programs and other support"
        intro="Medical camps, a medicine bank and practical guidance for patients who need further care."
        features={HEALTH_FEATURES}
      />

      <section className="container-wopf py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Health awareness"
              title="Breast cancer awareness starts with an open conversation."
            />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              People can find it hard to talk about breast cancer. At our 2026 awareness program,
              women and community members came together to share information and encourage one
              another to speak up and take their health seriously. The message from the day was
              simple: break the silence, don't let stigma stop a conversation, and seek advice early
              from a qualified health professional.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              These photos are from the event. For concerns about your health, please speak with a
              qualified healthcare professional.
            </p>
            <a
              href="https://www.facebook.com/media/set/?vanity=wopfofficial&set=a.1415954077398033"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-primary/20 px-5 py-3 text-sm font-bold text-primary-deep transition hover:bg-primary-soft"
            >
              View all event photos
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                src: breastCancerEventOne,
                alt: "WOPF breast cancer awareness program participants with an awareness message on screen",
              },
              {
                src: breastCancerEventTwo,
                alt: "Women attending WOPF's breast cancer awareness session",
              },
              {
                src: breastCancerEventThree,
                alt: "Participants at the 2026 breast cancer awareness program",
              },
              {
                src: breastCancerEventFour,
                alt: "Guests at the awareness program beside a message about early detection",
              },
            ].map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={2048}
                height={1362}
                className="h-40 w-full rounded-2xl object-cover shadow-soft sm:h-56"
              />
            ))}
          </div>
        </div>
      </section>

      <HealthProcess
        eyebrow="How we organise a camp"
        title="Care begins with listening and continues after the camp"
        intro="Local residents and volunteers help the team plan, prepare, run and follow up each camp."
        steps={HEALTH_PROCESS}
      />

      <section className="container-wopf py-16 sm:py-20">
        <SectionHeading
          eyebrow="Who we help"
          title="Healthcare for people facing barriers to care"
        />
        <p className="mt-5 max-w-4xl leading-relaxed text-muted-foreground">
          Low-income families, daily-wage workers, older people, women and children, especially in
          communities where the nearest clinic is far away or too expensive.
        </p>
      </section>

      <HealthFaq
        eyebrow="Medical camp questions"
        title="Planning a visit or looking for the next camp?"
        intro="Contact our team for current camp dates, locations and ways to volunteer."
        items={HEALTH_FAQS}
      />

      <ServiceProgramsSection serviceSlug="health-medical-support" />

      <HealthCta
        eyebrow="Sponsor a camp"
        title="Help bring care closer to a community."
        description="Fund a medical camp, donate unused medicines, or volunteer at a registration desk or pharmacy table."
        primaryText="Donate to this program"
        primaryLink="/contact"
      />
    </SiteLayout>
  );
}
