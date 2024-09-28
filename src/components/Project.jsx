import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="bg-accent border border-gray-200 p-md rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={`${title} Screenshot`} className="w-full h-48 object-cover rounded-md mb-sm" />
      <h3 className="text-xl font-semibold text-primary mb-sm">{title}</h3>
      <div className="flex justify-center gap-sm">
        <a
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-accent font-bold py-1 px-3 rounded hover:bg-secondary transition-colors duration-300"
        >
          Live Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-accent font-bold py-1 px-3 rounded hover:bg-secondary transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;