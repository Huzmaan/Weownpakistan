import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const Route = createFileRoute("/services/disability-care-support-&-rehabilitation")({
  head: () => ({
    meta: [
      { title: "Disability Care, Support & Rehabilitation | We Own Pakistan Foundation" },
      {
        name: "description",
        content:
          "Wheelchairs, mobility aids, rehabilitation referrals and family support for people with disabilities and children with special needs in Sindh.",
      },
      {
        property: "og:title",
        content: "Disability Care, Support & Rehabilitation | We Own Pakistan Foundation",
      },
      {
        property: "og:description",
        content:
          "Wheelchairs, mobility aids and support for people with disabilities and their families.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => <ServiceCategoryPage serviceSlug="disability-care-support-&-rehabilitation" />,
});
