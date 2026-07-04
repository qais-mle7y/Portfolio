import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechStack from './TechStack';
import profilePic from '../../assets/Qais_Profile_Picture.png';
import resumePDF from '../../assets/MhdQaisAlsaleh_CV.pdf';

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
    <section className="relative overflow-hidden bg-zinc-50 transition-colors dark:bg-zinc-950">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pb-16 pt-16 sm:pt-24 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:pb-20 lg:pt-24">
          <div className="max-w-2xl">
            <p className="hero-enter font-mono text-sm font-medium text-blue-700 dark:text-blue-300">
              Software Developer, BSc Honours Computer Science
            </p>
            <h1 className="hero-enter-delay-1 mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
              Mhd Qais Alsaleh
            </h1>
            <p className="hero-enter-delay-2 mt-6 max-w-xl text-base leading-8 text-zinc-700 dark:text-zinc-300 sm:text-lg">
              I build full-stack software with React, Python, Node.js, and .NET, with recent honours work in data mining, NLP, and flowchart-based learning tools.
            </p>

            <div className="hero-enter-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98] dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                View projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:text-zinc-950 active:scale-[0.98] dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </button>
            </div>
          </div>

          <div className="hero-enter-delay-2 justify-self-start lg:justify-self-end">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900">
              <img
                src={profilePic}
                alt="Mhd Qais Alsaleh"
                className="h-56 w-56 rounded-xl object-cover sm:h-64 sm:w-64"
              />
            </div>
          </div>
        </div>

        <div className="hero-enter-delay-4">
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
