import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout , SectionHeading} from "@/components/site/SiteLayout";
import { Carousel } from "@/components/site/Carousel";
import { HealthBanner } from "@/components/services/HealthBanner";
import { HealthImpact } from "@/components/services/HealthImpact";
import { HealthOverview } from "@/components/services/HealthOverview";
import { HealthFeatures } from "@/components/services/HealthFeatures";
import { HealthProcess } from "@/components/services/HealthProcess";
import { HealthFieldStory } from "@/components/services/HealthFieldStory";
import { HealthTransparency } from "@/components/services/HealthTransparency";
import { HealthFaq } from "@/components/services/HealthFaq";
import { HealthCta } from "@/components/services/HealthCta";
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


import {
  Stethoscope,
  Pill,
  Eye,
  HeartPulse,
  Baby,
  Ambulance,
  MapPin,
  Users,
  Truck,
  ClipboardCheck,
} from "lucide-react";

import healthBanner from "@/assets/our-works/orphange/005.jpeg"
import healthOverview from "@/assets/health-and-support-image.png";
import healthFieldStory from "@/assets/health-field-story.jpg";

export const Route = createFileRoute("/services/disability-care-support-&-rehabilitation")({
  head: () => ({
    meta: [
      { title: "Disability Care, Support & Rehabilitation — Free Medical Camps | WOPF" },
      {
        name: "description",
        content:
          "WOPF's Disability Care, Support & Rehabilitation program runs free medical camps, screening days and medicine counters across interior Sindh. Sponsor a camp or volunteer.",
      },
      { property: "og:title", content: "Disability Care, Support & Rehabilitation — WOPF" },
      {
        property: "og:description",
        content: "Free medical camps, screening and medicine for villages across Sindh.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HealthMedicalSupportPage,
});

function HealthMedicalSupportPage() {

// const HEALTH_IMPACT = [
//   {
//     value: "35+",
//     label: "medical camps",
//     icon: Stethoscope,
//   },
//   {
//     value: "40",
//     label: "patients per Rs 25,000",
//     icon: Users,
//   },
//   {
//     value: "100%",
//     label: "medicine free at camp",
//     icon: Pill,
//   },
//   {
//     value: "On-site",
//     label: "screening & referrals",
//     icon: ClipboardCheck,
//   },
// ];

const HEALTH_OVERVIEW = {
  eyebrow: "Overview",
  title: "Healthcare that travels to the patient, not the other way round.",
  text: "In much of interior Sindh a simple infection can become a crisis because there is no doctor, no pharmacy and no transport. WOPF's medical teams load up doctors, screening equipment and free medicine, and set up camp right inside the village — treating hundreds of patients in a single day at zero cost to them.",
  stats: [
    {
      value: "35+",
      label: "Medical camps",
    },
    {
      value: "4,800+",
      label: "Patients treated",
    },
    {
      value: "100%",
      label: "Free medicine",
    },
  ],
};

const GALLERY = [ramandanDriveOne, ramandanDriveTwo, ramandanDriveThree, ramandanDriveFour, ramandanDriveFive, ramandanDriveSix, ramandanDriveSeven, ramandanDriveEight, ramandanDriveNine, ramandanDriveTen];

const HEALTH_FEATURES = [
  {
    icon: Stethoscope,
    title: "General Screening Camps",
    text: "Full check-ups by volunteer physicians — blood pressure, diabetes, fever, infections and chronic illness.",
  },
  {
    icon: Pill,
    title: "Free Medicine Counters",
    text: "Every medicine prescribed at the camp is handed over free from our on-site pharmacy counter.",
  },
  {
    icon: Eye,
    title: "Eye Care Days",
    text: "Vision screening, free glasses and referral for cataract surgery for elderly villagers.",
  },
  {
    icon: Baby,
    title: "Maternal & Child Health",
    text: "Antenatal checks, nutrition supplements and vaccination guidance for mothers and infants.",
  },
  {
    icon: HeartPulse,
    title: "Follow-up & Referrals",
    text: "Patients needing surgery or specialist care are referred to partner hospitals and tracked to recovery.",
  },
  {
    icon: Ambulance,
    title: "Emergency Medical Aid",
    text: "Support for families facing sudden medical crises — medicines, tests and hospital costs.",
  },
];

const HEALTH_PROCESS = [
  {
    icon: MapPin,
    title: "Village need survey",
    text: "Local coordinators identify common illnesses, patient numbers and the nearest referral hospital.",
  },
  {
    icon: Users,
    title: "Medical team assembled",
    text: "Doctors, dispensers and volunteers are matched to the needs reported by the community.",
  },
  {
    icon: Truck,
    title: "Clinic reaches the village",
    text: "Screening equipment, registration desks and a stocked pharmacy arrive together on camp day.",
  },
  {
    icon: HeartPulse,
    title: "Care continues afterwards",
    text: "Urgent and specialist cases are referred, documented and followed up by the field team.",
  },
];

const HEALTH_FIELD_STORY = {
  image: healthFieldStory,
  imageAlt:
    "A volunteer doctor speaking with an elderly woman after a rural medical camp",
  caption: "Care beyond the prescription",
  quote:
    "The camp is not complete when the last medicine is handed over. It is complete when the patient knows what happens next.",
  author: "Dr. Faheem Shaikh",
  role: "Medical Camps Coordinator, WOPF",
  text: "Our coordinators keep a referral record for patients who need surgery, laboratory tests or specialist care, so a diagnosis does not become another dead end.",
};

const HEALTH_BUDGET = [
  {
    label: "Doctor & screening support",
    share: "35%",
    width: "w-[35%]",
  },
  {
    label: "Medicines dispensed",
    share: "45%",
    width: "w-[45%]",
  },
  {
    label: "Transport & camp setup",
    share: "20%",
    width: "w-[20%]",
  },
];

const HEALTH_TRANSPARENCY = {
  title: "What a Rs 25,000 camp sponsorship covers",
  description:
    "A contribution at this level supports screening and medicine for around 40 patients. Actual allocations vary with the village and medicines required.",
  sponsorship: "Rs 25,000",
  patientsText: "Approx. 40\npatients served",
  note: "Receipts, patient counts and camp photographs are documented for every drive.",
};

const HEALTH_FAQS = [
  {
    q: "Who can receive treatment at a WOPF medical camp?",
    a: "Camps are open to residents of the host village and nearby settlements. Priority is given to people who cannot easily reach or afford a clinic.",
  },
  {
    q: "Are consultation and medicines both free?",
    a: "Yes. Screening, consultation and the medicines available at the on-site counter are provided without charge to patients.",
  },
  {
    q: "What happens when a patient needs specialist care?",
    a: "The camp team records the case, refers the patient to an appropriate partner or hospital, and coordinates follow-up where support is available.",
  },
  {
    q: "Can a doctor or medical student volunteer?",
    a: "Yes. Doctors, pharmacists, nurses and medical students can contact WOPF to join upcoming camps according to their qualifications and availability.",
  },
];

  return (
    <SiteLayout>

      <HealthBanner
        eyebrow="Disability Care, Support & Rehabilitation"
        title="Health & Medical Support Programs designed around what"
        intro="Free medical camps, medicine and follow-up care for villages where the nearest clinic is hours away."
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
        <SectionHeading eyebrow="From the field" title="Snapshots from recent Activites" align="center" />
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
        title="Six ways the medical program serves a village"
        intro="Each camp is planned with local coordinators so the right doctors, medicines and equipment arrive together."
        features={HEALTH_FEATURES}
      />

      <HealthProcess
        eyebrow="From survey to follow-up"
        title="A one-day camp takes weeks of careful preparation"
        intro="Every team, medicine box and referral pathway is arranged before the first patient arrives."
        steps={HEALTH_PROCESS}
      />

      <HealthFieldStory
        image={HEALTH_FIELD_STORY.image}
        imageAlt={HEALTH_FIELD_STORY.imageAlt}
        caption={HEALTH_FIELD_STORY.caption}
        quote={HEALTH_FIELD_STORY.quote}
        author={HEALTH_FIELD_STORY.author}
        role={HEALTH_FIELD_STORY.role}
        text={HEALTH_FIELD_STORY.text}
      />

      <HealthTransparency
        title={HEALTH_TRANSPARENCY.title}
        description={HEALTH_TRANSPARENCY.description}
        sponsorship={HEALTH_TRANSPARENCY.sponsorship}
        patientsText={HEALTH_TRANSPARENCY.patientsText}
        note={HEALTH_TRANSPARENCY.note}
        budget={HEALTH_BUDGET}
      />

      <HealthFaq
        eyebrow="Medical camp questions"
        title="What patients, donors and volunteers usually ask"
        intro="Clear answers about access, cost, referrals and joining the medical team."
        items={HEALTH_FAQS}
      />

      <HealthCta
        eyebrow="Sponsor a camp"
        title="Rs 25,000 puts a doctor and free medicine in front of 40 patients."
        description="Sponsor a full medical camp, donate towards the medicine counter, or join the camp team as a volunteer."
        primaryText="Donate to this program"
        primaryLink="/contact"
        // secondaryText="Volunteer at a camp"
        // secondaryLink="/contact"
      />

    </SiteLayout>
  );
}