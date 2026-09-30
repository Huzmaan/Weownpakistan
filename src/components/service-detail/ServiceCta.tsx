import { Link } from "@tanstack/react-router";

export function ServiceCta() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
        <h2 className="text-3xl font-bold md:text-4xl">One camp. 150 families. Rs 25,000.</h2>
        <p className="mx-auto mt-4 max-w-xl opacity-90">Sponsor a camp or give your weekend as a volunteer doctor.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground">Sponsor a Camp</Link>
          <Link to="/contact" className="rounded-full border border-current px-7 py-3 font-semibold">Volunteer as Doctor</Link>
        </div>
      </div>
    </section>
  );
}