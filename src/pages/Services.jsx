import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Section       from '../components/Section';
import Container     from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { services }  from '../data';

const descriptions = {
  'Full Stack Web Development':
    'End-to-end web applications using ASP.NET Core on the backend and React/Next.js on the frontend — scalable, maintainable, and production-ready.',
  'RESTful API Development':
    'Clean, well-documented REST APIs with proper authentication, validation, error handling, and versioning using ASP.NET Core Web API.',
  'Responsive UI Development':
    'Pixel-perfect, mobile-first interfaces built with React, TypeScript, and Tailwind CSS that look great on every screen size.',
  'Performance Optimization':
    'Profiling and optimizing both frontend and backend — lazy loading, caching with Redis, query optimization, and bundle size reduction.',
  'Debugging & Problem Solving':
    'Systematic debugging, root-cause analysis, and refactoring of legacy codebases to improve reliability and developer experience.',
};

const cardColors = [
  'from-blue-500 to-indigo-500',
  'from-indigo-500 to-purple-500',
  'from-purple-500 to-pink-500',
  'from-emerald-500 to-teal-500',
  'from-orange-500 to-red-500',
];

export default function Services() {
  return (
    <div className="bg-slate-50 dark:bg-gray-950 pt-16">
      <Section>
        <Container>
          <SectionHeader
            title="My Services"
            subtitle="What I can do for you — from design to deployment"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 h-full
                  border border-gray-100 dark:border-gray-700
                  shadow-sm hover:shadow-xl hover:-translate-y-2
                  transition-all duration-300 cursor-default">

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cardColors[i % cardColors.length]}
                    flex items-center justify-center text-3xl mb-5
                    shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 rounded-3xl bg-gradient-to-r from-primary-500 to-accent p-10 text-center text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Have a project in mind?
            </h3>
            <p className="text-primary-100 mb-7 max-w-xl mx-auto">
              Let's discuss your requirements and build something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
                bg-white text-primary-600 font-semibold text-sm
                hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get in Touch <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
