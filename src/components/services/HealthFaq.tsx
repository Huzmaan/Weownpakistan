import { FaqSection } from "@/components/site/FaqSection";

type FaqItem = {
    q: string;
    a: string;
};

type Props = {
    eyebrow: string;
    title: string;
    intro: string;
    items: FaqItem[];
};

export function HealthFaq({
    eyebrow,
    title,
    intro,
    items,
}: Props) {
    return (
        <FaqSection
            items={items}
            eyebrow={eyebrow}
            title={title}
            intro={intro}
        />
    );
}