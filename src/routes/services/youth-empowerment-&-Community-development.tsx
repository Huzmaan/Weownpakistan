import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const Route = createFileRoute("/services/youth-empowerment-&-Community-development")({
  head: () => ({
    meta: [
      { title: "Youth Empowerment & Community Development | We Own Pakistan Foundation" },
      {
        name: "description",
        content:
          "Volunteering, internships and leadership training for young people in Karachi and Sindh who want to learn, lead and serve their communities.",
      },
      {
        property: "og:title",
        content: "Youth Empowerment & Community Development | We Own Pakistan Foundation",
      },
      {
        property: "og:description",
        content: "Volunteering, internships and community leadership training for young people.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => <ServiceCategoryPage serviceSlug="youth-empowerment-&-Community-development" />,
});
