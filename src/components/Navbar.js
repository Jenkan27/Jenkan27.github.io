import React, { useEffect, useState, useRef } from 'react';
import '../css/Navbar.css';
import Button from '@mui/material/Button';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { scrollToSection } from '../utils/scrollUtils';


const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/jens-holm-240ba5283/" target="_blank" rel="noopener noreferrer" title="https://www.linkedin.com/in/jens-holm-240ba5283/">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/Jenkan27" target="_blank" rel="noopener noreferrer" title="https://github.com/Jenkan27">
        <FaGithubSquare size={24} />
      </a>
      <a href="mailto:holmjens84@gmail.com" title="holmjens84@gmail.com">
        <ImMail size={24} />
      </a>
    </div>
  );
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
        threshold: 0.6,
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
        <div className='SL'>
        <SocialLinks />
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
              {['Hem', 'Bilförsäljning', 'Utbildning', 'Om Hemsidan'][index]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
