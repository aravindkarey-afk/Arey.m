import { CONTACT } from "../lib/data";
import type { Guide } from "../lib/guides";
import { Header, Footer, FloatingActions } from "../components/Chrome";
import { Check, Phone, WhatsApp } from "../components/Icons";
import { Contact } from "./Contact";

export function GuidePage({ guide }: { guide: Guide }) {
  const whatsapp = `https://wa.me/917995150298?text=${encodeURIComponent(
    `Hi Aravindh Invisible Grills, I am interested in ${guide.h1.replace(/ in Hyderabad$/, "")}. Please arrange a free measurement and share a quote.`
  )}`;

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[2000] focus:bg-white focus:p-3">Skip to content</a>
      <Header />
      <main id="main">
        <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pt-[150px] pb-14 lg:grid-cols-2 lg:pt-[180px]">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <a href="/" className="local-back">Home</a>
              <span className="px-2 text-slate-300">/</span>
              <span className="text-slate-500">{guide.h1.replace(/ in Hyderabad$/, "")}</span>
            </nav>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[.18em] text-brand-dark">{guide.eyebrow} · Hyderabad &amp; Telangana</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl">{guide.h1}</h1>
            {guide.intro.map((text) => (
              <p key={text} className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{text}</p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="local-button"><Phone className="mr-2 h-4 w-4" /> Call {CONTACT.phone}</a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-whatsapp px-5 py-3 font-semibold text-white"><WhatsApp className="mr-2 h-4 w-4" /> WhatsApp Us</a>
            </div>
          </div>
          <img src={guide.image} alt={guide.imageAlt} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" width={800} height={600} fetchPriority="high" decoding="async" />
        </section>

        <section className="bg-lightbg px-5 py-16">
          <div className="mx-auto max-w-[1000px]">
            {guide.sections.map((section) => (
              <div key={section.heading} className="mb-10">
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">{section.heading}</h2>
                {section.paragraphs?.map((text) => (
                  <p key={text} className="mt-4 max-w-3xl leading-8 text-muted">{text}</p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 grid max-w-3xl gap-3 sm:grid-cols-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2 rounded-lg bg-white p-4 text-slate-700 shadow-sm">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-brand" /> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Frequently asked questions</h2>
            <div className="mt-4 max-w-3xl divide-y divide-slate-200">
              {guide.faqs.map((faq) => (
                <details key={faq.q} className="py-4">
                  <summary className="cursor-pointer font-semibold text-navy">{faq.q}</summary>
                  <p className="mt-3 leading-7 text-muted">{faq.a}</p>
                </details>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold text-navy">Related services &amp; guides</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {guide.related.map((link) => (
                <a key={link.href} href={link.href} className="local-button-outline bg-white hover:bg-brand-light">{link.label} ↗</a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-14">
          <div className="rounded-2xl bg-navy px-7 py-9 text-center text-white sm:px-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Book a free doorstep measurement</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-200">Tell us about your space in Hyderabad and our team will recommend the right solution, take measurements and prepare a written quote — at no charge.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-callblue px-6 py-3 font-semibold text-white"><Phone className="h-4 w-4" /> Call {CONTACT.phone}</a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3 font-semibold text-white"><WhatsApp className="h-4 w-4" /> WhatsApp Us</a>
            </div>
          </div>
        </section>

        <Contact initialService={null} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
