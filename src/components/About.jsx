import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { icon: <Code size={24} />, title: 'Frontend Development', desc: 'Expert in React, Vue, and modern JavaScript ecosystems.' },
    { icon: <Palette size={24} />, title: 'UI/UX Design', desc: 'Crafting intuitive and beautiful user interfaces with attention to detail.' },
    { icon: <Zap size={24} />, title: 'Performance Optimization', desc: 'Building lightning-fast applications with smooth animations.' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content glass-panel animate-fade-in">
            <p className="about-kicker">About Me</p>
            <h2 className="about-title">
              Building modern interfaces with a hero-style visual identity.
            </h2>
            <p className="about-text">
              I am a Software Engineering undergraduate at Sabaragamuwa University of Sri Lanka,
              passionate about creating scalable web applications and solving real-world problems
              through code.
            </p>
            <p className="about-text">
              My approach blends strong engineering fundamentals with a clean, polished visual
              style, so every project feels both functional and memorable.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <h4 className="stat-number gradient-text">3+</h4>
                <p className="stat-label">Core Technologies</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number gradient-text">10+</h4>
                <p className="stat-label">Projects Built</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number gradient-text">100%</h4>
                <p className="stat-label">Passion for Growth</p>
              </div>
            </div>

            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card glass-panel">
                  <div className="skill-icon">{skill.icon}</div>
                  <div>
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
