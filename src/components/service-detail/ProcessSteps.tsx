export function ProcessSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <section id="how-it-works" className="container mx-auto px-4 py-20">
      <h2 className="text-center text-3xl font-bold md:text-4xl">How a camp happens</h2>
      <ol className="relative mt-12 grid gap-8 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-border md:block" />
        {steps.map((s, i) => (
          <li key={s.title} className="relative text-center">
            <div className="relative mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent font-bold text-accent-foreground ring-8 ring-background">{i + 1}</div>
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}