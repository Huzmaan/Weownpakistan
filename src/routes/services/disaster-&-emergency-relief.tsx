import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const Route = createFileRoute("/services/disaster-&-emergency-relief")({
  head: () => ({
    meta: [
      { title: "Disaster & Emergency Relief | We Own Pakistan Foundation" },
      {
        name: "description",
        content:
          "Food, drinking water, shelter items and early recovery support for families hit by floods and other emergencies in Sindh.",
      },
      {
        property: "og:title",
        content: "Disaster & Emergency Relief | We Own Pakistan Foundation",
      },
      {
        property: "og:description",
        content:
          "Food, drinking water, shelter items and early recovery support for flood-affected families.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => <ServiceCategoryPage serviceSlug="disaster-&-emergency-relief" />,
});
