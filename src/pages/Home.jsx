import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon, EnvelopeIcon, MapPinIcon,
  CodeBracketIcon, ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { personal, homeSkills, timeline, featuredProjects } from '../data';
import profileImg from '../assets/me.jpg';

/* ─── helpers ─────────────────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const inView = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true },
  transition:  { duration: 0.55, delay, ease: 'easeOut' },
});

const stats = [
  { value: '3+',  label: 'Years Exp.'    },
  { value: '15+', label: 'Projects'      },
  { value: '10+', label: 'Happy Clients' },
];

function SkillCircle({ icon, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-20 h-20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className={`w-full h-full rounded-full bg-gradient-to-br ${color}
          flex items-center justify-center text-3xl shadow-lg
          ring-4 ring-white dark:ring-gray-900 cursor-default`}
        animate={{ rotate: hovered ? 360 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {icon}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950">

      {/* ╔══════════════════════════════╗
          ║          HERO                ║
          ╚══════════════════════════════╝ */}
      <div className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-slate-50 via-[#eef1ff]/60 to-[#e8f8fb]
        dark:from-gray-950 dark:via-[#0d0f1f] dark:to-gray-950">

        {/* blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#A78BFA]/20 dark:bg-[#A78BFA]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1FB6CF]/15 dark:bg-[#1FB6CF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-14">

            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                  bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400
                  text-sm font-medium mb-6">
                  <MapPinIcon className="w-4 h-4" /> Cairo, Egypt
                </span>
              </motion.div>

              <motion.h1 {...fadeUp(0.1)}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-[#4F6DFF] via-[#A78BFA] to-[#1FB6CF] bg-clip-text text-transparent">
                  Andrew Ehab
                </span>
              </motion.h1>

              <motion.p {...fadeUp(0.2)}
                className="text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-5">
                {personal.title}
              </motion.p>

              <motion.p {...fadeUp(0.3)}
                className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed text-base sm:text-lg">
                {personal.intro}
              </motion.p>

              {/* CTAs */}
              <motion.div {...fadeUp(0.4)}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                <Link to="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                    bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm
                    shadow-lg shadow-primary-200 dark:shadow-primary-900/30
                    transition-all duration-300 hover:scale-105 active:scale-95">
                  View Projects <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                    border-2 border-primary-500 text-primary-500 font-semibold text-sm
                    hover:bg-primary-500 hover:text-white
                    transition-all duration-300 hover:scale-105 active:scale-95">
                  Contact Me <EnvelopeIcon className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* socials */}
              <motion.div {...fadeUp(0.5)} className="flex gap-5 justify-center lg:justify-start mb-10">
                <a href={personal.linkedin} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">
                  <FaLinkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href={personal.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
                  <FaGithub className="w-5 h-5" /> GitHub
                </a>
              </motion.div>

              {/* stats */}
              <motion.div {...fadeUp(0.6)} className="flex gap-8 justify-center lg:justify-start">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">{value}</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex-shrink-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4F6DFF] via-[#A78BFA] to-[#1FB6CF] opacity-25 blur-2xl scale-110" />
                <div className="relative w-full h-full rounded-full
                  border-4 border-white dark:border-gray-800
                  shadow-2xl overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Andrew Ehab"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-2xl px-3 py-2
                    shadow-lg border border-gray-100 dark:border-gray-700 text-xs font-bold text-primary-500">
                  .NET Core
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 rounded-2xl px-3 py-2
                    shadow-lg border border-gray-100 dark:border-gray-700 text-xs font-bold text-cyan-500">
                  ⚛️ React
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ╔══════════════════════════════╗
          ║          SKILLS              ║
          ╚══════════════════════════════╝ */}
      <section className="py-20 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...inView(0)} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/40
              text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Skills & Technologies
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Technologies I work with daily — from backend APIs to frontend interfaces.
            </p>
            <div className="mt-5 mx-auto w-16 h-1.5 rounded-full bg-gradient-to-r from-[#4F6DFF] via-[#A78BFA] to-[#1FB6CF]" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {homeSkills.map(({ name, icon, color }, i) => (
              <motion.div key={name} {...inView(i * 0.06)}
                className="group flex flex-col items-center gap-3 cursor-default">

                {/* circular icon + animated ring */}
                <SkillCircle icon={icon} color={color} />

                {/* name + fill bar */}
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-1.5">
                    {name}
                  </p>
                  <div className="w-16 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mx-auto">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.07, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════╗
          ║         TIMELINE             ║
          ╚══════════════════════════════╝ */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...inView(0)} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/40
              text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              My Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Education & Courses
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              A timeline of my academic background and the courses that shaped my skills.
            </p>
            <div className="mt-5 mx-auto w-16 h-1.5 rounded-full bg-gradient-to-r from-[#4F6DFF] via-[#A78BFA] to-[#1FB6CF]" />
          </motion.div>

          {/* vertical line + items */}
          <div className="relative">
            {/* center line — hidden on mobile, shown md+ */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5
              bg-gradient-to-b from-[#4F6DFF] via-[#A78BFA] to-[#1FB6CF]
              dark:from-[#4F6DFF] dark:via-[#A78BFA] dark:to-[#1FB6CF]" />

            <div className="space-y-10">
              {timeline.map(({ year, type, title, subtitle, description, icon, color }, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={`${year}-${title}`}
                    {...inView(i * 0.08)}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-4
                      ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* card — takes 5/12 width on desktop */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5
                        border border-gray-100 dark:border-gray-700
                        shadow-sm hover:shadow-xl hover:-translate-y-1
                        transition-all duration-300 group">

                        {/* year + type badge */}
                        <div className={`flex items-center gap-2 mb-3
                          ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                          <span className="text-xs font-bold text-primary-500 bg-primary-50
                            dark:bg-primary-900/30 px-2.5 py-1 rounded-full">
                            {year}
                          </span>
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full
                            ${type === 'education'
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                              : 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                            }`}>
                            {type === 'education' ? '🎓 Education' : '📚 Course'}
                          </span>
                        </div>

                        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 leading-snug">
                          {title}
                        </h3>
                        <p className="text-xs font-semibold text-primary-500 mb-2">{subtitle}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>

                    {/* center dot */}
                    <div className="hidden md:flex w-2/12 justify-center items-center shrink-0">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color}
                        flex items-center justify-center text-xl shadow-lg
                        ring-4 ring-white dark:ring-gray-950 z-10`}>
                        {icon}
                      </div>
                    </div>

                    {/* spacer for the other side */}
                    <div className="hidden md:block w-5/12" />

                    {/* mobile left dot */}
                    <div className={`md:hidden absolute -left-1 top-5 w-8 h-8 rounded-full
                      bg-gradient-to-br ${color} flex items-center justify-center text-sm
                      shadow-md ring-2 ring-white dark:ring-gray-950`}>
                      {icon}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════╗
          ║      FEATURED PROJECTS       ║
          ╚══════════════════════════════╝ */}
      <section className="py-20 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...inView(0)} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/40
              text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              A quick look at some of the things I've built.
            </p>
            <div className="mt-5 mx-auto w-16 h-1.5 rounded-full bg-gradient-to-r from-[#4F6DFF] via-[#A78BFA] to-[#1FB6CF]" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(({ title, description, tech, image, github, live }, i) => (
              <motion.div key={title} {...inView(i * 0.1)}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden
                  border border-gray-100 dark:border-gray-700
                  shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                {/* thumbnail */}
                <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/55 flex items-center justify-center gap-3
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white
                        text-gray-800 text-xs font-semibold hover:bg-gray-100 transition-colors"
                      onClick={e => e.stopPropagation()}>
                      <CodeBracketIcon className="w-4 h-4" /> Code
                    </a>
                    {live && (
                      <a href={live} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-500
                          text-white text-xs font-semibold hover:bg-primary-600 transition-colors"
                        onClick={e => e.stopPropagation()}>
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" /> Live
                      </a>
                    )}
                  </div>
                </div>

                {/* content */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.map(t => (
                      <span key={t}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full
                          bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* see all */}
          <motion.div {...inView(0.3)} className="text-center mt-10">
            <Link to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
                bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm
                shadow-lg shadow-primary-200 dark:shadow-primary-900/30
                transition-all duration-300 hover:scale-105 active:scale-95">
              See All Projects <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
