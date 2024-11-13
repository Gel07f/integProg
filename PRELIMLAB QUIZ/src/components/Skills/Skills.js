import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        <div className="skill-item">
          <h3>JavaScript</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <h3>React</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <h3>Web Design</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <h3>UI UX</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
