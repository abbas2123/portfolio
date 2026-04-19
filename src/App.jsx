import React, { useState, useEffect } from 'react';
import portfolioData from './portfolio.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navbar personal={portfolioData.personal} />
          <main>
            <Hero personal={portfolioData.personal} />
            <About personal={portfolioData.personal} education={portfolioData.education} />
            <Skills skills={portfolioData.skills} />
            <Projects projects={portfolioData.projects} />
          </main>
          <Contact personal={portfolioData.personal} />
        </>
      )}
    </div>
  );
}

export default App;
