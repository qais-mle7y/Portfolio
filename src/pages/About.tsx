import React from 'react';
import Skills from '../components/about/Skills';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a passionate computer science student with a focus on web development and software engineering. 
            My goal is to create innovative solutions that make a positive impact on people's lives.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">My Skills</h3>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;