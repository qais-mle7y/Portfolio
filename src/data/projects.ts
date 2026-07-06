export interface ProjectConfig {
  repo: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
}

export const GITHUB_USERNAME = 'qais-mle7y';

export const projects: ProjectConfig[] = [
  {
    repo: 'vibecoding-locker',
    title: 'Vibe Locker',
    description:
      'A modern web application built to organize, save, and manage your digital items efficiently, featuring a command palette, secure authentication, and a clean dashboard.',
    technologies: ['Next.js', 'React', 'Supabase', 'Upstash Redis', 'Tailwind CSS'],
  },
  {
    repo: 'Portfolio',
    title: 'Personal Portfolio',
    description:
      'This React, TypeScript, Vite, and Tailwind portfolio, built to keep projects, education, research, and the CV easy to scan.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    demoUrl: 'https://mhd-qais-alsaleh.netlify.app/',
  },
  {
    repo: 'tarkov-quest-finder-extension',
    title: 'Tarkov Quest Finder',
    description:
      'A Chrome extension that searches Escape from Tarkov quests, shows objectives and rewards, and caches data from the tarkov.dev GraphQL API.',
    technologies: ['JavaScript', 'GraphQL', 'Tailwind CSS', 'Chrome Storage'],
  },
  {
    repo: 'API-Rate-Limiter-Dashboard',
    title: 'API Rate Limiter Dashboard',
    description:
      'A full-stack rate limiting demo with a sliding-window counter, tiered API keys, Server-Sent Events, live charts, and an API tester.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'React', 'Chart.js', 'SSE'],
  },
  {
    repo: 'Fat-Loss-Tracker',
    title: 'Fat Loss Tracker',
    description:
      'A mobile-first tracker for daily logs, body measurements, progress photos, trend charts, streaks, reminders, and secure authentication.',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite'],
  },
];
