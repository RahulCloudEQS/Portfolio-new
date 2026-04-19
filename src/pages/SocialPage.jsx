import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import LinkedInPosts from '../components/LinkedInPosts';
import Blog from '../components/Blog';

export default function SocialPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Back to home button */}
      <div className="pt-24 pb-4 bg-white dark:bg-surface-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Page header */}
      <div className="pb-8 bg-white dark:bg-surface-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Social &{' '}
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              My LinkedIn updates, featured posts, and personal blog — the story behind the code.
            </p>
          </motion.div>
        </div>
      </div>

      <LinkedInPosts />
      <Blog />
    </>
  );
}
