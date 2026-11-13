import { useState } from 'react';
import { FAQS, REVIEWS } from '../lib/data';
import { SectionHead } from '../components/SectionHead';
import { FAQList } from '../components/FAQList';
import { ChevronDown, Quote } from '../components/Icons';

export function Faq() {
  return <section id="faq" className="page-container py-14 sm:py-20"><div className="grid gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14"><div><p className="eyebrow">Helpful answers</p><h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-navy sm:text-4xl">A few things worth knowing.</h2><p className="mt-5 text-sm leading-7 text-muted">Choosing between grills, nets, bird spikes or hangers? Start here, then tell us about your space.</p><a href="/services/#guides" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-dark">Read the planning guides ↗</a></div><FAQList items={FAQS} /></div></section>;
}

export function Reviews() {
  const [showAll, setShowAll] = useState(false);
  return <section id="reviews" className="border-y border-borderline bg-lightbg"><div className="page-container py-14 sm:py-20"><SectionHead eyebrow="Customer reviews" title="Words from our existing website" subtitle="Customer stories reproduced from the original site, covering grills, nets and cloth hangers." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{REVIEWS.slice(0, showAll ? REVIEWS.length : 3).map((review) => <article key={review.name} className="flex flex-col rounded-2xl border border-borderline bg-white p-6"><Quote className="h-7 w-7 text-brand" /><blockquote className="mt-5 flex-1 text-sm leading-8 text-slate-600">“{review.text}”</blockquote><div className="mt-6 flex items-center gap-3 border-t border-borderline pt-5"><span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand-dark">{review.initials}</span><div><h3 className="text-sm font-semibold text-navy">{review.name}</h3><p className="mt-1 text-xs text-muted">{review.area}</p><p className="mt-1 text-[11px] font-medium text-brand-dark">{review.service}</p></div></div></article>)}</div><div className="mt-8 text-center"><button type="button" onClick={() => setShowAll(!showAll)} aria-expanded={showAll} className="btn btn-outline">{showAll ? 'Show fewer reviews' : 'Read 3 more reviews'}<ChevronDown className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} /></button></div><p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-6 text-muted">These existing testimonials have not been independently verified and are not presented as verified third-party ratings. No aggregate star rating is claimed.</p></div></section>;
}
