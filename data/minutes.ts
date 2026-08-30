/**
 * Executive Board meeting minutes.
 *
 * HOW TO ADD MINUTES:
 * 1. Save the document (PDF recommended) in /public/minutes/
 *    e.g. /public/minutes/2026-09-05.pdf
 * 2. Add an entry below. Newest first.
 *
 * Example:
 *   {
 *     title: "Executive Board Meeting",
 *     date: "2026-09-05",              // ISO date (YYYY-MM-DD)
 *     url: "/minutes/2026-09-05.pdf",  // file in /public/minutes/
 *     summary: "Semester kickoff & committee assignments.", // optional
 *   }
 *
 * Leave the array empty and the page shows a clean "coming soon" state.
 */

export type Minutes = {
  title: string;
  date: string; // ISO date string
  url: string; // path to the uploaded document
  summary?: string;
};

export const MEETING_MINUTES: Minutes[] = [
  // Upload documents to /public/minutes/ and list them here (newest first).
];
