import { useEffect, useRef, useState } from 'react';
import { CONTACT, NAV, servicePath, SERVICES } from '../lib/data';
import { SERVICE_BY_PATH } from '../lib/services';
import { Logo, LogoMark } from './Logo';
import { ArrowUp, Check, Close, Mail, MapPin, Menu, Phone, WhatsApp } from './Icons';
import { cn } from '../utils/cn';
import { usePathname } from './PageContext';
import { whatsappLink } from './Actions';

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const active = (href: string) => href === '/' ? pathname === '/' : pathname === href || (href === '/services/' && SERVICE_BY_PATH.has(pathname));

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const resize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('keydown', escape);
    desktop.addEventListener('change', resize);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', escape); desktop.removeEventListener('change', resize); };
  }, [open]);

  return <header className="site-header sticky top-0 z-[1000] w-full border-b border-borderline bg-white shadow-[0_3px_18px_rgba(10,37,64,0.05)]">
    <div className="hidden bg-navy text-white md:block">
      <div className="page-container flex min-h-9 items-center justify-between gap-4 py-1.5 text-[11px] xl:text-xs">
        <p className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-300" /> Grills, safety nets, sports nets, bird control &amp; cloth hangers</p>
        <a href={CONTACT.phoneHref} className="flex shrink-0 items-center gap-2 font-semibold hover:text-emerald-300"><Phone className="h-3.5 w-3.5" /> {CONTACT.phone}</a>
      </div>
    </div>
    <div className="page-container flex min-h-[76px] items-center justify-between gap-3 py-3">
      <Logo />
      <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
        {NAV.map((item) => <a key={item.href} href={item.href} aria-current={active(item.href) ? 'page' : undefined}
          className={cn('nav-link py-3 text-[13px] font-semibold xl:text-sm', active(item.href) ? 'text-brand-dark' : 'text-navy')}>{item.label}</a>)}
        <a href={CONTACT.phoneHref} className="btn btn-primary !min-h-10 !px-4 !py-2 !text-xs"><Phone className="h-4 w-4" /> Call Now</a>
      </nav>
      <div className="flex items-center gap-1 lg:hidden">
        <a href={CONTACT.phoneHref} className="btn btn-primary !min-h-11 !px-3 !text-xs" aria-label="Call Aravind Invisible Grills"><Phone className="h-4 w-4" /><span className="hidden min-[380px]:inline">Call</span></a>
        <button ref={toggle} type="button" onClick={() => setOpen(!open)} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-navy hover:bg-lightbg"
          aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>
    <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-borderline bg-white lg:hidden">
      <ul className="page-container py-3">
        {NAV.map((item) => <li key={item.href} className="border-b border-slate-100 last:border-0">
          <a href={item.href} onClick={() => setOpen(false)} aria-current={active(item.href) ? 'page' : undefined}
            className={cn('flex min-h-12 items-center justify-between py-3 text-base font-semibold', active(item.href) ? 'text-brand-dark' : 'text-navy')}>{item.label}<span aria-hidden="true">↗</span></a>
        </li>)}
      </ul>
      <div className="page-container grid grid-cols-2 gap-3 pt-2 pb-5">
        <a href={CONTACT.phoneHref} className="btn btn-primary"><Phone className="h-4 w-4" /> Call Now</a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsApp className="h-5 w-5" /> WhatsApp</a>
      </div>
    </nav>
  </header>;
}

