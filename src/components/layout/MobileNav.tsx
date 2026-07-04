import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Code2, FolderGit2, Menu, X } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', icon: <Code2 className="w-4 h-4" />, text: 'Home' },
    { to: '/projects', icon: <FolderGit2 className="w-4 h-4" />, text: 'Projects' },
    { to: '/education', icon: <BookOpen className="w-4 h-4" />, text: 'Education' },
  ];

  return (
    <div className="sm:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 border-b border-zinc-200 bg-zinc-50/95 px-4 py-2 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex min-h-11 items-center rounded-lg px-4 py-3 transition-colors ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-950'
                    : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white'
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
