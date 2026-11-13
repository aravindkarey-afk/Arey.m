import { cn } from "../utils/cn";

/**
 * Brand mark — the same "invisible grill cables on a track" symbol used by the
 * favicon, app icons and Open Graph image, so the brand is consistent everywhere.
 * `variant="tile"` includes the navy rounded square (light backgrounds);
 * `variant="bare"` is just the cables (for dark backgrounds inside a tinted box).
 */
export function LogoMark({
  className,
  variant = "tile",
}: {
  className?: string;
  variant?: "tile" | "bare";
}) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Aravindh Invisible Grills logo">
      {variant === "tile" && (
        <>
          <defs>
            <linearGradient id="aig-logo-tile" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#103257" />
              <stop offset="1" stopColor="#0a2540" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#aig-logo-tile)" />
        </>
      )}
      <rect x="13" y="15" width="38" height="3.2" rx="1.6" fill="#34a06a" />
      <g strokeLinecap="round">
        <line x1="18" y1="18.5" x2="18" y2="46.5" stroke="#ffffff" strokeWidth="3.4" opacity="0.45" />
        <line x1="25" y1="18.5" x2="25" y2="46.5" stroke="#ffffff" strokeWidth="3.6" opacity="0.72" />
        <line x1="32" y1="18.5" x2="32" y2="46.5" stroke="#34a06a" strokeWidth="4.6" />
        <line x1="39" y1="18.5" x2="39" y2="46.5" stroke="#ffffff" strokeWidth="3.6" opacity="0.72" />
        <line x1="46" y1="18.5" x2="46" y2="46.5" stroke="#ffffff" strokeWidth="3.4" opacity="0.45" />
      </g>
      <rect x="13" y="46" width="38" height="3.2" rx="1.6" fill="#34a06a" />
    </svg>
  );
}

export function Logo({
  light = false,
  onClick,
}: {
  light?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex cursor-pointer items-center gap-3 text-left"
      aria-label="Aravindh Invisible Grills - Home"
    >
      <LogoMark className="h-11 w-11 shrink-0 rounded-xl shadow-[0_6px_16px_rgba(10,37,64,0.25)]" />
      <span className="flex flex-col">
        <span
          className={cn(
            "text-[19px] leading-[1.1] font-bold tracking-[0.3px] sm:text-[22px]",
            light ? "text-white" : "text-navy"
          )}
        >
          Aravindh <span className="text-brand">Invisible Grills</span>
        </span>
        <span
          className={cn(
            "text-[9.5px] tracking-[2px] uppercase",
            light ? "text-slate-400" : "text-muted"
          )}
        >
          Safer Homes, Brighter Views
        </span>
      </span>
    </button>
  );
}
