import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PenLine, ArrowUpRight, BookOpen, Quote } from 'lucide-react';
import { personal } from '../data/content';

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white dark:bg-surface-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6"
          >
            <PenLine size={14} className="text-rose-500" />
            <span className="text-sm font-medium text-rose-600 dark:text-rose-400">Blog</span>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Beyond{' '}
            <span className="gradient-text">Code</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            When I'm not building pipelines, I write. Reflections, stories, and thoughts — one word at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.a
            href={personal.blog}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, boxShadow: "0 30px 60px rgba(244, 63, 94, 0.12)" }}
            className="block group relative rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-rose-400 dark:hover:border-rose-500/50 transition-colors"
          >
            {/* Gradient banner */}
            <div className="relative h-48 sm:h-56 bg-gradient-to-br from-rose-500 via-pink-500 to-orange-400 overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 p-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20"
              >
                <BookOpen size={28} className="text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-8 p-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20"
              >
                <Quote size={22} className="text-white" />
              </motion.div>

              {/* Blog name */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <motion.h4
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight"
                >
                  Wandering in Words
                </motion.h4>
                <p className="text-white/70 text-sm font-medium">A Personal Blog</p>
              </div>

              {/* Visit arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-8 bg-white dark:bg-surface-dark">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-rose-500 transition-colors">
                    wanderinginwords.onrender.com
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                    A creative space where I share reflections, experiences, and stories beyond the world of data and engineering.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-rose-500/20"
                >
                  Visit Blog
                  <ArrowUpRight size={14} />
                </motion.div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
