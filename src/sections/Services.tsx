import { useEffect, useState } from "react";
import { CONTACT, SERVICES, scrollToSection, type Service } from "../lib/data";
import { SectionHead } from "../components/SectionHead";
import {
  ArrowUpRight,
  Check,
  Close,
  Clipboard,
  Phone,
  ShieldCheck,
  WhatsApp,
} from "../components/Icons";

export function Services({ onRequest }: { onRequest: (service: string) => void }) {
  const [selected, setSelected] = useState<Service | null>(null);
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(SERVICES.map((service) => service.category))];

  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <div className="bg-lightbg">
      <section id="services" className="mx-auto max-w-[1200px] px-5 py-20">
        <SectionHead
          title="Invisible Grills, Safety Nets & More"
          subtitle="Explore balcony safety grills, child safety grills, pigeon nets and more in Nalgonda, Nallagandla and Vanasthalipuram"
        />

        <div className="mb-9 flex flex-wrap justify-center gap-2" aria-label="Filter services">
          {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${category === item ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-slate-200 hover:ring-brand"}`}>{item}</button>)}
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.filter((service) => category === "All" || service.category === category).map((service) => (
            <article
              key={service.short}
              className="reveal group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(10,37,64,0.08)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_38px_rgba(10,37,64,0.16)]"
            >
              <button
                type="button"
                onClick={() => setSelected(service)}
                className="relative block cursor-pointer overflow-hidden text-left"
                aria-label={`View details of ${service.title}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-[210px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {service.badge && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-[11.5px] font-bold text-white shadow-[0_4px_14px_rgba(76,175,80,0.5)]">
                    <ShieldCheck className="h-[13px] w-[13px]" /> {service.badge}
                  </span>
                )}
              </button>

              <div className="flex flex-1 flex-col p-5">
                <button
                  type="button"
                  onClick={() => setSelected(service)}
                  className="cursor-pointer text-left"
                >
                  <h3 className="mb-2 text-[17.5px] leading-snug font-semibold text-navy transition-colors hover:text-brand">
                    {service.short}
                  </h3>
                </button>
                <p className="mb-5 flex-1 text-[13.5px] leading-[1.65] text-muted">{service.desc}</p>

                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setSelected(service)}
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-navy px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-navy-dark"
                  >
                    <Clipboard className="h-[15px] w-[15px]" /> View Service Details
                  </button>
                  <div className="flex gap-2">
                    <a
                      href={CONTACT.phoneHref}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-callblue px-3 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-callblue-dark"
                    >
                      <Phone className="h-3.5 w-3.5" /> Call
                    </a>
                    <a
                      href={`https://wa.me/917995150298?text=${encodeURIComponent(`Hi, I am interested in ${service.short}. Please share price details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-whatsapp px-3 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-whatsapp-dark"
                    >
                      <WhatsApp className="h-[15px] w-[15px]" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selected && (
        <div
          className="fade-in fixed inset-0 z-[1100] flex items-center justify-center bg-navy-dark/92 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(event) => event.stopPropagation()}
            className="lightbox-in relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close service details"
              className="absolute top-4 right-4 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/90 text-navy shadow transition-colors hover:bg-brand hover:text-white"
            >
              <Close className="h-5 w-5" />
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="h-[260px] w-full object-cover sm:h-[320px]"
            />

            <div className="p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1.5 text-[11px] font-bold tracking-wide text-brand-dark uppercase">
                {selected.badge ?? selected.category}
              </span>
              <h3 className="mt-3 text-[24px] leading-tight font-bold text-navy sm:text-[28px]">
                {selected.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-muted">{selected.desc}</p>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Free doorstep measurement",
                  "Written quote, zero hidden charges",
                  "Own trained installation team",
                  "Discuss materials and warranty with our team",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-2 text-[13px] text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} />
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onRequest(selected.title);
                    setSelected(null);
                    scrollToSection("contact");
                  }}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-brand px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Request Free Measurement <ArrowUpRight className="h-4 w-4" />
                </button>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md bg-callblue px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-callblue-dark"
                >
                  <Phone className="h-4 w-4" /> {CONTACT.phone}
                </a>
                <a
                  href={`https://wa.me/917995150298?text=${encodeURIComponent(`Hi, I am interested in ${selected.short}. Please share price details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-whatsapp-dark"
                >
                  <WhatsApp className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
