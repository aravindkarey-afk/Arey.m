import type { FAQ } from './service-content';

export const HOME_SEO = {
  title: 'Aravindh Invisible Grills | Hyderabad Safety Solutions',
  description: 'Invisible grills, safety nets, sports nets, bird control and cloth hangers in Hyderabad. Explore Aravindh Invisible Grills and book a free site measurement.',
};
export const CONTACT_FAQS: FAQ[] = [
  { q: 'Is the site visit and measurement free?', a: 'Yes. We offer free measurement in our listed Hyderabad service areas. Share your location and requirements so we can confirm availability before visiting.' },
  { q: 'How do I book a visit?', a: 'Call or WhatsApp us, or prepare an enquiry with the form. Share your area, service and preferred time. A visit is confirmed only after our team responds.' },
  { q: 'Does submitting the form send my enquiry automatically?', a: 'No. The form prepares a WhatsApp message for you to review and send. This website does not take payments or store form submissions on a server.' },
  { q: 'Which areas do you cover?', a: 'Our focus areas include Nallagandla, Vanasthalipuram, Gachibowli, Kondapur, Miyapur, Kukatpally, Manikonda, Madhapur, Tellapur, Narsingi, HITEC City, Jubilee Hills, Banjara Hills and Secunderabad. Ask us about other locations.' },
];
export const PAGE_META = {
  '/services/': { title: 'All Products & Services | Aravindh Invisible Grills', description: 'Explore invisible grills, balcony and child safety nets, pigeon nets, sports netting, bird spikes and cloth hangers in Hyderabad. Compare all 33 services.', kind: 'hub', image: '/images/reference/s26.webp' },
  '/gallery/': { title: 'Safety Nets & Grills Project Gallery | Aravindh Hyderabad', description: 'Browse grills, safety nets, bird control, sports netting and cloth hanger reference images. Compare service types and ask Aravindh for relevant examples.', kind: 'hub', image: '/images/reference/g1.webp' },
  '/locations/': { title: 'Hyderabad Service Areas | Aravindh Invisible Grills', description: 'Find Aravindh safety and installation services in 14 Hyderabad areas, including Nallagandla, Gachibowli, Kondapur and Vanasthalipuram. Book a site visit.', kind: 'hub', image: '/images/hero-balcony.jpg' },
  '/about/': { title: 'About Aravindh Invisible Grills | Hyderabad Safety Team', description: 'Meet the Hyderabad team behind Aravindh Invisible Grills. Learn about our grills, nets, bird control, sports netting and cloth hanger installation approach.', kind: 'about', image: '/images/reference/s26.webp' },
  '/contact/': { title: 'Contact Aravindh Invisible Grills | Free Site Visit', description: 'Call +91 7995150298 or WhatsApp Aravindh Invisible Grills for a free Hyderabad site visit. Enquire about grills, nets, bird spikes or cloth drying hangers.', kind: 'contact', image: null },
} as const;
