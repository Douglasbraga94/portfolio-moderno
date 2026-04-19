import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-arch">
      <div className="hero-top-bar">
        <span className="hero-status">AVAILABLE_FOR_PROJECTS_2026</span>
        <div className="line-sep"></div>
      </div>
      
      <div className="hero-main-wrap">
        <div 
          className="hero-lettering"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          DOUGLAS BRAGA
        </div>
        
        <div className="hero-info-box">
          <h1 className="hero-title">
            SOLUTIONS <br />
            <span className="indent-text">ARCHITECT</span>
          </h1>
          
          <div className="hero-cta-wrap">
            <p className="hero-tagline">
              Construindo sistemas robustos com precisão técnica e design intencional. 
              Especialista em Java, Node.js e ecossistemas frontend modernos.
            </p>
            <div className="hero-actions">
              <a href="#about" className="btn-primary-arch">EXPLORE_WORK</a>
              <a href="mailto:dougbraga00@hotmail.com" className="btn-secondary-arch">CONTACT_ME</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-label">SCROLL_TO_DISCOVER</span>
      </div>
    </section>
  );
};

export default Hero;
