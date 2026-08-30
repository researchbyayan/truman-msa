import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarRange } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/section-heading";
import { EventCard } from "@/components/event-card";
import { Gallery } from "@/components/gallery";
import { Reveal } from "@/components/reveal";
import { UPCOMING_EVENTS } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past MSA events at Truman State University, plus the Fall 2026 semester planner.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="What's Happening"
        title="Events"
        description="From Jummah to community dinners, guest speakers, and service, here's how to be part of it."
      />

      {/* Upcoming */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Upcoming" title="Coming Up" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_EVENTS.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.06}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Semester Planner CTA */}
      <section className="section geo-bg">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 sm:flex-row sm:items-center sm:p-12">
              <div className="max-w-xl">
                <span className="eyebrow mb-3">Semester Planner</span>
                <h2 className="font-display text-2xl font-semibold text-neutral-900 sm:text-3xl">
                  See the full Fall 2026 schedule
                </h2>
                <p className="mt-3 text-neutral-600">
                  Every event, date, and detail lives in our semester planner,
                  embedded right inside the site.
                </p>
              </div>
              <Link href="/planner" className="btn-primary shrink-0">
                <CalendarRange className="h-4 w-4" />
                Open the Planner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Past events / community */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Past Events"
            title="Our Community in Action"
            description="A look at the kinds of events MSA holds throughout the year."
          />
          <div className="mt-10">
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
}
