import { useState } from 'react';
import { GALLERY, GALLERY_FILTERS } from '../lib/data';
import { PageShell } from '../components/PageShell';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHead } from '../components/SectionHead';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { ContactActions } from '../components/Actions';
import { CTASection } from '../components/CTASection';
import { ArrowUpRight } from '../components/Icons';
import { cn } from '../utils/cn';

function GalleryImage({ item, index }: { item: (typeof GALLERY)[number]; index: number }) {
  return <figure className="overflow-hidden rounded-2xl border border-borderline bg-white"><a href={item.src} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden bg-lightbg" aria-label={`Open full-size image: ${item.alt} (new tab)`}><ResponsiveImage src={item.src} alt={item.alt} priority={index < 2} sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 46vw, 380px" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" /><span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-navy shadow-sm"><ArrowUpRight className="h-4 w-4" /></span></a><figcaption className="p-5"><p className="text-[10px] font-semibold tracking-wider text-brand-dark uppercase">{item.category}</p><p className="mt-2 text-sm leading-6 text-navy">{item.alt}</p></figcaption></figure>;
}

export function Gallery() {
  return <section id="gallery" className="page-container py-14 sm:py-20"><SectionHead eyebrow="Project & product gallery" title="See the possibilities." subtitle="A closer look at grills, nets, bird control, sports enclosures and cloth drying systems. Open any image for a full-size view." /><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{GALLERY.slice(0, 6).map((item, index) => <GalleryImage key={item.src} item={item} index={index} />)}</div><p className="mt-5 text-xs leading-6 text-muted">Reference imagery illustrates the service types; not every image is a verified Aravindh customer project.</p><div className="mt-7 text-center"><a href="/gallery/" className="btn btn-outline">Explore the full gallery <ArrowUpRight className="h-4 w-4" /></a></div></section>;
}

export function GalleryHub() {
  const [filter, setFilter] = useState<string>('All');
  const visible = GALLERY.filter((item) => filter === 'All' || item.category === filter);
  return <PageShell>
    <section className="border-b border-borderline bg-lightbg"><div className="page-container py-8 sm:py-12"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Gallery', href: '/gallery/' }]} /><div className="mt-8 max-w-3xl"><p className="eyebrow">Project & product gallery</p><h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">A closer look at safer, more usable spaces.</h1><p className="mt-5 text-base leading-8 text-muted">Browse reference images by service, compare finishes and see how different systems fit balconies, windows, terraces and utilities. Select an image to open the full-size version in a new tab.</p><ContactActions className="mt-7" /></div></div></section>
    <section className="page-container py-12 sm:py-16"><div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter gallery by service">{GALLERY_FILTERS.map((category) => <button key={category} type="button" onClick={() => setFilter(category)} aria-pressed={filter === category} className={cn('min-h-11 cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold transition-colors', filter === category ? 'border-navy bg-navy text-white' : 'border-borderline bg-white text-navy hover:border-brand')}>{category}</button>)}</div><p className="mb-7 text-xs text-muted" role="status" aria-live="polite">{visible.length} reference images · {filter === 'All' ? 'All services' : filter}</p><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visible.map((item, index) => <GalleryImage key={item.src} item={item} index={index} />)}</div><p className="mt-8 rounded-xl bg-lightbg p-5 text-xs leading-6 text-muted">These images are product and installation references, including material from the original website. They are not all verified Aravindh customer projects. Ask our team for relevant examples of your chosen service when booking.</p></section>
    <CTASection title="Have a space in mind? Let’s measure it." />
  </PageShell>;
}
