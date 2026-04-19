import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { techCloud } from '../data/content';

export default function TechCloud() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = ['Snowflake', 'dbt', 'Python', 'SQL', 'Apache Airflow', 'Matillion'];

  const techSizes = useMemo(() => {
    const sizes = ['text-xs', 'text-sm', 'text-base'];
    return techCloud.map((tech) => {
      if (highlights.includes(tech)) return 'text-lg';
      return sizes[Math.floor(Math.random() * 3)];
    });
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">
            Tech Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Tools I{' '}
            <span className="gradient-text">Work With</span>
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {techCloud.map((tech, i) => {
            const isHighlight = highlights.includes(tech);

            return (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.05 + i * 0.04,
                  type: "spring",
                  bounce: 0.5,
                }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: isHighlight
                    ? "0 10px 30px rgba(99, 102, 241, 0.3)"
                    : "0 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.9 }}
                className={`
                  ${techSizes[i]}
                  px-4 py-2 rounded-full font-medium cursor-default transition-colors
                  ${isHighlight
                    ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-500/30 font-semibold'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-700'
                  }
                `}
              >
                {tech}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
