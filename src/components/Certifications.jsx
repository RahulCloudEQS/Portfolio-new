import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Sparkles, Code2, Terminal, Database, Shield, Globe, Brain, FileCode, BarChart3, Award, Calendar, ExternalLink, BadgeCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { certifications } from '../data/content';

const iconMap = {
  ai: Sparkles,
  dbt: Code2,
  sql: Terminal,
  matillion: Database,
  ml: Brain,
  code: FileCode,
  web: Globe,
  analytics: BarChart3,
  leadership: Shield,
};

const categories = ["All", "AI & LLM", "Data Engineering", "Programming", "Web & Analytics", "Other"];

function CertCard({ cert, i }) {
  const Icon = iconMap[cert.icon] || Award;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, delay: i * 0.04, type: "spring", bounce: 0.2 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)" }}
      className="group relative p-5 rounded-2xl bg-gray-50 dark:bg-surface-dark-2 border border-gray-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors overflow-hidden"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className={`shrink-0 p-3 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg`}
          style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
        >
          <Icon size={20} className="text-white" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-snug">
            {cert.name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            {cert.issuer}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {cert.date && (
              <span className="inline-flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500">
                <Calendar size={10} />
                {cert.date}
              </span>
            )}
            {cert.credentialId && (
              <span className="inline-flex items-center gap-1 text-[11px] text-indigo-500 dark:text-indigo-400 font-mono">
                <ExternalLink size={10} />
                {cert.credentialId}
              </span>
            )}
          </div>
        </div>

        <div className="shrink-0 mt-1">
          <BadgeCheck size={18} className="text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-700/50">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
          {cert.category}
        </span>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredCerts = certifications.filter(c => c.featured);
  const allFiltered = activeCategory === "All"
    ? certifications
    : certifications.filter(c => c.category === activeCategory);

  return (
    <section className="py-24 bg-white dark:bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <Award size={14} className="text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Credentials</span>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Licenses &{' '}
            <span className="gradient-text">Certifications</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            {certifications.length} certifications across AI, data engineering, programming, and more.
          </p>
        </motion.div>

        {/* Featured certs (default view) */}
        {!showAll && (
          <>
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <AnimatePresence mode="popLayout">
                {featuredCerts.map((cert, i) => (
                  <CertCard key={cert.name} cert={cert} i={i} />
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <motion.button
                onClick={() => setShowAll(true)}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20"
              >
                View All {certifications.length} Certifications
                <ChevronDown size={16} />
              </motion.button>
            </motion.div>
          </>
        )}

        {/* All certs (expanded view) */}
        {showAll && (
          <>
            {/* Category tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {categories.map((cat) => {
                const count = cat === "All" ? certifications.length : certifications.filter(c => c.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20'
                        : 'bg-gray-100 dark:bg-surface-dark-2 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-500'
                    }`}
                  >
                    {cat}
                    <span className={`ml-1.5 text-xs ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </motion.div>

            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <AnimatePresence mode="popLayout">
                {allFiltered.map((cert, i) => (
                  <CertCard key={cert.name} cert={cert} i={i} />
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="text-center">
              <motion.button
                onClick={() => { setShowAll(false); setActiveCategory("All"); }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:bg-indigo-500/10 transition-colors"
              >
                Show Less
                <ChevronUp size={16} />
              </motion.button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
