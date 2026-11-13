import type { FAQ } from '../lib/service-content';
import { ChevronDown } from './Icons';

export function FAQList({ items }: { items: FAQ[] }) {
  return <div className="divide-y divide-borderline rounded-2xl border border-borderline bg-white">
    {items.map((faq) => <details key={faq.q} className="faq-item group px-5 py-1 sm:px-7">
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 text-[15px] font-semibold text-navy [&::-webkit-details-marker]:hidden">
        {faq.q}<ChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-180" />
      </summary>
      <p className="max-w-3xl pb-6 text-sm leading-7 text-muted">{faq.a}</p>
    </details>)}
  </div>;
}
