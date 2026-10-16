import healthImage from "@/assets/service-one-image.png";
import humanitarianImage from "@/assets/ration-distribution.jpg";
import educationImage from "@/assets/field-photos/events/496094144_3948215518769997_6793396831129028596_n.jpg.jpeg";
import youthImage from "@/assets/field-photos/events/495211682_3948215362103346_35457749074432981_n.jpg.jpeg";
import disasterImage from "@/assets/field-photos/orphange/495173463_3950503045207911_642454855817856455_n.jpg.jpeg";
import disabilityImage from "@/assets/field-photos/orphange/495694175_3947265745531641_4895866696934597456_n.jpg.jpeg";
import washImage from "@/assets/field-photos/events/495547810_3951431065115109_5432895371109458780_n.jpg.jpeg";

export const SERVICE_CATEGORY_IMAGES: Record<string, string> = {
  "health-medical-support": healthImage,
  "humanitarian-support-&-poverty-alleviation": humanitarianImage,
  "education-&-skills-development": educationImage,
  "youth-empowerment-&-Community-development": youthImage,
  "disaster-&-emergency-relief": disasterImage,
  "disability-care-support-&-rehabilitation": disabilityImage,
  "wash-program-&-climate-change-awareness": washImage,
};
