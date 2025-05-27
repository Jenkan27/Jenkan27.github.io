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
      <button onClick={() => scrollToSection('div1')}>Div 1</button>
      <button onClick={() => scrollToSection('div2')}>Div 2</button>
      <button onClick={() => scrollToSection('div3')}>Div 3</button>
      <button onClick={() => scrollToSection('div4')}>Div 4</button>
    </div>
  );
};

export default Navbar;
