import React from 'react';
import { Code2, Database, Globe, Terminal } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      icon: <Code2 className="w-6 h-6 text-indigo-600" />,
      title: 'Frontend',
      skills: 'React, TypeScript, Tailwind CSS',
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      title: 'Backend',
      skills: 'Node.js, Express, MongoDB',
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      title: 'Web',
      skills: 'HTML5, CSS3, JavaScript',
    },
    {
      icon: <Terminal className="w-6 h-6 text-indigo-600" />,
      title: 'Tools',
      skills: 'Git, VS Code, Docker',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto mt-8">
      {technologies.map((tech) => (
        <div
          key={tech.title}
          className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-3 mb-2">
            {tech.icon}
            <h3 className="font-medium text-gray-900">{tech.title}</h3>
          </div>
          <p className="text-sm text-gray-600">{tech.skills}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;