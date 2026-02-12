import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-5">
            <a
              href="https://github.com/qais-mle7y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mhd-qais-alsaleh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} Mhd Qais Alsaleh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
