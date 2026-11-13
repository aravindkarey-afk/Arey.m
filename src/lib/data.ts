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
  title: "Invisible Grills in Hyderabad | Aravindh Invisible Grills",
  description:
    "Looking for invisible grills in Hyderabad? Get SS304 & SS316 invisible grill installation, balcony safety solutions and free doorstep measurement from Aravindh.",
};

/**
 * Unique SEO title + meta description for every service page. Titles follow the
 * "<keyword> in Hyderabad | Aravindh Invisible Grills" pattern; descriptions are
 * written individually so no two pages share metadata.
 */
export const SERVICE_SEO: Record<string, { title: string; description: string }> = {
  "Balcony Invisible Grills": {
    title: "Balcony Invisible Grills in Hyderabad | Aravindh Invisible Grills",
    description: "Sleek balcony invisible grills in Hyderabad using SS316 stainless steel cables. Keep your view open while adding safety. Free doorstep measurement.",
  },
  "Window Invisible Grills": {
    title: "Window Invisible Grills in Hyderabad | Aravindh Invisible Grills",
    description: "Discreet window invisible grills in Hyderabad that protect without blocking light or airflow. Professional installation and free site measurement.",
  },
  "Invisible Grills for Pets": {
    title: "Invisible Grills for Pets in Hyderabad | Aravindh Invisible Grills",
    description: "Pet-safe invisible grills for balconies and windows in Hyderabad. Strong stainless steel cables that keep cats and dogs safe. Free measurement.",
  },
  "Invisible Grills for Kids": {
    title: "Invisible Grills for Child Safety in Hyderabad | Aravindh",
    description: "Child-safe invisible grills in Hyderabad with close cable spacing for balconies and windows. Added protection without losing the view. Free quote.",
  },
  "Invisible Grills for Birds": {
    title: "Invisible Grills for Bird Control in Hyderabad | Aravindh",
    description: "Stop birds entering balconies with discreet invisible grills in Hyderabad. A clean, long-lasting alternative to bulky nets. Free doorstep measurement.",
  },
  "Balcony Safety Nets": {
    title: "Balcony Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Strong, neatly fitted balcony safety nets in Hyderabad for children, pets and high-rise homes. UV-stabilised nets and free doorstep measurement.",
  },
  "Building Safety Nets": {
    title: "Building Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Residential and commercial building safety nets in Hyderabad. Custom coverage, professional fixing and free site assessment for your property.",
  },
  "Car Parking Safety Nets": {
    title: "Car Parking Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Protect parking areas from falling debris with car parking safety nets in Hyderabad. Durable netting for apartments and buildings. Free quote.",
  },
  "Children Safety Nets": {
    title: "Children Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Child safety nets for balconies, windows and staircases in Hyderabad. Secure, neatly installed protection for families. Free doorstep measurement.",
  },
  "Coconut Tree Safety Nets": {
    title: "Coconut Tree Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Safety netting around coconut trees and nearby properties in Hyderabad to catch falling fruit and fronds. Professional installation. Free quote.",
  },
  "Construction Safety Nets": {
    title: "Construction Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Heavy-duty construction safety nets for sites and elevated work areas in Hyderabad. Reliable fall and debris protection. Free site assessment.",
  },
  "Duct Area Safety Nets": {
    title: "Duct Area Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Cover and secure open duct areas in Hyderabad apartments with custom safety nets. Neat, durable fixing that keeps ducts safe. Free measurement.",
  },
  "Industrial Safety Nets": {
    title: "Industrial Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Industrial safety nets for factories, warehouses and workspaces in Hyderabad. Heavy-duty netting installed by trained technicians. Free quote.",
  },
  "Open Area Safety Nets": {
    title: "Open Area Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Custom safety nets for terraces and open areas in Hyderabad. Weather-resistant netting with professional fixing. Free doorstep measurement.",
  },
  "Pets & Monkey Safety Nets": {
    title: "Pets & Monkey Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Keep pets safe and monkeys out with heavy-duty safety nets in Hyderabad. Strong netting for balconies and open areas. Free site measurement.",
  },
  "Staircase Safety Nets": {
    title: "Staircase Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Staircase safety nets for homes, apartments and schools in Hyderabad. Prevent falls with neat, secure netting. Free doorstep measurement.",
  },
  "Swimming Pool Nets": {
    title: "Swimming Pool Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Add a layer of protection around swimming pools in Hyderabad with custom safety netting for homes and clubs. Free site assessment and quote.",
  },
  "All Sports Practice Nets": {
    title: "Sports Practice Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Custom sports practice nets for cricket, football and more in Hyderabad. Durable netting for academies and terraces. Free measurement and quote.",
  },
  "Anti Bird Nets": {
    title: "Anti Bird Nets for Balconies in Hyderabad | Aravindh",
    description: "Keep balconies clean and bird-free with anti bird nets in Hyderabad. UV-stabilised, neatly installed netting. Free doorstep measurement.",
  },
  "Bird Control Spikes": {
    title: "Bird & Pigeon Control Spikes in Hyderabad | Aravindh",
    description: "Stainless steel bird and pigeon spikes for ledges, AC units and windows in Hyderabad. A humane way to stop roosting. Free site measurement.",
  },
  "Bird Protection Nets": {
    title: "Bird Protection Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Bird protection nets for balconies, terraces and ducts in Hyderabad. Block bird entry while keeping light and airflow. Free doorstep measurement.",
  },
  "Cricket Practice Nets": {
    title: "Cricket Practice Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Professional cricket practice nets for academies, schools and terraces in Hyderabad. Strong netting and frames. Free measurement and quote.",
  },
  "Pigeon Safety Nets": {
    title: "Pigeon Safety Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Pigeon safety nets for balconies and windows in Hyderabad. Keep pigeons out and your space clean with neat, durable netting. Free measurement.",
  },
  "Terrace Cricket Nets": {
    title: "Terrace Cricket Practice Nets in Hyderabad | Aravindh",
    description: "Turn your terrace into a practice zone with cricket nets in Hyderabad. Safe, contained netting that protects neighbours. Free site measurement.",
  },
  "Football Stop Nets": {
    title: "Football Stop Nets in Hyderabad | Aravindh Invisible Grills",
    description: "Football stop nets for grounds, academies and terraces in Hyderabad. Contain the ball with durable, weather-resistant netting. Free quote.",
  },
  "Ceiling Cloth Hangers": {
    title: "Ceiling Cloth Hangers in Hyderabad | Aravindh Invisible Grills",
    description: "Save balcony space with ceiling-mounted cloth hangers in Hyderabad. Smooth, sturdy and neatly installed. Free doorstep measurement and quote.",
  },
  "Manual Ceiling Cloth Hangers": {
    title: "Manual Ceiling Cloth Hangers in Hyderabad | Aravindh",
    description: "Easy-to-use manual ceiling cloth hangers in Hyderabad that free up floor space and dry clothes overhead. Professional fitting. Free quote.",
  },
  "SS Ceiling Cloth Hangers": {
    title: "Stainless Steel Ceiling Cloth Hangers | Aravindh Hyderabad",
    description: "Rust-resistant stainless steel ceiling cloth hangers in Hyderabad. A strong, long-lasting clothes-drying solution. Free measurement and quote.",
  },
};

