import React from 'react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#333',
      color: 'white',
      padding: '1rem',
      zIndex: 1000,
      display: 'flex',
      gap: '1rem'
    }}>
      <button onClick={() => scrollToSection('div1')}>Hem</button>
      <button onClick={() => scrollToSection('div2')}>Avsnitt 1</button>
      <button onClick={() => scrollToSection('div3')}>Avsnitt 2</button>
      <button onClick={() => scrollToSection('div4')}>Avsnitt 3</button>
    </div>
  );
};

export default Navbar;
