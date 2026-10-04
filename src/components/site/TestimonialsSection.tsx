import { useState } from "react";
import { Play, BadgeCheck, Clock } from "lucide-react";
import { Carousel } from "./Carousel";
import { SectionHeading } from "./SiteLayout";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import workMedical from "@/assets/testimonials/thumbnail/one.png";
import workRation from "@/assets/about-banner.jpg";
import workChildren from "@/assets/about-banner.jpg";
import workYouth from "@/assets/about-banner.jpg";
import OneTestimonial from "@/assets/testimonials/one-testimonials.mp4";
import heroWater from "@/assets/about-banner.jpg";

type VideoTestimonial = {
  name: string;
  role: string;
  proof: string;
  duration: string;
  thumbnail: string;
  /** YouTube embed link (https://www.youtube.com/embed/VIDEO_ID) ya direct .mp4 link */
  video: string;
};

// Example videos — apni asli videos ke links yahan lagayein
const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    name: "Muhammad Imran",
    role: "Ration Distribution, Karachi",
    proof: "Ration Drive, verified register",
    duration: "1:35",
    thumbnail: workMedical,
    video: OneTestimonial,
  },
  // {
  //   name: "Parveen Bibi",
  //   role: "Monthly ration recipient, Badin",
  //   proof: "Ration distribution, photographed",
  //   duration: "2:05",
  //   thumbnail: workRation,
  //   video: "https://www.youtube.com/embed/RNoy0r9ZfCA?si=uH9lULoOBRTskwrW",
  // },
  // {
  //   name: "Sanaullah",
  //   role: "Scholarship student, Karachi",
  //   proof: "School fee support, receipt on file",
  //   duration: "1:18",
  //   thumbnail: workChildren,
  //   video: "https://www.youtube.com/embed/RNoy0r9ZfCA?si=uH9lULoOBRTskwrW",
  // },
  // {
  //   name: "Mst. Jamila",
  //   role: "Village resident, Tharparkar",
  //   proof: "Hand pump installed, GPS logged",
  //   duration: "1:30",
  //   thumbnail: heroWater,
  //   video: "https://www.youtube.com/embed/RNoy0r9ZfCA?si=uH9lULoOBRTskwrW",
  // },
  // {
  //   name: "Bilal Qureshi",
  //   role: "Youth volunteer, Karachi",
  //   proof: "Volunteer drive, documented",
  //   duration: "2:20",
  //   thumbnail: workYouth,
  //   video: "https://www.youtube.com/embed/RNoy0r9ZfCA?si=uH9lULoOBRTskwrW",
  // },
];

const isYouTube = (url: string) => url.includes("youtube.com") || url.includes("youtu.be");

/** Beneficiary video testimonials in a carousel, each opening in a lightbox. */
export function TestimonialsSection() {
  const [active, setActive] = useState<VideoTestimonial | null>(null);

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="container-wopf">
        <SectionHeading
          eyebrow="Voices from the field"
          title="Stories Behind the Work."
          intro="The most meaningful account of our work comes from the people and volunteers who experience it directly. This section should feature short, consent-based stories linked to real, documented activities."
          align="center"
        />

        <div className="reveal mt-14">
          <Carousel
            dots
            arrows={false}
            infinite
            autoplay
            autoplaySpeed={5000}
            speed={600}
            slidesToShow={3}
            className="works-slider"
            responsive={[
              { breakpoint: 640, settings: { slidesToShow: 1 } },
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
            ]}
          >
            {VIDEO_TESTIMONIALS.map((t) => (
              <div key={t.name} className="px-3 pb-2">
                <figure className="overflow-hidden rounded-3xl bg-card shadow-soft">
                  <button
                    type="button"
                    onClick={() => setActive(t)}
                    aria-label={`Play video testimonial from ${t.name}`}
                    className="group relative block aspect-video w-full overflow-hidden"
                  >
                    <img
                      src={t.thumbnail}
                      alt={t.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-primary-deep/35 transition group-hover:bg-primary-deep/50" />
                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink shadow-lift transition group-hover:scale-110">
                      <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
                      <Play className="relative ml-1 h-7 w-7 fill-current" aria-hidden="true" />
                    </span>
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground">
                      <Clock className="h-3 w-3" aria-hidden="true" /> {t.duration}
                    </span>
                  </button>
                  <figcaption className="p-6">
                    <p className="font-display font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary-deep">
                      <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.proof}
                    </p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden border-0 bg-ink p-0 sm:rounded-2xl">
          {active && (
            <>
              <div className="aspect-video w-full bg-ink">
                {isYouTube(active.video) ? (
                  <iframe
                    src={`${active.video}${active.video.includes("?") ? "&" : "?"}autoplay=1`}
                    title={`${active.name} testimonial`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <video src={active.video} controls autoPlay playsInline className="h-full w-full" />
                )}
              </div>
              <div className="bg-card p-5">
                <DialogTitle className="font-display text-lg">{active.name}</DialogTitle>
                <DialogDescription>
                  {active.role} · {active.proof}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
