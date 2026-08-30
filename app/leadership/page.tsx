import type { Metadata } from "next";
import { PageHero } from "@/components/section-heading";
import { LeaderCard } from "@/components/leader-card";
import { Reveal } from "@/components/reveal";
import { CTABanner } from "@/components/cta-banner";
import { EXECUTIVE_BOARD, ADVISOR } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the MSA Executive Board serving Truman State University during the 2026–27 academic year.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Executive Board"
        description="Meet the students serving MSA during the 2026–27 academic year."
      />

      {/* Advisor + President featured */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
            <Reveal>
              <LeaderCard leader={ADVISOR} />
            </Reveal>
            <Reveal delay={0.1}>
              <LeaderCard leader={EXECUTIVE_BOARD[0]} />
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXECUTIVE_BOARD.slice(1).map((leader, i) => (
              <Reveal key={leader.name} delay={i * 0.06}>
                <LeaderCard leader={leader} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership philosophy */}
      <section className="section geo-bg">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5">Our Philosophy</span>
            <blockquote className="font-display text-2xl font-medium leading-relaxed text-neutral-800 sm:text-3xl">
              &ldquo;A believer to another believer is like a building whose
              different parts support each other.&rdquo;
            </blockquote>
            <p className="mt-6 text-neutral-600">
              We lead the same way. Every role, and every member, holds a piece
              of what makes MSA strong. Service over status, teamwork over titles.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Want to help lead?"
        description="You don't need a title to make an impact. Join a committee and shape what MSA becomes."
        primary={{ label: "Explore Committees", href: "/committees" }}
        secondary={{ label: "Get Involved", href: "/get-involved" }}
      />
    </>
  );
}
