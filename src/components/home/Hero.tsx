import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechStack from './TechStack';
import Stats from './Stats';
import profilePic from '../../assets/Qais_Profile_Picture.png';
import resumePDF from '../../assets/CV.pdf';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Mhd_Qais_Alsaleh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-white dark:bg-neutral-950 overflow-hidden transition-colors">
      {/* Animated dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
          {/* Profile Image */}
          <div className="flex justify-center mb-8 hero-enter">
            <div className="float w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-2 ring-neutral-200 dark:ring-neutral-700 ring-offset-4 ring-offset-white dark:ring-offset-neutral-950">
              <img
                src={profilePic}
                alt="Mhd Qais Alsaleh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="hero-enter-delay-1 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
              Mhd Qais Alsaleh
            </h1>
            <p className="hero-enter-delay-1 mt-2 text-lg font-medium text-neutral-500 dark:text-neutral-400 sm:text-xl">
              Full-Stack Developer
            </p>
            <p className="hero-enter-delay-2 mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              Computer Science Honours student at the University of Pretoria with a focus
              on full-stack and cloud development. I build production-ready apps in React,
              Node.js, Python, and .NET Core, deployed to Azure with CI/CD automation.
            </p>

            {/* CTA Buttons */}
            <div className="hero-enter-delay-3 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-enter-delay-4">
            <Stats />
          </div>

          {/* Tech Stack */}
          <div className="hero-enter-delay-4">
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
