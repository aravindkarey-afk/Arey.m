import type { LucideIcon } from 'lucide-react';
import { servicePath, type Service } from '../lib/services';
import { SERVICE_CONTENT } from '../lib/service-content';
import { ResponsiveImage } from './ResponsiveImage';
import { ArrowUpRight, Phone, WhatsApp } from './Icons';
import { whatsappLink } from './Actions';
import { CONTACT } from '../lib/data';
import { cn } from '../utils/cn';

export function ServiceCard({ service, priority = false, categoryIcon: CategoryIcon }: { service: Service; priority?: boolean; categoryIcon?: LucideIcon }) {
  const content = SERVICE_CONTENT[service.slug];
  const path = servicePath(service);
  const remember = () => {
    const article = document.activeElement?.closest('article');
    history.replaceState({ ...history.state, serviceScroll: window.scrollY, serviceCategory: article?.getAttribute('data-category') ?? 'All' }, '');
  };
  return <article data-category={service.category} className="service-card group flex h-full flex-col overflow-hidden rounded-2xl border border-borderline bg-white">
    <a href={path} onClick={remember} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden bg-lightbg">
      <ResponsiveImage src={service.image} alt={content.imageAlt} priority={priority} loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 46vw, 380px"
        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
      <span className={cn('absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold tracking-wider text-navy uppercase shadow-sm', CategoryIcon && 'inline-flex items-center gap-1.5')}>
        {CategoryIcon && <CategoryIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-callblue" strokeWidth={1.8} />}
        {service.category}
      </span>
    </a>
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em] text-navy"><a href={path} onClick={remember} className="hover:text-brand-dark">{service.short}</a></h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{service.desc}</p>
      <a href={path} onClick={remember} className="mt-5 inline-flex min-h-11 items-center justify-between gap-3 border-t border-borderline pt-4 text-sm font-semibold text-brand-dark" aria-label={`View details: ${service.short}`}>
        View Details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <a href={CONTACT.phoneHref} className="btn btn-soft !min-h-10 !px-3 !py-2 !text-xs" aria-label={`Call now about ${service.short}`}><Phone className="h-3.5 w-3.5" /> Call Now</a>
        <a href={whatsappLink(`Hi Aravind Invisible Grills, I would like a quote for ${service.short}. Please arrange a free measurement.`)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp !min-h-10 !px-3 !py-2 !text-xs" aria-label={`WhatsApp about ${service.short}`}><WhatsApp className="h-4 w-4" /> WhatsApp</a>
      </div>
    </div>
  </article>;
}
