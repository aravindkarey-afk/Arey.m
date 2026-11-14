import { Bird, Fence, Grid3x3, Headset, Layers, MapPin, MapPinned, Ruler, Shirt, Volleyball, Wrench, type LucideIcon } from 'lucide-react';
import { ADDITIONAL_SERVICES, FEATURED_SERVICES, SERVICE_CATEGORIES, SERVICES, type ServiceCategory } from '../lib/services';
import { GUIDES } from '../lib/guides';
import { ServiceCard } from '../components/ServiceCard';
import { SectionHead } from '../components/SectionHead';
import { PageShell } from '../components/PageShell';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactActions } from '../components/Actions';
import { CTASection } from '../components/CTASection';
import { ArrowUpRight, ChevronDown } from '../components/Icons';
import './services-hub.css';

export function Services() {
  return <section id="services" className="border-y border-borderline bg-lightbg"><div className="page-container py-14 sm:py-20">
    <SectionHead eyebrow="Complete safety solutions" title="Protection, play and everyday utility." subtitle="Explore our 14 main services—from invisible grills and safety nets to bird control, sports netting and ceiling cloth drying hangers. Every service has its own detailed page." />
    <div className="mb-9 flex flex-wrap justify-center gap-2">{SERVICE_CATEGORIES.map((category) => <a key={category} href={`/services/#${category.toLowerCase().replace(/ /g, '-')}`} className="inline-flex min-h-11 items-center rounded-full border border-borderline bg-white px-4 py-2 text-xs font-semibold text-navy hover:border-brand hover:text-brand-dark">{category}</a>)}</div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{FEATURED_SERVICES.map((service, index) => <ServiceCard key={service.slug} service={service} priority={index === 0} />)}</div>
    <details className="group mt-8 rounded-2xl border border-borderline bg-white p-5 sm:p-7"><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy [&::-webkit-details-marker]:hidden"><span>More specialised services <span className="ml-2 text-sm font-normal text-muted">19 additional solutions</span></span><ChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-180" /></summary><div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{ADDITIONAL_SERVICES.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></details>
    <div className="mt-8 text-center"><a href="/services/" className="btn btn-outline">Browse all 33 services <ArrowUpRight className="h-4 w-4" /></a></div>
  </div></section>;
}

const SERVICE_CATEGORY_ICONS: Record<ServiceCategory, LucideIcon> = {
  'Invisible Grills': Fence,
  'Safety Nets': Grid3x3,
  'Bird Control': Bird,
  'Sports Nets': Volleyball,
  'Cloth Hangers': Shirt,
};

const SERVICE_HIGHLIGHTS: { label: string; icon: LucideIcon }[] = [
  { label: 'Free Site Visit', icon: MapPin },
  { label: 'Custom Measurements', icon: Ruler },
  { label: 'Professional Installation', icon: Wrench },
  { label: 'Quality Materials', icon: Layers },
  { label: 'Hyderabad Service', icon: MapPinned },
  { label: 'Customer Support', icon: Headset },
];

function ServicesHighlights() {
  return <ul aria-label="Service highlights" className="mt-6 grid grid-cols-2 gap-1 rounded-xl border border-[#dce7f3] bg-white p-2 sm:grid-cols-3 lg:grid-cols-6">
    {SERVICE_HIGHLIGHTS.map(({ label, icon: Icon }) => <li key={label} className="flex min-h-11 items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-medium leading-4 text-navy">
      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-callblue" strokeWidth={1.8} />
      <span>{label}</span>
    </li>)}
  </ul>;
}

export function ServicesHub() {
  return <PageShell className="services-hub">
    <section className="border-b border-borderline bg-lightbg"><div className="page-container py-8 sm:py-12"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }]} /><div className="mt-8 max-w-3xl"><p className="eyebrow">All products &amp; services</p><h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-navy sm:text-5xl">The right solution for every space.</h1><p className="mt-5 text-base leading-8 text-muted sm:text-lg">Invisible grills, safety nets, sports netting, bird control and cloth hangers in Hyderabad. Compare 33 dedicated service pages, then book a free site visit to confirm what fits your property.</p><ContactActions className="mt-7" /></div>
      <ServicesHighlights />
      <nav aria-label="Service categories" className="mt-9 flex flex-wrap gap-2">{SERVICE_CATEGORIES.map((category) => {
        const Icon = SERVICE_CATEGORY_ICONS[category];
        const count = SERVICES.filter((service) => service.category === category).length;
        return <a key={category} href={`#${category.toLowerCase().replace(/ /g, '-')}`} className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-borderline bg-white px-2 py-2 text-xs font-semibold text-navy transition-colors hover:border-callblue lg:gap-3 lg:px-4"><Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-callblue" strokeWidth={1.8} />{category}<span className="text-brand-dark">{count}</span></a>;
      })}</nav>
    </div></section>
    {SERVICE_CATEGORIES.map((category) => <section key={category} id={category.toLowerCase().replace(/ /g, '-')} className="page-container py-12 sm:py-16 services-hub-category"><SectionHead align="left" title={category} subtitle={category === 'Invisible Grills' ? 'View-conscious cable barriers, material grades and application-specific options.' : category === 'Safety Nets' ? 'Mesh enclosures planned around the opening, intended use and fixing perimeter.' : category === 'Bird Control' ? 'Entry-point netting and ledge-specific solutions for cleaner, more usable spaces.' : category === 'Sports Nets' ? 'Practice and ball-containment netting for terraces, courts and training facilities.' : 'Overhead drying systems measured around reach, ceiling construction and everyday laundry.'} /><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{SERVICES.filter((service) => service.category === category).map((service) => <ServiceCard key={service.slug} service={service} categoryIcon={SERVICE_CATEGORY_ICONS[category]} />)}</div></section>)}
    <section id="guides" className="border-y border-borderline bg-lightbg"><div className="page-container py-14"><SectionHead align="left" eyebrow="Make an informed choice" title="Planning guides" subtitle="Practical comparisons and preparation advice, without universal safety or pricing promises." /><div className="grid gap-5 sm:grid-cols-2">{GUIDES.map((guide) => <a key={guide.path} href={guide.path} className="group rounded-2xl border border-borderline bg-white p-6 hover:border-brand"><p className="text-[10px] font-semibold tracking-wider text-brand-dark uppercase">{guide.eyebrow}</p><h3 className="mt-3 flex items-center justify-between gap-3 text-xl font-semibold text-navy">{guide.h1}<ArrowUpRight className="h-5 w-5 shrink-0" /></h3><p className="mt-3 text-sm leading-7 text-muted">{guide.intro[0]}</p></a>)}</div></div></section>
    <CTASection />
  </PageShell>;
}
