import { IMG } from "../assets/refimg";

export const CONTACT = {
  phone: "+91 7995150298",
  phoneHref: "tel:+917995150298",
  whatsapp:
    "https://wa.me/917995150298?text=Hi%20Aravindh%20Invisible%20Grills%2C%20I%20want%20a%20free%20quote%20for%20my%20home.",
  whatsappGeneral:
    "https://wa.me/917995150298?text=Hi%20Aravindh%20Invisible%20Grills%2C%20I%20want%20to%20know%20more%20about%20your%20services.",
  email: "aravindhinvisiblegrills@gmail.com",
  emailHref: "mailto:aravindhinvisiblegrills@gmail.com",
  coverage: "Serving all of Hyderabad & Telangana",
  hours: "Monday – Sunday: 8:00 AM – 9:00 PM",
};

export const NAV = [
  { label: "Home", target: "home" },
  { label: "Services", target: "services" },
  { label: "Why Us", target: "why-us" },
  { label: "Gallery", target: "gallery" },
  { label: "Areas", target: "localities" },
  { label: "FAQ", target: "faq" },
  { label: "Contact", target: "contact" },
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
    badge: "Children Safety Nets",
    tag: "Child Safe",
  },
  {
    src: IMG.s16,
    alt: "Bird & Pigeon Spikes in Hyderabad",
    badge: "Bird Control Spikes",
    tag: "SS 304",
  },
];

export const STATS = [
  { value: "5,000+", label: "Installations Done" },
  { value: "28", label: "Safety Services" },
  { value: "SS 316", label: "Grill Materials" },
  { value: "30+", label: "Areas Served in Hyderabad" },
];

export type Service = {
  short: string;
  title: string;
  desc: string;
  image: string;
  badge?: string;
  category: string;
};

