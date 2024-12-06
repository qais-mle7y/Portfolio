import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechStack from './TechStack';
import Stats from './Stats';
import resumePDF from '../../assets/Mhd_Qais_Alsaleh_CV.pdf';
import profilePic from '../../assets/mypfp.png';

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
    <div className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-indigo/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          {/* Profile Image */}
          <div className="flex justify-center mt-16 mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hi, I'm Qais</span>
                <span className="block text-indigo-600">Software Developer</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Aspiring Software Developer with a Passion for Building Innovative Solutions
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <Link
                    to="/portfolio"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Download Resume
                  </button>
                </div>
              </div>

              {/* Stats Section */}
              {/* <Stats /> */}

              {/* Tech Stack Grid */}
              <TechStack />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;