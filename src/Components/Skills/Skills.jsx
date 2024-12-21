import React from "react";
import "./Skills.css";
import { FaDatabase, FaCode, FaLanguage } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const Skills = () => {
  const softwareSkills = [
    { name: "React", level: "Basic" },
    { name: "Angular", level: "Basic" },
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Basic" },
    { name: "JavaScript", level: "Basic" },
    { name: "Node.js", level: "Basic" },
    { name: "Flask", level: "Intermediate" },
  ];

  const dataSkills = [
    { name: "Machine Learning", level: "Intermediate" },
    { name: "Deep Learning", level: "Intermediate" },
    { name: "Pandas", level: "Intermediate" },
    { name: "Matplotlib", level: "Intermediate" },
    { name: "Power Bi", level: "Basic" },    
    { name: "NLP", level: "Basic" },
  ];

  const languageSkills = [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Fluent" },
  ];

  return (
    <div id="skills" className="skills-container">
      <div className="skills-header">
        <h1>
          <GiSkills /> Skills
        </h1>
        <p>My Expertise and Proficiencies</p>
      </div>
      <div className="skills-grid">
        {/* Software Skills */}
        <div className="skills-card">
          <h3>
            <FaCode /> Software Skills
          </h3>
          <ul>
            {softwareSkills.map((skill, index) => (
              <li key={index}>
                {skill.name} <span>({skill.level})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Data Skills */}
        <div className="skills-card">
          <h3>
            <FaDatabase /> Data Skills
          </h3>
          <ul>
            {dataSkills.map((skill, index) => (
              <li key={index}>
                {skill.name} <span>({skill.level})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="skills-card">
          <h3>
            <FaLanguage /> Languages
          </h3>
          <ul>
            {languageSkills.map((skill, index) => (
              <li key={index}>
                {skill.name} <span>({skill.level})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
