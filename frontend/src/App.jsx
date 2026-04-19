import React, { useEffect, useState, useRef } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import ApiPlayground from './components/ApiPlayground/ApiPlayground';
import Scene3D from './components/common/Scene3D';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollY, setScrollY] = useState(0);
  const appRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // GSAP Scroll Animations
    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="app-container" ref={appRef}>
      {/* 3D Core Layer */}
      <Scene3D scrollY={scrollY} />
      
      {/* Subtle Grain Overlay */}
      <div className="grain-overlay"></div>

      <main>
        <Hero />
        
        <div className="content-wrap">
          <div className="section-container">
            <About />
          </div>

          <div className="section-container">
            <Skills />
          </div>

          <div className="section-container">
            <Experience />
          </div>

          <div className="section-container">
            <Projects />
          </div>

          <div className="section-container">
            <Education />
          </div>

          <div className="section-container">
            <ApiPlayground />
          </div>
        </div>
      </main>

      <footer className="terminal-footer">
        <p>Douglas Rodrigues Braga — Digital Architecture // 2026</p>
      </footer>
    </div>
  );
}

export default App;
