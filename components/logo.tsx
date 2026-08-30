"use client";

import Link from "next/link";
import { SITE } from "@/data/site";

/**
 * MSA wordmark. Uses /public/logo.png if present, otherwise a clean
 * text-based fallback so the site never ships with a broken image.
 *
 * To use the real logo: save the MSA logo image as /public/logo.png
 * and it will appear automatically (see Logo component below).
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label={`${SITE.organizationName} home`}
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-brand-800">
          {SITE.shortName}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
          Truman State
        </span>
      </span>
    </Link>
  );
}

/**
 * Logo badge. Renders /logo.png when available; the styled monogram is the
 * fallback and also a nice standalone mark.
 */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <span
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-700 to-brand-950 text-white shadow-sm ring-1 ring-brand-900/10"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt=""
        className="h-full w-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="pointer-events-none absolute font-display text-sm font-bold">
        M
      </span>
    </span>
  );
}
