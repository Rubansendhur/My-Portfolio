import React from 'react';
import './Roles.css';
import { FaChalkboardTeacher, FaMoneyBillWave, FaUsers, FaTasks, FaCameraRetro } from 'react-icons/fa';

const rolesData = [
  {
    title: "Internship Coordinator",
    year: "2025 - 2026",
    description: "Led internship coordination for my department.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Treasurer at Datalytics",
    year: "2024 - 2025",
    description: "Managed finances and budget for Datalytics Club.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Joint Secretary at Datalytics",
    year: "2023 - 2024",
    description: "Oversaw club activities and organized events.",
    icon: <FaUsers />,
  },
  {
    title: "Logistics Coordinator at 403 Starts",
    year: "2023 - 2024",
    description: "Handled logistics and ensured smooth event operations.",
    icon: <FaTasks />,
  },
  {
    title: "Executive Director at PhotoClub of CIT",
    year: "2023 - 2024",
    description: "Directed photography projects and club activities.",
    icon: <FaCameraRetro />,
  },
];

const Roles = () => {
  return (
    <div id='roles' className="roles-container">
      <div className="roles-header">
        <h1>Roles and Responsibilities</h1>
        <p>My Leadership and Organizational Contributions</p>
      </div>
      <div className="roles-grid">
        {rolesData.map((role, index) => (
          <div key={index} className="role-card">
            <div className="role-icon">{role.icon}</div>
            <h3>{role.title}</h3>
            <p className="role-year">{role.year}</p>
            <p className="role-description">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;
