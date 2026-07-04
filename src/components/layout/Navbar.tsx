import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Code2, FolderGit2 } from 'lucide-react';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: <Code2 className="w-4 h-4" />, text: 'Home' },
    { to: '/projects', icon: <FolderGit2 className="w-4 h-4" />, text: 'Projects' },
    { to: '/education', icon: <BookOpen className="w-4 h-4" />, text: 'Education' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-zinc-50/90 backdrop-blur-md transition-colors dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Mhd Qais Alsaleh
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <MobileNav />

            <div className="hidden sm:flex sm:items-center sm:space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`inline-flex min-h-10 items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-950'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50'
                    }`}
                  >
                    {item.icon}
                    <span className="ml-1.5">{item.text}</span>
                  </Link>
                );
              })}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
