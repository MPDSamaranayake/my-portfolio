import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo gradient-text">Portfolio</span>
            <p className="footer-desc">
              Building digital products, brands, and experience.
            </p>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Github"><FaGithub size={20} /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
            <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter size={20} /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
