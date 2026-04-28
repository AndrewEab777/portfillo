import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NAV_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  },
];

export default function Navbar({ dark, toggleDark }) {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 py-1
     after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full
     after:bg-primary-500 after:transition-all after:duration-300
     ${isActive
       ? 'text-primary-500 after:w-full'
       : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 after:w-0 hover:after:w-full'
     }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-primary-500 to-accent bg-clip-text text-transparent"
        >
          Andrew<span className="text-gray-800 dark:text-white"></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {dark
              ? <SunIcon  className="w-5 h-5 text-yellow-400" />
              : <MoonIcon className="w-5 h-5 text-gray-500" />
            }
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {open
              ? <XMarkIcon  className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              : <Bars3Icon  className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200
                 ${isActive
                   ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-500'
                   : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                 }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
