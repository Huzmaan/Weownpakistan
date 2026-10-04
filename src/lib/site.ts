import nadirAbbas from "@/assets/team-members/nadirabbas.jpeg";
import maheenAkhtar from "@/assets/team-members/maheenakhtar.jpeg";
import ayaxHussain from "@/assets/team-members/ayaxhussain.jpeg";
import muhammadImran from "@/assets/team-members/muhammadimran.jpeg";
import tehreemAli from "@/assets/team-members/tehreemali.jpeg";
import muhammadSufyan from "@/assets/team-members/muhammadsufyan.jpeg";
import huzmaanPasta from "@/assets/team-members/huzmaanpasta.jpg";
import { Description } from "@radix-ui/react-dialog";
import { SERVICE_GROUPS } from "@/lib/programs";
export type ServiceSubPage = { label: string; to: string };
export type ServicePage = { label: string; to: string; children: ServiceSubPage[] };

/**
 * Central content/config for the WOPF site.
 * Keeping copy here keeps page components presentational and easy to hand off.
 */

export type NavChild = { label: string; to: string; children?: NavChild[] };

export const SERVICES_MENU: NavChild[] = [
  { label: "All Services", to: "/services" },
  {
    label: "Health & Medical",
    to: "/services/health-medical-support",
    children: [
      { label: "Medical Support", to: "/services/health-medical/medical-support" },
    ],
  },
];

export const SITE = {
  name: "We Own Pakistan Humanitarian and Welfare Foundation",
  short: "WOPF",
  tagline: "یہ وطن ہمارا ہے، ہم ہیں پاسباں اس کے",
  facebook: "https://www.facebook.com/wopfofficial/",
  instagram: "https://www.instagram.com/wopfofficial519",
  tiktok: "https://www.tiktok.com/@wopfofficial519",
  email: "info@weownpakistan.org",
  phone: "+92300 817 5519",
  address: "Karachi, Sindh, Pakistan",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  // { label: "Our Works", to: "/our-works" },
  // { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export const FOOTERNAV = [
  { label: "Medicine Bank", to: "/services/health-medical-support/medicine-bank" },
  { label: "Free Medical Camp", to: "/services/health-medical-support/medical-support" },
  { label: "Monthly Ration Program", to: "/services/humanitarian-support-&-poverty-alleviation/monthly-ration" },
  { label: "Ramadan Ration & Iftar", to: "/services/humanitarian-support-&-poverty-alleviation/ramadan-ration-iftar" },
] as const;


// export const SERVICE_PAGES: ServicePage[] = [
  
//   {
//     label: "Health & Medical Support",
//     to: "/services/health-medical-support",
//     children: [
//       { label: "Medical Support", to: "/services/health-medical-support/medical-support" },
//     ],
//   },
//   {
//     label: "Humanitarian Support & Poverty Alleviation",
//     to: "/services/humanitarian-support-&-poverty-alleviation",
//     children: [
//       // e.g. { label: "Humanitarian Support", to: "/services/humanitarian-support-&-poverty-alleviation/humanitarian-support" },
//     ],
//   },
//   {
//     label: "Disaster & Emergency Relief",
//     to: "/services/disaster-&-emergency-relief",
//     children: [],
//   },
//   {
//     label: "Education & Skills Development",
//     to: "/services/education-&-skills-development",
//     children: [],
//   },
//   {
//     label: "WASH Program & Climate Change Awareness",
//     to: "/services/wash-program-&-climate-change-awareness",
//     children: [],
//   },
//   {
//     label: "Disability Care, Support & Rehabilitation",
//     to: "/services/disability-care-support-&-rehabilitation",
//     children: [],
//   },
//   {
//     label: "Youth Empowerment & Community Development",
//     to: "/services/youth-empowerment-&-Community-development",
//     children: [],
//   },
// ] as const;


export const SERVICE_PAGES = SERVICE_GROUPS.map((g) => ({
  label: g.label,
  to: `/services/${g.slug}`,
  children: g.programs.map((p) => ({
    label: p.title,
    to: `/services/${g.slug}/${p.slug}`,
  })),
}));
export const STATS = [
  { value: "10 Years", label: "Ramandan Drive" },
  { value: "50+", label: "Activites Completed" },
  { value: "100+", label: "Ration Distribution" },
  { value: "500+", label: "Active volunteers" },
];

