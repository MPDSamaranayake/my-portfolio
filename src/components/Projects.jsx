import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Nexus Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization, dark mode support, and seamless responsiveness.',
    tags: ['React', 'D3.js', 'Vite', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Lumina E-Commerce',
    description: 'A modern e-commerce platform featuring dynamic cart management, smooth animations, and a beautiful product showcase.',
    tags: ['Next.js', 'Framer Motion', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Aura Task Manager',
    description: 'An elegant productivity app that helps teams organize projects with drag-and-drop boards and real-time sync.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    liveLink: '#',
    githubLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Some of my recent work that showcases my passion for building beautiful web applications.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="icon-link" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubLink} className="icon-link" aria-label="Source Code">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
