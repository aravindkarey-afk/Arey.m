export function SectionHead({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="reveal mb-12 text-center">
      <h2 className="section-title text-[28px] font-bold text-navy uppercase sm:text-[32px]">
        {title}
      </h2>
      {subtitle && <p className="mt-6 text-[15.5px] text-muted sm:text-base">{subtitle}</p>}
    </div>
  );
}
