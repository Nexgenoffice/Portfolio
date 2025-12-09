import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingObjects from './components/FloatingObjects';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import EngineeringCourse from './pages/EngineeringCourse';
import CivicEngagement from './pages/CivicEngagement';
import InternationalMobility from './pages/InternationalMobility';
import CareerProjects from './pages/CareerProjects';
import Interests from './pages/Interests';
import './App.css';
import 'lenis/dist/lenis.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.35,
      smoothTouch: false,
      touchMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <FloatingObjects />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineering" element={<EngineeringCourse />} />
          <Route path="/civic" element={<CivicEngagement />} />
          <Route path="/mobility" element={<InternationalMobility />} />
          <Route path="/career" element={<CareerProjects />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
