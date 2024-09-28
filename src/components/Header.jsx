import React from 'react';
import Navigation from './Navigation';
import './Header.css'; // Import corresponding CSS

const Header = () => {
  return (
    <header className="header">
      <h1 className="developer-name">Pritam Sur</h1>
      <Navigation />
    </header>
  );
};

export default Header;