const bySlug = (slug: string) => servicePath(SERVICES.find((service) => service.slug === slug)!);
const footerColumns = [
  { title: 'Invisible Grills', links: [['Invisible Grills', '/invisible-grills/'], ['SS304 Invisible Grills', '/ss304-invisible-grills/'], ['SS316 Invisible Grills', '/ss316-invisible-grills/'], ['Balcony Invisible Grills', bySlug('balcony-invisible-grills')], ['Window Invisible Grills', bySlug('window-invisible-grills')]] },
  { title: 'Safety Nets', links: [['Balcony Safety Nets', '/balcony-safety-nets/'], ['Child Safety Nets', '/child-safety-nets/'], ['Sports Safety Nets', '/sports-safety-nets/'], ['Cricket Practice Nets', '/cricket-practice-nets/'], ['Football Safety Nets', '/football-safety-nets/']] },
  { title: 'Bird Control', links: [['Pigeon Safety Nets', '/pigeon-safety-nets/'], ['Bird Protection Nets', '/bird-protection-nets/'], ['Anti-Bird Spikes', '/anti-bird-spikes/'], ['Bird Spikes Installation', '/bird-spikes-installation/'], ['All Services', '/services/']] },
  { title: 'Cloth Hangers & Company', links: [['Cloth Hangers', '/cloth-hangers/'], ['Ceiling Cloth Drying Hangers', '/ceiling-cloth-drying-hangers/'], ['About Us', '/about/'], ['Project Gallery', '/gallery/'], ['Contact Us', '/contact/']] },
];
const areaLinks = [['Hyderabad', '/invisible-grills-hyderabad/'], ['Nallagandla', '/invisible-grills-nallagandla/'], ['Vanasthalipuram', '/invisible-grills-vanasthalipuram/'], ['Gachibowli', '/locations/gachibowli/'], ['Kukatpally', '/locations/kukatpally/'], ['Secunderabad', '/locations/secunderabad/']];

export function Footer() {
  return <footer className="site-footer bg-navy text-slate-300">
    <div className="page-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.35fr_1fr_1fr_1fr_1.15fr]">
      <div className="max-w-sm md:col-span-2 lg:col-span-3 xl:col-span-1">
        <a href="/" className="mb-5 flex items-center gap-3" aria-label="Aravind Invisible Grills homepage">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10"><LogoMark variant="bare" className="h-8 w-8" /></span>
          <span className="text-lg font-bold leading-tight text-white">Aravind <span className="text-emerald-300">Invisible Grills</span></span>
        </a>
        <p className="text-sm leading-7">Complete safety, protection and installation services. Invisible grills, safety nets, sports nets, bird control and cloth hangers across Hyderabad.</p>
        <div className="mt-5 space-y-3 text-sm">
          <a href={CONTACT.phoneHref} className="flex min-h-8 items-center gap-2 hover:text-emerald-300"><Phone className="h-4 w-4 shrink-0 text-emerald-300" /> {CONTACT.phone}</a>
          <a href={CONTACT.emailHref} className="flex min-h-8 items-center gap-2 break-all hover:text-emerald-300"><Mail className="h-4 w-4 shrink-0 text-emerald-300" /> {CONTACT.email}</a>
          <p className="flex items-start gap-2"><MapPin className="mt-1 h-4 w-4 shrink-0 text-emerald-300" /> Doorstep service in Hyderabad, Telangana</p>
        </div>
      </div>
      {footerColumns.map((column) => <div key={column.title}>
        <h2 className="mb-4 text-sm font-semibold text-white">{column.title}</h2>
        <ul className="space-y-1">{column.links.map(([label, href]) => <li key={href}><a href={href} className="inline-block min-h-8 py-1.5 text-[13px] leading-6 hover:text-emerald-300">{label}</a></li>)}</ul>
      </div>)}
    </div>
    <div className="page-container border-t border-white/10 py-7">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"><a href="/locations/" className="min-h-8 py-2 font-semibold text-white hover:text-emerald-300">All service locations ↗</a>{areaLinks.map(([label, href]) => <a key={href} href={href} className="min-h-8 py-2 hover:text-emerald-300">{label}</a>)}</div>
      <p className="mt-3 text-[11px] leading-6 text-slate-400">Listed areas are service locations, not branch offices. Nallagandla refers to the Hyderabad suburb.</p>
    </div>
    <div className="border-t border-white/10"><p className="page-container py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} Aravind Invisible Grills. All rights reserved.</p></div>
  </footer>;
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="floating-actions fixed right-4 bottom-5 z-[900] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
    {showTop && <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-borderline bg-white text-navy shadow-lg" aria-label="Back to top"><ArrowUp className="h-5 w-5" /></button>}
    <a href={CONTACT.phoneHref} className="flex h-12 w-12 items-center justify-center rounded-full bg-callblue text-white shadow-lg transition-transform hover:scale-105 sm:h-13 sm:w-13" aria-label="Call Now: +91 7995150298" title="Call Now"><Phone className="h-5 w-5" /></a>
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex h-13 w-13 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105" aria-label="Chat on WhatsApp for a free site visit" title="WhatsApp Us"><WhatsApp className="h-7 w-7" /></a>
  </div>;
}