/** Return unique metadata for a service, falling back to a safe generated pair. */
export const serviceSeo = (service: Service) =>
  SERVICE_SEO[service.short] ?? {
    title: `${/hyderabad/i.test(service.title) ? service.title : `${service.title} in Hyderabad`} | Aravindh Invisible Grills`,
    description: service.desc,
  };

/** Related services for internal linking (same category, then key cross-sells). */
export const relatedServices = (service: Service): Service[] => {
  const sameCategory = SERVICES.filter((s) => s.category === service.category && s.short !== service.short);
  const crossSells = SERVICES.filter((s) =>
    ["Balcony Invisible Grills", "Balcony Safety Nets", "Pigeon Safety Nets", "Children Safety Nets"].includes(s.short) &&
    s.short !== service.short &&
    !sameCategory.includes(s)
  );
  return [...sameCategory, ...crossSells].slice(0, 6);
};

/** Longer, original content for the highest-intent service pages. */
export const SERVICE_DETAILS: Record<
  string,
  { intro: string[]; highlights: string[]; faqs: { q: string; a: string }[] }
> = {
  "Balcony Invisible Grills": {
    intro: [
      "A balcony invisible grill gives your Hyderabad home a clear safety barrier without the caged feeling of traditional iron grills. Thin, high-tensile stainless steel cables are tensioned between aluminium tracks fixed to your balcony opening, so from a few metres away the cables almost disappear and your view stays open.",
      "We most often install balcony invisible grills in high-rise apartments across Gachibowli, Kondapur, Nallagandla, Manikonda and Narsingi, where families want fall protection for children and pets but do not want to block the skyline. Cable spacing is chosen for your household — closer spacing for homes with toddlers or small pets.",
    ],
    highlights: [
      "SS316 marine-grade stainless steel cables for corrosion resistance",
      "Cable spacing options to suit children and pets",
      "Powder-coated aluminium tracks for a clean finish",
      "Preserves daylight, airflow and your outside view",
      "Free doorstep measurement and a written quote",
    ],
    faqs: [
      { q: "Are invisible grills strong enough for a balcony?", a: "Yes. The stainless steel cables are tensioned on aluminium tracks and are designed to act as a safety barrier. Our team recommends cable grade and spacing for your opening during the free measurement." },
      { q: "Will a balcony invisible grill block my view?", a: "No. The cables are thin and, from a short distance, are hard to see, so your view and ventilation stay largely open compared with iron grills." },
      { q: "How long does balcony installation take?", a: "Most residential balconies are measured and installed within a few hours, depending on the number and size of openings." },
    ],
  },
  "Window Invisible Grills": {
    intro: [
      "Window invisible grills add a discreet layer of safety to bedroom and living-room windows without the bulky look of metal bars. The cables run vertically across the window frame, keeping the opening secure while letting in light and air.",
      "They are a popular choice for apartments and independent homes across Hyderabad where families want window safety for children but prefer a minimal, modern look. We measure each window on site and recommend the right cable spacing and fixing method.",
    ],
    highlights: [
      "Slim cables that keep windows bright and airy",
      "Child-safe spacing options",
      "Neat fixing to the window frame",
      "Suitable for apartments and independent homes",
      "Free doorstep measurement",
    ],
    faqs: [
      { q: "Can invisible grills be fitted to sliding windows?", a: "In most cases yes. Our team assesses the window type during the measurement and advises the suitable fixing method." },
      { q: "Do window invisible grills need maintenance?", a: "They are low maintenance. An occasional wipe and a check of cable tension is usually enough; ask our team for care guidance." },
    ],
  },
  "Balcony Safety Nets": {
    intro: [
      "Balcony safety nets are a lightweight, cost-effective way to enclose a balcony for children, pets and high-rise living. A knotted, UV-stabilised net is fixed around the opening with hooks and cable ties, creating a barrier that keeps the space usable while preventing falls.",
      "Across Hyderabad, safety nets are the usual choice for rented homes, utility balconies and pigeon-prone openings, while invisible grills are preferred where a premium, barely-there look matters. We can show you both options during the free measurement.",
    ],
    highlights: [
      "UV-stabilised, weather-resistant netting",
      "Mesh sizes to suit children, pets and pigeons",
      "Quick, neat installation with minimal drilling",
      "Ideal for high-rise and utility balconies",
      "Free doorstep measurement",
    ],
    faqs: [
      { q: "What is the difference between a safety net and an invisible grill?", a: "A safety net uses knotted cord and is lighter and more economical; an invisible grill uses tensioned stainless steel cables for a premium, barely-visible finish. Both add a safety barrier." },
      { q: "How long do balcony safety nets last?", a: "Life depends on sun exposure and net quality. We use UV-stabilised nets and can advise on expected life and care during the visit." },
    ],
  },
  "Pigeon Safety Nets": {
    intro: [
      "Pigeons are one of the most common nuisance problems for Hyderabad balconies, AC ledges and utility ducts. A pigeon safety net closes off the opening with a fine, durable mesh so birds cannot enter or roost, while light and airflow pass through.",
      "We fit pigeon safety nets in apartments and independent homes across the city, choosing a mesh size that blocks pigeons without making the space feel closed. For ledges and AC units where a net is not practical, we also offer bird control spikes.",
    ],
    highlights: [
      "Fine mesh that blocks pigeons and most birds",
      "Keeps balconies cleaner and more hygienic",
      "Maintains light and ventilation",
      "Neat, discreet fixing",
      "Free doorstep measurement",
    ],
    faqs: [
      { q: "Will a pigeon net make my balcony dark?", a: "No. The mesh is fine and open, so daylight and airflow pass through while birds are kept out." },
      { q: "Can you stop pigeons on AC ledges too?", a: "Yes. For ledges and AC units we can fit bird control spikes or netting depending on the site." },
    ],
  },
  "Bird Protection Nets": {
    intro: [
      "Bird protection nets keep balconies, terraces, ducts and open areas free of unwanted birds. The netting is fixed around the perimeter of the space to create a complete barrier, helping keep the area clean and reducing noise and droppings.",
      "We install bird protection nets across Hyderabad for homes, apartments and commercial buildings, selecting mesh size and fixing points for the specific opening and the birds involved.",
    ],
    highlights: [
      "Complete perimeter coverage for open areas",
      "Mesh sized for the birds you need to block",
      "Durable, weather-resistant netting",
      "Suitable for homes and commercial buildings",
      "Free site assessment",
    ],
    faqs: [
      { q: "Are bird protection nets humane?", a: "Yes. The nets simply block entry; they do not trap or harm birds." },
      { q: "Can bird nets cover large terraces?", a: "Yes. We plan supports and fixing points for larger spans during the site assessment." },
    ],
  },
  "Children Safety Nets": {
    intro: [
      "Children safety nets give parents added peace of mind around balconies, windows and staircases. A securely fixed net creates a barrier that helps prevent falls while keeping the home bright and open.",
      "For families in Hyderabad apartments, we often combine balcony safety nets with window nets and, where a premium finish is wanted, invisible grills with close cable spacing. See our Child Safety Solutions page for a whole-home approach.",
    ],
    highlights: [
      "Secure barriers for balconies, windows and stairs",
      "Close mesh / cable spacing for young children",
      "Bright, open feel compared with iron grills",
      "Professional, neat installation",
      "Free doorstep measurement",
    ],
    faqs: [
      { q: "Which is better for child safety — nets or invisible grills?", a: "Both work. Nets are economical and quick; invisible grills with close spacing give a premium, rigid barrier. We advise based on your home during the measurement." },
      { q: "Can you child-proof the whole home?", a: "Yes. We can cover balconies, windows and staircases together — see our Child Safety Solutions page." },
    ],
  },
  "Ceiling Cloth Hangers": {
    intro: [
      "A ceiling cloth hanger moves clothes drying overhead, freeing up your balcony or utility floor. Rods are mounted to the ceiling on a pulley or fixed system, so you can load clothes at a comfortable height and raise them out of the way.",
      "They are a practical addition once a balcony is enclosed with a safety net or invisible grill, and are popular in Hyderabad apartments where utility space is limited. We offer manual and stainless steel models.",
    ],
    highlights: [
      "Frees up balcony and utility floor space",
      "Manual and stainless steel options",
      "Smooth, sturdy operation",
      "Neat ceiling-mounted finish",
      "Free measurement and quote",
    ],
    faqs: [
      { q: "Can a cloth hanger be fitted on any ceiling?", a: "It depends on the ceiling material and available space. Our team checks suitability during the measurement." },
      { q: "Manual or stainless steel — which should I choose?", a: "Stainless steel resists rust and lasts longer in damp utility areas; manual systems are simple and economical. We can show both." },
    ],
  },
};

/** FAQs shown on a service page (specific where written, generic otherwise). */
export const serviceFaqs = (service: Service): { q: string; a: string }[] =>
  SERVICE_DETAILS[service.short]?.faqs ?? [
    { q: "Is doorstep measurement free?", a: "Yes. Contact our team to arrange a free doorstep measurement and discuss your location and requirements." },
    { q: `How much does ${service.short.toLowerCase()} cost?`, a: "Pricing depends on the dimensions, materials and installation requirements. Our team can provide a written quote after assessing your space." },
    { q: "How long will installation take?", a: "Timing depends on the site and scope of work. Our team can advise after assessing your requirements." },
    { q: "Which materials and warranty apply?", a: "Please ask our team to confirm the specifications and warranty terms for your selected product and installation." },
  ];
