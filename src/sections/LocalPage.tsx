import { CONTACT, SERVICES, servicePath } from '../lib/data';
import { Header, Footer, FloatingActions } from '../components/Chrome';
import { Contact } from './Contact';

type Place = {
  name: string; region: string; metaTitle: string; metaDescription: string;
  intro: string; detail: string;
  /** Location-specific guidance shown as its own section. */
  localHeading: string; localParagraphs: string[];
  /** Neighbouring areas we also travel to. */
  nearby: string[];
  faqs: { q: string; a: string }[];
};
export const PLACES: Record<string, Place> = {
  '/invisible-grills-hyderabad/': {
    name: 'Hyderabad', region: 'Telangana',
    metaTitle: 'Invisible Grills in Hyderabad: Areas We Serve | Aravindh Invisible Grills',
    metaDescription: 'Invisible grills in Hyderabad with pigeon safety nets, PG safety nets, balcony, window and child safety nets, and ceiling cloth hangers. Free doorstep measurement across the city.',
    intro: 'Invisible grills in Hyderabad for balconies and windows, along with pigeon safety nets, balcony safety nets, child safety nets and ceiling cloth hangers, measured and installed at your home.',
    detail: 'Tell us your area in Hyderabad and the spaces you want to cover, and we will arrange a convenient time for measurement and a quotation.',
    localHeading: 'Choosing the right safety solution for a Hyderabad home',
    localParagraphs: [
      'Hyderabad homes vary a lot from one part of the city to another. High-rise apartments around Gachibowli, Kondapur, Madhapur, HITEC City, Manikonda and Narsingi often have wide, open balconies where families want fall protection without losing the view, which is where invisible grills are the usual choice. In established neighbourhoods such as Kukatpally, Miyapur, Banjara Hills, Jubilee Hills, LB Nagar and Vanasthalipuram, independent houses and low-rise apartments more often need pigeon safety nets, window safety nets and duct area covering.',
      'Pigeons are a common nuisance on balconies, AC ledges and utility ducts across the city. Pigeon safety nets and bird protection nets close off these spaces while keeping light and airflow. For families with young children, child safety nets and balcony safety nets add a barrier on balconies, windows and staircases. Ceiling cloth hangers are a practical addition once a balcony is enclosed, because they keep drying clothes overhead and the floor clear.',
      'We also fit PG safety nets for PG hostels and shared accommodation in Hyderabad, where balconies, corridors and stairwells are used by many residents and owners want a tidy, low-maintenance barrier.',
    ],
    nearby: ['Gachibowli', 'Kondapur', 'Miyapur', 'Kukatpally', 'Madhapur', 'HITEC City', 'Nallagandla', 'Manikonda', 'Narsingi', 'Banjara Hills', 'Jubilee Hills', 'LB Nagar', 'Vanasthalipuram'],
    faqs: [
      { q: 'Which areas of Hyderabad do you cover?', a: 'We travel across Hyderabad for measurement and installation, including Gachibowli, Kondapur, Miyapur, Kukatpally, Madhapur, HITEC City, Nallagandla, Manikonda, Narsingi, Banjara Hills, Jubilee Hills, LB Nagar and Vanasthalipuram. If your area is not listed, enter it in the enquiry form and we will confirm.' },
      { q: 'Should I choose invisible grills or safety nets for my balcony?', a: 'Invisible grills use stainless steel cables and suit balconies and windows where a clear view matters. Safety nets are a lighter option and are also the usual choice for keeping pigeons out. Our team can look at your space during the free measurement and explain both options.' },
      { q: 'Do you install PG safety nets for hostels in Hyderabad?', a: 'Yes. We fit safety nets and pigeon nets on balconies, corridors, stairwells and duct areas of PG hostels and shared accommodation. Share the building location and the areas to be covered for a quotation.' },
    ],
  },
  '/invisible-grills-vanasthalipuram/': {
    name: 'Vanasthalipuram', region: 'Hyderabad',
    metaTitle: 'Invisible Grills in Vanasthalipuram | Aravindh Invisible Grills',
    metaDescription: 'Invisible grills, pigeon safety nets, balcony and window safety nets, child safety nets and ceiling cloth hangers in Vanasthalipuram and LB Nagar. Free doorstep measurement.',
    intro: 'From apartment balconies to windows and utility spaces, find invisible grills, pigeon safety nets and balcony safety nets that help preserve light and airflow in your Vanasthalipuram home.',
    detail: 'Contact our team with your location in Vanasthalipuram to discuss your requirements and arrange a measurement.',
    localHeading: 'Safety nets and invisible grills for Vanasthalipuram homes',
    localParagraphs: [
      'Vanasthalipuram is a long-established residential area in east Hyderabad, close to LB Nagar and the Vijayawada highway. It has a mix of independent houses, duplex homes and low to mid-rise apartments, so the work here is often different from the high-rise towers in the west of the city.',
      'In independent houses, the most common requests are window safety nets, staircase and open-terrace netting, and pigeon safety nets for balconies and duct areas. In apartments, families usually ask for balcony safety nets or invisible grills, together with child safety nets for windows and a ceiling cloth hanger for the utility balcony.',
      'Because every house is laid out differently, we measure each opening on site before quoting. Our team travels to Vanasthalipuram and nearby LB Nagar for this at no charge.',
    ],
    nearby: ['LB Nagar', 'Hayathnagar', 'Nagole', 'Dilsukhnagar', 'Uppal'],
    faqs: [
      { q: 'How do I get an invisible grill quote in Vanasthalipuram?', a: 'Call or message our team to arrange a free doorstep measurement. We can discuss your space, materials and a written quote.' },
      { q: 'Do you install pigeon safety nets and balcony safety nets in Vanasthalipuram?', a: 'Yes. We fit pigeon safety nets, bird protection nets and balcony safety nets for independent houses and apartments in Vanasthalipuram, LB Nagar and surrounding colonies.' },
      { q: 'Do you have an office in Vanasthalipuram?', a: 'Vanasthalipuram is one of the areas we serve. Our team comes to your home for measurement and installation, so there is no need to visit an office.' },
    ],
  },
  '/invisible-grills-nallagandla/': {
    name: 'Nallagandla', region: 'Hyderabad',
    metaTitle: 'Invisible Grills in Nallagandla | Aravindh Invisible Grills',
    metaDescription: 'Invisible grills, pigeon safety nets, balcony safety nets, child safety nets and ceiling cloth hangers in Nallagandla and nearby Gachibowli. Free doorstep measurement.',
    intro: 'Looking for invisible grills in Nallagandla? Explore discreet protection for apartment balconies and windows, alongside pigeon safety nets, balcony safety nets and bird protection nets.',
    detail: 'Share your Nallagandla property details with our team for a measurement and a tailored quotation.',
    localHeading: 'Invisible grills and nets for Nallagandla apartments',
    localParagraphs: [
      'Nallagandla sits in west Hyderabad near Serilingampally and Gachibowli, and most homes here are in high-rise apartment towers and gated communities. Upper-floor balconies are open and windy, so families with children or pets usually want fall protection that does not block the view.',
      'Invisible grills are the most requested option for these balconies and for bedroom windows. Pigeon safety nets and bird protection nets are commonly added on utility balconies and service ducts, and a ceiling cloth hanger makes better use of a compact utility area.',
      'Many gated communities have rules about what can be fitted on the building exterior. It is worth checking with your association first; we can explain the materials and fixing method so you can share them for approval.',
    ],
    nearby: ['Gachibowli', 'Kondapur', 'Miyapur', 'Tellapur', 'Narsingi'],
    faqs: [
      { q: 'How do I get an invisible grill quote in Nallagandla?', a: 'Call or message our team to arrange a free doorstep measurement. We can discuss your space, materials and a written quote.' },
      { q: 'Do you install balcony safety nets and pigeon nets in Nallagandla?', a: 'Yes. We fit balcony safety nets, child safety nets, pigeon safety nets and bird protection nets in Nallagandla apartments and nearby Gachibowli, Kondapur and Miyapur.' },
      { q: 'Do you have an office in Nallagandla?', a: 'Nallagandla is one of the areas we serve. Our team comes to your home for measurement and installation, so there is no need to visit an office.' },
    ],
  },
};

