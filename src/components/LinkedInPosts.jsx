import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import { personal } from '../data/content';

export default function LinkedInPosts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gray-50 dark:bg-surface-dark-2">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <FaLinkedinIn size={14} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">LinkedIn</span>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{' '}
            <span className="gradient-text">Post</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Thoughts, wins, and learnings from my data engineering journey.
          </p>
        </motion.div>

        {/* Single featured post — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl shadow-blue-500/5 bg-white dark:bg-surface-dark">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
            <div className="p-2">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7403675101407473664"
                height="680"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="Featured LinkedIn post"
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/20"
          >
            <FaLinkedinIn size={16} />
            View All Posts on LinkedIn
            <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
