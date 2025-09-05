import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import '../css/Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <FaHtml5 size={80} />
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <FaCss3Alt size={80} />
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <FaJs size={80} />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <FaReact size={80} />
          <p>React</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
