import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const Route = createFileRoute("/services/humanitarian-support-&-poverty-alleviation")({
  head: () => ({
    meta: [
      { title: "Humanitarian Support & Poverty Alleviation | We Own Pakistan Foundation" },
      {
        name: "description",
        content:
          "Monthly ration, Ramadan ration and Iftar, winter clothing and Eid support for families facing financial hardship in Sindh.",
      },
      {
        property: "og:title",
        content: "Humanitarian Support & Poverty Alleviation | We Own Pakistan Foundation",
      },
      {
        property: "og:description",
        content: "Monthly ration, Ramadan Iftar and seasonal support for families facing hardship.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => <ServiceCategoryPage serviceSlug="humanitarian-support-&-poverty-alleviation" />,
});
