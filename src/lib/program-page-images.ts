import medicineBank from "@/assets/health-and-support-image.png";
import rationDistribution from "@/assets/ration-distribution.jpg";
import rationDistributionDetails from "@/assets/ration-distribution-image.jpg";
import ramadanDistribution from "@/assets/field-photos/ramadan-drive/495331513_3947172852207597_426239039337306439_n.jpg.jpeg";
import ramadanMealOne from "@/assets/field-photos/ramadan-drive/495525717_3947294452195437_5318952250937924097_n.jpg.jpeg";
import ramadanMealTwo from "@/assets/field-photos/ramadan-drive/495531438_3947172648874284_6163821686501496385_n.jpg.jpeg";
import ramadanMealThree from "@/assets/field-photos/ramadan-drive/495591396_3947172645540951_7938674946329748473_n.jpg.jpeg";
import studentEvent from "@/assets/field-photos/events/496094144_3948215518769997_6793396831129028596_n.jpg.jpeg";
import computerHandover from "@/assets/field-photos/events/496093986_3948214345436781_5290216610381387049_n.jpg.jpeg";
import guidanceWorkshop from "@/assets/work-youth.jpg";
import guidanceStory from "@/assets/work-youth-program.png";
import youthEvent from "@/assets/field-photos/events/495211682_3948215362103346_35457749074432981_n.jpg.jpeg";
import youthLeadership from "@/assets/field-photos/events/495628633_3950504248541124_3764624917591601702_n.jpg.jpeg";

export type ProgramPageMedia = {
  hero?: string;
  story?: string;
  gallery?: string[];
};

export const PROGRAM_PAGE_IMAGES: Record<string, ProgramPageMedia> = {
  "health-medical-support/medicine-bank": {
    hero: medicineBank,
  },
  "health-medical-support/medical-support": {
    hero: medicineBank,
  },
  "humanitarian-support-&-poverty-alleviation/monthly-ration": {
    hero: rationDistribution,
    story: rationDistributionDetails,
    gallery: [ramadanMealOne, ramadanMealTwo],
  },
  "humanitarian-support-&-poverty-alleviation/ramadan-ration-iftar": {
    hero: ramadanDistribution,
    gallery: [ramadanMealThree, ramadanMealOne, ramadanMealTwo],
  },
  "education-&-skills-development/school-fee-support": {
    hero: studentEvent,
  },
  "education-&-skills-development/computer-it-skills": {
    hero: computerHandover,
  },
  "education-&-skills-development/career-guidance": {
    hero: guidanceWorkshop,
    story: guidanceStory,
  },
  "youth-empowerment-&-Community-development/youth-volunteer": {
    hero: youthEvent,
    gallery: [youthLeadership],
  },
  "youth-empowerment-&-Community-development/community-leadership": {
    hero: youthLeadership,
  },
};
