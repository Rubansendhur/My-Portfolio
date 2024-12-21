import React, { useState } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

const projectData = {
    Web: [
      { title: "Datalytics Website", description: "Official website for Datalytics Club Of CIT.", tech: ["MEAN STACK"] },
      { title: "Blog Website", description: "A blogging platform.", tech: ["MERN STACK"] },
      { title: "Portfolio Website", description: "This portfolio website.", tech: ["React", "Tailwind"] },
    ],
    "Mini Projects": [
      { title: "Legal Connect Hub", description: "A legal management system.", tech: ["Java", "Java-Swing"] },
      { title: "Hotel Management", description: "A hotel reservation system.", tech: ["C"] },
      { title: "Traffic Analysis", description: "Traffic data analysis tool.", tech: ["Pandas", "Matplotlib", "Python"] },
      { title: "Student Counselling Management", description: "A system utilizing DSA concepts for student counselling management.", tech: ["Python", "Data Structures"] },
      { title: "Graphora Digital Marketing", description: "Social media marketing insights and brand building.", tech: ["Instagram Insights", "Facebook Ads", "Analytics"] },
    ],
    Hackathons: [
      { title: "Code O'Clock", description: "Hackathon project.", tech: ["Flask", "JavaScript", "SQLite"] },
      { title: "Datathon (1st Place)", description: "Data analysis competition.", tech: ["Python", "Machine Learning", "Kaggle Notebook", "Colab"] },
    ],
    AI: [
      { title: "NLP Sentiment Analysis", description: "Sentiment analysis using NLP.", tech: ["Python", "NLTK", "Streamlit"] },
      { title: "SII Index Prediction", description: "Stock prediction model.", tech: ["Python", "Machine Learning", "Pandas"] },
      { title: "Parkinson's Disease Prediction", description: "Predicting Parkinson's Disease using ML.", tech: ["Python", "Scikit-learn", "Streamlit"] },
    ],
    "PIP Packages": [
      { title: "NLP Preprocess", description: "Python library for NLP preprocessing.", tech: ["Python", "PIP", "NLP"] },
    ],
  };
  

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Mini Projects");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const visibleProjects = projectData[activeTab].slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const totalPages = Math.ceil(projectData[activeTab].length / itemsPerPage);

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <div id='projects' className="qualifications-container">
      <div className="qualifications-header">
        <h1>Works</h1>
        <p>All Projects</p>
      </div>
    <div className="tabs-container">
      <div className="tabs-header">
        {Object.keys(projectData).map((category) => (
          <button
            key={category}
            className={`tab-button ${activeTab === category ? "active" : ""}`}
            onClick={() => {
              setActiveTab(category);
              setCurrentPage(0); // Reset to the first page when switching tabs
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="github-button">
                <FaGithub /> View on GitHub
              </button>
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="dot-navigation">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentPage ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="view-all-button-container">
        <a
          href="https://github.com/Rubansendhur?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="view-all-button">View All My Projects</button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Projects;
