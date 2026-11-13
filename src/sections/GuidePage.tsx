import type { Guide } from '../lib/guides';
import { PageShell } from '../components/PageShell';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { FAQList } from '../components/FAQList';
import { ArrowUpRight, Check } from '../components/Icons';

export function GuidePage({ guide }: { guide: Guide }) {
  return <PageShell>
    <PageHero eyebrow={guide.eyebrow} title={guide.h1} description={guide.intro[0]} image={guide.image} alt={guide.imageAlt}
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Services & Guides', href: '/services/' }, { label: guide.h1, href: guide.path }]} />
    <div className="page-container grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
      <article className="space-y-10">{guide.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-semibold tracking-tight text-navy">{section.heading}</h2><div className="mt-4 space-y-4">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-sm leading-8 text-muted sm:text-base">{paragraph}</p>)}</div></section>)}</article>
      <aside className="h-fit rounded-2xl border border-borderline bg-lightbg p-6 lg:sticky lg:top-32"><h2 className="text-xl font-semibold text-navy">Explore the right service</h2><ul className="mt-5 space-y-2">{guide.related.map((link) => <li key={link.href}><a href={link.href} className="flex min-h-11 items-center justify-between gap-3 border-b border-borderline py-2 text-sm font-medium text-navy hover:text-brand">{link.label}<ArrowUpRight className="h-4 w-4" /></a></li>)}</ul><p className="mt-6 flex gap-2 text-xs leading-6 text-muted"><Check className="mt-1 h-4 w-4 shrink-0 text-brand" /> A site visit is the best way to confirm the specification for your space.</p></aside>
    </div>
    <section className="border-t border-borderline bg-lightbg"><div className="page-container py-14"><h2 className="mb-8 text-3xl font-bold tracking-tight text-navy">Frequently asked questions</h2><FAQList items={guide.faqs} /></div></section>
    <CTASection />
  </PageShell>;
}
