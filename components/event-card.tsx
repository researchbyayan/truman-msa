import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import type { MSAEvent } from "@/data/events";

const categoryStyles: Record<string, string> = {
  Religious: "bg-brand-100 text-brand-800",
  Social: "bg-amber-100 text-amber-800",
  Educational: "bg-sky-100 text-sky-800",
  Service: "bg-emerald-100 text-emerald-800",
  Outreach: "bg-rose-100 text-rose-800",
  Community: "bg-violet-100 text-violet-800",
};

function formatDate(iso?: string) {
  if (!iso) return null;
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function EventCard({ event }: { event: MSAEvent }) {
  const dateLabel = formatDate(event.date);

  return (
    <article className="card group flex h-full flex-col hover:-translate-y-1 hover:border-brand-200 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            categoryStyles[event.category] ?? "bg-neutral-100 text-neutral-700"
          }`}
        >
          {event.category}
        </span>
        {event.tbd && (
          <span className="rounded-full border border-dashed border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-500">
            Coming Soon
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-neutral-900">
        {event.title}
      </h3>

      <div className="mt-3 space-y-1.5 text-sm text-neutral-600">
        {dateLabel && (
          <p className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-brand-600" />
            {dateLabel}
          </p>
        )}
        {event.time && (
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand-600" />
            {event.time}
          </p>
        )}
        {event.location && (
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-600" />
            {event.location}
          </p>
        )}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600">
        {event.description}
      </p>

      {event.rsvpUrl ? (
        <a
          href={event.rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
        >
          RSVP / Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      ) : (
        <p className="mt-5 text-sm font-medium text-neutral-400">
          Details on GroupMe &amp; the planner
        </p>
      )}
    </article>
  );
}
