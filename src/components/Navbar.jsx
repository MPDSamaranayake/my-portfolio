import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <span className="gradient-text">Portfolio</span>
        </a>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" className={active === 'home' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className={active === 'projects' ? 'active' : ''} onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</a>

          <div className="social-links">
            <a href="https://github.com/MPDSamaranayake" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/prasad-samaranayake-7b461b2ba/" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
          </div>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
