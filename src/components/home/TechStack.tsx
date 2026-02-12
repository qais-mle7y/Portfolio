import { Code2, Database, Globe, Terminal } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      icon: <Code2 className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />,
      title: 'Frontend',
      skills: 'React, TypeScript, Tailwind CSS',
    },
    {
      icon: <Database className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />,
      title: 'Backend',
      skills: 'Node.js, FastAPI, Express, MongoDB',
    },
    {
      icon: <Globe className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />,
      title: 'Cloud',
      skills: 'Azure, CI/CD, Docker',
    },
    {
      icon: <Terminal className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />,
      title: 'Tools',
      skills: 'Git, VS Code, Linux',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
      {technologies.map((tech) => (
        <div
          key={tech.title}
          className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
        >
          <div className="flex items-center space-x-2.5 mb-1.5">
            {tech.icon}
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{tech.title}</h3>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{tech.skills}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
