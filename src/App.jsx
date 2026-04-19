import React from 'react';
import portfolioData from './portfolio.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar personal={portfolioData.personal} />
      <main>
        <Hero personal={portfolioData.personal} />
        <About personal={portfolioData.personal} education={portfolioData.education} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
      </main>
      <Contact personal={portfolioData.personal} />
    </div>
  );
}

export default App;
