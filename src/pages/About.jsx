import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Section      from '../components/Section';
import Container    from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Card         from '../components/Card';
import { personal, skillGroups } from '../data';

const fadeUp = (i = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  viewport:   { once: true },
  transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
});

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-950 pt-16">

      {/* ── Bio ── */}
      <Section className="bg-gradient-to-br from-slate-50 to-primary-50/30 dark:from-gray-900 dark:to-gray-950">
        <Container>
          <SectionHeader
            title="About Me"
            subtitle="A little about who I am, where I studied, and what drives me"
          />

          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left — text */}
            <motion.div {...fadeUp(0)}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent
                flex items-center justify-center text-3xl shadow-lg mb-6">
                👨‍💻
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {personal.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {personal.summary}
              </p>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <MapPinIcon className="w-4 h-4" />,       label: 'Location',   value: personal.location },
                  { icon: <BriefcaseIcon className="w-4 h-4" />,    label: 'Experience', value: '3+ Years'         },
                  { icon: <AcademicCapIcon className="w-4 h-4" />,  label: 'Degree',     value: 'B.Sc. CS'         },
                  { icon: '🌐',                                       label: 'Languages',  value: 'Arabic, English'  },
                ].map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-1.5 text-primary-500 mb-1.5 text-sm">
                      {typeof icon === 'string' ? <span>{icon}</span> : icon}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">
                      {label}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — education + availability */}
            <motion.div {...fadeUp(0.1)} className="space-y-6">

              {/* Education */}
              <Card hover={false} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30
                    flex items-center justify-center shrink-0">
                    <AcademicCapIcon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Canadian International College
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Bachelor of Science — Computer Science
                    </p>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30
                      text-primary-600 dark:text-primary-400 text-xs font-medium">
                      2020 – 2024
                    </span>
                  </div>
                </div>
              </Card>

              {/* Open to work */}
              <Card hover={false} className="p-6 bg-gradient-to-br from-primary-500 to-accent border-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white font-semibold">Available for Work</span>
                </div>
                <p className="text-primary-100 text-sm leading-relaxed">
                  I'm currently open to full-time roles and freelance projects.
                  Let's build something great together!
                </p>
              </Card>

              {/* Contact quick links */}
              <Card hover={false} className="p-6">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm uppercase tracking-wide">
                  Reach Me
                </h4>
                <div className="space-y-2">
                  <a href={`mailto:${personal.email}`}
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">
                    📧 {personal.email}
                  </a>
                  <a href={`tel:${personal.phone}`}
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">
                    📞 {personal.phone}
                  </a>
                  <a href={personal.linkedin} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">
                    💼 LinkedIn Profile
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ── Skills ── */}
      <Section>
        <Container>
          <SectionHeader
            title="Skills & Technologies"
            subtitle="Technologies I work with on a daily basis"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map(({ category, icon, color, skills }, i) => (
              <motion.div key={category} {...fadeUp(i * 0.08)}>
                <Card className="p-6 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color}
                    flex items-center justify-center text-2xl mb-4 shadow-md`}>
                    {icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full
                          bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300
                          hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600
                          transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
