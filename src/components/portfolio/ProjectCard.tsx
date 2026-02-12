import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
}) => {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-neutral-900/50 transition-all duration-200">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{description}</p>

        {technologies && technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(githubUrl || demoUrl) && (
          <div className="mt-5 flex items-center space-x-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              >
                <Github className="w-4 h-4 mr-1.5" />
                Code
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-1.5" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
