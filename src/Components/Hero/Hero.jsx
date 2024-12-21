import React, { useState } from 'react';
import './Hero.css';
import photo_ruban from '../../assets/photo_ruban.jpg';
import portfolio_cv from '../../assets/portfolio_cv.pdf';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram, FaCode } from 'react-icons/fa';

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleResumeClick = () => {
    setModalOpen(true); // Open the modal
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = portfolio_cv; // Use the imported resume file path
    link.download = 'Ruban_Sendhur_Resume.pdf';
    link.click();
  };

  const handleScroll = (id) => {
    if (id === 'share') {
      handleShare(); // Trigger sharing logic for the "Share" button
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <section id="home" className="hero-container">
      {/* Content */}
      <div id="Home" className="hero-content">
        {/* Left Section */}
        <div className="hero-details">
          <h1>
            <span>I'm Ruban,</span> Student at CIT
          </h1>
          <p>Pursuing Integrated Masters at Decision and Computing Sciences</p>
          <div className="hero-action">
            <a
              onClick={() => handleScroll('contact')}
              className="hero-connect"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
            >
              Connect With Me
            </a>
            <button
              className="hero-resume"
              onClick={handleScroll}
              aria-label="View and download my resume"
            >
              My Resume
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-photo">
          <img src={photo_ruban} alt="Ruban's Profile" loading="lazy" />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-icons">
        <a
          href="https://linkedin.com/in/ruban-sendhur-41a32b260/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Rubansendhur"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/probably_ruban"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a href="mailto:rubansendhur78409@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://leetcode.com/u/ruban015/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leetcode"
        >
          <FaCode />
        </a>
      </div>

      {/* Scroll Down */}
      <div className="scroll-down" aria-label="Scroll Down">
        Scroll Down ↓
      </div>

      {/* Resume Preview Modal */}
      {isModalOpen && (
        <div className="resume-modal">
          <div className="modal-content">
            <iframe
              src={portfolio_cv} // Correctly reference the PDF file
              title="Resume Preview"
              className="resume-preview"
              frameBorder="0"
            ></iframe>
            <div className="modal-actions">
              <button className="download-button" onClick={handleDownload}>
                Download
              </button>
              <button className="close-button" onClick={() => setModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
