import { CONTACT } from '../lib/data';
import { Phone, WhatsApp, ArrowUpRight } from './Icons';
import { cn } from '../utils/cn';

export const whatsappLink = (message = 'Hi Aravind Invisible Grills, I would like a free site visit and measurement. My service requirement is:') =>
  `https://wa.me/${CONTACT.phoneHref.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

export function ContactActions({ service, area, className = '', quote = true }: { service?: string; area?: string; className?: string; quote?: boolean }) {
  const message = `Hi Aravind Invisible Grills, I am interested in ${service ?? 'your safety and installation services'}${area ? ` in ${area}` : ' in Hyderabad'}. Please arrange a free site visit and measurement and share a quote.`;
  return <div className={cn('flex flex-wrap gap-3', className)}>
    <a href={CONTACT.phoneHref} className="btn btn-primary"><Phone className="h-4 w-4" /> Call Now <span className="sr-only">for {service ?? 'a free site visit'}</span></a>
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><WhatsApp className="h-5 w-5" /> WhatsApp Us</a>
    {quote && <a href={`/contact/?service=${encodeURIComponent(service ?? '')}${area ? `&area=${encodeURIComponent(area)}` : ''}#enquiry`} className="btn btn-outline">Free site visit <ArrowUpRight className="h-4 w-4" /></a>}
  </div>;
}