export const SERVICES: Service[] = [
  {
    short: "Balcony Invisible Grills",
    title: "Invisible Grill for Balconies in Hyderabad",
    desc: "Add reliable balcony protection without blocking your view. Our high-tensile SS 316 invisible grills provide a clean, modern and elegant safety solution for homes and apartments.",
    image: IMG.s26,
    badge: "15 Years Warranty",
    category: "Invisible Grills",
  },
  {
    short: "Window Invisible Grills",
    title: "Invisible Grill for Windows in Hyderabad",
    desc: "Protect your windows with sleek and discreet invisible grills that offer added safety while maintaining natural light and outside visibility.",
    image: IMG.s27,
    badge: "15 Years Warranty",
    category: "Invisible Grills",
  },
  {
    short: "Invisible Grills for Pets",
    title: "Invisible Grill for Pets Safety in Hyderabad",
    desc: "Create a safer environment for your pets with professionally installed invisible grills for balconies and open areas.",
    image: IMG.s28,
    badge: "15 Years Warranty",
    category: "Invisible Grills",
  },
  {
    short: "Invisible Grills for Kids",
    title: "Invisible Grill for Child Safety in Hyderabad",
    desc: "Improve child safety around balconies and windows with discreet invisible grills designed to provide protection without compromising the view.",
    image: IMG.s29,
    badge: "15 Years Warranty",
    category: "Invisible Grills",
  },
  {
    short: "Invisible Grills for Birds",
    title: "Invisible Grill for Bird Control in Hyderabad",
    desc: "Help protect balconies and open spaces from unwanted bird entry with discreet and neatly installed invisible grill solutions.",
    image: IMG.s30,
    badge: "15 Years Warranty",
    category: "Invisible Grills",
  },
  {
    short: "Balcony Safety Nets",
    title: "Balcony Safety Nets in Hyderabad",
    desc: "Strong and neatly installed balcony safety nets for children, pets and high-rise homes.",
    image: IMG.s1,
    category: "Safety Nets",
  },
  {
    short: "Building Safety Nets",
    title: "Building Safety Nets in Hyderabad",
    desc: "Reliable safety net solutions for residential and commercial buildings across Hyderabad.",
    image: IMG.s3,
    category: "Safety Nets",
  },
  {
    short: "Car Parking Safety Nets",
    title: "Car Parking Safety Nets in Hyderabad",
    desc: "Practical safety netting for open and covered parking areas in apartments and buildings.",
    image: IMG.s4,
    category: "Safety Nets",
  },
  {
    short: "Children Safety Nets",
    title: "Children Safety Nets in Hyderabad",
    desc: "Added protection for children around balconies, windows, staircases and open spaces.",
    image: IMG.s5,
    category: "Safety Nets",
  },
  {
    short: "Coconut Tree Safety Nets",
    title: "Coconut Tree Safety Nets in Hyderabad",
    desc: "Safety net solutions designed for areas around coconut trees and nearby properties.",
    image: IMG.s6,
    category: "Safety Nets",
  },
  {
    short: "Construction Safety Nets",
    title: "Construction Safety Nets in Hyderabad",
    desc: "Professional safety nets for construction sites and elevated working areas across Hyderabad.",
    image: IMG.s7,
    category: "Safety Nets",
  },
  {
    short: "Duct Area Safety Nets",
    title: "Duct Area Covering Safety Nets in Hyderabad",
    desc: "Customized nets for covering and securing open duct areas in buildings and apartments.",
    image: IMG.s8,
    category: "Safety Nets",
  },
  {
    short: "Industrial Safety Nets",
    title: "Industrial Safety Nets in Hyderabad",
    desc: "Heavy-duty safety net solutions for factories, warehouses and industrial spaces.",
    image: IMG.s9,
    category: "Safety Nets",
  },
  {
    short: "Open Area Safety Nets",
    title: "Open Area Safety Nets in Hyderabad",
    desc: "Customized safety nets for terraces, open areas and exposed spaces across Hyderabad.",
    image: IMG.s10,
    category: "Safety Nets",
  },
  {
    short: "Pets & Monkey Safety Nets",
    title: "Pets and Monkey Safety Nets in Hyderabad",
    desc: "Protective netting for balconies and open areas to help keep pets safe and prevent monkey entry.",
    image: IMG.s11,
    category: "Safety Nets",
  },
  {
    short: "Staircase Safety Nets",
    title: "Staircase Safety Nets in Hyderabad",
    desc: "Professional staircase netting for homes, apartments, schools and commercial buildings.",
    image: IMG.s12,
    category: "Safety Nets",
  },
  {
    short: "Swimming Pool Nets",
    title: "Swimming Pool Safety Nets in Hyderabad",
    desc: "Additional protection around swimming pools for residential and commercial properties.",
    image: IMG.s13,
    category: "Safety Nets",
  },
  {
    short: "All Sports Practice Nets",
    title: "All Sports Practice Nets Installation in Hyderabad",
    desc: "Customized practice nets for cricket, football and other sports training areas across Hyderabad.",
    image: IMG.s14,
    category: "Sports Nets",
  },
  {
    short: "Anti Bird Nets",
    title: "Anti Bird Nets for Balconies in Hyderabad",
    desc: "Keep balconies cleaner and protected with professionally installed anti-bird nets.",
    image: IMG.s15,
    category: "Bird Control",
  },
  {
    short: "Bird Control Spikes",
    title: "Bird and Pigeon Control Spikes in Hyderabad",
    desc: "Help prevent pigeons from settling on ledges, windows, AC units and other areas.",
    image: IMG.s16,
    category: "Bird Control",
  },
  {
    short: "Bird Protection Nets",
    title: "Bird Protection Nets in Hyderabad",
    desc: "Protect balconies, terraces and open areas from unwanted bird entry with quality netting.",
    image: IMG.s19,
    category: "Bird Control",
  },
  {
    short: "Cricket Practice Nets",
    title: "Cricket Practice Nets in Hyderabad",
    desc: "Professional cricket nets for academies, schools, clubs and private practice areas across Hyderabad.",
    image: IMG.s20,
    category: "Sports Nets",
  },
  {
    short: "Pigeon Safety Nets",
    title: "Pigeon Safety Nets for Balconies in Hyderabad",
    desc: "Keep balcony spaces cleaner and more comfortable with professionally fitted pigeon safety nets.",
    image: IMG.s23,
    category: "Bird Control",
  },
  {
    short: "Terrace Cricket Nets",
    title: "Terrace Cricket Practice Nets in Hyderabad",
    desc: "Transform your terrace into a practical cricket practice area with customized net installation.",
    image: IMG.s24,
    category: "Sports Nets",
  },
  {
    short: "Football Stop Nets",
    title: "Football Stop Nets in Hyderabad",
    desc: "Durable football stop nets for practice grounds, training areas and sports facilities across Hyderabad.",
    image: IMG.s25,
    category: "Sports Nets",
  },
  {
    short: "Ceiling Cloth Hangers",
    title: "Ceiling Cloth Hanger in Hyderabad",
    desc: "Make better use of your balcony or utility space with a convenient ceiling-mounted cloth hanger. Ideal for modern homes and apartments.",
    image: IMG.s31,
    category: "Ceiling Cloth Hangers",
  },
  {
    short: "Manual Ceiling Cloth Hangers",
    title: "Manual Ceiling Cloth Hanger in Hyderabad",
    desc: "Easy-to-use manual ceiling cloth hangers designed to provide convenient clothes drying while saving valuable floor and balcony space.",
    image: IMG.s32,
    category: "Ceiling Cloth Hangers",
  },
  {
    short: "SS Ceiling Cloth Hangers",
    title: "Stainless Steel Ceiling Cloth Hanger",
    desc: "Durable stainless steel ceiling cloth hangers offering a neat, strong and long-lasting solution for everyday clothes drying.",
    image: IMG.s33,
    category: "Ceiling Cloth Hangers",
  },
];

