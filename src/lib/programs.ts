import fallback from "@/assets/services/medical-hero.jpg";
import workRation from "@/assets/our-works/ramdan-drive/002.jpeg";
import workMedical from "@/assets/our-works/ramdan-drive/002.jpeg";
import workChildren from "@/assets/our-works/ramdan-drive/002.jpeg";
import workYouth from "@/assets/our-works/ramdan-drive/002.jpeg";
import heroFood from "@/assets/our-works/ramdan-drive/002.jpeg";
import heroIftar from "@/assets/our-works/ramdan-drive/002.jpeg";
import heroWater from "@/assets/our-works/ramdan-drive/002.jpeg";
import healthBanner from "@/assets/our-works/ramdan-drive/002.jpeg";
import healthOverview from "@/assets/our-works/ramdan-drive/002.jpeg";

export type FAQItem = {
  q: string;
  a: string;
};

export type StoryItem = {
  quote: string;
  name: string;
  role: string;
  image?: string;
};

export type Program = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  points: string[];
  image: string;
  eyebrow?: string;
  bannerHeading?: string;
  extraIntro?: string[];
  gallery?: string[];
  story?: StoryItem;
  faqs?: FAQItem[];
};

export type ServiceGroup = {
  slug: string;
  label: string;
  programs: Program[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  // 1. Health & Medical Support
  {
    slug: "health-medical-support",
    label: "Health & Medical Support",
    programs: [
      {
        slug: "medicine-bank",
        title: "Medicine Bank",
        eyebrow: "Health & Medical Support",
        bannerHeading: "Free Lifesaving Medicines for Underprivileged Patients",
        short: "Providing free monthly prescription medicines for chronic illnesses like diabetes, cardiac, and asthma across Sindh.",
        intro: "In remote areas and low-income communities of Sindh, poverty forces many patients to stop their daily life-saving medications. Through the WOPF Medicine Bank, registered patients receive verified, doctor-prescribed medicines free of cost every single month.",
        extraIntro: [
          "Our pharmacist team verifies medical prescriptions and coordinates with authorized pharmaceutical donors to ensure top-grade authentic medicines reach deserving families."
        ],
        points: [
          "Monthly prescription medicines for verified chronic patients",
          "Free insulin, cardiac, hypertension, and asthma kits",
          "Collection and medical screening of surplus medicines from trusted donors"
        ],
        image: healthBanner,
        gallery: [workMedical, healthOverview, healthBanner, fallback],
        story: {
          quote: "I was spending half my daily wage on blood pressure pills. WOPF Medicine Bank now delivers my monthly medicine at no charge, saving my family from debt.",
          name: "Ghulam Nabi",
          role: "Registered Patient, Thatta Sindh",
          image: healthOverview,
        },
        faqs: [
          {
            q: "Who is eligible to receive free medicines from the Medicine Bank?",
            a: "Deserving individuals suffering from chronic diseases who cannot afford recurring medical costs are verified through doctor prescriptions and our welfare assessment team."
          },
          {
            q: "Can I donate unused unexpired medicines?",
            a: "Yes! We accept sealed, unexpired medicines at our collection hubs. Our registered pharmacists inspect every pack before distributing."
          },
          {
            q: "Can Zakat be allocated specifically for Medicine Bank?",
            a: "Yes, 100% of your dedicated health Zakat goes towards purchasing prescription medicines directly for verified Mustahiq patients."
          }
        ],
      },
      {
        slug: "medical-support",
        title: "Free Medical Camps",
        eyebrow: "Health & Medical Support",
        bannerHeading: "Bringing Specialized Healthcare Directly to Remote Villages",
        short: "Qualified doctors, diagnostic tests, screening, and medicines delivered right inside neglected rural settlements.",
        intro: "Hundreds of remote villages across Sindh are located hours away from basic medical clinics. WOPF conducts multi-specialty mobile medical camps where general physicians, pediatricians, and gynecologists provide compassionate care on-site.",
        extraIntro: [
          "Patients receive on-spot diagnostic tests, free prescription drugs, eye screenings, and critical surgical referrals to trusted partner hospitals in Karachi and Hyderabad."
        ],
        points: [
          "Free comprehensive consultations by qualified medical specialists",
          "On-site diagnostic screening (Blood sugar, Hepatitis, Hb, Vitals)",
          "Free medicine distribution and emergency hospital referral network"
        ],
        image: workMedical,
        gallery: [workMedical, healthBanner, healthOverview, fallback],
        story: {
          quote: "The doctors in the WOPF camp examined my children with utmost care and provided all medications right here in our village without any fee.",
          name: "Mai Sabira",
          role: "Camp Beneficiary, Sujawal District",
          image: workMedical,
        },
        faqs: [
          {
            q: "How often does WOPF organize free medical camps?",
            a: "We conduct 2 to 3 dedicated medical camps each month across underserved rural tehsils in Sindh based on community health surveys."
          },
          {
            q: "Can volunteer doctors and paramedics join your medical camps?",
            a: "Absolutely. We welcome medical doctors, dentists, nurses, and students to join our active volunteer medical fleet."
          },
          {
            q: "What happens if a patient requires major surgery?",
            a: "Patients diagnosed with serious conditions during camps are enrolled into our Medical Referral Program for subsidized or fully sponsored hospital care."
          }
        ],
      },
    ],
  },

  // 2. Humanitarian Support & Poverty Alleviation
  {
    slug: "humanitarian-support-&-poverty-alleviation",
    label: "Humanitarian Support & Poverty Alleviation",
    programs: [
      {
        slug: "monthly-ration",
        title: "Monthly Ration Program",
        eyebrow: "Poverty Alleviation",
        bannerHeading: "Monthly Food Security for Widows and Impoverished Families",
        short: "Delivering complete nutritional ration packages directly to deserving households with zero breadwinners.",
        intro: "Rising inflation and economic hardship leave daily-wage laborers, widows, and elderly citizens without sufficient food. The WOPF Monthly Ration Program provides comprehensive grocery packages that sustain a family with dignity for a full month.",
        extraIntro: [
          "Each ration bag is packed with premium staple grains, pulses, cooking oil, tea, and hygiene items, delivered right to the beneficiary's doorstep to preserve their self-respect."
        ],
        points: [
          "Nutritious monthly grocery hampers for verified needy families",
          "Focus on widows, orphan households, and disabled breadwinners",
          "Transparent doorstep delivery avoiding crowded or humiliating queues"
        ],
        image: workRation,
        gallery: [workRation, heroFood, heroIftar, fallback],
        story: {
          quote: "Since my husband passed away, providing food for my three young children felt impossible. WOPF ration keeps my kitchen stove running every month.",
          name: "Parveen Bibi",
          role: "Mother & Ration Recipient, Badin",
          image: workRation,
        },
        faqs: [
          {
            q: "What items are included in one monthly ration pack?",
            a: "Each pack includes 20kg flour, 5kg basmati rice, 3 liters cooking oil, mixed lentils (daal), sugar, tea, salt, and essential bathing and washing soap."
          },
          {
            q: "How do you verify families for regular ration?",
            a: "Our field volunteers conduct physical home surveys, cross-check identity details, and evaluate household income before issuing a monthly ration card."
          },
          {
            q: "Can I sponsor one family's monthly ration on an ongoing basis?",
            a: "Yes! You can set up a recurring monthly donation or donate upfront for 3, 6, or 12 months for one or multiple families."
          }
        ],
      },
      {
        slug: "ramadan-ration-iftar",
        title: "Ramadan Ration & Iftar",
        eyebrow: "Ramadan Relief",
        bannerHeading: "Sharing Blessings and Hot Iftar With Fasting Communities",
        short: "Massive Ramadan food drives, Sehri & Iftar dastarkhwans, and special Eid gift distribution across Sindh.",
        intro: "During the holy month of Ramadan, WOPF expands its humanitarian reach by setting up daily hot Iftar dastarkhwans along highways and public hospitals, alongside pre-Ramadan grocery boxes for vulnerable families.",
        extraIntro: [
          "Before Eid-ul-Fitr, we also arrange new clothes, footwear, and Eidi gifts for thousands of orphan children so they celebrate Eid with equal joy."
        ],
        points: [
          "Full 30-day Ramadan food provisions delivered prior to the month",
          "Daily roadside and community Iftar dastarkhwans for thousands of fasting people",
          "Eid gifts and new dress packages for orphan children and widows"
        ],
        image: heroIftar,
        gallery: [heroIftar, workRation, heroFood, fallback],
        story: {
          quote: "Being a daily wage cart puller, eating a complete hot Iftar with dignity was a dream until I sat at the WOPF daily community dastarkhwan.",
          name: "Allah Dino",
          role: "Laborer, Hyderabad",
          image: heroIftar,
        },
        faqs: [
          {
            q: "When do Ramadan ration distributions begin?",
            a: "Distribution begins 10 days before Ramadan starts, ensuring families have stocked kitchens before the first day of fasting."
          },
          {
            q: "Can I sponsor an entire day of community Iftar dastarkhwan?",
            a: "Yes, individuals or corporate teams can sponsor full dastarkhwans providing fresh meals for 200 to 1,000 fasting individuals."
          },
          {
            q: "How can I contribute Fitrana and Eid gifts through WOPF?",
            a: "Fitrana and Eid funds can be donated anytime during Ramadan; our team distributes clothing and cash Eidi before the 28th of Ramadan."
          }
        ],
      },
    ],
  },

  // 3. Disaster & Emergency Relief
  {
    slug: "disaster-&-emergency-relief",
    label: "Disaster & Emergency Relief",
    programs: [
      {
        slug: "emergency-kits",
        title: "Emergency Food & Water Kits",
        eyebrow: "Disaster Response",
        bannerHeading: "Immediate Relief Kits for Calamity-Hit Communities",
        short: "Quick-response packages containing survival rations, purified drinking water, and first-aid kits delivered in the crucial first 48 hours.",
        intro: "When sudden fires, cyclones, or flash floods strike vulnerable settlements, affected families lose shelter, clean water, and cooking facilities instantly. WOPF emergency response units mobilize immediately with ready-to-consume food and hydration supplies.",
        extraIntro: [
          "Our rapid emergency packages require no cooking, helping families survive safely while coordinated rescue operations proceed."
        ],
        points: [
          "Emergency high-energy dry food packets and water cans",
          "Water purification tablets and basic wound-care medical aid",
          "Temporary waterproof tarpaulins and blankets"
        ],
        image: heroWater,
        gallery: [heroWater, heroFood, workRation, fallback],
        story: {
          quote: "When fire destroyed our makeshift huts, WOPF volunteers were the first to arrive with clean water cans and food packets that kept our children safe.",
          name: "Karamat Ali",
          role: "Disaster Survivor, Gharo",
          image: heroWater,
        },
        faqs: [
          {
            q: "How quickly does WOPF deploy relief during emergencies?",
            a: "Our field volunteers and stored relief reserves in regional centers enable initial response deployment within 12 to 24 hours of a disaster alert."
          },
          {
            q: "What does an emergency survival kit include?",
            a: "It includes 10 liters clean water, high-calorie dry biscuits/dates, roasted grams, rehydration salts, waterproof matchboxes, flashlights, and blankets."
          },
          {
            q: "Can overseas Pakistanis contribute directly to emergency disaster drives?",
            a: "Yes, we provide online banking and swift donation channels specifically earmarked for emergency response operations."
          }
        ],
      },
      {
        slug: "flood-relief",
        title: "Flood Relief",
        eyebrow: "Disaster Relief",
        bannerHeading: "Rescue, Dry Rations, Medical Aid, and Long-Term Rehabilitation",
        short: "Supporting flood-affected families from rescue and emergency camps to rebuilding homes and livelihood recovery.",
        intro: "Devastating seasonal floods frequently submerge entire districts across Sindh, displacing millions of villagers. WOPF works tirelessly on ground zero: rescuing stranded families, establishing clean water points, and setting up tent settlements.",
        extraIntro: [
          "After floodwaters recede, we assist farmers and daily earners with building materials and livestock support so they can reclaim their livelihood."
        ],
        points: [
          "Safe rescue operations and waterproof temporary family shelters",
          "Continuous hot meal kitchens and mobile water filtration rigs",
          "Rehabilitation grants for repairing damaged mud houses and roofs"
        ],
        image: heroWater,
        gallery: [heroWater, workMedical, workRation, fallback],
        story: {
          quote: "Our home was washed away by the river. WOPF provided us a dry tent, mosquito nets, and clean rations until we could rebuild.",
          name: "Haji Ramzan",
          role: "Farmer & Flood Survivor, Dadu District",
          image: heroWater,
        },
        faqs: [
          {
            q: "Which districts do your flood relief teams cover?",
            a: "We focus on the most severely affected tehsils in Dadu, Khairpur, Mirpurkhas, Thatta, and Badin districts."
          },
          {
            q: "Do you supply anti-venom and water-borne disease treatments?",
            a: "Yes, our mobile medical units carry cholera, malaria, gastro treatments, and life-saving anti-venom for flood-hit rural belts."
          },
          {
            q: "How do you ensure donations reach real flood victims?",
            a: "Every distribution is tracked with on-ground photographic evidence, CNIC records, and localized community committee verification."
          }
        ],
      },
    ],
  },

  // 4. Education & Skills Development
  {
    slug: "education-&-skills-development",
    label: "Education & Skills Development",
    programs: [
      {
        slug: "school-fee-support",
        title: "School Fee Support",
        eyebrow: "Education For All",
        bannerHeading: "Educational Scholarships So Deserving Students Never Drop Out",
        short: "Covering tuition fees, school bags, textbooks, and uniforms for hardworking children from impoverished backgrounds.",
        intro: "Financial crisis is the single biggest cause of school dropouts among poor children in Sindh. WOPF Education Scholarship steps in to pay school and college fees directly to institutions, ensuring young students stay on the path of learning.",
        extraIntro: [
          "We regularly monitor academic performance and reward high achievers, building motivation among students and their proud parents."
        ],
        points: [
          "Full or partial tuition fee sponsorships paid directly to verified schools",
          "Annual distribution of course books, notebooks, stationery, and uniforms",
          "Mentorship sessions to inspire continuous academic excellence"
        ],
        image: workChildren,
        gallery: [workChildren, workYouth, fallback, healthOverview],
        story: {
          quote: "My father is a daily wage laborer and could no longer pay my matric exam fees. WOPF scholarship allowed me to finish high school with top grades.",
          name: "Sanaullah",
          role: "Scholarship Student, Karachi",
          image: workChildren,
        },
        faqs: [
          {
            q: "How are students selected for school fee support?",
            a: "Selection is based on verified household need, family financial background, and the student's genuine enthusiasm for continuing education."
          },
          {
            q: "Do you sponsor higher education and university students?",
            a: "Yes, we have specialized sponsorship tracks for bright students entering diploma, technical colleges, and university degree programs."
          },
          {
            q: "Can I sponsor a specific child's education for an entire year?",
            a: "Yes, donors receive regular progress reports, exam results, and fee receipts for the specific child they sponsor."
          }
        ],
      },
      {
        slug: "computer-it-skills",
        title: "Computer & IT Skills",
        eyebrow: "Vocational Skills",
        bannerHeading: "Equipping Youth With Practical Digital Skills For Modern Jobs",
        short: "Free vocational IT training in basic computer literacy, graphic design, web basics, and digital freelancing.",
        intro: "In today's digital era, computer literacy opens doors to remote work and stable employment. WOPF operates community digital learning hubs providing youth from disadvantaged neighborhoods with hands-on computer education.",
        extraIntro: [
          "Graduates complete real-world projects and receive coaching on how to apply for freelance work and modern office administration jobs."
        ],
        points: [
          "Free courses in Computer Fundamentals, MS Office, and Internet tools",
          "Introduction to Graphic Design, Data Entry, and Freelance Platforms",
          "Course completion certificates and career placement support"
        ],
        image: workYouth,
        gallery: [workYouth, workChildren, fallback, healthBanner],
        story: {
          quote: "Learning computers at WOPF center enabled me to secure a remote data operator position. Now I contribute directly to my family's household expenses.",
          name: "Zeeshan Memon",
          role: "IT Skills Graduate, Tando Allahyar",
          image: workYouth,
        },
        faqs: [
          {
            q: "What is the duration of the IT training courses?",
            a: "Our core courses range from 8 weeks (Foundations) to 16 weeks (Advanced Freelancing and Office Automation)."
          },
          {
            q: "Are the courses open to both male and female students?",
            a: "Yes! We run separate timing batches for female students to ensure a safe, supportive, and comfortable learning environment."
          },
          {
            q: "Can IT companies or professionals donate refurbished laptops/computers?",
            a: "Yes, we actively welcome functional PCs, monitors, and laptops to expand student seats in our computer labs."
          }
        ],
      },
      {
        slug: "career-guidance",
        title: "Career Guidance",
        eyebrow: "Youth Mentorship",
        bannerHeading: "Guiding Students Towards High-Demand Careers and Opportunities",
        short: "Professional counselling, aptitude testing, university admission advice, and interview preparation for high schoolers.",
        intro: "Most young students in rural and semi-urban Sindh lack access to knowledgeable career counsellors. WOPF organizes interactive career guidance seminars led by industry professionals, doctors, and engineers to mentor the youth.",
        extraIntro: [
          "We demystify vocational training institutes, scholarship examinations, and job market trends so students can make informed life decisions."
        ],
        points: [
          "One-on-one career counselling sessions for matric and intermediate students",
          "Workshops on resume building, interview communication, and confidence",
          "Information desks for polytechnic colleges and scholarship opportunities"
        ],
        image: workYouth,
        gallery: [workYouth, workChildren, fallback, healthOverview],
        story: {
          quote: "The guidance seminar showed me how technical polytechnic diplomas lead to rapid employment. It completely transformed my career trajectory.",
          name: "Farhan Ali",
          role: "Diploma Student, Mirpurkhas",
          image: workYouth,
        },
        faqs: [
          {
            q: "Who can attend the WOPF career guidance workshops?",
            a: "High school students, college undergraduates, and job seekers from underprivileged backgrounds are welcome to attend for free."
          },
          {
            q: "Can corporate professionals volunteer as career mentors?",
            a: "Yes, we encourage professionals from diverse sectors to spend weekends coaching and mentoring eager students."
          },
          {
            q: "Do you assist students with admission and scholarship forms?",
            a: "Yes, our guidance desk helps students fill out university admission applications and financial-aid forms correctly."
          }
        ],
      },
    ],
  },

  // 5. WASH Program & Climate Change Awareness
  {
    slug: "wash-program-&-climate-change-awareness",
    label: "WASH Program & Climate Change Awareness",
    programs: [
      {
        slug: "clean-water-hand-pumps",
        title: "Clean Drinking Water & Hand Pumps",
        eyebrow: "Water For Life",
        bannerHeading: "Installing Solar Water Plants and Hand Pumps in Drought-Prone Belts",
        short: "Providing clean, disease-free drinking water right at the doorsteps of thirsty desert and rural communities.",
        intro: "Contaminated water causes widespread stomach infections, kidney diseases, and infant mortality in rural Sindh. WOPF installs heavy-duty manual hand pumps, community RO water plants, and solar submersible pumps in water-deprived villages.",
        extraIntro: [
          "Women and young children who previously walked 4 to 6 kilometers daily under blazing sun now fetch sweet drinking water in minutes."
        ],
        points: [
          "Deep bore hand pumps and solar-powered filtration units",
          "Laboratory water testing before commissioning every pump",
          "Community maintenance committees ensuring long-term operational lifespan"
        ],
        image: heroWater,
        gallery: [heroWater, workMedical, fallback, heroFood],
        story: {
          quote: "Our daughters used to spend half their day carrying heavy water pots. The WOPF hand pump installed inside our village has given them time to study.",
          name: "Mst. Jamila",
          role: "Village Resident, Tharparkar",
          image: heroWater,
        },
        faqs: [
          {
            q: "How much does it cost to install a complete community hand pump?",
            a: "Costs range depending on the water table depth (usually 80 to 200 feet). A standard hand pump costs around PKR 50,000 to 80,000 including masonry and testing."
          },
          {
            q: "Can I dedicate a hand pump or water well as Sadaqah Jariyah in memory of a loved one?",
            a: "Yes, we provide personalized engraved stone plaques with your requested name, along with GPS coordinates and completion photographs."
          },
          {
            q: "How is the water quality tested?",
            a: "Our technical team collects water samples from each bore and tests for salinity, TDS, and harmful bacterial contamination before opening it to the public."
          }
        ],
      },
      {
        slug: "climate-plantation",
        title: "Tree Plantation & Climate Action",
        eyebrow: "Green Sindh",
        bannerHeading: "Combatting Extreme Heat Waves Through Massive Native Tree Plantation",
        short: "Planting native shade trees, educating youth on climate resilience, and establishing cleaner communities.",
        intro: "Sindh experiences some of the highest summer temperatures on the planet due to deforestation and climate change. WOPF drives community-led green plantation drives in schools, public hospitals, and villages to restore green cover.",
        extraIntro: [
          "We distribute native fruit and shade saplings (Neem, Moringa, Peepal, Babul) and train students on tree stewardship and water conservation."
        ],
        points: [
          "Massive seasonal plantation campaigns focusing on heat-resistant native trees",
          "Environmental hygiene workshops in schools and colleges",
          "Proper watering and fence protection for newly planted saplings"
        ],
        image: heroWater,
        gallery: [heroWater, workYouth, fallback, workChildren],
        story: {
          quote: "Our school was barren and unbearably hot in summer. WOPF planted 150 neem and shade trees with our students, making our campus lush and cool.",
          name: "Master Qadir Bux",
          role: "Primary School Teacher, Larkana",
          image: heroWater,
        },
        faqs: [
          {
            q: "Which varieties of trees do you plant?",
            a: "We exclusively plant climate-resilient native trees such as Neem, Moringa, Peepal, Sheesham, and date palms that require minimal water once established."
          },
          {
            q: "Who looks after the trees after they are planted?",
            a: "We collaborate with local school administrations, mosques, and village councils who sign care commitments to water and safeguard the saplings."
          },
          {
            q: "How can volunteers participate in plantation drives?",
            a: "You can join our weekend green volunteer teams during the monsoon and spring planting drives across various cities."
          }
        ],
      },
    ],
  },

  // 6. Disability Care, Support & Rehabilitation
  {
    slug: "disability-care-support-&-rehabilitation",
    label: "Disability Care, Support & Rehabilitation",
    programs: [
      {
        slug: "family-support",
        title: "Family Support for Special Needs",
        eyebrow: "Disability Rehabilitation",
        bannerHeading: "Monthly Financial and Social Support for Disabled Individuals",
        short: "Empowering families caring for members with physical and cognitive disabilities with dignity and essential care.",
        intro: "Caring for a bedridden or disabled family member creates immense emotional and financial stress for impoverished families. WOPF Family Support provides monthly subsistence stipends, specialized hygiene packs, and caregiver counselling.",
        extraIntro: [
          "We believe every person with special needs deserves respect, specialized nutrition, and assistive devices to participate in daily life."
        ],
        points: [
          "Monthly financial assistance for low-income families with disabled dependents",
          "Provision of adult diapers, air mattresses, and sanitation aids",
          "Home visits and psychological encouragement for family caregivers"
        ],
        image: fallback,
        gallery: [fallback, workMedical, workRation, healthOverview],
        story: {
          quote: "Caring for my paralyzed brother while managing household expenses was pushing us to the brink. WOPF monthly aid lifted a heavy burden from our shoulders.",
          name: "Rashid Minhas",
          role: "Caregiver & Family Head, Kotri",
          image: fallback,
        },
        faqs: [
          {
            q: "What types of disabilities are covered under this program?",
            a: "We support individuals with severe physical paralysis, cerebral palsy, visual impairment, and multiple congenital disabilities."
          },
          {
            q: "How do you ensure proper care is provided at home?",
            a: "Our welfare supervisors conduct periodic home visits to inspect living conditions and supply required medical consumables."
          },
          {
            q: "Can I sponsor a disabled individual's monthly care stipend?",
            a: "Yes, you can register as a monthly donor and receive direct confirmation of assistance provided to that beneficiary."
          }
        ],
      },
      {
        slug: "special-children-support",
        title: "Special Children Support & Mobility",
        eyebrow: "Special Children",
        bannerHeading: "Restoring Freedom of Movement with Wheelchairs and Therapy",
        short: "Free distribution of custom wheelchairs, crutches, hearing aids, and physical rehabilitation support.",
        intro: "Without mobility aids, thousands of disabled children in rural areas spend their childhood confined to a single cot. WOPF provides custom-fitted wheelchairs, walking frames, and prosthetic referrals, opening up a world of school and social interaction.",
        extraIntro: [
          "We also connect children with pediatric therapists for speech and physical therapy sessions that unlock their hidden potential."
        ],
        points: [
          "Free durable wheelchairs, tricycles, and crutches for children and adults",
          "Screening and distribution of digital hearing aids and white canes",
          "Referrals for physiotherapy and specialized educational centers"
        ],
        image: workChildren,
        gallery: [workChildren, fallback, workMedical, workYouth],
        story: {
          quote: "For seven years, I had to carry my son to school on my shoulders. The sturdy wheelchair provided by WOPF allows him to navigate the classroom independently.",
          name: "Sikandar Shah",
          role: "Father of a 10-year-old child, Shikarpur",
          image: workChildren,
        },
        faqs: [
          {
            q: "How does someone request a free wheelchair?",
            a: "Families can submit an application along with a disability medical certificate and CNIC/B-Form copy at any WOPF office or online portal."
          },
          {
            q: "Are the wheelchairs suitable for rough rural village roads?",
            a: "Yes, we procure heavy-duty, reinforced all-terrain wheelchairs designed specifically for rough, unpaved rural conditions."
          },
          {
            q: "Can I donate brand new wheelchairs or mobility aids directly?",
            a: "Yes, we gladly accept new mobility equipment, hearing aids, and therapeutic toys at our welfare centers."
          }
        ],
      },
    ],
  },

  // 7. Youth Empowerment & Community Development
  {
    slug: "youth-empowerment-&-Community-development",
    label: "Youth Empowerment & Community Development",
    programs: [
      {
        slug: "youth-volunteer",
        title: "Youth Volunteer Program",
        eyebrow: "Volunteer Network",
        bannerHeading: "Mobilizing the Passion of Pakistani Youth for Humanitarian Action",
        short: "Join hundreds of energetic volunteers leading food drives, medical camps, and community rescue missions across the country.",
        intro: "Pakistan's youth is its greatest strength. WOPF Youth Volunteer Program channels the enthusiasm, time, and skills of university students and young professionals into structured, life-changing social impact projects.",
        extraIntro: [
          "Volunteers learn emergency coordination, crisis logistics, leadership, and empathy while serving fellow citizens in moments of dire need."
        ],
        points: [
          "Hands-on participation in medical camps, ration distribution, and disaster drives",
          "Disaster preparedness and community first-aid training certification",
          "Official volunteer appreciation letters and leadership recognition"
        ],
        image: workYouth,
        gallery: [workYouth, workRation, workMedical, heroWater],
        story: {
          quote: "Volunteering with WOPF opened my eyes to the realities of our villages and taught me crisis management skills that no classroom could ever teach.",
          name: "Bilal Qureshi",
          role: "Lead Youth Volunteer, Karachi",
          image: workYouth,
        },
        faqs: [
          {
            q: "Who is eligible to join the Youth Volunteer Program?",
            a: "Anyone aged 16 and above with a passionate desire to serve society can register. No prior experience is necessary."
          },
          {
            q: "How much time commitment is expected from volunteers?",
            a: "Volunteering is flexible. You can join weekend activities, emergency response calls, or social media awareness campaigns based on your availability."
          },
          {
            q: "Do volunteers receive an official certificate?",
            a: "Yes, all active volunteers receive verifiable participation certificates detailing their community service hours."
          }
        ],
      },
      {
        slug: "internship-program",
        title: "Internship Program",
        eyebrow: "Career Development",
        bannerHeading: "Meaningful Hands-On NGO Internships for College and University Students",
        short: "Structured 6 to 12-week internships in social welfare management, media production, field logistics, and research.",
        intro: "WOPF offers university students and fresh graduates a dynamic internship environment where theoretical knowledge meets real social impact. Interns gain valuable experience in project management, donor relations, and field operations.",
        extraIntro: [
          "Each intern works closely under the direct supervision of experienced NGO directors and program leads."
        ],
        points: [
          "Tracks in Non-Profit Management, Digital Media, Field Logistics, and Human Rights",
          "Direct mentorship by senior social development executives",
          "Formal internship evaluation and professional recommendation letters"
        ],
        image: workYouth,
        gallery: [workYouth, workChildren, healthBanner, fallback],
        story: {
          quote: "My 8-week internship at WOPF gave me practical exposure to large-scale welfare supply chains, which helped me land my first full-time development job.",
          name: "Ayesha Tariq",
          role: "Former Intern & Social Researcher",
          image: workYouth,
        },
        faqs: [
          {
            q: "When are internship applications opened during the year?",
            a: "We offer Summer Internships (June-August) and Winter Internships (December-January), alongside rolling spots for final-year thesis students."
          },
          {
            q: "Can remote or virtual internships be arranged?",
            a: "Yes, roles in content writing, graphic design, web management, and research data entry can be completed remotely."
          },
          {
            q: "What is the educational requirement for applying?",
            a: "Undergraduate and postgraduate students enrolled in recognized colleges or universities are eligible."
          }
        ],
      },
      {
        slug: "community-leadership",
        title: "Community Leadership Training",
        eyebrow: "Community Empowerment",
        bannerHeading: "Training Local Grassroots Leaders to Solve Village Problems",
        short: "Empowering rural elders, youth, and teachers to build self-sustaining community development initiatives.",
        intro: "Lasting change happens when communities lead their own progress. WOPF conducts community leadership workshops that train grassroots champions to identify civic problems, organize collective action, and liaise with government authorities.",
        extraIntro: [
          "From resolving sanitation bottlenecks to protecting drinking water sources, our trained community leaders guide their villages towards self-reliance."
        ],
        points: [
          "Grassroots workshops on dispute resolution, hygiene, and civic rights",
          "Building village welfare committees with active youth and elder participation",
          "Seed funding and technical guidance for community-proposed micro-projects"
        ],
        image: workYouth,
        gallery: [workYouth, heroWater, workRation, fallback],
        story: {
          quote: "The leadership workshop taught us how to organize our village youth to maintain our water pumps and clean our streets without waiting for outside help.",
          name: "Wadood Brohi",
          role: "Community Lead, Ghotki",
          image: workYouth,
        },
        faqs: [
          {
            q: "How are village communities selected for leadership training?",
            a: "We select villages where community members show high unity, readiness to volunteer, and interest in self-directed development."
          },
          {
            q: "Does WOPF provide financial grants to community committees?",
            a: "We provide matching grants for verified community micro-projects such as school boundary repairs or drainage clearance."
          },
          {
            q: "Are women actively involved in community committees?",
            a: "Yes, we actively advocate and facilitate women's participation in local health, nutrition, and child education committees."
          }
        ],
      },
    ],
  },
];

export function findProgram(serviceSlug: string, programSlug: string) {
  const group = SERVICE_GROUPS.find((g) => g.slug === serviceSlug);
  const program = group?.programs.find((p) => p.slug === programSlug);
  return group && program ? { group, program } : null;
}
