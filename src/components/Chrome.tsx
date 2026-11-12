import { useEffect, useState } from "react";
import { CONTACT, NAV, SERVICES, servicePath, scrollToSection } from "../lib/data";
import { Logo } from "./Logo";
import {
  ArrowUp,
  Check,
  Close,
  Mail,
  MapPin,
  Menu,
  Phone,
  WhatsApp,
} from "./Icons";
import { cn } from "../utils/cn";

/* ----------------------------------------------------------------- HEADER */

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const go = (target: string) => {
    setOpen(false);
    if (window.location.pathname !== "/") { window.location.href = `/#${target}`; return; }
    scrollToSection(target);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-[1000] w-full bg-white transition-shadow duration-300",
        scrolled
          ? "shadow-[0_4px_24px_rgba(10,37,64,0.14)]"
          : "shadow-[0_2px_15px_rgba(0,0,0,0.08)]"
      )}
    >
      <div className="hidden bg-navy text-white md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-1.5 text-[12.5px]">
          <p className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-brand" strokeWidth={2.6} />
            Invisible grills &amp; safety nets across Hyderabad and Telangana
          </p>
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 font-semibold transition-colors hover:text-brand"
          >
            <Phone className="h-3.5 w-3.5" /> {CONTACT.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3">
        <Logo onClick={() => go("home")} />

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.target}
              href={`/#${item.target}`}
              onClick={(event) => { if (window.location.pathname === "/") { event.preventDefault(); go(item.target); } }}
              className="cursor-pointer text-[14.5px] font-medium text-navy transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-1.5 rounded-md bg-brand px-3 py-2 text-[13px] font-semibold text-white"
            aria-label="Call Aravindh Invisible Grills"
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="cursor-pointer p-1.5 text-navy"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="fade-in max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-borderline bg-white lg:hidden">
          <ul className="mx-auto max-w-[1200px] px-5 py-3">
            {NAV.map((item) => (
              <li key={item.target} className="border-b border-slate-100 last:border-b-0">
                <a
                  href={`/#${item.target}`}
                  onClick={(event) => { if (window.location.pathname === "/") { event.preventDefault(); go(item.target); } else setOpen(false); }}
                  className="block w-full cursor-pointer py-3 text-left text-[15px] font-medium text-navy transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ----------------------------------------------------------------- FOOTER */

const footerColumns = [
  {
    title: "Safety Grills & Nets",
    items: [
      "Balcony Invisible Grills",
      "Window Invisible Grills",
      "Invisible Grills for Pets",
      "Invisible Grills for Kids",
      "Invisible Grills for Birds",
      "Balcony Safety Nets",
      "Building Safety Nets",
      "Car Parking Safety Nets",
      "Children Safety Nets",
    ],
  },
  {
    title: "Sports & Utility Solutions",
    items: [
      "All Sports Practice Nets",
      "Cricket Practice Nets",
      "Terrace Cricket Nets",
      "Football Stop Nets",
      "Ceiling Cloth Hangers",
      "Manual Ceiling Cloth Hangers",
      "SS Ceiling Cloth Hangers",
    ],
  },
  {
    title: "Anti Bird Nets",
    items: [
      "Anti Bird Nets",
      "Bird Control Spikes",
      "Bird Protection Nets",
      "Pigeon Safety Nets",
      "Cricket Practice Nets",
      "Terrace Cricket Nets",
      "Football Stop Nets",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-[400px]">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#4caf50" strokeWidth="1.6" />
                <line x1="7.5" y1="3" x2="7.5" y2="21" stroke="#ffffff" strokeWidth="1.4" />
                <line x1="12" y1="3" x2="12" y2="21" stroke="#ffffff" strokeWidth="1.4" />
                <line x1="16.5" y1="3" x2="16.5" y2="21" stroke="#ffffff" strokeWidth="1.4" />
              </svg>
            </span>
            <h3 className="text-[19px] font-bold text-white">
              Aravindh <span className="text-brand">Invisible Grills</span>
            </h3>
          </div>

          <p className="mb-4 text-[13.5px] leading-[1.7]">
            Safer homes, brighter views — premium invisible grills, safety nets and bird-control
            solutions installed across Hyderabad &amp; Telangana.
          </p>

          <p className="mb-2 flex items-center gap-2 text-[13px]">
            <Phone className="h-3.5 w-3.5 shrink-0 text-brand" />
            <a href={CONTACT.phoneHref} className="hover:text-brand">
              {CONTACT.phone}
            </a>
          </p>
          <p className="mb-2 flex items-center gap-2 text-[13px]">
            <Mail className="h-3.5 w-3.5 shrink-0 text-brand" />
            <a href={CONTACT.emailHref} className="break-all hover:text-brand">
              {CONTACT.email}
            </a>
          </p>
          <p className="flex items-center gap-2 text-[13px]">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" /> {CONTACT.coverage}
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-1.5 text-[15px] font-semibold text-white">{col.title}</h4>
            <ul className="space-y-0.5">
              {col.items.map((item) => (
                <li key={item}>
                  <a
                    href={SERVICES.find((service) => service.short === item) ? servicePath(SERVICES.find((service) => service.short === item)!) : "/#services"}
                    className="cursor-pointer text-left text-[13px] text-slate-300 transition-all hover:translate-x-1 hover:text-brand"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-6 gap-y-3 px-5 pb-8 text-sm"><span className="font-semibold text-white">Service areas:</span><a href="/invisible-grills-hyderabad/" className="hover:text-brand">Hyderabad</a><a href="/invisible-grills-nallagandla/" className="hover:text-brand">Nallagandla</a><a href="/invisible-grills-vanasthalipuram/" className="hover:text-brand">Vanasthalipuram</a></div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1200px] px-5 py-5 text-center text-[12.5px] text-slate-400">
          © {new Date().getFullYear()} Aravindh Invisible Grills. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

/* --------------------------------------------------------- FLOATING ACTIONS */

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-5 z-[999] flex flex-col items-center gap-3 sm:right-6 sm:bottom-6">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fade-in flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-navy text-white shadow-[0_6px_18px_rgba(10,37,64,0.35)] transition-transform hover:scale-110"
          title="Back to top"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href={CONTACT.phoneHref}
        className="relative isolate flex h-[54px] w-[54px] items-center justify-center rounded-full bg-callblue text-white shadow-[0_8px_22px_rgba(0,123,255,0.45)] transition-transform hover:scale-110"
        title="Call Us Now"
        aria-label="Call us now"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href={CONTACT.whatsappGeneral}
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-ring relative isolate flex h-[54px] w-[54px] items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_22px_rgba(37,211,102,0.5)] transition-transform hover:scale-110"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <WhatsApp className="h-7 w-7" />
      </a>
    </div>
  );
}
