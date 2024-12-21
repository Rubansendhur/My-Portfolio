import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1>Stay Connected</h1>
      <p>Get in Touch</p>
      
      <div className="contact-links">
        {/* Email */}
        <a href="rubansendhur78409@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-card">
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/ruban-sendhur-41a32b260/" target="_blank" rel="noopener noreferrer" className="contact-card">
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/probably_ruban" target="_blank" rel="noopener noreferrer" className="contact-card">
          <FaInstagram className="contact-icon" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
