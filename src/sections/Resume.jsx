import React from 'react';
import './Resume.css';
import resume from '../assets/resume.pdf'; // Ensure resume.pdf is in the src/assets/ directory

const proficiencies = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'HTML5',
  'CSS3',
  'Git',
  'TypeScript',
  'Redux',
  // Add more proficiencies as needed
];

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href={resume} download className="download-resume">
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul className="proficiencies">
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;