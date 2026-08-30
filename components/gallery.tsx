import { PAST_EVENT_CATEGORIES } from "@/data/events";
import { Reveal } from "@/components/reveal";
import { ImageIcon } from "lucide-react";

/**
 * Photo grid showcasing the kinds of events MSA holds.
 * Replace the placeholder tiles with real photos by adding an `image`
 * field in data/events.ts (PAST_EVENT_CATEGORIES) pointing to /gallery/...
 */
export function Gallery() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PAST_EVENT_CATEGORIES.map((cat, i) => (
        <Reveal key={cat.title} delay={i * 0.05}>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-brand-100 via-brand-50 to-white">
            {cat.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <ImageIcon className="h-10 w-10 text-brand-300" />
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/85 to-transparent p-5 pt-12">
              <h3 className="font-display text-lg font-semibold text-white">
                {cat.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-200">{cat.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
