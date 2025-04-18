import React from 'react';
import { Download } from 'lucide-react';
import resumePDF from '../assets/Mhd_Qais_Alsaleh_CV.pdf';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Mhd_Qais_Alsaleh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Mhd Qais Alsaleh</h1>
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
              <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Honors in Computer Science</h3>
                  <p className="text-gray-600">University of Pretoria • 2025 - Present</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-600">University of the Witwatersrand • 2022 - 2024</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900">High School Diploma</h3>
                  <p className="text-gray-600">North American International School • 2018 - 2021</p>
                </div>
              </div>
            </section>

            {/* <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Software Development Intern</h3>
                  <p className="text-gray-600">Company Name • Summer 2023</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Developed and maintained web applications using React and Node.js</li>
                    <li>Collaborated with senior developers on large-scale projects</li>
                    <li>Implemented responsive designs and improved user experience</li>
                  </ul>
                </div>
              </div>
            </section> */}

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Programming Languages</h3>
                  <p className="text-gray-600">JavaScript, TypeScript, Python, Java</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Technologies</h3>
                  <p className="text-gray-600">React, Node.js, Express, MongoDB</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
