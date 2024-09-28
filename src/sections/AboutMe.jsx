// src/sections/AboutMe/AboutMe.jsx
import React from 'react';
import avatar from '../assets/images/avatar.jpg';
import { FaReact, FaNodeJs, FaAws, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiPostgresql, SiNetlify, SiRender } from 'react-icons/si';

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-accent to-gray-100 py-16 px-4 flex flex-col items-center md:flex-row md:items-center md:justify-center">
      {/* Avatar */}
      <img
        src={avatar}
        alt="Developer Avatar"
        className="w-80 h-80 rounded-full border-4 border-primary object-cover shadow-lg mb-8 md:mb-0 md:mr-12"
      />

      {/* Content */}
      <div className="md:ml-12 max-w-2xl text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
        <p className="text-text mb-6">
          Hello! I'm Pritam Sur, a dedicated web developer with a passion for creating dynamic and responsive web applications. With a strong foundation in JavaScript and React, I specialize in building user-centric solutions that are both functional and aesthetically pleasing.
        </p>

        {/* Skills Highlights */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <FaReact className="text-blue-400 hover:text-blue-600 transition-colors duration-300" size={40} />
              <span className="mt-2 text-text">React</span>
              <p className="text-sm text-gray-600 mt-1">Building dynamic user interfaces and managing state effectively.</p>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript className="text-yellow-500 hover:text-yellow-700 transition-colors duration-300" size={40} />
              <span className="mt-2 text-text">JavaScript</span>
              <p className="text-sm text-gray-600 mt-1">Skilled in JavaScript ES6+ for interactive web experiences.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-green-500 hover:text-green-700 transition-colors duration-300" size={40} />
              <span className="mt-2 text-text">Node.js</span>
              <p className="text-sm text-gray-600 mt-1">Developing scalable server-side applications with Node.js.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaAws className="text-orange-500 hover:text-orange-700 transition-colors duration-300" size={40} />
              <span className="mt-2 text-text">AWS</span>
              <p className="text-sm text-gray-600 mt-1">Deploying and managing applications using AWS services.</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-green-600 hover:text-green-800 transition-colors duration-300" size={40} />
              <span className="mt-2 text-text">MongoDB</span>
              <p className="text-sm text-gray-600 mt-1">Implementing NoSQL databases for flexible data storage.</p>
            </div>
            <div className="flex flex-col items-center">
              <SiPostgresql className="text-blue-600 hover:text-blue-800 transition-colors duration-300" size={40} />
              <span className="mt-2 text-text">PostgreSQL</span>
              <p className="text-sm text-gray-600 mt-1">Managing relational databases with PostgreSQL for data integrity.</p>
            </div>
            {/* Additional Skills */}
            <div className="flex flex-col items-center">
              <SiNetlify className="text-purple-500 hover:text-purple-700 transition-colors duration-300" size={40} />
              <span className="mt-2 text-text">Netlify</span>
              <p className="text-sm text-gray-600 mt-1">Deploying static and dynamic websites with seamless CI/CD pipelines.</p>
            </div>
            <div className="flex flex-col items-center">
              <SiRender className="text-blue-500 hover:text-blue-700 transition-colors duration-300" size={40} />
              <span className="mt-2 text-text">Render</span>
              <p className="text-sm text-gray-600 mt-1">Hosting and managing web services with Render for continuous deployment.</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">Certifications</h3>
          <ul className="list-disc list-inside text-text">
            <li>Data Science Certification, University of Waterloo</li>
          </ul>
        </div>

        {/* Personal Interests */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">Personal Interests</h3>
          <p className="text-text">
            Outside of coding, I enjoy biking, photography, and exploring new technologies. I believe in continuous learning and love tackling new challenges that push my boundaries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;