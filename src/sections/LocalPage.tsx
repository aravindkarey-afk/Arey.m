import { SERVICES } from '../lib/services';
import { COMBINATION_PLACES, PLACES, type Place } from '../lib/locations';
import { PageShell } from '../components/PageShell';
import { PageHero } from '../components/PageHero';
import { SectionHead } from '../components/SectionHead';
import { ContactActions } from '../components/Actions';
import { ServiceCard } from '../components/ServiceCard';
import { CTASection } from '../components/CTASection';
import { FAQList } from '../components/FAQList';
import { ArrowUpRight, Check, MapPin } from '../components/Icons';

export function LocalPage({ place }: { place: Place }) {
  const service = SERVICES.find((item) => item.slug === place.primaryService)!;
  const selected = place.services.map((slug) => SERVICES.find((item) => item.slug === slug)!);
  const combinations = COMBINATION_PLACES.filter((item) => item.area === place.area);
  const nearby = place.nearby.map((name) => PLACES.find((item) => item.area === name && !item.combination)).filter((item): item is Place => !!item);
  return <PageShell>
    <PageHero eyebrow={`Service location · ${place.area}`} title={place.h1} description={place.intro} image={place.image} alt={place.imageAlt} service={service.short} area={place.area}
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations/' }, { label: place.area, href: place.path }]} />
    <section className="page-container py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div><p className="eyebrow">Local service, thoughtfully planned</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">{place.localHeading}</h2><div className="mt-6 space-y-5">{place.localParagraphs.map((paragraph) => <p key={paragraph} className="text-sm leading-8 text-muted sm:text-base">{paragraph}</p>)}</div></div>
        <div className="rounded-2xl border border-borderline bg-lightbg p-6 sm:p-8"><h2 className="flex items-center gap-2 text-xl font-semibold text-navy"><MapPin className="h-5 w-5 text-brand" /> Before your site visit</h2><ul className="mt-6 space-y-5">{place.checklist.map((item) => <li key={item.heading} className="flex gap-3 text-sm leading-7 text-muted"><Check className="mt-1.5 h-4 w-4 shrink-0 text-brand" /><span><strong className="font-semibold text-navy">{item.heading}.</strong> {item.text}</span></li>)}</ul><p className="mt-6 border-t border-borderline pt-5 text-xs leading-6 text-muted">This is a service area, not a branch office. Nallagandla refers to the Hyderabad suburb, not Nalgonda town.</p><ContactActions service={service.short} area={place.area} quote={false} className="mt-6" /></div>
      </div>
    </section>
    <section className="border-y border-borderline bg-lightbg"><div className="page-container py-14 sm:py-20"><SectionHead title={`Our services in ${place.area}`} subtitle="Compare the options, then let us assess what suits your space." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{selected.map((item) => <ServiceCard key={item.slug} service={item} />)}</div>
      <div className="mt-8 flex flex-wrap gap-3"><a href="/services/" className="btn btn-outline">View all services <ArrowUpRight className="h-4 w-4" /></a>{combinations.map((item) => <a key={item.path} href={item.path} className="btn btn-outline">{item.h1}<ArrowUpRight className="h-4 w-4" /></a>)}</div>
    </div></section>
    <section className="page-container grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
      <div><h2 className="mb-7 text-3xl font-bold tracking-tight text-navy">Questions about service in {place.area}</h2><FAQList items={place.faqs} /></div>
      <aside className="rounded-2xl border border-borderline p-6 sm:p-8"><h2 className="text-xl font-semibold text-navy">Explore nearby service areas</h2><ul className="mt-5 space-y-2">{nearby.map((item) => <li key={item.path}><a href={item.path} className="flex min-h-11 items-center justify-between gap-3 border-b border-borderline py-2 text-sm font-medium text-navy hover:text-brand">{item.area}<ArrowUpRight className="h-4 w-4" /></a></li>)}</ul><a href="/invisible-grills-hyderabad/" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-dark">Hyderabad service guide <ArrowUpRight className="h-4 w-4" /></a></aside>
    </section>
    <CTASection service={service.short} area={place.area} title={`Let’s plan your ${place.area} site visit.`} />
  </PageShell>;
}
