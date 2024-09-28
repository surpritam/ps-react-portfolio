import React from 'react';
import resume from '../assets/resume.pdf';

const proficiencies = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'HTML5',
  'CSS3',
  'Git',
];

const Resume = () => {
  return (
    <section className="bg-background p-lg text-center">
      <a
        href={resume}
        download
        className="inline-block bg-secondary text-accent font-bold py-2 px-6 rounded hover:bg-red-700 transition-colors duration-300 mb-md"
      >
        Download Resume
      </a>
      <h3 className="text-xl font-semibold text-primary mb-sm">Proficiencies</h3>
      <ul className="flex flex-wrap justify-center gap-sm">
        {proficiencies.map((skill, index) => (
          <li
            key={index}
            className="bg-primary text-accent px-3 py-1 rounded-full text-sm font-semibold"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;