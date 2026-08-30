import Link from "next/link";

export default function NotFound() {
  return (
    <div className="geo-bg flex min-h-[60vh] items-center justify-center px-6 text-center">
      <div>
        <p className="font-display text-6xl font-bold text-brand-700">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-900">
          Page not found
        </h1>
        <p className="mt-2 text-neutral-600">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn-primary mt-6">
          Back home
        </Link>
      </div>
    </div>
  );
}
