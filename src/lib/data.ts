import { IMG } from "../assets/refimg";
import { SERVICES } from "./services";
export { SERVICES, SERVICE_CATEGORIES, FEATURED_SERVICES, ADDITIONAL_SERVICES, SERVICE_BY_PATH, servicePath } from "./services";
export type { Service, ServiceCategory } from "./services";

export const CONTACT = {
  phone: "+91 7995150298",
  phoneHref: "tel:+917995150298",
  whatsapp:
    "https://wa.me/917995150298?text=Hi%20Aravind%20Invisible%20Grills%2C%20I%20want%20a%20free%20quote%20for%20my%20home.",
  whatsappGeneral:
    "https://wa.me/917995150298?text=Hi%20Aravind%20Invisible%20Grills%2C%20I%20want%20to%20know%20more%20about%20your%20services.",
  email: "aravindhinvisiblegrills@gmail.com",
  emailHref: "mailto:aravindhinvisiblegrills@gmail.com",
  coverage: "Serving all of Hyderabad & Telangana",
  hours: "Monday – Sunday: 8:00 AM – 9:00 PM",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Locations", href: "/locations/" },
  { label: "Contact", href: "/contact/" },
];

export const HERO_SLIDES = [
  {
    src: IMG.s26,
    alt: "Invisible Grill for Balconies in Hyderabad",
    badge: "Balcony Invisible Grills",
    tag: "15 Yrs Warranty",
  },
  {
    src: IMG.s27,
    alt: "Invisible Grill for Windows in Hyderabad",
    badge: "Window Invisible Grills",
    tag: "15 Yrs Warranty",
  },
  {
    src: IMG.s1,
    alt: "Balcony Safety Nets in Hyderabad",
    badge: "Balcony Safety Nets",
    tag: "HDPE",
  },
  {
    src: IMG.s11,
    alt: "Pets and Monkey Safety Nets in Hyderabad",
    badge: "Pets & Monkey Safety Nets",
    tag: "Heavy Duty",
  },
  {
    src: IMG.s5,
    alt: "Children Safety Nets in Hyderabad",
    badge: "Child Safety Nets",
    tag: "Measured Fit",
  },
  {
    src: IMG.s16,
    alt: "Bird & Pigeon Spikes in Hyderabad",
    badge: "Anti-Bird Spikes",
    tag: "SS 304",
  },
];

export const STATS = [
  { value: "5,000+", label: "Installations Done" },
  { value: "33", label: "Service Pages" },
  { value: "304 / 316", label: "Stainless Steel Grades" },
  { value: "14", label: "Focus Areas in Hyderabad" },
];

export const WHY_US = [
  {
    icon: "shield",
    title: "Materials matched to the job",
    text: "Stainless steel grills, application-specific nets and durable hanger systems, selected for the opening and its use.",
  },
  {
    icon: "sun",
    title: "Weather-aware selection",
    text: "Cable grades, coatings and UV-stabilised net options chosen with sun and rain exposure in mind.",
  },
  {
    icon: "eye",
    title: "A finish that fits your space",
    text: "Slim grill cables, open mesh and overhead drying keep your rooms usable, bright and visually uncluttered.",
  },
  {
    icon: "bolt",
    title: "Planned, neat installation",
    text: "A site survey, agreed fixing plan and tidy installation, with access and timing confirmed before work.",
  },
  {
    icon: "award",
    title: "Discuss Warranty Options",
    text: "Ask our team about the warranty applicable to your chosen materials and installation.",
  },
  {
    icon: "tag",
    title: "Clear, written quotations",
    text: "Free measurement and an itemised quote before you approve the work. Discuss material and warranty terms in writing.",
  },
];

export type GalleryCategory =
  | "Invisible Grills"
  | "Safety Nets"
  | "Bird Control"
  | "Sports Nets"
  | "Cloth Hangers";

export const GALLERY_FILTERS = [
  "All",
  "Invisible Grills",
  "Safety Nets",
  "Bird Control",
  "Sports Nets",
  "Cloth Hangers",
] as const;

