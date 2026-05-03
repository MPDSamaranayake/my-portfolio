import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card glass-panel">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h4 className="info-title">Email</h4>
                <p className="info-desc">hello@portfolio.com</p>
              </div>
            </div>
            
            <div className="info-card glass-panel">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4 className="info-title">Location</h4>
                <p className="info-desc">San Francisco, CA</p>
              </div>
            </div>

            <div className="info-card glass-panel">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <h4 className="info-title">Phone</h4>
                <p className="info-desc">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <form className="contact-form glass-panel" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Project Inquiry" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
