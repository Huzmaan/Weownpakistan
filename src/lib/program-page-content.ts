import type { FAQItem } from "@/lib/programs";

export type ProgramContentSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type ProgramPageContent = {
  metaTitle: string;
  metaDescription: string;
  bannerHeading: string;
  short: string;
  intro: string;
  points: string[];
  sections: ProgramContentSection[];
  faqs?: FAQItem[];
};

export const PROGRAM_PAGE_CONTENT: Record<string, ProgramPageContent> = {
  "health-medical-support/medicine-bank": {
    metaTitle: "Medicine Bank | We Own Pakistan Foundation",
    metaDescription:
      "Donate sealed, unexpired medicines to help patients in Sindh who cannot afford treatment. See what we accept and how the Medicine Bank works.",
    bannerHeading: "Medicine Bank",
    short: "The medicines in your cupboard could reach a patient who needs them this week.",
    intro:
      "Most homes keep leftover medicine. A course ends early, a doctor changes the dose, or a family member passes away and the boxes stay on the shelf. Many are still sealed and well within date. At the same time, patients with long-term conditions often skip doses or stretch one strip across two weeks because they cannot afford the next one.",
    points: [
      "We collect medicines from individuals and pharmacies, check and record them, then give them to patients with a doctor's prescription who cannot afford to fill it.",
      "A trained volunteer checks the seal, label and expiry date; anything doubtful is set aside and never given out.",
      "Every medicine is logged, and patients receive it only against a doctor's prescription.",
    ],
    sections: [
      {
        title: "What we accept",
        items: [
          "Sealed, unopened strips, bottles and boxes.",
          "Medicines with sufficient time before expiry for a patient to use them safely; please confirm the current minimum with our team.",
          "Original packaging with the label, batch number and expiry date clearly visible.",
          "Unopened basic supplies such as bandages, gloves and thermometers.",
        ],
      },
      {
        title: "What we cannot accept",
        items: [
          "Expired, opened or damaged medicines.",
          "Loose tablets without packaging.",
          "Controlled drugs, sedatives and narcotics.",
          "Medicines that need refrigeration unless you have arranged this with our team first.",
        ],
      },
      {
        title: "How it works",
        items: [
          "Donate: call or message us on WhatsApp to arrange a drop-off or ask whether volunteer pick-up is available in your area.",
          "Check: trained volunteers inspect the seal, label and expiry date. Items that raise any doubt are not distributed.",
          "Record: each accepted medicine is logged with its name, quantity and expiry date.",
          "Give: patients receive medicines only when they have a doctor's prescription.",
        ],
      },
      {
        title: "Who can receive medicines",
        paragraphs: [
          "Patients with a valid prescription who cannot afford treatment, especially people managing long-term conditions such as diabetes or high blood pressure. Our volunteers confirm details with the family before anything is given.",
        ],
      },
      {
        title: "How you can help",
        paragraphs: [
          "Donate unused medicines, fund the purchase of new ones, or give a few hours to help with sorting and record keeping.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I donate medicines that will expire soon?",
        a: "Please ask us first. A medicine needs enough time left to reach a patient and be used fully, so our team will confirm the current minimum expiry requirement.",
      },
      {
        q: "Is it safe to take medicine from a donation bank?",
        a: "Only items that pass our checks are given out, and only with a prescription. If we are unsure about a medicine, we do not use it.",
      },
      {
        q: "Can I collect medicine without a prescription?",
        a: "No. Every medicine we give is linked to a doctor's prescription.",
      },
    ],
  },
  "health-medical-support/medical-support": {
    metaTitle: "Free Medical Camps | We Own Pakistan Foundation",
    metaDescription:
      "Free medical camps in Sindh with doctors, health screening and basic medicines for families who cannot easily reach a clinic.",
    bannerHeading: "Free Medical Camps",
    short: "A doctor's consultation, close to home and free of charge.",
    intro:
      "Our medical camps are set up in neighbourhoods and villages where clinics are far away or too expensive. Patients walk in, see a doctor and leave with advice and, where possible, medicines. A camp does not replace a hospital: its job is to catch problems early and send serious cases to the right place.",
    points: [
      "Registration and basic screening, including the checks available at the camp.",
      "Consultation with a qualified doctor and basic medicines where available.",
      "Health talks and referrals for people who need further tests or treatment.",
    ],
    sections: [
      {
        title: "What happens at a camp",
        items: [
          "Registration: each patient's name, age and complaint is noted at the entrance.",
          "Basic screening: checks such as blood pressure, blood sugar and weight are offered as available.",
          "Consultation: a qualified doctor examines the patient and explains the next step.",
          "Medicines: basic medicines are given from the camp pharmacy where available.",
          "Health talks: short sessions cover hygiene, safe drinking water, and mother and child health.",
          "Referral: patients who need further tests or treatment are guided to a suitable hospital.",
        ],
      },
      {
        title: "How we organise a camp",
        items: [
          "Choose an area where access to healthcare is poor, usually after speaking with local residents.",
          "Arrange doctors, medicines, seating, water and volunteers, and let the community know the date.",
          "Volunteers manage queues and give priority to women, older people and young children.",
          "Record patients seen and keep notes on cases referred for follow-up.",
        ],
      },
      {
        title: "Who can come",
        paragraphs: [
          "Anyone from the area can attend. Older people, women, children and patients with ongoing conditions are seen first. Bring old prescriptions or test reports if you have them.",
        ],
      },
      {
        title: "How you can help",
        paragraphs: [
          "Fund a camp, donate medicines, or volunteer at the registration desk, pharmacy table or entry gate.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it really free?",
        a: "Yes. Consultation and the medicines available at the camp are free of charge.",
      },
      {
        q: "Where is the next camp?",
        a: "Contact us for the latest camp dates and locations.",
      },
    ],
  },
  "humanitarian-support-&-poverty-alleviation/monthly-ration": {
    metaTitle: "Monthly Ration Program | We Own Pakistan Foundation",
    metaDescription:
      "A monthly ration pack for families in hardship across Sindh. See how families are selected, what the pack contains and how to sponsor one.",
    bannerHeading: "Monthly Ration Program",
    short: "One month of food for one family, delivered on time and without a crowd.",
    intro:
      "The hardest weeks are often the ordinary ones. There is no festival and no emergency, only a flour bin that is nearly empty and wages that have not arrived. A steady monthly pack removes one worry and lets a family spend its small income on rent, school and medicine.",
    points: [
      "A typical pack includes flour, rice, cooking oil, sugar, lentils and tea; contents and quantities are confirmed for each drive.",
      "Families are referred, visited and registered before receiving a fixed monthly delivery date.",
      "Home delivery or timed collection helps avoid unsafe crowds; families are reviewed from time to time.",
    ],
    sections: [
      {
        title: "How a family joins the program",
        items: [
          "Referral: families reach us through volunteers, neighbours and community contacts. You can also call to suggest a family.",
          "Home visit: a volunteer notes household size, income source and relevant circumstances and explains the program.",
          "Registration: eligible families are entered in our register and given a fixed date each month.",
          "Delivery: packs go to the home or are collected at a set time with a token; we do not call large groups together.",
          "Review: we revisit families. If circumstances improve, support can move to another family; if they do not, help can continue.",
        ],
      },
      {
        title: "Who we prioritise",
        items: [
          "Widows and older people living alone.",
          "Daily-wage households and families with a seriously ill member.",
          "Households led by a child or a person with a disability.",
        ],
      },
      {
        title: "Sponsor a family",
        paragraphs: [
          "Contact us for the current cost of one family's ration for a month. You can sponsor one month or arrange a regular monthly contribution.",
          "Zakat is recorded separately from other donations and assigned only to families who qualify.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I choose which family I sponsor?",
        a: "We do not share family details, to protect their privacy. Our team matches your contribution to a registered family.",
      },
      {
        q: "Will I see where my money went?",
        a: "We share distribution updates and can provide a short summary of how your contribution was used.",
      },
      {
        q: "Can I deliver the ration myself?",
        a: "You are welcome to join a distribution day as a volunteer. Please contact us first so we can plan safely.",
      },
    ],
  },
  "humanitarian-support-&-poverty-alleviation/ramadan-ration-iftar": {
    metaTitle: "Ramadan Ration & Iftar | We Own Pakistan Foundation",
    metaDescription:
      "Ramadan ration packs and Iftar meals for families in Sindh. See how the drive works and how to give.",
    bannerHeading: "Ramadan Ration & Iftar",
    short: "So that no family starts a fast with an empty kitchen.",
    intro:
      "Food costs more in Ramadan, while a daily-wage family's income may stay the same or drop. The Ramadan drive has two parts: ration packs before the month begins, and Iftar meals during it.",
    points: [
      "Ration packs are planned and delivered before Ramadan; contents are confirmed with each drive.",
      "Iftar meals are served at planned locations and delivered to people who cannot travel.",
      "Advance registration, tokens, time slots and volunteer marshals help keep distributions orderly and safe.",
    ],
    sections: [
      {
        title: "Ramadan ration packs",
        paragraphs: [
          "Packs are delivered in the weeks before Ramadan so families can stock up. They include staples such as flour, rice, cooking oil, sugar, lentils and dates; the final contents and quantities are confirmed for each drive.",
        ],
      },
      {
        title: "Iftar meals",
        paragraphs: [
          "During Ramadan, Iftar is served at planned locations and delivered to people who cannot travel, such as older people and patients. Volunteers help prepare, pack and distribute meals.",
        ],
      },
      {
        title: "How we keep distribution safe and orderly",
        items: [
          "Families are registered in advance and receive a token with a time slot.",
          "Separate lines are arranged for women, older people and children.",
          "Volunteer marshals manage sites; people are not gathered in one large crowd.",
          "Homes are visited directly for people who cannot come out.",
        ],
      },
      {
        title: "Who we help and how to volunteer",
        paragraphs: [
          "We support families registered through home visits and community contacts, as well as travellers, labourers and others who need an Iftar meal that day.",
          "Volunteers can help with packing, cooking support, token and queue management, and delivery. Contact us early so the team can plan the drive.",
          "Zakat is recorded separately and given only to eligible families. Contact us for current sponsorship options and costs.",
        ],
      },
    ],
  },
  "disaster-&-emergency-relief/emergency-kits": {
    metaTitle: "Emergency Food & Water Kits | We Own Pakistan Foundation",
    metaDescription:
      "Ready-to-use food and drinking water kits for families affected by floods, storms and other emergencies in Sindh.",
    bannerHeading: "Emergency Food & Water Kits",
    short: "Food and safe water for a family, ready to leave when help is needed.",
    intro:
      "In the first days after a flood or storm, many families have no working stove, fuel or safe water. A bag of raw flour is not enough; an emergency kit is planned so a family can eat and drink the same day it arrives.",
    points: [
      "Sealed drinking water and ready-to-eat food such as dates, biscuits and roasted chickpeas.",
      "Dry ration for cooking when a family has a stove, water purification tablets and soap.",
      "Supplies are checked and recorded as they are delivered to affected households.",
    ],
    sections: [
      {
        title: "How a kit reaches a family",
        items: [
          "Alert: a volunteer or local contact reports that a community needs help.",
          "Check: confirm the number of affected families and whether road or boat routes are open.",
          "Dispatch: load kits and send them with a volunteer team.",
          "Hand over: record each household so families are not missed or counted twice.",
          "Report: record where kits were delivered and how many families received them.",
        ],
      },
      {
        title: "A note on drinking water",
        paragraphs: [
          "Flood water is not safe to drink, even when it looks clear. Use sealed water, boil water for at least one minute, or treat it with purification tablets.",
        ],
      },
      {
        title: "Who receives kits and how you can help",
        paragraphs: [
          "Kits are for families who have been displaced, cut off by water, or lost food stocks and cooking supplies in an emergency.",
          "Contact us for current kit costs. You can fund kits, help pack them, or tell us about a community that needs help by calling +92 300 817 5519.",
        ],
      },
    ],
  },
  "disaster-&-emergency-relief/flood-relief": {
    metaTitle: "Flood Relief | We Own Pakistan Foundation",
    metaDescription:
      "Food, safe water, shelter items and recovery support for families affected by floods in Sindh. See how our flood response works and how to help.",
    bannerHeading: "Flood Relief",
    short: "Help for families when the water comes, and for the long weeks after it leaves.",
    intro:
      "The danger does not end when flood water drops. Standing water brings disease, while families return to damaged homes, ruined crops and lost income. In the 2022 floods, about 33 million people in Pakistan were affected and more than 2.3 million homes were damaged or destroyed, according to the UN OCHA final report.",
    points: [
      "First days: emergency food, safe drinking water, shelter items and basic hygiene supplies.",
      "First weeks: ration packs, safe-water awareness and medical camps where teams and supplies are available.",
      "Recovery: household restocking, clean-water solutions and identification of families needing longer-term assistance.",
    ],
    sections: [
      {
        title: "How we work during a flood",
        paragraphs: [
          "Volunteers carry out the response and record each household helped, along with the date and place of each distribution. Local contacts help identify areas that are not already being served.",
        ],
      },
      {
        title: "How you can help",
        items: [
          "Donate: cash lets the team buy what is needed close to the affected area.",
          "Volunteer: packing and delivery teams are needed during an emergency.",
          "Tell us: call +92 300 817 5519 if you know a village or neighbourhood that has not received help.",
        ],
      },
    ],
  },
  "education-&-skills-development/school-fee-support": {
    metaTitle: "School Fee Support | We Own Pakistan Foundation",
    metaDescription:
      "We help low-income families in Sindh keep their children in school by covering or sharing school fees. Learn who qualifies and how to sponsor a child.",
    bannerHeading: "School Fee Support",
    short: "No child should leave school because of one unpaid fee.",
    intro:
      "A family can manage on a tight budget for months, then one illness or lost job changes everything. A school fee is often the first thing to go unpaid. A child falls behind, stops attending, and it becomes hard to return. Supporting a child at the right moment is much easier than trying to bring them back a year later.",
    points: [
      "Monthly tuition fees, and admission or exam fees where needed.",
      "Books, stationery and uniforms may be supported when funds allow.",
      "Where possible, fees are paid directly to the school and attendance is followed up.",
    ],
    sections: [
      {
        title: "How it works",
        items: [
          "Application: a parent or guardian contacts us, or a volunteer or teacher refers the child.",
          "Visit and verification: meet the family and check the child's school and class.",
          "Approval: decide how much support the family needs; support may cover all or part of the fee.",
          "Payment: where possible, pay the school directly for the child's education.",
          "Follow-up: check attendance and results during the year and speak with parents if the child is struggling.",
        ],
      },
      {
        title: "Who qualifies and privacy",
        paragraphs: [
          "Children from low-income families who are enrolled or ready to enrol and are at risk of leaving because of fees. Priority goes to orphans, children of widows and children whose family income has dropped suddenly.",
          "We do not share a child's name or photo publicly without written consent, and we do not tell classmates about the support.",
        ],
      },
      {
        title: "Sponsor a child",
        paragraphs: [
          "Contact us to discuss sponsoring a child's fees for a term or a full year. We match sponsors with children and protect each family's privacy.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I choose the child I sponsor?",
        a: "We match sponsors with children and protect the family's privacy. We can tell you about the child's age group and class level.",
      },
      {
        q: "Do you support private schools?",
        a: "We support children in schools that are suitable for them and affordable to sustain. Contact us to discuss the school criteria.",
      },
    ],
  },
  "education-&-skills-development/computer-it-skills": {
    metaTitle: "Computer & IT Skills Training | We Own Pakistan Foundation",
    metaDescription:
      "Practical computer and IT training for young people in Karachi and Sindh who want to build skills for work, study or freelancing.",
    bannerHeading: "Computer & IT Skills",
    short: "Practical digital skills for young people who want to work, study or earn online.",
    intro:
      "Many jobs ask for computer knowledge, and more people earn from home through online work. But young people in low-income areas may finish school without having used a computer or being able to show employers basic digital skills. This program gives them a place to learn.",
    points: [
      "Computer basics and typing.",
      "Word processing, spreadsheets, internet, email and online safety.",
      "CV writing, online job applications and an introduction to freelancing and online earning.",
    ],
    sections: [
      {
        title: "How a course runs",
        paragraphs: [
          "Courses run in small groups so each student has time to practise. Contact the team for the next batch, course duration, location and currently available subjects.",
        ],
      },
      {
        title: "Who can join and how to apply",
        paragraphs: [
          "Young people from low-income families who have finished or are still in school may ask about current eligibility and course places. Women and girls are welcome.",
          "Call or message us on WhatsApp with your name, age and education. The team will share next-batch dates. Bring your CNIC or B-form on the first day.",
        ],
      },
      {
        title: "How you can help",
        paragraphs: [
          "Fund a student's place, donate a laptop or desktop in working condition, or volunteer as an instructor.",
        ],
      },
    ],
  },
  "education-&-skills-development/career-guidance": {
    metaTitle: "Career Guidance and Mentoring | We Own Pakistan Foundation",
    metaDescription:
      "Mentoring, career advice and CV support for students and young graduates in Sindh who need direction after school or university.",
    bannerHeading: "Career Guidance",
    short: "Honest advice for students deciding what to study and where to work.",
    intro:
      "Many students choose a subject because a relative did, or because it was the only option their school offered. Few have met someone who works in the field they are considering. A clear plan and a few good conversations can help a young person make better decisions.",
    points: [
      "One-to-one mentoring on goals, strengths and next steps.",
      "Group talks on subject choices, admissions and scholarships.",
      "CV writing, interview preparation, job and internship applications, and information on skill pathways.",
    ],
    sections: [
      {
        title: "How it works",
        items: [
          "Meet: the student shares interests, marks and circumstances with a mentor or coordinator.",
          "Plan: list realistic options, including costs and timelines.",
          "Prepare: work on applications, a CV or a skills course.",
          "Check in: the mentor follows up and adjusts the plan as things change.",
        ],
      },
      {
        title: "Who can join",
        paragraphs: [
          "Students in the last years of school, college and university students, and recent graduates. Priority goes to those from low-income families who do not have anyone to ask for advice.",
        ],
      },
      {
        title: "Become a mentor",
        paragraphs: [
          "If you work in a profession and can give an hour or two a month, contact us. Doctors, engineers, teachers, accountants, designers and business owners are especially welcome. We match mentors with students and provide a briefing before they begin.",
        ],
      },
    ],
  },
  "wash-program-&-climate-change-awareness/clean-water-hand-pumps": {
    metaTitle: "Clean Drinking Water & Hand Pumps | We Own Pakistan Foundation",
    metaDescription:
      "Fund a hand pump that gives families in rural Sindh a nearby source of drinking water. See how sites are chosen and reported.",
    bannerHeading: "Clean Drinking Water & Hand Pumps",
    short: "One hand pump can give a neighbourhood a nearby source of drinking water.",
    intro:
      "In many settlements, families collect water from open ponds, shallow wells or tankers. Water can look fine and still carry bacteria. Women and girls usually do the fetching, and a long walk twice a day means less time for school, work and rest.",
    points: [
      "Install hand pumps in communities without a safe water source nearby.",
      "Choose a site that is accessible and away from drains and toilets.",
      "Hand the facility over to the community with basic care guidance and a local contact.",
    ],
    sections: [
      {
        title: "How a pump gets built",
        items: [
          "Survey: visit the community and learn where families currently get water.",
          "Site choice: choose a spot that is easy to reach and away from drains and toilets.",
          "Water check: confirm what water-quality checks are available before handover.",
          "Installation: a local contractor builds the pump while the team supervises.",
          "Handover and report: explain basic care, identify a local contact, and record the location, date and expected users.",
        ],
      },
      {
        title: "Where we install and sponsor a hand pump",
        paragraphs: [
          "We prioritise villages and settlements in Sindh without a safe drinking-water source, and areas where floods damaged existing wells or pumps. Contact us for current project costs and details.",
          "The community looks after the pump with our guidance. We can share a short report with the installation location and photographs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who looks after the pump after it is built?",
        a: "The community does, with our guidance. We explain basic care at handover and keep in touch with the local contact person.",
      },
      {
        q: "Can I see where my pump was installed?",
        a: "Yes. We can share a short report with the location and photographs.",
      },
    ],
  },
  "wash-program-&-climate-change-awareness/climate-plantation": {
    metaTitle: "Tree Plantation & Climate Action | We Own Pakistan Foundation",
    metaDescription:
      "Join tree-planting drives and climate awareness sessions in Sindh. We plant suitable local trees and look after them as they grow.",
    bannerHeading: "Tree Plantation & Climate Action",
    short: "Plant it, water it, and stay with it until it stands on its own.",
    intro:
      "Trees give shade, cool the air around them and help soil hold water. Planting is the easy part: a tree that is not watered and protected in its first two summers may die. Our program focuses on care as well as planting.",
    points: [
      "Plant trees in schools, mosques, parks, graveyards and along streets with permission.",
      "Arrange tree guards and watering, and check on trees during the first years.",
      "Run short sessions on heat safety, saving water and reducing plastic waste.",
    ],
    sections: [
      {
        title: "Which trees we plant",
        paragraphs: [
          "We choose native, drought-tolerant trees that suit the local climate, and avoid trees likely to draw too much water or damage drains and pipes. Contact the team for current species used.",
        ],
      },
      {
        title: "How a drive works",
        items: [
          "Pick the site and agree on the place and number of trees with the school, mosque or local committee.",
          "Prepare saplings, tree guards and a watering plan.",
          "Plant with volunteers and local residents.",
          "Arrange ongoing watering and record how many trees survive.",
        ],
      },
      {
        title: "How you can help",
        paragraphs: [
          "Sponsor a tree and its care, adopt a site with a school or neighbourhood group, or volunteer on a plantation day or awareness session.",
        ],
      },
    ],
  },
  "disability-care-support-&-rehabilitation/family-support": {
    metaTitle: "Family Support for Special Needs | We Own Pakistan Foundation",
    metaDescription:
      "Guidance, referrals and practical help for families in Sindh who care for a child or adult with a disability.",
    bannerHeading: "Family Support for Special Needs",
    short: "Caring for someone with a disability is hard to do alone. Families should not have to.",
    intro:
      "When a child is born with a disability or an adult is injured, family life can change overnight. Savings go on tests and travel, one parent may stop working, and families can feel isolated. Many need information, practical support and someone to ask.",
    points: [
      "Information about available services and help taking the first step.",
      "Referrals to doctors, therapists and organisations that specialise in a person's condition.",
      "Home visits, practical support and community awareness to encourage inclusion.",
    ],
    sections: [
      {
        title: "How it works",
        items: [
          "First contact: a family calls us or a volunteer or neighbour refers them.",
          "Visit: meet the family at home and listen to their needs.",
          "Plan: agree on the most urgent next step, such as therapy, a wheelchair or a school place.",
          "Follow up: stay in touch and help with the next step when needed.",
        ],
      },
      {
        title: "Who we help and privacy",
        paragraphs: [
          "Families caring for a child or adult with a physical, hearing, visual or intellectual disability, with priority for those on low incomes.",
          "Family details are kept confidential. Names, photographs and medical information are not shared without written permission.",
        ],
      },
      {
        title: "How you can help",
        paragraphs: [
          "Volunteer for home visits, offer professional time as a doctor or therapist, or support a family's therapy and transport costs.",
        ],
      },
    ],
  },
  "disability-care-support-&-rehabilitation/special-children-support": {
    metaTitle: "Special Children Support & Mobility | We Own Pakistan Foundation",
    metaDescription:
      "Wheelchairs and mobility aids for people with disabilities in Sindh, with support to include children in school and community life.",
    bannerHeading: "Special Children Support & Mobility",
    short: "A wheelchair can be the difference between a child staying home and going to school.",
    intro:
      "A child who cannot walk and has no wheelchair depends on being carried, usually by a parent. Going to school, a clinic or a relative's house becomes difficult. A suitable mobility aid can give the child more independence and the parent some time back.",
    points: [
      "Wheelchairs for children and adults, plus mobility aids where available.",
      "Rehabilitation and therapy guidance, with referrals where needed.",
      "Help to enrol children with special needs in a suitable school or learning centre.",
    ],
    sections: [
      {
        title: "What we provide",
        items: [
          "Wheelchairs for children and adults.",
          "Walkers, crutches and other mobility aids; ask the team what items are currently available.",
          "Guidance on rehabilitation and therapy, with referrals where needed.",
          "Help to enrol children with special needs in a suitable school or learning centre.",
        ],
      },
      {
        title: "How it works",
        items: [
          "Request: a family, school or volunteer contacts us about a child or adult who needs a mobility aid.",
          "Assessment: a volunteer visits, speaks with the family and notes the person's age, size, condition and the surfaces where the aid will be used. A therapist or trained person helps with the fit where possible.",
          "Provision: supply a suitable aid and show the family how to use and look after it.",
          "Follow-up: check back after a few weeks and review whether the aid still fits as a child grows.",
        ],
      },
      {
        title: "Who can request support",
        paragraphs: [
          "Children and adults with mobility disabilities from low-income families. Priority goes to children who need an aid to attend school.",
        ],
      },
      {
        title: "Donate a used mobility aid",
        paragraphs: [
          "If you have a wheelchair, walker or commode chair in good working condition that is no longer in use, contact us. Our team will check it and match it with someone who needs it.",
        ],
      },
      {
        title: "How you can help",
        paragraphs: [
          "Contact us to fund a wheelchair, sponsor a child's aid, volunteer for home visits, help a child get to school or donate a used mobility aid in good condition.",
        ],
      },
    ],
  },
  "youth-empowerment-&-Community-development/youth-volunteer": {
    metaTitle: "Youth Volunteer Program | We Own Pakistan Foundation",
    metaDescription:
      "Volunteer with We Own Pakistan in Karachi. Help with ration packing, field distribution, medical camps and school sessions.",
    bannerHeading: "Youth Volunteer Program",
    short: "Give a few hours a month and we will place you where you are needed most.",
    intro:
      "Our work depends on people who turn up. Depending on the day and season, volunteers help prepare supplies, support field distributions and medical camps, or take part in education and community activities. No experience is needed; a coordinator explains the work and pairs new volunteers with experienced people.",
    points: [
      "Pack and prepare ration, kits and supplies before activities.",
      "Join a supervised distribution team or support registration, patient flow and queues at medical camps.",
      "Help with mentoring, school sessions and community learning activities.",
    ],
    sections: [
      {
        title: "How it works",
        items: [
          "Sign up: call or message us, or use the Get Involved form. Share your name, age, area and availability.",
          "Orientation: a coordinator explains how we work and how to treat the families we meet.",
          "First activity: join a team with a coordinator beside you.",
          "Regular role: find a role that suits your time and interests.",
        ],
      },
      {
        title: "Our volunteer code",
        items: [
          "Treat every family with respect and patience.",
          "Do not photograph or film beneficiaries unless the coordinator confirms they have agreed.",
          "Never collect or handle cash for the foundation on your own.",
          "Follow the team leader's instructions, especially during distributions.",
        ],
      },
      {
        title: "Who can volunteer and what you gain",
        paragraphs: [
          "Students and adults can ask about current age requirements. Volunteers under 18 need written permission from a parent or guardian. You can volunteer alone, with friends, or as a group from a school, university or workplace.",
          "There is no fixed minimum commitment; even a few hours a month helps. Ask the team whether references or certificates are currently available.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many hours do I need to give?",
        a: "There is no fixed minimum. Even a few hours a month helps, and we will not ask for more than you can offer.",
      },
      {
        q: "Can my company or university send a group?",
        a: "Yes. Group volunteering works well for packing days and plantation drives. Contact us to plan a date.",
      },
    ],
  },
  "youth-empowerment-&-Community-development/internship-program": {
    metaTitle: "Internship Program | We Own Pakistan Foundation",
    metaDescription:
      "Apply for an internship with We Own Pakistan in Karachi. Gain experience in field operations, communications, documentation and community projects.",
    bannerHeading: "Internship Program",
    short: "Real work, real responsibility and a supervisor who will teach you.",
    intro:
      "Our internship is for students and fresh graduates who want experience in the non-profit sector. Interns are part of the team, work on live projects, attend field activities and complete tasks the foundation uses.",
    points: [
      "Field operations: help plan distributions, manage volunteers, keep beneficiary records and report on activities.",
      "Communications and documentation: prepare responsible updates, activity reports, case summaries and research notes.",
      "Fundraising and program support: help prepare donor updates and support education, health and WASH teams.",
    ],
    sections: [
      {
        title: "What you will gain",
        items: [
          "Hands-on experience you can describe clearly in interviews.",
          "A supervisor who reviews your work and gives feedback.",
          "Exposure to how a welfare organisation plans, funds and reports its work.",
          "Ask the team about current certificate and recommendation-letter arrangements.",
        ],
      },
      {
        title: "Details and who can apply",
        paragraphs: [
          "Duration, time commitment, location and stipend arrangements depend on the current placement. Contact us to confirm what is available.",
          "Students in their final years of college or university and recent graduates may apply. Reliability, clear communication and comfort working with people from all backgrounds matter.",
        ],
      },
      {
        title: "How to apply",
        paragraphs: [
          "Send your CV and a short note about why you want to join to info@weownpakistan.org. Write “Internship” and your preferred area in the subject line. The team will contact shortlisted candidates for a short conversation.",
        ],
      },
    ],
  },
  "youth-empowerment-&-Community-development/community-leadership": {
    metaTitle: "Community Leadership Training | We Own Pakistan Foundation",
    metaDescription:
      "Workshops that teach young people in Karachi and Sindh how to organise, lead and carry out welfare projects in their neighbourhoods.",
    bannerHeading: "Community Leadership Training",
    short: "Every neighbourhood has someone who gets things done. We help them do it well.",
    intro:
      "In almost every street there is a young person who organises an event, collects money for a neighbour's surgery or knows which family needs help. These people already lead. They often need a method for planning projects, keeping honest records, managing volunteers and avoiding common mistakes. Our training gives them that method.",
    points: [
      "Find a community need by listening to residents and choosing a problem worth solving.",
      "Plan a project with a goal, budget, timeline and clear roles.",
      "Lead a team, keep records, respect privacy and communicate clearly.",
    ],
    sections: [
      {
        title: "What the training covers",
        items: [
          "Finding the need: survey a community, listen to residents and choose a problem worth solving.",
          "Planning a project: set a goal, budget, timeline and roles.",
          "Leading a team: manage volunteers, resolve disagreements and keep people motivated.",
          "Honest records: keep accounts and beneficiary records that others can check.",
          "Working with dignity: respect the privacy and wishes of people receiving help.",
          "Communication: speak clearly and respectfully with families, local leaders and donors.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "Workshops are led by experienced coordinators and guest trainers. Each participant finishes with a small project plan for their neighbourhood. Participants who are ready can begin with advice and, where possible, support from the foundation.",
          "Contact us for the next workshop's schedule, duration, group size, location and certificate details.",
        ],
      },
      {
        title: "Who can join and how to apply",
        paragraphs: [
          "Young people from or near the communities we serve who are ready to give regular time to a local project may apply. Volunteers from our own teams are encouraged.",
          "Call or message us on WhatsApp with your name, age, area and a line about a neighbourhood problem you would like to work on. We will share details of the next workshop.",
        ],
      },
      {
        title: "After the training",
        paragraphs: [
          "Graduates stay connected with coordinators for advice and can take on roles in foundation activities, such as leading a packing team or distribution route.",
        ],
      },
    ],
  },
};
