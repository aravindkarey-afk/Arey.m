import { useEffect, useRef, useState } from 'react';
import { HERO_SLIDES, STATS, WHY_US } from '../lib/data';
import { FEATURED_PLACES } from '../lib/locations';
import { SectionHead } from '../components/SectionHead';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { ContactActions } from '../components/Actions';
import { ArrowLeft, ArrowRight, ArrowUpRight, Award, Bolt, Check , Eye, MapPin, Ruler, ShieldCheck, Sun, Tag } from '../components/Icons';
import { cn } from '../utils/cn';

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (paused || hovered || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer.current = window.setTimeout(() => setActive((index) => (index + 1) % HERO_SLIDES.length), 6500);
    return () => window.clearTimeout(timer.current);
  }, [active, paused, hovered]);
  const go = (index: number) => { setPaused(true); setActive((index + HERO_SLIDES.length) % HERO_SLIDES.length); };
  return <section id="home" className="relative overflow-hidden border-b border-borderline bg-lightbg">
    <div aria-hidden="true" className="pointer-events-none absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full border-[70px] border-brand/[0.035]" />
    <div className="page-container relative grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-3.5 py-2 text-[10px] font-semibold tracking-[0.12em] text-brand-dark uppercase sm:text-xs"><ShieldCheck className="h-4 w-4" /> Complete safety &amp; installation services</p>
        <h1 className="mt-6 text-[2.7rem] leading-[1.09] font-bold tracking-[-0.045em] text-navy sm:text-6xl lg:text-[4.1rem]">Invisible Grills in Hyderabad.<br /><span className="text-brand-dark">Safety for every space.</span></h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">Safer balconies. Cleaner utilities. Better places to play. Explore stainless steel grills, safety nets, sports netting, bird control and ceiling cloth hangers—measured around your home.</p>
        <ContactActions quote={false} className="mt-7" />
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3"><a href="/services/" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy hover:text-brand-dark">Explore all services <ArrowUpRight className="h-4 w-4" /></a><a href="/contact/#enquiry" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-dark"><Ruler className="h-4 w-4" /> Book a free site visit</a></div>
        <p className="mt-5 flex items-center gap-2 text-xs text-muted"><MapPin className="h-4 w-4 text-brand" /> Doorstep service across Hyderabad, Telangana</p>
      </div>
      <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocus={() => setHovered(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false); }}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-navy shadow-[0_25px_60px_-25px_rgba(10,37,64,0.45)]" role="region" aria-roledescription="carousel" aria-label="Safety service illustrations">
          <div className="hero-track flex h-full w-full" style={{ transform: `translateX(-${active * 100}%)` }}>
            {HERO_SLIDES.map((slide, index) => <div key={slide.badge} className="relative h-full min-w-full" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${HERO_SLIDES.length}: ${slide.badge}`} aria-hidden={index !== active}>
              <ResponsiveImage src={slide.src} alt={slide.alt} priority={index === 0} className="h-full w-full object-cover" sizes="(max-width: 1023px) calc(100vw - 40px), 580px" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy/90 to-transparent" />
              <div className="absolute right-6 bottom-16 left-6 text-white"><p className="text-[10px] font-semibold tracking-[0.18em] text-emerald-200 uppercase">A solution for your space</p><p className="mt-2 text-xl font-semibold sm:text-2xl">{slide.badge}</p></div>
            </div>)}
          </div>
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3">
            <div className="flex gap-1">{HERO_SLIDES.map((slide, index) => <button key={slide.badge} type="button" onClick={() => go(index)} aria-label={`Show ${slide.badge}`} aria-pressed={index === active} className="flex h-8 w-7 cursor-pointer items-center justify-center"><span className={cn('h-1.5 rounded-full transition-all', index === active ? 'w-6 bg-emerald-300' : 'w-1.5 bg-white/70')} /></button>)}</div>
            <div className="flex gap-2"><button type="button" onClick={() => setPaused(!paused)} className="min-h-9 cursor-pointer rounded-full bg-white/15 px-3 text-[11px] font-medium text-white hover:bg-white/25" aria-pressed={paused}>{paused ? 'Play' : 'Pause'}</button><button type="button" onClick={() => go(active - 1)} className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-navy" aria-label="Previous slide"><ArrowLeft className="h-4 w-4" /></button><button type="button" onClick={() => go(active + 1)} className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-navy" aria-label="Next slide"><ArrowRight className="h-4 w-4" /></button></div>
          </div>
        </div>
        <div className="relative z-10 mx-4 -mt-5 flex items-center gap-3 rounded-xl border border-borderline bg-white p-4 shadow-lg sm:mx-8"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark"><Ruler className="h-5 w-5" /></span><div><p className="text-sm font-semibold text-navy">Your space, properly measured.</p><p className="mt-1 text-xs text-muted">Free site visit · Clear options · Written quotation</p></div></div>
      </div>
    </div>
  </section>;
}

export function About() {
  return <section id="about" className="page-container py-14 sm:py-20">
    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div className="relative"><ResponsiveImage src="/images/family-balcony.jpg" alt="Illustration of a family enjoying an open balcony with invisible grills" className="aspect-[4/3] w-full rounded-3xl object-cover" sizes="(max-width: 1023px) calc(100vw - 40px), 500px" /><span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy">Safer Homes, Brighter Views</span></div>
      <div><p className="eyebrow">More than invisible grills</p><h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] text-navy sm:text-4xl">One team for the spaces you want to protect.</h2><p className="mt-5 text-base leading-8 text-muted">Aravindh Invisible Grills brings together home safety, bird protection, sports netting and everyday utility solutions. We start with your space, explain the options and measure before recommending a system.</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{['Balconies & windows', 'Bird-prone ledges & utilities', 'Cricket & football practice areas', 'Cloth drying & laundry spaces'].map((item) => <li key={item} className="flex items-center gap-2 text-sm text-navy"><Check className="h-4 w-4 shrink-0 text-brand" />{item}</li>)}</ul><a href="/about/" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-dark">About Aravindh Invisible Grills <ArrowUpRight className="h-4 w-4" /></a></div>
    </div>
    <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-borderline bg-lightbg px-5 py-8 lg:grid-cols-4">{STATS.map((stat) => <div key={stat.label} className="text-center"><p className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">{stat.value}</p><p className="mt-2 text-[10px] font-medium tracking-wider text-muted uppercase sm:text-xs">{stat.label}</p></div>)}</div>
  </section>;
}

const valueIcons: Record<string, typeof ShieldCheck> = { shield: ShieldCheck, sun: Sun, eye: Eye, bolt: Bolt, award: Award, tag: Tag };
export function WhyUs() {
  return <section id="why-us" className="page-container py-14 sm:py-20"><SectionHead eyebrow="Why choose Aravindh" title="The right fit. A clear process." subtitle="Thoughtful material selection and a measured installation plan, without one-size-fits-all promises." /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{WHY_US.map((item) => { const Icon = valueIcons[item.icon] ?? ShieldCheck; return <article key={item.title} className="rounded-2xl border border-borderline bg-white p-6"><span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-dark"><Icon className="h-5 w-5" /></span><h3 className="text-lg font-semibold text-navy">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{item.text}</p></article>; })}</div></section>;
}

export function Areas() {
  return <section id="areas" className="border-y border-borderline bg-lightbg"><div className="page-container py-14 sm:py-20"><SectionHead eyebrow="Local service, not fictional branches" title="Safety solutions across Hyderabad" subtitle="Find your area, explore the services and arrange a site visit. Nallagandla is the Hyderabad suburb—not Nalgonda town." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{FEATURED_PLACES.map((place) => <a key={place.path} href={place.path} className="group flex min-h-16 items-center justify-between gap-3 rounded-xl border border-borderline bg-white px-5 py-4 text-sm font-semibold text-navy transition-colors hover:border-brand hover:text-brand-dark"><span className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-brand" />{place.area}</span><ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>)}</div><div className="mt-7 flex flex-wrap items-center justify-between gap-4"><p className="max-w-2xl text-xs leading-6 text-muted">These are places we travel to for measurement and installation. No branch office or physical address is implied. Confirm your exact location when booking.</p><a href="/locations/" className="btn btn-outline">All locations &amp; local guides <ArrowUpRight className="h-4 w-4" /></a></div></div></section>;
}

export function FreeVisit() {
  return <section className="page-container py-14 sm:py-20"><div className="grid items-center gap-8 rounded-3xl bg-navy p-7 text-white sm:p-10 lg:grid-cols-[1fr_1fr] lg:p-12"><div><p className="eyebrow !text-emerald-300">Free site visit &amp; measurement</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Tell us the space.<br />We’ll help with the plan.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">From one balcony to a complete property, share your requirements. We confirm access, measure the openings and explain the options before you approve a written quote.</p><ContactActions quote={false} className="mt-7" /></div><ol className="space-y-5">{[['Share your requirement', 'Choose a service and tell us your Hyderabad area. Photographs help us start the conversation.'], ['Confirm the site visit', 'We discuss access and a convenient appointment. Measurement is free in our listed service areas.'], ['Review the written quote', 'Understand the proposed materials, scope and warranty terms before installation.']].map(([title, text], index) => <li key={title} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-sm font-bold text-navy">{index + 1}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-300">{text}</p></div></li>)}</ol></div></section>;
}
