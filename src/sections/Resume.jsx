// src/sections/Resume/Resume.jsx
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaAws, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiNetlify, SiRender } from 'react-icons/si';

const proficiencies = {
  'Front-End': [
    {
      name: 'HTML5',
      icon: <FaHtml5 className="text-orange-500" size={40} />,
      description: 'Experienced in building semantic and accessible web pages using HTML5.',
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="text-blue-500" size={40} />,
      description: 'Proficient in styling websites with modern CSS techniques, including Flexbox and Grid.',
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript className="text-yellow-500" size={40} />,
      description: 'Skilled in JavaScript ES6+, enabling dynamic and interactive user experiences.',
    },
    {
      name: 'React',
      icon: <FaReact className="text-blue-400" size={40} />,
      description: 'Developed responsive and high-performing SPAs using React and its ecosystem.',
    },
  ],
  'Back-End': [
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-green-500" size={40} />,
      description: 'Built scalable server-side applications with Node.js, ensuring efficient performance.',
    },
    {
      name: 'Express.js',
      icon: <SiExpress className="text-gray-700" size={40} />,
      description: 'Designed RESTful APIs using Express.js, facilitating seamless client-server communication.',
    },
  ],
  'Databases': [
    {
      name: 'MongoDB',
      icon: <SiMongodb className="text-green-600" size={40} />,
      description: 'Implemented NoSQL databases with MongoDB for flexible and scalable data storage.',
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className="text-blue-600" size={40} />,
      description: 'Managed relational databases using PostgreSQL, ensuring data integrity and performance.',
    },
  ],
  'Cloud & Deployment': [
    {
      name: 'AWS',
      icon: <FaAws className="text-yellow-600" size={40} />,
      description: 'Deployed and managed applications using AWS services, ensuring scalability and reliability.',
    },
    {
      name: 'GitHub Pages',
      icon: <FaGithub className="text-gray-800" size={40} />,
      description: 'Hosted static websites on GitHub Pages, leveraging its seamless integration with Git repositories.',
    },
    {
      name: 'Netlify',
      icon: <SiNetlify className="text-purple-500" size={40} />,
      description: 'Deployed dynamic and static websites on Netlify, utilizing its powerful CI/CD pipelines.',
    },
    {
      name: 'Render',
      icon: <SiRender className="text-blue-500" size={40} />,
      description: 'Hosted and managed web services on Render, ensuring continuous deployment and high availability.',
    },
  ],
  'Tools': [
    {
      name: 'Git',
      icon: <FaGitAlt className="text-red-500" size={40} />,
      description: 'Utilized Git for version control, enabling efficient collaboration and code management.',
    },
    // Add more tools if desired
  ],
};

const Resume = () => {
  return (
    <section className="bg-background p-lg flex flex-col items-center">
      <h2 className="text-3xl font-bold text-primary mb-md">Resume</h2>

      {/* Download Resume Button */}
      <a
        href="https://drive.google.com/file/d/1gnC_UHUboioReyu8XmrCSjTpdHmERl-K/view?usp=sharing"
        download
        className="inline-block bg-secondary text-accent font-semibold py-2 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 mb-lg"
      >
        Download Resume
      </a>

      <div className="w-full max-w-6xl">
        {Object.keys(proficiencies).map((category, index) => (
          <div key={index} className="mb-lg">
            <h3 className="text-2xl font-semibold text-primary mb-sm">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md">
              {proficiencies[category].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-sm bg-accent rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-xs">{skill.icon}</div>
                  <h4 className="text-xl font-medium text-primary mb-xs">{skill.name}</h4>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;