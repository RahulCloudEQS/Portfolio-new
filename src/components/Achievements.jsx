import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { achievements } from '../data/content';

function AnimatedCounter({ target, isInView }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = target.match(/^([\d.]+)/);
    if (!numericMatch) {
      setDisplay(target);
      return;
    }

    const numericPart = parseFloat(numericMatch[1]);
    const suffix = target.slice(numericMatch[1].length);
    const isFloat = target.includes('.');

    const controls = animate(0, numericPart, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay((isFloat ? v.toFixed(1) : Math.floor(v)) + suffix);
      },
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span className="text-4xl sm:text-5xl font-bold gradient-text text-glow">
      {display}
    </span>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 bg-gray-50 dark:bg-surface-dark-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">
            Achievements
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Impact by the{' '}
            <span className="gradient-text">Numbers</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 25px 50px rgba(99, 102, 241, 0.2)",
              }}
              className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-slate-700 text-center group overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-b-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : {}}
                transition={{ delay: i * 0.12 + 0.5, duration: 0.4 }}
              />
              <AnimatedCounter target={item.metric} isInView={isInView} />
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 mb-1">
                {item.label}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
