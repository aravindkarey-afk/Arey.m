import { ContactActions } from './Actions';
import { Ruler } from './Icons';

export function CTASection({ service, area, title = 'One site visit. A clearer plan.' }: { service?: string; area?: string; title?: string }) {
  return <section className="page-container py-14 sm:py-20">
    <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-10 text-white sm:px-12 sm:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full border-[36px] border-white/[0.035]" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-emerald-300 uppercase"><Ruler className="h-4 w-4" /> Free site visit &amp; measurement</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">Tell us what you want to protect, enclose or organise{area ? ` in ${area}` : ''}. We will measure the space, explain the options and prepare a written quote before you approve the work.</p>
        </div>
        <ContactActions service={service} area={area} quote={false} className="lg:max-w-64 lg:flex-col" />
      </div>
    </div>
  </section>;
}
