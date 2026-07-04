import ProjectCard from '../components/portfolio/ProjectCard';
import { GITHUB_USERNAME, projects as projectConfigs } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = projectConfigs.map((project) => ({
  ...project,
  githubUrl: `https://github.com/${GITHUB_USERNAME}/${project.repo}`,
}));

const Portfolio = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Projects
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-700 dark:text-zinc-300">
            Selected solo projects with source links, focused on full-stack systems, browser tooling, and practical engineering.
          </p>
        </div>

        <div ref={gridRef} className="reveal-group grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
