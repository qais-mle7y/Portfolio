import { Code2, Database, Globe, Terminal } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      icon: <Code2 className="w-5 h-5 text-blue-700 dark:text-blue-300" />,
      title: 'Frontend',
      skills: 'React, TypeScript, Tailwind CSS',
    },
    {
      icon: <Database className="w-5 h-5 text-blue-700 dark:text-blue-300" />,
      title: 'Backend',
      skills: 'Python, FastAPI, Node.js, .NET',
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-700 dark:text-blue-300" />,
      title: 'Cloud',
      skills: 'Azure, Docker, GitHub Actions',
    },
    {
      icon: <Terminal className="w-5 h-5 text-blue-700 dark:text-blue-300" />,
      title: 'Tools',
      skills: 'Git, SQL, GraphQL, Linux',
    },
  ];

  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {technologies.map((tech) => (
        <div
          key={tech.title}
          className="rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
        >
          <div className="flex items-center space-x-2.5 mb-1.5">
            {tech.icon}
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{tech.title}</h3>
          </div>
          <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{tech.skills}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