export const WHY_US = [
  {
    icon: "shield",
    title: "100% High Tensile Strength",
    text: "Marine-grade SS 316 wire tensioned on aluminium tracks, engineered to absorb heavy impact loads safely.",
  },
  {
    icon: "sun",
    title: "Anti-Rust & Weatherproof",
    text: "A transparent nylon sheath over every cable blocks rust, rain damage and sun discolouration for years.",
  },
  {
    icon: "eye",
    title: "Unobstructed Panoramic Views",
    text: "Cables virtually disappear from a distance, preserving daylight, airflow and your open-sky view.",
  },
  {
    icon: "bolt",
    title: "Quick Professional Fitting",
    text: "Neat, dust-controlled installation finished within hours by our own trained technicians — zero mess left behind.",
  },
  {
    icon: "award",
    title: "Discuss Warranty Options",
    text: "Ask our team about the warranty applicable to your chosen materials and installation.",
  },
  {
    icon: "tag",
    title: "Best Factory-Direct Price",
    text: "Honest, transparent billing with free measurement and a written quote before work begins. No surprises.",
  },
];

export type GalleryCategory =
  | "Invisible Grills"
  | "Safety Nets"
  | "Bird Control"
  | "Sports Nets"
  | "Ceiling Cloth Hangers";

export const GALLERY_FILTERS = [
  "All",
  "Invisible Grills",
  "Safety Nets",
  "Bird Control",
  "Sports Nets",
  "Ceiling Cloth Hangers",
] as const;

