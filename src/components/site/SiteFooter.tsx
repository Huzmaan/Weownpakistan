import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { NAV, SERVICES, SITE } from "@/lib/site";

/** Global footer: brand, sitemap, services, contact and social links. */
export function SiteFooter() {
  return (
    <footer className="bg-foreground text-ink-foreground">
      <div className="container-wopf grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt={SITE.name} width={56} height={56} className="h-14 w-14 object-contain" />
            <span className="font-display text-lg font-bold">WOPF</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
            We Own Pakistan Foundation is a volunteer-driven welfare organisation serving communities across Sindh with
            food, water, health and youth programs.
          </p>
          <p className="mt-4 font-display text-sm text-gold" lang="ur" dir="rtl">
            {SITE.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink-foreground/70 transition-colors hover:text-ink-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">Our Programs</h2>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            {SERVICES.map((s) => (
              <li key={s.slug}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm text-ink-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {SITE.address}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-ink-foreground">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-ink-foreground">
                {SITE.phone}
              </a>
            </li>
          </ul>
          <div className="gap-2 flex">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="WOPF on Facebook"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground transition-colors hover:bg-primary"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="WOPF on Instagram"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground transition-colors hover:bg-primary"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="WOPF on Instagram"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground transition-colors hover:bg-primary"
            >
              <FaTiktok className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-wopf flex flex-col gap-2 py-6 text-xs text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} We Own Pakistan Foundation. All rights reserved.</p>
          <p>Registered non-profit welfare organisation Sindh, Pakistan.</p>
        </div>
      </div>
      <a
  href={`https://wa.me/${SITE.phone.replace(/\s/g, "").replace(/^0/, "92")}`}
  target="_blank"
  rel="noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
>
  <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
</a>
    </footer>
  );
}
