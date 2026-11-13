import { CONTACT, SERVICE_DETAILS, relatedServices, serviceFaqs, servicePath, type Service } from "../lib/data";
import { Header, Footer, FloatingActions } from "../components/Chrome";
import { Check, Phone, WhatsApp } from "../components/Icons";

const materialNotes: Record<string, string> = {
  "Invisible Grills": "Invisible grill options include SS304 and SS316 stainless steel cables on aluminium tracks. We discuss cable grade, coating and spacing for your particular opening — see our SS304 and SS316 guides for a comparison.",
  "Safety Nets": "Net material, mesh size, fixing points and coverage depend on the space and intended use. Our team can discuss the available options during the site visit.",
  "Bird Control": "The appropriate netting or spikes, fixings and coverage depend on the location and the birds involved. Ask our team for the specifications proposed for your site.",
  "Sports Nets": "Netting, mesh size, supports and dimensions depend on the sport and practice area. Discuss the proposed specifications with our team before installation.",
  "Ceiling Cloth Hangers": "Hanger configuration, rod material, fittings and dimensions depend on the model and available ceiling space. Ask our team about the options for your home.",
};

export function ServicePage({ service }: { service: Service }) {
  const details = SERVICE_DETAILS[service.short];
  const faqs = serviceFaqs(service);
  const related = relatedServices(service);
  const whatsapp = `https://wa.me/917995150298?text=${encodeURIComponent(`Hi Aravindh Invisible Grills, I am interested in ${service.short}. Please arrange a free measurement and share a quote.`)}`;
  const back = (event: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const referrer = new URL(document.referrer);
      if (referrer.origin === location.origin && referrer.pathname === "/" && history.length > 1) {
        event.preventDefault();
        history.back();
      }
    } catch { /* Direct visits use the services link. */ }
  };

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[2000] focus:bg-white focus:p-3">Skip to content</a>
      <Header />
      <main id="main" className="bg-lightbg pb-20 pt-[105px] md:pt-[145px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <nav aria-label="Breadcrumb" className="py-3 text-sm text-muted">
            <a href="/" className="local-back">Home</a>
            <span className="px-2 text-slate-300">/</span>
            <a href="/#services" onClick={back} className="local-back">Services</a>
            <span className="px-2 text-slate-300">/</span>
            <span className="text-slate-500">{service.short}</span>
          </nav>
          <div className="mt-3 overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_rgba(10,37,64,0.08)]">
            <img src={service.image} alt={`${service.title} by Aravindh Invisible Grills`} className="h-[250px] w-full object-cover sm:h-[380px] lg:h-[440px]" width={1200} height={440} fetchPriority="high" decoding="async" />
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_300px]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-brand-dark">{service.category} · Hyderabad &amp; Telangana</p>
                <h1 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{service.title}</h1>
                <p className="mt-5 text-base leading-8 text-muted">{service.desc}</p>
                {details ? (
                  details.intro.map((text) => <p key={text} className="mt-3 leading-7 text-muted">{text}</p>)
                ) : (
                  <p className="mt-3 leading-7 text-muted">Every space is different. Tell us about your requirements and our team can recommend an approach for your property, take measurements and prepare a written quote.</p>
                )}

                <section className="mt-10">
                  <h2 className="text-2xl font-bold text-navy">Key features &amp; benefits</h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {(details?.highlights ?? ["Solution planned around your space", "Free doorstep measurement", "Written quote before work begins", "Installation by our trained team"]).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-brand" />{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="mt-10">
                  <h2 className="text-2xl font-bold text-navy">Materials &amp; specifications</h2>
                  <p className="mt-3 leading-7 text-muted">{materialNotes[service.category] || "Materials and specifications are selected for your requirements. Ask our team for details during your measurement."}</p>
                  {service.category === "Invisible Grills" && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a href="/ss304-invisible-grills/" className="local-button-outline">SS304 Invisible Grills ↗</a>
                      <a href="/ss316-invisible-grills/" className="local-button-outline">SS316 Invisible Grills ↗</a>
                    </div>
                  )}
                </section>

                <section className="mt-10">
                  <h2 className="text-2xl font-bold text-navy">Installation process</h2>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-muted">
                    <li>Contact us to discuss your space and arrange a free doorstep measurement.</li>
                    <li>Our team assesses the site and discusses materials, specifications and a written quote.</li>
                    <li>Once you approve the proposal, our team arranges installation and fits the solution to your space.</li>
                  </ol>
                </section>

                <section className="mt-10">
                  <h2 className="text-2xl font-bold text-navy">Warranty information</h2>
                  <p className="mt-3 leading-7 text-muted">Warranty coverage and terms depend on the product and installation. Please ask our team to confirm the applicable warranty in writing before ordering.</p>
                </section>

                <section className="mt-10">
                  <h2 className="text-2xl font-bold text-navy">Frequently asked questions</h2>
                  <div className="mt-4 divide-y divide-slate-200">
                    {faqs.map((faq) => (
                      <details key={faq.q} className="py-4">
                        <summary className="cursor-pointer font-semibold text-navy">{faq.q}</summary>
                        <p className="mt-3 leading-7 text-muted">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </section>

                {related.length > 0 && (
                  <section className="mt-10">
                    <h2 className="text-2xl font-bold text-navy">Related services</h2>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {related.map((item) => (
                        <a key={item.short} href={servicePath(item)} className="local-button-outline hover:bg-brand-light">{item.short} ↗</a>
                      ))}
                    </div>
                  </section>
                )}
              </div>
              <aside className="h-fit rounded-xl bg-navy p-6 text-white lg:sticky lg:top-36">
                <h2 className="text-xl font-bold">Free doorstep measurement</h2>
                <p className="mt-3 text-sm leading-6 text-slate-200">Tell us about your space. Our team will help arrange a visit and a written quote.</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={CONTACT.phoneHref} className="flex items-center justify-center gap-2 rounded-md bg-callblue px-4 py-3 font-semibold text-white"><Phone className="h-4 w-4" /> Call Now</a>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 font-semibold text-white"><WhatsApp className="h-4 w-4" /> WhatsApp</a>
                </div>
              </aside>
            </div>
          </div>
          <a href="/#services" onClick={back} className="local-back mt-8 inline-block">← Back to Services</a>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
