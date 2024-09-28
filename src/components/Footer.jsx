import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-accent p-md text-center">
      <div className="flex justify-center gap-sm mb-xs">
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-secondary transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-secondary transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-secondary transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;