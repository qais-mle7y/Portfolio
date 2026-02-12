import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, User, Briefcase, FileText } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', icon: <Code2 className="w-4 h-4" />, text: 'Home' },
    { to: '/about', icon: <User className="w-4 h-4" />, text: 'About' },
    { to: '/portfolio', icon: <Briefcase className="w-4 h-4" />, text: 'Portfolio' },
    { to: '/resume', icon: <FileText className="w-4 h-4" />, text: 'Resume' },
  ];

  return (
    <div className="sm:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors rounded-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-2 px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center py-3 px-4 rounded-lg transition-colors ${
                  isActive
                    ? 'text-neutral-900 bg-neutral-100 dark:text-neutral-100 dark:bg-neutral-800'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="ml-2 text-sm font-medium">{item.text}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
