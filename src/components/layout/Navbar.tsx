import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, User, Briefcase, FileText, Mail } from 'lucide-react';
import MobileNav from './MobileNav';

const Navbar = () => {
  const navItems = [
    { to: '/', icon: <Code2 className="w-5 h-5" />, text: 'Home' },
    { to: '/about', icon: <User className="w-5 h-5" />, text: 'About' },
    { to: '/portfolio', icon: <Briefcase className="w-5 h-5" />, text: 'Portfolio' },
    { to: '/resume', icon: <FileText className="w-5 h-5" />, text: 'Resume' },
    { to: '/contact', icon: <Mail className="w-5 h-5" />, text: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Portfolio
            </Link>
          </div>
          {/* Mobile Navigation */}
          <MobileNav />

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;