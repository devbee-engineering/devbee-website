import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

const navOrder = [
  '/',
  '/about',
  '/services',
  '/expertise',
  '/blog',
  '/contact',
];

function AnimatedPage({ children, direction }) {
  const slideVariants = {
    hidden: direction === 'right' ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    exit: direction === 'right' ? { opacity: 0, x: -80, transition: { duration: 0.4, ease: 'easeInOut' } } : { opacity: 0, x: 80, transition: { duration: 0.4, ease: 'easeInOut' } },
  };
  return (
    <motion.div
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
}

function ScrollFadeIn({ children }: { children: React.ReactNode }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } } : {}}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [direction, setDirection] = useState('right');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prevIdx = navOrder.indexOf(prevPath.current);
    const currIdx = navOrder.indexOf(location.pathname);
    if (currIdx > prevIdx) setDirection('right');
    else setDirection('left');
    prevPath.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Loader />
      {!loading && (
        <>
          <ScrollToTop />
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AnimatedPage direction={direction}><Home /></AnimatedPage>} />
                <Route path="/about" element={<AnimatedPage direction={direction}><About /></AnimatedPage>} />
                <Route path="/services" element={<AnimatedPage direction={direction}><Services /></AnimatedPage>} />
                <Route path="/expertise" element={<AnimatedPage direction={direction}><Expertise /></AnimatedPage>} />
                <Route path="/contact" element={<AnimatedPage direction={direction}><Contact /></AnimatedPage>} />
                <Route path="/terms" element={<AnimatedPage direction={direction}><Terms /></AnimatedPage>} />
                <Route path="/privacy" element={<AnimatedPage direction={direction}><Privacy /></AnimatedPage>} />
                <Route path="/blog" element={<AnimatedPage direction={direction}><BlogList /></AnimatedPage>} />
                <Route path="/blog/:slug" element={<AnimatedPage direction={direction}><BlogDetail /></AnimatedPage>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
// Example usage: Wrap major sections in each page with <ScrollFadeIn>...</ScrollFadeIn>