export const GALLERY: { src: string; alt: string; category: GalleryCategory }[] = [
  { src: IMG.g1, alt: "Balcony invisible grill cables with an open residential outlook", category: "Invisible Grills" },
  { src: IMG.g2, alt: "Window invisible grill reference with slim vertical cables", category: "Invisible Grills" },
  { src: IMG.g3, alt: "Balcony invisible grill reference in a multi-storey building", category: "Invisible Grills" },
  { src: IMG.g4, alt: "Modern balcony grill reference with a clear outside view", category: "Invisible Grills" },
  { src: IMG.s1, alt: "Balcony safety net reference with a tied mesh perimeter", category: "Safety Nets" },
  { src: IMG.s5, alt: "Child safety net reference on an apartment balcony", category: "Safety Nets" },
  { src: IMG.s6, alt: "Safety net installed around a coconut tree", category: "Safety Nets" },
  { src: IMG.s7, alt: "Construction safety net reference on a building exterior", category: "Safety Nets" },
  { src: IMG.s11, alt: "Pet and monkey safety net reference collage with existing image labels", category: "Safety Nets" },
  { src: IMG.s12, alt: "Staircase safety net reference in a residential interior", category: "Safety Nets" },
  { src: IMG.s16, alt: "Anti-bird spikes fitted along a building ledge", category: "Bird Control" },
  { src: IMG.s20, alt: "Cricket practice net reference enclosing an outdoor court", category: "Sports Nets" },
  { src: IMG.s31, alt: "Ceiling-mounted cloth hanger reference in a utility balcony", category: "Cloth Hangers" },
  { src: IMG.g10, alt: "Corner balcony invisible grill reference", category: "Invisible Grills" },
  { src: IMG.s15, alt: "Bird protection net reference enclosing a balcony opening", category: "Bird Control" },
  { src: IMG.g12, alt: "Window invisible grill reference with closely spaced cables", category: "Invisible Grills" },
  { src: IMG.g13, alt: "Balcony invisible grill reference on a residential upper floor", category: "Invisible Grills" },
  { src: IMG.g14, alt: "Floodlit sports practice netting at night", category: "Sports Nets" },
  { src: IMG.g15, alt: "Balcony invisible grill reference photographed at night", category: "Invisible Grills" },
  { src: IMG.g16, alt: "Terrace sports netting reference with an overhead enclosure", category: "Sports Nets" },
  { src: IMG.g17, alt: "Balcony invisible grill reference beside an apartment window", category: "Invisible Grills" },
  { src: IMG.g18, alt: "Balcony grill and protective barrier reference", category: "Invisible Grills" },
  { src: IMG.g19, alt: "Window invisible grill reference with an outside view", category: "Invisible Grills" },
  { src: IMG.s25, alt: "Football safety net reference around a practice pitch", category: "Sports Nets" },
  { src: IMG.s32, alt: "Manual ceiling cloth drying hanger reference with pulley ropes", category: "Cloth Hangers" },
  { src: IMG.s33, alt: "Stainless steel ceiling cloth hanger reference", category: "Cloth Hangers" },
];

export const LOCALITY_GROUPS = [
  {
    title: "West Hyderabad",
    areas: ["Nallagandla", "Gachibowli", "HITEC City", "Madhapur", "Kondapur", "Kukatpally", "Miyapur", "Financial District", "Kokapet", "Narsingi", "Manikonda", "Tellapur"],
  },
  {
    title: "North & Central Hyderabad",
    areas: ["Secunderabad", "Begumpet", "Banjara Hills", "Jubilee Hills", "Somajiguda", "Ameerpet", "Kompally", "Alwal", "Malkajgiri", "Bowenpally"],
  },
  {
    title: "East & South Hyderabad",
    areas: ["Vanasthalipuram", "Uppal", "LB Nagar", "Nagole", "Dilsukhnagar", "Habsiguda", "Tarnaka", "Attapur", "Mehdipatnam", "Rajendranagar", "Shamshabad"],
  },
];

