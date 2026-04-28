import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { personal } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-accent bg-clip-text text-transparent">
              Andrew Ehab
            </span>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              .NET Full Stack Developer building scalable web applications from Cairo, Egypt.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['/', '/about', '/services', '/projects', '/contact'].map((path, i) => {
                const labels = ['Home', 'About', 'Services', 'Projects', 'Contact'];
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
                    >
                      {labels[i]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <EnvelopeIcon className="w-4 h-4 text-primary-500 shrink-0" />
                <a href={`mailto:${personal.email}`} className="hover:text-primary-500 transition-colors">
                  {personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <PhoneIcon className="w-4 h-4 text-primary-500 shrink-0" />
                <a href={`tel:${personal.phone}`} className="hover:text-primary-500 transition-colors">
                  {personal.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPinIcon className="w-4 h-4 text-primary-500 shrink-0" />
                {personal.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {year} Andrew Ehab. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
