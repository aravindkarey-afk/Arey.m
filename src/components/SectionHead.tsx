export function SectionHead({ title, subtitle, eyebrow, align = 'center' }: { title: string; subtitle?: string; eyebrow?: string; align?: 'center' | 'left' }) {
  return <div className={align === 'center' ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10 max-w-3xl text-left'}>
    {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
    <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-navy sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 text-[15px] leading-7 text-muted sm:text-base">{subtitle}</p>}
  </div>;
}
