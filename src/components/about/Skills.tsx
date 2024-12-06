import React from 'react';

const Skills = () => {
  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'] },
    { category: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'SQL'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Docker', 'Azure'] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <div key={skill.category} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{skill.category}</h3>
          <ul className="space-y-2">
            {skill.items.map((item) => (
              <li key={item} className="text-gray-600">
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