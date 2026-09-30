import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/services/medical-hero.jpg";
import { SiteLayout} from "@/components/site/SiteLayout";
import overview from "@/assets/services/medical-overview.jpg";
import story from "@/assets/services/medical-story.jpg";
import { medicalSupport as d } from "@/components/service-detail/content/medical-support.data";
import { ServiceBanner } from "@/components/service-detail/ServiceBanner";
import { ImpactStrip } from "@/components/service-detail/ImpactStrip";
import { ImageTextSplit } from "@/components/service-detail/ImageTextSplit";
import { FeatureGrid } from "@/components/service-detail/FeatureGrid";
import { ProcessSteps } from "@/components/service-detail/ProcessSteps";
import { StoryQuote } from "@/components/service-detail/StoryQuote";
import { CostBreakdown } from "@/components/service-detail/CostBreakdown";
import { ServiceFaq } from "@/components/service-detail/ServiceFaq";
import { ServiceCta } from "@/components/service-detail/ServiceCta";

const TITLE = "Medical Support — We Own Pakistan Foundation";
const DESC = "Free medical camps, medicines and hospital referrals for families in rural Sindh.";

export const Route = createFileRoute("/services/health-medical-support_/medical-support")({    
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MedicalSupportPage,
});

function MedicalSupportPage() {
  return (
    <SiteLayout>
      <ServiceBanner {...d.banner} image={hero} imageAlt="WOPF volunteer doctor checking a child at a village medical camp in Sindh" />
      <ImpactStrip items={d.impact} />
      <ImageTextSplit {...d.overview} image={overview} imageAlt="Families waiting under a shaded tent at a free medical camp" />
      <FeatureGrid items={d.features} />
      <ProcessSteps steps={d.steps} />
      <StoryQuote {...d.story} image={story} imageAlt="Elderly woman talking with a WOPF doctor outside her home" />
      <CostBreakdown {...d.cost} />
      <ServiceFaq items={d.faq} />
      <ServiceCta />
    </SiteLayout>
  );
}