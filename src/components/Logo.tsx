import { useId } from 'react';
import { cn } from '../utils/cn';

export function LogoMark({ className, variant = 'tile' }: { className?: string; variant?: 'tile' | 'bare' }) {
  const id = useId();
  return <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Aravindh Invisible Grills logo">
    {variant === 'tile' && <><defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#103257" /><stop offset="1" stopColor="#0a2540" /></linearGradient></defs><rect width="64" height="64" rx="14" fill={`url(#${id})`} /></>}
    <rect x="13" y="15" width="38" height="3.2" rx="1.6" fill="#34a06a" />
    <g strokeLinecap="round"><line x1="18" y1="18.5" x2="18" y2="46.5" stroke="#ffffff" strokeWidth="3.4" opacity="0.45" /><line x1="25" y1="18.5" x2="25" y2="46.5" stroke="#ffffff" strokeWidth="3.6" opacity="0.72" /><line x1="32" y1="18.5" x2="32" y2="46.5" stroke="#34a06a" strokeWidth="4.6" /><line x1="39" y1="18.5" x2="39" y2="46.5" stroke="#ffffff" strokeWidth="3.6" opacity="0.72" /><line x1="46" y1="18.5" x2="46" y2="46.5" stroke="#ffffff" strokeWidth="3.4" opacity="0.45" /></g>
    <rect x="13" y="46" width="38" height="3.2" rx="1.6" fill="#34a06a" />
  </svg>;
}
export function Logo({ light = false }: { light?: boolean }) {
  return <a href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Aravindh Invisible Grills — Home">
    <LogoMark className="h-10 w-10 shrink-0 rounded-xl sm:h-11 sm:w-11" />
    <span className="flex min-w-0 flex-col"><span className={cn('text-[15px] leading-[1.2] font-bold tracking-[-0.02em] min-[380px]:text-[17px] sm:text-[21px]', light ? 'text-white' : 'text-navy')}>Aravindh <span className="text-brand-dark">Invisible Grills</span></span><span className={cn('mt-1 text-[8px] tracking-[0.13em] uppercase sm:text-[9px]', light ? 'text-slate-300' : 'text-muted')}>Safer Homes, Brighter Views</span></span>
  </a>;
}
