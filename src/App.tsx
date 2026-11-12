import { useCallback, useState } from "react";
import { FloatingActions, Footer, Header } from "./components/Chrome";
import { useReveal } from "./components/useReveal";
import { About, Areas, Hero, WhyUs } from "./sections/HomeSections";
import { Services } from "./sections/Services";
import { Gallery } from "./sections/Gallery";
import { Faq } from "./sections/FaqReviews";
import { Contact } from "./sections/Contact";
import { LocalPage, PLACES } from "./sections/LocalPage";

export type ServiceRequest = { title: string; id: number } | null;

export default function App({ pathname = "/" }: { pathname?: string }) {
  const [request, setRequest] = useState<ServiceRequest>(null);
  useReveal();

  const handleRequest = useCallback((title: string) => {
    setRequest((current) => ({ title, id: (current?.id ?? 0) + 1 }));
    window.setTimeout(() => {
      const el = document.getElementById("contact");
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 108;
      window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
    }, 80);
  }, []);

  const place = PLACES[pathname.endsWith("/") ? pathname : `${pathname}/`];
  if (place) return <LocalPage place={place} />;

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
        <Services onRequest={handleRequest} />
        <WhyUs />
        <Gallery />
        <Areas />
        <Faq />

        <Contact initialService={request} />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
