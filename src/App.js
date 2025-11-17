import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ResearchSection from './components/Research';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificationSection from './components/Certification';
import Education from './components/Education';

function App() {
  const [darkMode, setDarkMode] = useState(true);  // start in dark mode by default

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <CertificationSection />
          <ResearchSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
