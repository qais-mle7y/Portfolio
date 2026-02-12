import { useEffect, useState } from 'react';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projects as projectConfigs, GITHUB_USERNAME } from '../data/projects';
import type { ProjectConfig } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
}

interface MergedProject {
  title: string;
  description: string;
  technologies?: string[];
  githubUrl: string;
  demoUrl?: string;
}

function mergeProjects(
  configs: ProjectConfig[],
  repos: GitHubRepo[]
): MergedProject[] {
  const repoMap = new Map<string, GitHubRepo>();
  for (const repo of repos) {
    repoMap.set(repo.name, repo);
  }

  return configs.map((cfg) => {
    const repo = repoMap.get(cfg.repo);
    const githubUrl =
      repo?.html_url ?? `https://github.com/${GITHUB_USERNAME}/${cfg.repo}`;

    return {
      title: cfg.title ?? formatRepoName(cfg.repo),
      description:
        cfg.description ?? repo?.description ?? 'No description available.',
      technologies: cfg.technologies,
      githubUrl,
      demoUrl: cfg.demoUrl,
    };
  });
}

function formatRepoName(repo: string): string {
  return repo
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const Portfolio = () => {
  const [projects, setProjects] = useState<MergedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const repos: GitHubRepo[] = await res.json();
        setProjects(mergeProjects(projectConfigs, repos));
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Failed to fetch GitHub repos:', err);
          setProjects(mergeProjects(projectConfigs, []));
        }
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Projects
          </h2>
          <p className="mt-3 text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            A selection of recent work showcasing full-stack development, game
            development, and browser extensions.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden animate-pulse"
              >
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-neutral-100 dark:bg-neutral-800 rounded w-2/3" />
                  <div className="h-3 bg-neutral-100 dark:bg-neutral-800 rounded w-full" />
                  <div className="h-3 bg-neutral-100 dark:bg-neutral-800 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div ref={gridRef} className="reveal-group grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
