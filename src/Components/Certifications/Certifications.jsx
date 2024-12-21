import React from "react";
import "./Certifications.css";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Analytics with Python - NPTEL",
      date: "March 2023",
      link: "https://drive.google.com/file/d/1U5bi8PYQi1H6pT5NT0l__zHZI9_1hVSe/view?usp=drive_link",
      logo: "https://images.app.goo.gl/7NpXYeVkQjipFp4RA", // Add actual logo link
    },
    {
      title: "Introduction to Web Development (HTML, CSS, JavaScript) - Coursera",
      date: "February 2023",
      link: "https://drive.google.com/file/d/1U5bi8PYQi1H6pT5NT0l__zHZI9_1hVSe/view?usp=drive_link",
      logo: "data:image/jpeg;base64,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", // Add actual logo link
    },
    {
      title: "CCIO (Cyber Crime Investigation Officer) - ISAC",
      date: "July 2023",
      link: "https://drive.google.com/file/d/1712cM1VveB4KX6t8eLmfYYxECJNUvEuZ/view?usp=drive_link",
      logo: "https://www.google.com/imgres?q=ccio%20logo&imgurl=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F25d37e_9b4af5b179794d80b3c876c4995d92a5~mv2.png&imgrefurl=https%3A%2F%2Fwww.cciointelligence.org%2F&docid=bKStSACl0HoQMM&tbnid=3bxDOvsGg6_nLM&vet=12ahUKEwjO2rGOsLiKAxUy_aACHW8qKO0QM3oECBYQAA..i&w=2048&h=2048&hcb=2&ved=2ahUKEwjO2rGOsLiKAxUy_aACHW8qKO0QM3oECBYQAA", // Add actual logo link
}];

  return (
    <div id="certifications" className="certifications-container">
      <div className="certifications-header">
        <h1>Certifications</h1>
        <p>My Professional Credentials</p>
      </div>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img
              src={cert.logo}
              alt={cert.title}
              className="certification-logo"
            />
            <div className="certification-content">
              <h3>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.title}
                </a>
              </h3>
              <p className="certification-date">{cert.date}</p>
            </div>
            <div className="certification-icon">
              <FaCertificate />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
