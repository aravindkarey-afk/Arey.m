import { IMG } from "../assets/refimg";

export type GuideSection = { heading: string; paragraphs?: string[]; bullets?: string[] };
export type Guide = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  image: string;
  imageAlt: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export const GUIDES: Guide[] = [
  {
    path: "/ss304-invisible-grills/",
    metaTitle: "SS304 Invisible Grills in Hyderabad | Aravindh Invisible Grills",
    metaDescription:
      "SS304 invisible grills in Hyderabad — a strong, cost-effective stainless steel option for balconies and windows. Compare grades and book a free measurement.",
    eyebrow: "Invisible Grill Materials",
    h1: "SS304 Invisible Grills in Hyderabad",
    intro: [
      "SS304 invisible grills use grade-304 stainless steel cables tensioned across your balcony or window. Grade 304 is the most widely used stainless steel in the world: it is strong, formable and resists everyday corrosion well, which makes it a sensible, cost-effective choice for many Hyderabad homes.",
      "At Aravindh Invisible Grills we help you choose the right cable grade for your actual conditions rather than upselling. For most inland, covered balconies and windows in the city, SS304 performs well; for highly exposed or constantly damp openings we usually recommend SS316.",
    ],
    image: "/images/cable-detail.jpg",
    imageAlt: "Close-up of stainless steel invisible grill cables used for SS304 invisible grills in Hyderabad",
    sections: [
      {
        heading: "What is SS304 stainless steel?",
        paragraphs: [
          "SS304 is an austenitic stainless steel containing chromium and nickel. The chromium forms a thin, self-repairing passive layer on the surface that protects the cable from rust in normal atmospheric conditions. It is the standard grade used across architecture, kitchens and railings.",
          "For invisible grills, SS304 cables are paired with aluminium tracks and a protective coating. The result is a slim, discreet safety barrier that keeps your view open while adding protection for children and pets.",
        ],
      },
      {
        heading: "Where SS304 invisible grills work best",
        bullets: [
          "Inland Hyderabad localities away from the coast",
          "Covered balconies and windows shielded from direct rain",
          "Bedroom and living-room windows in apartments and independent homes",
          "Homes wanting a reliable, budget-friendly stainless steel option",
        ],
      },
      {
        heading: "SS304 vs SS316 — which should you choose?",
        paragraphs: [
          "The main difference is corrosion resistance. SS316 adds molybdenum, which improves resistance to chlorides and prolonged moisture, so it is preferred for exposed high-rise balconies, homes near heavy pollution or damp utility areas, and buyers who want the most durable option. SS304 is more economical and suits most sheltered, inland openings.",
          "Not sure which fits your home? Our team assesses the opening, exposure and your budget during the free measurement and recommends a grade. Read more on our SS316 Invisible Grills page.",
        ],
      },
      {
        heading: "Our SS304 installation process",
        bullets: [
          "Free doorstep measurement of every opening",
          "Written quote with the proposed grade, spacing and finish",
          "Neat fixing of aluminium tracks and tensioned SS304 cables",
          "Final tension check and a clean handover",
        ],
      },
    ],
    faqs: [
      { q: "Are SS304 invisible grills cheaper than SS316?", a: "Generally yes. SS304 is the more economical grade while SS316 costs more for its higher corrosion resistance. We provide a written quote for both so you can compare." },
      { q: "Will SS304 invisible grills rust in Hyderabad?", a: "SS304 resists everyday corrosion well and suits most inland, covered openings. For highly exposed or damp areas we recommend SS316. Our team advises the right grade for your site." },
      { q: "Can I use SS304 for a balcony with children?", a: "Yes. We recommend close cable spacing for homes with young children, in either grade. Ask our team during the measurement." },
    ],
    related: [
      { label: "SS316 Invisible Grills", href: "/ss316-invisible-grills/" },
      { label: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills/" },
      { label: "Window Invisible Grills", href: "/services/window-invisible-grills/" },
      { label: "Child Safety Solutions", href: "/child-safety-solutions/" },
    ],
  },
  {
    path: "/ss316-invisible-grills/",
    metaTitle: "SS316 Invisible Grills in Hyderabad | Aravindh Invisible Grills",
    metaDescription:
      "SS316 marine-grade invisible grills in Hyderabad for superior corrosion resistance on exposed balconies and windows. Premium finish, free doorstep measurement.",
    eyebrow: "Invisible Grill Materials",
    h1: "SS316 Invisible Grills in Hyderabad",
    intro: [
      "SS316 invisible grills use marine-grade stainless steel cables, the premium choice for exposed balconies and windows. Grade 316 contains molybdenum, which gives it markedly better resistance to chlorides, pollution and prolonged moisture than standard grades.",
      "For high-rise apartments and open, wind-facing balconies across Hyderabad — in areas such as Gachibowli, Nallagandla, Kondapur and Narsingi — SS316 is the grade we most often recommend for long-term durability with a barely-there finish.",
    ],
    image: "/images/cable-detail.jpg",
    imageAlt: "Marine-grade SS316 stainless steel invisible grill cable detail for balconies in Hyderabad",
    sections: [
      {
        heading: "What makes SS316 different?",
        paragraphs: [
          "SS316 is an austenitic stainless steel with added molybdenum. That addition improves resistance to pitting and crevice corrosion, which is why 316 is called marine-grade and is used in coastal and chemical environments. For invisible grills, it means the cables stay sound for longer on exposed, weather-facing openings.",
          "Combined with aluminium tracks and a protective nylon coating, SS316 cables deliver a strong, discreet barrier that preserves your view, daylight and airflow.",
        ],
      },
      {
        heading: "Where SS316 invisible grills are the better choice",
        bullets: [
          "Exposed, high-rise balconies facing wind and rain",
          "Homes near heavy traffic pollution or industrial areas",
          "Damp utility balconies and service areas",
          "Buyers who want the most durable, premium option",
        ],
      },
      {
        heading: "SS316 vs SS304 for Hyderabad homes",
        paragraphs: [
          "Both grades make excellent invisible grills. SS304 is economical and suits sheltered, inland openings; SS316 costs more but resists corrosion better on exposed or damp openings. Because Hyderabad is inland, many covered balconies do well with SS304, while open high-rise balconies benefit from SS316.",
          "We explain the trade-off honestly during your free measurement and quote both grades where relevant. See our SS304 Invisible Grills page for the comparison.",
        ],
      },
      {
        heading: "Why choose Aravindh for SS316 installation",
        bullets: [
          "Grade confirmed in writing before work begins",
          "Cable spacing tailored for children and pets",
          "Trained technicians and a neat, dust-controlled fit",
          "Free doorstep measurement across Hyderabad",
        ],
      },
    ],
    faqs: [
      { q: "Is SS316 worth the extra cost?", a: "For exposed or damp openings, yes — its higher corrosion resistance helps the cables last longer. For sheltered inland openings, SS304 may be sufficient. We advise based on your site." },
      { q: "Do SS316 invisible grills come with a warranty?", a: "Warranty depends on the product and installation. Please ask our team to confirm the applicable warranty in writing before ordering." },
      { q: "How soon can SS316 grills be installed?", a: "Most residential openings are measured and installed within a few hours, depending on the number and size of openings." },
    ],
    related: [
      { label: "SS304 Invisible Grills", href: "/ss304-invisible-grills/" },
      { label: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills/" },
      { label: "Invisible Grills for Kids", href: "/services/invisible-grills-for-kids/" },
      { label: "Invisible Grills in Hyderabad", href: "/invisible-grills-hyderabad/" },
    ],
  },
  {
    path: "/child-safety-solutions/",
    metaTitle: "Child Safety Solutions in Hyderabad | Aravindh Invisible Grills",
    metaDescription:
      "Child safety solutions for Hyderabad homes — balcony, window and staircase protection with invisible grills and safety nets. Free whole-home measurement.",
    eyebrow: "Family Safety",
    h1: "Child Safety Solutions in Hyderabad",
    intro: [
      "Keeping curious children safe at home often means protecting more than one opening. Our child safety solutions combine balcony invisible grills, window protection and staircase safety nets into one planned, neatly installed package for your Hyderabad home.",
      "We start with a free walkthrough of your home, identify the openings that matter for your child's age, and recommend a mix of invisible grills and safety nets that adds protection without making your home feel closed in.",
    ],
    image: IMG.s29,
    imageAlt: "Child safety invisible grill installed on a Hyderabad apartment balcony with close cable spacing",
    sections: [
      {
        heading: "A whole-home approach to child safety",
        paragraphs: [
          "Rather than treating each window or balcony in isolation, we look at how your family uses the home. Toddlers climb, so low openings and furniture near railings matter; older children need secure windows and stair gates. Planning the whole home at once is tidier, more consistent and often more economical.",
        ],
      },
      {
        heading: "Balcony and window protection",
        bullets: [
          "Invisible grills with close cable spacing for a rigid, discreet barrier",
          "Balcony safety nets as a lightweight, economical option",
          "Window safety nets and grills sized for each opening",
          "Finishes that keep rooms bright and open",
        ],
      },
      {
        heading: "Staircase and open-area protection",
        bullets: [
          "Staircase safety nets to help prevent falls between floors",
          "Open-terrace and duct-area netting",
          "Secure fixing points checked by our technicians",
        ],
      },
      {
        heading: "Nets or invisible grills for child safety?",
        paragraphs: [
          "Both add a protective barrier. Safety nets are quick and economical and suit rented homes and utility areas. Invisible grills with close spacing give a premium, rigid barrier that barely affects your view. Many families use grills on the main balcony and nets on utility areas and staircases. We help you choose during the free measurement.",
        ],
      },
    ],
    faqs: [
      { q: "What cable spacing is safe for young children?", a: "We recommend closer cable spacing for homes with toddlers and small children. Our team confirms the right spacing for your openings during the measurement." },
      { q: "Can you child-proof balconies, windows and stairs together?", a: "Yes. We plan and install protection across all the openings in one visit where possible, combining invisible grills and safety nets." },
      { q: "Do child safety solutions block light and air?", a: "No. Invisible grills use thin cables and nets use open mesh, so daylight and airflow are largely preserved." },
    ],
    related: [
      { label: "Invisible Grills for Kids", href: "/services/invisible-grills-for-kids/" },
      { label: "Children Safety Nets", href: "/services/children-safety-nets/" },
      { label: "Balcony Safety Nets", href: "/services/balcony-safety-nets/" },
      { label: "Staircase Safety Nets", href: "/services/staircase-safety-nets/" },
      { label: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills/" },
    ],
  },
];

export const GUIDE_BY_PATH: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((guide) => [guide.path, guide])
);
