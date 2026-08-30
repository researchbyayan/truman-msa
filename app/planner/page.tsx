import type { Metadata } from "next";
import { PageHero } from "@/components/section-heading";
import { PlannerEmbed } from "@/components/planner-embed";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Fall 2026 Planner",
  description:
    "See everything MSA has planned for the Fall 2026 semester at Truman State University.",
};

export default function PlannerPage() {
  return (
    <>
      <PageHero
        eyebrow="Fall 2026"
        title="Fall 2026 Planner"
        description="See what MSA has planned for the semester."
      />

      <section className="section">
        <div className="container-page">
          <Reveal>
            <h2 className="mb-6 font-display text-2xl font-semibold text-neutral-900">
              Fall 2026 Semester Planner
            </h2>
            <PlannerEmbed height="78vh" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
