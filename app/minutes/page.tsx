import type { Metadata } from "next";
import { FileText, Download, CalendarDays, ClipboardList } from "lucide-react";
import { PageHero } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { MEETING_MINUTES } from "@/data/minutes";

export const metadata: Metadata = {
  title: "Meeting Minutes",
  description:
    "Executive Board meeting minutes for the Muslim Student Association at Truman State University.",
};

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function MinutesPage() {
  const minutes = [...MEETING_MINUTES].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Executive Board Meeting Minutes"
        description="A record of MSA Executive Board meetings, posted here for transparency and reference."
      />

      <section className="section">
        <div className="container-page">
          {minutes.length > 0 ? (
            <div className="mx-auto max-w-3xl space-y-4">
              {minutes.map((m, i) => (
                <Reveal key={m.url} delay={i * 0.05}>
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group flex items-center gap-4 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                      <FileText className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-semibold text-neutral-900">
                        {m.title}
                      </h3>
                      <p className="mt-0.5 flex items-center gap-1.5 text-sm text-neutral-500">
                        <CalendarDays className="h-4 w-4" />
                        {formatDate(m.date)}
                      </p>
                      {m.summary && (
                        <p className="mt-1 text-sm text-neutral-600">
                          {m.summary}
                        </p>
                      )}
                    </div>
                    <Download className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-hover:translate-y-0.5" />
                  </a>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <ClipboardList className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold text-neutral-900">
                  Minutes coming soon
                </h2>
                <p className="mx-auto mt-2 max-w-md text-neutral-600">
                  Executive Board meeting minutes will be posted here as they
                  become available. Check back after upcoming meetings.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