export const FAQS = [
  { q: "Which services do you provide beyond invisible grills?", a: "We install balcony and child safety nets, pigeon and bird protection nets, sports and cricket practice nets, football stop nets, anti-bird spikes and cloth drying hangers. Explore the Services page for each option and its dedicated guide." },
  { q: "How do I choose between grills, nets and bird spikes?", a: "Cable grills suit balconies and windows where a clear view matters; nets enclose larger or irregular spaces; spikes discourage birds from landing on narrow ledges. We assess the opening and explain the suitable options during measurement." },
  { q: "Is the site visit and measurement free?", a: "Yes. We offer a free site visit and measurement in our Hyderabad service areas. Share your location, service and preferred time so we can confirm availability before visiting." },
  { q: "Can I book more than one service for the same property?", a: "Yes. Tell us about each balcony, window, ledge, practice area or utility space. We can plan multiple services together and explain the materials, access requirements and quotation." },
  { q: "How long does installation take and what affects the price?", a: "Dimensions, material, fixing points, access and site preparation all affect the work. We confirm the scope, price and expected schedule after measurement; we do not promise a universal installation time." },
  { q: "Do nets or grills replace adult supervision?", a: "No. They are additional protective barriers, not a substitute for supervision or compliant railings. We discuss spacing, fixings and limitations, and recommend keeping climbable furniture away from protected openings." },
  { q: "Do the listed locations have Aravind branch offices?", a: "No branch addresses are implied. Nallagandla, Vanasthalipuram and the other listed areas are places we travel to for measurement and installation. Contact us to confirm your exact location." },
];

export const REVIEWS = [
  {
    text: "Aravind Invisible Grills transformed our balcony beautifully. Premium quality SS 316 cables, neat installation, and the work was completed exactly on schedule.",
    name: "Rahul Sharma",
    area: "Gachibowli, Hyderabad",
    initials: "RS",
    service: "Balcony Invisible Grills",
  },
  {
    text: "We installed child safety invisible grills and couldn't be happier. Strong materials, elegant design, and complete peace of mind for our family.",
    name: "Priya Reddy",
    area: "Kondapur, Hyderabad",
    initials: "PR",
    service: "Child Safety Invisible Grills",
  },
  {
    text: "Outstanding workmanship with high-quality stainless steel cables. The team was professional, punctual, and delivered exactly as promised.",
    name: "Sandeep Kumar",
    area: "Madhapur, Hyderabad",
    initials: "SK",
    service: "Window Invisible Grills",
  },
  {
    text: "The bird safety net installation was quick and extremely clean. It protects our balcony perfectly without affecting ventilation or the view.",
    name: "Anjali Verma",
    area: "Begumpet, Hyderabad",
    initials: "AV",
    service: "Anti Bird Nets",
  },
  {
    text: "We chose Aravind for pet and monkey safety nets and the results exceeded expectations. Excellent finishing, durable materials, and friendly customer support.",
    name: "Kiran Rao",
    area: "Kukatpally, Hyderabad",
    initials: "KR",
    service: "Pets & Monkey Safety Nets",
  },
  {
    text: "The ceiling cloth hanger is smooth, sturdy, and saves valuable balcony space. Professional installation and a premium finish make it worth every rupee.",
    name: "Sneha Patel",
    area: "Secunderabad, Hyderabad",
    initials: "SP",
    service: "Cloth Hangers",
  },
];

export const FIELD_OPTIONS = SERVICES.map((service) => service.short).concat("Multiple services", "Other Safety Solutions");

export const scrollToSection = (target: string) => {
  const el = document.getElementById(target);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 108;
  window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
};


/** Areas we travel to for measurement and installation. These are service areas, not branch offices. */
export const SERVICE_AREAS = ["Hyderabad", "Nallagandla", "Vanasthalipuram", "Gachibowli", "Kondapur", "Miyapur", "Kukatpally", "Manikonda", "Madhapur", "Tellapur", "Narsingi", "HITEC City", "Jubilee Hills", "Banjara Hills", "Secunderabad"];