export const SERVICES = [
  {
    slug: "Cloth",
    title: "Health & Medical Support",
    button: "/services/health-medical-support",
    summary: "Bringing basic healthcare closer to communities through medical camps, screenings, medicines, health awareness and referrals for people who require further care.",
    points: ["Medical camps and general screenings", "Medicine and diagnostic support", "Maternal, child and community health awareness"],
  },
  {
    slug: "welfare",
    title: "Disaster & Emergency Relief",
    button: "/services/disaster-&-emergency-relief",
    summary: "Mobilizing volunteers and essential supplies when floods, severe weather or other emergencies disrupt families and communities.",
    points: ["Emergency food and drinking water", "Shelter and essential household support", "Early recovery and rehabilitation assistance"],
  },
  {
    slug: "water",
    title: "Education & Skills Development",
    button: "/services/education-&-skills-development",
    summary:
      "Helping children and young people overcome barriers to learning through educational support, guidance and practical skills development.",
    points: ["School and learning support", "Digital and vocational skills", "Mentoring and career guidance"],
  },
  {
    slug: "iftar",
    title: "Humanitarian Support & Poverty Alleviation",
    button: "/services/humanitarian-support-&-poverty-alleviation",
    summary: "Supporting households facing financial hardship with food, seasonal essentials and need-based assistance delivered with dignity.",
    points: ["Family ration support", "Seasonal clothing and winter assistance", "Ramadan and Eid support"],
  },
  {
    slug: "youth",
    title: "Wash program & Climate Change Awareness",
    button: "/services/wash-program-&-climate-change-awareness",
    summary:
      "Improving access to safe water and promoting better hygiene, environmental responsibility and community awareness.",
    points: ["Hand pumps and water solutions", "Hygiene and safe-water awareness", "Tree plantation and climate awareness"],
  },
  {
    slug: "medical",
    title: "Disability Care, Support & Rehabilitation",
    button: "/services/disability-care-support-&-rehabilitation",
    summary:
      "Supporting people with disabilities and their families through mobility assistance, referrals and practical inclusion-focused support.",
    points: ["Wheelchairs and mobility aids", "Rehabilitation guidance and referrals", "Family and community support"],
  },
  {
  slug: "workYouth",
  title: "Youth Empowerment & Community Development",
  button: "/services/youth-empowerment-&-Community-development",
  summary:
    "Giving young people opportunities to volunteer, learn, lead and contribute to the communities around them.",
  points: ["Leadership and mentoring", "Skills workshops", "Community service and engagement"],
  },
];

export const FAQS_GENERAL = [
  {
    q: "Where does We Own Pakistan Foundation work?",
    a: "WOPF currently focuses much of its field work in Sindh, with activities undertaken according to community need, available resources and volunteer capacity. Locations displayed publicly should reflect current, documented operations.",
  },
  {
    q: "How is my donation used?",
    a: "Donations are directed to the program or purpose selected by the donor, where designated. General contributions support approved welfare activities according to current needs. WOPF should maintain donation and expenditure records so that funds can be accounted for responsibly.",
  },
  {
    q: "Can I donate Zakat to WOPF?",
    a: "Yes, WOPF may accept Zakat for eligible beneficiaries and qualifying activities. Zakat contributions should be separately identified and used only for eligible purposes under the Foundation’s approved procedures. Donors may contact the team to confirm current Zakat-eligible programs.",
  },
  {
    q: "Do you provide proof of distribution?",
    a: "WOPF aims to document field activities through appropriate records such as distribution counts, locations, photographs and beneficiary records. The type of evidence available may vary by program and should always respect beneficiary dignity and privacy.",
  },
  {
    q: "How can I volunteer?",
    a: "Complete the volunteer enquiry form or contact the WOPF team. Volunteers can support field distributions, medical camps, education and youth activities, logistics, communications and other areas depending on current requirements.",
  },
];

export const FAQS_ORG = [
  {
    q: "Is WOPF a registered non-profit organization?",
    a: "WOPF states that it is a registered non-profit welfare organization. The final website should display the official legal name, registration authority, registration number and any other status the organization is authorized to publish so that donors and partners can verify the claim independently.",
  },
  {
    q: "How are beneficiary families selected for support?",
    a: "Beneficiaries should be identified through referrals, field engagement and a documented assessment of need. The process should consider household circumstances and the purpose of the relevant program so that limited resources can be directed responsibly.",
  },
  {
    q: "How can I track where my donation is being used?",
    a: "For designated contributions, WOPF should record the program or purpose selected by the donor and maintain supporting activity and expenditure records. Donors seeking information about a contribution may contact the team with the relevant payment or reference details.",
  },
  {
    q: "What types of projects does WOPF focus on?",
    a: "WOPF’s current program areas include health and medical support, humanitarian assistance and poverty alleviation, disaster and emergency relief, education and skills development, WASH and climate awareness, disability support and rehabilitation, and youth empowerment and community development.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Zubaida Bibi",
    role: "Ration beneficiary Dadu",
    quote:
      "After my husband passed away I had no way to feed four children. The foundation's ration pack arrives every month without me having to ask anyone for help.",
    proof: "Monthly ration 14 months continuous",
  },
  {
    name: "Allah Dino",
    role: "Village elder Tharparkar",
    quote:
      "Our women used to walk three kilometres for water. The hand pump WOPF installed is in our own settlement now. Children are healthier this year.",
    proof: "Hand pump installed, verified by village committee",
  },
  {
    name: "Sana Memon",
    role: "Student Hyderabad",
    quote:
      "The youth session changed how I think about my studies. I joined the free computer course afterwards and now teach two of my cousins.",
    proof: "Youth program graduate, batch of 42",
  },
  {
    name: "Dr. Faheem Shaikh",
    role: "Volunteer physician",
    quote:
      "We screened over three hundred patients in one day at the Thatta camp. Every medicine we prescribed was handed over free on the same table.",
    proof: "Medical camp 312 patients treated",
  },
];

