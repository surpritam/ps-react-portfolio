import React from 'react';
import './AboutMe.css';
import avatar from '../assets/images/avatar.jpg'; // Adjust the path as needed

const AboutMe = () => {
  return (
    <section className="about-me">
      <img src={avatar} alt="Developer Avatar" className="avatar" />
      <div className="bio">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate web developer with experience in building dynamic and responsive web applications. I specialize in JavaScript, React, and modern web technologies. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;