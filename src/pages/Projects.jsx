import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Section       from '../components/Section';
import Container     from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { projects }  from '../data';

// Derive unique filter tags from all project tech stacks
const ALL_FILTERS = ['All', 'ASP.NET Core', 'React', 'Next.js', 'Angular', 'TypeScript', 'Docker'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tech.some(t => t.includes(active)));

  return (
    <div className="bg-white dark:bg-gray-950 pt-16">
      <Section>
        <Container>
          <SectionHeader
            title="My Projects"
            subtitle="A selection of things I've built — from APIs to full-stack apps"
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {ALL_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${active === f
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-200 dark:shadow-primary-900/30 scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map(({ title, description, tech, image, github, live }) => (
                <motion.div
                  key={title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden
                    border border-gray-100 dark:border-gray-700
                    shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/55 flex items-center justify-center gap-4
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={github} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-gray-800
                          text-xs font-semibold hover:bg-gray-100 transition-colors"
                        onClick={e => e.stopPropagation()}>
                        <CodeBracketIcon className="w-4 h-4" /> Code
                      </a>
                      {live && (
                        <a href={live} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-500 text-white
                            text-xs font-semibold hover:bg-primary-600 transition-colors"
                          onClick={e => e.stopPropagation()}>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" /> Live
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {tech.map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full
                            bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400
                          hover:text-primary-500 transition-colors font-medium"
                      >
                        <CodeBracketIcon className="w-3.5 h-3.5" /> Source Code
                      </a>
                      {live && (
                        <a
                          href={live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400
                            hover:text-primary-500 transition-colors font-medium"
                        >
                          <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400 dark:text-gray-600">
              No projects found for this filter.
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
