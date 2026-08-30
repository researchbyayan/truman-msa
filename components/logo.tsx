"use client";

import { useState } from "react";
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
      <LogoMark size={48} />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-sm font-bold tracking-tight text-brand-800 sm:text-base">
          Muslim Student Association (MSA)
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-500 sm:text-[11px]">
          {SITE.university}
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
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-950 font-display text-sm font-bold text-white shadow-sm ring-1 ring-brand-900/10"
        style={{ width: size, height: size }}
        aria-hidden
      >
        M
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="MSA logo"
      className="shrink-0 object-contain"
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}