export const GALLERY: { src: string; alt: string; category: GalleryCategory }[] = [
  { src: IMG.g1, alt: "Balcony Invisible Grill Installation", category: "Invisible Grills" },
  { src: IMG.g2, alt: "Window Invisible Grill Installation", category: "Invisible Grills" },
  { src: IMG.g3, alt: "High-Rise Balcony Invisible Grills", category: "Invisible Grills" },
  { src: IMG.g4, alt: "Modern Balcony Invisible Grills", category: "Invisible Grills" },
  { src: IMG.s1, alt: "Balcony Safety Net Installation", category: "Safety Nets" },
  { src: IMG.s5, alt: "Children Safety Net on High-Rise Balcony", category: "Safety Nets" },
  { src: IMG.s6, alt: "Coconut Tree Safety Net Installation", category: "Safety Nets" },
  { src: IMG.s7, alt: "High-Rise Construction Safety Nets", category: "Safety Nets" },
  { src: IMG.s11, alt: "Pets & Monkey Safety Net on Balcony", category: "Safety Nets" },
  { src: IMG.s12, alt: "Staircase Safety Net in Duplex Villa", category: "Safety Nets" },
  { src: IMG.s16, alt: "Bird & Pigeon Spikes on AC Ledge", category: "Bird Control" },
  { src: IMG.s20, alt: "Cricket Practice Net Installation", category: "Sports Nets" },
  { src: IMG.s31, alt: "Ceiling Cloth Hanger in Balcony", category: "Ceiling Cloth Hangers" },
  { src: IMG.g10, alt: "Invisible Grills on Corner Balcony", category: "Invisible Grills" },
  { src: IMG.g11, alt: "Apartment Balcony Safety Net Fitting", category: "Safety Nets" },
  { src: IMG.g12, alt: "Window Safety Net Installation", category: "Safety Nets" },
  { src: IMG.g13, alt: "High-Rise Balcony Safety Nets", category: "Safety Nets" },
  { src: IMG.g14, alt: "Balcony Invisible Grills", category: "Invisible Grills" },
  { src: IMG.g15, alt: "Terrace Cricket Netting", category: "Sports Nets" },
  { src: IMG.g16, alt: "Pigeon Safety Net on Balcony", category: "Bird Control" },
  { src: IMG.g17, alt: "Ceiling Cloth Hanger 6 Rod Set", category: "Ceiling Cloth Hangers" },
  { src: IMG.g18, alt: "Swimming Pool Safety Netting", category: "Safety Nets" },
  { src: IMG.g19, alt: "Industrial Fall Protection Safety Nets", category: "Safety Nets" },
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
  {
    q: "What are invisible grills and how do they work?",
    a: "Invisible grills are high-tensile SS 316 marine-grade stainless steel cables tensioned on heavy aluminium tracks across balconies, windows and open spaces. From a few metres away they are virtually invisible, preserving your outside view and ventilation while providing added protection.",
  },
  {
    q: "Do invisible grills come with a warranty?",
    a: "Yes! Our SS 316 invisible grills come with a 15-year product warranty on the stainless steel cables, subject to the terms applicable to your installation. Please ask our team for details.",
  },
  {
    q: "How can I get a quotation for invisible grills or safety nets?",
    a: "We offer completely free doorstep measurements anywhere in Hyderabad and Telangana. Our technician will visit your site, measure your space, and provide an exact written quote with zero hidden charges.",
  },
  {
    q: "Are invisible grills safe for children and pets?",
    a: "Absolutely. We provide customized cable spacing (2-inch, 3-inch, or 4-inch) to suit your space and safety requirements. The cables have high tensile strength and smooth nylon coatings.",
  },
  {
    q: "Will invisible grills rust over time in Hyderabad's weather?",
    a: "SS 316 stainless steel and protective coatings are selected for weather resistance. Maintenance and durability depend on the installation and environment.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential balcony and window installations are completed within 2 to 4 hours on the same day as measurement. Our technicians work neatly and leave zero mess.",
  },
  {
    q: "Do you install safety nets and bird spikes across all of Hyderabad?",
    a: "Yes, we provide doorstep measurement and same-day installation across all areas of Greater Hyderabad and Secunderabad, including Gachibowli, Kondapur, Kukatpally, Miyapur, Hitec City, Uppal, and all surrounding localities.",
  },
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
    service: "Ceiling Cloth Hangers",
  },
];

export const FIELD_OPTIONS = SERVICES.map((service) => service.title).concat("Other Safety Solutions");

export const scrollToSection = (target: string) => {
  const el = document.getElementById(target);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 108;
  window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
};

/** Stable, readable URLs shared by the service cards and static page generation. */
export const servicePath = (service: Service) => `/services/${service.short.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/`;

/** Areas we travel to for measurement and installation. These are service areas, not branch offices. */
export const SERVICE_AREAS = ["Hyderabad", "Gachibowli", "Kondapur", "Miyapur", "Kukatpally", "Madhapur", "HITEC City", "Nallagandla", "Vanasthalipuram", "LB Nagar", "Manikonda", "Narsingi", "Banjara Hills", "Jubilee Hills"];

export const HOME_SEO = {
  title: "Invisible Grills & Pigeon Safety Nets in Hyderabad | Aravindh",
  description: "Invisible grills, pigeon safety nets, balcony safety nets, child safety nets and ceiling cloth hangers in Hyderabad. Free doorstep measurement.",
};
