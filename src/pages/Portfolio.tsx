import React from 'react';
import ProjectCard from '../components/portfolio/ProjectCard';
import campusSafetyImage from '../assets/campusSafety.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Campus Safety App',
      description: 'Campus Safety is a cutting-edge web application designed to revolutionize campus safety by providing real-time tools and resources for students, staff, and security personnel. This innovative platform empowers users with instant access to emergency alerts, live updates on incidents, and direct reporting capabilities.',
      image: campusSafetyImage,
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/danishx99/campus-safety-app',
      demoUrl: 'https://campus-safety.azurewebsites.net/login',
    },
    {
      title: 'Common Grounds App',
      description: 'This project aims to equip the body corporates of sectional titles with a platform that seeks to make the execution of their responsibilities easy and seamless.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/danishx99/common-grounds-app',
      demoUrl: '',
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'A weather application that displays forecast data using external APIs',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
    //   technologies: ['React', 'OpenWeather API', 'Tailwind CSS'],
    //   githubUrl: 'https://github.com',
    //   demoUrl: 'https://demo.com',
    // },
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