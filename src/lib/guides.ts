import { IMG } from '../assets/refimg';
import type { FAQ } from './service-content';

export type Guide = {
  path: string; metaTitle: string; metaDescription: string; eyebrow: string; h1: string;
  intro: string[]; image: string; imageAlt: string;
  sections: { heading: string; paragraphs: string[] }[]; faqs: FAQ[];
  related: { label: string; href: string }[];
};
export const GUIDES: Guide[] = [
  {
    path: '/child-safety-solutions/',
    metaTitle: 'Child Safety Solutions for Hyderabad Homes | Aravindh',
    metaDescription: 'Plan balcony, window and staircase protection for your Hyderabad home. Compare child safety nets and invisible grills with a measured, whole-home survey.',
    eyebrow: 'Family safety planning', h1: 'Child Safety Solutions in Hyderabad',
    intro: ['A safer home is a connected plan, not a single product. Walk through the balconies, windows and stairs your children use, then compare additional protective barriers with the supervision and existing railings already in place.'],
    image: IMG.s29, imageAlt: 'Child-focused invisible grill reference illustration at a residential balcony',
    sections: [
      { heading: 'Begin with a room-by-room walkthrough', paragraphs: ['List every opening a child can reach, including windows beside furniture and internal stair gaps. Note how the opening operates, whether there is a suitable railing and where a child could climb. This gives the survey a useful starting point beyond a balcony photograph.', 'Tell us the children’s ages and how the household uses each space. We discuss cable spacing, mesh specification and attachment options in that context. No net or grill makes an unattended opening risk-free; adult supervision remains essential.'] },
      { heading: 'Compare grills and nets by purpose', paragraphs: ['Invisible grills use tensioned cables in a track layout and can suit openings where a clear outlook matters. Child safety nets enclose a defined area with mesh and a supported perimeter. The right choice depends on the structure, intended use and available fixing points—not appearance alone.', 'Bird nets are a different application. Do not assume a mesh sold for pigeon exclusion is suitable as a child barrier. Ask for the proposed specification and limitations to be included in the written quotation.'] },
      { heading: 'Keep the protection usable over time', paragraphs: ['Check that windows can still operate as intended, cleaning access is understood and furniture is not placed against the barrier. After installation, inspect the perimeter and report damage or loosened fixings rather than continuing to rely on a compromised system.', 'A coordinated survey can also include pets and utility drying. Keep those requirements separate in the scope so the chosen barrier is not weakened to accommodate another fitting.'] },
    ],
    faqs: [
      { q: 'Can one visit cover balconies, windows and stairs?', a: 'Yes. Share the complete opening list so we can assess each area and explain the suitable options.' },
      { q: 'Are grills or nets guaranteed to prevent every fall?', a: 'No. They are additional protective measures with installation and use limitations. Supervision and suitable railings remain necessary.' },
      { q: 'Can I reuse an existing bird net for child protection?', a: 'Do not assume so. Its specification and fixings must be assessed for the intended protective use.' },
    ],
    related: [{ label: 'Child Safety Nets', href: '/child-safety-nets/' }, { label: 'Invisible Grills for Kids', href: '/invisible-grills-for-kids/' }, { label: 'Staircase Safety Nets', href: '/staircase-safety-nets/' }],
  },
  {
    path: '/invisible-grills-vs-safety-nets/',
    metaTitle: 'Invisible Grills vs Safety Nets: Which Fits? | Aravindh',
    metaDescription: 'Compare invisible grills and safety nets for Hyderabad balconies and windows. Understand appearance, mesh, fixing points and questions for your site survey.',
    eyebrow: 'Compare before you choose', h1: 'Invisible Grills vs Safety Nets',
    intro: ['Both systems can add protection to an opening, but they work differently. Compare the view, the intended use and the fixing perimeter before deciding which system belongs in your Hyderabad home.'],
    image: IMG.s1, imageAlt: 'Safety net reference showing mesh and a supported balcony perimeter',
    sections: [
      { heading: 'Cable barriers and mesh enclosures', paragraphs: ['Invisible grills consist of tensioned stainless steel cables held in tracks. Their slim profile can preserve more of the distant view than a dense mesh, although the cables and tracks remain visible at close range. The opening must accommodate a suitable track and anchor layout.', 'Safety nets use knotted or knotless mesh with a border rope and fixings around the perimeter. They can cover irregular or larger spaces, but the specification must match the purpose. Child protection, bird exclusion, debris containment and sports use are not interchangeable ratings.'] },
      { heading: 'Questions that matter at the site', paragraphs: ['Ask what the system is intended to do, what it attaches to and how it will be inspected. Tell us about children, pets, birds, plants and equipment. A utility balcony may need a different answer from a view-facing living-room balcony.', 'For pigeon entry, a suitable bird net may be more direct than a cable barrier. For a narrow external ledge, spikes may address perching rather than enclosing the opening. Our survey helps separate these requirements instead of combining them into a vague safety promise.'] },
      { heading: 'Compare complete quotations', paragraphs: ['A useful quote identifies the material, dimensions, layout, fixing approach and applicable warranty terms. Price alone does not establish whether two systems are equivalent. Confirm what preparation, access and aftercare are included.', 'Neither option replaces supervision or a compliant existing railing. Keep climbable objects away from protected openings and arrange inspection if the system is damaged or altered.'] },
    ],
    faqs: [
      { q: 'Are invisible grills completely invisible?', a: 'No. The cables and tracks are visible, especially close up, but can be less visually prominent than traditional bars.' },
      { q: 'Which is better for keeping pigeons out?', a: 'A correctly specified bird net is generally designed for that enclosure purpose. We assess all entry gaps before recommending it.' },
      { q: 'Can you quote both options?', a: 'Where both are suitable, we can explain the differences and quote the measured alternatives.' },
    ],
    related: [{ label: 'Invisible Grills', href: '/invisible-grills/' }, { label: 'Balcony Safety Nets', href: '/balcony-safety-nets/' }, { label: 'Pigeon Safety Nets', href: '/pigeon-safety-nets/' }],
  },
  {
    path: '/ss304-vs-ss316-invisible-grills/',
    metaTitle: 'SS304 vs SS316 Invisible Grills: Grade Guide | Aravindh',
    metaDescription: 'Understand SS304 and SS316 invisible grill grades before ordering in Hyderabad. Compare exposure, corrosion resistance and the complete system specification.',
    eyebrow: 'Material selection', h1: 'SS304 vs SS316 Invisible Grills',
    intro: ['The stainless steel grade is one part of an invisible grill system. Understand the difference between 304 and 316, then check the cable, coating, tracks and anchors proposed for your actual opening.'],
    image: '/images/cable-detail.jpg', imageAlt: 'Close-up reference of stainless steel cables used in invisible grill systems',
    sections: [
      { heading: 'What the grade tells you', paragraphs: ['Both 304 and 316 are stainless steel grades used in cable systems. Grade 316 includes molybdenum, which improves resistance to certain corrosive conditions, including chloride exposure. That does not make a finished installation maintenance-free or immune to corrosion.', 'Hyderabad is inland, but balconies can still experience direct rain, persistent dampness or contaminated surfaces. A covered window and an exposed utility ledge should not automatically receive the same recommendation.'] },
      { heading: 'Assess the whole system, not just the cable', paragraphs: ['Ask how the cable is constructed, what coating is used, how the tracks are finished and what metals are involved at the fixings. Water drainage and contact between dissimilar materials can affect the installation over time.', 'We discuss exposure during measurement and confirm the proposed grade in writing. If cleaning, repairs or a different attachment method are needed first, those should be resolved rather than hidden by a higher-grade label.'] },
      { heading: 'Compare cost with the conditions of use', paragraphs: ['SS304 may be a practical option for a suitable sheltered opening; SS316 may be preferable where the exposure assessment supports it. The price difference depends on the complete measured scope, not just the name of the grade.', 'Request the applicable warranty terms and care instructions with the quote. No grade choice guarantees a particular service life in every environment.'] },
    ],
    faqs: [
      { q: 'Does SS316 mean the whole grill can never rust?', a: 'No. Corrosion resistance depends on the grade, environment, complete assembly and care. It is not a rust-proof guarantee.' },
      { q: 'Can I choose the grade from a photograph alone?', a: 'A photograph helps, but exposure, substrate and fixing conditions should also be assessed.' },
      { q: 'Will the selected grade appear in the quote?', a: 'Ask us to confirm the proposed cable grade and other material details in writing before approval.' },
    ],
    related: [{ label: 'SS304 Invisible Grills', href: '/ss304-invisible-grills/' }, { label: 'SS316 Invisible Grills', href: '/ss316-invisible-grills/' }, { label: 'Window Invisible Grills', href: '/window-invisible-grills/' }],
  },
  {
    path: '/safety-solutions-cost-guide/',
    metaTitle: 'Safety Net & Grill Installation Cost Guide | Aravindh',
    metaDescription: 'What affects invisible grill, safety net, bird spike and cloth hanger prices in Hyderabad? Prepare dimensions and access details for an accurate site quote.',
    eyebrow: 'Transparent quotations', h1: 'What Affects Your Installation Quote?',
    intro: ['A useful price starts with the space and the job. Here is how to prepare for an invisible grill, safety net, bird-control or cloth-hanger quotation in Hyderabad without relying on a misleading one-size-fits-all rate.'],
    image: IMG.s32, imageAlt: 'Manual cloth hanger reference showing rods and pulley components',
    sections: [
      { heading: 'Dimensions are only the starting point', paragraphs: ['The size of an opening matters, but so do its shape, fixing perimeter and intended use. Two balconies with the same area can need different mesh specifications, cable layouts or anchor arrangements. Sports netting also depends on the activity and the boundary to be enclosed.', 'Send approximate dimensions and photographs to start the conversation. The final quotation follows a site measurement so material quantities and access requirements are not guessed.'] },
      { heading: 'Materials, preparation and access', paragraphs: ['Cable grade, coatings, mesh specification, rod count and hardware all affect the proposed system. Surface preparation, restricted working hours or difficult access can also change the scope. Tell us about these conditions before comparing prices.', 'For bird spikes, the ledge length and attachment surface matter. For cloth hangers, ceiling construction, span and operating mechanism matter. A low headline rate without those details does not describe the same job.'] },
      { heading: 'What to check before approving', paragraphs: ['Confirm the measured areas, product specification, installation inclusions, expected schedule and applicable warranty terms. Ask how changes discovered on site will be communicated and approved.', 'Our site visit and measurement are free in the listed Hyderabad service areas. We prepare a written quote before installation; no payment is collected through this website.'] },
    ],
    faqs: [
      { q: 'Can you give a final price without measuring?', a: 'We can discuss options, but a final scope and quotation need the opening dimensions, materials and access to be checked.' },
      { q: 'Is there a website booking fee?', a: 'No. The website prepares an enquiry; call or WhatsApp to confirm the visit. No payment is taken here.' },
      { q: 'Does combining services reduce the price?', a: 'Not automatically. We assess the complete scope and explain any shared access or installation efficiencies in the quote.' },
    ],
    related: [{ label: 'Invisible Grills', href: '/invisible-grills/' }, { label: 'Bird Spikes Installation', href: '/bird-spikes-installation/' }, { label: 'Cloth Hangers', href: '/cloth-hangers/' }],
  },
];
export const GUIDE_BY_PATH = new Map(GUIDES.map((guide) => [guide.path, guide]));
