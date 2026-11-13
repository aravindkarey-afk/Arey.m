import { CONTACT } from "../lib/data";
import { Header, Footer, FloatingActions } from "../components/Chrome";
import { Clock, Mail, MapPin, Phone, WhatsApp } from "../components/Icons";
import { Contact } from "./Contact";

const faqs = [
  { q: "Is the doorstep measurement really free?", a: "Yes. We visit your home anywhere in Hyderabad and Telangana, measure your openings and provide a written quote at no charge." },
  { q: "How do I book a visit?", a: "Call or WhatsApp us, or fill in the form below. Share your area and the spaces you want to cover and we will arrange a convenient time." },
  { q: "Which areas do you cover?", a: "We serve all of Hyderabad and Telangana, including Gachibowli, Kondapur, Nallagandla, Kukatpally, LB Nagar and Vanasthalipuram. If your area is not listed, ask us." },
];

export function ContactPage() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[2000] focus:bg-white focus:p-3">Skip to content</a>
      <Header />
      <main id="main">
        <section className="mx-auto max-w-[1200px] px-5 pt-[150px] pb-12 lg:pt-[180px]">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <a href="/" className="local-back">Home</a>
            <span className="px-2 text-slate-300">/</span>
            <span className="text-slate-500">Contact Us</span>
          </nav>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[.18em] text-brand-dark">Contact Us · Hyderabad &amp; Telangana</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-navy sm:text-5xl">Contact Aravindh Invisible Grills</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Book a free doorstep measurement for invisible grills, safety nets, bird control or ceiling cloth hangers. Call, WhatsApp or send the form below — our team will confirm a convenient time and a written quote.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <a href={CONTACT.phoneHref} className="flex flex-col rounded-xl bg-navy p-6 text-white transition-transform hover:-translate-y-1">
              <Phone className="h-6 w-6 text-brand" />
              <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-300">Call us</span>
              <span className="mt-1 font-semibold">{CONTACT.phone}</span>
            </a>
            <a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-xl bg-whatsapp p-6 text-white transition-transform hover:-translate-y-1">
              <WhatsApp className="h-6 w-6" />
              <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/80">WhatsApp</span>
              <span className="mt-1 font-semibold">Chat with our team</span>
            </a>
            <a href={CONTACT.emailHref} className="flex flex-col rounded-xl bg-white p-6 text-navy shadow-[0_4px_18px_rgba(10,37,64,0.08)] transition-transform hover:-translate-y-1">
              <Mail className="h-6 w-6 text-brand" />
              <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">Email</span>
              <span className="mt-1 break-all text-sm font-semibold">{CONTACT.email}</span>
            </a>
            <div className="flex flex-col rounded-xl bg-white p-6 text-navy shadow-[0_4px_18px_rgba(10,37,64,0.08)]">
              <Clock className="h-6 w-6 text-brand" />
              <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">Working hours</span>
              <span className="mt-1 text-sm font-semibold">{CONTACT.hours}</span>
            </div>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted"><MapPin className="h-4 w-4 text-brand" /> {CONTACT.coverage} — doorstep service, no office visit needed.</p>
        </section>

        <Contact initialService={null} />

        <section className="bg-lightbg px-5 py-16">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Booking &amp; measurement FAQs</h2>
            <div className="mt-4 max-w-3xl divide-y divide-slate-200">
              {faqs.map((faq) => (
                <details key={faq.q} className="py-4">
                  <summary className="cursor-pointer font-semibold text-navy">{faq.q}</summary>
                  <p className="mt-3 leading-7 text-muted">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
