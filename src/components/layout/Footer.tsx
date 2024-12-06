import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com/qais-mle7y" className="hover:text-gray-300 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mhd-qais-alsaleh/" className="hover:text-gray-300 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:qaisalsaleh251@gmail.com" className="hover:text-gray-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mhd Qais Alsaleh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;