import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const Route = createFileRoute("/services/education-&-skills-development")({
  head: () => ({
    meta: [
      { title: "Education & Skills Development | We Own Pakistan Foundation" },
      {
        name: "description",
        content:
          "School fee support, computer and IT training and career guidance for children and young people in Sindh.",
      },
      {
        property: "og:title",
        content: "Education & Skills Development | We Own Pakistan Foundation",
      },
      {
        property: "og:description",
        content:
          "School fee support, computer training and career guidance for children and young people.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => <ServiceCategoryPage serviceSlug="education-&-skills-development" />,
});
