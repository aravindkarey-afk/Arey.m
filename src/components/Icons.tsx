import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowUp = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20V4M6 10l6-6 6 6" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 12H4M10 6l-6 6 6 6" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6.2 3.5h2.4l1.5 4-2 1.3a12.4 12.4 0 0 0 5.1 5.1l1.3-2 4 1.5v2.4a2.4 2.4 0 0 1-2.6 2.4A16.5 16.5 0 0 1 3.8 6.1 2.4 2.4 0 0 1 6.2 3.5Z" />
  </svg>
);

export const MapPin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
);

export const ShieldCheck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 4.5 6v5.4c0 4.5 3.1 8.1 7.5 9.6 4.4-1.5 7.5-5.1 7.5-9.6V6L12 3Z" />
    <path d="m8.6 11.8 2.3 2.3 4.5-4.6" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6-4.8-4.6 6.6-.9L12 2.5Z" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const ChevronDown = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronLeft = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m15 5-7 7 7 7" />
  </svg>
);

export const ChevronRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);

export const Ruler = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m3 16 13-13 5 5L8 21l-5-5Z" />
    <path d="m8.5 10.5 2 2M11.5 7.5l2 2M14.5 4.5l2 2" />
  </svg>
);

export const Home = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3.5 10.5 12 3l8.5 7.5" />
    <path d="M5.5 9.5V21h13V9.5M9.5 21v-6h5v6" />
  </svg>
);

export const Balcony = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 21h18M4 21v-7h16v7M6 14v-3h12v3M9 21v-4M15 21v-4M4 7h16" />
    <path d="M7 7V3M12 7V3M17 7V3" />
  </svg>
);

export const Window = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
    <path d="M12 3.5v17M3.5 12h17" />
  </svg>
);

export const Stairs = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 21h5v-5h5v-5h4V6h4" />
    <path d="M3 3v18" />
  </svg>
);

export const Wrench = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 4.5a5.5 5.5 0 0 1-7.2 6.9L6 18.2a2.1 2.1 0 0 1-3-3l6.8-6.8A5.5 5.5 0 0 1 16.7 1.2l-3.2 3.2 2.1 3.1 3.1 2.1L20 4.5Z" />
  </svg>
);

export const Users = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.4 2.7-5.5 6-5.5s6 2.1 6 5.5" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 6M18 14.8c2.1.6 3.5 2.3 3.5 5.2" />
  </svg>
);

export const Paw = (p: IconProps) => (
  <svg {...base} {...p}>
    <ellipse cx="7" cy="8" rx="2" ry="2.6" />
    <ellipse cx="17" cy="8" rx="2" ry="2.6" />
    <ellipse cx="4.2" cy="13.4" rx="1.7" ry="2.2" />
    <ellipse cx="19.8" cy="13.4" rx="1.7" ry="2.2" />
    <path d="M8.5 17.5c1.2-2.4 3-2.3 3.5-2.3s2.3-.1 3.5 2.3c1.1 2.2-.4 3.8-2.3 3.6-.8-.1-1-.2-1.2-.2s-.4.1-1.2.2c-1.9.2-3.4-1.4-2.3-3.6Z" />
  </svg>
);

export const Wind = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 8h10.5a3 3 0 1 0-2.8-4M3 12h15a3 3 0 1 1-2.8 4M3 16h7a2.5 2.5 0 1 1-2.4 3.2" />
  </svg>
);

export const Sun = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
  </svg>
);

export const Water = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
    <path d="M9 14.5a3 3 0 0 0 3 3" />
  </svg>
);

export const Award = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="m8.5 13.5-1.5 7 5-2.7 5 2.7-1.5-7" />
  </svg>
);

export const Layers = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m12 2.5 9 4.7-9 4.7-9-4.7 9-4.7Z" />
    <path d="m3 12 9 4.7 9-4.7M3 16.8 12 21.5l9-4.7" />
  </svg>
);

export const Heart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20.5s-8.5-5-8.5-10.6A4.7 4.7 0 0 1 12 6.8a4.7 4.7 0 0 1 8.5 3.1c0 5.6-8.5 10.6-8.5 10.6Z" />
  </svg>
);

export const Quote = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M9.6 5.4c-3.7 1.4-6 4.7-6 8.7 0 2.7 1.6 4.5 3.9 4.5 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.2-3-3.2-.4 0-.8 0-1 .2.3-1.6 1.5-3 3.3-3.8l-.7-3Zm9.4 0c-3.7 1.4-6 4.7-6 8.7 0 2.7 1.6 4.5 3.9 4.5 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.2-3-3.2-.4 0-.8 0-1 .2.3-1.6 1.5-3 3.3-3.8l-.7-3Z" />
  </svg>
);

export const Calendar = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const Clipboard = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="5" y="4.5" width="14" height="17" rx="2.5" />
    <path d="M9 4.5V3h6v1.5M8.5 10h7M8.5 14h7M8.5 18h4" />
  </svg>
);

export const WhatsApp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2a9.8 9.8 0 0 0-8.4 14.8L2 22l5.4-1.5A9.9 9.9 0 1 0 12 2Zm0 17.9a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3a8 8 0 1 1 6.9 3.8Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5v-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.5-.3.4-.9 1-.9 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.8 4.1 2.3.9 2.8.7 3.3.7.5 0 1.4-.6 1.6-1.1.2-.6.2-1 .2-1.1-.1-.2-.2-.2-.5-.4Z" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M14 21v-8h2.7l.4-3.1H14V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H8v3.1h2.8V21H14Z" />
  </svg>
);

export const Google = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4Z" />
    <path fill="#34A853" d="M12 22c2.7 0 4.9-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.9 5.9 0 0 1-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" />
    <path fill="#FBBC05" d="M6.4 14a6 6 0 0 1 0-3.8V7.6H3.1a10 10 0 0 0 0 8.9L6.4 14Z" />
    <path fill="#EA4335" d="M12 6.1c1.5 0 2.8.5 3.9 1.5l2.9-2.9A10 10 0 0 0 3.1 7.6L6.4 10A5.9 5.9 0 0 1 12 6.1Z" />
  </svg>
);

export const Eye = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Bolt = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13.5 2 4 14h6l-1.5 8L19 9.5h-6L13.5 2Z" />
  </svg>
);

export const Tag = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
    <circle cx="7.5" cy="7.5" r="1.3" />
  </svg>
);

export const Plus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Search = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m16.5 16.5 4 4M8.5 11h5M11 8.5v5" />
  </svg>
);

export const Send = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m21.5 2.5-7 19-4-8-8-4 19-7Z" />
    <path d="m21.5 2.5-11 11" />
  </svg>
);
