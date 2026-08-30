import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function CTABanner({
  title = "There’s a place for you in MSA.",
  description = "Come as you are. Join our community, attend an event, or just say hello.",
  primary = { label: "Get Involved", href: "/get-involved" },
  secondary,
}: {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-900 to-neutral-950 px-8 py-14 text-center text-white sm:px-16 sm:py-20">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg text-brand-100">{description}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href={primary.href}
                  className="btn bg-white text-brand-800 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  {primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {secondary && (
                  <Link
                    href={secondary.href}
                    className="btn border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:-translate-y-0.5"
                  >
                    {secondary.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
