import React from 'react';
import ProjectCard from '../components/portfolio/ProjectCard';
import campusSafetyImage from '../assets/campusSafety.png';
import commonGrounds from '../assets/commonGrounds.png';
import fatGuys from '../assets/fatGuys.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Campus Safety App',
      description: 'Campus Safety is a cutting-edge web application designed to revolutionize campus safety by providing real-time tools and resources for students, staff, and security personnel. This innovative platform empowers users with instant access to emergency alerts, live updates on incidents, and direct reporting capabilities.',
      image: campusSafetyImage,
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/qais-mle7y/campus-safety-app',
      demoUrl: 'https://campus-safety.azurewebsites.net/',
    },
    {
      title: 'Common Grounds App',
      description: 'This project aims to equip the body corporates of sectional titles with a platform that seeks to make the execution of their responsibilities easy and seamless.',
      image: commonGrounds,
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/qais-mle7y/common-grounds-app',
      demoUrl: 'https://common-grounds-app.onrender.com/',
    },
    {
      title: 'Fat Guys - 3D Platformer Game',
      description: 'Fat Guys is a 3D platformer game, inspired by Fall Guys, built with Three.js that challenges players to navigate through dynamic levels while racing against the clock.',
      image: fatGuys,
      technologies: ['JavaScript', 'THREE.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/qais-mle7y/fat-guys',
      demoUrl: 'https://lamp.ms.wits.ac.za/~schickentendies/',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
