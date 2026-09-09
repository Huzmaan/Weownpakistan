import type { LucideIcon } from "lucide-react";

type ImpactItem = { value: string; label: string; icon: LucideIcon;};

type Props = {
    items: ImpactItem[];
};

export function HealthImpact({ items }: Props) {
    return (
        <section className="container-wopf relative z-10 -mt-8 sm:-mt-12">
            <div className="reveal grid overflow-hidden rounded-3xl border border-border bg-card shadow-lift sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item, index) => (
                    <div
                        key={item.label}
                        className={`flex items-center gap-4 px-6 py-6 sm:px-7 ${index > 0
                                ? "border-t border-border sm:border-t-0 sm:[&:nth-child(2n)]:border-l lg:border-l"
                                : ""
                            } ${index > 1
                                ? "sm:border-t lg:border-t-0"
                                : ""
                            }`}
                    >
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep">
                            <item.icon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </span>

                        <div>
                            <p className="font-display text-xl font-bold text-primary-deep">
                                {item.value}
                            </p>

                            <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}