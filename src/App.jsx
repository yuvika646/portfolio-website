import React, { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Education from './components/Education';
import Contact from './components/Contact';
import Background from './components/Background';
import { useClickSound } from './hooks/useClickSound';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  
  useClickSound();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <Background />
      {!isMobile && <CustomCursor />}
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Stats />
        <Education />
      </main>
      <Contact />
    </>
  );
}

export default App;
