import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { personal, navLinks } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 dark:bg-surface-dark-2 border-t border-gray-200 dark:border-slate-700">
      {/* Wave separator */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-10 text-gray-50 dark:text-surface-dark-2">
          <path d="M0,40 C300,0 400,35 600,20 C800,5 900,35 1200,10 L1200,40 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-3">Rahul Choudhary</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Data Engineer building scalable pipelines and analytics infrastructure at enterprise scale.
            </p>
            <div className="flex gap-3">
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-lg bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-indigo-500 hover:text-white transition-colors"
              >
                <FaLinkedinIn size={16} />
              </motion.a>
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-lg bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-indigo-500 hover:text-white transition-colors"
              >
                <FaGithub size={16} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.href.slice(1));
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Interested in working together? Let's connect.
            </p>
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/20"
            >
              Say Hello
              <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {currentYear} Rahul Choudhary. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
            Designed & Built with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={12} className="text-red-500" />
            </motion.span>
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
