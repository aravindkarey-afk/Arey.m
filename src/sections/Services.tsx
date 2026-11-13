import { ADDITIONAL_SERVICES, FEATURED_SERVICES, SERVICE_CATEGORIES, SERVICES } from '../lib/services';
import { GUIDES } from '../lib/guides';
import { ServiceCard } from '../components/ServiceCard';
import { SectionHead } from '../components/SectionHead';
import { PageShell } from '../components/PageShell';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactActions } from '../components/Actions';
import { CTASection } from '../components/CTASection';
import { ArrowUpRight, ChevronDown } from '../components/Icons';

export function Services() {
  return <section id="services" className="border-y border-borderline bg-lightbg"><div className="page-container py-14 sm:py-20">
    <SectionHead eyebrow="Complete safety solutions" title="Protection, play and everyday utility." subtitle="Explore our 14 main services—from invisible grills and safety nets to bird control, sports netting and ceiling cloth drying hangers. Every service has its own detailed page." />
    <div className="mb-9 flex flex-wrap justify-center gap-2">{SERVICE_CATEGORIES.map((category) => <a key={category} href={`/services/#${category.toLowerCase().replace(/ /g, '-')}`} className="inline-flex min-h-11 items-center rounded-full border border-borderline bg-white px-4 py-2 text-xs font-semibold text-navy hover:border-brand hover:text-brand-dark">{category}</a>)}</div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{FEATURED_SERVICES.map((service, index) => <ServiceCard key={service.slug} service={service} priority={index === 0} />)}</div>
    <details className="group mt-8 rounded-2xl border border-borderline bg-white p-5 sm:p-7"><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy [&::-webkit-details-marker]:hidden"><span>More specialised services <span className="ml-2 text-sm font-normal text-muted">19 additional solutions</span></span><ChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-180" /></summary><div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{ADDITIONAL_SERVICES.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></details>
    <div className="mt-8 text-center"><a href="/services/" className="btn btn-outline">Browse all 33 services <ArrowUpRight className="h-4 w-4" /></a></div>
  </div></section>;
}

export function ServicesHub() {
  return <PageShell>
    <section className="border-b border-borderline bg-lightbg"><div className="page-container py-8 sm:py-12"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }]} /><div className="mt-8 max-w-3xl"><p className="eyebrow">All products &amp; services</p><h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-navy sm:text-5xl">The right solution for every space.</h1><p className="mt-5 text-base leading-8 text-muted sm:text-lg">Invisible grills, safety nets, sports netting, bird control and cloth hangers in Hyderabad. Compare 33 dedicated service pages, then book a free site visit to confirm what fits your property.</p><ContactActions className="mt-7" /></div><nav aria-label="Service categories" className="mt-9 flex flex-wrap gap-2">{SERVICE_CATEGORIES.map((category) => <a key={category} href={`#${category.toLowerCase().replace(/ /g, '-')}`} className="inline-flex min-h-11 items-center gap-3 rounded-full border border-borderline bg-white px-4 py-2 text-xs font-semibold text-navy hover:border-brand">{category}<span className="text-brand-dark">{SERVICES.filter((service) => service.category === category).length}</span></a>)}</nav></div></section>
    {SERVICE_CATEGORIES.map((category) => <section key={category} id={category.toLowerCase().replace(/ /g, '-')} className="page-container py-12 sm:py-16"><SectionHead align="left" title={category} subtitle={category === 'Invisible Grills' ? 'View-conscious cable barriers, material grades and application-specific options.' : category === 'Safety Nets' ? 'Mesh enclosures planned around the opening, intended use and fixing perimeter.' : category === 'Bird Control' ? 'Entry-point netting and ledge-specific solutions for cleaner, more usable spaces.' : category === 'Sports Nets' ? 'Practice and ball-containment netting for terraces, courts and training facilities.' : 'Overhead drying systems measured around reach, ceiling construction and everyday laundry.'} /><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{SERVICES.filter((service) => service.category === category).map((service) => <ServiceCard key={service.slug} service={service} />)}</div></section>)}
    <section id="guides" className="border-y border-borderline bg-lightbg"><div className="page-container py-14"><SectionHead align="left" eyebrow="Make an informed choice" title="Planning guides" subtitle="Practical comparisons and preparation advice, without universal safety or pricing promises." /><div className="grid gap-5 sm:grid-cols-2">{GUIDES.map((guide) => <a key={guide.path} href={guide.path} className="group rounded-2xl border border-borderline bg-white p-6 hover:border-brand"><p className="text-[10px] font-semibold tracking-wider text-brand-dark uppercase">{guide.eyebrow}</p><h3 className="mt-3 flex items-center justify-between gap-3 text-xl font-semibold text-navy">{guide.h1}<ArrowUpRight className="h-5 w-5 shrink-0" /></h3><p className="mt-3 text-sm leading-7 text-muted">{guide.intro[0]}</p></a>)}</div></div></section>
    <CTASection />
  </PageShell>;
}
