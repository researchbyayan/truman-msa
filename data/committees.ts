/**
 * Committees & subcommittees.
 *
 * `active: true`  → currently running committees (shown as full cards).
 * `active: false` → future-expandable options (the data model supports them,
 *                   but they are not presented as existing committees).
 *
 * To launch a future committee, flip its `active` flag to true.
 */

export type Committee = {
  id: string;
  name: string;
  purpose: string;
  responsibilities: string[];
  active: boolean;
};

export const COMMITTEES: Committee[] = [
  {
    id: "fundraising-philanthropy",
    name: "Fundraising & Philanthropy",
    purpose:
      "Help organize fundraising campaigns, charitable projects, sponsorships, and community service initiatives.",
    responsibilities: [
      "Plan fundraising campaigns and drives",
      "Coordinate charitable and service projects",
      "Reach out to sponsors and partners",
      "Support community service initiatives",
    ],
    active: true,
  },
  {
    id: "sisterhood",
    name: "Sisterhood",
    purpose:
      "Create welcoming programming, gatherings, conversations, and community-building opportunities for sisters.",
    responsibilities: [
      "Organize sisterhood gatherings and socials",
      "Build welcoming spaces for new students",
      "Facilitate conversations and support",
      "Strengthen community among sisters",
    ],
    active: true,
  },
  {
    id: "brotherhood",
    name: "Brotherhood",
    purpose:
      "Create gatherings, recreational activities, discussions, and community-building opportunities for brothers.",
    responsibilities: [
      "Organize brotherhood gatherings and socials",
      "Coordinate recreational and athletic activities",
      "Facilitate discussions and mentorship",
      "Strengthen community among brothers",
    ],
    active: true,
  },

  // ---- Future-expandable committees (not currently active) ----
  {
    id: "events",
    name: "Events",
    purpose: "Plan and run MSA events throughout the semester.",
    responsibilities: [],
    active: false,
  },
  {
    id: "religious-affairs",
    name: "Religious Affairs",
    purpose: "Coordinate prayer, Jummah logistics, and spiritual programming.",
    responsibilities: [],
    active: false,
  },
  {
    id: "education",
    name: "Education",
    purpose: "Organize educational programs and learning opportunities.",
    responsibilities: [],
    active: false,
  },
  {
    id: "outreach",
    name: "Outreach",
    purpose: "Build connections across campus and the broader community.",
    responsibilities: [],
    active: false,
  },
  {
    id: "media",
    name: "Media",
    purpose: "Manage social media, photography, and communications.",
    responsibilities: [],
    active: false,
  },
];

export const ACTIVE_COMMITTEES = COMMITTEES.filter((c) => c.active);
