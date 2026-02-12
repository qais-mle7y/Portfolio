import Skills from '../components/about/Skills';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const headerRef = useScrollReveal();
  const skillsRef = useScrollReveal();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">About Me</h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            I'm a Computer Science Honours student at the University of Pretoria with a
            focus on full-stack and cloud development. I've built production-ready apps in
            React, Node.js, Python/FastAPI, and .NET Core, deployed to Azure with CI/CD automation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            I like to understand problems deeply before touching code and aim for clean,
            reliable solutions. My goal is to join a team where I can ship real software,
            improve systems, and keep learning modern tools that deliver value.
          </p>
        </div>
        <div ref={skillsRef} className="reveal">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">Skills</h3>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
