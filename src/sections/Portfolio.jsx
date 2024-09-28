import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';
import project1Img from '../assets/images/project1.png';
import project2Img from '../assets/images/project2.png';
import project3Img from '../assets/images/project3.png';
import project4Img from '../assets/images/project4.png';
import project5Img from '../assets/images/project5.png';
import project6Img from '../assets/images/project6.png';

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
    deployedLink: 'https://deployed-app3.com',
    githubLink: 'https://github.com/username/project3',
  },
  {
    title: 'Project Four',
    image: project4Img,
    deployedLink: 'https://deployed-app4.com',
    githubLink: 'https://github.com/username/project4',
  },
  {
    title: 'Project Five',
    image: project5Img,
    deployedLink: 'https://deployed-app5.com',
    githubLink: 'https://github.com/username/project5',
  },
  {
    title: 'Project Six',
    image: project6Img,
    deployedLink: 'https://deployed-app6.com',
    githubLink: 'https://github.com/username/project6',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
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