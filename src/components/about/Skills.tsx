import { useScrollReveal } from '../../hooks/useScrollReveal';

const Skills = () => {
  const gridRef = useScrollReveal();

  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'C++', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Three.js', 'Chart.js', 'HTML5', 'CSS3'] },
    { category: 'Backend & Cloud', items: ['Node.js', 'Express', 'FastAPI', '.NET Core', 'MongoDB', 'SQLite', 'GraphQL', 'Azure'] },
    { category: 'DevOps & Tools', items: ['Git', 'Docker', 'CI/CD', 'VS Code', 'Linux'] },
  ];

  return (
    <div ref={gridRef} className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.category}
          className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-0.5 transition-all"
        >
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            {skill.category}
          </h3>
          <ul className="space-y-1.5">
            {skill.items.map((item) => (
              <li key={item} className="text-sm text-neutral-500 dark:text-neutral-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
