import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const Route = createFileRoute("/services/wash-program-&-climate-change-awareness")({
  head: () => ({
    meta: [
      { title: "WASH Program & Climate Change Awareness | We Own Pakistan Foundation" },
      {
        name: "description",
        content:
          "Clean drinking water, hand pumps, hygiene awareness and tree plantation for communities in Sindh.",
      },
      {
        property: "og:title",
        content: "WASH Program & Climate Change Awareness | We Own Pakistan Foundation",
      },
      {
        property: "og:description",
        content: "Clean drinking water, hand pumps, hygiene awareness and tree plantation.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => <ServiceCategoryPage serviceSlug="wash-program-&-climate-change-awareness" />,
});
