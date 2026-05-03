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
          <div className="about-content glass-panel">
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <p className="about-text">
              I am a passionate software engineer dedicated to building high-performance web applications. 
              With over 5 years of experience in the industry, I have honed my skills in creating 
              elegant, user-centric solutions that solve complex problems.
            </p>
            <p className="about-text">
              My approach blends technical expertise with a keen eye for design, ensuring that every 
              project not only functions flawlessly but also provides an exceptional user experience.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <h4 className="stat-number gradient-text">5+</h4>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number gradient-text">50+</h4>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number gradient-text">20+</h4>
                <p className="stat-label">Happy Clients</p>
              </div>
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
    </section>
  );
};

export default About;
