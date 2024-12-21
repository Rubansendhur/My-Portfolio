import React, { useEffect, useState } from 'react';
import './About.css';
import about_me from '../../assets/about_me.jpg'; // Your photo
import { FaTasks, FaProjectDiagram } from 'react-icons/fa'; // Icons

const About = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Trigger animations on navigation
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, []); // Run every time the page/component is mounted

  // Function to handle scrolling to sections
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <div id="about-me" className="about-container" key={animationKey}>
      <div className="about">
        {/* Title Section */}
        <div className="about-title">
          <h1>About</h1>
          <p>My Introduction</p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Section: Photo */}
          <div className="about-photo">
            <img src={about_me} alt="About Me" />
          </div>

          {/* Right Section: Cards, Description, and Button */}
          <div className="about-info">
            {/* Achievement Cards */}
            <div className="about-achievements">
              {/* Roles and Responsibilities Card */}
              <div className="achievement-card">
                <FaTasks className="card-icon" />
                <h3>Roles and Responsibilities</h3>
                <ul>
                  <li>Internship Coordinator 2025 - 2026</li>
                  <li>Treasurer at Datalytics 2024 - 2025</li>
                  <li>Joint Secretary at Datalytics 2023 - 2024</li>
                  <li>Logistics Coordinator at 403 Starts 2023 - 2024</li>
                  <li>Executive Director at PhotoClub of CIT 2023 - 2024</li>
                </ul>
                <button className="card-button" onClick={() => handleScroll('roles')}>View</button>
                
              </div>

              {/* Projects Card */}
              <div className="achievement-card">
                <FaProjectDiagram className="card-icon" />
                <h3>Projects</h3>
                <p>
                  Successfully completed over 10+ mini projects, gaining hands-on experience in diverse technologies. These projects have honed my technical skills and problem-solving abilities, enabling me to create impactful and innovative applications.
                </p>
                <button className="card-button" onClick={() => handleScroll('projects')}>Explore Projects</button>
              </div>
            </div>

            {/* Description */}
            <div className="about-details">
              <p>
                I am a motivated MSc student specializing in Decision and Computing Sciences, currently pursuing my integrated masters at Coimbatore Institute of Technology.
                I am passionate about developing real-world solutions using innovative approaches and leveraging AI-driven technologies to solve challenging problems.
              </p>
            </div>

            {/* View Skills Button */}
            <div className="about-action">
              <button
                className="download-button"
                onClick={() => handleScroll('qualifications')} // Scroll to the Qualifications section
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
