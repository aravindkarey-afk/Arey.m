import { useLayoutEffect, useState } from "react";
import { CONTACT, SERVICES, servicePath } from "../lib/data";
import { SectionHead } from "../components/SectionHead";
import {
  Clipboard,
  Phone,
  ShieldCheck,
  WhatsApp,
} from "../components/Icons";

export function Services() {
  const [category, setCategory] = useState(() => typeof window === "undefined" ? "All" : history.state?.serviceCategory || "All");
  const categories = ["All", ...new Set(SERVICES.map((service) => service.category))];

  useLayoutEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (navigation?.type === "back_forward" && typeof history.state?.serviceScroll === "number") {
      window.scrollTo({ top: history.state.serviceScroll, behavior: "instant" });
    }
  }, []);

  const rememberPosition = () => {
    history.replaceState({ ...history.state, serviceScroll: window.scrollY, serviceCategory: category }, "");
  };

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
              <a
                href={servicePath(service)}
                onClick={rememberPosition}
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
              </a>

              <div className="flex flex-1 flex-col p-5">
                <a
                  href={servicePath(service)}
                onClick={rememberPosition}
                  className="cursor-pointer text-left"
                >
                  <h3 className="mb-2 text-[17.5px] leading-snug font-semibold text-navy transition-colors hover:text-brand">
                    {service.short}
                  </h3>
                </a>
                <p className="mb-5 flex-1 text-[13.5px] leading-[1.65] text-muted">{service.desc}</p>

                <div className="flex flex-col gap-2">
                  <a
                    href={servicePath(service)}
                onClick={rememberPosition}
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-navy px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-navy-dark"
                  >
                    <Clipboard className="h-[15px] w-[15px]" /> View Service Details
                  </a>
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

    </div>
  );
}
