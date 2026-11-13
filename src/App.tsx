import { PageContext, normalizePath } from './components/PageContext';
import { PageShell } from './components/PageShell';
import { useReveal } from './components/useReveal';
import { SERVICE_BY_PATH } from './lib/services';
import { PLACE_BY_PATH } from './lib/locations';
import { GUIDE_BY_PATH } from './lib/guides';
import { About, Areas, FreeVisit, Hero, WhyUs } from './sections/HomeSections';
import { Services, ServicesHub } from './sections/Services';
import { Gallery, GalleryHub } from './sections/Gallery';
import { LocationsHub } from './sections/LocationsHub';
import { Faq, Reviews } from './sections/FaqReviews';
import { Contact } from './sections/Contact';
import { ServicePage } from './sections/ServicePage';
import { LocalPage } from './sections/LocalPage';
import { GuidePage } from './sections/GuidePage';
import { AboutPage } from './sections/AboutPage';
import { ContactPage } from './sections/ContactPage';
import { NotFound } from './sections/NotFound';

export default function App({ pathname = '/' }: { pathname?: string }) {
  useReveal();
  const path = normalizePath(pathname);
  const service = SERVICE_BY_PATH.get(path);
  const place = PLACE_BY_PATH.get(path);
  const guide = GUIDE_BY_PATH.get(path);
  let page;
  if (service) page = <ServicePage service={service} />;
  else if (place) page = <LocalPage place={place} />;
  else if (guide) page = <GuidePage guide={guide} />;
  else if (path === '/about/') page = <AboutPage />;
  else if (path === '/contact/') page = <ContactPage />;
  else if (path === '/services/') page = <ServicesHub />;
  else if (path === '/gallery/') page = <GalleryHub />;
  else if (path === '/locations/') page = <LocationsHub />;
  else if (path === '/') page = <PageShell><Hero /><About /><Services /><WhyUs /><Gallery /><Reviews /><Areas /><FreeVisit /><Faq /><Contact initialService={null} /></PageShell>;
  else page = <NotFound />;
  return <PageContext.Provider value={path}>{page}</PageContext.Provider>;
}
