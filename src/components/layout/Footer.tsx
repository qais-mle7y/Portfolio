import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 transition-colors dark:border-zinc-800 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-5">
            <a
              href="https://github.com/qais-mle7y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mhd-qais-alsaleh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Mhd Qais Alsaleh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
