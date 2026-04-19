import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/content';

function TimelineDot({ index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="absolute left-6 top-8 hidden md:block">
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: "spring", bounce: 0.5, delay: index * 0.2 + 0.3 }}
        className="w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-surface-dark-2 relative"
      >
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
          className="absolute inset-0 rounded-full bg-indigo-500"
        />
      </motion.div>
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative md:pl-20"
    >
      <TimelineDot index={index} />

      <motion.div
        whileHover={{ y: -4, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.12)" }}
        className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-slate-700 transition-colors"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              {exp.title}
            </h4>
            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Briefcase size={14} />
                {exp.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {exp.location}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-sm font-mono text-indigo-500">
              <Calendar size={14} />
              {exp.period}
            </span>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              {exp.type}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
          {exp.description}
        </p>

        <ul className="space-y-3">
          {exp.bullets.map((bullet, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.3 + j * 0.07 }}
              className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4 + j * 0.07, type: "spring" }}
                className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"
              />
              {bullet}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-surface-dark-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">
            Experience
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Where I've Made{' '}
            <span className="gradient-text">Impact</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Static timeline track */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-slate-700 hidden md:block" />
          {/* Animated fill */}
          <motion.div
            style={{ height: timelineHeight }}
            className="absolute left-8 top-0 w-px bg-gradient-to-b from-indigo-500 to-cyan-400 hidden md:block origin-top"
          />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
