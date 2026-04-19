import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/content';

function SkillBar({ name, level, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2 group">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition-colors">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.8 }}
          className="text-xs font-mono text-indigo-500"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: [0, 1, 0] } : {}}
            transition={{ delay: delay + 0.5, duration: 1.5, repeat: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">
            Skills
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Technical{' '}
            <span className="gradient-text">Arsenal</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.2, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.12)" }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-surface-dark-2 border border-gray-200 dark:border-slate-700 transition-colors"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <motion.span
                  animate={isInView ? { height: [0, 24] } : {}}
                  transition={{ delay: catIdx * 0.2 + 0.3, duration: 0.5 }}
                  className="w-2 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-400"
                />
                {category}
              </h4>
              <div className="space-y-4">
                {items.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.3 + catIdx * 0.15 + i * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
