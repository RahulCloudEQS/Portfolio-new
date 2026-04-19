import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            onComplete?.();
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-dark"
        >
          {/* Animated rings */}
          <div className="relative w-32 h-32 mb-8">
            <motion.svg
              viewBox="0 0 120 120"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="preloaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              {/* Outer ring */}
              <motion.circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#preloaderGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, rotate: 0 }}
                animate={{ pathLength: 1, rotate: 360 }}
                transition={{ pathLength: { duration: 2, ease: "easeInOut" }, rotate: { duration: 3, repeat: Infinity, ease: "linear" } }}
                style={{ transformOrigin: "center" }}
              />

              {/* Inner ring */}
              <motion.circle
                cx="60"
                cy="60"
                r="40"
                fill="none"
                stroke="#6366f1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="8 4"
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center" }}
                opacity={0.4}
              />

              {/* Data flow arrow */}
              <motion.path
                d="M40 60 L55 48 L55 54 L80 54 L80 66 L55 66 L55 72 Z"
                fill="url(#preloaderGrad)"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                style={{ transformOrigin: "center" }}
              />

              {/* Pulsing dot */}
              <motion.circle
                cx="80"
                cy="60"
                r="4"
                fill="#06b6d4"
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.svg>
          </div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold gradient-text mb-1">Rahul Choudhary</h2>
            <p className="text-sm font-mono text-gray-500"> AI / Data Engineer</p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs font-mono text-gray-600 mt-3"
          >
            Initializing pipeline...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