export const TEAM = [
  { name: "Nadir Abbas", role: "Founder & Chairman", initials: "NA", image: nadirAbbas  , category: "board",},
  // { name: "Maheen Akhtar", role: "President", initials: "MA", image: maheenAkhtar },
  { name: "Ayax Hussain Solangi", role: "Vice President", initials: "AHS", image: ayaxHussain , category: "board", description: "As Vice President of WOPF, I play an active role in supporting organizational leadership, strategic planning, and community-focused initiatives. I work closely with the executive team and volunteers to strengthen collaboration, expand our outreach, and turn WOPF’s vision into practical action. My contribution focuses on community development, volunteer engagement, partnerships, and creating sustainable social impact for underserved communities." },
  { name: "Muhammad Imran", role: "Senior Vice President", initials: "MI", image: muhammadImran , category: "board", description: "As Senior Vice President at WOPF, I am dedicated to driving initiatives that create real and lasting impact for communities in need. I work closely with our leadership to guide strategic decisions, foster strong internal collaboration, and build meaningful partnerships. My focus is on empowering our Executive Team and volunteers, strengthening our organizational structure, and developing sustainable projects that promote social well-being and create opportunities for positive change." },
  { name: "Tehreem Ali", role: "General Secretary", initials: "TA", image: tehreemAli , category: "executive", description: "As the General Secretary for our NGO, I take care of our daily office work, keep the board members connected, and make sure we follow all laws and rules. By organizing our work and building good relationships, I help turn our big plans into real results. I am fully dedicated to creating lasting change and helping the communities we serve."},
  { name: "Muhammad Sufyan", role: "General Secretary", initials: "MS", image: muhammadSufyan , category: "executive", },
  { name: "Huzmaan Pasta", role: "Operational Manager", initials: "HP", image: huzmaanPasta , category: "team", },
];

export const POSTS = [
  {
    slug: "ramadan-iftar-2026",
    title: "Ramadan 2026: 30 nights of dastarkhwan across Karachi",
    excerpt:
      "A night-by-night account of how volunteers set up street Iftar tables in six neighbourhoods and served thousands of plates.",
    category: "Ramadan",
    date: "12 March 2026",
    read: "5 min read",
  },
  {
    slug: "thar-water-crisis",
    title: "The long walk for water: what Thar taught our field team",
    excerpt:
      "Water scarcity is not only a shortage of water it is lost school days, lost income and lost health. Here is what we found on the ground.",
    category: "Water",
    date: "27 January 2026",
    read: "7 min read",
  },
  {
    slug: "youth-sessions-sindh",
    title: "Why we run motivational sessions in government schools",
    excerpt:
      "Talent is everywhere; opportunity is not. Our youth team explains the curriculum behind the sessions and what happens after them.",
    category: "Youth",
    date: "9 December 2025",
    read: "4 min read",
  },
  {
    slug: "medical-camp-thatta",
    title: "Inside a one-day free medical camp in Thatta",
    excerpt:
      "Twelve doctors, a pharmacy counter and 312 patients. A behind-the-scenes look at how a camp is planned and executed.",
    category: "Health",
    date: "18 November 2025",
    read: "6 min read",
  },
  {
    slug: "volunteer-story",
    title: "From donor to volunteer: Kashif's story",
    excerpt:
      "He started by sending a monthly contribution. Two years later he coordinates a network of ninety volunteers.",
    category: "Volunteers",
    date: "2 October 2025",
    read: "3 min read",
  },
  {
    slug: "transparency-report",
    title: "How we track every rupee from donation to distribution",
    excerpt:
      "Our transparency workflow receipts, beneficiary registers and photographic proof explained in plain language.",
    category: "Transparency",
    date: "15 September 2025",
    read: "5 min read",
  },
];

export const DONATION_TIERS = [
  { amount: "Rs 3,500", label: "One family ration pack", note: "Feeds a family of six for two weeks" },
  { amount: "Rs 7,000", label: "Iftar for 25 people", note: "A full dastarkhwan sitting" },
  { amount: "Rs 25,000", label: "Medical camp sponsorship", note: "Screening and medicine for 40 patients" },
  { amount: "Rs 60,000", label: "One hand pump", note: "Clean water for an entire settlement" },
];
