import React, { useEffect, useState, useRef } from 'react';
import '../css/Navbar.css';
import Button from '@mui/material/Button';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const sections = ['div1', 'div2', 'div3', 'div4'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            // Clear any existing timeout
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }

            // Set a new timeout to delay updating state
            timeoutRef.current = setTimeout(() => {
              setActiveSection(entry.target.id);
            }, 300); // 0.3 second delay

            break;
          }
        }
      },
      {
        threshold: 0.9,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-inner">
        <div className='name'>
          <p>Jens Holm</p>
        </div>
        <div className="button-group">
          {sections.map((id, index) => (
            <Button
              style={{
              border: activeSection === id ? '1px solid rgba(255, 255, 255, 0.68)' : '1px solid transparent',
              borderRadius: '2px',
              padding: '2px 6px',
              boxSizing: 'border-box',
              }}
              color={'black'}
              key={id}
              variant={activeSection === id ? 'outlined' : 'text'}
              onClick={() => scrollToSection(id)}
            >
              {['Hem', 'Avsnitt 1', 'Avsnitt 2', 'Avsnitt 3'][index]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
