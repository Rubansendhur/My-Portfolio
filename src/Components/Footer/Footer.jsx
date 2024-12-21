import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentMonth = new Date().toLocaleString("default", { month: "long", year: "numeric" });

  return (
    <footer className="footer-container">
      {/* Name Section */}
      <div className="footer-name">
        <h2>Ruban Sendhur</h2>
      </div>

      {/* Navigation Links */}
      <div className="footer-links">
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
      </div>

      {/* Acknowledgment Section */}
      <div className="footer-info">
        <p>Designed and Developed by <strong>Ruban Sendhur</strong></p>
        <p>Last updated: {currentMonth}</p>
      </div>
    </footer>
  );
};

export default Footer;
