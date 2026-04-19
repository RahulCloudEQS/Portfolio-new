import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, BookOpen, Wrench, Award } from 'lucide-react';
import { workingOn } from '../data/content';

const statusConfig = {
  Learning: { icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  Exploring: { icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  Building: { icon: Wrench, color: 'text-green-500', bg: 'bg-green-500/10' },
  'In Progress': { icon: Award, color: 'text-amber-500', bg: 'bg-amber-500/10' },
};

export default function WorkingOn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gray-50 dark:bg-surface-dark-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">
            Currently
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            What I'm{' '}
            <span className="gradient-text">Working On</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workingOn.map((item, i) => {
            const config = statusConfig[item.status] || statusConfig.Learning;
            const Icon = config.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-slate-700 card-hover"
              >
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${config.color} ${config.bg} mb-4`}>
                  <Icon size={12} />
                  {item.status}
                </div>
                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
