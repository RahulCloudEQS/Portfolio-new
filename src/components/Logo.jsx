import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center gap-1.5 group"
    >
      {/* Animated data pipeline icon */}
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Outer ring */}
        <motion.circle
          cx="16"
          cy="16"
          r="14"
          stroke="url(#logoGrad)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Data flow lines */}
        <motion.path
          d="M8 16 L14 11 L14 14 L24 14 L24 18 L14 18 L14 21 Z"
          fill="url(#logoGrad)"
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />

        {/* Pulsing dot */}
        <motion.circle
          cx="24"
          cy="16"
          r="2.5"
          fill="#06b6d4"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold gradient-text tracking-tight">
          RAHUL
        </span>
        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 tracking-widest">
          DATA ENG
        </span>
      </div>
    </motion.a>
  );
}
