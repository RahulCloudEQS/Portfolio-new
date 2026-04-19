import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Eye, FileText, Award, GraduationCap, Briefcase } from 'lucide-react';
import { personal } from '../data/content';

const resumeHighlights = [
  {
    icon: Briefcase,
    title: "2+ Years Experience",
    description: "Data Engineering at Cloud EQS (Data as a Service Company)",
  },
  {
    icon: Award,
    title: "Core Expertise",
    description: "Snowflake, dbt, Python, SQL, ETL/ELT Pipelines",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech — Guru Nanak Dev Engineering College",
  },
  {
    icon: FileText,
    title: "Impact Driven",
    description: "10M+ records daily, 35% cost reduction, 200+ dbt models",
  },
];

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 bg-white dark:bg-surface-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">
            Resume
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Professional{' '}
            <span className="gradient-text">Journey</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A snapshot of my career — download the full resume for detailed experience, projects, and certifications.
          </p>
        </motion.div>

        {/* Resume highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resumeHighlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.12,
                  type: "spring",
                  bounce: 0.3,
                }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.12)" }}
                className="p-5 rounded-2xl bg-gray-50 dark:bg-surface-dark-2 border border-gray-200 dark:border-slate-700 text-center transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="inline-flex p-3 rounded-xl bg-indigo-500/10 mb-3"
                >
                  <Icon size={22} className="text-indigo-500" />
                </motion.div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Resume card with preview & download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-cyan-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-cyan-500/10 border border-indigo-500/20 overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 animate-shimmer" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
              {/* Resume icon */}
              <motion.div
                animate={{ rotateY: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="shrink-0 w-20 h-24 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20"
              >
                <FileText size={36} className="text-white" />
              </motion.div>

              <div className="text-center sm:text-left flex-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  Rahul Choudhary — Resume
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Data Engineer &bull; Snowflake &bull; dbt &bull; Python
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={personal.resumeLink}
                    download
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(99, 102, 241, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold rounded-xl text-sm shadow-lg shadow-indigo-500/20"
                  >
                    <Download size={16} />
                    Download PDF
                  </motion.a>
                  <motion.a
                    href={personal.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border-2 border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-semibold rounded-xl text-sm hover:bg-indigo-500/10 transition-colors"
                  >
                    <Eye size={16} />
                    View Online
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
