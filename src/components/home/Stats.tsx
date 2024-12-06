import React from 'react';
import { Code, GitBranch, Star } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Code className="w-5 h-5 text-indigo-600" />,
      value: '10+',
      label: 'Projects Completed',
    },
    {
      icon: <GitBranch className="w-5 h-5 text-indigo-600" />,
      value: '100+',
      label: 'Commits',
    },
    // {
    //   icon: <Star className="w-5 h-5 text-indigo-600" />,
    //   value: '50+',
    //   label: 'Stars on GitHub',
    // },
  ];

  return (
    <div className="flex justify-center mt-12">
      <div className="grid grid-cols-3 gap-8 px-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="flex justify-center mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;