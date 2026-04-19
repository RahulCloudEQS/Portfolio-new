import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { personal } from '../data/content';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: Mail,
      color: 'from-red-500 to-orange-500',
    },
    {
      label: 'LinkedIn',
      value: 'rahul-choudhary-linkedin',
      href: personal.linkedin,
      icon: FaLinkedinIn,
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'GitHub',
      value: 'rahulchoudhary-github',
      href: personal.github,
      icon: FaGithub,
      color: 'from-gray-600 to-gray-800',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">
            Contact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build Something{' '}
            <span className="gradient-text">Together</span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12">
            I'm always open to discussing data engineering challenges, new opportunities, or collaborations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-gray-50 dark:bg-surface-dark-2 border border-gray-200 dark:border-slate-700 card-hover text-center"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${link.color} mb-4`}>
                <link.icon size={24} className="text-white" style={{ width: 24, height: 24 }} />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {link.label}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
                {link.value}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
            </motion.a>
          ))}
        </div>

        <motion.a
          href={`mailto:${personal.email}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-10 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 text-lg"
        >
          <Mail size={20} />
          Say Hello
        </motion.a>
      </div>
    </section>
  );
}
