import { cn } from "../utils/cn";

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
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_6px_16px_rgba(10,37,64,0.25)]",
          light ? "bg-white/10" : "bg-navy"
        )}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#4caf50" strokeWidth="1.6" />
          <line x1="7.5" y1="3" x2="7.5" y2="21" stroke="#ffffff" strokeWidth="1.4" />
          <line x1="12" y1="3" x2="12" y2="21" stroke="#ffffff" strokeWidth="1.4" />
          <line x1="16.5" y1="3" x2="16.5" y2="21" stroke="#ffffff" strokeWidth="1.4" />
        </svg>
      </span>
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
