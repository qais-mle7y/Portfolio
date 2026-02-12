import { Download } from 'lucide-react';
import resumePDF from '../assets/CV.pdf';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Resume = () => {
  const cardRef = useScrollReveal();

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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={cardRef} className="reveal bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden transition-colors">
          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10">
              <div>
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Mhd Qais Alsaleh</h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Full-Stack Developer</p>
              </div>
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>

            <section className="mb-10">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
                Education
              </h2>
              <div className="space-y-5 border-l-2 border-neutral-200 dark:border-neutral-700 pl-5">
                <div>
                  <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                    Honours in Computer Science
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    University of Pretoria &middot; 2025 &ndash; Present
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    University of the Witwatersrand &middot; 2022 &ndash; 2024
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                    High School Diploma
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    North American International School &middot; 2018 &ndash; 2021
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
                Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                    Programming Languages
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    JavaScript, TypeScript, Python, Java, C#, SQL
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                    Frontend
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    React, Tailwind CSS, Three.js, Chart.js
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                    Backend &amp; Cloud
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Node.js, Express, FastAPI, .NET Core, MongoDB, SQLite, GraphQL, Azure
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                    DevOps &amp; Tools
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Git, Docker, CI/CD, VS Code, Linux
                  </p>
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
