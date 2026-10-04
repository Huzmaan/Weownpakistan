import { createFileRoute, notFound } from "@tanstack/react-router";
import { findProgram } from "@/lib/programs";
import { ProgramPage } from "@/components/program/ProgramPage";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services/$service/$program")({
  loader: ({ params }) => {
    const data = findProgram(params.service, params.program);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Program Not Found | WOPF" }] };
    const { program, group } = loaderData;
    return {
      meta: [
        { title: `${program.title} | ${group.label} | WOPF` },
        { name: "description", content: program.short },
      ],
    };
  },
  component: ServiceProgramRoute,
  notFoundComponent: ProgramNotFound,
});

function ServiceProgramRoute() {
  const { group, program } = Route.useLoaderData();
  return (
    <SiteLayout>
      <ProgramPage group={group} program={program} />
    </SiteLayout>
  );
}

function ProgramNotFound() {
  return (
    <SiteLayout>
      <div className="container-wopf py-24 text-center">
        <h1 className="font-display text-4xl font-bold text-primary-deep">Program Not Found</h1>
        <p className="mt-4 text-muted-foreground">The requested welfare program could not be found.</p>
      </div>
    </SiteLayout>
  );
}
