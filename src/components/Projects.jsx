import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { Code2, Snowflake, Wind, Globe, X, TrendingUp, Layers, Zap, ArrowRight, ExternalLink, Target, Lightbulb, BarChart3 } from 'lucide-react';
import { projects } from '../data/content';

const iconMap = {
  dbt: Code2,
  snowflake: Snowflake,
  airflow: Wind,
  selenium: Globe,
};

const gradients = [
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-cyan-500 via-blue-500 to-indigo-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
  'from-amber-500 via-orange-500 to-red-500',
];

const glowColors = [
  'rgba(99, 102, 241, 0.15)',
  'rgba(6, 182, 212, 0.15)',
  'rgba(16, 185, 129, 0.15)',
  'rgba(245, 158, 11, 0.15)',
];

function useTilt() {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
    const spotlight = el.querySelector('.card-spotlight');
    if (spotlight) {
      spotlight.style.opacity = '1';
      spotlight.style.background = `radial-gradient(600px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(99,102,241,0.08), transparent 40%)`;
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
    const spotlight = el.querySelector('.card-spotlight');
    if (spotlight) spotlight.style.opacity = '0';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

function ProjectCard({ project, index, onOpen }) {
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { once: true, margin: "-80px" });
  const tilt = useTilt();
  const Icon = iconMap[project.icon] || Code2;
  const gradient = gradients[index % gradients.length];
  const glow = glowColors[index % glowColors.length];

  return (
    <motion.div
      ref={viewRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        onClick={() => onOpen(index)}
        className="group relative rounded-2xl overflow-hidden cursor-pointer"
        style={{ transition: 'transform 0.15s ease-out, box-shadow 0.4s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 30px 60px ${glow}, 0 0 0 1px rgba(99,102,241,0.1)`; }}
        onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>

        <div className="relative bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-slate-700 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
          {/* Mouse spotlight */}
          <div className="card-spotlight absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none z-0" />

          {/* Gradient banner */}
          <div className={`relative h-32 bg-gradient-to-br ${gradient} overflow-hidden`}>
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            {/* Floating icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-6 -translate-y-1/2"
            >
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                <Icon size={32} className="text-white" />
              </div>
            </motion.div>

            {/* Project number */}
            <div className="absolute top-4 right-5 text-white/30 font-bold text-5xl font-mono">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Arrow indicator */}
            <div className="absolute bottom-4 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <div className="flex items-center gap-1 text-white/80 text-xs font-medium">
                View Details
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h4>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 line-clamp-2 leading-relaxed">
              {project.problem}
            </p>

            {/* Impact highlight */}
            <div className="flex items-start gap-2 mb-5 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10">
              <TrendingUp size={16} className="text-indigo-500 mt-0.5 shrink-0" />
              <p className="text-xs font-medium text-indigo-700 dark:text-indigo-300 leading-relaxed">
                {project.impact}
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.4 + i * 0.05 }}
                  className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-500 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, index, onClose }) {
  const Icon = iconMap[project.icon] || Code2;
  const gradient = gradients[(index || 0) % gradients.length];

  const metrics = project.impact.split(',').map(m => m.trim());

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 40 }}
        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-surface-dark shadow-2xl"
      >
        {/* Hero banner */}
        <div className={`relative h-44 bg-gradient-to-br ${gradient} overflow-hidden`}>
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute bottom-6 left-8 flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
              <Icon size={36} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-md bg-white/20 text-white border border-white/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors border border-white/30"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-8">
          {/* Architecture flow */}
          <div className="mb-8 p-5 rounded-2xl bg-gray-50 dark:bg-surface-dark-2 border border-gray-200 dark:border-slate-700">
            <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-4 text-center">Data Architecture</p>
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              {[
                { icon: Layers, label: "Sources", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                { icon: Zap, label: "Transform", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
                { icon: Snowflake, label: "Warehouse", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                { icon: TrendingUp, label: "Insights", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center`}>
                      <step.icon size={20} className={step.color} />
                    </div>
                    <span className="text-[10px] font-medium text-gray-400">{step.label}</span>
                  </motion.div>
                  {i < 3 && (
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                      className="text-gray-300 dark:text-slate-600 text-lg mb-5"
                    >
                      →
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Three columns */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-surface-dark-2 border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-amber-500/10">
                  <Target size={14} className="text-amber-500" />
                </div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500">Challenge</h5>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.problem}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-surface-dark-2 border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-emerald-500/10">
                  <Lightbulb size={14} className="text-emerald-500" />
                </div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500">Solution</h5>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.solution}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-surface-dark-2 border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10">
                  <BarChart3 size={14} className="text-indigo-500" />
                </div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500">Impact</h5>
              </div>
              <div className="space-y-2">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{metric}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-surface-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <Code2 size={14} className="text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Portfolio</span>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{' '}
            <span className="gradient-text">Work</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            End-to-end data engineering solutions designed to solve real business challenges at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} onOpen={setOpenProject} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openProject !== null && (
          <ProjectModal
            project={projects[openProject]}
            index={openProject}
            onClose={() => setOpenProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
