import { useEffect, useMemo, useState } from "react";
import { GALLERY, GALLERY_FILTERS, type GalleryCategory } from "../lib/data";
import { SectionHead } from "../components/SectionHead";
import { ArrowUpRight, ChevronDown, Close, Plus, Search } from "../components/Icons";
import { cn } from "../utils/cn";

const SHOWN = 6;

export function Gallery() {
  const [filter, setFilter] = useState<(typeof GALLERY_FILTERS)[number]>("All");
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<(typeof GALLERY)[number] | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? GALLERY
        : GALLERY.filter((item) => item.category === (filter as GalleryCategory)),
    [filter]
  );

  const visible = expanded || filter !== "All" ? filtered : filtered.slice(0, SHOWN);
  const remaining = GALLERY.length - SHOWN;

  useEffect(() => {
    if (!lightbox) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <section id="gallery" className="mx-auto max-w-[1200px] px-5 py-20">
      <SectionHead
        title="Our Work Gallery"
        subtitle="Explore our gallery of grills, nets and home-utility solutions"
      />

      <div className="reveal mb-9 flex flex-wrap justify-center gap-2.5">
        {GALLERY_FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            aria-pressed={filter === option}
            className={cn(
              "cursor-pointer rounded-full px-4 py-2 text-[13px] font-semibold transition-all",
              filter === option
                ? "bg-navy text-white shadow-[0_6px_16px_rgba(10,37,64,0.25)]"
                : "bg-white text-navy ring-1 ring-slate-200 hover:ring-brand"
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => (
          <button
            key={`${item.alt}-${index}`}
            type="button"
            onClick={() => setLightbox(item)}
            className="gallery-item group relative block cursor-pointer overflow-hidden rounded-xl text-left shadow-[0_6px_22px_rgba(10,37,64,0.1)]"
            aria-label={`Enlarge photo: ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-[240px] w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 shadow transition-opacity group-hover:opacity-100">
              <Search className="h-[17px] w-[17px]" />
            </span>
            <span className="absolute right-0 bottom-0 left-0 p-4">
              <span className="mb-1 block text-[11px] font-bold tracking-[1px] text-brand uppercase">
                {item.category}
              </span>
              <span className="block text-[13.5px] leading-snug font-medium text-white">
                {item.alt}
              </span>
            </span>
          </button>
        ))}
      </div>

      {filter === "All" && (
        <div className="mt-9 text-center">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className={cn(
              "inline-flex cursor-pointer items-center gap-2.5 rounded-full border-2 border-navy px-7 py-3 text-[15px] font-semibold shadow-[0_4px_14px_rgba(10,37,64,0.12)] transition-all",
              expanded
                ? "bg-navy text-white"
                : "bg-white text-navy hover:bg-navy hover:text-white"
            )}
          >
            {expanded ? <ChevronDown className="h-[17px] w-[17px]" /> : <Plus className="h-[17px] w-[17px]" />}
            {expanded ? "Show Less Images" : `View More Images (${remaining} More)`}
          </button>
        </div>
      )}

      {lightbox && (
        <div
          className="fade-in fixed inset-0 z-[1100] flex items-center justify-center bg-navy-dark/92 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
            aria-label="Close photo viewer"
          >
            <Close className="h-[22px] w-[22px]" />
          </button>
          <figure className="lightbox-in max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[78vh] w-full rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <span className="mb-1 block text-[11px] font-bold tracking-[1.5px] text-brand uppercase">
                {lightbox.category}
              </span>
              <span className="text-[15px] text-slate-100">{lightbox.alt}</span>
            </figcaption>
            <div className="mt-4 text-center">
              <a
                href="#contact"
                onClick={() => setLightbox(null)}
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Get a Free Quote <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </figure>
        </div>
      )}
    </section>
  );
}
