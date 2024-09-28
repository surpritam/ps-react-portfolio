import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-primary text-accent p-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Pritam Sur</h1>
      <Navigation />
    </header>
  );
};

export default Header;