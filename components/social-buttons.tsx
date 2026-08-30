import { Instagram, MessageCircle, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/site";

const links = [
  {
    key: "instagram",
    label: "Follow on Instagram",
    short: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: Instagram,
  },
  {
    key: "groupme",
    label: "Join GroupMe",
    short: "GroupMe",
    href: SOCIAL_LINKS.groupme,
    icon: MessageCircle,
  },
  {
    key: "email",
    label: "Email MSA",
    short: "Email",
    href: SOCIAL_LINKS.email,
    icon: Mail,
  },
];

export function SocialButtons() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {links.map(({ key, label, href, icon: Icon }) => {
        const available = Boolean(href);
        return available ? (
          <a
            key={key}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="card group flex flex-col items-center gap-3 text-center hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
              <Icon className="h-6 w-6" />
            </span>
            <span className="font-semibold text-neutral-900">{label}</span>
          </a>
        ) : (
          <div
            key={key}
            className="card flex flex-col items-center gap-3 text-center opacity-70"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
              <Icon className="h-6 w-6" />
            </span>
            <span className="font-semibold text-neutral-500">{label}</span>
            <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500">
              Link coming soon
            </span>
          </div>
        );
      })}
    </div>
  );
}
