import React from 'react';
import '../css/Navbar.css';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  return (
    <div className="navbar">
      <button onClick={() => scrollToSection('div1')}>Hem</button>
      <button onClick={() => scrollToSection('div2')}>Avsnitt 1</button>
      <button onClick={() => scrollToSection('div3')}>Avsnitt 2</button>
      <button onClick={() => scrollToSection('div4')}>Avsnitt 3</button>
    </div>
  );
};

export default Navbar;