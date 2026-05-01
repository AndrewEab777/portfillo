import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon, CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Section       from '../components/Section';
import Container     from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Card          from '../components/Card';
import Button        from '../components/Button';
import { personal }  from '../data';

const INIT = { name: '', email: '', message: '' };

function validate(fields) {
  const errors = {};
  if (!fields.name.trim())                          errors.name    = 'Name is required.';
  if (!fields.email.trim())                         errors.email   = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                                    errors.email   = 'Enter a valid email.';
  if (!fields.message.trim())                       errors.message = 'Message is required.';
  else if (fields.message.trim().length < 10)       errors.message = 'Message must be at least 10 characters.';
  return errors;
}

const contactInfo = [
  { icon: <EnvelopeIcon className="w-5 h-5" />, label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { icon: <PhoneIcon    className="w-5 h-5" />, label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}`    },
  { icon: <MapPinIcon   className="w-5 h-5" />, label: 'Location', value: personal.location, href: null                       },
];

export default function Contact() {
  const [fields,   setFields]   = useState(INIT);
  const [errors,   setErrors]   = useState({});
  const [loading,  setLoading]  = useState(false);
  const [success,  setSuccess]  = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    // Simulate async send (replace with EmailJS or your API)
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setFields(INIT);
    setTimeout(() => setSuccess(false), 5000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-gray-800
     text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
     outline-none transition-all duration-200
     focus:ring-2 focus:ring-primary-400 focus:border-transparent
     ${errors[field]
       ? 'border-red-400 dark:border-red-500'
       : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
     }`;

  return (
    <div className="bg-slate-50 dark:bg-gray-950 pt-16">
      <Section>
        <Container>
          <SectionHeader
            title="Get In Touch"
            subtitle="Got an idea? Reach out today and let's bring it to life — I'm available for an immediate response!"
          />

          <div className="grid lg:grid-cols-5 gap-10">

            {/* ── Left — info ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map(({ icon, label, value, href }) => (
                <Card key={label} hover={false} className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30
                    flex items-center justify-center text-primary-500 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">
                      {label}
                    </div>
                    {href
                      ? <a href={href} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-500 transition-colors">{value}</a>
                      : <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{value}</span>
                    }
                  </div>
                </Card>
              ))}

              {/* Social */}
              <Card hover={false} className="p-5">
                <h4 className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-3">
                  Social
                </h4>
                <div className="flex gap-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20
                      text-blue-600 dark:text-blue-400 text-sm font-medium
                      hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700
                      text-gray-700 dark:text-gray-300 text-sm font-medium
                      hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* ── Right — form ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <Card hover={false} className="p-8">
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20
                      border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400
                      text-sm font-medium mb-6"
                  >
                    <CheckCircleIcon className="w-5 h-5 shrink-0" />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={fields.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className={`w-full justify-center py-3.5 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
