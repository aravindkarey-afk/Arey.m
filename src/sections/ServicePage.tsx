import type { ReactNode } from 'react';
import { CONTACT } from '../lib/data';
import { SERVICES, servicePath, type Service } from '../lib/services';
import { SERVICE_CONTENT } from '../lib/service-content';
import { COMBINATION_PLACES } from '../lib/locations';
import { PageShell } from '../components/PageShell';
import { PageHero } from '../components/PageHero';
import { SectionHead } from '../components/SectionHead';
import { ContactActions } from '../components/Actions';
import { ServiceCard } from '../components/ServiceCard';
import { CTASection } from '../components/CTASection';
import { FAQList } from '../components/FAQList';
import { ArrowUpRight, Check, MapPin, Ruler, ShieldCheck } from '../components/Icons';

function DetailList({ items }: { items: string[] }) {
  return <ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-7 text-muted"><Check className="mt-1.5 h-4 w-4 shrink-0 text-brand" /><span>{item}</span></li>)}</ul>;
}
function InfoPanel({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return <div className="rounded-2xl border border-borderline bg-white p-6"><span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">{icon}</span><h2 className="text-xl font-semibold text-navy">{title}</h2>{children}</div>;
}

export function ServicePage({ service }: { service: Service }) {
  const content = SERVICE_CONTENT[service.slug];
  const related = content.related.map((slug) => SERVICES.find((item) => item.slug === slug)).filter((item): item is Service => !!item);
  const combinations = COMBINATION_PLACES.filter((place) => place.primaryService === service.slug);
  return <PageShell>
    <PageHero eyebrow={`${service.category} · Hyderabad`} title={service.title} description={content.intro[0]} image={service.image} alt={content.imageAlt} service={service.short}
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: service.short, href: servicePath(service) }]} />
    <section className="page-container py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">A solution for your space</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">Understand the options. Choose with confidence.</h2>
          <p className="mt-6 text-base leading-8 text-muted">{content.intro[1]}</p>
          <h3 className="mt-8 text-xl font-semibold text-navy">Benefits of {service.short}</h3>
          <DetailList items={content.benefits} />
        </div>
        <InfoPanel icon={<Ruler className="h-5 w-5" />} title="Materials & specification">
          <p className="mt-4 text-sm leading-8 text-muted">{content.materials}</p>
          <p className="mt-5 border-t border-borderline pt-5 text-xs leading-6 text-muted">Final product suitability is assessed during your site visit. Ask us to confirm the specification in your written quote.</p>
        </InfoPanel>
      </div>
    </section>
    <section className="border-y border-borderline bg-lightbg">
      <div className="page-container grid gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div><SectionHead title="Where it fits" subtitle="A few common applications. We assess each opening or use case individually." align="left" /><div className="space-y-4">{content.applications.map((application, index) => <div key={application.heading} className="flex gap-4 rounded-2xl border border-borderline bg-white p-5"><span className="text-sm font-bold text-brand">0{index + 1}</span><div><h3 className="font-semibold text-navy">{application.heading}</h3><p className="mt-2 text-sm leading-7 text-muted">{application.text}</p></div></div>)}</div></div>
        <div><SectionHead title="Installation, step by step" subtitle="A measured approach, with clear approval before the work begins." align="left" /><ol className="space-y-6">{content.installation.map((step, index) => <li key={step} className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">{index + 1}</span><div className="pt-1"><h3 className="font-semibold text-navy">{['Measure & assess', 'Agree the specification', 'Install & hand over'][index]}</h3><p className="mt-2 text-sm leading-7 text-muted">{step}</p></div></li>)}</ol>
          <div className="mt-8 rounded-xl border border-brand/20 bg-brand-soft p-5"><p className="flex items-center gap-2 font-semibold text-navy"><ShieldCheck className="h-4 w-4 text-brand-dark" /> Free site visit &amp; measurement</p><p className="mt-2 text-sm leading-7 text-muted">We check access, mounting surfaces and the space before recommending a system. Installation is carried out only after you approve the quote.</p></div>
        </div>
      </div>
    </section>
    <section className="page-container py-14 sm:py-20">
      <SectionHead title="Explore related services" subtitle="Compare complementary options for your home, building or facility." eyebrow="More ways we can help" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{related.map((item) => <ServiceCard key={item.slug} service={item} />)}</div>
      <div className="mt-10 rounded-2xl border border-borderline bg-lightbg p-6 sm:p-8">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-navy"><MapPin className="h-5 w-5 text-brand" /> Local service pages</h2>
        <div className="mt-5 flex flex-wrap gap-3">{['Hyderabad', 'Nallagandla', 'Vanasthalipuram', 'Gachibowli', 'Kukatpally', 'Secunderabad'].map((area, index) => { const href = ['/invisible-grills-hyderabad/', '/invisible-grills-nallagandla/', '/invisible-grills-vanasthalipuram/', '/locations/gachibowli/', '/locations/kukatpally/', '/locations/secunderabad/'][index]; return <a key={area} href={href} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-borderline bg-white px-4 py-2 text-sm font-medium text-navy hover:border-brand">{service.short} · {area}<ArrowUpRight className="h-3.5 w-3.5" /></a>; })}</div>
        {combinations.map((place) => <a key={place.path} href={place.path} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-dark hover:underline">{place.h1}<ArrowUpRight className="h-4 w-4" /></a>)}
        <p className="mt-4 text-xs leading-6 text-muted">These area pages cover our local services; contact us to confirm availability for this specific solution at your location.</p>
        <ContactActions service={service.short} className="mt-6" />
      </div>
    </section>
    <section className="border-t border-borderline bg-lightbg"><div className="page-container grid gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr] lg:py-20"><div><p className="eyebrow">Before you book</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">{service.short}: your questions answered</h2><p className="mt-4 text-sm leading-7 text-muted">Still comparing options? Call {CONTACT.phone} or send us a photo on WhatsApp.</p><ContactActions service={service.short} quote={false} className="mt-6" /></div><FAQList items={content.faqs} /></div></section>
    <CTASection service={service.short} />
  </PageShell>;
}
