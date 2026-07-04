import { Download } from 'lucide-react';
import resumePDF from '../assets/MhdQaisAlsaleh_CV.pdf';
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
    <div className="min-h-screen bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div ref={cardRef} className="reveal overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors dark:border-zinc-800 dark:bg-zinc-900">
          <div className="p-6 sm:p-10">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">Education</h1>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Academic background, distinction coursework, and research work from my honours year.
                </p>
              </div>
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98] dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </button>
            </div>

            <section className="mb-10">
              <h2 className="mb-4 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Education
              </h2>
              <div className="space-y-5">
                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                  <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                    BSc Honours in Computer Science
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    University of Pretoria, 2025 - 2026
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    <li>COS781 Data Mining: 82, pass with distinction</li>
                    <li>COS760 Natural Language Processing: pass with distinction</li>
                    <li>COS700 Research Report: Automated Assessment of Algorithmic Thinking Using Flowcharts</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                  <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                    BSc in Computer Science
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    University of the Witwatersrand, 2022 - 2024
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Research
              </h2>
              <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                  Flowchart Analysis Tool
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  Built as part of honours research into automated assessment of algorithmic thinking. The tool parses flowchart diagrams, constructs graph representations, checks logical structure, and provides formative feedback before code is written.
                </p>
                <a
                  href="https://github.com/qais-mle7y/flowchart-analysis-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  View repository
                </a>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Skills
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    Programming Languages
                  </h3>
                  <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    JavaScript, TypeScript, Python, Java, C#, SQL
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    Frontend
                  </h3>
                  <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    React, Tailwind CSS, Three.js, Chart.js
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    Backend &amp; Cloud
                  </h3>
                  <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    Node.js, Express, FastAPI, .NET Core, MongoDB, SQLite, GraphQL, Azure
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    DevOps &amp; Tools
                  </h3>
                  <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
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
