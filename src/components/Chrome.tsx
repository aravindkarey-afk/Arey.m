import { useEffect, useState } from "react";
import { CONTACT, NAV, SERVICES, servicePath, scrollToSection } from "../lib/data";
import { Logo, LogoMark } from "./Logo";
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
    return () => {
      document.body.style.overflow = prev;
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

const svcHref = (short: string) => {
  const service = SERVICES.find((item) => item.short === short);
  return service ? servicePath(service) : "/#services";
};

const footerColumns = [
  {
    title: "Invisible Grills",
    items: [
      { label: "Balcony Invisible Grills", href: svcHref("Balcony Invisible Grills") },
      { label: "Window Invisible Grills", href: svcHref("Window Invisible Grills") },
      { label: "SS304 Invisible Grills", href: "/ss304-invisible-grills/" },
      { label: "SS316 Invisible Grills", href: "/ss316-invisible-grills/" },
      { label: "Invisible Grills for Kids", href: svcHref("Invisible Grills for Kids") },
      { label: "Invisible Grills for Pets", href: svcHref("Invisible Grills for Pets") },
      { label: "Child Safety Solutions", href: "/child-safety-solutions/" },
    ],
  },
  {
    title: "Safety Nets & Bird Control",
    items: [
      { label: "Balcony Safety Nets", href: svcHref("Balcony Safety Nets") },
      { label: "Children Safety Nets", href: svcHref("Children Safety Nets") },
      { label: "Pigeon Safety Nets", href: svcHref("Pigeon Safety Nets") },
      { label: "Bird Protection Nets", href: svcHref("Bird Protection Nets") },
      { label: "Anti Bird Nets", href: svcHref("Anti Bird Nets") },
      { label: "Staircase Safety Nets", href: svcHref("Staircase Safety Nets") },
      { label: "Ceiling Cloth Hangers", href: svcHref("Ceiling Cloth Hangers") },
    ],
  },
  {
    title: "Company & Service Areas",
    items: [
      { label: "About Us", href: "/about/" },
      { label: "Contact Us", href: "/contact/" },
      { label: "Invisible Grills in Hyderabad", href: "/invisible-grills-hyderabad/" },
      { label: "Invisible Grills in Nallagandla", href: "/invisible-grills-nallagandla/" },
      { label: "Invisible Grills in Vanasthalipuram", href: "/invisible-grills-vanasthalipuram/" },
      { label: "All Services", href: "/#services" },
      { label: "Our Work Gallery", href: "/#gallery" },
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
              <LogoMark variant="bare" className="h-7 w-7" />
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
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="cursor-pointer text-left text-[13px] text-slate-300 transition-all hover:translate-x-1 hover:text-brand"
                  >
                    {item.label}
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
