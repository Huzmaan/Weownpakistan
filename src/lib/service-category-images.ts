import healthImage from "@/assets/service-one-image.png";
import humanitarianImage from "@/assets/ration-distribution.jpg";
import educationImage from "@/assets/field-photos/events/496094144_3948215518769997_6793396831129028596_n.jpg.jpeg";
import youthImage from "@/assets/field-photos/events/495211682_3948215362103346_35457749074432981_n.jpg.jpeg";
import { SERVICE_PAGE_IMAGES } from "@/lib/service-page-images";

export const SERVICE_CATEGORY_IMAGES: Record<string, string> = {
  "health-medical-support": healthImage,
  "humanitarian-support-&-poverty-alleviation": humanitarianImage,
  "education-&-skills-development": educationImage,
  "youth-empowerment-&-Community-development": youthImage,
  "disaster-&-emergency-relief": SERVICE_PAGE_IMAGES["disaster-&-emergency-relief"].banner,
  "disability-care-support-&-rehabilitation":
    SERVICE_PAGE_IMAGES["disability-care-support-&-rehabilitation"].banner,
  "wash-program-&-climate-change-awareness":
    SERVICE_PAGE_IMAGES["wash-program-&-climate-change-awareness"].banner,
};
