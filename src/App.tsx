import { FloatingActions, Footer, Header } from "./components/Chrome";
import { useReveal } from "./components/useReveal";
import { About, Areas, Hero, WhyUs } from "./sections/HomeSections";
import { Services } from "./sections/Services";
import { Gallery } from "./sections/Gallery";
import { Faq } from "./sections/FaqReviews";
import { Contact } from "./sections/Contact";
import { ServicePage } from "./sections/ServicePage";
import { NotFound } from "./sections/NotFound";
import { SERVICES, servicePath } from "./lib/data";
import { LocalPage, PLACES } from "./sections/LocalPage";
import { GuidePage } from "./sections/GuidePage";
import { GUIDE_BY_PATH } from "./lib/guides";
import { AboutPage } from "./sections/AboutPage";
import { ContactPage } from "./sections/ContactPage";

export type ServiceRequest = { title: string; id: number } | null;

export default function App({ pathname = "/" }: { pathname?: string }) {
  useReveal();

  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;

  const service = SERVICES.find((item) => servicePath(item) === normalized);
  if (service) return <ServicePage service={service} />;

  const place = PLACES[normalized];
  if (place) return <LocalPage place={place} />;

  const guide = GUIDE_BY_PATH[normalized];
  if (guide) return <GuidePage guide={guide} />;

  if (normalized === "/about/") return <AboutPage />;
  if (normalized === "/contact/") return <ContactPage />;

  if (normalized !== "/") return <NotFound />;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[2000] focus:rounded focus:bg-navy focus:px-3 focus:py-2 focus:text-xs focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Areas />
        <Faq />

        <Contact initialService={null} />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
