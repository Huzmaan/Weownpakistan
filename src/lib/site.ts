import nadirAbbas from "@/assets/team-members/nadirabbas.jpeg";
import maheenAkhtar from "@/assets/team-members/maheenakhtar.jpeg";
import ayaxHussain from "@/assets/team-members/ayaxhussain.jpeg";
import muhammadImran from "@/assets/team-members/muhammadimran.jpeg";
import tehreemAli from "@/assets/team-members/tehreemali.jpeg";
import muhammadSufyan from "@/assets/team-members/muhammadsufyan.jpeg";
import huzmaanPasta from "@/assets/team-members/huzmaanpasta.jpg";

/**
 * Central content/config for the WOPF site.
 * Keeping copy here keeps page components presentational and easy to hand off.
 */

export const SITE = {
  name: "We Own Pakistan Foundation",
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

export const SERVICE_PAGES = [
  { label: "Health & Medical Support", to: "/services/health-medical-support" },
  { label: "Humanitarian Support & Poverty Alleviation", to: "/services/humanitarian-support-&-poverty-alleviation" },
  { label: "Disaster & Emergency Relief" , to: "/services/disaster-&-emergency-relief"},
  { label: "Education & Skills Development" , to: "/services/education-&-skills-development"},
  { label: "Wash program & Climate Change Awareness" , to: "/services/wash-program-&-climate-change-awareness"},
  { label: "Disability Care, Support & Rehabilitation" , to: "/services/disability-care-support-&-rehabilitation"},
  { label: "Youth Empowerment & Community Development" , to: "/services/youth-empowerment-&-Community-development"},
] as const;

export const STATS = [
  { value: "4 Years", label: "Ramandan Drive" },
  { value: "50+", label: "Activites Completed" },
  { value: "100+", label: "Ration Distribution" },
  { value: "500+", label: "Active volunteers" },
];

export const SERVICES = [
  {
    slug: "Cloth",
    title: "Health & Medical Support",
    button: "/services/health-medical-support",
    summary: "Providing basic healthcare, free consultations, and life-saving medicines to underserved families and rural communities across Sindh.",
    points: ["Free medical camps & eye screening", "Essential medicines & diagnostic support", "Maternal care & basic health awareness"],
  },
  {
    slug: "iftar",
    title: "Humanitarian Support & Poverty Alleviation",
    button: "/services/humanitarian-support-&-poverty-alleviation",
    summary: "Distributing essential monthly groceries, warm clothing, and seasonal assistance to widows, daily-wage earners, and struggling households.",
    points: ["Monthly family ration packs", "Seasonal clothing & winter blankets", "Ramadan & Eid relief packages"],
  },
  {
    slug: "welfare",
    title: "Disaster & Emergency Relief",
    button: "/services/disaster-&-emergency-relief",
    summary: "Delivering immediate emergency aid, food, and temporary shelter to families affected by floods, harsh weather, and sudden crises.",
    points: ["Emergency food & clean water kits", "Flood response & temporary shelter aid", "Post-disaster rehabilitation support"],
  },
  {
    slug: "water",
    title: "Education & Skills Development",
    button: "/services/education-&-skills-development",
    summary:
      "Empowering young minds with basic schooling, career guidance, and practical technical skills to build sustainable livelihoods.",
    points: ["School fee support & stationery distribution", "Basic vocational & digital skills training", "Youth mentoring & career counseling"],
  },
  {
    slug: "youth",
    title: "Wash program & Climate Change Awareness",
    button: "/services/wash-program-&-climate-change-awareness",
    summary:
      "Installing clean drinking water facilities in drought-prone regions and spreading practical awareness about water hygiene and environmental protection.",
    points: ["Hand pump & filtration unit installation", "Water tanker supply in remote areas", "Tree plantation & climate awareness drives"],
  },
  {
    slug: "medical",
    title: "Disability Care, Support & Rehabilitation",
    button: "/services/disability-care-support-&-rehabilitation",
    summary:
      "Assisting individuals with special needs by offering mobility equipment, therapy referrals, and social inclusion opportunities.",
    points: ["Wheelchairs & mobility aid distribution", "Rehabilitation guidance & support", "Family assistance for special needs care"],
  },
  {
  slug: "youth",
  title: "Youth Empowerment & Community Development",
  button: "/services/youth-empowerment-&-Community-development",
  summary:
    "Engaging youth through leadership programs, skill workshops, and active community development projects for a better future.",
  points: ["Youth leadership & mentoring", "Skill-building workshops", "Community engagement drives"],
  },
];

export const FAQS_GENERAL = [
  {
    q: "Where does We Own Pakistan Foundation work?",
    a: "Our field teams operate across Sindh Karachi, Hyderabad, Dadu, Thatta and the drought-affected belts of Tharparkar with volunteer chapters growing in other provinces.",
  },
  {
    q: "How is my donation used?",
    a: "Donations are allocated directly to active field projects: ration packs, water access, medical camps and youth programs. Administrative overheads are kept deliberately low and are met through separate patron contributions.",
  },
  {
    q: "Can I donate Zakat to WOPF?",
    a: "Yes. Zakat funds are kept in a separate pool and disbursed only to Zakat-eligible recipients such as widows, orphans and families without income.",
  },
  {
    q: "Do you provide proof of distribution?",
    a: "Every drive is documented with photographs, beneficiary counts and location details, published on our Facebook page and shared with donors on request.",
  },
  {
    q: "How can I volunteer?",
    a: "Fill in the contact form or message us on Facebook. Volunteers help with packing, on-ground distribution, data collection and awareness sessions.",
  },
];

export const FAQS_ORG = [
  {
    q: "Is WOPF a registered non-profit organisation?",
    a: "Yes, We Own Pakistan Foundation (WOPF) is a fully registered non-profit organisation operating in compliance with local regulations and welfare standards.",
  },
  {
    q: "How are beneficiary families selected for support?",
    a: "Our field team conducts thorough ground checks and verification processes to identify and prioritise deserving families based on merit, need, and urgency.",
  },
  {
    q: "How can I track where my donation is being used?",
    a: "We maintain complete financial transparency. Regular project updates, impact reports, and media proof are shared on our platform and sent directly to our donors.",
  },
  {
    q: "What types of projects does WOPF focus on?",
    a: "We focus on sustainable community development, disaster relief, education, clean water initiatives, and healthcare support for underprivileged communities across Pakistan.",
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
  { name: "Nadir Abbas", role: "Founder & Chairman", initials: "NA", image: nadirAbbas },
  { name: "Maheen Akhtar", role: "President", initials: "MA", image: maheenAkhtar },
  { name: "Ayax Hussain Solangi", role: "Vice President", initials: "AHS", image: ayaxHussain },
  { name: "Tehreem Ali", role: "General Secretary", initials: "TA", image: tehreemAli },
  { name: "Muhammad Sufyan", role: "General Secretary", initials: "MS", image: muhammadSufyan },
  { name: "Muhammad Imran", role: "Youth Programs Lead", initials: "MI", image: muhammadImran },
  { name: "Huzmaan Pasta", role: "Operational Manager", initials: "HP", image: huzmaanPasta },
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
