import type { Metadata } from "next";
import Link from "next/link";
import { HandHeart, Users2, Check, ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CTABanner } from "@/components/cta-banner";
import { ACTIVE_COMMITTEES } from "@/data/committees";

export const metadata: Metadata = {
  title: "Committees",
  description:
    "You don't have to hold an executive position to contribute to MSA. Explore committees and find your place.",
};

const icons: Record<string, typeof HandHeart> = {
  "fundraising-philanthropy": HandHeart,
  sisterhood: Users2,
  brotherhood: Users2,
};

export default function CommitteesPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Find Your Place"
        description="You don't have to hold an executive position to make a real difference. Committees are where students step up, build friendships, and shape MSA."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {ACTIVE_COMMITTEES.map((c, i) => {
              const Icon = icons[c.id] ?? Users2;
              return (
                <Reveal key={c.id} delay={i * 0.08}>
                  <div className="card flex h-full flex-col hover:-translate-y-1 hover:border-brand-200 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-neutral-900">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {c.purpose}
                    </p>

                    {c.responsibilities.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {c.responsibilities.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 text-sm text-neutral-600"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link
                      href="/get-involved"
                      className="btn-secondary mt-6 w-full"
                    >
                      Get Involved
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-10">
            <p className="mx-auto max-w-2xl text-center text-sm text-neutral-500">
              MSA grows with its members. As the community expands, new
              committees, like Events, Religious Affairs, Education, Outreach,
              and Media, can be added to give even more students a way to lead.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Ready to jump in?"
        description="Tell us where you'd like to help. We'll connect you with the right committee."
        primary={{ label: "Join a Committee", href: "/get-involved" }}
      />
    </>
  );
}
