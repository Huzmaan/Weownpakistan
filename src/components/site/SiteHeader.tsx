import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, HandHeart, ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV, SITE, SERVICE_PAGES } from "@/lib/site";

const subLink =
  "block rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary-deep [&.active]:bg-primary-soft [&.active]:text-primary-deep";

/** Sticky site header: logo (left), navigation (center), CTAs (right). */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openService, setOpenService] = useState<string | null>(null);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
    setOpenService(null);
  };

  return (
    <header
      data-site-header
      className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl transition-shadow duration-300 [&.is-stuck]:shadow-soft"
    >
      <div className="container-wopf flex h-24 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img src={logo} alt={`${SITE.name} emblem`} width={56} height={56} className="h-12 w-12 object-contain" />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight text-primary-deep">We Own Pakistan</span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Humanitarian and Welfare Foundation
            </span>
            <span className="block font-sans text-base font-bold leading-7 text-foreground" lang="ur">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        {/* ---------- Desktop navigation ---------- */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.to === "/services" ? (
              <div key={item.to} className="group/services relative">
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:bg-primary-soft hover:text-primary-deep [&.active]:bg-primary-soft [&.active]:text-primary-deep"
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover/services:rotate-180"
                    aria-hidden="true"
                  />
                </Link>

                {/* Level 1: 7 services */}
                <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover/services:visible group-hover/services:opacity-100 group-focus-within/services:visible group-focus-within/services:opacity-100">
                  <div className="rounded-2xl border border-border bg-card p-2 shadow-lift">
                    {SERVICE_PAGES.map((s) => (
                      <div key={s.to} className="group/sub relative">
                        <Link to={s.to} className={`${subLink} flex items-center justify-between gap-3`}>
                          <span>{s.label}</span>
                          {s.children.length > 0 && (
                            <ChevronRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
                          )}
                        </Link>

                        {/* Level 2: inner pages, opens to the right */}
                        {s.children.length > 0 && (
                          <div className="invisible absolute left-full top-0 z-50 w-64 pl-2 opacity-0 transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100">
                            <div className="rounded-2xl border border-border bg-card p-2 shadow-lift">
                              {s.children.map((c) => (
                                <Link key={c.to} to={c.to} className={subLink}>
                                  {c.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:bg-primary-soft hover:text-primary-deep [&.active]:bg-primary-soft [&.active]:text-primary-deep"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-4 py-2.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-primary-soft"
          >
            <HandHeart className="h-4 w-4" aria-hidden="true" />
            Get Involved
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="surface-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Call Now
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary-deep lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ---------- Mobile navigation ---------- */}
      {open && (
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile navigation" className="container-wopf flex flex-col py-3">
            {NAV.map((item) =>
              item.to === "/services" ? (
                <div key={item.to}>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-primary-soft"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {servicesOpen && (
                    <div className="mb-1 ml-3 flex flex-col border-l-2 border-primary/20 pl-3">
                      <Link
                        to="/services"
                        activeOptions={{ exact: true }}
                        onClick={closeMenu}
                        className="rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground/70 hover:bg-primary-soft [&.active]:text-primary-deep"
                      >
                        All Services
                      </Link>

                      {SERVICE_PAGES.map((s) => {
                        const isOpen = openService === s.to;
                        return (
                          <div key={s.to}>
                            <div className="flex items-center gap-1">
                              <Link
                                to={s.to}
                                activeOptions={{ exact: true }}
                                onClick={closeMenu}
                                className="flex-1 rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground/70 hover:bg-primary-soft [&.active]:text-primary-deep"
                              >
                                {s.label}
                              </Link>
                              {s.children.length > 0 && (
                                <button
                                  type="button"
                                  aria-label={`Show ${s.label} pages`}
                                  aria-expanded={isOpen}
                                  onClick={() => setOpenService(isOpen ? null : s.to)}
                                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-primary-deep hover:bg-primary-soft"
                                >
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                    aria-hidden="true"
                                  />
                                </button>
                              )}
                            </div>

                            {isOpen && (
                              <div className="mb-1 ml-3 flex flex-col border-l-2 border-accent/40 pl-3">
                                {s.children.map((c) => (
                                  <Link
                                    key={c.to}
                                    to={c.to}
                                    onClick={closeMenu}
                                    className="rounded-xl px-3 py-2 text-sm font-medium text-foreground/65 hover:bg-primary-soft [&.active]:text-primary-deep"
                                  >
                                    {c.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-primary-soft [&.active]:text-primary-deep"
                >
                  {item.label}
                </Link>
              ),
            )}

            <div className="mt-3 flex flex-col gap-2 pb-4">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="rounded-full border border-primary/25 px-4 py-3 text-center text-sm font-semibold text-primary-deep"
              >
                Get Involved
              </Link>
              <Link
                to="/"
                hash="donate"
                onClick={closeMenu}
                className="surface-brand rounded-full px-4 py-3 text-center text-sm font-semibold"
              >
                Donate Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}