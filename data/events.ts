/**
 * Events data model.
 *
 * This shape is intentionally CMS-friendly — the same fields map cleanly to
 * JSON, Supabase, or the Google Calendar API when you're ready to load events
 * dynamically. For now, edit this file directly.
 *
 * IMPORTANT: Do not invent dates. Until real Fall 2026 events are confirmed,
 * keep the placeholder cards (tbd: true) so the site stays accurate.
 */

export type EventCategory =
  | "Religious"
  | "Social"
  | "Educational"
  | "Service"
  | "Outreach"
  | "Community";

export type MSAEvent = {
  id: string;
  title: string;
  date?: string; // ISO date string, e.g. "2026-09-12" — omit if not confirmed
  time?: string; // e.g. "6:00 PM"
  location?: string;
  description: string;
  category: EventCategory;
  rsvpUrl?: string;
  tbd?: boolean; // true = details coming soon (shown as a placeholder card)
};

export const UPCOMING_EVENTS: MSAEvent[] = [
  {
    id: "welcome-fall-2026",
    title: "Fall Welcome Gathering",
    category: "Social",
    description:
      "Kick off the semester with MSA — meet the community, grab some food, and find out what we have planned. Details will be posted on GroupMe and the Fall 2026 Planner.",
    tbd: true,
  },
  {
    id: "weekly-jummah",
    title: "Weekly Campus Jummah",
    category: "Religious",
    description:
      "Friday prayer every week at the Interfaith Center (SUB Down Under), 3:30 PM. Everyone is welcome. Check GroupMe for weekly updates.",
    time: "3:30 PM",
    location: "Interfaith Center · SUB Down Under",
  },
  {
    id: "community-dinner",
    title: "Community Dinner",
    category: "Community",
    description:
      "A shared meal bringing students together over good food and good company. Date and location to be announced on the semester planner.",
    tbd: true,
  },
];

export const PAST_EVENT_CATEGORIES: {
  title: string;
  description: string;
  image?: string; // drop photos in /public/gallery/ and reference them here
}[] = [
  {
    title: "Ramadan Programming",
    description: "Iftars, reflections, and community throughout the holy month.",
  },
  {
    title: "Guest Speakers",
    description: "Talks and discussions on faith, culture, and student life.",
  },
  {
    title: "Community Dinners",
    description: "Shared meals that bring students together.",
  },
  {
    title: "Educational Programs",
    description: "Learning opportunities open to the whole campus.",
  },
  {
    title: "Social Events",
    description: "Game nights, outings, and friendship beyond the classroom.",
  },
  {
    title: "Interfaith & Community Outreach",
    description: "Building understanding across the Truman community.",
  },
];
