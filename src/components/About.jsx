import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Snowflake, Code2, Zap, Shield, BarChart3 } from 'lucide-react';
import { about } from '../data/content';

const iconMap = {
  pipeline: Database,
  snowflake: Snowflake,
  dbt: Code2,
  automation: Zap,
  quality: Shield,
  analytics: BarChart3,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-surface-dark-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">
            About Me
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Turning Raw Data Into{' '}
            <span className="gradient-text">Business Impact</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {about.summary}
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-3"
            >
              {about.highlights.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                  <motion.span
                    className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0"
                    animate={isInView ? { scale: [0, 1.5, 1] } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {about.strengths.map((strength, i) => {
              const Icon = iconMap[strength.icon] || Database;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)",
                  }}
                  className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-slate-700 transition-colors"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-lg bg-indigo-500/10"
                  >
                    <Icon size={24} className="text-indigo-500" />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {strength.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
