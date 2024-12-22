import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentMonth = new Date().toLocaleString("default", { month: "long", year: "numeric" });

  // Smooth scrolling to specific sections
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <footer className="footer-container">
      {/* Name Section */}
      <div className="footer-name">
        <h2>Ruban Sendhur</h2>
      </div>

      {/* Navigation Links */}
      <div className="footer-links">
        <ul>
          <li><button onClick={() => handleScroll("header")}>Home</button></li>
          <li><button onClick={() => handleScroll("about-me")}>About</button></li>
          <li><button onClick={() => handleScroll("projects")}>Projects</button></li>
          <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
          <li><button onClick={() => handleScroll("skills")}>Skills</button></li>
          <li><button onClick={() => handleScroll("certifications")}>Certifications</button></li>
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
