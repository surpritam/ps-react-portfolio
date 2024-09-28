import React from 'react';
import avatar from '../assets/images/avatar.jpg';

const AboutMe = () => {
  return (
    <section className="bg-accent p-lg flex flex-col items-center md:flex-row md:items-start md:justify-center">
      <img src={avatar} alt="Developer Avatar" className="w-36 h-36 rounded-full border-4 border-primary object-cover" />
      <div className="md:ml-lg max-w-lg text-center md:text-left mt-md md:mt-0">
        <h2 className="text-2xl font-bold text-primary mb-sm">About Me</h2>
        <p className="text-text">
          Hello! I'm a passionate web developer with experience in building dynamic and responsive web applications. I specialize in JavaScript, React, and modern web technologies. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;