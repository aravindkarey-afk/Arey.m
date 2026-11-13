export type Crumb = { label: string; href: string };
export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  return <nav aria-label="Breadcrumb" className={light ? 'text-slate-300' : 'text-muted'}>
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
      {items.map((item, index) => <li key={item.href} className="flex items-center gap-2">
        {index > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
        {index === items.length - 1
          ? <span aria-current="page" className={light ? 'text-white' : 'text-navy'}>{item.label}</span>
          : <a href={item.href} className="min-h-6 py-1 font-medium underline-offset-4 hover:text-brand hover:underline">{item.label}</a>}
      </li>)}
    </ol>
  </nav>;
}
