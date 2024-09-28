import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;