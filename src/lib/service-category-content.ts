export type ServiceCategoryContent = {
  subheading: string;
  overviewTitle: string;
  overview: string[];
  highlights: { title: string; items: string[] };
  audience: string;
  approach: string[];
  waysToHelp: string;
};

export const SERVICE_CATEGORY_CONTENT: Record<string, ServiceCategoryContent> = {
  "health-medical-support": {
    subheading: "Basic healthcare, brought closer to families who find it hard to reach.",
    overviewTitle: "Care for people who cannot easily reach or afford a clinic.",
    overview: [
      "For many families, a visit to the doctor means losing a day's wages, and one prescription can cost more than a week of groceries. People wait, and a small illness turns into a serious one.",
      "Our health program takes doctors and volunteers into communities, collects suitable donated medicines, and helps patients who need hospital care find where to go next.",
    ],
    highlights: {
      title: "Other support we offer",
      items: [
        "Health awareness sessions on maternal and child health, hygiene, common illnesses and breast cancer.",
        "Help with essential diagnostic tests where funds allow, and referrals to hospitals and specialists.",
      ],
    },
    audience:
      "Low-income families, daily-wage workers, older people, women and children, especially in communities where the nearest clinic is far away or too expensive.",
    approach: [
      "Medical teams and volunteers provide support directly in the community.",
      "Medicines are checked and patients needing further care are referred to appropriate providers.",
      "Patient and activity records help the team follow up and report on its work.",
    ],
    waysToHelp:
      "Fund a medical camp, donate sealed and unexpired medicines, or volunteer at a registration desk or pharmacy table. Volunteers help manage queues, record patient details and keep things calm.",
  },
  "humanitarian-support-&-poverty-alleviation": {
    subheading: "Food and essentials for families who are struggling to get through the month.",
    overviewTitle: "Practical help, delivered quietly and respectfully.",
    overview: [
      "When prices rise, the poorest households feel it first. A daily-wage worker who loses a few days of work, a widow raising children alone, or an older couple without nearby support may need flour, rice and oil in the kitchen.",
      "This program provides need-based food and seasonal essentials, with care for each family's dignity and privacy.",
      "Our Ramadan drive has run for ten years and includes ration packs before the month and Iftar meals during it.",
    ],
    highlights: {
      title: "Other support",
      items: [
        "Warm clothes and blankets in winter, support for families at Eid, and one-time help in urgent cases after verification.",
      ],
    },
    audience:
      "Families facing financial hardship, with priority for widows, older people living alone, daily-wage households and families with a seriously ill member.",
    approach: [
      "Volunteers visit homes, speak with community contacts and record each family's situation.",
      "Distributions are planned so that help is delivered with respect and without unsafe crowds.",
      "Beneficiaries and distributions are documented; Zakat is recorded separately from general donations.",
      "A recipient's name or face is not published without consent.",
    ],
    waysToHelp:
      "Sponsor a family's ration for a month, give Zakat or Sadqa to a specific program, or volunteer on packing and distribution days.",
  },
  "disaster-&-emergency-relief": {
    subheading: "When a flood or storm takes everything, families need help with the basics first.",
    overviewTitle: "Support through the emergency and the recovery that follows.",
    overview: [
      "In 2022, floods affected around 33 million people across Pakistan, and Sindh suffered about 70 per cent of the total damage and losses, according to the UN OCHA final report. When an emergency strikes, families need clean water, food and a dry place to sleep before they need anything else.",
      "Our volunteers mobilise to get these essentials to people who are cut off or displaced, then help identify what families need as they recover.",
    ],
    highlights: {
      title: "What we provide",
      items: [
        "Emergency food and safe drinking water.",
        "Shelter and essential household items, such as tarpaulins, mats and blankets.",
        "Early recovery and rehabilitation support once the water goes down.",
      ],
    },
    audience:
      "Families displaced, cut off or otherwise affected by floods, severe weather and other emergencies in Sindh.",
    approach: [
      "Assess local needs through volunteers and community contacts.",
      "Prepare supplies and transport with people who know the affected area.",
      "Deliver directly to families and record who received what.",
    ],
    waysToHelp:
      "Cash is often the fastest way to help because supplies can be bought close to the affected area. You can also volunteer for packing and delivery, or report a community that needs help.",
  },
  "education-&-skills-development": {
    subheading: "Helping children stay in school and young people find their first step into work.",
    overviewTitle: "Support for learners at the point they need it.",
    overview: [
      "For many children, the reason for leaving school is not that their parents do not value education; a fee, uniform or bus fare is simply one expense too many. For young people who finish school, the next step can also be unclear.",
      "UNICEF estimates that 25.1 million children aged 5 to 16 are out of school in Pakistan. In Sindh, the figure is 7.4 million, or 44 per cent of children in that age group.",
      "Our education program works on both problems through school support, practical computer training and career guidance.",
    ],
    highlights: {
      title: "How we support learners",
      items: [],
    },
    audience:
      "Children from low-income families who are at risk of leaving school, and young people who want training or direction but cannot afford private courses or coaching.",
    approach: [
      "We speak to the family and the school before offering support.",
      "Where possible, fees are paid directly to the school.",
      "We check on progress and attendance and stay in touch with parents.",
    ],
    waysToHelp:
      "Sponsor a child's fees, fund a seat in a computer course, or become a mentor. A few hours a month of guidance can help a young person see the options in front of them.",
  },
  "wash-program-&-climate-change-awareness": {
    subheading: "Safe water, better hygiene and a greener neighbourhood.",
    overviewTitle: "Water, hygiene and care for the local environment.",
    overview: [
      "WASH stands for water, sanitation and hygiene. In many villages and settlements in Sindh, people rely on shallow wells, ponds or tankers of uncertain quality. Unsafe water can cause illness, while women and girls may spend hours fetching it.",
      "Our WASH program works on access to safe water, practical hygiene habits and care for the local environment.",
    ],
    highlights: {
      title: "Hygiene and safe-water awareness",
      items: [
        "Wash hands with soap at the right times.",
        "Store drinking water in clean, covered containers.",
        "Treat water when its source is doubtful.",
        "Keep toilets and drains clean.",
      ],
    },
    audience:
      "Villages and low-income settlements without a reliable safe water source, including communities whose water sources have been damaged by floods.",
    approach: [
      "Visit the community and speak with residents about how they currently get water.",
      "Choose sites where the need is clear and residents agree to look after the facility.",
      "Pair water access with practical hygiene and safe-water awareness.",
    ],
    waysToHelp:
      "Fund a hand pump, sponsor a tree-planting drive, or help run hygiene sessions. Contact us to discuss current needs and available projects.",
  },
  "disability-care-support-&-rehabilitation": {
    subheading:
      "Practical help so people with disabilities and their families can take part in daily life.",
    overviewTitle: "Mobility, guidance and support for people and families.",
    overview: [
      "In low-income families, disability can mean no wheelchair, no therapy within reach and a parent who has had to give up work to provide care. Many people stay inside because the world outside is not built for them.",
      "Our program provides mobility aids, guidance and support to people with disabilities and the families who care for them.",
    ],
    highlights: {
      title: "What we provide",
      items: [
        "Wheelchairs and other mobility aids.",
        "Rehabilitation and therapy guidance, specialist referrals, and links to education, training and community activities.",
        "Information about services and rights for people with disabilities and their families.",
      ],
    },
    audience:
      "Children and adults with physical, visual, hearing or intellectual disabilities from low-income families, and the relatives who care for them.",
    approach: [
      "Ask the person and family what they need before deciding what support to provide.",
      "Choose equipment to suit the person's needs and living environment.",
      "Refer cases that need specialist care to the appropriate centre.",
    ],
    waysToHelp:
      "Fund a wheelchair, donate a mobility aid in good condition, or volunteer to visit families and help them find services. If you know someone who needs support, call +92 300 817 5519.",
  },
  "youth-empowerment-&-Community-development": {
    subheading:
      "Young people are not only the future of a community. They are already doing its work.",
    overviewTitle: "A structured way for young people to serve, learn and lead.",
    overview: [
      "We Own Pakistan is volunteer-led, and many volunteers are young. They help pack ration, register patients at medical camps, support school sessions and plan distribution routes.",
      "This program makes that learning deliberate, with structured ways to serve, build experience and take on leadership.",
    ],
    highlights: {
      title: "What young people gain",
      items: [
        "Practical experience they can put on a CV.",
        "Mentoring from experienced volunteers and coordinators.",
        "Skills in teamwork, communication, planning and responsibility.",
        "A chance to understand their community and contribute to improving it.",
      ],
    },
    audience:
      "Students and young adults who are reliable and willing to learn. No previous experience is needed; we particularly welcome young people from the communities we serve.",
    approach: [
      "Young people choose a program and tell a coordinator about their interests and availability.",
      "Volunteers and interns work with a coordinator and receive guidance appropriate to their role.",
      "Activities build practical skills while contributing to community work.",
    ],
    waysToHelp:
      "Join as a volunteer, apply for an internship, or take part in community leadership training. Contact us and a coordinator will explain the next steps.",
  },
};
