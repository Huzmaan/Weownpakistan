import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import {
  SiteLayout,
  SectionHeading,
  PageBanner,
} from "@/components/site/SiteLayout";
import { SITE } from "@/lib/site";
import heroWater from "@/assets/hero-water.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact WOPF | Volunteer, Partner or Donate" },
      {
        name: "description",
        content:
          "Get in touch with We Own Pakistan Foundation in Karachi volunteer with a drive, partner on a camp, or ask about donations and Zakat.",
      },
      {
        property: "og:title",
        content: "Contact We Own Pakistan Foundation",
      },
      {
        property: "og:description",
        content:
          "Reach the WOPF team to volunteer, partner or support a welfare drive in Sindh.",
      },
    ],
  }),
  component: Contact,
});

const DETAILS = [
  {
    icon: MapPin,
    label: "Office",
    value: SITE.address,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
];

function Contact() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSending(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSuccess(
        "Thank you! Your message has been sent successfully. We will get back to you soon."
      );

      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteLayout>
      <PageBanner
        eyebrow="Contact"
        title="Talk to the team or join it."
        intro="Volunteer for a drive, propose a partnership, or ask anything about how donations are used."
        image={heroWater}
      />

      <section className="container-wopf py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="We answer every message."
              intro="Our coordinators reply within two working days. For urgent relief cases, call the number below directly."
            />

            <ul className="reveal mt-10 space-y-4">
              {DETAILS.map(({ icon: Icon, label, value, href }) => (
                <li
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="surface-brand inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </span>

                    {href ? (
                      <a
                        href={href}
                        className="font-semibold text-foreground hover:text-primary-deep"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-semibold text-foreground">
                        {value}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            aria-label="Contact form"
            className="reveal rounded-[2rem] border border-border bg-card p-8 shadow-lift sm:p-10"
          >
            <h2 className="font-display text-2xl font-bold">
              Send us a message
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Tell us how you'd like to help and a coordinator will get back to
              you.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field
                id="firstName"
                label="First name"
                placeholder="Ali"
                required
              />

              <Field
                id="lastName"
                label="Last name"
                placeholder="Khan"
                required
              />

              <Field
                id="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <Field
                id="phone"
                label="Phone"
                type="tel"
                placeholder="+92 3xx xxxxxxx"
              />

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  I want to
                </label>

                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/25"
                >
                  <option>Volunteer with a drive</option>
                  <option>Donate or ask about Zakat</option>
                  <option>Partner with the foundation</option>
                  <option>Report a family in need</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="How would you like to get involved?"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/25"
                />
              </div>
            </div>

            {/* Success Message */}
            {success && (
              <div
                role="status"
                className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
              >
                {success}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div
                role="alert"
                className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="surface-brand mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" aria-hidden="true" />

              {sending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/25"
      />
    </div>
  );
}