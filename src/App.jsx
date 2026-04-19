import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CursorGradient from './components/CursorGradient';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import SocialPage from './pages/SocialPage';
import useKonamiCode from './hooks/useKonamiCode';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useKonamiCode();

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />

      {loaded && (
        <div className="min-h-screen bg-white dark:bg-surface-dark text-gray-900 dark:text-gray-100">
          <ScrollProgress />
          <CursorGradient />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/social" element={<SocialPage />} />
          </Routes>
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}
