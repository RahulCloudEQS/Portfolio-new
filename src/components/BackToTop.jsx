import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    setLaunching(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setLaunching(false), 1000);
    }, 300);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow"
          aria-label="Back to top"
        >
          <motion.div
            animate={launching ? { y: -60, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Rocket size={20} className="-rotate-45" />
          </motion.div>

          {/* Trail particles */}
          <AnimatePresence>
            {launching && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    animate={{
                      opacity: 0,
                      y: 30 + i * 10,
                      x: (i % 2 === 0 ? 1 : -1) * (5 + i * 3),
                      scale: 0,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-orange-400"
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
