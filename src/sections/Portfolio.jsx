import React from 'react';
import Project from '../components/Project';
import project1Img from '../assets/images/project1.png';
import project2Img from '../assets/images/project2.png';
import project3Img from '../assets/images/project3.png';

const projects = [
  {
    title: 'Project One',
    image: project1Img,
    deployedLink: 'https://deployed-app1.com',
    githubLink: 'https://github.com/username/project1',
  },
  {
    title: 'Project Two',
    image: project2Img,
    deployedLink: 'https://deployed-app2.com',
    githubLink: 'https://github.com/username/project2',
  },
  {
    title: 'Project Three',
    image: project3Img,
    deployedLink: 'https://deployed-app1.com',
    githubLink: 'https://github.com/username/project1',
  }
];

const Portfolio = () => {
  return (
    <section className="bg-background p-lg">
      <h2 className="text-2xl font-bold text-primary text-center mb-md">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
        {projects.map((proj, index) => (
          <Project
            key={index}
            title={proj.title}
            image={proj.image}
            deployedLink={proj.deployedLink}
            githubLink={proj.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;