import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2, User, Briefcase, FileText, Mail } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', icon: <Code2 className="w-5 h-5" />, text: 'Home' },
    { to: '/about', icon: <User className="w-5 h-5" />, text: 'About' },
    { to: '/portfolio', icon: <Briefcase className="w-5 h-5" />, text: 'Portfolio' },
    { to: '/resume', icon: <FileText className="w-5 h-5" />, text: 'Resume' },
    { to: '/contact', icon: <Mail className="w-5 h-5" />, text: 'Contact' },
  ];

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-secondary-600 hover:text-primary-900 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-2 px-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center py-3 px-4 text-secondary-600 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span className="ml-2">{item.text}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;