import { Link, useLocation } from 'react-router-dom';
import { Code2, User, Briefcase, FileText } from 'lucide-react';
import MobileNav from './MobileNav';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: <Code2 className="w-4 h-4" />, text: 'Home' },
    { to: '/about', icon: <User className="w-4 h-4" />, text: 'About' },
    { to: '/portfolio', icon: <Briefcase className="w-4 h-4" />, text: 'Portfolio' },
    { to: '/resume', icon: <FileText className="w-4 h-4" />, text: 'Resume' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 z-50 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Mhd Qais Alsaleh
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <MobileNav />

            <div className="hidden sm:flex sm:items-center sm:space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-neutral-900 bg-neutral-100 dark:text-neutral-100 dark:bg-neutral-800'
                        : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {item.icon}
                    <span className="ml-1.5">{item.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