export function LocalPage({ place }: { place: Place }) {
  return <>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[2000] focus:bg-white focus:p-3">Skip to content</a>
    <Header />
    <main id="main">
      <section className="local-hero mx-auto grid max-w-[1200px] items-center gap-10 px-5 pt-[150px] pb-16 lg:grid-cols-2 lg:pt-[180px]">
        <div>
          <nav aria-label="Breadcrumb" className="text-sm text-muted"><a href="/" className="local-back">Home</a><span className="px-2 text-slate-300">/</span><span className="text-slate-500">Invisible Grills in {place.name}</span></nav>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[.18em] text-brand-dark">Doorstep service in {place.name}, {place.region}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl">Invisible grills &amp; safety nets in {place.name}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{place.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href={CONTACT.phoneHref} className="local-button">Call {CONTACT.phone}</a><a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-whatsapp px-5 py-3 font-semibold text-white">WhatsApp Us</a><a href="#contact" className="local-button-outline">Request a quote ↗</a></div>
        </div>
        <img src="/images/reference/s26.webp" alt={`Invisible grill installation on a balcony in ${place.name}, Hyderabad`} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" width={800} height={600} fetchPriority="high" decoding="async" />
      </section>
      <section className="bg-lightbg px-5 py-20"><div className="mx-auto max-w-[1200px]">
        <p className="text-sm font-semibold uppercase tracking-[.18em] text-brand-dark">Solutions for your space</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-navy">Invisible grills, balcony safety nets and pigeon nets in {place.name}</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          <article className="local-card"><span>01 / GRILLS</span><h3>Invisible &amp; child safety grills</h3><p>Discuss SS304 and SS316 invisible grill options for balconies and windows, including suitable spacing and materials for your home.</p></article>
          <article className="local-card"><span>02 / SAFETY NETS</span><h3>Balcony safety nets</h3><p>Explore netting for balconies, staircases and other open spaces where children and pets need added protection.</p></article>
          <article className="local-card"><span>03 / BIRD CONTROL</span><h3>Pigeon &amp; bird protection nets</h3><p>Keep open areas more comfortable with fitted pigeon safety nets and bird protection solutions.</p></article>
        </div>
      </div></section>
      <section className="mx-auto max-w-[1200px] px-5 pb-16">
        <h2 className="text-3xl font-bold text-navy">Popular safety solutions in {place.name}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted">Whether you need invisible grills, balcony safety nets, window safety nets, child safety nets, bird protection nets, pigeon safety nets or a ceiling cloth hanger in {place.name}, our team can help you explore options and arrange a free doorstep measurement.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {SERVICES.filter(service => ["Balcony Invisible Grills", "Window Invisible Grills", "Balcony Safety Nets", "Children Safety Nets", "Pigeon Safety Nets", "Bird Protection Nets", "Ceiling Cloth Hangers"].includes(service.short)).map(service => <a key={service.short} href={servicePath(service)} className="local-button-outline hover:bg-white">{service.short} ↗</a>)}
        </div>
        <h2 className="mt-12 text-3xl font-bold text-navy">{place.localHeading}</h2>
        <div className="mt-4 max-w-3xl space-y-4 leading-7 text-muted">
          {place.localParagraphs.map(text => <p key={text}>{text}</p>)}
        </div>
        <h3 className="mt-8 text-lg font-semibold text-navy">{place.name === 'Hyderabad' ? 'Areas we serve in Hyderabad' : `Also serving areas near ${place.name}`}</h3>
        <ul className="mt-3 flex max-w-3xl flex-wrap gap-2">
          {place.nearby.map(area => <li key={area} className="rounded-full bg-lightbg px-3.5 py-1.5 text-sm text-navy">{area}</li>)}
        </ul>
        <p className="mt-3 text-sm text-muted">These are service areas we travel to, not branch or office addresses.</p>
        <h2 className="mt-10 text-2xl font-bold text-navy">Frequently asked questions</h2>
        <div className="mt-4 max-w-3xl divide-y divide-slate-200">
          {place.faqs.map(faq => <details className="py-4" key={faq.q}><summary className="cursor-pointer font-semibold text-navy">{faq.q}</summary><p className="mt-3 leading-7 text-muted">{faq.a}</p></details>)}
        </div>
      </section>
      <section className="mx-auto max-w-[1200px] px-5 py-16"><h2 className="text-3xl font-bold text-navy">Planning an installation in {place.name}?</h2><p className="mt-4 max-w-3xl text-muted">{place.detail} We also serve {Object.entries(PLACES).filter(([, other]) => other.name !== place.name).map(([href, other], index) => <span key={href}>{index > 0 ? ' and ' : ''}<a className="text-brand-dark underline" href={href}>{other.name}</a></span>)}. <a className="text-brand-dark underline" href="/#services">Explore all services</a>.</p></section>
      <Contact initialService={null} />
    </main>
    <Footer /><FloatingActions />
  </>;
}
