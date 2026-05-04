import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import heroImage from '../assets/hero.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-kicker delay-100">Hello I&apos;M </p>

          <h1 className="hero-title delay-200">
            Prasad <span className="hero-accent">Samaranayake.</span>
          </h1>

          <p className="hero-description delay-300">
            Software Engineering Undergraduate at Sabaragamuwa University of Sri Lanka, passionate about building scalable web applications and solving real-world problems through code. I enjoy working with modern technologies and continuously improving my skills in full-stack development.
          </p>

          <div className="hero-socials delay-300" aria-label="Social links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/prasad-samaranayake-7b461b2ba/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-200" aria-hidden="true">
          <div className="hero-ring"></div>
          <div className="hero-circle"></div>
          <img src={heroImage} alt="" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
