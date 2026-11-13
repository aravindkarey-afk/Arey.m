import { Breadcrumbs, type Crumb } from './Breadcrumbs';
import { ResponsiveImage } from './ResponsiveImage';
import { ContactActions } from './Actions';
import { Check } from './Icons';

export function PageHero({ eyebrow, title, description, image, alt, crumbs, service, area }: {
  eyebrow: string; title: string; description: string; image: string; alt: string;
  crumbs: Crumb[]; service?: string; area?: string;
}) {
  return <section className="border-b border-borderline bg-lightbg">
    <div className="page-container py-7 sm:py-10">
      <Breadcrumbs items={crumbs} />
      <div className="grid items-center gap-9 pt-8 pb-5 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pt-10 lg:pb-8">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.12] tracking-[-0.04em] text-navy sm:text-5xl lg:text-[3.35rem]">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">{description}</p>
          <ContactActions service={service} area={area} className="mt-8" />
          <p className="mt-5 flex items-center gap-2 text-xs font-medium text-brand-dark"><Check className="h-4 w-4" /> Free site visit &amp; measurement · Hyderabad, Telangana</p>
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem] bg-navy shadow-[0_20px_55px_-25px_rgba(10,37,64,0.45)]">
          <ResponsiveImage src={image} alt={alt} priority className="aspect-[4/3] w-full object-cover" />
          <span className="absolute right-4 bottom-4 rounded-full bg-navy/90 px-4 py-2 text-xs font-medium text-white">Service illustration · specification assessed on site</span>
        </div>
      </div>
    </div>
  </section>;
}
