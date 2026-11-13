import { useEffect, useRef, useState } from "react";
import { CONTACT, HERO_SLIDES, LOCALITY_GROUPS, SERVICE_AREAS, STATS, WHY_US, scrollToSection } from "../lib/data";
import { IMG } from "../assets/refimg";
import { SectionHead } from "../components/SectionHead";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Bolt,
  Check,
  Clipboard,
  Eye,
  MapPin,
  Phone,
  ShieldCheck,
  Sun,
  Tag,
  WhatsApp,
} from "../components/Icons";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------- HERO */

export function Hero() {
  const [active, setActive] = useState(0);

  const [paused, setPaused] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = window.setTimeout(
      () => setActive((i) => (i + 1) % HERO_SLIDES.length),
      4200
    );
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, paused]);

  const go = (index: number) => setActive((index + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section
      id="home"
      className="mx-auto flex min-h-[85vh] max-w-[1200px] items-center gap-10 px-5 pt-[150px] pb-16 md:pt-[170px] lg:gap-14"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal reveal-visible">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-[12.5px] font-semibold tracking-wide text-brand-dark uppercase">
            <ShieldCheck className="h-3.5 w-3.5" /> Safety solutions for Telangana homes
          </span>

          <h1 className="mb-5 text-[34px] leading-[1.18] font-bold text-navy sm:text-[42px]">
            Invisible Grills in Hyderabad for <span className="text-brand">safer, clearer views.</span>
          </h1>

          <p className="mb-5 max-w-[540px] text-[16px] leading-[1.7] text-muted sm:text-[17px]">
            Invisible grills in Hyderabad, plus pigeon safety nets, balcony safety nets and child safety nets for the spaces you love. We visit homes in Gachibowli, Kondapur, Kukatpally, LB Nagar, Vanasthalipuram and across Hyderabad.
          </p>

          <div className="mb-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] font-medium text-navy">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-[15px] w-[15px] text-brand" /> Solutions for homes &amp; balconies</span>
            <span className="flex items-center gap-1.5">
              <Clipboard className="h-[15px] w-[15px] text-brand" /> Free site measurement
            </span>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-navy px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(10,37,64,0.25)] transition-all hover:bg-navy-dark hover:shadow-[0_10px_24px_rgba(10,37,64,0.35)]"
            >
              <Clipboard className="h-[17px] w-[17px]" /> Get Free Quote
            </button>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-md bg-whatsapp px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] transition-colors hover:bg-whatsapp-dark"
            >
              <WhatsApp className="h-[18px] w-[18px]" /> WhatsApp Us
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-md bg-callblue px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(0,123,255,0.3)] transition-colors hover:bg-callblue-dark"
            >
              <Phone className="h-[17px] w-[17px]" /> Call Now
            </a>
          </div>
        </div>

        <div
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-navy shadow-[0_16px_40px_rgba(10,37,64,0.28)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
        >
          <div
            className="hero-track flex h-full w-full"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {HERO_SLIDES.map((slide, index) => (
              <div key={slide.badge} className="relative h-full min-w-full select-none">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  className={cn(
                    "block h-full w-full object-cover",
                    slide.badge === "Balcony Invisible Grills" ? "object-[52%_42%]" : ""
                  )}
                />
                <span className="absolute bottom-[18px] left-[18px] z-[2] inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy/85 px-3.5 py-1.5 text-[13px] font-semibold tracking-[0.3px] text-white backdrop-blur-md">
                  {slide.badge}
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  <span className="text-brand">{slide.tag}</span>
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous slide"
            className="absolute top-1/2 left-3 z-[3] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition-colors hover:bg-white"
          >
            <ArrowLeft className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next slide"
            className="absolute top-1/2 right-3 z-[3] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition-colors hover:bg-white"
          >
            <ArrowRight className="h-[18px] w-[18px]" />
          </button>

          <div className="absolute right-4 bottom-4 z-[3] flex items-center gap-1.5">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.badge}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${slide.badge}`}
                aria-pressed={index === active}
                className={cn(
                  "h-2 w-2 cursor-pointer rounded-full transition-all",
                  index === active ? "w-5 bg-brand" : "bg-white/70 hover:bg-white"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ ABOUT + STATS */

const aboutBullets = [
  "High-grade SS 316 nylon-coated cables & UV-stabilised HDPE nets",
  "Rust-proof, weather-resistant materials built for Hyderabad's climate",
  "Professional doorstep installation across Hyderabad & Secunderabad",
  "Written quotation before work begins — no hidden charges, ever",
];

export function About() {
  const statsRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <section id="about" className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative">
            <img
              src={IMG.s26}
              alt="Invisible grill balcony with open city view"
              className="w-full rounded-2xl object-cover shadow-[0_14px_36px_rgba(10,37,64,0.2)]"
              loading="lazy"
            />
            <div className="absolute -bottom-5 left-5 rounded-xl bg-white px-5 py-3.5 shadow-[0_10px_30px_rgba(10,37,64,0.18)]">
              <p className="text-[20px] leading-none font-bold text-navy">5,000+</p>
              <p className="mt-1 text-[11.5px] tracking-wide text-muted uppercase">
                Happy families secured
              </p>
            </div>

          </div>

          <div className="reveal">
            <span className="text-[12.5px] font-semibold tracking-[2px] text-brand uppercase">
              Welcome to Aravindh Invisible Grills
            </span>
            <h2 className="mt-3 mb-4 text-[28px] leading-[1.25] font-bold text-navy sm:text-[32px]">
              Safety That Doesn&apos;t Steal Your View
            </h2>
            <p className="mb-6 text-[15.5px] leading-[1.75] text-muted">
              Traditional iron grills cage your home, block sunlight and spoil the look of your
              building. Our high-tensile stainless steel invisible grills and engineered safety
              nets give your family added protection while your balconies and windows stay
              bright, airy and wide open to the view.
            </p>

            <ul className="mb-8 space-y-3">
              {aboutBullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700">
                  <Check className="mt-0.5 h-[19px] w-[19px] shrink-0 text-brand" strokeWidth={2.2} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-semibold text-brand-dark">
              <a href="/about/" className="hover:underline">About us ↗</a>
              <a href="/ss304-invisible-grills/" className="hover:underline">SS304 invisible grills ↗</a>
              <a href="/ss316-invisible-grills/" className="hover:underline">SS316 invisible grills ↗</a>
              <a href="/child-safety-solutions/" className="hover:underline">Child safety solutions ↗</a>
            </div>

            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-md bg-navy px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              <Phone className="h-4 w-4" /> Talk to Our Team — {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <div ref={statsRef} className="bg-navy">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="reveal text-center">
              <p className="text-[32px] leading-none font-bold text-white sm:text-[38px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[12px] font-medium tracking-[0.5px] text-slate-300 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ----------------------------------------------------------------- WHY US */

const whyIcons: Record<string, typeof ShieldCheck> = {
  shield: ShieldCheck,
  sun: Sun,
  eye: Eye,
  bolt: Bolt,
  award: Award,
  tag: Tag,
};

export function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-[1200px] px-5 py-20">
      <SectionHead
        title="Why Choose Aravindh Invisible Grills"
        subtitle="Quality and reliability you can trust for your family's safety"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((item) => {
          const Icon = whyIcons[item.icon] ?? ShieldCheck;
          return (
            <div
              key={item.title}
              className="reveal group rounded-xl border border-slate-100 bg-white p-7 text-center shadow-[0_4px_18px_rgba(10,37,64,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_14px_34px_rgba(10,37,64,0.12)]"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-[16.5px] font-semibold text-navy">{item.title}</h3>
              <p className="text-[13.5px] leading-[1.7] text-muted">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- LOCALITIES */

export function Areas() {
  return (
    <div className="bg-lightbg">
      <section id="localities" className="mx-auto max-w-[1200px] px-5 py-20">
        <SectionHead
          title="Serving Hyderabad & Telangana"
          subtitle="Doorstep measurement and installation across Hyderabad, from Gachibowli and Kondapur to LB Nagar and Vanasthalipuram"
        />

        <div className="local-feature-grid mb-8">
          {[{name: "Hyderabad", region: "City-wide service", url: "/invisible-grills-hyderabad/"}, {name: "Nallagandla", region: "West Hyderabad", url: "/invisible-grills-nallagandla/"}, {name: "Vanasthalipuram", region: "East Hyderabad", url: "/invisible-grills-vanasthalipuram/"}].map(place => <a className="local-feature" href={place.url} key={place.name}><span>{place.region}</span><strong>Invisible grills &amp; safety nets in {place.name}</strong><small>Explore local services ↗</small></a>)}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {LOCALITY_GROUPS.map((group) => (
            <div
              key={group.title}
              className="reveal rounded-xl border border-slate-100 bg-white p-7 shadow-[0_4px_18px_rgba(10,37,64,0.06)]"
            >
              <h3 className="mb-4 flex items-center gap-2 text-[16.5px] font-semibold text-navy">
                <MapPin className="h-5 w-5 text-brand" /> {group.title}
              </h3>
              <div className="grid grid-cols-1 gap-x-4 min-[420px]:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                {group.areas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="flex items-center gap-2 border-b border-dashed border-slate-100 py-2 text-left text-[13.5px] text-slate-600 transition-colors last:border-b-0 hover:text-brand"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {area}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 rounded-xl border border-slate-100 bg-white p-7 shadow-[0_4px_18px_rgba(10,37,64,0.06)]">
          <h3 className="mb-3 text-[18px] font-semibold text-navy">Invisible grills, pigeon nets and safety nets near you in Hyderabad</h3>
          <p className="text-[14.5px] leading-[1.8] text-slate-600">
            Our team travels to your home for measurement and installation, so you do not need to visit us. We regularly fit{" "}
            <a className="font-medium text-brand-dark underline" href="/services/balcony-invisible-grills/">invisible grills</a>,{" "}
            <a className="font-medium text-brand-dark underline" href="/services/pigeon-safety-nets/">pigeon safety nets</a>,{" "}
            <a className="font-medium text-brand-dark underline" href="/services/balcony-safety-nets/">balcony safety nets</a>,{" "}
            <a className="font-medium text-brand-dark underline" href="/services/bird-protection-nets/">bird protection nets</a>, window safety nets,{" "}
            <a className="font-medium text-brand-dark underline" href="/services/children-safety-nets/">child safety nets</a> and{" "}
            <a className="font-medium text-brand-dark underline" href="/services/ceiling-cloth-hangers/">ceiling cloth hangers</a>{" "}
            in {SERVICE_AREAS.slice(1, -1).join(", ")} and {SERVICE_AREAS[SERVICE_AREAS.length - 1]}. We also install PG safety nets for PG hostels and shared accommodation in Hyderabad.
          </p>
          <p className="mt-3 text-[13px] text-slate-500">These are the areas we serve at your doorstep, not branch or office locations.</p>
        </div>

        <div className="reveal mt-9 flex flex-col items-center gap-4 rounded-xl bg-navy px-7 py-6 text-center shadow-[0_12px_30px_rgba(10,37,64,0.25)] sm:flex-row sm:text-left">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand">
            <MapPin className="h-7 w-7" />
          </div>
          <p className="flex-1 text-[15px] leading-[1.7] text-slate-200">
            <span className="text-white">Don&apos;t see your area listed?</span> We cover all
            locations within Greater Hyderabad! Call{" "}
            <a
              href={CONTACT.phoneHref}
              className="font-semibold text-brand underline-offset-2 hover:underline"
            >
              {CONTACT.phone}
            </a>{" "}
            to book your free measurement.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Book Free Visit <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
