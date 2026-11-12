import { CONTACT, SERVICES, servicePath } from '../lib/data';
import { Header, Footer, FloatingActions } from '../components/Chrome';
import { Contact } from './Contact';

type Place = { name: string; region: string; intro: string; detail: string };
export const PLACES: Record<string, Place> = {
  '/invisible-grills-vanasthalipuram/': { name: 'Vanasthalipuram', region: 'Hyderabad', intro: 'From apartment balconies to windows and utility spaces, find safety solutions that help preserve light and airflow in your Vanasthalipuram home.', detail: 'Contact our team with your location in Vanasthalipuram to discuss your requirements and arrange a measurement.' },
  '/invisible-grills-nallagandla/': { name: 'Nallagandla', region: 'Hyderabad', intro: 'Looking for invisible grills in Nallagandla? Explore discreet protection for apartment balconies and windows, alongside safety and bird netting.', detail: 'Share your Nallagandla property details with our team for a measurement and a tailored quotation.' },
};

export function LocalPage({ place }: { place: Place }) {
  return <>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[2000] focus:bg-white focus:p-3">Skip to content</a>
    <Header />
    <main id="main">
      <section className="local-hero mx-auto grid max-w-[1200px] items-center gap-10 px-5 pt-[150px] pb-16 lg:grid-cols-2 lg:pt-[180px]">
        <div>
          <a href="/" className="local-back">← Home</a>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[.18em] text-brand-dark">Serving {place.name}, {place.region}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl">Invisible grills &amp; safety nets in {place.name}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{place.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className="local-button">Request a quote ↗</a><a href={CONTACT.phoneHref} className="local-button-outline">Call {CONTACT.phone}</a></div>
        </div>
        <img src="/images/reference/s26.webp" alt="Invisible grill fitted across a balcony" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" fetchPriority="high" />
      </section>
      <section className="bg-lightbg px-5 py-20"><div className="mx-auto max-w-[1200px]">
        <p className="text-sm font-semibold uppercase tracking-[.18em] text-brand-dark">Solutions for your space</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-navy">Balcony safety grills and nets in {place.name}</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          <article className="local-card"><span>01 / GRILLS</span><h3>Invisible &amp; child safety grills</h3><p>Discuss SS304 and SS316 invisible grill options for balconies and windows, including suitable spacing and materials for your home.</p></article>
          <article className="local-card"><span>02 / SAFETY NETS</span><h3>Balcony safety nets</h3><p>Explore netting for balconies, staircases and other open spaces where children and pets need added protection.</p></article>
          <article className="local-card"><span>03 / BIRD CONTROL</span><h3>Pigeon &amp; bird protection nets</h3><p>Keep open areas more comfortable with fitted pigeon safety nets and bird protection solutions.</p></article>
        </div>
      </div></section>
      <section className="mx-auto max-w-[1200px] px-5 pb-16">
        <h2 className="text-3xl font-bold text-navy">Popular safety solutions in {place.name}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted">Whether you need balcony invisible grills, window invisible grills, child safety nets or pigeon nets in {place.name}, our team can help you explore options and arrange a free doorstep measurement.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {SERVICES.filter(service => ["Balcony Invisible Grills", "Window Invisible Grills", "Children Safety Nets", "Pigeon Safety Nets"].includes(service.short)).map(service => <a key={service.short} href={servicePath(service)} className="local-button-outline hover:bg-white">{service.short} ↗</a>)}
        </div>
        <h2 className="mt-10 text-2xl font-bold text-navy">Frequently asked questions</h2>
        <div className="mt-4 max-w-3xl divide-y divide-slate-200">
          <details className="py-4"><summary className="cursor-pointer font-semibold text-navy">How do I get an invisible grill quote in {place.name}?</summary><p className="mt-3 leading-7 text-muted">Call or message our team to arrange a free doorstep measurement. We can discuss your space, materials and a written quote.</p></details>
          <details className="py-4"><summary className="cursor-pointer font-semibold text-navy">Do you install balcony safety nets and pigeon nets in {place.name}?</summary><p className="mt-3 leading-7 text-muted">We offer safety and bird protection netting. Contact us to discuss your property, suitable materials and installation availability.</p></details>
        </div>
      </section>
      <section className="mx-auto max-w-[1200px] px-5 py-16"><h2 className="text-3xl font-bold text-navy">Planning an installation in {place.name}?</h2><p className="mt-4 max-w-3xl text-muted">{place.detail} We also serve <a className="text-brand-dark underline" href="/invisible-grills-nallagandla/">Nallagandla</a> and <a className="text-brand-dark underline" href="/invisible-grills-vanasthalipuram/">Vanasthalipuram</a>. <a className="text-brand-dark underline" href="/#services">Explore all services</a>.</p></section>
      <Contact initialService={null} />
    </main>
    <Footer /><FloatingActions />
  </>;
}
