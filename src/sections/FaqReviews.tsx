import { useState } from "react";
import { FAQS, REVIEWS } from "../lib/data";
import { SectionHead } from "../components/SectionHead";
import { ChevronDown, Quote, Star } from "../components/Icons";
import { cn } from "../utils/cn";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-[1200px] px-5 py-20">
      <SectionHead
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our services"
      />

      <div className="reveal mx-auto max-w-[840px] space-y-3.5">
        {FAQS.map((faq, index) => {
          const isOpen = open === index;
          return (
            <div
              key={faq.q}
              className={cn(
                "overflow-hidden rounded-xl border transition-colors",
                isOpen ? "border-brand/50 bg-brand-light/40" : "border-slate-200 bg-white"
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              >
                <span
                  className={cn(
                    "text-[15px] font-semibold sm:text-[15.5px]",
                    isOpen ? "text-navy" : "text-slate-700"
                  )}
                >
                  {faq.q}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                    isOpen ? "rotate-180 bg-brand text-white" : "bg-slate-100 text-navy"
                  )}
                >
                  <ChevronDown className="h-[17px] w-[17px]" />
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={cn("faq-answer", isOpen && "open")}
                role="region"
                aria-hidden={!isOpen}
              >
                <div>
                  <p className="px-5 pb-5 text-[14px] leading-[1.75] text-muted sm:px-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? REVIEWS : REVIEWS.slice(0, 3);

  return (
    <div className="bg-lightbg">
      <section id="reviews" className="mx-auto max-w-[1200px] px-5 py-20">
        <SectionHead
          title="What Our Customers Say"
          subtitle="Trusted by 5,000+ families across Hyderabad"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((review) => (
            <article
              key={review.name}
              className="reveal flex flex-col rounded-xl bg-white p-7 shadow-[0_6px_24px_rgba(10,37,64,0.08)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(10,37,64,0.14)]"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-[17px] w-[17px]" />
                  ))}
                </div>
                <Quote className="h-[22px] w-[22px] text-brand-light" />
              </div>

              <p className="mb-6 flex-1 text-[14px] leading-[1.75] text-slate-600">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-[14px] font-bold text-white">
                  {review.initials}
                </span>
                <div>
                  <h4 className="text-[14.5px] leading-tight font-semibold text-navy">
                    {review.name}
                  </h4>
                  <span className="text-[12.5px] text-muted">{review.area}</span>
                  <span className="block text-[11.5px] font-medium text-brand-dark">
                    {review.service}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 text-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className={cn(
              "inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-navy px-7 py-3 text-[14.5px] font-semibold transition-all",
              showAll ? "bg-navy text-white" : "bg-white text-navy hover:bg-navy hover:text-white"
            )}
          >
            {showAll ? <ChevronDown className="h-4 w-4 rotate-180" /> : <ChevronDown className="h-4 w-4" />}
            {showAll ? "Show Fewer Reviews" : "Read 3 More Reviews"}
          </button>
        </div>
      </section>
    </div>
  );
}
