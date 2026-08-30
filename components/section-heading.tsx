import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          {description}
        </p>
      )}
    </Reveal>
  );
}

/** Compact page header used on interior pages. */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="geo-bg border-b border-neutral-200">
      <div className="container-page py-16 sm:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
          <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-neutral-600 sm:text-xl">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
