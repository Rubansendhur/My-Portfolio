import React from 'react';
import './Qualifications.css';
import { FaSchool, FaUniversity } from 'react-icons/fa';

const Qualifications = () => {
  return (
    <div  className="qualifications-container">
      <div id ='qualifications' className="qualifications-header">
        <h1>Qualifications</h1>
        <p>My academic journey</p>
      </div>
      <div className="qualifications-content">
        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-node" style={{ top: '30%' }}>
            <div className="timeline-label-left">  </div>
          </div>
          <div className="timeline-node" style={{ top: '70%' }}>
            <div className="timeline-label-right"></div>
          </div>
        </div>

        {/* Left - School */}
        <div className="qualification-card school">
          <div className="icon">
            <FaSchool />
          </div>
          <div className="details">
            <h3>Southside Matriculation Higher Secondary School</h3>
            <h5>SSLC & Higher Secondary</h5>
            <p><strong>Years:</strong> 2020-2022</p>
            <p><strong>Score:</strong> 87%</p>
          </div>
        </div>

        {/* Right - College */}
        <div className="qualification-card college">
          <div className="icon">
            <FaUniversity />
          </div>
          <div className="details">
            <h3>Coimbatore Institute of Technology (CIT)</h3>
            <h5>Integrated Masters At Decision And Computing Sciences</h5>
            <p><strong>Years:</strong> 2022-Present</p>
            <p><strong>Current CGPA:</strong> 8.14</p>
          </div>
        </div>
      </div>
      <p className="qualifications-footer">
        My academic journey reflects my dedication to learning, leadership, and achieving excellence in academics and extracurricular activities.
      </p>
    </div>
  );
};

export default Qualifications;
