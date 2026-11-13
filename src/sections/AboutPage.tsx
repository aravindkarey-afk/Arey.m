import { CONTACT, STATS, WHY_US, SERVICE_AREAS } from "../lib/data";
import { IMG } from "../assets/refimg";
import { Header, Footer, FloatingActions } from "../components/Chrome";
import { Award, Bolt, Check, Eye, Phone, ShieldCheck, Sun, Tag, WhatsApp } from "../components/Icons";
import { Contact } from "./Contact";

const valueIcons: Record<string, typeof ShieldCheck> = {
  shield: ShieldCheck, sun: Sun, eye: Eye, bolt: Bolt, award: Award, tag: Tag,
};

const expertise = [
  { title: "Invisible Grills", text: "SS304 and SS316 stainless steel cable grills for balconies and windows, with spacing tailored to your family.", href: "/ss316-invisible-grills/", label: "Explore grill materials" },
  { title: "Safety Nets", text: "Balcony, window, staircase and building safety nets for children, pets and high-rise homes.", href: "/services/balcony-safety-nets/", label: "View safety nets" },
  { title: "Bird Control", text: "Pigeon safety nets, bird protection nets and anti-bird spikes to keep spaces clean and hygienic.", href: "/services/pigeon-safety-nets/", label: "View bird control" },
  { title: "Child Safety", text: "Whole-home child safety planning across balconies, windows and staircases.", href: "/child-safety-solutions/", label: "Child safety solutions" },
];

export function AboutPage() {
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
              <span className="text-slate-500">About Us</span>
            </nav>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[.18em] text-brand-dark">About Us · Hyderabad &amp; Telangana</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl">About Aravindh Invisible Grills</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              We are a Hyderabad-based team specialising in invisible grills, safety nets and bird-control solutions. Our focus is simple: add reliable protection to your home without stealing your view, your light or your airflow.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              From high-rise apartments in the west of the city to independent homes in the east, we visit your home for a free measurement, explain the options honestly and provide a written quote before any work begins.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="local-button"><Phone className="mr-2 h-4 w-4" /> Call {CONTACT.phone}</a>
              <a href={CONTACT.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-whatsapp px-5 py-3 font-semibold text-white"><WhatsApp className="mr-2 h-4 w-4" /> WhatsApp Us</a>
            </div>
          </div>
          <img src={IMG.s26} alt="Aravindh Invisible Grills balcony installation with an open city view in Hyderabad" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" width={800} height={600} fetchPriority="high" decoding="async" />
        </section>

        <div className="bg-navy">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[32px] leading-none font-bold text-white sm:text-[38px]">{stat.value}</p>
                <p className="mt-2 text-[12px] font-medium tracking-[0.5px] text-slate-300 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-[1200px] px-5 py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img src="/images/family-balcony.jpg" alt="Family enjoying a safe, open balcony protected by invisible grills in Hyderabad" className="w-full rounded-2xl object-cover shadow-[0_14px_36px_rgba(10,37,64,0.2)]" width={800} height={600} loading="lazy" decoding="async" />
            <div>
              <h2 className="text-3xl font-bold text-navy">Our story &amp; mission</h2>
              <p className="mt-4 leading-8 text-muted">
                Traditional iron grills cage a home, block sunlight and spoil the look of a building. We started Aravindh Invisible Grills to offer a better alternative — high-tensile stainless steel cables and engineered safety nets that keep families safer while balconies and windows stay bright and open.
              </p>
              <p className="mt-4 leading-8 text-muted">
                Our mission is to make professional home safety accessible across Hyderabad and Telangana: free doorstep measurement, transparent written quotes, quality materials and a neat installation by our own trained technicians.
              </p>
              <ul className="mt-6 space-y-3">
                {["Honest advice on the right material and grade for your home", "Free doorstep measurement with a written quote", "Neat, dust-controlled installation", "Service across Hyderabad and Telangana"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-700"><Check className="mt-1 h-5 w-5 shrink-0 text-brand" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-lightbg px-5 py-16">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-center text-3xl font-bold text-navy">What we specialise in</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {expertise.map((item) => (
                <div key={item.title} className="flex flex-col rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(10,37,64,0.06)]">
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-muted">{item.text}</p>
                  <a href={item.href} className="mt-4 text-sm font-semibold text-brand-dark hover:underline">{item.label} ↗</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-16">
          <h2 className="text-center text-3xl font-bold text-navy">Why families choose us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item) => {
              const Icon = valueIcons[item.icon] ?? ShieldCheck;
              return (
                <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-7 text-center shadow-[0_4px_18px_rgba(10,37,64,0.06)]">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand"><Icon className="h-6 w-6" /></div>
                  <h3 className="mb-2 text-base font-semibold text-navy">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-lightbg px-5 py-16">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="text-3xl font-bold text-navy">Areas we serve</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted">We travel to your home for measurement and installation across Hyderabad and Telangana, including {SERVICE_AREAS.slice(1, -1).join(", ")} and {SERVICE_AREAS[SERVICE_AREAS.length - 1]}.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="/invisible-grills-hyderabad/" className="local-button-outline bg-white">Invisible Grills in Hyderabad ↗</a>
              <a href="/invisible-grills-nallagandla/" className="local-button-outline bg-white">Nallagandla ↗</a>
              <a href="/invisible-grills-vanasthalipuram/" className="local-button-outline bg-white">Vanasthalipuram ↗</a>
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
