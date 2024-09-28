import React from 'react';
import Project from '../components/Project';
import project1Img from '../assets/images/project1.png';
import project2Img from '../assets/images/project2.png';
import project3Img from '../assets/images/project3.png';

const projects = [
  {
    title: 'Stock Info News feed',
    image: project1Img,
    deployedLink: 'https://surpritam.github.io/stock-up/',
    githubLink: 'https://surpritam.github.io/stock-up/',
  },
  {
    title: 'Travel Planning App',
    image: project2Img,
    deployedLink: 'https://fourtravel.onrender.com/',
    githubLink: 'https://github.com/lukemaines/4Travel/tree/main',
  },
  {
    title: 'Donate Your Way',
    image: project3Img,
    deployedLink: 'https://donateyourway.onrender.com/',
    githubLink: 'https://github.com/jerrietkuo/DonateYourWay/tree/main',
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