/**
 * Configuration for a portfolio project.
 *
 * - `repo` is the GitHub repository name (not the full URL).
 * - All other fields are optional overrides. If omitted, the GitHub API
 *   response fills in `description` and constructs the `githubUrl`.
 * - `technologies` is always manual because the GitHub API only returns
 *   the primary language.
 *
 * Projects are displayed newest-first (top of the array = most recent).
 * To add a project:  insert an object at the top of the array.
 * To remove a project: delete its object from the array.
 */
export interface ProjectConfig {
  /** GitHub repo name, e.g. "campus-safety-app" */
  repo: string;
  /** Display title (defaults to repo name with dashes replaced) */
  title?: string;
  /** Override the GitHub repo description */
  description?: string;
  /** Manual list of technologies used */
  technologies?: string[];
  /** Live demo URL -- only set if the demo is actually working */
  demoUrl?: string;
}

export const GITHUB_USERNAME = 'qais-mle7y';

export const projects: ProjectConfig[] = [
  // ── Newest ──────────────────────────────────────────────
  {
    repo: 'Fat-Loss-Tracker',
    title: 'Fat Loss Tracker',
    description:
      'A mobile-first fat loss progress tracker with daily logging, body measurements, progress photos, trend charts, streaks, and smart reminders.',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite', 'Docker'],
  },
  {
    repo: 'API-Rate-Limiter-Dashboard',
    title: 'API Rate Limiter Dashboard',
    description:
      'A full-stack project demonstrating sliding-window rate limiting with real-time monitoring via SSE, live charts, and a tiered API key system.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'React', 'Chart.js'],
  },
  {
    repo: 'tarkov-quest-finder-extension',
    title: 'Tarkov Quest Finder',
    description:
      'A Chrome extension for Escape from Tarkov that provides instant quest searching and details via the tarkov.dev GraphQL API.',
    technologies: ['JavaScript', 'GraphQL', 'Tailwind CSS'],
  },
  {
    repo: 'fat-guys',
    title: 'Fat Guys — 3D Platformer',
    description:
      'A Fall Guys-inspired 3D platformer built with Three.js. Players navigate dynamic levels while racing against the clock.',
    technologies: ['JavaScript', 'Three.js', 'Tailwind CSS'],
  },
  {
    repo: 'common-grounds-app',
    title: 'Common Grounds App',
    description:
      'A management platform for sectional title body corporates, streamlining responsibilities and communication between stakeholders.',
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    repo: 'campus-safety-app',
    title: 'Campus Safety App',
    description:
      'A real-time campus safety platform providing emergency alerts, live incident updates, and direct reporting tools for students, staff, and security personnel.',
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express', 'Azure'],
  },
  // ── Oldest ──────────────────────────────────────────────
];
