import { CONTACT } from '../lib/data';
import { CONTACT_FAQS } from '../lib/pages';
import { PageShell } from '../components/PageShell';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactActions } from '../components/Actions';
import { FAQList } from '../components/FAQList';
import { Clock, Mail, MapPin, Phone, WhatsApp } from '../components/Icons';
import { Contact } from './Contact';

export function ContactPage() {
  return <PageShell>
    <section className="border-b border-borderline bg-lightbg"><div className="page-container py-8 sm:py-12"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact/' }]} /><div className="mt-8 max-w-3xl"><p className="eyebrow">Contact us · Hyderabad &amp; Telangana</p><h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">Let’s plan your free site visit.</h1><p className="mt-5 text-base leading-8 text-muted sm:text-lg">Tell us about your balcony, window, practice area or utility. We arrange measurement for invisible grills, safety nets, bird control, sports netting and cloth hangers, then explain the options in a written quote.</p><ContactActions quote={false} className="mt-7" /></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <a href={CONTACT.phoneHref} className="rounded-2xl bg-navy p-6 text-white hover:bg-navy-dark"><Phone className="h-6 w-6 text-emerald-300" /><p className="mt-4 text-xs text-slate-300">Call Now</p><p className="mt-1 font-semibold">{CONTACT.phone}</p></a>
      <a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-borderline bg-white p-6 text-navy hover:border-brand"><WhatsApp className="h-6 w-6 text-brand-dark" /><p className="mt-4 text-xs text-muted">WhatsApp Us</p><p className="mt-1 font-semibold">Chat with our team</p></a>
      <a href={CONTACT.emailHref} className="rounded-2xl border border-borderline bg-white p-6 text-navy hover:border-brand"><Mail className="h-6 w-6 text-brand-dark" /><p className="mt-4 text-xs text-muted">Email</p><p className="mt-1 break-all text-sm font-semibold">{CONTACT.email}</p></a>
      <div className="rounded-2xl border border-borderline bg-white p-6"><Clock className="h-6 w-6 text-brand-dark" /><p className="mt-4 text-xs text-muted">Working hours</p><p className="mt-1 text-sm font-semibold text-navy">{CONTACT.hours}</p></div>
    </div><p className="mt-6 flex items-start gap-2 text-xs leading-6 text-muted"><MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" /> Doorstep service in Hyderabad and Telangana. Listed areas are service locations, not branch offices.</p></div></section>
    <Contact initialService={null} />
    <section className="border-t border-borderline bg-lightbg"><div className="page-container grid gap-9 py-14 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="eyebrow">Before you book</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">Booking &amp; measurement FAQs</h2><p className="mt-4 text-sm leading-7 text-muted">The form prepares a message; it does not send it automatically. Continue to WhatsApp and send the message to request an appointment.</p></div><FAQList items={CONTACT_FAQS} /></div></section>
  </PageShell>;
}
